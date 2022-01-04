"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wafv2WebAclLoggingConfiguration = exports.wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform = exports.Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference = exports.wafv2WebAclLoggingConfigurationLoggingFilterToTerraform = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform = exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform = exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference extends cdktf.ComplexObject {
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
        if (this._action) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._action = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._action = value.action;
        }
    }
    /**
     * @stability stable
     */
    get action() {
        return this.getStringAttribute('action');
    }
    /**
     * @stability stable
     */
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action;
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference = Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference[_a] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label_name: cdktf.stringToTerraform(struct.labelName),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference extends cdktf.ComplexObject {
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
        if (this._labelName) {
            hasAnyValues = true;
            internalValueResult.labelName = this._labelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._labelName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._labelName = value.labelName;
        }
    }
    /**
     * @stability stable
     */
    get labelName() {
        return this.getStringAttribute('label_name');
    }
    /**
     * @stability stable
     */
    set labelName(value) {
        this._labelName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get labelNameInput() {
        return this._labelName;
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference = Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference;
_b = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference[_b] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_condition: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct.actionCondition),
        label_name_condition: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct.labelNameCondition),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform;
function wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        behavior: cdktf.stringToTerraform(struct.behavior),
        requirement: cdktf.stringToTerraform(struct.requirement),
        condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform)(struct.condition),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform;
function wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_behavior: cdktf.stringToTerraform(struct.defaultBehavior),
        filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform)(struct.filter),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._defaultBehavior) {
            hasAnyValues = true;
            internalValueResult.defaultBehavior = this._defaultBehavior;
        }
        if (this._filter) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._defaultBehavior = undefined;
            this._filter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._defaultBehavior = value.defaultBehavior;
            this._filter = value.filter;
        }
    }
    /**
     * @stability stable
     */
    get defaultBehavior() {
        return this.getStringAttribute('default_behavior');
    }
    /**
     * @stability stable
     */
    set defaultBehavior(value) {
        this._defaultBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultBehaviorInput() {
        return this._defaultBehavior;
    }
    /**
     * @stability stable
     */
    get filter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('filter');
    }
    /**
     * @stability stable
     */
    set filter(value) {
        this._filter = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get filterInput() {
        return this._filter;
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference = Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference;
_c = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference[_c] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference[_d] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference;
_e = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference[_e] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference;
_f = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference[_f] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference;
_g = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference[_g] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference;
_h = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference[_h] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference;
_j = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference[_j] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform;
/**
 * @stability stable
 */
class Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference;
_k = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference[_k] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference", version: "3.0.1" };
function wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform(struct.body),
        method: wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct.method),
        query_string: wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct.queryString),
        single_header: wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct.uriPath),
    };
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration}.
 *
 * @stability stable
 */
class Wafv2WebAclLoggingConfiguration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_wafv2_web_acl_logging_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // logging_filter - computed: false, optional: true, required: false
        this._loggingFilter = new Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference(this, "logging_filter", true);
        this._logDestinationConfigs = config.logDestinationConfigs;
        this._resourceArn = config.resourceArn;
        this._loggingFilter.internalValue = config.loggingFilter;
        this._redactedFields = config.redactedFields;
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
    get logDestinationConfigs() {
        return this.getListAttribute('log_destination_configs');
    }
    /**
     * @stability stable
     */
    set logDestinationConfigs(value) {
        this._logDestinationConfigs = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logDestinationConfigsInput() {
        return this._logDestinationConfigs;
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
    get loggingFilter() {
        return this._loggingFilter;
    }
    /**
     * @stability stable
     */
    putLoggingFilter(value) {
        this._loggingFilter.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLoggingFilter() {
        this._loggingFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get loggingFilterInput() {
        return this._loggingFilter.internalValue;
    }
    /**
     * @stability stable
     */
    get redactedFields() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('redacted_fields');
    }
    /**
     * @stability stable
     */
    set redactedFields(value) {
        this._redactedFields = value;
    }
    /**
     * @stability stable
     */
    resetRedactedFields() {
        this._redactedFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get redactedFieldsInput() {
        return this._redactedFields;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            log_destination_configs: cdktf.listMapper(cdktf.stringToTerraform)(this._logDestinationConfigs),
            resource_arn: cdktf.stringToTerraform(this._resourceArn),
            logging_filter: wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(this._loggingFilter.internalValue),
            redacted_fields: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform)(this._redactedFields),
        };
    }
}
exports.Wafv2WebAclLoggingConfiguration = Wafv2WebAclLoggingConfiguration;
_l = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfiguration[_l] = { fqn: "@cdktf/provider-aws.wafv2.Wafv2WebAclLoggingConfiguration", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Wafv2WebAclLoggingConfiguration.tfResourceType = "aws_wafv2_web_acl_logging_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FmdjItd2ViLWFjbC1sb2dnaW5nLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2FmdjIvd2FmdjItd2ViLWFjbC1sb2dnaW5nLWNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFrQi9CLFNBQWdCLHFGQUFxRixDQUFDLE1BQStLO0lBQ25SLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBUkQsc0xBUUM7Ozs7QUFFRCxNQUFhLHlGQUEwRixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWhJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENB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O0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDL0YsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELGNBQWMsRUFBRSx1REFBdUQsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUMxRyxlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDbEgsQ0FBQztJQUNKLENBQUM7O0FBNUdILDBFQTZHQzs7O0FBM0dDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csOENBQWMsR0FBVyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dEZXN0aW5hdGlvbkNvbmZpZ3M6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ2dpbmdGaWx0ZXI/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVkYWN0ZWRGaWVsZHM/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkFjdGlvbkNvbmRpdGlvbk91dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvbiA9IHRoaXMuX2FjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY3Rpb24gPSB2YWx1ZS5hY3Rpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhYmVsTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25MYWJlbE5hbWVDb25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvbk91dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGFiZWxfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYWJlbE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbGFiZWxOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYWJlbE5hbWUgPSB0aGlzLl9sYWJlbE5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xhYmVsTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGFiZWxOYW1lID0gdmFsdWUubGFiZWxOYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhYmVsX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGFiZWxOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYWJlbE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYWJlbF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYWJlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhYmVsTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYWJlbE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxOYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uQ29uZGl0aW9uPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhYmVsTmFtZUNvbmRpdGlvbj86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbl9jb25kaXRpb246IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb25Db25kaXRpb24pLFxuICAgIGxhYmVsX25hbWVfY29uZGl0aW9uOiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubGFiZWxOYW1lQ29uZGl0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmVoYXZpb3I6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWlyZW1lbnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZGl0aW9uOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJlaGF2aW9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJlaGF2aW9yKSxcbiAgICByZXF1aXJlbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlbWVudCksXG4gICAgY29uZGl0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29uZGl0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRCZWhhdmlvcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWx0ZXI6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyT3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0X2JlaGF2aW9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRCZWhhdmlvciksXG4gICAgZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmlsdGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRCZWhhdmlvcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdEJlaGF2aW9yID0gdGhpcy5fZGVmYXVsdEJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsdGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maWx0ZXIgPSB0aGlzLl9maWx0ZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlZmF1bHRCZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVmYXVsdEJlaGF2aW9yID0gdmFsdWUuZGVmYXVsdEJlaGF2aW9yO1xuICAgICAgdGhpcy5fZmlsdGVyID0gdmFsdWUuZmlsdGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHRfYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmYXVsdEJlaGF2aW9yPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0QmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X2JlaGF2aW9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0QmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRCZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0QmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEJlaGF2aW9yO1xuICB9XG5cbiAgLy8gZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpbHRlcj86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyW107IFxuICBwdWJsaWMgZ2V0IGZpbHRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlsdGVyJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsdGVyKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlcltdKSB7XG4gICAgdGhpcy5fZmlsdGVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXI7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHMge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNBbGxRdWVyeUFyZ3VtZW50c091dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNBbGxRdWVyeUFyZ3VtZW50cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5IHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5T3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHkgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZFRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZE91dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2RPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmcge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNRdWVyeVN0cmluZ091dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNRdWVyeVN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyT3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZUhlYWRlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50T3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVXJpUGF0aCB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVXJpUGF0aE91dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGgpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVXJpUGF0aE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbFF1ZXJ5QXJndW1lbnRzPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJvZHk/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRob2Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHF1ZXJ5U3RyaW5nPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNpbmdsZUhlYWRlcj86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZUhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2luZ2xlUXVlcnlBcmd1bWVudD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVyaVBhdGg/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsX3F1ZXJ5X2FyZ3VtZW50czogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHNUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbFF1ZXJ5QXJndW1lbnRzKSxcbiAgICBib2R5OiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5VG9UZXJyYWZvcm0oc3RydWN0IS5ib2R5KSxcbiAgICBtZXRob2Q6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZFRvVGVycmFmb3JtKHN0cnVjdCEubWV0aG9kKSxcbiAgICBxdWVyeV9zdHJpbmc6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5xdWVyeVN0cmluZyksXG4gICAgc2luZ2xlX2hlYWRlcjogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaW5nbGVIZWFkZXIpLFxuICAgIHNpbmdsZV9xdWVyeV9hcmd1bWVudDogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudFRvVGVycmFmb3JtKHN0cnVjdCEuc2luZ2xlUXVlcnlBcmd1bWVudCksXG4gICAgdXJpX3BhdGg6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGhUb1RlcnJhZm9ybShzdHJ1Y3QhLnVyaVBhdGgpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c193YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2xvZ0Rlc3RpbmF0aW9uQ29uZmlncyA9IGNvbmZpZy5sb2dEZXN0aW5hdGlvbkNvbmZpZ3M7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSBjb25maWcucmVzb3VyY2VBcm47XG4gICAgdGhpcy5fbG9nZ2luZ0ZpbHRlci5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxvZ2dpbmdGaWx0ZXI7XG4gICAgdGhpcy5fcmVkYWN0ZWRGaWVsZHMgPSBjb25maWcucmVkYWN0ZWRGaWVsZHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsb2dfZGVzdGluYXRpb25fY29uZmlncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sb2dEZXN0aW5hdGlvbkNvbmZpZ3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbG9nRGVzdGluYXRpb25Db25maWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2xvZ19kZXN0aW5hdGlvbl9jb25maWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dEZXN0aW5hdGlvbkNvbmZpZ3ModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbG9nRGVzdGluYXRpb25Db25maWdzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ0Rlc3RpbmF0aW9uQ29uZmlnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dEZXN0aW5hdGlvbkNvbmZpZ3M7XG4gIH1cblxuICAvLyByZXNvdXJjZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm47XG4gIH1cblxuICAvLyBsb2dnaW5nX2ZpbHRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dnaW5nRmlsdGVyID0gbmV3IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImxvZ2dpbmdfZmlsdGVyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxvZ2dpbmdGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdGaWx0ZXI7XG4gIH1cbiAgcHVibGljIHB1dExvZ2dpbmdGaWx0ZXIodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0ZpbHRlci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZ0ZpbHRlcigpIHtcbiAgICB0aGlzLl9sb2dnaW5nRmlsdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdGaWx0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0ZpbHRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmVkYWN0ZWRfZmllbGRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZGFjdGVkRmllbGRzPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzW107IFxuICBwdWJsaWMgZ2V0IHJlZGFjdGVkRmllbGRzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWRhY3RlZF9maWVsZHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZWRhY3RlZEZpZWxkcyh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzW10pIHtcbiAgICB0aGlzLl9yZWRhY3RlZEZpZWxkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZGFjdGVkRmllbGRzKCkge1xuICAgIHRoaXMuX3JlZGFjdGVkRmllbGRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWRhY3RlZEZpZWxkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRhY3RlZEZpZWxkcztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nX2Rlc3RpbmF0aW9uX2NvbmZpZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2xvZ0Rlc3RpbmF0aW9uQ29uZmlncyksXG4gICAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jlc291cmNlQXJuKSxcbiAgICAgIGxvZ2dpbmdfZmlsdGVyOiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlclRvVGVycmFmb3JtKHRoaXMuX2xvZ2dpbmdGaWx0ZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICByZWRhY3RlZF9maWVsZHM6IGNka3RmLmxpc3RNYXBwZXIod2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVG9UZXJyYWZvcm0pKHRoaXMuX3JlZGFjdGVkRmllbGRzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=