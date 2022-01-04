"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityhubInsight = exports.SecurityhubInsightFiltersOutputReference = exports.securityhubInsightFiltersToTerraform = exports.securityhubInsightFiltersWorkflowStatusToTerraform = exports.securityhubInsightFiltersVerificationStateToTerraform = exports.securityhubInsightFiltersUserDefinedValuesToTerraform = exports.securityhubInsightFiltersUpdatedAtToTerraform = exports.SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference = exports.securityhubInsightFiltersUpdatedAtDateRangeToTerraform = exports.securityhubInsightFiltersTypeToTerraform = exports.securityhubInsightFiltersTitleToTerraform = exports.securityhubInsightFiltersThreatIntelIndicatorValueToTerraform = exports.securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform = exports.securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform = exports.securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform = exports.securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform = exports.SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference = exports.securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform = exports.securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform = exports.securityhubInsightFiltersSourceUrlToTerraform = exports.securityhubInsightFiltersSeverityLabelToTerraform = exports.securityhubInsightFiltersResourceTypeToTerraform = exports.securityhubInsightFiltersResourceTagsToTerraform = exports.securityhubInsightFiltersResourceRegionToTerraform = exports.securityhubInsightFiltersResourcePartitionToTerraform = exports.securityhubInsightFiltersResourceIdToTerraform = exports.securityhubInsightFiltersResourceDetailsOtherToTerraform = exports.securityhubInsightFiltersResourceContainerNameToTerraform = exports.securityhubInsightFiltersResourceContainerLaunchedAtToTerraform = exports.SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference = exports.securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform = exports.securityhubInsightFiltersResourceContainerImageNameToTerraform = exports.securityhubInsightFiltersResourceContainerImageIdToTerraform = exports.securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform = exports.securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform = exports.securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform = exports.securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform = exports.securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform = exports.SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference = exports.securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform = exports.SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference = exports.securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform = exports.securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform = exports.securityhubInsightFiltersRelatedFindingsProductArnToTerraform = exports.securityhubInsightFiltersRelatedFindingsIdToTerraform = exports.securityhubInsightFiltersRecordStateToTerraform = exports.securityhubInsightFiltersRecommendationTextToTerraform = exports.securityhubInsightFiltersProductNameToTerraform = exports.securityhubInsightFiltersProductFieldsToTerraform = exports.securityhubInsightFiltersProductArnToTerraform = exports.securityhubInsightFiltersProcessTerminatedAtToTerraform = exports.SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference = exports.securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform = exports.securityhubInsightFiltersProcessPidToTerraform = exports.securityhubInsightFiltersProcessPathToTerraform = exports.securityhubInsightFiltersProcessParentPidToTerraform = exports.securityhubInsightFiltersProcessNameToTerraform = exports.securityhubInsightFiltersProcessLaunchedAtToTerraform = exports.SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference = exports.securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform = exports.securityhubInsightFiltersNoteUpdatedByToTerraform = exports.securityhubInsightFiltersNoteUpdatedAtToTerraform = exports.SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference = exports.securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform = exports.securityhubInsightFiltersNoteTextToTerraform = exports.securityhubInsightFiltersNetworkSourcePortToTerraform = exports.securityhubInsightFiltersNetworkSourceMacToTerraform = exports.securityhubInsightFiltersNetworkSourceIpv6ToTerraform = exports.securityhubInsightFiltersNetworkSourceIpv4ToTerraform = exports.securityhubInsightFiltersNetworkSourceDomainToTerraform = exports.securityhubInsightFiltersNetworkProtocolToTerraform = exports.securityhubInsightFiltersNetworkDirectionToTerraform = exports.securityhubInsightFiltersNetworkDestinationPortToTerraform = exports.securityhubInsightFiltersNetworkDestinationIpv6ToTerraform = exports.securityhubInsightFiltersNetworkDestinationIpv4ToTerraform = exports.securityhubInsightFiltersNetworkDestinationDomainToTerraform = exports.securityhubInsightFiltersMalwareTypeToTerraform = exports.securityhubInsightFiltersMalwareStateToTerraform = exports.securityhubInsightFiltersMalwarePathToTerraform = exports.securityhubInsightFiltersMalwareNameToTerraform = exports.securityhubInsightFiltersLastObservedAtToTerraform = exports.SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference = exports.securityhubInsightFiltersLastObservedAtDateRangeToTerraform = exports.securityhubInsightFiltersKeywordToTerraform = exports.securityhubInsightFiltersIdToTerraform = exports.securityhubInsightFiltersGeneratorIdToTerraform = exports.securityhubInsightFiltersFirstObservedAtToTerraform = exports.SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference = exports.securityhubInsightFiltersFirstObservedAtDateRangeToTerraform = exports.securityhubInsightFiltersFindingProviderFieldsTypesToTerraform = exports.securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform = exports.securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform = exports.securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform = exports.securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform = exports.securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform = exports.securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform = exports.securityhubInsightFiltersDescriptionToTerraform = exports.securityhubInsightFiltersCriticalityToTerraform = exports.securityhubInsightFiltersCreatedAtToTerraform = exports.SecurityhubInsightFiltersCreatedAtDateRangeOutputReference = exports.securityhubInsightFiltersCreatedAtDateRangeToTerraform = exports.securityhubInsightFiltersConfidenceToTerraform = exports.securityhubInsightFiltersComplianceStatusToTerraform = exports.securityhubInsightFiltersCompanyNameToTerraform = exports.securityhubInsightFiltersAwsAccountIdToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function securityhubInsightFiltersAwsAccountIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersAwsAccountIdToTerraform = securityhubInsightFiltersAwsAccountIdToTerraform;
function securityhubInsightFiltersCompanyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersCompanyNameToTerraform = securityhubInsightFiltersCompanyNameToTerraform;
function securityhubInsightFiltersComplianceStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersComplianceStatusToTerraform = securityhubInsightFiltersComplianceStatusToTerraform;
function securityhubInsightFiltersConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
exports.securityhubInsightFiltersConfidenceToTerraform = securityhubInsightFiltersConfidenceToTerraform;
function securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersCreatedAtDateRangeToTerraform = securityhubInsightFiltersCreatedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersCreatedAtDateRangeOutputReference = SecurityhubInsightFiltersCreatedAtDateRangeOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersCreatedAtDateRangeOutputReference[_a] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersCreatedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersCreatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersCreatedAtToTerraform = securityhubInsightFiltersCreatedAtToTerraform;
function securityhubInsightFiltersCriticalityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
exports.securityhubInsightFiltersCriticalityToTerraform = securityhubInsightFiltersCriticalityToTerraform;
function securityhubInsightFiltersDescriptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersDescriptionToTerraform = securityhubInsightFiltersDescriptionToTerraform;
function securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
exports.securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform = securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform;
function securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
exports.securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform = securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform;
function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform = securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform;
function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform = securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform;
function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform = securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform;
function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform = securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform;
function securityhubInsightFiltersFindingProviderFieldsTypesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersFindingProviderFieldsTypesToTerraform = securityhubInsightFiltersFindingProviderFieldsTypesToTerraform;
function securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersFirstObservedAtDateRangeToTerraform = securityhubInsightFiltersFirstObservedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference = SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference[_b] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersFirstObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersFirstObservedAtToTerraform = securityhubInsightFiltersFirstObservedAtToTerraform;
function securityhubInsightFiltersGeneratorIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersGeneratorIdToTerraform = securityhubInsightFiltersGeneratorIdToTerraform;
function securityhubInsightFiltersIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersIdToTerraform = securityhubInsightFiltersIdToTerraform;
function securityhubInsightFiltersKeywordToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersKeywordToTerraform = securityhubInsightFiltersKeywordToTerraform;
function securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersLastObservedAtDateRangeToTerraform = securityhubInsightFiltersLastObservedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference = SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference[_c] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersLastObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersLastObservedAtToTerraform = securityhubInsightFiltersLastObservedAtToTerraform;
function securityhubInsightFiltersMalwareNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersMalwareNameToTerraform = securityhubInsightFiltersMalwareNameToTerraform;
function securityhubInsightFiltersMalwarePathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersMalwarePathToTerraform = securityhubInsightFiltersMalwarePathToTerraform;
function securityhubInsightFiltersMalwareStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersMalwareStateToTerraform = securityhubInsightFiltersMalwareStateToTerraform;
function securityhubInsightFiltersMalwareTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersMalwareTypeToTerraform = securityhubInsightFiltersMalwareTypeToTerraform;
function securityhubInsightFiltersNetworkDestinationDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersNetworkDestinationDomainToTerraform = securityhubInsightFiltersNetworkDestinationDomainToTerraform;
function securityhubInsightFiltersNetworkDestinationIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
exports.securityhubInsightFiltersNetworkDestinationIpv4ToTerraform = securityhubInsightFiltersNetworkDestinationIpv4ToTerraform;
function securityhubInsightFiltersNetworkDestinationIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
exports.securityhubInsightFiltersNetworkDestinationIpv6ToTerraform = securityhubInsightFiltersNetworkDestinationIpv6ToTerraform;
function securityhubInsightFiltersNetworkDestinationPortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
exports.securityhubInsightFiltersNetworkDestinationPortToTerraform = securityhubInsightFiltersNetworkDestinationPortToTerraform;
function securityhubInsightFiltersNetworkDirectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersNetworkDirectionToTerraform = securityhubInsightFiltersNetworkDirectionToTerraform;
function securityhubInsightFiltersNetworkProtocolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersNetworkProtocolToTerraform = securityhubInsightFiltersNetworkProtocolToTerraform;
function securityhubInsightFiltersNetworkSourceDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersNetworkSourceDomainToTerraform = securityhubInsightFiltersNetworkSourceDomainToTerraform;
function securityhubInsightFiltersNetworkSourceIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
exports.securityhubInsightFiltersNetworkSourceIpv4ToTerraform = securityhubInsightFiltersNetworkSourceIpv4ToTerraform;
function securityhubInsightFiltersNetworkSourceIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
exports.securityhubInsightFiltersNetworkSourceIpv6ToTerraform = securityhubInsightFiltersNetworkSourceIpv6ToTerraform;
function securityhubInsightFiltersNetworkSourceMacToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersNetworkSourceMacToTerraform = securityhubInsightFiltersNetworkSourceMacToTerraform;
function securityhubInsightFiltersNetworkSourcePortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
exports.securityhubInsightFiltersNetworkSourcePortToTerraform = securityhubInsightFiltersNetworkSourcePortToTerraform;
function securityhubInsightFiltersNoteTextToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersNoteTextToTerraform = securityhubInsightFiltersNoteTextToTerraform;
function securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform = securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference = SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference[_d] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersNoteUpdatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersNoteUpdatedAtToTerraform = securityhubInsightFiltersNoteUpdatedAtToTerraform;
function securityhubInsightFiltersNoteUpdatedByToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersNoteUpdatedByToTerraform = securityhubInsightFiltersNoteUpdatedByToTerraform;
function securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform = securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference = SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference[_e] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersProcessLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersProcessLaunchedAtToTerraform = securityhubInsightFiltersProcessLaunchedAtToTerraform;
function securityhubInsightFiltersProcessNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersProcessNameToTerraform = securityhubInsightFiltersProcessNameToTerraform;
function securityhubInsightFiltersProcessParentPidToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
exports.securityhubInsightFiltersProcessParentPidToTerraform = securityhubInsightFiltersProcessParentPidToTerraform;
function securityhubInsightFiltersProcessPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersProcessPathToTerraform = securityhubInsightFiltersProcessPathToTerraform;
function securityhubInsightFiltersProcessPidToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
exports.securityhubInsightFiltersProcessPidToTerraform = securityhubInsightFiltersProcessPidToTerraform;
function securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform = securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference = SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference[_f] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersProcessTerminatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersProcessTerminatedAtToTerraform = securityhubInsightFiltersProcessTerminatedAtToTerraform;
function securityhubInsightFiltersProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersProductArnToTerraform = securityhubInsightFiltersProductArnToTerraform;
function securityhubInsightFiltersProductFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersProductFieldsToTerraform = securityhubInsightFiltersProductFieldsToTerraform;
function securityhubInsightFiltersProductNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersProductNameToTerraform = securityhubInsightFiltersProductNameToTerraform;
function securityhubInsightFiltersRecommendationTextToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersRecommendationTextToTerraform = securityhubInsightFiltersRecommendationTextToTerraform;
function securityhubInsightFiltersRecordStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersRecordStateToTerraform = securityhubInsightFiltersRecordStateToTerraform;
function securityhubInsightFiltersRelatedFindingsIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersRelatedFindingsIdToTerraform = securityhubInsightFiltersRelatedFindingsIdToTerraform;
function securityhubInsightFiltersRelatedFindingsProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersRelatedFindingsProductArnToTerraform = securityhubInsightFiltersRelatedFindingsProductArnToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference = SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference[_g] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform;
function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform = securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform;
function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform = securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference = SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference[_h] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform = securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform;
function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform = securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform;
function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform = securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform;
function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform = securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform;
function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform = securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform;
function securityhubInsightFiltersResourceContainerImageIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceContainerImageIdToTerraform = securityhubInsightFiltersResourceContainerImageIdToTerraform;
function securityhubInsightFiltersResourceContainerImageNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceContainerImageNameToTerraform = securityhubInsightFiltersResourceContainerImageNameToTerraform;
function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform = securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference = SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference;
_j = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference[_j] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersResourceContainerLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersResourceContainerLaunchedAtToTerraform = securityhubInsightFiltersResourceContainerLaunchedAtToTerraform;
function securityhubInsightFiltersResourceContainerNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceContainerNameToTerraform = securityhubInsightFiltersResourceContainerNameToTerraform;
function securityhubInsightFiltersResourceDetailsOtherToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceDetailsOtherToTerraform = securityhubInsightFiltersResourceDetailsOtherToTerraform;
function securityhubInsightFiltersResourceIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceIdToTerraform = securityhubInsightFiltersResourceIdToTerraform;
function securityhubInsightFiltersResourcePartitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourcePartitionToTerraform = securityhubInsightFiltersResourcePartitionToTerraform;
function securityhubInsightFiltersResourceRegionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceRegionToTerraform = securityhubInsightFiltersResourceRegionToTerraform;
function securityhubInsightFiltersResourceTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceTagsToTerraform = securityhubInsightFiltersResourceTagsToTerraform;
function securityhubInsightFiltersResourceTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersResourceTypeToTerraform = securityhubInsightFiltersResourceTypeToTerraform;
function securityhubInsightFiltersSeverityLabelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersSeverityLabelToTerraform = securityhubInsightFiltersSeverityLabelToTerraform;
function securityhubInsightFiltersSourceUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersSourceUrlToTerraform = securityhubInsightFiltersSourceUrlToTerraform;
function securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform = securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform;
function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform = securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference = SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference;
_k = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference[_k] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform = securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform;
function securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform = securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform;
function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform = securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform;
function securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform = securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform;
function securityhubInsightFiltersThreatIntelIndicatorValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersThreatIntelIndicatorValueToTerraform = securityhubInsightFiltersThreatIntelIndicatorValueToTerraform;
function securityhubInsightFiltersTitleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersTitleToTerraform = securityhubInsightFiltersTitleToTerraform;
function securityhubInsightFiltersTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersTypeToTerraform = securityhubInsightFiltersTypeToTerraform;
function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersUpdatedAtDateRangeToTerraform = securityhubInsightFiltersUpdatedAtDateRangeToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference = SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference;
_l = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference[_l] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference", version: "3.0.1" };
function securityhubInsightFiltersUpdatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct.dateRange),
    };
}
exports.securityhubInsightFiltersUpdatedAtToTerraform = securityhubInsightFiltersUpdatedAtToTerraform;
function securityhubInsightFiltersUserDefinedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersUserDefinedValuesToTerraform = securityhubInsightFiltersUserDefinedValuesToTerraform;
function securityhubInsightFiltersVerificationStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersVerificationStateToTerraform = securityhubInsightFiltersVerificationStateToTerraform;
function securityhubInsightFiltersWorkflowStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.securityhubInsightFiltersWorkflowStatusToTerraform = securityhubInsightFiltersWorkflowStatusToTerraform;
function securityhubInsightFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_account_id: cdktf.listMapper(securityhubInsightFiltersAwsAccountIdToTerraform)(struct.awsAccountId),
        company_name: cdktf.listMapper(securityhubInsightFiltersCompanyNameToTerraform)(struct.companyName),
        compliance_status: cdktf.listMapper(securityhubInsightFiltersComplianceStatusToTerraform)(struct.complianceStatus),
        confidence: cdktf.listMapper(securityhubInsightFiltersConfidenceToTerraform)(struct.confidence),
        created_at: cdktf.listMapper(securityhubInsightFiltersCreatedAtToTerraform)(struct.createdAt),
        criticality: cdktf.listMapper(securityhubInsightFiltersCriticalityToTerraform)(struct.criticality),
        description: cdktf.listMapper(securityhubInsightFiltersDescriptionToTerraform)(struct.description),
        finding_provider_fields_confidence: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform)(struct.findingProviderFieldsConfidence),
        finding_provider_fields_criticality: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform)(struct.findingProviderFieldsCriticality),
        finding_provider_fields_related_findings_id: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform)(struct.findingProviderFieldsRelatedFindingsId),
        finding_provider_fields_related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform)(struct.findingProviderFieldsRelatedFindingsProductArn),
        finding_provider_fields_severity_label: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform)(struct.findingProviderFieldsSeverityLabel),
        finding_provider_fields_severity_original: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform)(struct.findingProviderFieldsSeverityOriginal),
        finding_provider_fields_types: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsTypesToTerraform)(struct.findingProviderFieldsTypes),
        first_observed_at: cdktf.listMapper(securityhubInsightFiltersFirstObservedAtToTerraform)(struct.firstObservedAt),
        generator_id: cdktf.listMapper(securityhubInsightFiltersGeneratorIdToTerraform)(struct.generatorId),
        id: cdktf.listMapper(securityhubInsightFiltersIdToTerraform)(struct.id),
        keyword: cdktf.listMapper(securityhubInsightFiltersKeywordToTerraform)(struct.keyword),
        last_observed_at: cdktf.listMapper(securityhubInsightFiltersLastObservedAtToTerraform)(struct.lastObservedAt),
        malware_name: cdktf.listMapper(securityhubInsightFiltersMalwareNameToTerraform)(struct.malwareName),
        malware_path: cdktf.listMapper(securityhubInsightFiltersMalwarePathToTerraform)(struct.malwarePath),
        malware_state: cdktf.listMapper(securityhubInsightFiltersMalwareStateToTerraform)(struct.malwareState),
        malware_type: cdktf.listMapper(securityhubInsightFiltersMalwareTypeToTerraform)(struct.malwareType),
        network_destination_domain: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationDomainToTerraform)(struct.networkDestinationDomain),
        network_destination_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv4ToTerraform)(struct.networkDestinationIpv4),
        network_destination_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv6ToTerraform)(struct.networkDestinationIpv6),
        network_destination_port: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationPortToTerraform)(struct.networkDestinationPort),
        network_direction: cdktf.listMapper(securityhubInsightFiltersNetworkDirectionToTerraform)(struct.networkDirection),
        network_protocol: cdktf.listMapper(securityhubInsightFiltersNetworkProtocolToTerraform)(struct.networkProtocol),
        network_source_domain: cdktf.listMapper(securityhubInsightFiltersNetworkSourceDomainToTerraform)(struct.networkSourceDomain),
        network_source_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv4ToTerraform)(struct.networkSourceIpv4),
        network_source_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv6ToTerraform)(struct.networkSourceIpv6),
        network_source_mac: cdktf.listMapper(securityhubInsightFiltersNetworkSourceMacToTerraform)(struct.networkSourceMac),
        network_source_port: cdktf.listMapper(securityhubInsightFiltersNetworkSourcePortToTerraform)(struct.networkSourcePort),
        note_text: cdktf.listMapper(securityhubInsightFiltersNoteTextToTerraform)(struct.noteText),
        note_updated_at: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedAtToTerraform)(struct.noteUpdatedAt),
        note_updated_by: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedByToTerraform)(struct.noteUpdatedBy),
        process_launched_at: cdktf.listMapper(securityhubInsightFiltersProcessLaunchedAtToTerraform)(struct.processLaunchedAt),
        process_name: cdktf.listMapper(securityhubInsightFiltersProcessNameToTerraform)(struct.processName),
        process_parent_pid: cdktf.listMapper(securityhubInsightFiltersProcessParentPidToTerraform)(struct.processParentPid),
        process_path: cdktf.listMapper(securityhubInsightFiltersProcessPathToTerraform)(struct.processPath),
        process_pid: cdktf.listMapper(securityhubInsightFiltersProcessPidToTerraform)(struct.processPid),
        process_terminated_at: cdktf.listMapper(securityhubInsightFiltersProcessTerminatedAtToTerraform)(struct.processTerminatedAt),
        product_arn: cdktf.listMapper(securityhubInsightFiltersProductArnToTerraform)(struct.productArn),
        product_fields: cdktf.listMapper(securityhubInsightFiltersProductFieldsToTerraform)(struct.productFields),
        product_name: cdktf.listMapper(securityhubInsightFiltersProductNameToTerraform)(struct.productName),
        recommendation_text: cdktf.listMapper(securityhubInsightFiltersRecommendationTextToTerraform)(struct.recommendationText),
        record_state: cdktf.listMapper(securityhubInsightFiltersRecordStateToTerraform)(struct.recordState),
        related_findings_id: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsIdToTerraform)(struct.relatedFindingsId),
        related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsProductArnToTerraform)(struct.relatedFindingsProductArn),
        resource_aws_ec2_instance_iam_instance_profile_arn: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform)(struct.resourceAwsEc2InstanceIamInstanceProfileArn),
        resource_aws_ec2_instance_image_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform)(struct.resourceAwsEc2InstanceImageId),
        resource_aws_ec2_instance_ipv4_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform)(struct.resourceAwsEc2InstanceIpv4Addresses),
        resource_aws_ec2_instance_ipv6_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform)(struct.resourceAwsEc2InstanceIpv6Addresses),
        resource_aws_ec2_instance_key_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform)(struct.resourceAwsEc2InstanceKeyName),
        resource_aws_ec2_instance_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform)(struct.resourceAwsEc2InstanceLaunchedAt),
        resource_aws_ec2_instance_subnet_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform)(struct.resourceAwsEc2InstanceSubnetId),
        resource_aws_ec2_instance_type: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform)(struct.resourceAwsEc2InstanceType),
        resource_aws_ec2_instance_vpc_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform)(struct.resourceAwsEc2InstanceVpcId),
        resource_aws_iam_access_key_created_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform)(struct.resourceAwsIamAccessKeyCreatedAt),
        resource_aws_iam_access_key_status: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform)(struct.resourceAwsIamAccessKeyStatus),
        resource_aws_iam_access_key_user_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform)(struct.resourceAwsIamAccessKeyUserName),
        resource_aws_s3_bucket_owner_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform)(struct.resourceAwsS3BucketOwnerId),
        resource_aws_s3_bucket_owner_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform)(struct.resourceAwsS3BucketOwnerName),
        resource_container_image_id: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageIdToTerraform)(struct.resourceContainerImageId),
        resource_container_image_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageNameToTerraform)(struct.resourceContainerImageName),
        resource_container_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtToTerraform)(struct.resourceContainerLaunchedAt),
        resource_container_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerNameToTerraform)(struct.resourceContainerName),
        resource_details_other: cdktf.listMapper(securityhubInsightFiltersResourceDetailsOtherToTerraform)(struct.resourceDetailsOther),
        resource_id: cdktf.listMapper(securityhubInsightFiltersResourceIdToTerraform)(struct.resourceId),
        resource_partition: cdktf.listMapper(securityhubInsightFiltersResourcePartitionToTerraform)(struct.resourcePartition),
        resource_region: cdktf.listMapper(securityhubInsightFiltersResourceRegionToTerraform)(struct.resourceRegion),
        resource_tags: cdktf.listMapper(securityhubInsightFiltersResourceTagsToTerraform)(struct.resourceTags),
        resource_type: cdktf.listMapper(securityhubInsightFiltersResourceTypeToTerraform)(struct.resourceType),
        severity_label: cdktf.listMapper(securityhubInsightFiltersSeverityLabelToTerraform)(struct.severityLabel),
        source_url: cdktf.listMapper(securityhubInsightFiltersSourceUrlToTerraform)(struct.sourceUrl),
        threat_intel_indicator_category: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform)(struct.threatIntelIndicatorCategory),
        threat_intel_indicator_last_observed_at: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform)(struct.threatIntelIndicatorLastObservedAt),
        threat_intel_indicator_source: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform)(struct.threatIntelIndicatorSource),
        threat_intel_indicator_source_url: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform)(struct.threatIntelIndicatorSourceUrl),
        threat_intel_indicator_type: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform)(struct.threatIntelIndicatorType),
        threat_intel_indicator_value: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorValueToTerraform)(struct.threatIntelIndicatorValue),
        title: cdktf.listMapper(securityhubInsightFiltersTitleToTerraform)(struct.title),
        type: cdktf.listMapper(securityhubInsightFiltersTypeToTerraform)(struct.type),
        updated_at: cdktf.listMapper(securityhubInsightFiltersUpdatedAtToTerraform)(struct.updatedAt),
        user_defined_values: cdktf.listMapper(securityhubInsightFiltersUserDefinedValuesToTerraform)(struct.userDefinedValues),
        verification_state: cdktf.listMapper(securityhubInsightFiltersVerificationStateToTerraform)(struct.verificationState),
        workflow_status: cdktf.listMapper(securityhubInsightFiltersWorkflowStatusToTerraform)(struct.workflowStatus),
    };
}
exports.securityhubInsightFiltersToTerraform = securityhubInsightFiltersToTerraform;
/**
 * @stability stable
 */
class SecurityhubInsightFiltersOutputReference extends cdktf.ComplexObject {
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
        if (this._awsAccountId) {
            hasAnyValues = true;
            internalValueResult.awsAccountId = this._awsAccountId;
        }
        if (this._companyName) {
            hasAnyValues = true;
            internalValueResult.companyName = this._companyName;
        }
        if (this._complianceStatus) {
            hasAnyValues = true;
            internalValueResult.complianceStatus = this._complianceStatus;
        }
        if (this._confidence) {
            hasAnyValues = true;
            internalValueResult.confidence = this._confidence;
        }
        if (this._createdAt) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt;
        }
        if (this._criticality) {
            hasAnyValues = true;
            internalValueResult.criticality = this._criticality;
        }
        if (this._description) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._findingProviderFieldsConfidence) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsConfidence = this._findingProviderFieldsConfidence;
        }
        if (this._findingProviderFieldsCriticality) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsCriticality = this._findingProviderFieldsCriticality;
        }
        if (this._findingProviderFieldsRelatedFindingsId) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsRelatedFindingsId = this._findingProviderFieldsRelatedFindingsId;
        }
        if (this._findingProviderFieldsRelatedFindingsProductArn) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsRelatedFindingsProductArn = this._findingProviderFieldsRelatedFindingsProductArn;
        }
        if (this._findingProviderFieldsSeverityLabel) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsSeverityLabel = this._findingProviderFieldsSeverityLabel;
        }
        if (this._findingProviderFieldsSeverityOriginal) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsSeverityOriginal = this._findingProviderFieldsSeverityOriginal;
        }
        if (this._findingProviderFieldsTypes) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsTypes = this._findingProviderFieldsTypes;
        }
        if (this._firstObservedAt) {
            hasAnyValues = true;
            internalValueResult.firstObservedAt = this._firstObservedAt;
        }
        if (this._generatorId) {
            hasAnyValues = true;
            internalValueResult.generatorId = this._generatorId;
        }
        if (this._id) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._keyword) {
            hasAnyValues = true;
            internalValueResult.keyword = this._keyword;
        }
        if (this._lastObservedAt) {
            hasAnyValues = true;
            internalValueResult.lastObservedAt = this._lastObservedAt;
        }
        if (this._malwareName) {
            hasAnyValues = true;
            internalValueResult.malwareName = this._malwareName;
        }
        if (this._malwarePath) {
            hasAnyValues = true;
            internalValueResult.malwarePath = this._malwarePath;
        }
        if (this._malwareState) {
            hasAnyValues = true;
            internalValueResult.malwareState = this._malwareState;
        }
        if (this._malwareType) {
            hasAnyValues = true;
            internalValueResult.malwareType = this._malwareType;
        }
        if (this._networkDestinationDomain) {
            hasAnyValues = true;
            internalValueResult.networkDestinationDomain = this._networkDestinationDomain;
        }
        if (this._networkDestinationIpv4) {
            hasAnyValues = true;
            internalValueResult.networkDestinationIpv4 = this._networkDestinationIpv4;
        }
        if (this._networkDestinationIpv6) {
            hasAnyValues = true;
            internalValueResult.networkDestinationIpv6 = this._networkDestinationIpv6;
        }
        if (this._networkDestinationPort) {
            hasAnyValues = true;
            internalValueResult.networkDestinationPort = this._networkDestinationPort;
        }
        if (this._networkDirection) {
            hasAnyValues = true;
            internalValueResult.networkDirection = this._networkDirection;
        }
        if (this._networkProtocol) {
            hasAnyValues = true;
            internalValueResult.networkProtocol = this._networkProtocol;
        }
        if (this._networkSourceDomain) {
            hasAnyValues = true;
            internalValueResult.networkSourceDomain = this._networkSourceDomain;
        }
        if (this._networkSourceIpv4) {
            hasAnyValues = true;
            internalValueResult.networkSourceIpv4 = this._networkSourceIpv4;
        }
        if (this._networkSourceIpv6) {
            hasAnyValues = true;
            internalValueResult.networkSourceIpv6 = this._networkSourceIpv6;
        }
        if (this._networkSourceMac) {
            hasAnyValues = true;
            internalValueResult.networkSourceMac = this._networkSourceMac;
        }
        if (this._networkSourcePort) {
            hasAnyValues = true;
            internalValueResult.networkSourcePort = this._networkSourcePort;
        }
        if (this._noteText) {
            hasAnyValues = true;
            internalValueResult.noteText = this._noteText;
        }
        if (this._noteUpdatedAt) {
            hasAnyValues = true;
            internalValueResult.noteUpdatedAt = this._noteUpdatedAt;
        }
        if (this._noteUpdatedBy) {
            hasAnyValues = true;
            internalValueResult.noteUpdatedBy = this._noteUpdatedBy;
        }
        if (this._processLaunchedAt) {
            hasAnyValues = true;
            internalValueResult.processLaunchedAt = this._processLaunchedAt;
        }
        if (this._processName) {
            hasAnyValues = true;
            internalValueResult.processName = this._processName;
        }
        if (this._processParentPid) {
            hasAnyValues = true;
            internalValueResult.processParentPid = this._processParentPid;
        }
        if (this._processPath) {
            hasAnyValues = true;
            internalValueResult.processPath = this._processPath;
        }
        if (this._processPid) {
            hasAnyValues = true;
            internalValueResult.processPid = this._processPid;
        }
        if (this._processTerminatedAt) {
            hasAnyValues = true;
            internalValueResult.processTerminatedAt = this._processTerminatedAt;
        }
        if (this._productArn) {
            hasAnyValues = true;
            internalValueResult.productArn = this._productArn;
        }
        if (this._productFields) {
            hasAnyValues = true;
            internalValueResult.productFields = this._productFields;
        }
        if (this._productName) {
            hasAnyValues = true;
            internalValueResult.productName = this._productName;
        }
        if (this._recommendationText) {
            hasAnyValues = true;
            internalValueResult.recommendationText = this._recommendationText;
        }
        if (this._recordState) {
            hasAnyValues = true;
            internalValueResult.recordState = this._recordState;
        }
        if (this._relatedFindingsId) {
            hasAnyValues = true;
            internalValueResult.relatedFindingsId = this._relatedFindingsId;
        }
        if (this._relatedFindingsProductArn) {
            hasAnyValues = true;
            internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn;
        }
        if (this._resourceAwsEc2InstanceIamInstanceProfileArn) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIamInstanceProfileArn = this._resourceAwsEc2InstanceIamInstanceProfileArn;
        }
        if (this._resourceAwsEc2InstanceImageId) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceImageId = this._resourceAwsEc2InstanceImageId;
        }
        if (this._resourceAwsEc2InstanceIpv4Addresses) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIpv4Addresses = this._resourceAwsEc2InstanceIpv4Addresses;
        }
        if (this._resourceAwsEc2InstanceIpv6Addresses) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIpv6Addresses = this._resourceAwsEc2InstanceIpv6Addresses;
        }
        if (this._resourceAwsEc2InstanceKeyName) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceKeyName = this._resourceAwsEc2InstanceKeyName;
        }
        if (this._resourceAwsEc2InstanceLaunchedAt) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceLaunchedAt = this._resourceAwsEc2InstanceLaunchedAt;
        }
        if (this._resourceAwsEc2InstanceSubnetId) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceSubnetId = this._resourceAwsEc2InstanceSubnetId;
        }
        if (this._resourceAwsEc2InstanceType) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceType = this._resourceAwsEc2InstanceType;
        }
        if (this._resourceAwsEc2InstanceVpcId) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceVpcId = this._resourceAwsEc2InstanceVpcId;
        }
        if (this._resourceAwsIamAccessKeyCreatedAt) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyCreatedAt = this._resourceAwsIamAccessKeyCreatedAt;
        }
        if (this._resourceAwsIamAccessKeyStatus) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyStatus = this._resourceAwsIamAccessKeyStatus;
        }
        if (this._resourceAwsIamAccessKeyUserName) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyUserName = this._resourceAwsIamAccessKeyUserName;
        }
        if (this._resourceAwsS3BucketOwnerId) {
            hasAnyValues = true;
            internalValueResult.resourceAwsS3BucketOwnerId = this._resourceAwsS3BucketOwnerId;
        }
        if (this._resourceAwsS3BucketOwnerName) {
            hasAnyValues = true;
            internalValueResult.resourceAwsS3BucketOwnerName = this._resourceAwsS3BucketOwnerName;
        }
        if (this._resourceContainerImageId) {
            hasAnyValues = true;
            internalValueResult.resourceContainerImageId = this._resourceContainerImageId;
        }
        if (this._resourceContainerImageName) {
            hasAnyValues = true;
            internalValueResult.resourceContainerImageName = this._resourceContainerImageName;
        }
        if (this._resourceContainerLaunchedAt) {
            hasAnyValues = true;
            internalValueResult.resourceContainerLaunchedAt = this._resourceContainerLaunchedAt;
        }
        if (this._resourceContainerName) {
            hasAnyValues = true;
            internalValueResult.resourceContainerName = this._resourceContainerName;
        }
        if (this._resourceDetailsOther) {
            hasAnyValues = true;
            internalValueResult.resourceDetailsOther = this._resourceDetailsOther;
        }
        if (this._resourceId) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._resourcePartition) {
            hasAnyValues = true;
            internalValueResult.resourcePartition = this._resourcePartition;
        }
        if (this._resourceRegion) {
            hasAnyValues = true;
            internalValueResult.resourceRegion = this._resourceRegion;
        }
        if (this._resourceTags) {
            hasAnyValues = true;
            internalValueResult.resourceTags = this._resourceTags;
        }
        if (this._resourceType) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._severityLabel) {
            hasAnyValues = true;
            internalValueResult.severityLabel = this._severityLabel;
        }
        if (this._sourceUrl) {
            hasAnyValues = true;
            internalValueResult.sourceUrl = this._sourceUrl;
        }
        if (this._threatIntelIndicatorCategory) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorCategory = this._threatIntelIndicatorCategory;
        }
        if (this._threatIntelIndicatorLastObservedAt) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorLastObservedAt = this._threatIntelIndicatorLastObservedAt;
        }
        if (this._threatIntelIndicatorSource) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorSource = this._threatIntelIndicatorSource;
        }
        if (this._threatIntelIndicatorSourceUrl) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorSourceUrl = this._threatIntelIndicatorSourceUrl;
        }
        if (this._threatIntelIndicatorType) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorType = this._threatIntelIndicatorType;
        }
        if (this._threatIntelIndicatorValue) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorValue = this._threatIntelIndicatorValue;
        }
        if (this._title) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._updatedAt) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt;
        }
        if (this._userDefinedValues) {
            hasAnyValues = true;
            internalValueResult.userDefinedValues = this._userDefinedValues;
        }
        if (this._verificationState) {
            hasAnyValues = true;
            internalValueResult.verificationState = this._verificationState;
        }
        if (this._workflowStatus) {
            hasAnyValues = true;
            internalValueResult.workflowStatus = this._workflowStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsAccountId = undefined;
            this._companyName = undefined;
            this._complianceStatus = undefined;
            this._confidence = undefined;
            this._createdAt = undefined;
            this._criticality = undefined;
            this._description = undefined;
            this._findingProviderFieldsConfidence = undefined;
            this._findingProviderFieldsCriticality = undefined;
            this._findingProviderFieldsRelatedFindingsId = undefined;
            this._findingProviderFieldsRelatedFindingsProductArn = undefined;
            this._findingProviderFieldsSeverityLabel = undefined;
            this._findingProviderFieldsSeverityOriginal = undefined;
            this._findingProviderFieldsTypes = undefined;
            this._firstObservedAt = undefined;
            this._generatorId = undefined;
            this._id = undefined;
            this._keyword = undefined;
            this._lastObservedAt = undefined;
            this._malwareName = undefined;
            this._malwarePath = undefined;
            this._malwareState = undefined;
            this._malwareType = undefined;
            this._networkDestinationDomain = undefined;
            this._networkDestinationIpv4 = undefined;
            this._networkDestinationIpv6 = undefined;
            this._networkDestinationPort = undefined;
            this._networkDirection = undefined;
            this._networkProtocol = undefined;
            this._networkSourceDomain = undefined;
            this._networkSourceIpv4 = undefined;
            this._networkSourceIpv6 = undefined;
            this._networkSourceMac = undefined;
            this._networkSourcePort = undefined;
            this._noteText = undefined;
            this._noteUpdatedAt = undefined;
            this._noteUpdatedBy = undefined;
            this._processLaunchedAt = undefined;
            this._processName = undefined;
            this._processParentPid = undefined;
            this._processPath = undefined;
            this._processPid = undefined;
            this._processTerminatedAt = undefined;
            this._productArn = undefined;
            this._productFields = undefined;
            this._productName = undefined;
            this._recommendationText = undefined;
            this._recordState = undefined;
            this._relatedFindingsId = undefined;
            this._relatedFindingsProductArn = undefined;
            this._resourceAwsEc2InstanceIamInstanceProfileArn = undefined;
            this._resourceAwsEc2InstanceImageId = undefined;
            this._resourceAwsEc2InstanceIpv4Addresses = undefined;
            this._resourceAwsEc2InstanceIpv6Addresses = undefined;
            this._resourceAwsEc2InstanceKeyName = undefined;
            this._resourceAwsEc2InstanceLaunchedAt = undefined;
            this._resourceAwsEc2InstanceSubnetId = undefined;
            this._resourceAwsEc2InstanceType = undefined;
            this._resourceAwsEc2InstanceVpcId = undefined;
            this._resourceAwsIamAccessKeyCreatedAt = undefined;
            this._resourceAwsIamAccessKeyStatus = undefined;
            this._resourceAwsIamAccessKeyUserName = undefined;
            this._resourceAwsS3BucketOwnerId = undefined;
            this._resourceAwsS3BucketOwnerName = undefined;
            this._resourceContainerImageId = undefined;
            this._resourceContainerImageName = undefined;
            this._resourceContainerLaunchedAt = undefined;
            this._resourceContainerName = undefined;
            this._resourceDetailsOther = undefined;
            this._resourceId = undefined;
            this._resourcePartition = undefined;
            this._resourceRegion = undefined;
            this._resourceTags = undefined;
            this._resourceType = undefined;
            this._severityLabel = undefined;
            this._sourceUrl = undefined;
            this._threatIntelIndicatorCategory = undefined;
            this._threatIntelIndicatorLastObservedAt = undefined;
            this._threatIntelIndicatorSource = undefined;
            this._threatIntelIndicatorSourceUrl = undefined;
            this._threatIntelIndicatorType = undefined;
            this._threatIntelIndicatorValue = undefined;
            this._title = undefined;
            this._type = undefined;
            this._updatedAt = undefined;
            this._userDefinedValues = undefined;
            this._verificationState = undefined;
            this._workflowStatus = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsAccountId = value.awsAccountId;
            this._companyName = value.companyName;
            this._complianceStatus = value.complianceStatus;
            this._confidence = value.confidence;
            this._createdAt = value.createdAt;
            this._criticality = value.criticality;
            this._description = value.description;
            this._findingProviderFieldsConfidence = value.findingProviderFieldsConfidence;
            this._findingProviderFieldsCriticality = value.findingProviderFieldsCriticality;
            this._findingProviderFieldsRelatedFindingsId = value.findingProviderFieldsRelatedFindingsId;
            this._findingProviderFieldsRelatedFindingsProductArn = value.findingProviderFieldsRelatedFindingsProductArn;
            this._findingProviderFieldsSeverityLabel = value.findingProviderFieldsSeverityLabel;
            this._findingProviderFieldsSeverityOriginal = value.findingProviderFieldsSeverityOriginal;
            this._findingProviderFieldsTypes = value.findingProviderFieldsTypes;
            this._firstObservedAt = value.firstObservedAt;
            this._generatorId = value.generatorId;
            this._id = value.id;
            this._keyword = value.keyword;
            this._lastObservedAt = value.lastObservedAt;
            this._malwareName = value.malwareName;
            this._malwarePath = value.malwarePath;
            this._malwareState = value.malwareState;
            this._malwareType = value.malwareType;
            this._networkDestinationDomain = value.networkDestinationDomain;
            this._networkDestinationIpv4 = value.networkDestinationIpv4;
            this._networkDestinationIpv6 = value.networkDestinationIpv6;
            this._networkDestinationPort = value.networkDestinationPort;
            this._networkDirection = value.networkDirection;
            this._networkProtocol = value.networkProtocol;
            this._networkSourceDomain = value.networkSourceDomain;
            this._networkSourceIpv4 = value.networkSourceIpv4;
            this._networkSourceIpv6 = value.networkSourceIpv6;
            this._networkSourceMac = value.networkSourceMac;
            this._networkSourcePort = value.networkSourcePort;
            this._noteText = value.noteText;
            this._noteUpdatedAt = value.noteUpdatedAt;
            this._noteUpdatedBy = value.noteUpdatedBy;
            this._processLaunchedAt = value.processLaunchedAt;
            this._processName = value.processName;
            this._processParentPid = value.processParentPid;
            this._processPath = value.processPath;
            this._processPid = value.processPid;
            this._processTerminatedAt = value.processTerminatedAt;
            this._productArn = value.productArn;
            this._productFields = value.productFields;
            this._productName = value.productName;
            this._recommendationText = value.recommendationText;
            this._recordState = value.recordState;
            this._relatedFindingsId = value.relatedFindingsId;
            this._relatedFindingsProductArn = value.relatedFindingsProductArn;
            this._resourceAwsEc2InstanceIamInstanceProfileArn = value.resourceAwsEc2InstanceIamInstanceProfileArn;
            this._resourceAwsEc2InstanceImageId = value.resourceAwsEc2InstanceImageId;
            this._resourceAwsEc2InstanceIpv4Addresses = value.resourceAwsEc2InstanceIpv4Addresses;
            this._resourceAwsEc2InstanceIpv6Addresses = value.resourceAwsEc2InstanceIpv6Addresses;
            this._resourceAwsEc2InstanceKeyName = value.resourceAwsEc2InstanceKeyName;
            this._resourceAwsEc2InstanceLaunchedAt = value.resourceAwsEc2InstanceLaunchedAt;
            this._resourceAwsEc2InstanceSubnetId = value.resourceAwsEc2InstanceSubnetId;
            this._resourceAwsEc2InstanceType = value.resourceAwsEc2InstanceType;
            this._resourceAwsEc2InstanceVpcId = value.resourceAwsEc2InstanceVpcId;
            this._resourceAwsIamAccessKeyCreatedAt = value.resourceAwsIamAccessKeyCreatedAt;
            this._resourceAwsIamAccessKeyStatus = value.resourceAwsIamAccessKeyStatus;
            this._resourceAwsIamAccessKeyUserName = value.resourceAwsIamAccessKeyUserName;
            this._resourceAwsS3BucketOwnerId = value.resourceAwsS3BucketOwnerId;
            this._resourceAwsS3BucketOwnerName = value.resourceAwsS3BucketOwnerName;
            this._resourceContainerImageId = value.resourceContainerImageId;
            this._resourceContainerImageName = value.resourceContainerImageName;
            this._resourceContainerLaunchedAt = value.resourceContainerLaunchedAt;
            this._resourceContainerName = value.resourceContainerName;
            this._resourceDetailsOther = value.resourceDetailsOther;
            this._resourceId = value.resourceId;
            this._resourcePartition = value.resourcePartition;
            this._resourceRegion = value.resourceRegion;
            this._resourceTags = value.resourceTags;
            this._resourceType = value.resourceType;
            this._severityLabel = value.severityLabel;
            this._sourceUrl = value.sourceUrl;
            this._threatIntelIndicatorCategory = value.threatIntelIndicatorCategory;
            this._threatIntelIndicatorLastObservedAt = value.threatIntelIndicatorLastObservedAt;
            this._threatIntelIndicatorSource = value.threatIntelIndicatorSource;
            this._threatIntelIndicatorSourceUrl = value.threatIntelIndicatorSourceUrl;
            this._threatIntelIndicatorType = value.threatIntelIndicatorType;
            this._threatIntelIndicatorValue = value.threatIntelIndicatorValue;
            this._title = value.title;
            this._type = value.type;
            this._updatedAt = value.updatedAt;
            this._userDefinedValues = value.userDefinedValues;
            this._verificationState = value.verificationState;
            this._workflowStatus = value.workflowStatus;
        }
    }
    /**
     * @stability stable
     */
    get awsAccountId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('aws_account_id');
    }
    /**
     * @stability stable
     */
    set awsAccountId(value) {
        this._awsAccountId = value;
    }
    /**
     * @stability stable
     */
    resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsAccountIdInput() {
        return this._awsAccountId;
    }
    /**
     * @stability stable
     */
    get companyName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('company_name');
    }
    /**
     * @stability stable
     */
    set companyName(value) {
        this._companyName = value;
    }
    /**
     * @stability stable
     */
    resetCompanyName() {
        this._companyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get companyNameInput() {
        return this._companyName;
    }
    /**
     * @stability stable
     */
    get complianceStatus() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('compliance_status');
    }
    /**
     * @stability stable
     */
    set complianceStatus(value) {
        this._complianceStatus = value;
    }
    /**
     * @stability stable
     */
    resetComplianceStatus() {
        this._complianceStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get complianceStatusInput() {
        return this._complianceStatus;
    }
    /**
     * @stability stable
     */
    get confidence() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('confidence');
    }
    /**
     * @stability stable
     */
    set confidence(value) {
        this._confidence = value;
    }
    /**
     * @stability stable
     */
    resetConfidence() {
        this._confidence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get confidenceInput() {
        return this._confidence;
    }
    /**
     * @stability stable
     */
    get createdAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('created_at');
    }
    /**
     * @stability stable
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     * @stability stable
     */
    resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createdAtInput() {
        return this._createdAt;
    }
    /**
     * @stability stable
     */
    get criticality() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('criticality');
    }
    /**
     * @stability stable
     */
    set criticality(value) {
        this._criticality = value;
    }
    /**
     * @stability stable
     */
    resetCriticality() {
        this._criticality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get criticalityInput() {
        return this._criticality;
    }
    /**
     * @stability stable
     */
    get description() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('description');
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
    get findingProviderFieldsConfidence() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_confidence');
    }
    /**
     * @stability stable
     */
    set findingProviderFieldsConfidence(value) {
        this._findingProviderFieldsConfidence = value;
    }
    /**
     * @stability stable
     */
    resetFindingProviderFieldsConfidence() {
        this._findingProviderFieldsConfidence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get findingProviderFieldsConfidenceInput() {
        return this._findingProviderFieldsConfidence;
    }
    /**
     * @stability stable
     */
    get findingProviderFieldsCriticality() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_criticality');
    }
    /**
     * @stability stable
     */
    set findingProviderFieldsCriticality(value) {
        this._findingProviderFieldsCriticality = value;
    }
    /**
     * @stability stable
     */
    resetFindingProviderFieldsCriticality() {
        this._findingProviderFieldsCriticality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get findingProviderFieldsCriticalityInput() {
        return this._findingProviderFieldsCriticality;
    }
    /**
     * @stability stable
     */
    get findingProviderFieldsRelatedFindingsId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_related_findings_id');
    }
    /**
     * @stability stable
     */
    set findingProviderFieldsRelatedFindingsId(value) {
        this._findingProviderFieldsRelatedFindingsId = value;
    }
    /**
     * @stability stable
     */
    resetFindingProviderFieldsRelatedFindingsId() {
        this._findingProviderFieldsRelatedFindingsId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get findingProviderFieldsRelatedFindingsIdInput() {
        return this._findingProviderFieldsRelatedFindingsId;
    }
    /**
     * @stability stable
     */
    get findingProviderFieldsRelatedFindingsProductArn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_related_findings_product_arn');
    }
    /**
     * @stability stable
     */
    set findingProviderFieldsRelatedFindingsProductArn(value) {
        this._findingProviderFieldsRelatedFindingsProductArn = value;
    }
    /**
     * @stability stable
     */
    resetFindingProviderFieldsRelatedFindingsProductArn() {
        this._findingProviderFieldsRelatedFindingsProductArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get findingProviderFieldsRelatedFindingsProductArnInput() {
        return this._findingProviderFieldsRelatedFindingsProductArn;
    }
    /**
     * @stability stable
     */
    get findingProviderFieldsSeverityLabel() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_severity_label');
    }
    /**
     * @stability stable
     */
    set findingProviderFieldsSeverityLabel(value) {
        this._findingProviderFieldsSeverityLabel = value;
    }
    /**
     * @stability stable
     */
    resetFindingProviderFieldsSeverityLabel() {
        this._findingProviderFieldsSeverityLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get findingProviderFieldsSeverityLabelInput() {
        return this._findingProviderFieldsSeverityLabel;
    }
    /**
     * @stability stable
     */
    get findingProviderFieldsSeverityOriginal() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_severity_original');
    }
    /**
     * @stability stable
     */
    set findingProviderFieldsSeverityOriginal(value) {
        this._findingProviderFieldsSeverityOriginal = value;
    }
    /**
     * @stability stable
     */
    resetFindingProviderFieldsSeverityOriginal() {
        this._findingProviderFieldsSeverityOriginal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get findingProviderFieldsSeverityOriginalInput() {
        return this._findingProviderFieldsSeverityOriginal;
    }
    /**
     * @stability stable
     */
    get findingProviderFieldsTypes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_types');
    }
    /**
     * @stability stable
     */
    set findingProviderFieldsTypes(value) {
        this._findingProviderFieldsTypes = value;
    }
    /**
     * @stability stable
     */
    resetFindingProviderFieldsTypes() {
        this._findingProviderFieldsTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get findingProviderFieldsTypesInput() {
        return this._findingProviderFieldsTypes;
    }
    /**
     * @stability stable
     */
    get firstObservedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('first_observed_at');
    }
    /**
     * @stability stable
     */
    set firstObservedAt(value) {
        this._firstObservedAt = value;
    }
    /**
     * @stability stable
     */
    resetFirstObservedAt() {
        this._firstObservedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get firstObservedAtInput() {
        return this._firstObservedAt;
    }
    /**
     * @stability stable
     */
    get generatorId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('generator_id');
    }
    /**
     * @stability stable
     */
    set generatorId(value) {
        this._generatorId = value;
    }
    /**
     * @stability stable
     */
    resetGeneratorId() {
        this._generatorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get generatorIdInput() {
        return this._generatorId;
    }
    /**
     * @stability stable
     */
    get id() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('id');
    }
    /**
     * @stability stable
     */
    set id(value) {
        this._id = value;
    }
    /**
     * @stability stable
     */
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idInput() {
        return this._id;
    }
    /**
     * @stability stable
     */
    get keyword() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('keyword');
    }
    /**
     * @stability stable
     */
    set keyword(value) {
        this._keyword = value;
    }
    /**
     * @stability stable
     */
    resetKeyword() {
        this._keyword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keywordInput() {
        return this._keyword;
    }
    /**
     * @stability stable
     */
    get lastObservedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('last_observed_at');
    }
    /**
     * @stability stable
     */
    set lastObservedAt(value) {
        this._lastObservedAt = value;
    }
    /**
     * @stability stable
     */
    resetLastObservedAt() {
        this._lastObservedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lastObservedAtInput() {
        return this._lastObservedAt;
    }
    /**
     * @stability stable
     */
    get malwareName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('malware_name');
    }
    /**
     * @stability stable
     */
    set malwareName(value) {
        this._malwareName = value;
    }
    /**
     * @stability stable
     */
    resetMalwareName() {
        this._malwareName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get malwareNameInput() {
        return this._malwareName;
    }
    /**
     * @stability stable
     */
    get malwarePath() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('malware_path');
    }
    /**
     * @stability stable
     */
    set malwarePath(value) {
        this._malwarePath = value;
    }
    /**
     * @stability stable
     */
    resetMalwarePath() {
        this._malwarePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get malwarePathInput() {
        return this._malwarePath;
    }
    /**
     * @stability stable
     */
    get malwareState() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('malware_state');
    }
    /**
     * @stability stable
     */
    set malwareState(value) {
        this._malwareState = value;
    }
    /**
     * @stability stable
     */
    resetMalwareState() {
        this._malwareState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get malwareStateInput() {
        return this._malwareState;
    }
    /**
     * @stability stable
     */
    get malwareType() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('malware_type');
    }
    /**
     * @stability stable
     */
    set malwareType(value) {
        this._malwareType = value;
    }
    /**
     * @stability stable
     */
    resetMalwareType() {
        this._malwareType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get malwareTypeInput() {
        return this._malwareType;
    }
    /**
     * @stability stable
     */
    get networkDestinationDomain() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_destination_domain');
    }
    /**
     * @stability stable
     */
    set networkDestinationDomain(value) {
        this._networkDestinationDomain = value;
    }
    /**
     * @stability stable
     */
    resetNetworkDestinationDomain() {
        this._networkDestinationDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkDestinationDomainInput() {
        return this._networkDestinationDomain;
    }
    /**
     * @stability stable
     */
    get networkDestinationIpv4() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_destination_ipv4');
    }
    /**
     * @stability stable
     */
    set networkDestinationIpv4(value) {
        this._networkDestinationIpv4 = value;
    }
    /**
     * @stability stable
     */
    resetNetworkDestinationIpv4() {
        this._networkDestinationIpv4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkDestinationIpv4Input() {
        return this._networkDestinationIpv4;
    }
    /**
     * @stability stable
     */
    get networkDestinationIpv6() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_destination_ipv6');
    }
    /**
     * @stability stable
     */
    set networkDestinationIpv6(value) {
        this._networkDestinationIpv6 = value;
    }
    /**
     * @stability stable
     */
    resetNetworkDestinationIpv6() {
        this._networkDestinationIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkDestinationIpv6Input() {
        return this._networkDestinationIpv6;
    }
    /**
     * @stability stable
     */
    get networkDestinationPort() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_destination_port');
    }
    /**
     * @stability stable
     */
    set networkDestinationPort(value) {
        this._networkDestinationPort = value;
    }
    /**
     * @stability stable
     */
    resetNetworkDestinationPort() {
        this._networkDestinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkDestinationPortInput() {
        return this._networkDestinationPort;
    }
    /**
     * @stability stable
     */
    get networkDirection() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_direction');
    }
    /**
     * @stability stable
     */
    set networkDirection(value) {
        this._networkDirection = value;
    }
    /**
     * @stability stable
     */
    resetNetworkDirection() {
        this._networkDirection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkDirectionInput() {
        return this._networkDirection;
    }
    /**
     * @stability stable
     */
    get networkProtocol() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_protocol');
    }
    /**
     * @stability stable
     */
    set networkProtocol(value) {
        this._networkProtocol = value;
    }
    /**
     * @stability stable
     */
    resetNetworkProtocol() {
        this._networkProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkProtocolInput() {
        return this._networkProtocol;
    }
    /**
     * @stability stable
     */
    get networkSourceDomain() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_domain');
    }
    /**
     * @stability stable
     */
    set networkSourceDomain(value) {
        this._networkSourceDomain = value;
    }
    /**
     * @stability stable
     */
    resetNetworkSourceDomain() {
        this._networkSourceDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkSourceDomainInput() {
        return this._networkSourceDomain;
    }
    /**
     * @stability stable
     */
    get networkSourceIpv4() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_ipv4');
    }
    /**
     * @stability stable
     */
    set networkSourceIpv4(value) {
        this._networkSourceIpv4 = value;
    }
    /**
     * @stability stable
     */
    resetNetworkSourceIpv4() {
        this._networkSourceIpv4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkSourceIpv4Input() {
        return this._networkSourceIpv4;
    }
    /**
     * @stability stable
     */
    get networkSourceIpv6() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_ipv6');
    }
    /**
     * @stability stable
     */
    set networkSourceIpv6(value) {
        this._networkSourceIpv6 = value;
    }
    /**
     * @stability stable
     */
    resetNetworkSourceIpv6() {
        this._networkSourceIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkSourceIpv6Input() {
        return this._networkSourceIpv6;
    }
    /**
     * @stability stable
     */
    get networkSourceMac() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_mac');
    }
    /**
     * @stability stable
     */
    set networkSourceMac(value) {
        this._networkSourceMac = value;
    }
    /**
     * @stability stable
     */
    resetNetworkSourceMac() {
        this._networkSourceMac = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkSourceMacInput() {
        return this._networkSourceMac;
    }
    /**
     * @stability stable
     */
    get networkSourcePort() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_port');
    }
    /**
     * @stability stable
     */
    set networkSourcePort(value) {
        this._networkSourcePort = value;
    }
    /**
     * @stability stable
     */
    resetNetworkSourcePort() {
        this._networkSourcePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkSourcePortInput() {
        return this._networkSourcePort;
    }
    /**
     * @stability stable
     */
    get noteText() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('note_text');
    }
    /**
     * @stability stable
     */
    set noteText(value) {
        this._noteText = value;
    }
    /**
     * @stability stable
     */
    resetNoteText() {
        this._noteText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get noteTextInput() {
        return this._noteText;
    }
    /**
     * @stability stable
     */
    get noteUpdatedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('note_updated_at');
    }
    /**
     * @stability stable
     */
    set noteUpdatedAt(value) {
        this._noteUpdatedAt = value;
    }
    /**
     * @stability stable
     */
    resetNoteUpdatedAt() {
        this._noteUpdatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get noteUpdatedAtInput() {
        return this._noteUpdatedAt;
    }
    /**
     * @stability stable
     */
    get noteUpdatedBy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('note_updated_by');
    }
    /**
     * @stability stable
     */
    set noteUpdatedBy(value) {
        this._noteUpdatedBy = value;
    }
    /**
     * @stability stable
     */
    resetNoteUpdatedBy() {
        this._noteUpdatedBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get noteUpdatedByInput() {
        return this._noteUpdatedBy;
    }
    /**
     * @stability stable
     */
    get processLaunchedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_launched_at');
    }
    /**
     * @stability stable
     */
    set processLaunchedAt(value) {
        this._processLaunchedAt = value;
    }
    /**
     * @stability stable
     */
    resetProcessLaunchedAt() {
        this._processLaunchedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processLaunchedAtInput() {
        return this._processLaunchedAt;
    }
    /**
     * @stability stable
     */
    get processName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_name');
    }
    /**
     * @stability stable
     */
    set processName(value) {
        this._processName = value;
    }
    /**
     * @stability stable
     */
    resetProcessName() {
        this._processName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processNameInput() {
        return this._processName;
    }
    /**
     * @stability stable
     */
    get processParentPid() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_parent_pid');
    }
    /**
     * @stability stable
     */
    set processParentPid(value) {
        this._processParentPid = value;
    }
    /**
     * @stability stable
     */
    resetProcessParentPid() {
        this._processParentPid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processParentPidInput() {
        return this._processParentPid;
    }
    /**
     * @stability stable
     */
    get processPath() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_path');
    }
    /**
     * @stability stable
     */
    set processPath(value) {
        this._processPath = value;
    }
    /**
     * @stability stable
     */
    resetProcessPath() {
        this._processPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processPathInput() {
        return this._processPath;
    }
    /**
     * @stability stable
     */
    get processPid() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_pid');
    }
    /**
     * @stability stable
     */
    set processPid(value) {
        this._processPid = value;
    }
    /**
     * @stability stable
     */
    resetProcessPid() {
        this._processPid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processPidInput() {
        return this._processPid;
    }
    /**
     * @stability stable
     */
    get processTerminatedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_terminated_at');
    }
    /**
     * @stability stable
     */
    set processTerminatedAt(value) {
        this._processTerminatedAt = value;
    }
    /**
     * @stability stable
     */
    resetProcessTerminatedAt() {
        this._processTerminatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processTerminatedAtInput() {
        return this._processTerminatedAt;
    }
    /**
     * @stability stable
     */
    get productArn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('product_arn');
    }
    /**
     * @stability stable
     */
    set productArn(value) {
        this._productArn = value;
    }
    /**
     * @stability stable
     */
    resetProductArn() {
        this._productArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get productArnInput() {
        return this._productArn;
    }
    /**
     * @stability stable
     */
    get productFields() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('product_fields');
    }
    /**
     * @stability stable
     */
    set productFields(value) {
        this._productFields = value;
    }
    /**
     * @stability stable
     */
    resetProductFields() {
        this._productFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get productFieldsInput() {
        return this._productFields;
    }
    /**
     * @stability stable
     */
    get productName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('product_name');
    }
    /**
     * @stability stable
     */
    set productName(value) {
        this._productName = value;
    }
    /**
     * @stability stable
     */
    resetProductName() {
        this._productName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get productNameInput() {
        return this._productName;
    }
    /**
     * @stability stable
     */
    get recommendationText() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('recommendation_text');
    }
    /**
     * @stability stable
     */
    set recommendationText(value) {
        this._recommendationText = value;
    }
    /**
     * @stability stable
     */
    resetRecommendationText() {
        this._recommendationText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recommendationTextInput() {
        return this._recommendationText;
    }
    /**
     * @stability stable
     */
    get recordState() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('record_state');
    }
    /**
     * @stability stable
     */
    set recordState(value) {
        this._recordState = value;
    }
    /**
     * @stability stable
     */
    resetRecordState() {
        this._recordState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordStateInput() {
        return this._recordState;
    }
    /**
     * @stability stable
     */
    get relatedFindingsId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('related_findings_id');
    }
    /**
     * @stability stable
     */
    set relatedFindingsId(value) {
        this._relatedFindingsId = value;
    }
    /**
     * @stability stable
     */
    resetRelatedFindingsId() {
        this._relatedFindingsId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get relatedFindingsIdInput() {
        return this._relatedFindingsId;
    }
    /**
     * @stability stable
     */
    get relatedFindingsProductArn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('related_findings_product_arn');
    }
    /**
     * @stability stable
     */
    set relatedFindingsProductArn(value) {
        this._relatedFindingsProductArn = value;
    }
    /**
     * @stability stable
     */
    resetRelatedFindingsProductArn() {
        this._relatedFindingsProductArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get relatedFindingsProductArnInput() {
        return this._relatedFindingsProductArn;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceIamInstanceProfileArn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_iam_instance_profile_arn');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceIamInstanceProfileArn(value) {
        this._resourceAwsEc2InstanceIamInstanceProfileArn = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceIamInstanceProfileArn() {
        this._resourceAwsEc2InstanceIamInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceIamInstanceProfileArnInput() {
        return this._resourceAwsEc2InstanceIamInstanceProfileArn;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceImageId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_image_id');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceImageId(value) {
        this._resourceAwsEc2InstanceImageId = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceImageId() {
        this._resourceAwsEc2InstanceImageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceImageIdInput() {
        return this._resourceAwsEc2InstanceImageId;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceIpv4Addresses() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_ipv4_addresses');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceIpv4Addresses(value) {
        this._resourceAwsEc2InstanceIpv4Addresses = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceIpv4Addresses() {
        this._resourceAwsEc2InstanceIpv4Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceIpv4AddressesInput() {
        return this._resourceAwsEc2InstanceIpv4Addresses;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceIpv6Addresses() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_ipv6_addresses');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceIpv6Addresses(value) {
        this._resourceAwsEc2InstanceIpv6Addresses = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceIpv6Addresses() {
        this._resourceAwsEc2InstanceIpv6Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceIpv6AddressesInput() {
        return this._resourceAwsEc2InstanceIpv6Addresses;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceKeyName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_key_name');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceKeyName(value) {
        this._resourceAwsEc2InstanceKeyName = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceKeyName() {
        this._resourceAwsEc2InstanceKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceKeyNameInput() {
        return this._resourceAwsEc2InstanceKeyName;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceLaunchedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_launched_at');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceLaunchedAt(value) {
        this._resourceAwsEc2InstanceLaunchedAt = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceLaunchedAt() {
        this._resourceAwsEc2InstanceLaunchedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceLaunchedAtInput() {
        return this._resourceAwsEc2InstanceLaunchedAt;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceSubnetId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_subnet_id');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceSubnetId(value) {
        this._resourceAwsEc2InstanceSubnetId = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceSubnetId() {
        this._resourceAwsEc2InstanceSubnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceSubnetIdInput() {
        return this._resourceAwsEc2InstanceSubnetId;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceType() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_type');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceType(value) {
        this._resourceAwsEc2InstanceType = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceType() {
        this._resourceAwsEc2InstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceTypeInput() {
        return this._resourceAwsEc2InstanceType;
    }
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceVpcId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_vpc_id');
    }
    /**
     * @stability stable
     */
    set resourceAwsEc2InstanceVpcId(value) {
        this._resourceAwsEc2InstanceVpcId = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsEc2InstanceVpcId() {
        this._resourceAwsEc2InstanceVpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsEc2InstanceVpcIdInput() {
        return this._resourceAwsEc2InstanceVpcId;
    }
    /**
     * @stability stable
     */
    get resourceAwsIamAccessKeyCreatedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_iam_access_key_created_at');
    }
    /**
     * @stability stable
     */
    set resourceAwsIamAccessKeyCreatedAt(value) {
        this._resourceAwsIamAccessKeyCreatedAt = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsIamAccessKeyCreatedAt() {
        this._resourceAwsIamAccessKeyCreatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsIamAccessKeyCreatedAtInput() {
        return this._resourceAwsIamAccessKeyCreatedAt;
    }
    /**
     * @stability stable
     */
    get resourceAwsIamAccessKeyStatus() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_iam_access_key_status');
    }
    /**
     * @stability stable
     */
    set resourceAwsIamAccessKeyStatus(value) {
        this._resourceAwsIamAccessKeyStatus = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsIamAccessKeyStatus() {
        this._resourceAwsIamAccessKeyStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsIamAccessKeyStatusInput() {
        return this._resourceAwsIamAccessKeyStatus;
    }
    /**
     * @stability stable
     */
    get resourceAwsIamAccessKeyUserName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_iam_access_key_user_name');
    }
    /**
     * @stability stable
     */
    set resourceAwsIamAccessKeyUserName(value) {
        this._resourceAwsIamAccessKeyUserName = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsIamAccessKeyUserName() {
        this._resourceAwsIamAccessKeyUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsIamAccessKeyUserNameInput() {
        return this._resourceAwsIamAccessKeyUserName;
    }
    /**
     * @stability stable
     */
    get resourceAwsS3BucketOwnerId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_s3_bucket_owner_id');
    }
    /**
     * @stability stable
     */
    set resourceAwsS3BucketOwnerId(value) {
        this._resourceAwsS3BucketOwnerId = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsS3BucketOwnerId() {
        this._resourceAwsS3BucketOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsS3BucketOwnerIdInput() {
        return this._resourceAwsS3BucketOwnerId;
    }
    /**
     * @stability stable
     */
    get resourceAwsS3BucketOwnerName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_s3_bucket_owner_name');
    }
    /**
     * @stability stable
     */
    set resourceAwsS3BucketOwnerName(value) {
        this._resourceAwsS3BucketOwnerName = value;
    }
    /**
     * @stability stable
     */
    resetResourceAwsS3BucketOwnerName() {
        this._resourceAwsS3BucketOwnerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceAwsS3BucketOwnerNameInput() {
        return this._resourceAwsS3BucketOwnerName;
    }
    /**
     * @stability stable
     */
    get resourceContainerImageId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_container_image_id');
    }
    /**
     * @stability stable
     */
    set resourceContainerImageId(value) {
        this._resourceContainerImageId = value;
    }
    /**
     * @stability stable
     */
    resetResourceContainerImageId() {
        this._resourceContainerImageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceContainerImageIdInput() {
        return this._resourceContainerImageId;
    }
    /**
     * @stability stable
     */
    get resourceContainerImageName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_container_image_name');
    }
    /**
     * @stability stable
     */
    set resourceContainerImageName(value) {
        this._resourceContainerImageName = value;
    }
    /**
     * @stability stable
     */
    resetResourceContainerImageName() {
        this._resourceContainerImageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceContainerImageNameInput() {
        return this._resourceContainerImageName;
    }
    /**
     * @stability stable
     */
    get resourceContainerLaunchedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_container_launched_at');
    }
    /**
     * @stability stable
     */
    set resourceContainerLaunchedAt(value) {
        this._resourceContainerLaunchedAt = value;
    }
    /**
     * @stability stable
     */
    resetResourceContainerLaunchedAt() {
        this._resourceContainerLaunchedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceContainerLaunchedAtInput() {
        return this._resourceContainerLaunchedAt;
    }
    /**
     * @stability stable
     */
    get resourceContainerName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_container_name');
    }
    /**
     * @stability stable
     */
    set resourceContainerName(value) {
        this._resourceContainerName = value;
    }
    /**
     * @stability stable
     */
    resetResourceContainerName() {
        this._resourceContainerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceContainerNameInput() {
        return this._resourceContainerName;
    }
    /**
     * @stability stable
     */
    get resourceDetailsOther() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_details_other');
    }
    /**
     * @stability stable
     */
    set resourceDetailsOther(value) {
        this._resourceDetailsOther = value;
    }
    /**
     * @stability stable
     */
    resetResourceDetailsOther() {
        this._resourceDetailsOther = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceDetailsOtherInput() {
        return this._resourceDetailsOther;
    }
    /**
     * @stability stable
     */
    get resourceId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_id');
    }
    /**
     * @stability stable
     */
    set resourceId(value) {
        this._resourceId = value;
    }
    /**
     * @stability stable
     */
    resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceIdInput() {
        return this._resourceId;
    }
    /**
     * @stability stable
     */
    get resourcePartition() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_partition');
    }
    /**
     * @stability stable
     */
    set resourcePartition(value) {
        this._resourcePartition = value;
    }
    /**
     * @stability stable
     */
    resetResourcePartition() {
        this._resourcePartition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourcePartitionInput() {
        return this._resourcePartition;
    }
    /**
     * @stability stable
     */
    get resourceRegion() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_region');
    }
    /**
     * @stability stable
     */
    set resourceRegion(value) {
        this._resourceRegion = value;
    }
    /**
     * @stability stable
     */
    resetResourceRegion() {
        this._resourceRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceRegionInput() {
        return this._resourceRegion;
    }
    /**
     * @stability stable
     */
    get resourceTags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_tags');
    }
    /**
     * @stability stable
     */
    set resourceTags(value) {
        this._resourceTags = value;
    }
    /**
     * @stability stable
     */
    resetResourceTags() {
        this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceTagsInput() {
        return this._resourceTags;
    }
    /**
     * @stability stable
     */
    get resourceType() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_type');
    }
    /**
     * @stability stable
     */
    set resourceType(value) {
        this._resourceType = value;
    }
    /**
     * @stability stable
     */
    resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceTypeInput() {
        return this._resourceType;
    }
    /**
     * @stability stable
     */
    get severityLabel() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('severity_label');
    }
    /**
     * @stability stable
     */
    set severityLabel(value) {
        this._severityLabel = value;
    }
    /**
     * @stability stable
     */
    resetSeverityLabel() {
        this._severityLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get severityLabelInput() {
        return this._severityLabel;
    }
    /**
     * @stability stable
     */
    get sourceUrl() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('source_url');
    }
    /**
     * @stability stable
     */
    set sourceUrl(value) {
        this._sourceUrl = value;
    }
    /**
     * @stability stable
     */
    resetSourceUrl() {
        this._sourceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceUrlInput() {
        return this._sourceUrl;
    }
    /**
     * @stability stable
     */
    get threatIntelIndicatorCategory() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_category');
    }
    /**
     * @stability stable
     */
    set threatIntelIndicatorCategory(value) {
        this._threatIntelIndicatorCategory = value;
    }
    /**
     * @stability stable
     */
    resetThreatIntelIndicatorCategory() {
        this._threatIntelIndicatorCategory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get threatIntelIndicatorCategoryInput() {
        return this._threatIntelIndicatorCategory;
    }
    /**
     * @stability stable
     */
    get threatIntelIndicatorLastObservedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_last_observed_at');
    }
    /**
     * @stability stable
     */
    set threatIntelIndicatorLastObservedAt(value) {
        this._threatIntelIndicatorLastObservedAt = value;
    }
    /**
     * @stability stable
     */
    resetThreatIntelIndicatorLastObservedAt() {
        this._threatIntelIndicatorLastObservedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get threatIntelIndicatorLastObservedAtInput() {
        return this._threatIntelIndicatorLastObservedAt;
    }
    /**
     * @stability stable
     */
    get threatIntelIndicatorSource() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_source');
    }
    /**
     * @stability stable
     */
    set threatIntelIndicatorSource(value) {
        this._threatIntelIndicatorSource = value;
    }
    /**
     * @stability stable
     */
    resetThreatIntelIndicatorSource() {
        this._threatIntelIndicatorSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get threatIntelIndicatorSourceInput() {
        return this._threatIntelIndicatorSource;
    }
    /**
     * @stability stable
     */
    get threatIntelIndicatorSourceUrl() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_source_url');
    }
    /**
     * @stability stable
     */
    set threatIntelIndicatorSourceUrl(value) {
        this._threatIntelIndicatorSourceUrl = value;
    }
    /**
     * @stability stable
     */
    resetThreatIntelIndicatorSourceUrl() {
        this._threatIntelIndicatorSourceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get threatIntelIndicatorSourceUrlInput() {
        return this._threatIntelIndicatorSourceUrl;
    }
    /**
     * @stability stable
     */
    get threatIntelIndicatorType() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_type');
    }
    /**
     * @stability stable
     */
    set threatIntelIndicatorType(value) {
        this._threatIntelIndicatorType = value;
    }
    /**
     * @stability stable
     */
    resetThreatIntelIndicatorType() {
        this._threatIntelIndicatorType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get threatIntelIndicatorTypeInput() {
        return this._threatIntelIndicatorType;
    }
    /**
     * @stability stable
     */
    get threatIntelIndicatorValue() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_value');
    }
    /**
     * @stability stable
     */
    set threatIntelIndicatorValue(value) {
        this._threatIntelIndicatorValue = value;
    }
    /**
     * @stability stable
     */
    resetThreatIntelIndicatorValue() {
        this._threatIntelIndicatorValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get threatIntelIndicatorValueInput() {
        return this._threatIntelIndicatorValue;
    }
    /**
     * @stability stable
     */
    get title() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('title');
    }
    /**
     * @stability stable
     */
    set title(value) {
        this._title = value;
    }
    /**
     * @stability stable
     */
    resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get titleInput() {
        return this._title;
    }
    /**
     * @stability stable
     */
    get type() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('type');
    }
    /**
     * @stability stable
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @stability stable
     */
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeInput() {
        return this._type;
    }
    /**
     * @stability stable
     */
    get updatedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('updated_at');
    }
    /**
     * @stability stable
     */
    set updatedAt(value) {
        this._updatedAt = value;
    }
    /**
     * @stability stable
     */
    resetUpdatedAt() {
        this._updatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get updatedAtInput() {
        return this._updatedAt;
    }
    /**
     * @stability stable
     */
    get userDefinedValues() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('user_defined_values');
    }
    /**
     * @stability stable
     */
    set userDefinedValues(value) {
        this._userDefinedValues = value;
    }
    /**
     * @stability stable
     */
    resetUserDefinedValues() {
        this._userDefinedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userDefinedValuesInput() {
        return this._userDefinedValues;
    }
    /**
     * @stability stable
     */
    get verificationState() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('verification_state');
    }
    /**
     * @stability stable
     */
    set verificationState(value) {
        this._verificationState = value;
    }
    /**
     * @stability stable
     */
    resetVerificationState() {
        this._verificationState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get verificationStateInput() {
        return this._verificationState;
    }
    /**
     * @stability stable
     */
    get workflowStatus() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('workflow_status');
    }
    /**
     * @stability stable
     */
    set workflowStatus(value) {
        this._workflowStatus = value;
    }
    /**
     * @stability stable
     */
    resetWorkflowStatus() {
        this._workflowStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get workflowStatusInput() {
        return this._workflowStatus;
    }
}
exports.SecurityhubInsightFiltersOutputReference = SecurityhubInsightFiltersOutputReference;
_m = JSII_RTTI_SYMBOL_1;
SecurityhubInsightFiltersOutputReference[_m] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsightFiltersOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight}.
 *
 * @stability stable
 */
class SecurityhubInsight extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_securityhub_insight',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // filters - computed: false, optional: false, required: true
        this._filters = new SecurityhubInsightFiltersOutputReference(this, "filters", true);
        this._groupByAttribute = config.groupByAttribute;
        this._name = config.name;
        this._filters.internalValue = config.filters;
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
    get groupByAttribute() {
        return this.getStringAttribute('group_by_attribute');
    }
    /**
     * @stability stable
     */
    set groupByAttribute(value) {
        this._groupByAttribute = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get groupByAttributeInput() {
        return this._groupByAttribute;
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
    get filters() {
        return this._filters;
    }
    /**
     * @stability stable
     */
    putFilters(value) {
        this._filters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get filtersInput() {
        return this._filters.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            group_by_attribute: cdktf.stringToTerraform(this._groupByAttribute),
            name: cdktf.stringToTerraform(this._name),
            filters: securityhubInsightFiltersToTerraform(this._filters.internalValue),
        };
    }
}
exports.SecurityhubInsight = SecurityhubInsight;
_o = JSII_RTTI_SYMBOL_1;
SecurityhubInsight[_o] = { fqn: "@cdktf/provider-aws.securityhub.SecurityhubInsight", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SecurityhubInsight.tfResourceType = "aws_securityhub_insight";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHlodWItaW5zaWdodC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWN1cml0eWh1Yi9zZWN1cml0eWh1Yi1pbnNpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBa0IvQixTQUFnQixnREFBZ0QsQ0FBQyxNQUE4QztJQUM3RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCw0R0FTQztBQVNELFNBQWdCLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBHQVNDO0FBU0QsU0FBZ0Isb0RBQW9ELENBQUMsTUFBa0Q7SUFDckgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsb0hBU0M7QUFXRCxTQUFnQiw4Q0FBOEMsQ0FBQyxNQUE0QztJQUN6RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDO0FBVkQsd0dBVUM7QUFTRCxTQUFnQixzREFBc0QsQ0FBQyxNQUFpSDtJQUN0TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3SEFTQzs7OztBQUVELE1BQWEsMERBQTJELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJakcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE4RDtRQUNyRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7QUEzREgsZ0lBNERDOzs7QUFVRCxTQUFnQiw2Q0FBNkMsQ0FBQyxNQUEyQztJQUN2RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsVUFBVSxFQUFFLHNEQUFzRCxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDdEYsQ0FBQTtBQUNILENBQUM7QUFWRCxzR0FVQztBQVdELFNBQWdCLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFWRCwwR0FVQztBQVNELFNBQWdCLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBHQVNDO0FBV0QsU0FBZ0IsbUVBQW1FLENBQUMsTUFBaUU7SUFDbkosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxFQUFFLENBQUM7UUFDdkMsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFBO0FBQ0gsQ0FBQztBQVZELGtKQVVDO0FBV0QsU0FBZ0Isb0VBQW9FLENBQUMsTUFBa0U7SUFDckosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxFQUFFLENBQUM7UUFDdkMsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFBO0FBQ0gsQ0FBQztBQVZELG9KQVVDO0FBU0QsU0FBZ0IsMEVBQTBFLENBQUMsTUFBd0U7SUFDakssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsZ0tBU0M7QUFTRCxTQUFnQixrRkFBa0YsQ0FBQyxNQUFnRjtJQUNqTCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCxnTEFTQztBQVNELFNBQWdCLHNFQUFzRSxDQUFDLE1BQW9FO0lBQ3pKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELHdKQVNDO0FBU0QsU0FBZ0IseUVBQXlFLENBQUMsTUFBdUU7SUFDL0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsOEpBU0M7QUFTRCxTQUFnQiw4REFBOEQsQ0FBQyxNQUE0RDtJQUN6SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3SUFTQztBQVNELFNBQWdCLDREQUE0RCxDQUFDLE1BQTZIO0lBQ3hNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELG9JQVNDOzs7O0FBRUQsTUFBYSxnRUFBaUUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2RyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW9FO1FBQzNGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN6QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztBQTNESCw0SUE0REM7OztBQVVELFNBQWdCLG1EQUFtRCxDQUFDLE1BQWlEO0lBQ25ILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxVQUFVLEVBQUUsNERBQTRELENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUM1RixDQUFBO0FBQ0gsQ0FBQztBQVZELGtIQVVDO0FBU0QsU0FBZ0IsK0NBQStDLENBQUMsTUFBNkM7SUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsMEdBU0M7QUFTRCxTQUFnQixzQ0FBc0MsQ0FBQyxNQUFvQztJQUN6RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3RkFTQztBQU9ELFNBQWdCLDJDQUEyQyxDQUFDLE1BQXlDO0lBQ25HLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBUkQsa0dBUUM7QUFTRCxTQUFnQiwyREFBMkQsQ0FBQyxNQUEySDtJQUNyTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCxrSUFTQzs7OztBQUVELE1BQWEsK0RBQWdFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJdEcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFtRTtRQUMxRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7QUEzREgsMElBNERDOzs7QUFVRCxTQUFnQixrREFBa0QsQ0FBQyxNQUFnRDtJQUNqSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsVUFBVSxFQUFFLDJEQUEyRCxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDM0YsQ0FBQTtBQUNILENBQUM7QUFWRCxnSEFVQztBQVNELFNBQWdCLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBHQVNDO0FBU0QsU0FBZ0IsK0NBQStDLENBQUMsTUFBNkM7SUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsMEdBU0M7QUFTRCxTQUFnQixnREFBZ0QsQ0FBQyxNQUE4QztJQUM3RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCw0R0FTQztBQVNELFNBQWdCLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBHQVNDO0FBU0QsU0FBZ0IsNERBQTRELENBQUMsTUFBMEQ7SUFDckksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsb0lBU0M7QUFPRCxTQUFnQiwwREFBMEQsQ0FBQyxNQUF3RDtJQUNqSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVJELGdJQVFDO0FBT0QsU0FBZ0IsMERBQTBELENBQUMsTUFBd0Q7SUFDakksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUFSRCxnSUFRQztBQVdELFNBQWdCLDBEQUEwRCxDQUFDLE1BQXdEO0lBQ2pJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFWRCxnSUFVQztBQVNELFNBQWdCLG9EQUFvRCxDQUFDLE1BQWtEO0lBQ3JILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELG9IQVNDO0FBU0QsU0FBZ0IsbURBQW1ELENBQUMsTUFBaUQ7SUFDbkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsa0hBU0M7QUFTRCxTQUFnQix1REFBdUQsQ0FBQyxNQUFxRDtJQUMzSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCwwSEFTQztBQU9ELFNBQWdCLHFEQUFxRCxDQUFDLE1BQW1EO0lBQ3ZILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBUkQsc0hBUUM7QUFPRCxTQUFnQixxREFBcUQsQ0FBQyxNQUFtRDtJQUN2SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVJELHNIQVFDO0FBU0QsU0FBZ0Isb0RBQW9ELENBQUMsTUFBa0Q7SUFDckgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsb0hBU0M7QUFXRCxTQUFnQixxREFBcUQsQ0FBQyxNQUFtRDtJQUN2SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDO0FBVkQsc0hBVUM7QUFTRCxTQUFnQiw0Q0FBNEMsQ0FBQyxNQUEwQztJQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCxvR0FTQztBQVNELFNBQWdCLDBEQUEwRCxDQUFDLE1BQXlIO0lBQ2xNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELGdJQVNDOzs7O0FBRUQsTUFBYSw4REFBK0QsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlyRyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWtFO1FBQ3pGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN6QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztBQTNESCx3SUE0REM7OztBQVVELFNBQWdCLGlEQUFpRCxDQUFDLE1BQStDO0lBQy9HLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxVQUFVLEVBQUUsMERBQTBELENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUMxRixDQUFBO0FBQ0gsQ0FBQztBQVZELDhHQVVDO0FBU0QsU0FBZ0IsaURBQWlELENBQUMsTUFBK0M7SUFDL0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsOEdBU0M7QUFTRCxTQUFnQiw4REFBOEQsQ0FBQyxNQUFpSTtJQUM5TSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3SUFTQzs7OztBQUVELE1BQWEsa0VBQW1FLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJekcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFzRTtRQUM3RixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7QUEzREgsZ0pBNERDOzs7QUFVRCxTQUFnQixxREFBcUQsQ0FBQyxNQUFtRDtJQUN2SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsVUFBVSxFQUFFLDhEQUE4RCxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDOUYsQ0FBQTtBQUNILENBQUM7QUFWRCxzSEFVQztBQVNELFNBQWdCLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBHQVNDO0FBV0QsU0FBZ0Isb0RBQW9ELENBQUMsTUFBa0Q7SUFDckgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxFQUFFLENBQUM7UUFDdkMsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFBO0FBQ0gsQ0FBQztBQVZELG9IQVVDO0FBU0QsU0FBZ0IsK0NBQStDLENBQUMsTUFBNkM7SUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsMEdBU0M7QUFXRCxTQUFnQiw4Q0FBOEMsQ0FBQyxNQUE0QztJQUN6RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDO0FBVkQsd0dBVUM7QUFTRCxTQUFnQixnRUFBZ0UsQ0FBQyxNQUFxSTtJQUNwTixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCw0SUFTQzs7OztBQUVELE1BQWEsb0VBQXFFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0csWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUF3RTtRQUMvRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7QUEzREgsb0pBNERDOzs7QUFVRCxTQUFnQix1REFBdUQsQ0FBQyxNQUFxRDtJQUMzSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsVUFBVSxFQUFFLGdFQUFnRSxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDaEcsQ0FBQTtBQUNILENBQUM7QUFWRCwwSEFVQztBQVNELFNBQWdCLDhDQUE4QyxDQUFDLE1BQTRDO0lBQ3pHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELHdHQVNDO0FBV0QsU0FBZ0IsaURBQWlELENBQUMsTUFBK0M7SUFDL0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVZELDhHQVVDO0FBU0QsU0FBZ0IsK0NBQStDLENBQUMsTUFBNkM7SUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsMEdBU0M7QUFTRCxTQUFnQixzREFBc0QsQ0FBQyxNQUFvRDtJQUN6SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3SEFTQztBQVNELFNBQWdCLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBHQVNDO0FBU0QsU0FBZ0IscURBQXFELENBQUMsTUFBbUQ7SUFDdkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsc0hBU0M7QUFTRCxTQUFnQiw2REFBNkQsQ0FBQyxNQUEyRDtJQUN2SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCxzSUFTQztBQVNELFNBQWdCLCtFQUErRSxDQUFDLE1BQTZFO0lBQzNLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBLQVNDO0FBU0QsU0FBZ0IsaUVBQWlFLENBQUMsTUFBK0Q7SUFDL0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsOElBU0M7QUFPRCxTQUFnQix1RUFBdUUsQ0FBQyxNQUFxRTtJQUMzSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVJELDBKQVFDO0FBT0QsU0FBZ0IsdUVBQXVFLENBQUMsTUFBcUU7SUFDM0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUFSRCwwSkFRQztBQVNELFNBQWdCLGlFQUFpRSxDQUFDLE1BQStEO0lBQy9JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDhJQVNDO0FBU0QsU0FBZ0IsNkVBQTZFLENBQUMsTUFBK0o7SUFDM1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsc0tBU0M7Ozs7QUFFRCxNQUFhLGlGQUFrRixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXhILFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDekM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBcUY7UUFDNUcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3pCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7O0FBM0RILDhLQTREQzs7O0FBVUQsU0FBZ0Isb0VBQW9FLENBQUMsTUFBa0U7SUFDckosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLFVBQVUsRUFBRSw2RUFBNkUsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQzdHLENBQUE7QUFDSCxDQUFDO0FBVkQsb0pBVUM7QUFTRCxTQUFnQixrRUFBa0UsQ0FBQyxNQUFnRTtJQUNqSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCxnSkFTQztBQVNELFNBQWdCLDhEQUE4RCxDQUFDLE1BQTREO0lBQ3pJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELHdJQVNDO0FBU0QsU0FBZ0IsK0RBQStELENBQUMsTUFBNkQ7SUFDM0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsMElBU0M7QUFTRCxTQUFnQiw2RUFBNkUsQ0FBQyxNQUErSjtJQUMzUCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCxzS0FTQzs7OztBQUVELE1BQWEsaUZBQWtGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJeEgsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFxRjtRQUM1RyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7QUEzREgsOEtBNERDOzs7QUFVRCxTQUFnQixvRUFBb0UsQ0FBQyxNQUFrRTtJQUNySixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsVUFBVSxFQUFFLDZFQUE2RSxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDN0csQ0FBQTtBQUNILENBQUM7QUFWRCxvSkFVQztBQVNELFNBQWdCLGlFQUFpRSxDQUFDLE1BQStEO0lBQy9JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDhJQVNDO0FBU0QsU0FBZ0IsbUVBQW1FLENBQUMsTUFBaUU7SUFDbkosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsa0pBU0M7QUFTRCxTQUFnQiw4REFBOEQsQ0FBQyxNQUE0RDtJQUN6SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3SUFTQztBQVNELFNBQWdCLGdFQUFnRSxDQUFDLE1BQThEO0lBQzdJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDRJQVNDO0FBU0QsU0FBZ0IsNERBQTRELENBQUMsTUFBMEQ7SUFDckksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsb0lBU0M7QUFTRCxTQUFnQiw4REFBOEQsQ0FBQyxNQUE0RDtJQUN6SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3SUFTQztBQVNELFNBQWdCLHdFQUF3RSxDQUFDLE1BQXFKO0lBQzVPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDRKQVNDOzs7O0FBRUQsTUFBYSw0RUFBNkUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUluSCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWdGO1FBQ3ZHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN6QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztBQTNESCxvS0E0REM7OztBQVVELFNBQWdCLCtEQUErRCxDQUFDLE1BQTZEO0lBQzNJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxVQUFVLEVBQUUsd0VBQXdFLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN4RyxDQUFBO0FBQ0gsQ0FBQztBQVZELDBJQVVDO0FBU0QsU0FBZ0IseURBQXlELENBQUMsTUFBdUQ7SUFDL0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsOEhBU0M7QUFXRCxTQUFnQix3REFBd0QsQ0FBQyxNQUFzRDtJQUM3SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVkQsNEhBVUM7QUFTRCxTQUFnQiw4Q0FBOEMsQ0FBQyxNQUE0QztJQUN6RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3R0FTQztBQVNELFNBQWdCLHFEQUFxRCxDQUFDLE1BQW1EO0lBQ3ZILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELHNIQVNDO0FBU0QsU0FBZ0Isa0RBQWtELENBQUMsTUFBZ0Q7SUFDakgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsZ0hBU0M7QUFXRCxTQUFnQixnREFBZ0QsQ0FBQyxNQUE4QztJQUM3RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVkQsNEdBVUM7QUFTRCxTQUFnQixnREFBZ0QsQ0FBQyxNQUE4QztJQUM3RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCw0R0FTQztBQVNELFNBQWdCLGlEQUFpRCxDQUFDLE1BQStDO0lBQy9HLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDhHQVNDO0FBU0QsU0FBZ0IsNkNBQTZDLENBQUMsTUFBMkM7SUFDdkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsc0dBU0M7QUFTRCxTQUFnQixnRUFBZ0UsQ0FBQyxNQUE4RDtJQUM3SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCw0SUFTQztBQVNELFNBQWdCLCtFQUErRSxDQUFDLE1BQW1LO0lBQ2pRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBLQVNDOzs7O0FBRUQsTUFBYSxtRkFBb0YsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkxSCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXVGO1FBQzlHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN6QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztBQTNESCxrTEE0REM7OztBQVVELFNBQWdCLHNFQUFzRSxDQUFDLE1BQW9FO0lBQ3pKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxVQUFVLEVBQUUsK0VBQStFLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUMvRyxDQUFBO0FBQ0gsQ0FBQztBQVZELHdKQVVDO0FBU0QsU0FBZ0IsOERBQThELENBQUMsTUFBNEQ7SUFDekksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsd0lBU0M7QUFTRCxTQUFnQixpRUFBaUUsQ0FBQyxNQUErRDtJQUMvSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCw4SUFTQztBQVNELFNBQWdCLDREQUE0RCxDQUFDLE1BQTBEO0lBQ3JJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELG9JQVNDO0FBU0QsU0FBZ0IsNkRBQTZELENBQUMsTUFBMkQ7SUFDdkksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsc0lBU0M7QUFTRCxTQUFnQix5Q0FBeUMsQ0FBQyxNQUF1QztJQUMvRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCw4RkFTQztBQVNELFNBQWdCLHdDQUF3QyxDQUFDLE1BQXNDO0lBQzdGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDRGQVNDO0FBU0QsU0FBZ0Isc0RBQXNELENBQUMsTUFBaUg7SUFDdEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsd0hBU0M7Ozs7QUFFRCxNQUFhLDBEQUEyRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWpHLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDekM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBOEQ7UUFDckYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3pCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7O0FBM0RILGdJQTREQzs7O0FBVUQsU0FBZ0IsNkNBQTZDLENBQUMsTUFBMkM7SUFDdkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLFVBQVUsRUFBRSxzREFBc0QsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3RGLENBQUE7QUFDSCxDQUFDO0FBVkQsc0dBVUM7QUFXRCxTQUFnQixxREFBcUQsQ0FBQyxNQUFtRDtJQUN2SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVkQsc0hBVUM7QUFTRCxTQUFnQixxREFBcUQsQ0FBQyxNQUFtRDtJQUN2SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCxzSEFTQztBQVNELFNBQWdCLGtEQUFrRCxDQUFDLE1BQWdEO0lBQ2pILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELGdIQVNDO0FBcUxELFNBQWdCLG9DQUFvQyxDQUFDLE1BQTZFO0lBQ2hJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3hHLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNwRyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG9EQUFvRCxDQUFDLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ25ILFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUNoRyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDOUYsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ25HLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNuRyxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG1FQUFtRSxDQUFDLENBQUMsTUFBTyxDQUFDLCtCQUErQixDQUFDO1FBQ2xLLG1DQUFtQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0VBQW9FLENBQUMsQ0FBQyxNQUFPLENBQUMsZ0NBQWdDLENBQUM7UUFDckssMkNBQTJDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywwRUFBMEUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxzQ0FBc0MsQ0FBQztRQUN6TCxvREFBb0QsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtGQUFrRixDQUFDLENBQUMsTUFBTyxDQUFDLDhDQUE4QyxDQUFDO1FBQ2xOLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsc0VBQXNFLENBQUMsQ0FBQyxNQUFPLENBQUMsa0NBQWtDLENBQUM7UUFDNUsseUNBQXlDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxxQ0FBcUMsQ0FBQztRQUNyTCw2QkFBNkIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhEQUE4RCxDQUFDLENBQUMsTUFBTyxDQUFDLDBCQUEwQixDQUFDO1FBQ25KLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsbURBQW1ELENBQUMsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ2pILFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNwRyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxFQUFFLENBQUM7UUFDeEUsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3ZGLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsa0RBQWtELENBQUMsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQzlHLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNwRyxZQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDcEcsYUFBYSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3ZHLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNwRywwQkFBMEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDREQUE0RCxDQUFDLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQzVJLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsMERBQTBELENBQUMsQ0FBQyxNQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDdEksd0JBQXdCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywwREFBMEQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUN0SSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDBEQUEwRCxDQUFDLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3RJLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDbkgsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDaEgscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUM3SCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZILG1CQUFtQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscURBQXFELENBQUMsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkgsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwSCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZILFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDRDQUE0QyxDQUFDLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUMzRixlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0csZUFBZSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaURBQWlELENBQUMsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNHLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscURBQXFELENBQUMsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkgsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3BHLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDcEgsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3BHLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUNqRyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVEQUF1RCxDQUFDLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO1FBQzdILFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUNqRyxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDMUcsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3BHLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsc0RBQXNELENBQUMsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDekgsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3BHLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscURBQXFELENBQUMsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkgsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUNoSixrREFBa0QsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtFQUErRSxDQUFDLENBQUMsTUFBTyxDQUFDLDJDQUEyQyxDQUFDO1FBQzFNLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxNQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDOUosd0NBQXdDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxtQ0FBbUMsQ0FBQztRQUNoTCx3Q0FBd0MsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVFQUF1RSxDQUFDLENBQUMsTUFBTyxDQUFDLG1DQUFtQyxDQUFDO1FBQ2hMLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxNQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDOUoscUNBQXFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQztRQUN2SyxtQ0FBbUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtFQUFrRSxDQUFDLENBQUMsTUFBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ2pLLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOERBQThELENBQUMsQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDcEosZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywrREFBK0QsQ0FBQyxDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUN4SixzQ0FBc0MsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG9FQUFvRSxDQUFDLENBQUMsTUFBTyxDQUFDLGdDQUFnQyxDQUFDO1FBQ3hLLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxNQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDOUoscUNBQXFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLE1BQU8sQ0FBQywrQkFBK0IsQ0FBQztRQUNySywrQkFBK0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhEQUE4RCxDQUFDLENBQUMsTUFBTyxDQUFDLDBCQUEwQixDQUFDO1FBQ3JKLGlDQUFpQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxNQUFPLENBQUMsNEJBQTRCLENBQUM7UUFDM0osMkJBQTJCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUM3SSw2QkFBNkIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhEQUE4RCxDQUFDLENBQUMsTUFBTyxDQUFDLDBCQUEwQixDQUFDO1FBQ25KLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0RBQStELENBQUMsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDdEosdUJBQXVCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNuSSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdEQUF3RCxDQUFDLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQ2hJLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUNqRyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RILGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUM3RyxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDdkcsYUFBYSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3ZHLGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGlEQUFpRCxDQUFDLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUMxRyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDOUYsK0JBQStCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDLE1BQU8sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6Six1Q0FBdUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHNFQUFzRSxDQUFDLENBQUMsTUFBTyxDQUFDLGtDQUFrQyxDQUFDO1FBQzdLLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOERBQThELENBQUMsQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDbkosaUNBQWlDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyw2QkFBNkIsQ0FBQztRQUM3SiwyQkFBMkIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDREQUE0RCxDQUFDLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQzdJLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNkRBQTZELENBQUMsQ0FBQyxNQUFPLENBQUMseUJBQXlCLENBQUM7UUFDaEosS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMseUNBQXlDLENBQUMsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2pGLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdDQUF3QyxDQUFDLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUM5RSxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDOUYsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN2SCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RILGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUM5RyxDQUFBO0FBQ0gsQ0FBQztBQS9GRCxvRkErRkM7Ozs7QUFFRCxNQUFhLHdDQUF5QyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9FLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtZQUN6QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLCtCQUErQixHQUFHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3RjtRQUNELElBQUksSUFBSSxDQUFDLGlDQUFpQyxFQUFFO1lBQzFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9GO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUNBQXVDLEVBQUU7WUFDaEQsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxzQ0FBc0MsR0FBRyxJQUFJLENBQUMsdUNBQXVDLENBQUM7U0FDM0c7UUFDRCxJQUFJLElBQUksQ0FBQywrQ0FBK0MsRUFBRTtZQUN4RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDhDQUE4QyxHQUFHLElBQUksQ0FBQywrQ0FBK0MsQ0FBQztTQUMzSDtRQUNELElBQUksSUFBSSxDQUFDLG1DQUFtQyxFQUFFO1lBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0NBQXNDLEVBQUU7WUFDL0MsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxxQ0FBcUMsR0FBRyxJQUFJLENBQUMsc0NBQXNDLENBQUM7U0FDekc7UUFDRCxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQztTQUNuRjtRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3RDtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNuQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDM0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1NBQy9FO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUM7U0FDM0U7UUFDRCxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztTQUMzRTtRQUNELElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1NBQzNFO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDN0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUNyRTtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvRDtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDbkU7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDbkMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUM7U0FDakY7UUFDRCxJQUFJLElBQUksQ0FBQyw0Q0FBNEMsRUFBRTtZQUNyRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDJDQUEyQyxHQUFHLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQztTQUNySDtRQUNELElBQUksSUFBSSxDQUFDLDhCQUE4QixFQUFFO1lBQ3ZDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxJQUFJLENBQUMsb0NBQW9DLEVBQUU7WUFDN0MsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsb0NBQW9DLENBQUM7U0FDckc7UUFDRCxJQUFJLElBQUksQ0FBQyxvQ0FBb0MsRUFBRTtZQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztTQUNyRztRQUNELElBQUksSUFBSSxDQUFDLDhCQUE4QixFQUFFO1lBQ3ZDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUNBQWlDLEVBQUU7WUFDMUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsaUNBQWlDLENBQUM7U0FDL0Y7UUFDRCxJQUFJLElBQUksQ0FBQywrQkFBK0IsRUFBRTtZQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQztTQUMzRjtRQUNELElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1NBQ25GO1FBQ0QsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUU7WUFDckMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUM7U0FDckY7UUFDRCxJQUFJLElBQUksQ0FBQyxpQ0FBaUMsRUFBRTtZQUMxQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvRjtRQUNELElBQUksSUFBSSxDQUFDLDhCQUE4QixFQUFFO1lBQ3ZDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0NBQWdDLEVBQUU7WUFDekMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQywrQkFBK0IsR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUM7U0FDN0Y7UUFDRCxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQztTQUNuRjtRQUNELElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQ3RDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDO1NBQ3ZGO1FBQ0QsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUM7U0FDL0U7UUFDRCxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQztTQUNuRjtRQUNELElBQUksSUFBSSxDQUFDLDRCQUE0QixFQUFFO1lBQ3JDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDO1NBQ3JGO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7U0FDekU7UUFDRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUN2RTtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7WUFDdEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUM7U0FDdkY7UUFDRCxJQUFJLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtZQUM1QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtDQUFrQyxHQUFHLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztTQUNuRztRQUNELElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1NBQ25GO1FBQ0QsSUFBSSxJQUFJLENBQUMsOEJBQThCLEVBQUU7WUFDdkMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUM7U0FDekY7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztTQUMvRTtRQUNELElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ25DLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1NBQ2pGO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE0QztRQUNuRSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsU0FBUyxDQUFDO1lBQ2xELElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUM7WUFDbkQsSUFBSSxDQUFDLHVDQUF1QyxHQUFHLFNBQVMsQ0FBQztZQUN6RCxJQUFJLENBQUMsK0NBQStDLEdBQUcsU0FBUyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxTQUFTLENBQUM7WUFDckQsSUFBSSxDQUFDLHNDQUFzQyxHQUFHLFNBQVMsQ0FBQztZQUN4RCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztZQUMzQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO1lBQ3pDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7WUFDekMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztZQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDO1lBQzVDLElBQUksQ0FBQyw0Q0FBNEMsR0FBRyxTQUFTLENBQUM7WUFDOUQsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFNBQVMsQ0FBQztZQUNoRCxJQUFJLENBQUMsb0NBQW9DLEdBQUcsU0FBUyxDQUFDO1lBQ3RELElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxTQUFTLENBQUM7WUFDdEQsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFNBQVMsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDO1lBQ25ELElBQUksQ0FBQywrQkFBK0IsR0FBRyxTQUFTLENBQUM7WUFDakQsSUFBSSxDQUFDLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztZQUM3QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsU0FBUyxDQUFDO1lBQzlDLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUM7WUFDbkQsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFNBQVMsQ0FBQztZQUNoRCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsU0FBUyxDQUFDO1lBQ2xELElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7WUFDN0MsSUFBSSxDQUFDLDZCQUE2QixHQUFHLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDO1lBQzNDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7WUFDN0MsSUFBSSxDQUFDLDRCQUE0QixHQUFHLFNBQVMsQ0FBQztZQUM5QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsNkJBQTZCLEdBQUcsU0FBUyxDQUFDO1lBQy9DLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxTQUFTLENBQUM7WUFDckQsSUFBSSxDQUFDLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztZQUM3QyxJQUFJLENBQUMsOEJBQThCLEdBQUcsU0FBUyxDQUFDO1lBQ2hELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7WUFDM0MsSUFBSSxDQUFDLDBCQUEwQixHQUFHLFNBQVMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7U0FDbEM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLEtBQUssQ0FBQywrQkFBK0IsQ0FBQztZQUM5RSxJQUFJLENBQUMsaUNBQWlDLEdBQUcsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyx1Q0FBdUMsR0FBRyxLQUFLLENBQUMsc0NBQXNDLENBQUM7WUFDNUYsSUFBSSxDQUFDLCtDQUErQyxHQUFHLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztZQUM1RyxJQUFJLENBQUMsbUNBQW1DLEdBQUcsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxzQ0FBc0MsR0FBRyxLQUFLLENBQUMscUNBQXFDLENBQUM7WUFDMUYsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztZQUNwRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDaEUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztZQUM1RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLHNCQUFzQixDQUFDO1lBQzVELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsc0JBQXNCLENBQUM7WUFDNUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUM5QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLHlCQUF5QixDQUFDO1lBQ2xFLElBQUksQ0FBQyw0Q0FBNEMsR0FBRyxLQUFLLENBQUMsMkNBQTJDLENBQUM7WUFDdEcsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztZQUMxRSxJQUFJLENBQUMsb0NBQW9DLEdBQUcsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxLQUFLLENBQUMsbUNBQW1DLENBQUM7WUFDdEYsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztZQUMxRSxJQUFJLENBQUMsaUNBQWlDLEdBQUcsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO1lBQ2hGLElBQUksQ0FBQywrQkFBK0IsR0FBRyxLQUFLLENBQUMsOEJBQThCLENBQUM7WUFDNUUsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztZQUNwRSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLDJCQUEyQixDQUFDO1lBQ3RFLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7WUFDaEYsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztZQUMxRSxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsS0FBSyxDQUFDLCtCQUErQixDQUFDO1lBQzlFLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7WUFDcEUsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztZQUN4RSxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1lBQ2hFLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7WUFDcEUsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztZQUN0RSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1lBQzFELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7WUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsS0FBSyxDQUFDLDRCQUE0QixDQUFDO1lBQ3hFLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxLQUFLLENBQUMsa0NBQWtDLENBQUM7WUFDcEYsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztZQUNwRSxJQUFJLENBQUMsOEJBQThCLEdBQUcsS0FBSyxDQUFDLDZCQUE2QixDQUFDO1lBQzFFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDaEUsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztZQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQVEsQ0FBQztJQUNqRSxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBOEM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBNkM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFRLENBQUM7SUFDcEUsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBa0Q7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ00scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQVEsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBNEM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBUSxDQUFDO0lBQzdELENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUEyQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFRLENBQUM7SUFDOUQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQTZDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFRLENBQUM7SUFDOUQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQTZDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsK0JBQStCO1FBQ3hDLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQ0FBb0MsQ0FBUSxDQUFDO0lBQ3JGLENBQUM7Ozs7SUFDRCxJQUFXLCtCQUErQixDQUFDLEtBQWlFO1FBQzFHLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNNLG9DQUFvQztRQUN6QyxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsU0FBUyxDQUFDO0lBQ3BELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxvQ0FBb0M7UUFDN0MsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUlELElBQVcsZ0NBQWdDO1FBQ3pDLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxxQ0FBcUMsQ0FBUSxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFDRCxJQUFXLGdDQUFnQyxDQUFDLEtBQWtFO1FBQzVHLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxLQUFLLENBQUM7SUFDakQsQ0FBQzs7OztJQUNNLHFDQUFxQztRQUMxQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQ0FBcUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUlELElBQVcsc0NBQXNDO1FBQy9DLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyw2Q0FBNkMsQ0FBUSxDQUFDO0lBQzlGLENBQUM7Ozs7SUFDRCxJQUFXLHNDQUFzQyxDQUFDLEtBQXdFO1FBQ3hILElBQUksQ0FBQyx1Q0FBdUMsR0FBRyxLQUFLLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNNLDJDQUEyQztRQUNoRCxJQUFJLENBQUMsdUNBQXVDLEdBQUcsU0FBUyxDQUFDO0lBQzNELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywyQ0FBMkM7UUFDcEQsT0FBTyxJQUFJLENBQUMsdUNBQXVDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUlELElBQVcsOENBQThDO1FBQ3ZELG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxzREFBc0QsQ0FBUSxDQUFDO0lBQ3ZHLENBQUM7Ozs7SUFDRCxJQUFXLDhDQUE4QyxDQUFDLEtBQWdGO1FBQ3hJLElBQUksQ0FBQywrQ0FBK0MsR0FBRyxLQUFLLENBQUM7SUFDL0QsQ0FBQzs7OztJQUNNLG1EQUFtRDtRQUN4RCxJQUFJLENBQUMsK0NBQStDLEdBQUcsU0FBUyxDQUFDO0lBQ25FLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtREFBbUQ7UUFDNUQsT0FBTyxJQUFJLENBQUMsK0NBQStDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUlELElBQVcsa0NBQWtDO1FBQzNDLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx3Q0FBd0MsQ0FBUSxDQUFDO0lBQ3pGLENBQUM7Ozs7SUFDRCxJQUFXLGtDQUFrQyxDQUFDLEtBQW9FO1FBQ2hILElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNNLHVDQUF1QztRQUM1QyxJQUFJLENBQUMsbUNBQW1DLEdBQUcsU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1Q0FBdUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsbUNBQW1DLENBQUM7SUFDbEQsQ0FBQzs7OztJQUlELElBQVcscUNBQXFDO1FBQzlDLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQywyQ0FBMkMsQ0FBUSxDQUFDO0lBQzVGLENBQUM7Ozs7SUFDRCxJQUFXLHFDQUFxQyxDQUFDLEtBQXVFO1FBQ3RILElBQUksQ0FBQyxzQ0FBc0MsR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQzs7OztJQUNNLDBDQUEwQztRQUMvQyxJQUFJLENBQUMsc0NBQXNDLEdBQUcsU0FBUyxDQUFDO0lBQzFELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywwQ0FBMEM7UUFDbkQsT0FBTyxJQUFJLENBQUMsc0NBQXNDLENBQUM7SUFDckQsQ0FBQzs7OztJQUlELElBQVcsMEJBQTBCO1FBQ25DLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQywrQkFBK0IsQ0FBUSxDQUFDO0lBQ2hGLENBQUM7Ozs7SUFDRCxJQUFXLDBCQUEwQixDQUFDLEtBQTREO1FBQ2hHLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNNLCtCQUErQjtRQUNwQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUlELElBQVcsZUFBZTtRQUN4QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQVEsQ0FBQztJQUNwRSxDQUFDOzs7O0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBaUQ7UUFDMUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBNkM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxFQUFFO1FBQ1gsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBUSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFvQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUMxRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBeUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFRLENBQUM7SUFDbkUsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWdEO1FBQ3hFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDL0QsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQTZDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDL0QsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQTZDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFRLENBQUM7SUFDaEUsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQThDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDL0QsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQTZDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyw0QkFBNEIsQ0FBUSxDQUFDO0lBQzdFLENBQUM7Ozs7SUFDRCxJQUFXLHdCQUF3QixDQUFDLEtBQTBEO1FBQzVGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7OztJQUNNLDZCQUE2QjtRQUNsQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUlELElBQVcsc0JBQXNCO1FBQy9CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBUSxDQUFDO0lBQzNFLENBQUM7Ozs7SUFDRCxJQUFXLHNCQUFzQixDQUFDLEtBQXdEO1FBQ3hGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLDJCQUEyQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUlELElBQVcsc0JBQXNCO1FBQy9CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBUSxDQUFDO0lBQzNFLENBQUM7Ozs7SUFDRCxJQUFXLHNCQUFzQixDQUFDLEtBQXdEO1FBQ3hGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLDJCQUEyQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUlELElBQVcsc0JBQXNCO1FBQy9CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBUSxDQUFDO0lBQzNFLENBQUM7Ozs7SUFDRCxJQUFXLHNCQUFzQixDQUFDLEtBQXdEO1FBQ3hGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLDJCQUEyQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBUSxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWtEO1FBQzVFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcsZUFBZTtRQUN4QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQVEsQ0FBQztJQUNuRSxDQUFDOzs7O0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBaUQ7UUFDMUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFRLENBQUM7SUFDeEUsQ0FBQzs7OztJQUNELElBQVcsbUJBQW1CLENBQUMsS0FBcUQ7UUFDbEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBbUQ7UUFDOUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBbUQ7UUFDOUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFRLENBQUM7SUFDckUsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBa0Q7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ00scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBbUQ7UUFDOUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQVEsQ0FBQztJQUM1RCxDQUFDOzs7O0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBMEM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGlCQUFpQixDQUFRLENBQUM7SUFDbEUsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQStDO1FBQ3RFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQVEsQ0FBQztJQUNsRSxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBK0M7UUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBbUQ7UUFDOUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBNkM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFRLENBQUM7SUFDckUsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBa0Q7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ00scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBNkM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQVEsQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBNEM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQVEsQ0FBQztJQUN4RSxDQUFDOzs7O0lBQ0QsSUFBVyxtQkFBbUIsQ0FBQyxLQUFxRDtRQUNsRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBUSxDQUFDO0lBQzlELENBQUM7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUE0QztRQUNoRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7O0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQVEsQ0FBQztJQUNqRSxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBK0M7UUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBNkM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxrQkFBa0I7UUFDM0Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQzs7OztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBb0Q7UUFDaEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBNkM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBbUQ7UUFDOUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsSUFBVyx5QkFBeUI7UUFDbEMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLDhCQUE4QixDQUFRLENBQUM7SUFDL0UsQ0FBQzs7OztJQUNELElBQVcseUJBQXlCLENBQUMsS0FBMkQ7UUFDOUYsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDOzs7O0lBQ00sOEJBQThCO1FBQ25DLElBQUksQ0FBQywwQkFBMEIsR0FBRyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDhCQUE4QjtRQUN2QyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUN6QyxDQUFDOzs7O0lBSUQsSUFBVywyQ0FBMkM7UUFDcEQsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9EQUFvRCxDQUFRLENBQUM7SUFDckcsQ0FBQzs7OztJQUNELElBQVcsMkNBQTJDLENBQUMsS0FBNkU7UUFDbEksSUFBSSxDQUFDLDRDQUE0QyxHQUFHLEtBQUssQ0FBQztJQUM1RCxDQUFDOzs7O0lBQ00sZ0RBQWdEO1FBQ3JELElBQUksQ0FBQyw0Q0FBNEMsR0FBRyxTQUFTLENBQUM7SUFDaEUsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdEQUFnRDtRQUN6RCxPQUFPLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBSUQsSUFBVyw2QkFBNkI7UUFDdEMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9DQUFvQyxDQUFRLENBQUM7SUFDckYsQ0FBQzs7OztJQUNELElBQVcsNkJBQTZCLENBQUMsS0FBK0Q7UUFDdEcsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDOzs7O0lBQ00sa0NBQWtDO1FBQ3ZDLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxTQUFTLENBQUM7SUFDbEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtDQUFrQztRQUMzQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUM3QyxDQUFDOzs7O0lBSUQsSUFBVyxtQ0FBbUM7UUFDNUMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLDBDQUEwQyxDQUFRLENBQUM7SUFDM0YsQ0FBQzs7OztJQUNELElBQVcsbUNBQW1DLENBQUMsS0FBcUU7UUFDbEgsSUFBSSxDQUFDLG9DQUFvQyxHQUFHLEtBQUssQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ00sd0NBQXdDO1FBQzdDLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdDQUF3QztRQUNqRCxPQUFPLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUNuRCxDQUFDOzs7O0lBSUQsSUFBVyxtQ0FBbUM7UUFDNUMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLDBDQUEwQyxDQUFRLENBQUM7SUFDM0YsQ0FBQzs7OztJQUNELElBQVcsbUNBQW1DLENBQUMsS0FBcUU7UUFDbEgsSUFBSSxDQUFDLG9DQUFvQyxHQUFHLEtBQUssQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ00sd0NBQXdDO1FBQzdDLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdDQUF3QztRQUNqRCxPQUFPLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUNuRCxDQUFDOzs7O0lBSUQsSUFBVyw2QkFBNkI7UUFDdEMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9DQUFvQyxDQUFRLENBQUM7SUFDckYsQ0FBQzs7OztJQUNELElBQVcsNkJBQTZCLENBQUMsS0FBK0Q7UUFDdEcsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDOzs7O0lBQ00sa0NBQWtDO1FBQ3ZDLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxTQUFTLENBQUM7SUFDbEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtDQUFrQztRQUMzQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUM3QyxDQUFDOzs7O0lBSUQsSUFBVyxnQ0FBZ0M7UUFDekMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVDQUF1QyxDQUFRLENBQUM7SUFDeEYsQ0FBQzs7OztJQUNELElBQVcsZ0NBQWdDLENBQUMsS0FBa0U7UUFDNUcsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLEtBQUssQ0FBQztJQUNqRCxDQUFDOzs7O0lBQ00scUNBQXFDO1FBQzFDLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUM7SUFDckQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFDQUFxQztRQUM5QyxPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBSUQsSUFBVyw4QkFBOEI7UUFDdkMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFDQUFxQyxDQUFRLENBQUM7SUFDdEYsQ0FBQzs7OztJQUNELElBQVcsOEJBQThCLENBQUMsS0FBZ0U7UUFDeEcsSUFBSSxDQUFDLCtCQUErQixHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ00sbUNBQW1DO1FBQ3hDLElBQUksQ0FBQywrQkFBK0IsR0FBRyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG1DQUFtQztRQUM1QyxPQUFPLElBQUksQ0FBQywrQkFBK0IsQ0FBQztJQUM5QyxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFRLENBQUM7SUFDakYsQ0FBQzs7OztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBNEQ7UUFDaEcsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDOzs7O0lBSUQsSUFBVywyQkFBMkI7UUFDcEMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtDQUFrQyxDQUFRLENBQUM7SUFDbkYsQ0FBQzs7OztJQUNELElBQVcsMkJBQTJCLENBQUMsS0FBNkQ7UUFDbEcsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ00sZ0NBQWdDO1FBQ3JDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDOzs7O0lBSUQsSUFBVyxnQ0FBZ0M7UUFDekMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHdDQUF3QyxDQUFRLENBQUM7SUFDekYsQ0FBQzs7OztJQUNELElBQVcsZ0NBQWdDLENBQUMsS0FBa0U7UUFDNUcsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLEtBQUssQ0FBQztJQUNqRCxDQUFDOzs7O0lBQ00scUNBQXFDO1FBQzFDLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUM7SUFDckQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFDQUFxQztRQUM5QyxPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBSUQsSUFBVyw2QkFBNkI7UUFDdEMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9DQUFvQyxDQUFRLENBQUM7SUFDckYsQ0FBQzs7OztJQUNELElBQVcsNkJBQTZCLENBQUMsS0FBK0Q7UUFDdEcsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDOzs7O0lBQ00sa0NBQWtDO1FBQ3ZDLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxTQUFTLENBQUM7SUFDbEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtDQUFrQztRQUMzQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUM3QyxDQUFDOzs7O0lBSUQsSUFBVywrQkFBK0I7UUFDeEMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVDQUF1QyxDQUFRLENBQUM7SUFDeEYsQ0FBQzs7OztJQUNELElBQVcsK0JBQStCLENBQUMsS0FBaUU7UUFDMUcsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ00sb0NBQW9DO1FBQ3pDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9DQUFvQztRQUM3QyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMvQyxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGlDQUFpQyxDQUFRLENBQUM7SUFDbEYsQ0FBQzs7OztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBNEQ7UUFDaEcsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDOzs7O0lBSUQsSUFBVyw0QkFBNEI7UUFDckMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1DQUFtQyxDQUFRLENBQUM7SUFDcEYsQ0FBQzs7OztJQUNELElBQVcsNEJBQTRCLENBQUMsS0FBOEQ7UUFDcEcsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ00saUNBQWlDO1FBQ3RDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxTQUFTLENBQUM7SUFDakQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlDQUFpQztRQUMxQyxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztJQUM1QyxDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLDZCQUE2QixDQUFRLENBQUM7SUFDOUUsQ0FBQzs7OztJQUNELElBQVcsd0JBQXdCLENBQUMsS0FBMEQ7UUFDNUYsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLCtCQUErQixDQUFRLENBQUM7SUFDaEYsQ0FBQzs7OztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBNEQ7UUFDaEcsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDOzs7O0lBSUQsSUFBVywyQkFBMkI7UUFDcEMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFRLENBQUM7SUFDakYsQ0FBQzs7OztJQUNELElBQVcsMkJBQTJCLENBQUMsS0FBNkQ7UUFDbEcsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ00sZ0NBQWdDO1FBQ3JDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDOzs7O0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFRLENBQUM7SUFDMUUsQ0FBQzs7OztJQUNELElBQVcscUJBQXFCLENBQUMsS0FBdUQ7UUFDdEYsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBSUQsSUFBVyxvQkFBb0I7UUFDN0Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHdCQUF3QixDQUFRLENBQUM7SUFDekUsQ0FBQzs7OztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBc0Q7UUFDcEYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ00seUJBQXlCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQVEsQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBNEM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQVEsQ0FBQztJQUNyRSxDQUFDOzs7O0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFtRDtRQUM5RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGlCQUFpQixDQUFRLENBQUM7SUFDbEUsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWdEO1FBQ3hFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFRLENBQUM7SUFDaEUsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQThDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFRLENBQUM7SUFDaEUsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQThDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQVEsQ0FBQztJQUNqRSxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBK0M7UUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQVEsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBMkM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLDRCQUE0QjtRQUNyQyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsaUNBQWlDLENBQVEsQ0FBQztJQUNsRixDQUFDOzs7O0lBQ0QsSUFBVyw0QkFBNEIsQ0FBQyxLQUE4RDtRQUNwRyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsS0FBSyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDTSxpQ0FBaUM7UUFDdEMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLFNBQVMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUNBQWlDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDO0lBQzVDLENBQUM7Ozs7SUFJRCxJQUFXLGtDQUFrQztRQUMzQyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMseUNBQXlDLENBQVEsQ0FBQztJQUMxRixDQUFDOzs7O0lBQ0QsSUFBVyxrQ0FBa0MsQ0FBQyxLQUFvRTtRQUNoSCxJQUFJLENBQUMsbUNBQW1DLEdBQUcsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDTSx1Q0FBdUM7UUFDNUMsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsdUNBQXVDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLG1DQUFtQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFJRCxJQUFXLDBCQUEwQjtRQUNuQyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsK0JBQStCLENBQVEsQ0FBQztJQUNoRixDQUFDOzs7O0lBQ0QsSUFBVywwQkFBMEIsQ0FBQyxLQUE0RDtRQUNoRyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDTSwrQkFBK0I7UUFDcEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztJQUMvQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsK0JBQStCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDO0lBQzFDLENBQUM7Ozs7SUFJRCxJQUFXLDZCQUE2QjtRQUN0QyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUNBQW1DLENBQVEsQ0FBQztJQUNwRixDQUFDOzs7O0lBQ0QsSUFBVyw2QkFBNkIsQ0FBQyxLQUErRDtRQUN0RyxJQUFJLENBQUMsOEJBQThCLEdBQUcsS0FBSyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDTSxrQ0FBa0M7UUFDdkMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0NBQWtDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQzdDLENBQUM7Ozs7SUFJRCxJQUFXLHdCQUF3QjtRQUNqQyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsNkJBQTZCLENBQVEsQ0FBQztJQUM5RSxDQUFDOzs7O0lBQ0QsSUFBVyx3QkFBd0IsQ0FBQyxLQUEwRDtRQUM1RixJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFJRCxJQUFXLHlCQUF5QjtRQUNsQyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsOEJBQThCLENBQVEsQ0FBQztJQUMvRSxDQUFDOzs7O0lBQ0QsSUFBVyx5QkFBeUIsQ0FBQyxLQUEyRDtRQUM5RixJQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDTSw4QkFBOEI7UUFDbkMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsOEJBQThCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQ3pDLENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFRLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNELElBQVcsS0FBSyxDQUFDLEtBQXVDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQXNDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBUSxDQUFDO0lBQzdELENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUEyQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxxQkFBcUIsQ0FBUSxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQW1EO1FBQzlFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQW1EO1FBQzlFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsY0FBYztRQUN2QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQVEsQ0FBQztJQUNsRSxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBZ0Q7UUFDeEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOztBQTcvREgsNEZBOC9EQzs7Ozs7Ozs7QUFHRCxNQUFhLGtCQUFtQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPN0QsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWdDO1FBQy9FLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUseUJBQXlCO1lBQ2hELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUE4Q0wsNkRBQTZEO1FBQ3JELGFBQVEsR0FBRyxJQUFJLHdDQUF3QyxDQUFDLElBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUE5QzVGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDL0MsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlEQUF5RDs7OztJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFVBQVUsQ0FBQyxLQUFnQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ25FLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxPQUFPLEVBQUUsb0NBQW9DLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7U0FDM0UsQ0FBQztJQUNKLENBQUM7O0FBM0ZILGdEQTRGQzs7O0FBMUZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csaUNBQWMsR0FBVyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyb3VwQnlBdHRyaWJ1dGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWx0ZXJzOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzO1xufVxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQXdzQWNjb3VudElkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0F3c0FjY291bnRJZFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNBd3NBY2NvdW50SWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDb21wYW55TmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDb21wYW55TmFtZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDb21wYW55TmFtZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NvbXBsaWFuY2VTdGF0dXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ29tcGxpYW5jZVN0YXR1c1RvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDb21wbGlhbmNlU3RhdHVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ29uZmlkZW5jZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ29uZmlkZW5jZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDb25maWRlbmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXEpLFxuICAgIGd0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ndGUpLFxuICAgIGx0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sdGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NyZWF0ZWRBdERhdGVSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDcmVhdGVkQXREYXRlUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ3JlYXRlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NyZWF0ZWRBdERhdGVSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ3JlYXRlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDcmVhdGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ3JlYXRlZEF0RGF0ZVJhbmdlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDcmVhdGVkQXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGVSYW5nZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDcmVhdGVkQXREYXRlUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ3JlYXRlZEF0VG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NyZWF0ZWRBdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmQpLFxuICAgIHN0YXJ0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0KSxcbiAgICBkYXRlX3JhbmdlOiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ3JlYXRlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUmFuZ2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NyaXRpY2FsaXR5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVxPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBndGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGx0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDcml0aWNhbGl0eVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDcml0aWNhbGl0eSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVxOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVxKSxcbiAgICBndGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3RlKSxcbiAgICBsdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubHRlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNEZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNEZXNjcmlwdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNEZXNjcmlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXE/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGd0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbHRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzQ29uZmlkZW5jZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVxOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVxKSxcbiAgICBndGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3RlKSxcbiAgICBsdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubHRlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNDcml0aWNhbGl0eSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzQ3JpdGljYWxpdHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzQ3JpdGljYWxpdHkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlcTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcSksXG4gICAgZ3RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmd0ZSksXG4gICAgbHRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmx0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzSWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzSWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzSWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm5Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5TGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eUxhYmVsKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlPcmlnaW5hbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eU9yaWdpbmFsVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5T3JpZ2luYWwpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNUeXBlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNUeXBlc1RvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNUeXBlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpcnN0T2JzZXJ2ZWRBdERhdGVSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaXJzdE9ic2VydmVkQXREYXRlUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmlyc3RPYnNlcnZlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpcnN0T2JzZXJ2ZWRBdERhdGVSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmlyc3RPYnNlcnZlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaXJzdE9ic2VydmVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmlyc3RPYnNlcnZlZEF0RGF0ZVJhbmdlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaXJzdE9ic2VydmVkQXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGVSYW5nZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaXJzdE9ic2VydmVkQXREYXRlUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmlyc3RPYnNlcnZlZEF0VG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpcnN0T2JzZXJ2ZWRBdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmQpLFxuICAgIHN0YXJ0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0KSxcbiAgICBkYXRlX3JhbmdlOiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmlyc3RPYnNlcnZlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUmFuZ2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0dlbmVyYXRvcklkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0dlbmVyYXRvcklkVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0dlbmVyYXRvcklkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzSWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzSWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzSWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNLZXl3b3JkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzS2V5d29yZFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNLZXl3b3JkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0xhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0xhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0xhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0xhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNMYXN0T2JzZXJ2ZWRBdERhdGVSYW5nZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTGFzdE9ic2VydmVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTGFzdE9ic2VydmVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0xhc3RPYnNlcnZlZEF0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRlUmFuZ2U/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTGFzdE9ic2VydmVkQXREYXRlUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTGFzdE9ic2VydmVkQXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTGFzdE9ic2VydmVkQXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kKSxcbiAgICBzdGFydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydCksXG4gICAgZGF0ZV9yYW5nZTogc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0xhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUmFuZ2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVOYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVOYW1lVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVOYW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZVBhdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZVBhdGhUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZVBhdGgpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNNYWx3YXJlU3RhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZVN0YXRlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVTdGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVUeXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVUeXBlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVUeXBlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEZXN0aW5hdGlvbkRvbWFpblRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGVzdGluYXRpb25Eb21haW4pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGVzdGluYXRpb25JcHY0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjaWRyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uSXB2NFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGVzdGluYXRpb25JcHY0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGVzdGluYXRpb25JcHY2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjaWRyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uSXB2NlRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGVzdGluYXRpb25JcHY2KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGVzdGluYXRpb25Qb3J0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVxPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBndGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGx0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGVzdGluYXRpb25Qb3J0VG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEZXN0aW5hdGlvblBvcnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlcTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcSksXG4gICAgZ3RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmd0ZSksXG4gICAgbHRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmx0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0RpcmVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGlyZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEaXJlY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrUHJvdG9jb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1Byb3RvY29sVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtQcm90b2NvbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtTb3VyY2VEb21haW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZURvbWFpblRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlRG9tYWluKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZUlwdjQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNpZHI6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlSXB2NFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlSXB2NCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2lkciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZUlwdjYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNpZHI6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlSXB2NlRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlSXB2Nik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2lkciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZU1hYyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlTWFjVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtTb3VyY2VNYWMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlUG9ydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZVBvcnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZVBvcnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlcTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcSksXG4gICAgZ3RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmd0ZSksXG4gICAgbHRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmx0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVRleHRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVRleHQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOb3RlVXBkYXRlZEF0RGF0ZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05vdGVVcGRhdGVkQXREYXRlUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRBdERhdGVSYW5nZU91dHB1dFJlZmVyZW5jZSB8IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOb3RlVXBkYXRlZEF0RGF0ZVJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOb3RlVXBkYXRlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOb3RlVXBkYXRlZEF0RGF0ZVJhbmdlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05vdGVVcGRhdGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05vdGVVcGRhdGVkQXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGVSYW5nZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOb3RlVXBkYXRlZEF0RGF0ZVJhbmdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05vdGVVcGRhdGVkQXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRBdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmQpLFxuICAgIHN0YXJ0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0KSxcbiAgICBkYXRlX3JhbmdlOiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRBdERhdGVSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZVJhbmdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOb3RlVXBkYXRlZEJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05vdGVVcGRhdGVkQnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRCeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NMYXVuY2hlZEF0RGF0ZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NMYXVuY2hlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NMYXVuY2hlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NMYXVuY2hlZEF0RGF0ZVJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzTGF1bmNoZWRBdERhdGVSYW5nZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc0xhdW5jaGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc0xhdW5jaGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NMYXVuY2hlZEF0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRlUmFuZ2U/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc0xhdW5jaGVkQXREYXRlUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc0xhdW5jaGVkQXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc0xhdW5jaGVkQXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kKSxcbiAgICBzdGFydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydCksXG4gICAgZGF0ZV9yYW5nZTogc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NMYXVuY2hlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUmFuZ2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NOYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NOYW1lVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NOYW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BhcmVudFBpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BhcmVudFBpZFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzUGFyZW50UGlkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXEpLFxuICAgIGd0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ndGUpLFxuICAgIGx0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sdGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NQYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NQYXRoVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NQYXRoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BpZFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzUGlkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXEpLFxuICAgIGd0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ndGUpLFxuICAgIGx0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sdGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NUZXJtaW5hdGVkQXREYXRlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1Rlcm1pbmF0ZWRBdERhdGVSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzVGVybWluYXRlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NUZXJtaW5hdGVkQXREYXRlUmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NUZXJtaW5hdGVkQXREYXRlUmFuZ2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NUZXJtaW5hdGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1Rlcm1pbmF0ZWRBdERhdGVSYW5nZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1Rlcm1pbmF0ZWRBdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXJ0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0ZVJhbmdlPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NUZXJtaW5hdGVkQXREYXRlUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1Rlcm1pbmF0ZWRBdFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzVGVybWluYXRlZEF0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZCksXG4gICAgc3RhcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnQpLFxuICAgIGRhdGVfcmFuZ2U6IHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzVGVybWluYXRlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUmFuZ2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2R1Y3RBcm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdEFyblRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9kdWN0QXJuKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdEZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdEZpZWxkc1RvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9kdWN0RmllbGRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdE5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdE5hbWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdE5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWNvbW1lbmRhdGlvblRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVjb21tZW5kYXRpb25UZXh0VG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlY29tbWVuZGF0aW9uVGV4dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlY29yZFN0YXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlY29yZFN0YXRlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlY29yZFN0YXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVsYXRlZEZpbmRpbmdzSWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVsYXRlZEZpbmRpbmdzSWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVsYXRlZEZpbmRpbmdzSWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm5Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJYW1JbnN0YW5jZVByb2ZpbGVBcm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlhbUluc3RhbmNlUHJvZmlsZUFyblRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSWFtSW5zdGFuY2VQcm9maWxlQXJuKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3NlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2lkcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY0QWRkcmVzc2VzVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY0QWRkcmVzc2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NkFkZHJlc3NlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2lkcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY2QWRkcmVzc2VzVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY2QWRkcmVzc2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0RGF0ZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0RGF0ZVJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdERhdGVSYW5nZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRlUmFuZ2U/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXREYXRlUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kKSxcbiAgICBzdGFydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydCksXG4gICAgZGF0ZV9yYW5nZTogc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUmFuZ2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlU3VibmV0SWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVN1Ym5ldElkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VWcGNJZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0RGF0ZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0RGF0ZVJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleUNyZWF0ZWRBdERhdGVSYW5nZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRlUmFuZ2U/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXREYXRlUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kKSxcbiAgICBzdGFydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydCksXG4gICAgZGF0ZV9yYW5nZTogc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUmFuZ2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5U3RhdHVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5U3RhdHVzVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5U3RhdHVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlVc2VyTmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVVzZXJOYW1lVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzUzNCdWNrZXRPd25lck5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NTM0J1Y2tldE93bmVyTmFtZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c1MzQnVja2V0T3duZXJOYW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJJbWFnZUlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVySW1hZ2VJZFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckltYWdlSWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdERhdGVSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckxhdW5jaGVkQXREYXRlUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdERhdGVSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckxhdW5jaGVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0RGF0ZVJhbmdlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckxhdW5jaGVkQXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGVSYW5nZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckxhdW5jaGVkQXREYXRlUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0VG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmQpLFxuICAgIHN0YXJ0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0KSxcbiAgICBkYXRlX3JhbmdlOiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUmFuZ2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lck5hbWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJOYW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VEZXRhaWxzT3RoZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlRGV0YWlsc090aGVyVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlRGV0YWlsc090aGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VJZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUlkVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlSWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZVBhcnRpdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZVBhcnRpdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZVBhcnRpdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlUmVnaW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlUmVnaW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlUmVnaW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VUYWdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZVRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VUeXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlVHlwZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZVR5cGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNTZXZlcml0eUxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1NldmVyaXR5TGFiZWxUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzU2V2ZXJpdHlMYWJlbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1NvdXJjZVVybCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNTb3VyY2VVcmxUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzU291cmNlVXJsKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JDYXRlZ29yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvckNhdGVnb3J5VG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXREYXRlUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdERhdGVSYW5nZU91dHB1dFJlZmVyZW5jZSB8IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXREYXRlUmFuZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGVSYW5nZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0RGF0ZVJhbmdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmQpLFxuICAgIHN0YXJ0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0KSxcbiAgICBkYXRlX3JhbmdlOiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdERhdGVSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZVJhbmdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclNvdXJjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yVHlwZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclR5cGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yVmFsdWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JWYWx1ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RpdGxlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RpdGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUeXBlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1R5cGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNVcGRhdGVkQXREYXRlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXBkYXRlZEF0RGF0ZVJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VwZGF0ZWRBdERhdGVSYW5nZU91dHB1dFJlZmVyZW5jZSB8IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNVcGRhdGVkQXREYXRlUmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VwZGF0ZWRBdERhdGVSYW5nZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXBkYXRlZEF0RGF0ZVJhbmdlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VwZGF0ZWRBdERhdGVSYW5nZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXBkYXRlZEF0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRlUmFuZ2U/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXBkYXRlZEF0RGF0ZVJhbmdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VwZGF0ZWRBdFRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNVcGRhdGVkQXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kKSxcbiAgICBzdGFydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydCksXG4gICAgZGF0ZV9yYW5nZTogc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VwZGF0ZWRBdERhdGVSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZVJhbmdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNVc2VyRGVmaW5lZFZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXNlckRlZmluZWRWYWx1ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXNlckRlZmluZWRWYWx1ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb24pLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNWZXJpZmljYXRpb25TdGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyaXNvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNWZXJpZmljYXRpb25TdGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNWZXJpZmljYXRpb25TdGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbiksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1dvcmtmbG93U3RhdHVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJpc29uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1dvcmtmbG93U3RhdHVzVG9UZXJyYWZvcm0oc3RydWN0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1dvcmtmbG93U3RhdHVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyaXNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF3c0FjY291bnRJZD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNBd3NBY2NvdW50SWRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhbnlOYW1lPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NvbXBhbnlOYW1lW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wbGlhbmNlU3RhdHVzPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NvbXBsaWFuY2VTdGF0dXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmZpZGVuY2U/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ29uZmlkZW5jZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NyZWF0ZWRBdFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JpdGljYWxpdHk/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ3JpdGljYWxpdHlbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0Rlc2NyaXB0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaW5kaW5nUHJvdmlkZXJGaWVsZHNDb25maWRlbmNlPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2VbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybj86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eUxhYmVsPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5TGFiZWxbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5T3JpZ2luYWw/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlPcmlnaW5hbFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmluZGluZ1Byb3ZpZGVyRmllbGRzVHlwZXM/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzVHlwZXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpcnN0T2JzZXJ2ZWRBdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaXJzdE9ic2VydmVkQXRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdlbmVyYXRvcklkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0dlbmVyYXRvcklkW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNJZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5d29yZD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNLZXl3b3JkW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXN0T2JzZXJ2ZWRBdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNMYXN0T2JzZXJ2ZWRBdFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFsd2FyZU5hbWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZU5hbWVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hbHdhcmVQYXRoPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVQYXRoW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYWx3YXJlU3RhdGU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZVN0YXRlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYWx3YXJlVHlwZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNNYWx3YXJlVHlwZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEZXN0aW5hdGlvbkRvbWFpbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0Rlc3RpbmF0aW9uSXB2ND86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGVzdGluYXRpb25JcHY0W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZXR3b3JrRGVzdGluYXRpb25JcHY2PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEZXN0aW5hdGlvbklwdjZbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5ldHdvcmtEZXN0aW5hdGlvblBvcnQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uUG9ydFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0RpcmVjdGlvbj86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGlyZWN0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZXR3b3JrUHJvdG9jb2w/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1Byb3RvY29sW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZXR3b3JrU291cmNlRG9tYWluPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtTb3VyY2VEb21haW5bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5ldHdvcmtTb3VyY2VJcHY0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtTb3VyY2VJcHY0W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZXR3b3JrU291cmNlSXB2Nj86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlSXB2NltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya1NvdXJjZU1hYz86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlTWFjW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZXR3b3JrU291cmNlUG9ydD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlUG9ydFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90ZVRleHQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVRleHRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vdGVVcGRhdGVkQXQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRBdFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90ZVVwZGF0ZWRCeT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOb3RlVXBkYXRlZEJ5W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9jZXNzTGF1bmNoZWRBdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzTGF1bmNoZWRBdFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc05hbWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc05hbWVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2Nlc3NQYXJlbnRQaWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BhcmVudFBpZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc1BhdGg/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BhdGhbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2Nlc3NQaWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BpZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc1Rlcm1pbmF0ZWRBdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzVGVybWluYXRlZEF0W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9kdWN0QXJuPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2R1Y3RBcm5bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2R1Y3RGaWVsZHM/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdEZpZWxkc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvZHVjdE5hbWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdE5hbWVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29tbWVuZGF0aW9uVGV4dD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWNvbW1lbmRhdGlvblRleHRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZFN0YXRlPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlY29yZFN0YXRlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWxhdGVkRmluZGluZ3NJZD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWxhdGVkRmluZGluZ3NJZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybj86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUF3c0VjMkluc3RhbmNlSWFtSW5zdGFuY2VQcm9maWxlQXJuPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJYW1JbnN0YW5jZVByb2ZpbGVBcm5bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXdzRWMySW5zdGFuY2VJbWFnZUlkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJbWFnZUlkW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3Nlcz86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3Nlc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXM/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXdzRWMySW5zdGFuY2VLZXlOYW1lPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VLZXlOYW1lW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVN1Ym5ldElkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXdzRWMySW5zdGFuY2VWcGNJZD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1cz86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1c1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlVc2VyTmFtZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVVzZXJOYW1lW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVyTmFtZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c1MzQnVja2V0T3duZXJOYW1lW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUNvbnRhaW5lckltYWdlSWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJJbWFnZUlkW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VDb250YWluZXJOYW1lPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTmFtZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VEZXRhaWxzT3RoZXI/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VEZXRhaWxzT3RoZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlSWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VJZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VQYXJ0aXRpb24/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VQYXJ0aXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlUmVnaW9uPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlUmVnaW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVRhZ3M/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VUYWdzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVR5cGU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VUeXBlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXZlcml0eUxhYmVsPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1NldmVyaXR5TGFiZWxbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZVVybD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNTb3VyY2VVcmxbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnk/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JDYXRlZ29yeVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclNvdXJjZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2VVcmw/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2VVcmxbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocmVhdEludGVsSW5kaWNhdG9yVHlwZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclR5cGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocmVhdEludGVsSW5kaWNhdG9yVmFsdWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JWYWx1ZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGl0bGU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGl0bGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVHlwZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXBkYXRlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VwZGF0ZWRBdFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlckRlZmluZWRWYWx1ZXM/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXNlckRlZmluZWRWYWx1ZXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcmlmaWNhdGlvblN0YXRlPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1ZlcmlmaWNhdGlvblN0YXRlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3b3JrZmxvd1N0YXR1cz86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNXb3JrZmxvd1N0YXR1c1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNPdXRwdXRSZWZlcmVuY2UgfCBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXdzX2FjY291bnRfaWQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0F3c0FjY291bnRJZFRvVGVycmFmb3JtKShzdHJ1Y3QhLmF3c0FjY291bnRJZCksXG4gICAgY29tcGFueV9uYW1lOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDb21wYW55TmFtZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbXBhbnlOYW1lKSxcbiAgICBjb21wbGlhbmNlX3N0YXR1czogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ29tcGxpYW5jZVN0YXR1c1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbXBsaWFuY2VTdGF0dXMpLFxuICAgIGNvbmZpZGVuY2U6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NvbmZpZGVuY2VUb1RlcnJhZm9ybSkoc3RydWN0IS5jb25maWRlbmNlKSxcbiAgICBjcmVhdGVkX2F0OiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDcmVhdGVkQXRUb1RlcnJhZm9ybSkoc3RydWN0IS5jcmVhdGVkQXQpLFxuICAgIGNyaXRpY2FsaXR5OiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDcml0aWNhbGl0eVRvVGVycmFmb3JtKShzdHJ1Y3QhLmNyaXRpY2FsaXR5KSxcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRGVzY3JpcHRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgZmluZGluZ19wcm92aWRlcl9maWVsZHNfY29uZmlkZW5jZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzQ29uZmlkZW5jZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2UpLFxuICAgIGZpbmRpbmdfcHJvdmlkZXJfZmllbGRzX2NyaXRpY2FsaXR5OiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNDcml0aWNhbGl0eVRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5KSxcbiAgICBmaW5kaW5nX3Byb3ZpZGVyX2ZpZWxkc19yZWxhdGVkX2ZpbmRpbmdzX2lkOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZFRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc0lkKSxcbiAgICBmaW5kaW5nX3Byb3ZpZGVyX2ZpZWxkc19yZWxhdGVkX2ZpbmRpbmdzX3Byb2R1Y3RfYXJuOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybiksXG4gICAgZmluZGluZ19wcm92aWRlcl9maWVsZHNfc2V2ZXJpdHlfbGFiZWw6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5TGFiZWxUb1RlcnJhZm9ybSkoc3RydWN0IS5maW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eUxhYmVsKSxcbiAgICBmaW5kaW5nX3Byb3ZpZGVyX2ZpZWxkc19zZXZlcml0eV9vcmlnaW5hbDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlPcmlnaW5hbFRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5T3JpZ2luYWwpLFxuICAgIGZpbmRpbmdfcHJvdmlkZXJfZmllbGRzX3R5cGVzOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNUeXBlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzKSxcbiAgICBmaXJzdF9vYnNlcnZlZF9hdDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmlyc3RPYnNlcnZlZEF0VG9UZXJyYWZvcm0pKHN0cnVjdCEuZmlyc3RPYnNlcnZlZEF0KSxcbiAgICBnZW5lcmF0b3JfaWQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0dlbmVyYXRvcklkVG9UZXJyYWZvcm0pKHN0cnVjdCEuZ2VuZXJhdG9ySWQpLFxuICAgIGlkOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNJZFRvVGVycmFmb3JtKShzdHJ1Y3QhLmlkKSxcbiAgICBrZXl3b3JkOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNLZXl3b3JkVG9UZXJyYWZvcm0pKHN0cnVjdCEua2V5d29yZCksXG4gICAgbGFzdF9vYnNlcnZlZF9hdDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTGFzdE9ic2VydmVkQXRUb1RlcnJhZm9ybSkoc3RydWN0IS5sYXN0T2JzZXJ2ZWRBdCksXG4gICAgbWFsd2FyZV9uYW1lOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNNYWx3YXJlTmFtZVRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hbHdhcmVOYW1lKSxcbiAgICBtYWx3YXJlX3BhdGg6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVQYXRoVG9UZXJyYWZvcm0pKHN0cnVjdCEubWFsd2FyZVBhdGgpLFxuICAgIG1hbHdhcmVfc3RhdGU6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVTdGF0ZVRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hbHdhcmVTdGF0ZSksXG4gICAgbWFsd2FyZV90eXBlOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNNYWx3YXJlVHlwZVRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hbHdhcmVUeXBlKSxcbiAgICBuZXR3b3JrX2Rlc3RpbmF0aW9uX2RvbWFpbjogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluVG9UZXJyYWZvcm0pKHN0cnVjdCEubmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluKSxcbiAgICBuZXR3b3JrX2Rlc3RpbmF0aW9uX2lwdjQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEZXN0aW5hdGlvbklwdjRUb1RlcnJhZm9ybSkoc3RydWN0IS5uZXR3b3JrRGVzdGluYXRpb25JcHY0KSxcbiAgICBuZXR3b3JrX2Rlc3RpbmF0aW9uX2lwdjY6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEZXN0aW5hdGlvbklwdjZUb1RlcnJhZm9ybSkoc3RydWN0IS5uZXR3b3JrRGVzdGluYXRpb25JcHY2KSxcbiAgICBuZXR3b3JrX2Rlc3RpbmF0aW9uX3BvcnQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEZXN0aW5hdGlvblBvcnRUb1RlcnJhZm9ybSkoc3RydWN0IS5uZXR3b3JrRGVzdGluYXRpb25Qb3J0KSxcbiAgICBuZXR3b3JrX2RpcmVjdGlvbjogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0RpcmVjdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLm5ldHdvcmtEaXJlY3Rpb24pLFxuICAgIG5ldHdvcmtfcHJvdG9jb2w6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtQcm90b2NvbFRvVGVycmFmb3JtKShzdHJ1Y3QhLm5ldHdvcmtQcm90b2NvbCksXG4gICAgbmV0d29ya19zb3VyY2VfZG9tYWluOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlRG9tYWluVG9UZXJyYWZvcm0pKHN0cnVjdCEubmV0d29ya1NvdXJjZURvbWFpbiksXG4gICAgbmV0d29ya19zb3VyY2VfaXB2NDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZUlwdjRUb1RlcnJhZm9ybSkoc3RydWN0IS5uZXR3b3JrU291cmNlSXB2NCksXG4gICAgbmV0d29ya19zb3VyY2VfaXB2NjogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZUlwdjZUb1RlcnJhZm9ybSkoc3RydWN0IS5uZXR3b3JrU291cmNlSXB2NiksXG4gICAgbmV0d29ya19zb3VyY2VfbWFjOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlTWFjVG9UZXJyYWZvcm0pKHN0cnVjdCEubmV0d29ya1NvdXJjZU1hYyksXG4gICAgbmV0d29ya19zb3VyY2VfcG9ydDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya1NvdXJjZVBvcnRUb1RlcnJhZm9ybSkoc3RydWN0IS5uZXR3b3JrU291cmNlUG9ydCksXG4gICAgbm90ZV90ZXh0OiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOb3RlVGV4dFRvVGVycmFmb3JtKShzdHJ1Y3QhLm5vdGVUZXh0KSxcbiAgICBub3RlX3VwZGF0ZWRfYXQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05vdGVVcGRhdGVkQXRUb1RlcnJhZm9ybSkoc3RydWN0IS5ub3RlVXBkYXRlZEF0KSxcbiAgICBub3RlX3VwZGF0ZWRfYnk6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05vdGVVcGRhdGVkQnlUb1RlcnJhZm9ybSkoc3RydWN0IS5ub3RlVXBkYXRlZEJ5KSxcbiAgICBwcm9jZXNzX2xhdW5jaGVkX2F0OiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzTGF1bmNoZWRBdFRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2Nlc3NMYXVuY2hlZEF0KSxcbiAgICBwcm9jZXNzX25hbWU6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NOYW1lVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvY2Vzc05hbWUpLFxuICAgIHByb2Nlc3NfcGFyZW50X3BpZDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BhcmVudFBpZFRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2Nlc3NQYXJlbnRQaWQpLFxuICAgIHByb2Nlc3NfcGF0aDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BhdGhUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9jZXNzUGF0aCksXG4gICAgcHJvY2Vzc19waWQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NQaWRUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9jZXNzUGlkKSxcbiAgICBwcm9jZXNzX3Rlcm1pbmF0ZWRfYXQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NUZXJtaW5hdGVkQXRUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9jZXNzVGVybWluYXRlZEF0KSxcbiAgICBwcm9kdWN0X2FybjogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdEFyblRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2R1Y3RBcm4pLFxuICAgIHByb2R1Y3RfZmllbGRzOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9kdWN0RmllbGRzVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvZHVjdEZpZWxkcyksXG4gICAgcHJvZHVjdF9uYW1lOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9kdWN0TmFtZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2R1Y3ROYW1lKSxcbiAgICByZWNvbW1lbmRhdGlvbl90ZXh0OiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWNvbW1lbmRhdGlvblRleHRUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWNvbW1lbmRhdGlvblRleHQpLFxuICAgIHJlY29yZF9zdGF0ZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVjb3JkU3RhdGVUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWNvcmRTdGF0ZSksXG4gICAgcmVsYXRlZF9maW5kaW5nc19pZDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVsYXRlZEZpbmRpbmdzSWRUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWxhdGVkRmluZGluZ3NJZCksXG4gICAgcmVsYXRlZF9maW5kaW5nc19wcm9kdWN0X2FybjogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFyblRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4pLFxuICAgIHJlc291cmNlX2F3c19lYzJfaW5zdGFuY2VfaWFtX2luc3RhbmNlX3Byb2ZpbGVfYXJuOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSWFtSW5zdGFuY2VQcm9maWxlQXJuVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlhbUluc3RhbmNlUHJvZmlsZUFybiksXG4gICAgcmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV9pbWFnZV9pZDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWRUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUF3c0VjMkluc3RhbmNlSW1hZ2VJZCksXG4gICAgcmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV9pcHY0X2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjRBZGRyZXNzZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3NlcyksXG4gICAgcmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV9pcHY2X2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NkFkZHJlc3NlcyksXG4gICAgcmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV9rZXlfbmFtZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUtleU5hbWVUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZSksXG4gICAgcmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV9sYXVuY2hlZF9hdDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXRUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdCksXG4gICAgcmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV9zdWJuZXRfaWQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZFRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZCksXG4gICAgcmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV90eXBlOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlVHlwZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlc291cmNlQXdzRWMySW5zdGFuY2VUeXBlKSxcbiAgICByZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX3ZwY19pZDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkKSxcbiAgICByZXNvdXJjZV9hd3NfaWFtX2FjY2Vzc19rZXlfY3JlYXRlZF9hdDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXRUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleUNyZWF0ZWRBdCksXG4gICAgcmVzb3VyY2VfYXdzX2lhbV9hY2Nlc3Nfa2V5X3N0YXR1czogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlTdGF0dXNUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1cyksXG4gICAgcmVzb3VyY2VfYXdzX2lhbV9hY2Nlc3Nfa2V5X3VzZXJfbmFtZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlVc2VyTmFtZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWUpLFxuICAgIHJlc291cmNlX2F3c19zM19idWNrZXRfb3duZXJfaWQ6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzUzNCdWNrZXRPd25lcklkVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VBd3NTM0J1Y2tldE93bmVySWQpLFxuICAgIHJlc291cmNlX2F3c19zM19idWNrZXRfb3duZXJfbmFtZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NTM0J1Y2tldE93bmVyTmFtZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlc291cmNlQXdzUzNCdWNrZXRPd25lck5hbWUpLFxuICAgIHJlc291cmNlX2NvbnRhaW5lcl9pbWFnZV9pZDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJJbWFnZUlkVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VDb250YWluZXJJbWFnZUlkKSxcbiAgICByZXNvdXJjZV9jb250YWluZXJfaW1hZ2VfbmFtZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWVUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZSksXG4gICAgcmVzb3VyY2VfY29udGFpbmVyX2xhdW5jaGVkX2F0OiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckxhdW5jaGVkQXRUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUNvbnRhaW5lckxhdW5jaGVkQXQpLFxuICAgIHJlc291cmNlX2NvbnRhaW5lcl9uYW1lOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lck5hbWVUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZUNvbnRhaW5lck5hbWUpLFxuICAgIHJlc291cmNlX2RldGFpbHNfb3RoZXI6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlRGV0YWlsc090aGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VEZXRhaWxzT3RoZXIpLFxuICAgIHJlc291cmNlX2lkOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUlkVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VJZCksXG4gICAgcmVzb3VyY2VfcGFydGl0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZVBhcnRpdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlc291cmNlUGFydGl0aW9uKSxcbiAgICByZXNvdXJjZV9yZWdpb246IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlUmVnaW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VSZWdpb24pLFxuICAgIHJlc291cmNlX3RhZ3M6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlVGFnc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnJlc291cmNlVGFncyksXG4gICAgcmVzb3VyY2VfdHlwZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VUeXBlVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VUeXBlKSxcbiAgICBzZXZlcml0eV9sYWJlbDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzU2V2ZXJpdHlMYWJlbFRvVGVycmFmb3JtKShzdHJ1Y3QhLnNldmVyaXR5TGFiZWwpLFxuICAgIHNvdXJjZV91cmw6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1NvdXJjZVVybFRvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZVVybCksXG4gICAgdGhyZWF0X2ludGVsX2luZGljYXRvcl9jYXRlZ29yeTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JDYXRlZ29yeVRvVGVycmFmb3JtKShzdHJ1Y3QhLnRocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnkpLFxuICAgIHRocmVhdF9pbnRlbF9pbmRpY2F0b3JfbGFzdF9vYnNlcnZlZF9hdDogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdFRvVGVycmFmb3JtKShzdHJ1Y3QhLnRocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXQpLFxuICAgIHRocmVhdF9pbnRlbF9pbmRpY2F0b3Jfc291cmNlOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclNvdXJjZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnRocmVhdEludGVsSW5kaWNhdG9yU291cmNlKSxcbiAgICB0aHJlYXRfaW50ZWxfaW5kaWNhdG9yX3NvdXJjZV91cmw6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsVG9UZXJyYWZvcm0pKHN0cnVjdCEudGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2VVcmwpLFxuICAgIHRocmVhdF9pbnRlbF9pbmRpY2F0b3JfdHlwZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlVG9UZXJyYWZvcm0pKHN0cnVjdCEudGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlKSxcbiAgICB0aHJlYXRfaW50ZWxfaW5kaWNhdG9yX3ZhbHVlOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclZhbHVlVG9UZXJyYWZvcm0pKHN0cnVjdCEudGhyZWF0SW50ZWxJbmRpY2F0b3JWYWx1ZSksXG4gICAgdGl0bGU6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RpdGxlVG9UZXJyYWZvcm0pKHN0cnVjdCEudGl0bGUpLFxuICAgIHR5cGU6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1R5cGVUb1RlcnJhZm9ybSkoc3RydWN0IS50eXBlKSxcbiAgICB1cGRhdGVkX2F0OiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNVcGRhdGVkQXRUb1RlcnJhZm9ybSkoc3RydWN0IS51cGRhdGVkQXQpLFxuICAgIHVzZXJfZGVmaW5lZF92YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VzZXJEZWZpbmVkVmFsdWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEudXNlckRlZmluZWRWYWx1ZXMpLFxuICAgIHZlcmlmaWNhdGlvbl9zdGF0ZTogY2RrdGYubGlzdE1hcHBlcihzZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVmVyaWZpY2F0aW9uU3RhdGVUb1RlcnJhZm9ybSkoc3RydWN0IS52ZXJpZmljYXRpb25TdGF0ZSksXG4gICAgd29ya2Zsb3dfc3RhdHVzOiBjZGt0Zi5saXN0TWFwcGVyKHNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNXb3JrZmxvd1N0YXR1c1RvVGVycmFmb3JtKShzdHJ1Y3QhLndvcmtmbG93U3RhdHVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hd3NBY2NvdW50SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF3c0FjY291bnRJZCA9IHRoaXMuX2F3c0FjY291bnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXBhbnlOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb21wYW55TmFtZSA9IHRoaXMuX2NvbXBhbnlOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcGxpYW5jZVN0YXR1cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcGxpYW5jZVN0YXR1cyA9IHRoaXMuX2NvbXBsaWFuY2VTdGF0dXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25maWRlbmNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25maWRlbmNlID0gdGhpcy5fY29uZmlkZW5jZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NyZWF0ZWRBdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlYXRlZEF0ID0gdGhpcy5fY3JlYXRlZEF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3JpdGljYWxpdHkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyaXRpY2FsaXR5ID0gdGhpcy5fY3JpdGljYWxpdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXNjcmlwdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzY3JpcHRpb24gPSB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2UgPSB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNDb25maWRlbmNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzQ3JpdGljYWxpdHkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5ID0gdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzQ3JpdGljYWxpdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzSWQgPSB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4gPSB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbCA9IHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5TGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eU9yaWdpbmFsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eU9yaWdpbmFsID0gdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlPcmlnaW5hbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maW5kaW5nUHJvdmlkZXJGaWVsZHNUeXBlcyA9IHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlyc3RPYnNlcnZlZEF0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maXJzdE9ic2VydmVkQXQgPSB0aGlzLl9maXJzdE9ic2VydmVkQXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9nZW5lcmF0b3JJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ2VuZXJhdG9ySWQgPSB0aGlzLl9nZW5lcmF0b3JJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pZCA9IHRoaXMuX2lkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2V5d29yZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2V5d29yZCA9IHRoaXMuX2tleXdvcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYXN0T2JzZXJ2ZWRBdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFzdE9ic2VydmVkQXQgPSB0aGlzLl9sYXN0T2JzZXJ2ZWRBdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hbHdhcmVOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYWx3YXJlTmFtZSA9IHRoaXMuX21hbHdhcmVOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWFsd2FyZVBhdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hbHdhcmVQYXRoID0gdGhpcy5fbWFsd2FyZVBhdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYWx3YXJlU3RhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hbHdhcmVTdGF0ZSA9IHRoaXMuX21hbHdhcmVTdGF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hbHdhcmVUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYWx3YXJlVHlwZSA9IHRoaXMuX21hbHdhcmVUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uZXR3b3JrRGVzdGluYXRpb25Eb21haW4gPSB0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25Eb21haW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25JcHY0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uZXR3b3JrRGVzdGluYXRpb25JcHY0ID0gdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uSXB2NDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25ldHdvcmtEZXN0aW5hdGlvbklwdjYpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5ldHdvcmtEZXN0aW5hdGlvbklwdjYgPSB0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25JcHY2O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uUG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya0Rlc3RpbmF0aW9uUG9ydCA9IHRoaXMuX25ldHdvcmtEZXN0aW5hdGlvblBvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXR3b3JrRGlyZWN0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uZXR3b3JrRGlyZWN0aW9uID0gdGhpcy5fbmV0d29ya0RpcmVjdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25ldHdvcmtQcm90b2NvbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya1Byb3RvY29sID0gdGhpcy5fbmV0d29ya1Byb3RvY29sO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmV0d29ya1NvdXJjZURvbWFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya1NvdXJjZURvbWFpbiA9IHRoaXMuX25ldHdvcmtTb3VyY2VEb21haW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXR3b3JrU291cmNlSXB2NCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya1NvdXJjZUlwdjQgPSB0aGlzLl9uZXR3b3JrU291cmNlSXB2NDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25ldHdvcmtTb3VyY2VJcHY2KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uZXR3b3JrU291cmNlSXB2NiA9IHRoaXMuX25ldHdvcmtTb3VyY2VJcHY2O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmV0d29ya1NvdXJjZU1hYykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya1NvdXJjZU1hYyA9IHRoaXMuX25ldHdvcmtTb3VyY2VNYWM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXR3b3JrU291cmNlUG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya1NvdXJjZVBvcnQgPSB0aGlzLl9uZXR3b3JrU291cmNlUG9ydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vdGVUZXh0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ub3RlVGV4dCA9IHRoaXMuX25vdGVUZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbm90ZVVwZGF0ZWRBdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90ZVVwZGF0ZWRBdCA9IHRoaXMuX25vdGVVcGRhdGVkQXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub3RlVXBkYXRlZEJ5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ub3RlVXBkYXRlZEJ5ID0gdGhpcy5fbm90ZVVwZGF0ZWRCeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb2Nlc3NMYXVuY2hlZEF0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9jZXNzTGF1bmNoZWRBdCA9IHRoaXMuX3Byb2Nlc3NMYXVuY2hlZEF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvY2Vzc05hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2Nlc3NOYW1lID0gdGhpcy5fcHJvY2Vzc05hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9jZXNzUGFyZW50UGlkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9jZXNzUGFyZW50UGlkID0gdGhpcy5fcHJvY2Vzc1BhcmVudFBpZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb2Nlc3NQYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9jZXNzUGF0aCA9IHRoaXMuX3Byb2Nlc3NQYXRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvY2Vzc1BpZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvY2Vzc1BpZCA9IHRoaXMuX3Byb2Nlc3NQaWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9jZXNzVGVybWluYXRlZEF0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9jZXNzVGVybWluYXRlZEF0ID0gdGhpcy5fcHJvY2Vzc1Rlcm1pbmF0ZWRBdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb2R1Y3RBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2R1Y3RBcm4gPSB0aGlzLl9wcm9kdWN0QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvZHVjdEZpZWxkcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvZHVjdEZpZWxkcyA9IHRoaXMuX3Byb2R1Y3RGaWVsZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9kdWN0TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvZHVjdE5hbWUgPSB0aGlzLl9wcm9kdWN0TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlY29tbWVuZGF0aW9uVGV4dCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb21tZW5kYXRpb25UZXh0ID0gdGhpcy5fcmVjb21tZW5kYXRpb25UZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkU3RhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZFN0YXRlID0gdGhpcy5fcmVjb3JkU3RhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWxhdGVkRmluZGluZ3NJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVsYXRlZEZpbmRpbmdzSWQgPSB0aGlzLl9yZWxhdGVkRmluZGluZ3NJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4gPSB0aGlzLl9yZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlhbUluc3RhbmNlUHJvZmlsZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlhbUluc3RhbmNlUHJvZmlsZUFybiA9IHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJYW1JbnN0YW5jZVByb2ZpbGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSW1hZ2VJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWQgPSB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSW1hZ2VJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY0QWRkcmVzc2VzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3NlcyA9IHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY0QWRkcmVzc2VzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXdzRWMySW5zdGFuY2VJcHY2QWRkcmVzc2VzID0gdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBd3NFYzJJbnN0YW5jZUtleU5hbWUgPSB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdCA9IHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVN1Ym5ldElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUF3c0VjMkluc3RhbmNlU3VibmV0SWQgPSB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlU3VibmV0SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGUgPSB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VWcGNJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkID0gdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0ID0gdGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlTdGF0dXMgPSB0aGlzLl9yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWUgPSB0aGlzLl9yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVVzZXJOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVySWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXdzUzNCdWNrZXRPd25lcklkID0gdGhpcy5fcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVySWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUF3c1MzQnVja2V0T3duZXJOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUF3c1MzQnVja2V0T3duZXJOYW1lID0gdGhpcy5fcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVyTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQ29udGFpbmVySW1hZ2VJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VDb250YWluZXJJbWFnZUlkID0gdGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQ29udGFpbmVySW1hZ2VOYW1lID0gdGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUNvbnRhaW5lckxhdW5jaGVkQXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdCA9IHRoaXMuX3Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQ29udGFpbmVyTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VDb250YWluZXJOYW1lID0gdGhpcy5fcmVzb3VyY2VDb250YWluZXJOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VEZXRhaWxzT3RoZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlRGV0YWlsc090aGVyID0gdGhpcy5fcmVzb3VyY2VEZXRhaWxzT3RoZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUlkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUlkID0gdGhpcy5fcmVzb3VyY2VJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlUGFydGl0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZVBhcnRpdGlvbiA9IHRoaXMuX3Jlc291cmNlUGFydGl0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VSZWdpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlUmVnaW9uID0gdGhpcy5fcmVzb3VyY2VSZWdpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZVRhZ3MpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlVGFncyA9IHRoaXMuX3Jlc291cmNlVGFncztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VUeXBlID0gdGhpcy5fcmVzb3VyY2VUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2V2ZXJpdHlMYWJlbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2V2ZXJpdHlMYWJlbCA9IHRoaXMuX3NldmVyaXR5TGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VVcmwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZVVybCA9IHRoaXMuX3NvdXJjZVVybDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnkgPSB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvckNhdGVnb3J5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdCA9IHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2UgPSB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZVVybCA9IHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aHJlYXRJbnRlbEluZGljYXRvclR5cGUgPSB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aHJlYXRJbnRlbEluZGljYXRvclZhbHVlID0gdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpdGxlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aXRsZSA9IHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGVkQXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVwZGF0ZWRBdCA9IHRoaXMuX3VwZGF0ZWRBdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZXJEZWZpbmVkVmFsdWVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyRGVmaW5lZFZhbHVlcyA9IHRoaXMuX3VzZXJEZWZpbmVkVmFsdWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVyaWZpY2F0aW9uU3RhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZlcmlmaWNhdGlvblN0YXRlID0gdGhpcy5fdmVyaWZpY2F0aW9uU3RhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl93b3JrZmxvd1N0YXR1cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud29ya2Zsb3dTdGF0dXMgPSB0aGlzLl93b3JrZmxvd1N0YXR1cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hd3NBY2NvdW50SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wYW55TmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbXBsaWFuY2VTdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb25maWRlbmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3JlYXRlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3JpdGljYWxpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNDcml0aWNhbGl0eSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc0lkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eU9yaWdpbmFsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzVHlwZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maXJzdE9ic2VydmVkQXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9nZW5lcmF0b3JJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5d29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhc3RPYnNlcnZlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFsd2FyZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYWx3YXJlUGF0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hbHdhcmVTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hbHdhcmVUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uSXB2NCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25ldHdvcmtEZXN0aW5hdGlvbklwdjYgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25Qb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmV0d29ya0RpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25ldHdvcmtQcm90b2NvbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25ldHdvcmtTb3VyY2VEb21haW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uZXR3b3JrU291cmNlSXB2NCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25ldHdvcmtTb3VyY2VJcHY2ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmV0d29ya1NvdXJjZU1hYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25ldHdvcmtTb3VyY2VQb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbm90ZVRleHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub3RlVXBkYXRlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbm90ZVVwZGF0ZWRCeSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NMYXVuY2hlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9jZXNzUGFyZW50UGlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc1BhdGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9jZXNzUGlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc1Rlcm1pbmF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb2R1Y3RBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9kdWN0RmllbGRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvZHVjdE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWNvbW1lbmRhdGlvblRleHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWNvcmRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlbGF0ZWRGaW5kaW5nc0lkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJYW1JbnN0YW5jZVByb2ZpbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSW1hZ2VJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY0QWRkcmVzc2VzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVN1Ym5ldElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleUNyZWF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzSWFtQWNjZXNzS2V5U3RhdHVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlVc2VyTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzUzNCdWNrZXRPd25lcklkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVyTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQ29udGFpbmVySW1hZ2VJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQ29udGFpbmVySW1hZ2VOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VDb250YWluZXJOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VEZXRhaWxzT3RoZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VQYXJ0aXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZVJlZ2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlVGFncyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NldmVyaXR5TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zb3VyY2VVcmwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvckNhdGVnb3J5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2VVcmwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGl0bGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXBkYXRlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlckRlZmluZWRWYWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92ZXJpZmljYXRpb25TdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3dvcmtmbG93U3RhdHVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hd3NBY2NvdW50SWQgPSB2YWx1ZS5hd3NBY2NvdW50SWQ7XG4gICAgICB0aGlzLl9jb21wYW55TmFtZSA9IHZhbHVlLmNvbXBhbnlOYW1lO1xuICAgICAgdGhpcy5fY29tcGxpYW5jZVN0YXR1cyA9IHZhbHVlLmNvbXBsaWFuY2VTdGF0dXM7XG4gICAgICB0aGlzLl9jb25maWRlbmNlID0gdmFsdWUuY29uZmlkZW5jZTtcbiAgICAgIHRoaXMuX2NyZWF0ZWRBdCA9IHZhbHVlLmNyZWF0ZWRBdDtcbiAgICAgIHRoaXMuX2NyaXRpY2FsaXR5ID0gdmFsdWUuY3JpdGljYWxpdHk7XG4gICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzQ29uZmlkZW5jZSA9IHZhbHVlLmZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2U7XG4gICAgICB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNDcml0aWNhbGl0eSA9IHZhbHVlLmZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5O1xuICAgICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzSWQgPSB2YWx1ZS5maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZDtcbiAgICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4gPSB2YWx1ZS5maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuO1xuICAgICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbCA9IHZhbHVlLmZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5TGFiZWw7XG4gICAgICB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eU9yaWdpbmFsID0gdmFsdWUuZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlPcmlnaW5hbDtcbiAgICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzID0gdmFsdWUuZmluZGluZ1Byb3ZpZGVyRmllbGRzVHlwZXM7XG4gICAgICB0aGlzLl9maXJzdE9ic2VydmVkQXQgPSB2YWx1ZS5maXJzdE9ic2VydmVkQXQ7XG4gICAgICB0aGlzLl9nZW5lcmF0b3JJZCA9IHZhbHVlLmdlbmVyYXRvcklkO1xuICAgICAgdGhpcy5faWQgPSB2YWx1ZS5pZDtcbiAgICAgIHRoaXMuX2tleXdvcmQgPSB2YWx1ZS5rZXl3b3JkO1xuICAgICAgdGhpcy5fbGFzdE9ic2VydmVkQXQgPSB2YWx1ZS5sYXN0T2JzZXJ2ZWRBdDtcbiAgICAgIHRoaXMuX21hbHdhcmVOYW1lID0gdmFsdWUubWFsd2FyZU5hbWU7XG4gICAgICB0aGlzLl9tYWx3YXJlUGF0aCA9IHZhbHVlLm1hbHdhcmVQYXRoO1xuICAgICAgdGhpcy5fbWFsd2FyZVN0YXRlID0gdmFsdWUubWFsd2FyZVN0YXRlO1xuICAgICAgdGhpcy5fbWFsd2FyZVR5cGUgPSB2YWx1ZS5tYWx3YXJlVHlwZTtcbiAgICAgIHRoaXMuX25ldHdvcmtEZXN0aW5hdGlvbkRvbWFpbiA9IHZhbHVlLm5ldHdvcmtEZXN0aW5hdGlvbkRvbWFpbjtcbiAgICAgIHRoaXMuX25ldHdvcmtEZXN0aW5hdGlvbklwdjQgPSB2YWx1ZS5uZXR3b3JrRGVzdGluYXRpb25JcHY0O1xuICAgICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uSXB2NiA9IHZhbHVlLm5ldHdvcmtEZXN0aW5hdGlvbklwdjY7XG4gICAgICB0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25Qb3J0ID0gdmFsdWUubmV0d29ya0Rlc3RpbmF0aW9uUG9ydDtcbiAgICAgIHRoaXMuX25ldHdvcmtEaXJlY3Rpb24gPSB2YWx1ZS5uZXR3b3JrRGlyZWN0aW9uO1xuICAgICAgdGhpcy5fbmV0d29ya1Byb3RvY29sID0gdmFsdWUubmV0d29ya1Byb3RvY29sO1xuICAgICAgdGhpcy5fbmV0d29ya1NvdXJjZURvbWFpbiA9IHZhbHVlLm5ldHdvcmtTb3VyY2VEb21haW47XG4gICAgICB0aGlzLl9uZXR3b3JrU291cmNlSXB2NCA9IHZhbHVlLm5ldHdvcmtTb3VyY2VJcHY0O1xuICAgICAgdGhpcy5fbmV0d29ya1NvdXJjZUlwdjYgPSB2YWx1ZS5uZXR3b3JrU291cmNlSXB2NjtcbiAgICAgIHRoaXMuX25ldHdvcmtTb3VyY2VNYWMgPSB2YWx1ZS5uZXR3b3JrU291cmNlTWFjO1xuICAgICAgdGhpcy5fbmV0d29ya1NvdXJjZVBvcnQgPSB2YWx1ZS5uZXR3b3JrU291cmNlUG9ydDtcbiAgICAgIHRoaXMuX25vdGVUZXh0ID0gdmFsdWUubm90ZVRleHQ7XG4gICAgICB0aGlzLl9ub3RlVXBkYXRlZEF0ID0gdmFsdWUubm90ZVVwZGF0ZWRBdDtcbiAgICAgIHRoaXMuX25vdGVVcGRhdGVkQnkgPSB2YWx1ZS5ub3RlVXBkYXRlZEJ5O1xuICAgICAgdGhpcy5fcHJvY2Vzc0xhdW5jaGVkQXQgPSB2YWx1ZS5wcm9jZXNzTGF1bmNoZWRBdDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NOYW1lID0gdmFsdWUucHJvY2Vzc05hbWU7XG4gICAgICB0aGlzLl9wcm9jZXNzUGFyZW50UGlkID0gdmFsdWUucHJvY2Vzc1BhcmVudFBpZDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NQYXRoID0gdmFsdWUucHJvY2Vzc1BhdGg7XG4gICAgICB0aGlzLl9wcm9jZXNzUGlkID0gdmFsdWUucHJvY2Vzc1BpZDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NUZXJtaW5hdGVkQXQgPSB2YWx1ZS5wcm9jZXNzVGVybWluYXRlZEF0O1xuICAgICAgdGhpcy5fcHJvZHVjdEFybiA9IHZhbHVlLnByb2R1Y3RBcm47XG4gICAgICB0aGlzLl9wcm9kdWN0RmllbGRzID0gdmFsdWUucHJvZHVjdEZpZWxkcztcbiAgICAgIHRoaXMuX3Byb2R1Y3ROYW1lID0gdmFsdWUucHJvZHVjdE5hbWU7XG4gICAgICB0aGlzLl9yZWNvbW1lbmRhdGlvblRleHQgPSB2YWx1ZS5yZWNvbW1lbmRhdGlvblRleHQ7XG4gICAgICB0aGlzLl9yZWNvcmRTdGF0ZSA9IHZhbHVlLnJlY29yZFN0YXRlO1xuICAgICAgdGhpcy5fcmVsYXRlZEZpbmRpbmdzSWQgPSB2YWx1ZS5yZWxhdGVkRmluZGluZ3NJZDtcbiAgICAgIHRoaXMuX3JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4gPSB2YWx1ZS5yZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlhbUluc3RhbmNlUHJvZmlsZUFybiA9IHZhbHVlLnJlc291cmNlQXdzRWMySW5zdGFuY2VJYW1JbnN0YW5jZVByb2ZpbGVBcm47XG4gICAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSW1hZ2VJZCA9IHZhbHVlLnJlc291cmNlQXdzRWMySW5zdGFuY2VJbWFnZUlkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjRBZGRyZXNzZXMgPSB2YWx1ZS5yZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3NlcztcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY2QWRkcmVzc2VzID0gdmFsdWUucmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXM7XG4gICAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZSA9IHZhbHVlLnJlc291cmNlQXdzRWMySW5zdGFuY2VLZXlOYW1lO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXQgPSB2YWx1ZS5yZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZCA9IHZhbHVlLnJlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VUeXBlID0gdmFsdWUucmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWQgPSB2YWx1ZS5yZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleUNyZWF0ZWRBdCA9IHZhbHVlLnJlc291cmNlQXdzSWFtQWNjZXNzS2V5Q3JlYXRlZEF0O1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlTdGF0dXMgPSB2YWx1ZS5yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1cztcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWUgPSB2YWx1ZS5yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVVzZXJOYW1lO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVySWQgPSB2YWx1ZS5yZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXdzUzNCdWNrZXRPd25lck5hbWUgPSB2YWx1ZS5yZXNvdXJjZUF3c1MzQnVja2V0T3duZXJOYW1lO1xuICAgICAgdGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZUlkID0gdmFsdWUucmVzb3VyY2VDb250YWluZXJJbWFnZUlkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWUgPSB2YWx1ZS5yZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdCA9IHZhbHVlLnJlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQ29udGFpbmVyTmFtZSA9IHZhbHVlLnJlc291cmNlQ29udGFpbmVyTmFtZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlRGV0YWlsc090aGVyID0gdmFsdWUucmVzb3VyY2VEZXRhaWxzT3RoZXI7XG4gICAgICB0aGlzLl9yZXNvdXJjZUlkID0gdmFsdWUucmVzb3VyY2VJZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlUGFydGl0aW9uID0gdmFsdWUucmVzb3VyY2VQYXJ0aXRpb247XG4gICAgICB0aGlzLl9yZXNvdXJjZVJlZ2lvbiA9IHZhbHVlLnJlc291cmNlUmVnaW9uO1xuICAgICAgdGhpcy5fcmVzb3VyY2VUYWdzID0gdmFsdWUucmVzb3VyY2VUYWdzO1xuICAgICAgdGhpcy5fcmVzb3VyY2VUeXBlID0gdmFsdWUucmVzb3VyY2VUeXBlO1xuICAgICAgdGhpcy5fc2V2ZXJpdHlMYWJlbCA9IHZhbHVlLnNldmVyaXR5TGFiZWw7XG4gICAgICB0aGlzLl9zb3VyY2VVcmwgPSB2YWx1ZS5zb3VyY2VVcmw7XG4gICAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvckNhdGVnb3J5ID0gdmFsdWUudGhyZWF0SW50ZWxJbmRpY2F0b3JDYXRlZ29yeTtcbiAgICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXQgPSB2YWx1ZS50aHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0O1xuICAgICAgdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2UgPSB2YWx1ZS50aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZTtcbiAgICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsID0gdmFsdWUudGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2VVcmw7XG4gICAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclR5cGUgPSB2YWx1ZS50aHJlYXRJbnRlbEluZGljYXRvclR5cGU7XG4gICAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclZhbHVlID0gdmFsdWUudGhyZWF0SW50ZWxJbmRpY2F0b3JWYWx1ZTtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWUudGl0bGU7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMuX3VwZGF0ZWRBdCA9IHZhbHVlLnVwZGF0ZWRBdDtcbiAgICAgIHRoaXMuX3VzZXJEZWZpbmVkVmFsdWVzID0gdmFsdWUudXNlckRlZmluZWRWYWx1ZXM7XG4gICAgICB0aGlzLl92ZXJpZmljYXRpb25TdGF0ZSA9IHZhbHVlLnZlcmlmaWNhdGlvblN0YXRlO1xuICAgICAgdGhpcy5fd29ya2Zsb3dTdGF0dXMgPSB2YWx1ZS53b3JrZmxvd1N0YXR1cztcbiAgICB9XG4gIH1cblxuICAvLyBhd3NfYWNjb3VudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hd3NBY2NvdW50SWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQXdzQWNjb3VudElkW107IFxuICBwdWJsaWMgZ2V0IGF3c0FjY291bnRJZCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXdzX2FjY291bnRfaWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhd3NBY2NvdW50SWQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNBd3NBY2NvdW50SWRbXSkge1xuICAgIHRoaXMuX2F3c0FjY291bnRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF3c0FjY291bnRJZCgpIHtcbiAgICB0aGlzLl9hd3NBY2NvdW50SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF3c0FjY291bnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NBY2NvdW50SWQ7XG4gIH1cblxuICAvLyBjb21wYW55X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcGFueU5hbWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ29tcGFueU5hbWVbXTsgXG4gIHB1YmxpYyBnZXQgY29tcGFueU5hbWUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbXBhbnlfbmFtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXBhbnlOYW1lKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ29tcGFueU5hbWVbXSkge1xuICAgIHRoaXMuX2NvbXBhbnlOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcGFueU5hbWUoKSB7XG4gICAgdGhpcy5fY29tcGFueU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBhbnlOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhbnlOYW1lO1xuICB9XG5cbiAgLy8gY29tcGxpYW5jZV9zdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcGxpYW5jZVN0YXR1cz86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDb21wbGlhbmNlU3RhdHVzW107IFxuICBwdWJsaWMgZ2V0IGNvbXBsaWFuY2VTdGF0dXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbXBsaWFuY2Vfc3RhdHVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcGxpYW5jZVN0YXR1cyh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NvbXBsaWFuY2VTdGF0dXNbXSkge1xuICAgIHRoaXMuX2NvbXBsaWFuY2VTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wbGlhbmNlU3RhdHVzKCkge1xuICAgIHRoaXMuX2NvbXBsaWFuY2VTdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBsaWFuY2VTdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxpYW5jZVN0YXR1cztcbiAgfVxuXG4gIC8vIGNvbmZpZGVuY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29uZmlkZW5jZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNDb25maWRlbmNlW107IFxuICBwdWJsaWMgZ2V0IGNvbmZpZGVuY2UoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbmZpZGVuY2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWRlbmNlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ29uZmlkZW5jZVtdKSB7XG4gICAgdGhpcy5fY29uZmlkZW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbmZpZGVuY2UoKSB7XG4gICAgdGhpcy5fY29uZmlkZW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlkZW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWRlbmNlO1xuICB9XG5cbiAgLy8gY3JlYXRlZF9hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVhdGVkQXQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ3JlYXRlZEF0W107IFxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRBdCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3JlYXRlZF9hdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZWRBdCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NyZWF0ZWRBdFtdKSB7XG4gICAgdGhpcy5fY3JlYXRlZEF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlZEF0KCkge1xuICAgIHRoaXMuX2NyZWF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlZEF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWRBdDtcbiAgfVxuXG4gIC8vIGNyaXRpY2FsaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyaXRpY2FsaXR5PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0NyaXRpY2FsaXR5W107IFxuICBwdWJsaWMgZ2V0IGNyaXRpY2FsaXR5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjcml0aWNhbGl0eScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyaXRpY2FsaXR5KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzQ3JpdGljYWxpdHlbXSkge1xuICAgIHRoaXMuX2NyaXRpY2FsaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JpdGljYWxpdHkoKSB7XG4gICAgdGhpcy5fY3JpdGljYWxpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyaXRpY2FsaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyaXRpY2FsaXR5O1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRGVzY3JpcHRpb25bXTsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNEZXNjcmlwdGlvbltdKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBmaW5kaW5nX3Byb3ZpZGVyX2ZpZWxkc19jb25maWRlbmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2U/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzQ29uZmlkZW5jZVtdOyBcbiAgcHVibGljIGdldCBmaW5kaW5nUHJvdmlkZXJGaWVsZHNDb25maWRlbmNlKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaW5kaW5nX3Byb3ZpZGVyX2ZpZWxkc19jb25maWRlbmNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZmluZGluZ1Byb3ZpZGVyRmllbGRzQ29uZmlkZW5jZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2VbXSkge1xuICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaW5kaW5nUHJvdmlkZXJGaWVsZHNDb25maWRlbmNlKCkge1xuICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc0NvbmZpZGVuY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzQ29uZmlkZW5jZTtcbiAgfVxuXG4gIC8vIGZpbmRpbmdfcHJvdmlkZXJfZmllbGRzX2NyaXRpY2FsaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5W107IFxuICBwdWJsaWMgZ2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaW5kaW5nX3Byb3ZpZGVyX2ZpZWxkc19jcml0aWNhbGl0eScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzQ3JpdGljYWxpdHlbXSkge1xuICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmluZGluZ1Byb3ZpZGVyRmllbGRzQ3JpdGljYWxpdHkoKSB7XG4gICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzQ3JpdGljYWxpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc0NyaXRpY2FsaXR5O1xuICB9XG5cbiAgLy8gZmluZGluZ19wcm92aWRlcl9maWVsZHNfcmVsYXRlZF9maW5kaW5nc19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZFtdOyBcbiAgcHVibGljIGdldCBmaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NJZCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmluZGluZ19wcm92aWRlcl9maWVsZHNfcmVsYXRlZF9maW5kaW5nc19pZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc0lkKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzSWRbXSkge1xuICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzSWQoKSB7XG4gICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc0lkO1xuICB9XG5cbiAgLy8gZmluZGluZ19wcm92aWRlcl9maWVsZHNfcmVsYXRlZF9maW5kaW5nc19wcm9kdWN0X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm5bXTsgXG4gIHB1YmxpYyBnZXQgZmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmluZGluZ19wcm92aWRlcl9maWVsZHNfcmVsYXRlZF9maW5kaW5nc19wcm9kdWN0X2FybicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4odmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuW10pIHtcbiAgICB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmluZGluZ1Byb3ZpZGVyRmllbGRzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybigpIHtcbiAgICB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaW5kaW5nUHJvdmlkZXJGaWVsZHNSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm47XG4gIH1cblxuICAvLyBmaW5kaW5nX3Byb3ZpZGVyX2ZpZWxkc19zZXZlcml0eV9sYWJlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eUxhYmVsPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5TGFiZWxbXTsgXG4gIHB1YmxpYyBnZXQgZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmluZGluZ19wcm92aWRlcl9maWVsZHNfc2V2ZXJpdHlfbGFiZWwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmaW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eUxhYmVsKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbFtdKSB7XG4gICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5TGFiZWwoKSB7XG4gICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlMYWJlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eUxhYmVsO1xuICB9XG5cbiAgLy8gZmluZGluZ19wcm92aWRlcl9maWVsZHNfc2V2ZXJpdHlfb3JpZ2luYWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlPcmlnaW5hbD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNGaW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eU9yaWdpbmFsW107IFxuICBwdWJsaWMgZ2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5T3JpZ2luYWwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpbmRpbmdfcHJvdmlkZXJfZmllbGRzX3NldmVyaXR5X29yaWdpbmFsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlPcmlnaW5hbCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5T3JpZ2luYWxbXSkge1xuICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5T3JpZ2luYWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaW5kaW5nUHJvdmlkZXJGaWVsZHNTZXZlcml0eU9yaWdpbmFsKCkge1xuICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5T3JpZ2luYWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc1NldmVyaXR5T3JpZ2luYWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzU2V2ZXJpdHlPcmlnaW5hbDtcbiAgfVxuXG4gIC8vIGZpbmRpbmdfcHJvdmlkZXJfZmllbGRzX3R5cGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzW107IFxuICBwdWJsaWMgZ2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaW5kaW5nX3Byb3ZpZGVyX2ZpZWxkc190eXBlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmluZGluZ1Byb3ZpZGVyRmllbGRzVHlwZXNbXSkge1xuICAgIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmluZGluZ1Byb3ZpZGVyRmllbGRzVHlwZXMoKSB7XG4gICAgdGhpcy5fZmluZGluZ1Byb3ZpZGVyRmllbGRzVHlwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRpbmdQcm92aWRlckZpZWxkc1R5cGVzO1xuICB9XG5cbiAgLy8gZmlyc3Rfb2JzZXJ2ZWRfYXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlyc3RPYnNlcnZlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0ZpcnN0T2JzZXJ2ZWRBdFtdOyBcbiAgcHVibGljIGdldCBmaXJzdE9ic2VydmVkQXQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpcnN0X29ic2VydmVkX2F0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZmlyc3RPYnNlcnZlZEF0KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzRmlyc3RPYnNlcnZlZEF0W10pIHtcbiAgICB0aGlzLl9maXJzdE9ic2VydmVkQXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaXJzdE9ic2VydmVkQXQoKSB7XG4gICAgdGhpcy5fZmlyc3RPYnNlcnZlZEF0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJzdE9ic2VydmVkQXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyc3RPYnNlcnZlZEF0O1xuICB9XG5cbiAgLy8gZ2VuZXJhdG9yX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dlbmVyYXRvcklkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0dlbmVyYXRvcklkW107IFxuICBwdWJsaWMgZ2V0IGdlbmVyYXRvcklkKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdnZW5lcmF0b3JfaWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBnZW5lcmF0b3JJZCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0dlbmVyYXRvcklkW10pIHtcbiAgICB0aGlzLl9nZW5lcmF0b3JJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdlbmVyYXRvcklkKCkge1xuICAgIHRoaXMuX2dlbmVyYXRvcklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnZW5lcmF0b3JJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0b3JJZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0lkW107IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzSWRbXSkge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8ga2V5d29yZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXl3b3JkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0tleXdvcmRbXTsgXG4gIHB1YmxpYyBnZXQga2V5d29yZCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgna2V5d29yZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleXdvcmQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNLZXl3b3JkW10pIHtcbiAgICB0aGlzLl9rZXl3b3JkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5d29yZCgpIHtcbiAgICB0aGlzLl9rZXl3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXl3b3JkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXdvcmQ7XG4gIH1cblxuICAvLyBsYXN0X29ic2VydmVkX2F0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhc3RPYnNlcnZlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc0xhc3RPYnNlcnZlZEF0W107IFxuICBwdWJsaWMgZ2V0IGxhc3RPYnNlcnZlZEF0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYXN0X29ic2VydmVkX2F0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbGFzdE9ic2VydmVkQXQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNMYXN0T2JzZXJ2ZWRBdFtdKSB7XG4gICAgdGhpcy5fbGFzdE9ic2VydmVkQXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXN0T2JzZXJ2ZWRBdCgpIHtcbiAgICB0aGlzLl9sYXN0T2JzZXJ2ZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFzdE9ic2VydmVkQXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdE9ic2VydmVkQXQ7XG4gIH1cblxuICAvLyBtYWx3YXJlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFsd2FyZU5hbWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZU5hbWVbXTsgXG4gIHB1YmxpYyBnZXQgbWFsd2FyZU5hbWUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21hbHdhcmVfbmFtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hbHdhcmVOYW1lKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZU5hbWVbXSkge1xuICAgIHRoaXMuX21hbHdhcmVOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFsd2FyZU5hbWUoKSB7XG4gICAgdGhpcy5fbWFsd2FyZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hbHdhcmVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbHdhcmVOYW1lO1xuICB9XG5cbiAgLy8gbWFsd2FyZV9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21hbHdhcmVQYXRoPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVQYXRoW107IFxuICBwdWJsaWMgZ2V0IG1hbHdhcmVQYXRoKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYWx3YXJlX3BhdGgnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtYWx3YXJlUGF0aCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVQYXRoW10pIHtcbiAgICB0aGlzLl9tYWx3YXJlUGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hbHdhcmVQYXRoKCkge1xuICAgIHRoaXMuX21hbHdhcmVQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYWx3YXJlUGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYWx3YXJlUGF0aDtcbiAgfVxuXG4gIC8vIG1hbHdhcmVfc3RhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFsd2FyZVN0YXRlPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc01hbHdhcmVTdGF0ZVtdOyBcbiAgcHVibGljIGdldCBtYWx3YXJlU3RhdGUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21hbHdhcmVfc3RhdGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtYWx3YXJlU3RhdGUodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNNYWx3YXJlU3RhdGVbXSkge1xuICAgIHRoaXMuX21hbHdhcmVTdGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hbHdhcmVTdGF0ZSgpIHtcbiAgICB0aGlzLl9tYWx3YXJlU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hbHdhcmVTdGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYWx3YXJlU3RhdGU7XG4gIH1cblxuICAvLyBtYWx3YXJlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFsd2FyZVR5cGU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZVR5cGVbXTsgXG4gIHB1YmxpYyBnZXQgbWFsd2FyZVR5cGUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21hbHdhcmVfdHlwZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hbHdhcmVUeXBlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTWFsd2FyZVR5cGVbXSkge1xuICAgIHRoaXMuX21hbHdhcmVUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFsd2FyZVR5cGUoKSB7XG4gICAgdGhpcy5fbWFsd2FyZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hbHdhcmVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbHdhcmVUeXBlO1xuICB9XG5cbiAgLy8gbmV0d29ya19kZXN0aW5hdGlvbl9kb21haW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEZXN0aW5hdGlvbkRvbWFpbltdOyBcbiAgcHVibGljIGdldCBuZXR3b3JrRGVzdGluYXRpb25Eb21haW4oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfZGVzdGluYXRpb25fZG9tYWluJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluW10pIHtcbiAgICB0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25Eb21haW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrRGVzdGluYXRpb25Eb21haW4oKSB7XG4gICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXR3b3JrRGVzdGluYXRpb25Eb21haW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uRG9tYWluO1xuICB9XG5cbiAgLy8gbmV0d29ya19kZXN0aW5hdGlvbl9pcHY0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtEZXN0aW5hdGlvbklwdjQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uSXB2NFtdOyBcbiAgcHVibGljIGdldCBuZXR3b3JrRGVzdGluYXRpb25JcHY0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2Rlc3RpbmF0aW9uX2lwdjQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrRGVzdGluYXRpb25JcHY0KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uSXB2NFtdKSB7XG4gICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uSXB2NCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtEZXN0aW5hdGlvbklwdjQoKSB7XG4gICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uSXB2NCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0Rlc3RpbmF0aW9uSXB2NElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25JcHY0O1xuICB9XG5cbiAgLy8gbmV0d29ya19kZXN0aW5hdGlvbl9pcHY2IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtEZXN0aW5hdGlvbklwdjY/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uSXB2NltdOyBcbiAgcHVibGljIGdldCBuZXR3b3JrRGVzdGluYXRpb25JcHY2KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2Rlc3RpbmF0aW9uX2lwdjYnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrRGVzdGluYXRpb25JcHY2KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uSXB2NltdKSB7XG4gICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uSXB2NiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtEZXN0aW5hdGlvbklwdjYoKSB7XG4gICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uSXB2NiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0Rlc3RpbmF0aW9uSXB2NklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25JcHY2O1xuICB9XG5cbiAgLy8gbmV0d29ya19kZXN0aW5hdGlvbl9wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtEZXN0aW5hdGlvblBvcnQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uUG9ydFtdOyBcbiAgcHVibGljIGdldCBuZXR3b3JrRGVzdGluYXRpb25Qb3J0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2Rlc3RpbmF0aW9uX3BvcnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrRGVzdGluYXRpb25Qb3J0KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTmV0d29ya0Rlc3RpbmF0aW9uUG9ydFtdKSB7XG4gICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uUG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtEZXN0aW5hdGlvblBvcnQoKSB7XG4gICAgdGhpcy5fbmV0d29ya0Rlc3RpbmF0aW9uUG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0Rlc3RpbmF0aW9uUG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrRGVzdGluYXRpb25Qb3J0O1xuICB9XG5cbiAgLy8gbmV0d29ya19kaXJlY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya0RpcmVjdGlvbj86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrRGlyZWN0aW9uW107IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtEaXJlY3Rpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfZGlyZWN0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya0RpcmVjdGlvbih2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtEaXJlY3Rpb25bXSkge1xuICAgIHRoaXMuX25ldHdvcmtEaXJlY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrRGlyZWN0aW9uKCkge1xuICAgIHRoaXMuX25ldHdvcmtEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtEaXJlY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0RpcmVjdGlvbjtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfcHJvdG9jb2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya1Byb3RvY29sPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtQcm90b2NvbFtdOyBcbiAgcHVibGljIGdldCBuZXR3b3JrUHJvdG9jb2woKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfcHJvdG9jb2wnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrUHJvdG9jb2wodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrUHJvdG9jb2xbXSkge1xuICAgIHRoaXMuX25ldHdvcmtQcm90b2NvbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtQcm90b2NvbCgpIHtcbiAgICB0aGlzLl9uZXR3b3JrUHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtQcm90b2NvbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrUHJvdG9jb2w7XG4gIH1cblxuICAvLyBuZXR3b3JrX3NvdXJjZV9kb21haW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya1NvdXJjZURvbWFpbj86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlRG9tYWluW107IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtTb3VyY2VEb21haW4oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfc291cmNlX2RvbWFpbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtTb3VyY2VEb21haW4odmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlRG9tYWluW10pIHtcbiAgICB0aGlzLl9uZXR3b3JrU291cmNlRG9tYWluID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya1NvdXJjZURvbWFpbigpIHtcbiAgICB0aGlzLl9uZXR3b3JrU291cmNlRG9tYWluID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXR3b3JrU291cmNlRG9tYWluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtTb3VyY2VEb21haW47XG4gIH1cblxuICAvLyBuZXR3b3JrX3NvdXJjZV9pcHY0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtTb3VyY2VJcHY0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtTb3VyY2VJcHY0W107IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtTb3VyY2VJcHY0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX3NvdXJjZV9pcHY0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya1NvdXJjZUlwdjQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlSXB2NFtdKSB7XG4gICAgdGhpcy5fbmV0d29ya1NvdXJjZUlwdjQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrU291cmNlSXB2NCgpIHtcbiAgICB0aGlzLl9uZXR3b3JrU291cmNlSXB2NCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya1NvdXJjZUlwdjRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya1NvdXJjZUlwdjQ7XG4gIH1cblxuICAvLyBuZXR3b3JrX3NvdXJjZV9pcHY2IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtTb3VyY2VJcHY2PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtTb3VyY2VJcHY2W107IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtTb3VyY2VJcHY2KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX3NvdXJjZV9pcHY2JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya1NvdXJjZUlwdjYodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlSXB2NltdKSB7XG4gICAgdGhpcy5fbmV0d29ya1NvdXJjZUlwdjYgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrU291cmNlSXB2NigpIHtcbiAgICB0aGlzLl9uZXR3b3JrU291cmNlSXB2NiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya1NvdXJjZUlwdjZJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya1NvdXJjZUlwdjY7XG4gIH1cblxuICAvLyBuZXR3b3JrX3NvdXJjZV9tYWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya1NvdXJjZU1hYz86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlTWFjW107IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtTb3VyY2VNYWMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfc291cmNlX21hYycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtTb3VyY2VNYWModmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlTWFjW10pIHtcbiAgICB0aGlzLl9uZXR3b3JrU291cmNlTWFjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya1NvdXJjZU1hYygpIHtcbiAgICB0aGlzLl9uZXR3b3JrU291cmNlTWFjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXR3b3JrU291cmNlTWFjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtTb3VyY2VNYWM7XG4gIH1cblxuICAvLyBuZXR3b3JrX3NvdXJjZV9wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtTb3VyY2VQb3J0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc05ldHdvcmtTb3VyY2VQb3J0W107IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtTb3VyY2VQb3J0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX3NvdXJjZV9wb3J0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya1NvdXJjZVBvcnQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNOZXR3b3JrU291cmNlUG9ydFtdKSB7XG4gICAgdGhpcy5fbmV0d29ya1NvdXJjZVBvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrU291cmNlUG9ydCgpIHtcbiAgICB0aGlzLl9uZXR3b3JrU291cmNlUG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya1NvdXJjZVBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya1NvdXJjZVBvcnQ7XG4gIH1cblxuICAvLyBub3RlX3RleHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm90ZVRleHQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVRleHRbXTsgXG4gIHB1YmxpYyBnZXQgbm90ZVRleHQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25vdGVfdGV4dCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGVUZXh0KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVRleHRbXSkge1xuICAgIHRoaXMuX25vdGVUZXh0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90ZVRleHQoKSB7XG4gICAgdGhpcy5fbm90ZVRleHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGVUZXh0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGVUZXh0O1xuICB9XG5cbiAgLy8gbm90ZV91cGRhdGVkX2F0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGVVcGRhdGVkQXQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRBdFtdOyBcbiAgcHVibGljIGdldCBub3RlVXBkYXRlZEF0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdub3RlX3VwZGF0ZWRfYXQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBub3RlVXBkYXRlZEF0KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRBdFtdKSB7XG4gICAgdGhpcy5fbm90ZVVwZGF0ZWRBdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGVVcGRhdGVkQXQoKSB7XG4gICAgdGhpcy5fbm90ZVVwZGF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm90ZVVwZGF0ZWRBdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RlVXBkYXRlZEF0O1xuICB9XG5cbiAgLy8gbm90ZV91cGRhdGVkX2J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGVVcGRhdGVkQnk/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRCeVtdOyBcbiAgcHVibGljIGdldCBub3RlVXBkYXRlZEJ5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdub3RlX3VwZGF0ZWRfYnknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBub3RlVXBkYXRlZEJ5KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzTm90ZVVwZGF0ZWRCeVtdKSB7XG4gICAgdGhpcy5fbm90ZVVwZGF0ZWRCeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGVVcGRhdGVkQnkoKSB7XG4gICAgdGhpcy5fbm90ZVVwZGF0ZWRCeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm90ZVVwZGF0ZWRCeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RlVXBkYXRlZEJ5O1xuICB9XG5cbiAgLy8gcHJvY2Vzc19sYXVuY2hlZF9hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9jZXNzTGF1bmNoZWRBdD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzTGF1bmNoZWRBdFtdOyBcbiAgcHVibGljIGdldCBwcm9jZXNzTGF1bmNoZWRBdCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc19sYXVuY2hlZF9hdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2Nlc3NMYXVuY2hlZEF0KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc0xhdW5jaGVkQXRbXSkge1xuICAgIHRoaXMuX3Byb2Nlc3NMYXVuY2hlZEF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvY2Vzc0xhdW5jaGVkQXQoKSB7XG4gICAgdGhpcy5fcHJvY2Vzc0xhdW5jaGVkQXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2Nlc3NMYXVuY2hlZEF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NMYXVuY2hlZEF0O1xuICB9XG5cbiAgLy8gcHJvY2Vzc19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2Nlc3NOYW1lPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NOYW1lW107IFxuICBwdWJsaWMgZ2V0IHByb2Nlc3NOYW1lKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9jZXNzX25hbWUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9jZXNzTmFtZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NOYW1lW10pIHtcbiAgICB0aGlzLl9wcm9jZXNzTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2Nlc3NOYW1lKCkge1xuICAgIHRoaXMuX3Byb2Nlc3NOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9jZXNzTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzTmFtZTtcbiAgfVxuXG4gIC8vIHByb2Nlc3NfcGFyZW50X3BpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9jZXNzUGFyZW50UGlkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NQYXJlbnRQaWRbXTsgXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc1BhcmVudFBpZCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc19wYXJlbnRfcGlkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvY2Vzc1BhcmVudFBpZCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NQYXJlbnRQaWRbXSkge1xuICAgIHRoaXMuX3Byb2Nlc3NQYXJlbnRQaWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm9jZXNzUGFyZW50UGlkKCkge1xuICAgIHRoaXMuX3Byb2Nlc3NQYXJlbnRQaWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2Nlc3NQYXJlbnRQaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc1BhcmVudFBpZDtcbiAgfVxuXG4gIC8vIHByb2Nlc3NfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9jZXNzUGF0aD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzUGF0aFtdOyBcbiAgcHVibGljIGdldCBwcm9jZXNzUGF0aCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc19wYXRoJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvY2Vzc1BhdGgodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9jZXNzUGF0aFtdKSB7XG4gICAgdGhpcy5fcHJvY2Vzc1BhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm9jZXNzUGF0aCgpIHtcbiAgICB0aGlzLl9wcm9jZXNzUGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc1BhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc1BhdGg7XG4gIH1cblxuICAvLyBwcm9jZXNzX3BpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9jZXNzUGlkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2Nlc3NQaWRbXTsgXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc1BpZCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc19waWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9jZXNzUGlkKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1BpZFtdKSB7XG4gICAgdGhpcy5fcHJvY2Vzc1BpZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2Nlc3NQaWQoKSB7XG4gICAgdGhpcy5fcHJvY2Vzc1BpZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc1BpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzUGlkO1xuICB9XG5cbiAgLy8gcHJvY2Vzc190ZXJtaW5hdGVkX2F0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2Nlc3NUZXJtaW5hdGVkQXQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1Rlcm1pbmF0ZWRBdFtdOyBcbiAgcHVibGljIGdldCBwcm9jZXNzVGVybWluYXRlZEF0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9jZXNzX3Rlcm1pbmF0ZWRfYXQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9jZXNzVGVybWluYXRlZEF0KHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvY2Vzc1Rlcm1pbmF0ZWRBdFtdKSB7XG4gICAgdGhpcy5fcHJvY2Vzc1Rlcm1pbmF0ZWRBdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2Nlc3NUZXJtaW5hdGVkQXQoKSB7XG4gICAgdGhpcy5fcHJvY2Vzc1Rlcm1pbmF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc1Rlcm1pbmF0ZWRBdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzVGVybWluYXRlZEF0O1xuICB9XG5cbiAgLy8gcHJvZHVjdF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvZHVjdEFybj86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9kdWN0QXJuW107IFxuICBwdWJsaWMgZ2V0IHByb2R1Y3RBcm4oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb2R1Y3RfYXJuJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvZHVjdEFybih2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Byb2R1Y3RBcm5bXSkge1xuICAgIHRoaXMuX3Byb2R1Y3RBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm9kdWN0QXJuKCkge1xuICAgIHRoaXMuX3Byb2R1Y3RBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2R1Y3RBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZHVjdEFybjtcbiAgfVxuXG4gIC8vIHByb2R1Y3RfZmllbGRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2R1Y3RGaWVsZHM/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdEZpZWxkc1tdOyBcbiAgcHVibGljIGdldCBwcm9kdWN0RmllbGRzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9kdWN0X2ZpZWxkcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2R1Y3RGaWVsZHModmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNQcm9kdWN0RmllbGRzW10pIHtcbiAgICB0aGlzLl9wcm9kdWN0RmllbGRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvZHVjdEZpZWxkcygpIHtcbiAgICB0aGlzLl9wcm9kdWN0RmllbGRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9kdWN0RmllbGRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RGaWVsZHM7XG4gIH1cblxuICAvLyBwcm9kdWN0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvZHVjdE5hbWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdE5hbWVbXTsgXG4gIHB1YmxpYyBnZXQgcHJvZHVjdE5hbWUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb2R1Y3RfbmFtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2R1Y3ROYW1lKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUHJvZHVjdE5hbWVbXSkge1xuICAgIHRoaXMuX3Byb2R1Y3ROYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvZHVjdE5hbWUoKSB7XG4gICAgdGhpcy5fcHJvZHVjdE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2R1Y3ROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3ROYW1lO1xuICB9XG5cbiAgLy8gcmVjb21tZW5kYXRpb25fdGV4dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWNvbW1lbmRhdGlvblRleHQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVjb21tZW5kYXRpb25UZXh0W107IFxuICBwdWJsaWMgZ2V0IHJlY29tbWVuZGF0aW9uVGV4dCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVjb21tZW5kYXRpb25fdGV4dCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29tbWVuZGF0aW9uVGV4dCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlY29tbWVuZGF0aW9uVGV4dFtdKSB7XG4gICAgdGhpcy5fcmVjb21tZW5kYXRpb25UZXh0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVjb21tZW5kYXRpb25UZXh0KCkge1xuICAgIHRoaXMuX3JlY29tbWVuZGF0aW9uVGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb21tZW5kYXRpb25UZXh0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29tbWVuZGF0aW9uVGV4dDtcbiAgfVxuXG4gIC8vIHJlY29yZF9zdGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWNvcmRTdGF0ZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWNvcmRTdGF0ZVtdOyBcbiAgcHVibGljIGdldCByZWNvcmRTdGF0ZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVjb3JkX3N0YXRlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkU3RhdGUodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWNvcmRTdGF0ZVtdKSB7XG4gICAgdGhpcy5fcmVjb3JkU3RhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWNvcmRTdGF0ZSgpIHtcbiAgICB0aGlzLl9yZWNvcmRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkU3RhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkU3RhdGU7XG4gIH1cblxuICAvLyByZWxhdGVkX2ZpbmRpbmdzX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlbGF0ZWRGaW5kaW5nc0lkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlbGF0ZWRGaW5kaW5nc0lkW107IFxuICBwdWJsaWMgZ2V0IHJlbGF0ZWRGaW5kaW5nc0lkKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWxhdGVkX2ZpbmRpbmdzX2lkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVsYXRlZEZpbmRpbmdzSWQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZWxhdGVkRmluZGluZ3NJZFtdKSB7XG4gICAgdGhpcy5fcmVsYXRlZEZpbmRpbmdzSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWxhdGVkRmluZGluZ3NJZCgpIHtcbiAgICB0aGlzLl9yZWxhdGVkRmluZGluZ3NJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVsYXRlZEZpbmRpbmdzSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVsYXRlZEZpbmRpbmdzSWQ7XG4gIH1cblxuICAvLyByZWxhdGVkX2ZpbmRpbmdzX3Byb2R1Y3RfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybltdOyBcbiAgcHVibGljIGdldCByZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWxhdGVkX2ZpbmRpbmdzX3Byb2R1Y3RfYXJuJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybih2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm5bXSkge1xuICAgIHRoaXMuX3JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWxhdGVkRmluZGluZ3NQcm9kdWN0QXJuKCkge1xuICAgIHRoaXMuX3JlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlbGF0ZWRGaW5kaW5nc1Byb2R1Y3RBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVsYXRlZEZpbmRpbmdzUHJvZHVjdEFybjtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2F3c19lYzJfaW5zdGFuY2VfaWFtX2luc3RhbmNlX3Byb2ZpbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJYW1JbnN0YW5jZVByb2ZpbGVBcm4/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlhbUluc3RhbmNlUHJvZmlsZUFybltdOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUF3c0VjMkluc3RhbmNlSWFtSW5zdGFuY2VQcm9maWxlQXJuKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2lhbV9pbnN0YW5jZV9wcm9maWxlX2FybicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VJYW1JbnN0YW5jZVByb2ZpbGVBcm4odmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSWFtSW5zdGFuY2VQcm9maWxlQXJuW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSWFtSW5zdGFuY2VQcm9maWxlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlhbUluc3RhbmNlUHJvZmlsZUFybigpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSWFtSW5zdGFuY2VQcm9maWxlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUF3c0VjMkluc3RhbmNlSWFtSW5zdGFuY2VQcm9maWxlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJYW1JbnN0YW5jZVByb2ZpbGVBcm47XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2ltYWdlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJbWFnZUlkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJbWFnZUlkW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VJbWFnZUlkKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2ltYWdlX2lkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSW1hZ2VJZFtdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0VjMkluc3RhbmNlSW1hZ2VJZCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSW1hZ2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUltYWdlSWQ7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2lwdjRfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY0QWRkcmVzc2VzPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY0QWRkcmVzc2VzW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VJcHY0QWRkcmVzc2VzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2lwdjRfYWRkcmVzc2VzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjRBZGRyZXNzZXModmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3Nlc1tdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjRBZGRyZXNzZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3NlcygpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NEFkZHJlc3NlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjRBZGRyZXNzZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjRBZGRyZXNzZXM7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2lwdjZfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY2QWRkcmVzc2VzPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VJcHY2QWRkcmVzc2VzW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VJcHY2QWRkcmVzc2VzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2lwdjZfYWRkcmVzc2VzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXModmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NkFkZHJlc3Nlc1tdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NkFkZHJlc3NlcygpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlSXB2NkFkZHJlc3NlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUlwdjZBZGRyZXNzZXM7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2tleV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXdzRWMySW5zdGFuY2VLZXlOYW1lPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VLZXlOYW1lW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VLZXlOYW1lKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2tleV9uYW1lJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUtleU5hbWUodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZVtdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUtleU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZSgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlS2V5TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUtleU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUtleU5hbWU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2xhdW5jaGVkX2F0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0W107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VMYXVuY2hlZEF0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX2xhdW5jaGVkX2F0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdFtdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlTGF1bmNoZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZUxhdW5jaGVkQXQ7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX3N1Ym5ldF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNvdXJjZUF3c0VjMkluc3RhbmNlU3VibmV0SWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVN1Ym5ldElkW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV9zdWJuZXRfaWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUF3c0VjMkluc3RhbmNlU3VibmV0SWQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0VjMkluc3RhbmNlU3VibmV0SWRbXSkge1xuICAgIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlU3VibmV0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VTdWJuZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlU3VibmV0SWQ7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfZWMyX2luc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGVbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX2F3c19lYzJfaW5zdGFuY2VfdHlwZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VUeXBlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGVbXSkge1xuICAgIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGUoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzRWMySW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXdzRWMySW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXdzX2VjMl9pbnN0YW5jZV92cGNfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzRWMySW5zdGFuY2VWcGNJZFtdOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX2F3c19lYzJfaW5zdGFuY2VfdnBjX2lkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWQoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUF3c0VjMkluc3RhbmNlVnBjSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NFYzJJbnN0YW5jZVZwY0lkO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXdzX2lhbV9hY2Nlc3Nfa2V5X2NyZWF0ZWRfYXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXRbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX2F3c19pYW1fYWNjZXNzX2tleV9jcmVhdGVkX2F0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleUNyZWF0ZWRBdFtdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleUNyZWF0ZWRBdCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleUNyZWF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlDcmVhdGVkQXQ7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfaWFtX2FjY2Vzc19rZXlfc3RhdHVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXdzSWFtQWNjZXNzS2V5U3RhdHVzPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5U3RhdHVzW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzSWFtQWNjZXNzS2V5U3RhdHVzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9hd3NfaWFtX2FjY2Vzc19rZXlfc3RhdHVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlTdGF0dXModmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1c1tdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1cygpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlTdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlTdGF0dXM7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hd3NfaWFtX2FjY2Vzc19rZXlfdXNlcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlVc2VyTmFtZVtdOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVVzZXJOYW1lKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9hd3NfaWFtX2FjY2Vzc19rZXlfdXNlcl9uYW1lJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlVc2VyTmFtZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWVbXSkge1xuICAgIHRoaXMuX3Jlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c0lhbUFjY2Vzc0tleVVzZXJOYW1lKCkge1xuICAgIHRoaXMuX3Jlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzSWFtQWNjZXNzS2V5VXNlck5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NJYW1BY2Nlc3NLZXlVc2VyTmFtZTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2F3c19zM19idWNrZXRfb3duZXJfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVySWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VBd3NTM0J1Y2tldE93bmVySWRbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVySWQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX2F3c19zM19idWNrZXRfb3duZXJfaWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzUzNCdWNrZXRPd25lcklkW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlQXdzUzNCdWNrZXRPd25lcklkKCkge1xuICAgIHRoaXMuX3Jlc291cmNlQXdzUzNCdWNrZXRPd25lcklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUF3c1MzQnVja2V0T3duZXJJZDtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2F3c19zM19idWNrZXRfb3duZXJfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNvdXJjZUF3c1MzQnVja2V0T3duZXJOYW1lPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzUzNCdWNrZXRPd25lck5hbWVbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVyTmFtZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVzb3VyY2VfYXdzX3MzX2J1Y2tldF9vd25lcl9uYW1lJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVyTmFtZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQXdzUzNCdWNrZXRPd25lck5hbWVbXSkge1xuICAgIHRoaXMuX3Jlc291cmNlQXdzUzNCdWNrZXRPd25lck5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUF3c1MzQnVja2V0T3duZXJOYW1lKCkge1xuICAgIHRoaXMuX3Jlc291cmNlQXdzUzNCdWNrZXRPd25lck5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXdzUzNCdWNrZXRPd25lck5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBd3NTM0J1Y2tldE93bmVyTmFtZTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2NvbnRhaW5lcl9pbWFnZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNvdXJjZUNvbnRhaW5lckltYWdlSWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJJbWFnZUlkW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQ29udGFpbmVySW1hZ2VJZCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVzb3VyY2VfY29udGFpbmVyX2ltYWdlX2lkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VDb250YWluZXJJbWFnZUlkKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJJbWFnZUlkW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZUNvbnRhaW5lckltYWdlSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUNvbnRhaW5lckltYWdlSWQoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUNvbnRhaW5lckltYWdlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZUlkO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfY29udGFpbmVyX2ltYWdlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWVbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX2NvbnRhaW5lcl9pbWFnZV9uYW1lJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWUodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZVtdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZSgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUNvbnRhaW5lckltYWdlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VDb250YWluZXJJbWFnZU5hbWU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9jb250YWluZXJfbGF1bmNoZWRfYXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdFtdOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUNvbnRhaW5lckxhdW5jaGVkQXQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX2NvbnRhaW5lcl9sYXVuY2hlZF9hdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdFtdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0KCkge1xuICAgIHRoaXMuX3Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VDb250YWluZXJMYXVuY2hlZEF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQ29udGFpbmVyTGF1bmNoZWRBdDtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2NvbnRhaW5lcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQ29udGFpbmVyTmFtZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUNvbnRhaW5lck5hbWVbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VDb250YWluZXJOYW1lKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9jb250YWluZXJfbmFtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQ29udGFpbmVyTmFtZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlQ29udGFpbmVyTmFtZVtdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VDb250YWluZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VDb250YWluZXJOYW1lKCkge1xuICAgIHRoaXMuX3Jlc291cmNlQ29udGFpbmVyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VDb250YWluZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQ29udGFpbmVyTmFtZTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2RldGFpbHNfb3RoZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VEZXRhaWxzT3RoZXI/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VEZXRhaWxzT3RoZXJbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VEZXRhaWxzT3RoZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX2RldGFpbHNfb3RoZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZURldGFpbHNPdGhlcih2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlRGV0YWlsc090aGVyW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZURldGFpbHNPdGhlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlRGV0YWlsc090aGVyKCkge1xuICAgIHRoaXMuX3Jlc291cmNlRGV0YWlsc090aGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZURldGFpbHNPdGhlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZURldGFpbHNPdGhlcjtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlSWQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VJZFtdOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUlkKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9pZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlSWQodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZUlkW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VJZCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlSWQ7XG4gIH1cblxuICAvLyByZXNvdXJjZV9wYXJ0aXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VQYXJ0aXRpb24/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VQYXJ0aXRpb25bXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VQYXJ0aXRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX3BhcnRpdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlUGFydGl0aW9uKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VQYXJ0aXRpb25bXSkge1xuICAgIHRoaXMuX3Jlc291cmNlUGFydGl0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VQYXJ0aXRpb24oKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VQYXJ0aXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlUGFydGl0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlUGFydGl0aW9uO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfcmVnaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlUmVnaW9uPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlUmVnaW9uW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlUmVnaW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV9yZWdpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZVJlZ2lvbih2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlUmVnaW9uW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZVJlZ2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlUmVnaW9uKCkge1xuICAgIHRoaXMuX3Jlc291cmNlUmVnaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVJlZ2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZVJlZ2lvbjtcbiAgfVxuXG4gIC8vIHJlc291cmNlX3RhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VUYWdzPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1Jlc291cmNlVGFnc1tdOyBcbiAgcHVibGljIGdldCByZXNvdXJjZVRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZVRhZ3ModmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZVRhZ3NbXSkge1xuICAgIHRoaXMuX3Jlc291cmNlVGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlVGFncygpIHtcbiAgICB0aGlzLl9yZXNvdXJjZVRhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlVGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZVRhZ3M7XG4gIH1cblxuICAvLyByZXNvdXJjZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlVHlwZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNSZXNvdXJjZVR5cGVbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV90eXBlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VUeXBlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzUmVzb3VyY2VUeXBlW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZVR5cGUoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUeXBlO1xuICB9XG5cbiAgLy8gc2V2ZXJpdHlfbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2V2ZXJpdHlMYWJlbD86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNTZXZlcml0eUxhYmVsW107IFxuICBwdWJsaWMgZ2V0IHNldmVyaXR5TGFiZWwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NldmVyaXR5X2xhYmVsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2V2ZXJpdHlMYWJlbCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1NldmVyaXR5TGFiZWxbXSkge1xuICAgIHRoaXMuX3NldmVyaXR5TGFiZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXZlcml0eUxhYmVsKCkge1xuICAgIHRoaXMuX3NldmVyaXR5TGFiZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNldmVyaXR5TGFiZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V2ZXJpdHlMYWJlbDtcbiAgfVxuXG4gIC8vIHNvdXJjZV91cmwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlVXJsPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1NvdXJjZVVybFtdOyBcbiAgcHVibGljIGdldCBzb3VyY2VVcmwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NvdXJjZV91cmwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VVcmwodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNTb3VyY2VVcmxbXSkge1xuICAgIHRoaXMuX3NvdXJjZVVybCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZVVybCgpIHtcbiAgICB0aGlzLl9zb3VyY2VVcmwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZVVybElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VVcmw7XG4gIH1cblxuICAvLyB0aHJlYXRfaW50ZWxfaW5kaWNhdG9yX2NhdGVnb3J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnk/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JDYXRlZ29yeVtdOyBcbiAgcHVibGljIGdldCB0aHJlYXRJbnRlbEluZGljYXRvckNhdGVnb3J5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aHJlYXRfaW50ZWxfaW5kaWNhdG9yX2NhdGVnb3J5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyZWF0SW50ZWxJbmRpY2F0b3JDYXRlZ29yeSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnlbXSkge1xuICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHJlYXRJbnRlbEluZGljYXRvckNhdGVnb3J5KCkge1xuICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocmVhdEludGVsSW5kaWNhdG9yQ2F0ZWdvcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JDYXRlZ29yeTtcbiAgfVxuXG4gIC8vIHRocmVhdF9pbnRlbF9pbmRpY2F0b3JfbGFzdF9vYnNlcnZlZF9hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0PzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXRbXTsgXG4gIHB1YmxpYyBnZXQgdGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGhyZWF0X2ludGVsX2luZGljYXRvcl9sYXN0X29ic2VydmVkX2F0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXRbXSkge1xuICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHJlYXRJbnRlbEluZGljYXRvckxhc3RPYnNlcnZlZEF0KCkge1xuICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocmVhdEludGVsSW5kaWNhdG9yTGFzdE9ic2VydmVkQXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JMYXN0T2JzZXJ2ZWRBdDtcbiAgfVxuXG4gIC8vIHRocmVhdF9pbnRlbF9pbmRpY2F0b3Jfc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yU291cmNlW107IFxuICBwdWJsaWMgZ2V0IHRocmVhdEludGVsSW5kaWNhdG9yU291cmNlKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aHJlYXRfaW50ZWxfaW5kaWNhdG9yX3NvdXJjZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocmVhdEludGVsSW5kaWNhdG9yU291cmNlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2VbXSkge1xuICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2UoKSB7XG4gICAgdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JTb3VyY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocmVhdEludGVsSW5kaWNhdG9yU291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlO1xuICB9XG5cbiAgLy8gdGhyZWF0X2ludGVsX2luZGljYXRvcl9zb3VyY2VfdXJsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsW107IFxuICBwdWJsaWMgZ2V0IHRocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aHJlYXRfaW50ZWxfaW5kaWNhdG9yX3NvdXJjZV91cmwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZVVybCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsW10pIHtcbiAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZVVybCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsKCkge1xuICAgIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yU291cmNlVXJsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZVVybElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclNvdXJjZVVybDtcbiAgfVxuXG4gIC8vIHRocmVhdF9pbnRlbF9pbmRpY2F0b3JfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHJlYXRJbnRlbEluZGljYXRvclR5cGU/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlW107IFxuICBwdWJsaWMgZ2V0IHRocmVhdEludGVsSW5kaWNhdG9yVHlwZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGhyZWF0X2ludGVsX2luZGljYXRvcl90eXBlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlW10pIHtcbiAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHJlYXRJbnRlbEluZGljYXRvclR5cGUoKSB7XG4gICAgdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHJlYXRJbnRlbEluZGljYXRvclR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZWF0SW50ZWxJbmRpY2F0b3JUeXBlO1xuICB9XG5cbiAgLy8gdGhyZWF0X2ludGVsX2luZGljYXRvcl92YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHJlYXRJbnRlbEluZGljYXRvclZhbHVlPzogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RocmVhdEludGVsSW5kaWNhdG9yVmFsdWVbXTsgXG4gIHB1YmxpYyBnZXQgdGhyZWF0SW50ZWxJbmRpY2F0b3JWYWx1ZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGhyZWF0X2ludGVsX2luZGljYXRvcl92YWx1ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocmVhdEludGVsSW5kaWNhdG9yVmFsdWUodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaHJlYXRJbnRlbEluZGljYXRvclZhbHVlW10pIHtcbiAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyZWF0SW50ZWxJbmRpY2F0b3JWYWx1ZSgpIHtcbiAgICB0aGlzLl90aHJlYXRJbnRlbEluZGljYXRvclZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHJlYXRJbnRlbEluZGljYXRvclZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVhdEludGVsSW5kaWNhdG9yVmFsdWU7XG4gIH1cblxuICAvLyB0aXRsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aXRsZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUaXRsZVtdOyBcbiAgcHVibGljIGdldCB0aXRsZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGl0bGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RpdGxlW10pIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpdGxlKCkge1xuICAgIHRoaXMuX3RpdGxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aXRsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHlwZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNUeXBlW107IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3R5cGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVHlwZVtdKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR5cGUoKSB7XG4gICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gdXBkYXRlZF9hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91cGRhdGVkQXQ/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXBkYXRlZEF0W107IFxuICBwdWJsaWMgZ2V0IHVwZGF0ZWRBdCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndXBkYXRlZF9hdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHVwZGF0ZWRBdCh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VwZGF0ZWRBdFtdKSB7XG4gICAgdGhpcy5fdXBkYXRlZEF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXBkYXRlZEF0KCkge1xuICAgIHRoaXMuX3VwZGF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXBkYXRlZEF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZWRBdDtcbiAgfVxuXG4gIC8vIHVzZXJfZGVmaW5lZF92YWx1ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlckRlZmluZWRWYWx1ZXM/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzVXNlckRlZmluZWRWYWx1ZXNbXTsgXG4gIHB1YmxpYyBnZXQgdXNlckRlZmluZWRWYWx1ZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3VzZXJfZGVmaW5lZF92YWx1ZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyRGVmaW5lZFZhbHVlcyh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1VzZXJEZWZpbmVkVmFsdWVzW10pIHtcbiAgICB0aGlzLl91c2VyRGVmaW5lZFZhbHVlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJEZWZpbmVkVmFsdWVzKCkge1xuICAgIHRoaXMuX3VzZXJEZWZpbmVkVmFsdWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyRGVmaW5lZFZhbHVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyRGVmaW5lZFZhbHVlcztcbiAgfVxuXG4gIC8vIHZlcmlmaWNhdGlvbl9zdGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92ZXJpZmljYXRpb25TdGF0ZT86IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNWZXJpZmljYXRpb25TdGF0ZVtdOyBcbiAgcHVibGljIGdldCB2ZXJpZmljYXRpb25TdGF0ZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmVyaWZpY2F0aW9uX3N0YXRlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdmVyaWZpY2F0aW9uU3RhdGUodmFsdWU6IFNlY3VyaXR5aHViSW5zaWdodEZpbHRlcnNWZXJpZmljYXRpb25TdGF0ZVtdKSB7XG4gICAgdGhpcy5fdmVyaWZpY2F0aW9uU3RhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJpZmljYXRpb25TdGF0ZSgpIHtcbiAgICB0aGlzLl92ZXJpZmljYXRpb25TdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyaWZpY2F0aW9uU3RhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyaWZpY2F0aW9uU3RhdGU7XG4gIH1cblxuICAvLyB3b3JrZmxvd19zdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd29ya2Zsb3dTdGF0dXM/OiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzV29ya2Zsb3dTdGF0dXNbXTsgXG4gIHB1YmxpYyBnZXQgd29ya2Zsb3dTdGF0dXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3dvcmtmbG93X3N0YXR1cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHdvcmtmbG93U3RhdHVzKHZhbHVlOiBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzV29ya2Zsb3dTdGF0dXNbXSkge1xuICAgIHRoaXMuX3dvcmtmbG93U3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V29ya2Zsb3dTdGF0dXMoKSB7XG4gICAgdGhpcy5fd29ya2Zsb3dTdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdvcmtmbG93U3RhdHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtmbG93U3RhdHVzO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTZWN1cml0eWh1Ykluc2lnaHQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfc2VjdXJpdHlodWJfaW5zaWdodFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU2VjdXJpdHlodWJJbnNpZ2h0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc2VjdXJpdHlodWJfaW5zaWdodCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9ncm91cEJ5QXR0cmlidXRlID0gY29uZmlnLmdyb3VwQnlBdHRyaWJ1dGU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2ZpbHRlcnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5maWx0ZXJzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGdyb3VwX2J5X2F0dHJpYnV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ncm91cEJ5QXR0cmlidXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBncm91cEJ5QXR0cmlidXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ3JvdXBfYnlfYXR0cmlidXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBncm91cEJ5QXR0cmlidXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ncm91cEJ5QXR0cmlidXRlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdyb3VwQnlBdHRyaWJ1dGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JvdXBCeUF0dHJpYnV0ZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIGZpbHRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlsdGVycyA9IG5ldyBTZWN1cml0eWh1Ykluc2lnaHRGaWx0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImZpbHRlcnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZmlsdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycztcbiAgfVxuICBwdWJsaWMgcHV0RmlsdGVycyh2YWx1ZTogU2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVycykge1xuICAgIHRoaXMuX2ZpbHRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWx0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXBfYnlfYXR0cmlidXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ncm91cEJ5QXR0cmlidXRlKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgZmlsdGVyczogc2VjdXJpdHlodWJJbnNpZ2h0RmlsdGVyc1RvVGVycmFmb3JtKHRoaXMuX2ZpbHRlcnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19