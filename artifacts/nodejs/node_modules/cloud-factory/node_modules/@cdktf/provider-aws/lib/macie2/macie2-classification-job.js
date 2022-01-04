"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Macie2ClassificationJob = exports.Macie2ClassificationJobScheduleFrequencyOutputReference = exports.macie2ClassificationJobScheduleFrequencyToTerraform = exports.Macie2ClassificationJobS3JobDefinitionOutputReference = exports.macie2ClassificationJobS3JobDefinitionToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform = exports.macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform = exports.Macie2ClassificationJobUserPausedDetails = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class Macie2ClassificationJobUserPausedDetails extends cdktf.ComplexComputedList {
    // job_expires_at - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get jobExpiresAt() {
        return this.getStringAttribute('job_expires_at');
    }
    // job_imminent_expiration_health_event_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get jobImminentExpirationHealthEventArn() {
        return this.getStringAttribute('job_imminent_expiration_health_event_arn');
    }
    // job_paused_at - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get jobPausedAt() {
        return this.getStringAttribute('job_paused_at');
    }
}
exports.Macie2ClassificationJobUserPausedDetails = Macie2ClassificationJobUserPausedDetails;
_a = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobUserPausedDetails[_a] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobUserPausedDetails", version: "3.0.1" };
function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct.buckets),
    };
}
exports.macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform = macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
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
        if (this._comparator) {
            hasAnyValues = true;
            internalValueResult.comparator = this._comparator;
        }
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparator = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparator = value.comparator;
            this._key = value.key;
            this._values = value.values;
        }
    }
    /**
     * @stability stable
     */
    get comparator() {
        return this.getStringAttribute('comparator');
    }
    /**
     * @stability stable
     */
    set comparator(value) {
        this._comparator = value;
    }
    /**
     * @stability stable
     */
    resetComparator() {
        this._comparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get comparatorInput() {
        return this._comparator;
    }
    /**
     * @stability stable
     */
    get key() {
        return this.getStringAttribute('key');
    }
    /**
     * @stability stable
     */
    set key(value) {
        this._key = value;
    }
    /**
     * @stability stable
     */
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyInput() {
        return this._key;
    }
    /**
     * @stability stable
     */
    get values() {
        return this.getListAttribute('values');
    }
    /**
     * @stability stable
     */
    set values(value) {
        this._values = value;
    }
    /**
     * @stability stable
     */
    resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valuesInput() {
        return this._values;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference = Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference;
_b = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference[_b] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference", version: "3.0.1" };
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        target: cdktf.stringToTerraform(struct.target),
        tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform)(struct.tagValues),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
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
        if (this._comparator) {
            hasAnyValues = true;
            internalValueResult.comparator = this._comparator;
        }
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._target) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._tagValues) {
            hasAnyValues = true;
            internalValueResult.tagValues = this._tagValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparator = undefined;
            this._key = undefined;
            this._target = undefined;
            this._tagValues = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparator = value.comparator;
            this._key = value.key;
            this._target = value.target;
            this._tagValues = value.tagValues;
        }
    }
    /**
     * @stability stable
     */
    get comparator() {
        return this.getStringAttribute('comparator');
    }
    /**
     * @stability stable
     */
    set comparator(value) {
        this._comparator = value;
    }
    /**
     * @stability stable
     */
    resetComparator() {
        this._comparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get comparatorInput() {
        return this._comparator;
    }
    /**
     * @stability stable
     */
    get key() {
        return this.getStringAttribute('key');
    }
    /**
     * @stability stable
     */
    set key(value) {
        this._key = value;
    }
    /**
     * @stability stable
     */
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyInput() {
        return this._key;
    }
    /**
     * @stability stable
     */
    get target() {
        return this.getStringAttribute('target');
    }
    /**
     * @stability stable
     */
    set target(value) {
        this._target = value;
    }
    /**
     * @stability stable
     */
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetInput() {
        return this._target;
    }
    /**
     * @stability stable
     */
    get tagValues() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tag_values');
    }
    /**
     * @stability stable
     */
    set tagValues(value) {
        this._tagValues = value;
    }
    /**
     * @stability stable
     */
    resetTagValues() {
        this._tagValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagValuesInput() {
        return this._tagValues;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference = Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference;
_c = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference[_c] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference", version: "3.0.1" };
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        simple_scope_term: macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct.simpleScopeTerm),
        tag_scope_term: macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct.tagScopeTerm),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform)(struct.and),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference extends cdktf.ComplexObject {
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
        if (this._and) {
            hasAnyValues = true;
            internalValueResult.and = this._and;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._and = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._and = value.and;
        }
    }
    /**
     * @stability stable
     */
    get and() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('and');
    }
    /**
     * @stability stable
     */
    set and(value) {
        this._and = value;
    }
    /**
     * @stability stable
     */
    resetAnd() {
        this._and = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get andInput() {
        return this._and;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference = Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference;
_d = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference[_d] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference", version: "3.0.1" };
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
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
        if (this._comparator) {
            hasAnyValues = true;
            internalValueResult.comparator = this._comparator;
        }
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparator = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparator = value.comparator;
            this._key = value.key;
            this._values = value.values;
        }
    }
    /**
     * @stability stable
     */
    get comparator() {
        return this.getStringAttribute('comparator');
    }
    /**
     * @stability stable
     */
    set comparator(value) {
        this._comparator = value;
    }
    /**
     * @stability stable
     */
    resetComparator() {
        this._comparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get comparatorInput() {
        return this._comparator;
    }
    /**
     * @stability stable
     */
    get key() {
        return this.getStringAttribute('key');
    }
    /**
     * @stability stable
     */
    set key(value) {
        this._key = value;
    }
    /**
     * @stability stable
     */
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyInput() {
        return this._key;
    }
    /**
     * @stability stable
     */
    get values() {
        return this.getListAttribute('values');
    }
    /**
     * @stability stable
     */
    set values(value) {
        this._values = value;
    }
    /**
     * @stability stable
     */
    resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valuesInput() {
        return this._values;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference = Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference;
_e = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference[_e] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference", version: "3.0.1" };
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        target: cdktf.stringToTerraform(struct.target),
        tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform)(struct.tagValues),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
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
        if (this._comparator) {
            hasAnyValues = true;
            internalValueResult.comparator = this._comparator;
        }
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._target) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._tagValues) {
            hasAnyValues = true;
            internalValueResult.tagValues = this._tagValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparator = undefined;
            this._key = undefined;
            this._target = undefined;
            this._tagValues = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparator = value.comparator;
            this._key = value.key;
            this._target = value.target;
            this._tagValues = value.tagValues;
        }
    }
    /**
     * @stability stable
     */
    get comparator() {
        return this.getStringAttribute('comparator');
    }
    /**
     * @stability stable
     */
    set comparator(value) {
        this._comparator = value;
    }
    /**
     * @stability stable
     */
    resetComparator() {
        this._comparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get comparatorInput() {
        return this._comparator;
    }
    /**
     * @stability stable
     */
    get key() {
        return this.getStringAttribute('key');
    }
    /**
     * @stability stable
     */
    set key(value) {
        this._key = value;
    }
    /**
     * @stability stable
     */
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyInput() {
        return this._key;
    }
    /**
     * @stability stable
     */
    get target() {
        return this.getStringAttribute('target');
    }
    /**
     * @stability stable
     */
    set target(value) {
        this._target = value;
    }
    /**
     * @stability stable
     */
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetInput() {
        return this._target;
    }
    /**
     * @stability stable
     */
    get tagValues() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tag_values');
    }
    /**
     * @stability stable
     */
    set tagValues(value) {
        this._tagValues = value;
    }
    /**
     * @stability stable
     */
    resetTagValues() {
        this._tagValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagValuesInput() {
        return this._tagValues;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference = Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference;
_f = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference[_f] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference", version: "3.0.1" };
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        simple_scope_term: macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct.simpleScopeTerm),
        tag_scope_term: macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct.tagScopeTerm),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform)(struct.and),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference extends cdktf.ComplexObject {
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
        if (this._and) {
            hasAnyValues = true;
            internalValueResult.and = this._and;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._and = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._and = value.and;
        }
    }
    /**
     * @stability stable
     */
    get and() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('and');
    }
    /**
     * @stability stable
     */
    set and(value) {
        this._and = value;
    }
    /**
     * @stability stable
     */
    resetAnd() {
        this._and = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get andInput() {
        return this._and;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference = Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference;
_g = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference[_g] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference", version: "3.0.1" };
function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        excludes: macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct.excludes),
        includes: macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct.includes),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingToTerraform = macie2ClassificationJobS3JobDefinitionScopingToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobS3JobDefinitionScopingOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // excludes - computed: false, optional: true, required: false
        this._excludes = new Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference(this, "excludes", true);
        // includes - computed: false, optional: true, required: false
        this._includes = new Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference(this, "includes", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _m, _o, _p, _q;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_m = this._excludes) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.excludes = (_o = this._excludes) === null || _o === void 0 ? void 0 : _o.internalValue;
        }
        if ((_p = this._includes) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.includes = (_q = this._includes) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._excludes.internalValue = undefined;
            this._includes.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._excludes.internalValue = value.excludes;
            this._includes.internalValue = value.includes;
        }
    }
    /**
     * @stability stable
     */
    get excludes() {
        return this._excludes;
    }
    /**
     * @stability stable
     */
    putExcludes(value) {
        this._excludes.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetExcludes() {
        this._excludes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get excludesInput() {
        return this._excludes.internalValue;
    }
    /**
     * @stability stable
     */
    get includes() {
        return this._includes;
    }
    /**
     * @stability stable
     */
    putIncludes(value) {
        this._includes.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIncludes() {
        this._includes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includesInput() {
        return this._includes.internalValue;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingOutputReference = Macie2ClassificationJobS3JobDefinitionScopingOutputReference;
_h = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingOutputReference[_h] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobS3JobDefinitionScopingOutputReference", version: "3.0.1" };
function macie2ClassificationJobS3JobDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_definitions: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform)(struct.bucketDefinitions),
        scoping: macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct.scoping),
    };
}
exports.macie2ClassificationJobS3JobDefinitionToTerraform = macie2ClassificationJobS3JobDefinitionToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobS3JobDefinitionOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // scoping - computed: false, optional: true, required: false
        this._scoping = new Macie2ClassificationJobS3JobDefinitionScopingOutputReference(this, "scoping", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _m, _o;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketDefinitions) {
            hasAnyValues = true;
            internalValueResult.bucketDefinitions = this._bucketDefinitions;
        }
        if ((_m = this._scoping) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.scoping = (_o = this._scoping) === null || _o === void 0 ? void 0 : _o.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketDefinitions = undefined;
            this._scoping.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketDefinitions = value.bucketDefinitions;
            this._scoping.internalValue = value.scoping;
        }
    }
    /**
     * @stability stable
     */
    get bucketDefinitions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('bucket_definitions');
    }
    /**
     * @stability stable
     */
    set bucketDefinitions(value) {
        this._bucketDefinitions = value;
    }
    /**
     * @stability stable
     */
    resetBucketDefinitions() {
        this._bucketDefinitions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketDefinitionsInput() {
        return this._bucketDefinitions;
    }
    /**
     * @stability stable
     */
    get scoping() {
        return this._scoping;
    }
    /**
     * @stability stable
     */
    putScoping(value) {
        this._scoping.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetScoping() {
        this._scoping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scopingInput() {
        return this._scoping.internalValue;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionOutputReference = Macie2ClassificationJobS3JobDefinitionOutputReference;
_j = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionOutputReference[_j] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobS3JobDefinitionOutputReference", version: "3.0.1" };
function macie2ClassificationJobScheduleFrequencyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        daily_schedule: cdktf.booleanToTerraform(struct.dailySchedule),
        monthly_schedule: cdktf.numberToTerraform(struct.monthlySchedule),
        weekly_schedule: cdktf.stringToTerraform(struct.weeklySchedule),
    };
}
exports.macie2ClassificationJobScheduleFrequencyToTerraform = macie2ClassificationJobScheduleFrequencyToTerraform;
/**
 * @stability stable
 */
class Macie2ClassificationJobScheduleFrequencyOutputReference extends cdktf.ComplexObject {
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
        if (this._dailySchedule) {
            hasAnyValues = true;
            internalValueResult.dailySchedule = this._dailySchedule;
        }
        if (this._monthlySchedule) {
            hasAnyValues = true;
            internalValueResult.monthlySchedule = this._monthlySchedule;
        }
        if (this._weeklySchedule) {
            hasAnyValues = true;
            internalValueResult.weeklySchedule = this._weeklySchedule;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dailySchedule = undefined;
            this._monthlySchedule = undefined;
            this._weeklySchedule = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dailySchedule = value.dailySchedule;
            this._monthlySchedule = value.monthlySchedule;
            this._weeklySchedule = value.weeklySchedule;
        }
    }
    /**
     * @stability stable
     */
    get dailySchedule() {
        return this.getBooleanAttribute('daily_schedule');
    }
    /**
     * @stability stable
     */
    set dailySchedule(value) {
        this._dailySchedule = value;
    }
    /**
     * @stability stable
     */
    resetDailySchedule() {
        this._dailySchedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dailyScheduleInput() {
        return this._dailySchedule;
    }
    /**
     * @stability stable
     */
    get monthlySchedule() {
        return this.getNumberAttribute('monthly_schedule');
    }
    /**
     * @stability stable
     */
    set monthlySchedule(value) {
        this._monthlySchedule = value;
    }
    /**
     * @stability stable
     */
    resetMonthlySchedule() {
        this._monthlySchedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get monthlyScheduleInput() {
        return this._monthlySchedule;
    }
    /**
     * @stability stable
     */
    get weeklySchedule() {
        return this.getStringAttribute('weekly_schedule');
    }
    /**
     * @stability stable
     */
    set weeklySchedule(value) {
        this._weeklySchedule = value;
    }
    /**
     * @stability stable
     */
    resetWeeklySchedule() {
        this._weeklySchedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get weeklyScheduleInput() {
        return this._weeklySchedule;
    }
}
exports.Macie2ClassificationJobScheduleFrequencyOutputReference = Macie2ClassificationJobScheduleFrequencyOutputReference;
_k = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobScheduleFrequencyOutputReference[_k] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJobScheduleFrequencyOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job}.
 *
 * @stability stable
 */
class Macie2ClassificationJob extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_macie2_classification_job',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // s3_job_definition - computed: false, optional: false, required: true
        this._s3JobDefinition = new Macie2ClassificationJobS3JobDefinitionOutputReference(this, "s3_job_definition", true);
        // schedule_frequency - computed: false, optional: true, required: false
        this._scheduleFrequency = new Macie2ClassificationJobScheduleFrequencyOutputReference(this, "schedule_frequency", true);
        this._customDataIdentifierIds = config.customDataIdentifierIds;
        this._description = config.description;
        this._initialRun = config.initialRun;
        this._jobStatus = config.jobStatus;
        this._jobType = config.jobType;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._samplingPercentage = config.samplingPercentage;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._s3JobDefinition.internalValue = config.s3JobDefinition;
        this._scheduleFrequency.internalValue = config.scheduleFrequency;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    /**
     * @stability stable
     */
    get customDataIdentifierIds() {
        return this.getListAttribute('custom_data_identifier_ids');
    }
    /**
     * @stability stable
     */
    set customDataIdentifierIds(value) {
        this._customDataIdentifierIds = value;
    }
    /**
     * @stability stable
     */
    resetCustomDataIdentifierIds() {
        this._customDataIdentifierIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customDataIdentifierIdsInput() {
        return this._customDataIdentifierIds;
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
    get initialRun() {
        return this.getBooleanAttribute('initial_run');
    }
    /**
     * @stability stable
     */
    set initialRun(value) {
        this._initialRun = value;
    }
    /**
     * @stability stable
     */
    resetInitialRun() {
        this._initialRun = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get initialRunInput() {
        return this._initialRun;
    }
    // job_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get jobArn() {
        return this.getStringAttribute('job_arn');
    }
    // job_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get jobId() {
        return this.getStringAttribute('job_id');
    }
    /**
     * @stability stable
     */
    get jobStatus() {
        return this.getStringAttribute('job_status');
    }
    /**
     * @stability stable
     */
    set jobStatus(value) {
        this._jobStatus = value;
    }
    /**
     * @stability stable
     */
    resetJobStatus() {
        this._jobStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jobStatusInput() {
        return this._jobStatus;
    }
    /**
     * @stability stable
     */
    get jobType() {
        return this.getStringAttribute('job_type');
    }
    /**
     * @stability stable
     */
    set jobType(value) {
        this._jobType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jobTypeInput() {
        return this._jobType;
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
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    /**
     * @stability stable
     */
    set namePrefix(value) {
        this._namePrefix = value;
    }
    /**
     * @stability stable
     */
    resetNamePrefix() {
        this._namePrefix = undefined;
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
    get samplingPercentage() {
        return this.getNumberAttribute('sampling_percentage');
    }
    /**
     * @stability stable
     */
    set samplingPercentage(value) {
        this._samplingPercentage = value;
    }
    /**
     * @stability stable
     */
    resetSamplingPercentage() {
        this._samplingPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get samplingPercentageInput() {
        return this._samplingPercentage;
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
    // user_paused_details - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    userPausedDetails(index) {
        return new Macie2ClassificationJobUserPausedDetails(this, 'user_paused_details', index);
    }
    /**
     * @stability stable
     */
    get s3JobDefinition() {
        return this._s3JobDefinition;
    }
    /**
     * @stability stable
     */
    putS3JobDefinition(value) {
        this._s3JobDefinition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3JobDefinitionInput() {
        return this._s3JobDefinition.internalValue;
    }
    /**
     * @stability stable
     */
    get scheduleFrequency() {
        return this._scheduleFrequency;
    }
    /**
     * @stability stable
     */
    putScheduleFrequency(value) {
        this._scheduleFrequency.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetScheduleFrequency() {
        this._scheduleFrequency.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scheduleFrequencyInput() {
        return this._scheduleFrequency.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            custom_data_identifier_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customDataIdentifierIds),
            description: cdktf.stringToTerraform(this._description),
            initial_run: cdktf.booleanToTerraform(this._initialRun),
            job_status: cdktf.stringToTerraform(this._jobStatus),
            job_type: cdktf.stringToTerraform(this._jobType),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            s3_job_definition: macie2ClassificationJobS3JobDefinitionToTerraform(this._s3JobDefinition.internalValue),
            schedule_frequency: macie2ClassificationJobScheduleFrequencyToTerraform(this._scheduleFrequency.internalValue),
        };
    }
}
exports.Macie2ClassificationJob = Macie2ClassificationJob;
_l = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJob[_l] = { fqn: "@cdktf/provider-aws.macie2.Macie2ClassificationJob", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Macie2ClassificationJob.tfResourceType = "aws_macie2_classification_job";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFjaWUyLWNsYXNzaWZpY2F0aW9uLWpvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWNpZTIvbWFjaWUyLWNsYXNzaWZpY2F0aW9uLWpvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQTZCL0IsTUFBYSx3Q0FBeUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXJGLG9FQUFvRTs7OztJQUNwRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsOEZBQThGOzs7O0lBQzlGLElBQVcsbUNBQW1DO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELG1FQUFtRTs7OztJQUNuRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7QUFmSCw0RkFnQkM7OztBQVFELFNBQWdCLGtFQUFrRSxDQUFDLE1BQWdFO0lBQ2pKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFURCxnSkFTQztBQVdELFNBQWdCLGtG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QUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RFLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELGlCQUFpQixFQUFFLGlEQUFpRCxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7WUFDekcsa0JBQWtCLEVBQUUsbURBQW1ELENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztTQUMvRyxDQUFDO0lBQ0osQ0FBQzs7QUFqUkgsMERBa1JDOzs7QUFoUkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxzQ0FBYyxHQUFXLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tRGF0YUlkZW50aWZpZXJJZHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluaXRpYWxSdW4/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBqb2JTdGF0dXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpvYlR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWVQcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzYW1wbGluZ1BlcmNlbnRhZ2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0pvYkRlZmluaXRpb246IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlZHVsZUZyZXF1ZW5jeT86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3k7XG59XG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlscyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGpvYl9leHBpcmVzX2F0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iRXhwaXJlc0F0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2V4cGlyZXNfYXQnKTtcbiAgfVxuXG4gIC8vIGpvYl9pbW1pbmVudF9leHBpcmF0aW9uX2hlYWx0aF9ldmVudF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JJbW1pbmVudEV4cGlyYXRpb25IZWFsdGhFdmVudEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9pbW1pbmVudF9leHBpcmF0aW9uX2hlYWx0aF9ldmVudF9hcm4nKTtcbiAgfVxuXG4gIC8vIGpvYl9wYXVzZWRfYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JQYXVzZWRBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9wYXVzZWRfYXQnKTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY291bnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudElkKSxcbiAgICBidWNrZXRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmJ1Y2tldHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyYXRvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtT3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmF0b3IpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29tcGFyYXRvcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcGFyYXRvciA9IHRoaXMuX2NvbXBhcmF0b3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleSA9IHRoaXMuX2tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdmFsdWUuY29tcGFyYXRvcjtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlLnZhbHVlcztcbiAgICB9XG4gIH1cblxuICAvLyBjb21wYXJhdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcGFyYXRvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGFyYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBhcmF0b3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wYXJhdG9yKCkge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBhcmF0b3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyYXRvcjtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleSgpIHtcbiAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92YWx1ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZhbHVlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbHVlcygpIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyYXRvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdWYWx1ZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybU91dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyYXRvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJhdG9yKSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB0YXJnZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0KSxcbiAgICB0YWdfdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFnVmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm0gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbXBhcmF0b3IpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXBhcmF0b3IgPSB0aGlzLl9jb21wYXJhdG9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXkgPSB0aGlzLl9rZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldCA9IHRoaXMuX3RhcmdldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ1ZhbHVlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFnVmFsdWVzID0gdGhpcy5fdGFnVmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFnVmFsdWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdmFsdWUuY29tcGFyYXRvcjtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3RhcmdldCA9IHZhbHVlLnRhcmdldDtcbiAgICAgIHRoaXMuX3RhZ1ZhbHVlcyA9IHZhbHVlLnRhZ1ZhbHVlcztcbiAgICB9XG4gIH1cblxuICAvLyBjb21wYXJhdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcGFyYXRvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGFyYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBhcmF0b3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wYXJhdG9yKCkge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBhcmF0b3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyYXRvcjtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleSgpIHtcbiAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyB0YXJnZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXQoKSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG5cbiAgLy8gdGFnX3ZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdWYWx1ZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1tdOyBcbiAgcHVibGljIGdldCB0YWdWYWx1ZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ192YWx1ZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdWYWx1ZXModmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzW10pIHtcbiAgICB0aGlzLl90YWdWYWx1ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdWYWx1ZXMoKSB7XG4gICAgdGhpcy5fdGFnVmFsdWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdWYWx1ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnVmFsdWVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2ltcGxlU2NvcGVUZXJtPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ1Njb3BlVGVybT86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNpbXBsZV9zY29wZV90ZXJtOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdCEuc2ltcGxlU2NvcGVUZXJtKSxcbiAgICB0YWdfc2NvcGVfdGVybTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1Ub1RlcnJhZm9ybShzdHJ1Y3QhLnRhZ1Njb3BlVGVybSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFuZD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzT3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbmQ6IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUb1RlcnJhZm9ybSkoc3RydWN0IS5hbmQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYW5kKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbmQgPSB0aGlzLl9hbmQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FuZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYW5kID0gdmFsdWUuYW5kO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbmQ/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFtdOyBcbiAgcHVibGljIGdldCBhbmQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FuZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFuZCh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRbXSkge1xuICAgIHRoaXMuX2FuZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFuZCgpIHtcbiAgICB0aGlzLl9hbmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbmQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyYXRvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtT3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmF0b3IpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29tcGFyYXRvcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcGFyYXRvciA9IHRoaXMuX2NvbXBhcmF0b3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleSA9IHRoaXMuX2tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdmFsdWUuY29tcGFyYXRvcjtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlLnZhbHVlcztcbiAgICB9XG4gIH1cblxuICAvLyBjb21wYXJhdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcGFyYXRvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGFyYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBhcmF0b3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wYXJhdG9yKCkge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBhcmF0b3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyYXRvcjtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleSgpIHtcbiAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92YWx1ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZhbHVlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbHVlcygpIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyYXRvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdWYWx1ZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybU91dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyYXRvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJhdG9yKSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB0YXJnZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0KSxcbiAgICB0YWdfdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFnVmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm0gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbXBhcmF0b3IpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXBhcmF0b3IgPSB0aGlzLl9jb21wYXJhdG9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXkgPSB0aGlzLl9rZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldCA9IHRoaXMuX3RhcmdldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ1ZhbHVlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFnVmFsdWVzID0gdGhpcy5fdGFnVmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFnVmFsdWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdmFsdWUuY29tcGFyYXRvcjtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3RhcmdldCA9IHZhbHVlLnRhcmdldDtcbiAgICAgIHRoaXMuX3RhZ1ZhbHVlcyA9IHZhbHVlLnRhZ1ZhbHVlcztcbiAgICB9XG4gIH1cblxuICAvLyBjb21wYXJhdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcGFyYXRvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGFyYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBhcmF0b3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wYXJhdG9yKCkge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBhcmF0b3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyYXRvcjtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleSgpIHtcbiAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyB0YXJnZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXQoKSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG5cbiAgLy8gdGFnX3ZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdWYWx1ZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1tdOyBcbiAgcHVibGljIGdldCB0YWdWYWx1ZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ192YWx1ZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdWYWx1ZXModmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzW10pIHtcbiAgICB0aGlzLl90YWdWYWx1ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdWYWx1ZXMoKSB7XG4gICAgdGhpcy5fdGFnVmFsdWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdWYWx1ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnVmFsdWVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2ltcGxlU2NvcGVUZXJtPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ1Njb3BlVGVybT86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNpbXBsZV9zY29wZV90ZXJtOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdCEuc2ltcGxlU2NvcGVUZXJtKSxcbiAgICB0YWdfc2NvcGVfdGVybTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1Ub1RlcnJhZm9ybShzdHJ1Y3QhLnRhZ1Njb3BlVGVybSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFuZD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzT3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbmQ6IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUb1RlcnJhZm9ybSkoc3RydWN0IS5hbmQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYW5kKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbmQgPSB0aGlzLl9hbmQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FuZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYW5kID0gdmFsdWUuYW5kO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbmQ/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFtdOyBcbiAgcHVibGljIGdldCBhbmQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FuZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFuZCh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRbXSkge1xuICAgIHRoaXMuX2FuZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFuZCgpIHtcbiAgICB0aGlzLl9hbmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbmQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhjbHVkZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ091dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4Y2x1ZGVzOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc1RvVGVycmFmb3JtKHN0cnVjdCEuZXhjbHVkZXMpLFxuICAgIGluY2x1ZGVzOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc1RvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9leGNsdWRlcz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhjbHVkZXMgPSB0aGlzLl9leGNsdWRlcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlcyA9IHRoaXMuX2luY2x1ZGVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXhjbHVkZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2V4Y2x1ZGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5leGNsdWRlcztcbiAgICAgIHRoaXMuX2luY2x1ZGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pbmNsdWRlcztcbiAgICB9XG4gIH1cblxuICAvLyBleGNsdWRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGNsdWRlcyA9IG5ldyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJleGNsdWRlc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBleGNsdWRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZXM7XG4gIH1cbiAgcHVibGljIHB1dEV4Y2x1ZGVzKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlcykge1xuICAgIHRoaXMuX2V4Y2x1ZGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGNsdWRlcygpIHtcbiAgICB0aGlzLl9leGNsdWRlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGNsdWRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW5jbHVkZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZXMgPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaW5jbHVkZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaW5jbHVkZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVzO1xuICB9XG4gIHB1YmxpYyBwdXRJbmNsdWRlcyh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXMpIHtcbiAgICB0aGlzLl9pbmNsdWRlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZXMoKSB7XG4gICAgdGhpcy5faW5jbHVkZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1Y2tldERlZmluaXRpb25zPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY29waW5nPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2RlZmluaXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uQnVja2V0RGVmaW5pdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5idWNrZXREZWZpbml0aW9ucyksXG4gICAgc2NvcGluZzogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY29waW5nKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2J1Y2tldERlZmluaXRpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXREZWZpbml0aW9ucyA9IHRoaXMuX2J1Y2tldERlZmluaXRpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NvcGluZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NvcGluZyA9IHRoaXMuX3Njb3Bpbmc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1Y2tldERlZmluaXRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NvcGluZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXREZWZpbml0aW9ucyA9IHZhbHVlLmJ1Y2tldERlZmluaXRpb25zO1xuICAgICAgdGhpcy5fc2NvcGluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2NvcGluZztcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXRfZGVmaW5pdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0RGVmaW5pdGlvbnM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zW107IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldERlZmluaXRpb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdidWNrZXRfZGVmaW5pdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXREZWZpbml0aW9ucyh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9uc1tdKSB7XG4gICAgdGhpcy5fYnVja2V0RGVmaW5pdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXREZWZpbml0aW9ucygpIHtcbiAgICB0aGlzLl9idWNrZXREZWZpbml0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0RGVmaW5pdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0RGVmaW5pdGlvbnM7XG4gIH1cblxuICAvLyBzY29waW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Njb3BpbmcgPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNjb3BpbmdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2NvcGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGluZztcbiAgfVxuICBwdWJsaWMgcHV0U2NvcGluZyh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nKSB7XG4gICAgdGhpcy5fc2NvcGluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NvcGluZygpIHtcbiAgICB0aGlzLl9zY29waW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjb3BpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGluZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYWlseVNjaGVkdWxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9udGhseVNjaGVkdWxlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdlZWtseVNjaGVkdWxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeVRvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3lPdXRwdXRSZWZlcmVuY2UgfCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGFpbHlfc2NoZWR1bGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRhaWx5U2NoZWR1bGUpLFxuICAgIG1vbnRobHlfc2NoZWR1bGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubW9udGhseVNjaGVkdWxlKSxcbiAgICB3ZWVrbHlfc2NoZWR1bGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2Vla2x5U2NoZWR1bGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RhaWx5U2NoZWR1bGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhaWx5U2NoZWR1bGUgPSB0aGlzLl9kYWlseVNjaGVkdWxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9udGhseVNjaGVkdWxlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb250aGx5U2NoZWR1bGUgPSB0aGlzLl9tb250aGx5U2NoZWR1bGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl93ZWVrbHlTY2hlZHVsZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud2Vla2x5U2NoZWR1bGUgPSB0aGlzLl93ZWVrbHlTY2hlZHVsZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3kgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kYWlseVNjaGVkdWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbW9udGhseVNjaGVkdWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fd2Vla2x5U2NoZWR1bGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RhaWx5U2NoZWR1bGUgPSB2YWx1ZS5kYWlseVNjaGVkdWxlO1xuICAgICAgdGhpcy5fbW9udGhseVNjaGVkdWxlID0gdmFsdWUubW9udGhseVNjaGVkdWxlO1xuICAgICAgdGhpcy5fd2Vla2x5U2NoZWR1bGUgPSB2YWx1ZS53ZWVrbHlTY2hlZHVsZTtcbiAgICB9XG4gIH1cblxuICAvLyBkYWlseV9zY2hlZHVsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYWlseVNjaGVkdWxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkYWlseVNjaGVkdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RhaWx5X3NjaGVkdWxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGFpbHlTY2hlZHVsZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGFpbHlTY2hlZHVsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhaWx5U2NoZWR1bGUoKSB7XG4gICAgdGhpcy5fZGFpbHlTY2hlZHVsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGFpbHlTY2hlZHVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYWlseVNjaGVkdWxlO1xuICB9XG5cbiAgLy8gbW9udGhseV9zY2hlZHVsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21vbnRobHlTY2hlZHVsZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbW9udGhseVNjaGVkdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbW9udGhseV9zY2hlZHVsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9udGhseVNjaGVkdWxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tb250aGx5U2NoZWR1bGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb250aGx5U2NoZWR1bGUoKSB7XG4gICAgdGhpcy5fbW9udGhseVNjaGVkdWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb250aGx5U2NoZWR1bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9udGhseVNjaGVkdWxlO1xuICB9XG5cbiAgLy8gd2Vla2x5X3NjaGVkdWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2Vla2x5U2NoZWR1bGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHdlZWtseVNjaGVkdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2Vla2x5X3NjaGVkdWxlJyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWVrbHlTY2hlZHVsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2Vla2x5U2NoZWR1bGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXZWVrbHlTY2hlZHVsZSgpIHtcbiAgICB0aGlzLl93ZWVrbHlTY2hlZHVsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2Vla2x5U2NoZWR1bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vla2x5U2NoZWR1bGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2JcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2N1c3RvbURhdGFJZGVudGlmaWVySWRzID0gY29uZmlnLmN1c3RvbURhdGFJZGVudGlmaWVySWRzO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2luaXRpYWxSdW4gPSBjb25maWcuaW5pdGlhbFJ1bjtcbiAgICB0aGlzLl9qb2JTdGF0dXMgPSBjb25maWcuam9iU3RhdHVzO1xuICAgIHRoaXMuX2pvYlR5cGUgPSBjb25maWcuam9iVHlwZTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IGNvbmZpZy5uYW1lUHJlZml4O1xuICAgIHRoaXMuX3NhbXBsaW5nUGVyY2VudGFnZSA9IGNvbmZpZy5zYW1wbGluZ1BlcmNlbnRhZ2U7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9zM0pvYkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zM0pvYkRlZmluaXRpb247XG4gICAgdGhpcy5fc2NoZWR1bGVGcmVxdWVuY3kuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zY2hlZHVsZUZyZXF1ZW5jeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY3JlYXRlZF9hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfYXQnKTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9kYXRhX2lkZW50aWZpZXJfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tRGF0YUlkZW50aWZpZXJJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tRGF0YUlkZW50aWZpZXJJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX2RhdGFfaWRlbnRpZmllcl9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbURhdGFJZGVudGlmaWVySWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbURhdGFJZGVudGlmaWVySWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tRGF0YUlkZW50aWZpZXJJZHMoKSB7XG4gICAgdGhpcy5fY3VzdG9tRGF0YUlkZW50aWZpZXJJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbURhdGFJZGVudGlmaWVySWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbURhdGFJZGVudGlmaWVySWRzO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluaXRpYWxfcnVuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luaXRpYWxSdW4/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluaXRpYWxSdW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5pdGlhbF9ydW4nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbml0aWFsUnVuKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbml0aWFsUnVuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5pdGlhbFJ1bigpIHtcbiAgICB0aGlzLl9pbml0aWFsUnVuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbml0aWFsUnVuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxSdW47XG4gIH1cblxuICAvLyBqb2JfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2FybicpO1xuICB9XG5cbiAgLy8gam9iX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfaWQnKTtcbiAgfVxuXG4gIC8vIGpvYl9zdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qb2JTdGF0dXM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGpvYlN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9zdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGpvYlN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fam9iU3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Sm9iU3RhdHVzKCkge1xuICAgIHRoaXMuX2pvYlN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgam9iU3RhdHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pvYlN0YXR1cztcbiAgfVxuXG4gIC8vIGpvYl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2pvYlR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGpvYlR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgam9iVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fam9iVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqb2JUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pvYlR5cGU7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZVByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lUHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZVByZWZpeCgpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVQcmVmaXg7XG4gIH1cblxuICAvLyBzYW1wbGluZ19wZXJjZW50YWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FtcGxpbmdQZXJjZW50YWdlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzYW1wbGluZ1BlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzYW1wbGluZ19wZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYW1wbGluZ1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NhbXBsaW5nUGVyY2VudGFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNhbXBsaW5nUGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl9zYW1wbGluZ1BlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhbXBsaW5nUGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zYW1wbGluZ1BlcmNlbnRhZ2U7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdXNlcl9wYXVzZWRfZGV0YWlscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgdXNlclBhdXNlZERldGFpbHMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlscyh0aGlzLCAndXNlcl9wYXVzZWRfZGV0YWlscycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHMzX2pvYl9kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3MzSm9iRGVmaW5pdGlvbiA9IG5ldyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzM19qb2JfZGVmaW5pdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzM0pvYkRlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzSm9iRGVmaW5pdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UzNKb2JEZWZpbml0aW9uKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbikge1xuICAgIHRoaXMuX3MzSm9iRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzSm9iRGVmaW5pdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0pvYkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNjaGVkdWxlX2ZyZXF1ZW5jeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2hlZHVsZUZyZXF1ZW5jeSA9IG5ldyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNjaGVkdWxlX2ZyZXF1ZW5jeVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzY2hlZHVsZUZyZXF1ZW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVGcmVxdWVuY3k7XG4gIH1cbiAgcHVibGljIHB1dFNjaGVkdWxlRnJlcXVlbmN5KHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5KSB7XG4gICAgdGhpcy5fc2NoZWR1bGVGcmVxdWVuY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjaGVkdWxlRnJlcXVlbmN5KCkge1xuICAgIHRoaXMuX3NjaGVkdWxlRnJlcXVlbmN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlRnJlcXVlbmN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlRnJlcXVlbmN5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1c3RvbV9kYXRhX2lkZW50aWZpZXJfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21EYXRhSWRlbnRpZmllcklkcyksXG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgaW5pdGlhbF9ydW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9pbml0aWFsUnVuKSxcbiAgICAgIGpvYl9zdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2pvYlN0YXR1cyksXG4gICAgICBqb2JfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fam9iVHlwZSksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIG5hbWVfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lUHJlZml4KSxcbiAgICAgIHNhbXBsaW5nX3BlcmNlbnRhZ2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3NhbXBsaW5nUGVyY2VudGFnZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHMzX2pvYl9kZWZpbml0aW9uOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblRvVGVycmFmb3JtKHRoaXMuX3MzSm9iRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNjaGVkdWxlX2ZyZXF1ZW5jeTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeVRvVGVycmFmb3JtKHRoaXMuX3NjaGVkdWxlRnJlcXVlbmN5LmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==