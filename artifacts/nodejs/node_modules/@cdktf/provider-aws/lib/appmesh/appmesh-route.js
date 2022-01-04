"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppmeshRoute = exports.AppmeshRouteSpecOutputReference = exports.appmeshRouteSpecToTerraform = exports.AppmeshRouteSpecTcpRouteOutputReference = exports.appmeshRouteSpecTcpRouteToTerraform = exports.AppmeshRouteSpecTcpRouteTimeoutOutputReference = exports.appmeshRouteSpecTcpRouteTimeoutToTerraform = exports.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference = exports.appmeshRouteSpecTcpRouteTimeoutIdleToTerraform = exports.AppmeshRouteSpecTcpRouteActionOutputReference = exports.appmeshRouteSpecTcpRouteActionToTerraform = exports.appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform = exports.AppmeshRouteSpecHttpRouteOutputReference = exports.appmeshRouteSpecHttpRouteToTerraform = exports.AppmeshRouteSpecHttpRouteTimeoutOutputReference = exports.appmeshRouteSpecHttpRouteTimeoutToTerraform = exports.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference = exports.appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform = exports.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference = exports.appmeshRouteSpecHttpRouteTimeoutIdleToTerraform = exports.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference = exports.appmeshRouteSpecHttpRouteRetryPolicyToTerraform = exports.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference = exports.appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform = exports.AppmeshRouteSpecHttpRouteMatchOutputReference = exports.appmeshRouteSpecHttpRouteMatchToTerraform = exports.appmeshRouteSpecHttpRouteMatchHeaderToTerraform = exports.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference = exports.appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform = exports.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference = exports.appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform = exports.AppmeshRouteSpecHttpRouteActionOutputReference = exports.appmeshRouteSpecHttpRouteActionToTerraform = exports.appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform = exports.AppmeshRouteSpecHttp2RouteOutputReference = exports.appmeshRouteSpecHttp2RouteToTerraform = exports.AppmeshRouteSpecHttp2RouteTimeoutOutputReference = exports.appmeshRouteSpecHttp2RouteTimeoutToTerraform = exports.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference = exports.appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform = exports.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference = exports.appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform = exports.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference = exports.appmeshRouteSpecHttp2RouteRetryPolicyToTerraform = exports.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference = exports.appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform = exports.AppmeshRouteSpecHttp2RouteMatchOutputReference = exports.appmeshRouteSpecHttp2RouteMatchToTerraform = exports.appmeshRouteSpecHttp2RouteMatchHeaderToTerraform = exports.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference = exports.appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform = exports.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference = exports.appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform = exports.AppmeshRouteSpecHttp2RouteActionOutputReference = exports.appmeshRouteSpecHttp2RouteActionToTerraform = exports.appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform = exports.AppmeshRouteSpecGrpcRouteOutputReference = exports.appmeshRouteSpecGrpcRouteToTerraform = exports.AppmeshRouteSpecGrpcRouteTimeoutOutputReference = exports.appmeshRouteSpecGrpcRouteTimeoutToTerraform = exports.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference = exports.appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform = exports.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference = exports.appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform = exports.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference = exports.appmeshRouteSpecGrpcRouteRetryPolicyToTerraform = exports.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference = exports.appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform = exports.AppmeshRouteSpecGrpcRouteMatchOutputReference = exports.appmeshRouteSpecGrpcRouteMatchToTerraform = exports.appmeshRouteSpecGrpcRouteMatchMetadataToTerraform = exports.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference = exports.appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform = exports.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference = exports.appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform = exports.AppmeshRouteSpecGrpcRouteActionOutputReference = exports.appmeshRouteSpecGrpcRouteActionToTerraform = exports.appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform = appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform;
function appmeshRouteSpecGrpcRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform)(struct.weightedTarget),
    };
}
exports.appmeshRouteSpecGrpcRouteActionToTerraform = appmeshRouteSpecGrpcRouteActionToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
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
        if (this._weightedTarget) {
            hasAnyValues = true;
            internalValueResult.weightedTarget = this._weightedTarget;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._weightedTarget = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._weightedTarget = value.weightedTarget;
        }
    }
    /**
     * @stability stable
     */
    get weightedTarget() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('weighted_target');
    }
    /**
     * @stability stable
     */
    set weightedTarget(value) {
        this._weightedTarget = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get weightedTargetInput() {
        return this._weightedTarget;
    }
}
exports.AppmeshRouteSpecGrpcRouteActionOutputReference = AppmeshRouteSpecGrpcRouteActionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteActionOutputReference[_a] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteActionOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start),
    };
}
exports.appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform = appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._end) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._start) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._end = undefined;
            this._start = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._end = value.end;
            this._start = value.start;
        }
    }
    /**
     * @stability stable
     */
    get end() {
        return this.getNumberAttribute('end');
    }
    /**
     * @stability stable
     */
    set end(value) {
        this._end = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endInput() {
        return this._end;
    }
    /**
     * @stability stable
     */
    get start() {
        return this.getNumberAttribute('start');
    }
    /**
     * @stability stable
     */
    set start(value) {
        this._start = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startInput() {
        return this._start;
    }
}
exports.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference = AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference[_b] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct.range),
    };
}
exports.appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform = appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // range - computed: false, optional: true, required: false
        this._range = new AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference(this, "range", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._exact) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._regex) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        if (this._suffix) {
            hasAnyValues = true;
            internalValueResult.suffix = this._suffix;
        }
        if ((_12 = this._range) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.range = (_13 = this._range) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exact = undefined;
            this._prefix = undefined;
            this._regex = undefined;
            this._suffix = undefined;
            this._range.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exact = value.exact;
            this._prefix = value.prefix;
            this._regex = value.regex;
            this._suffix = value.suffix;
            this._range.internalValue = value.range;
        }
    }
    /**
     * @stability stable
     */
    get exact() {
        return this.getStringAttribute('exact');
    }
    /**
     * @stability stable
     */
    set exact(value) {
        this._exact = value;
    }
    /**
     * @stability stable
     */
    resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get exactInput() {
        return this._exact;
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
    get regex() {
        return this.getStringAttribute('regex');
    }
    /**
     * @stability stable
     */
    set regex(value) {
        this._regex = value;
    }
    /**
     * @stability stable
     */
    resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regexInput() {
        return this._regex;
    }
    /**
     * @stability stable
     */
    get suffix() {
        return this.getStringAttribute('suffix');
    }
    /**
     * @stability stable
     */
    set suffix(value) {
        this._suffix = value;
    }
    /**
     * @stability stable
     */
    resetSuffix() {
        this._suffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get suffixInput() {
        return this._suffix;
    }
    /**
     * @stability stable
     */
    get range() {
        return this._range;
    }
    /**
     * @stability stable
     */
    putRange(value) {
        this._range.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRange() {
        this._range.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rangeInput() {
        return this._range.internalValue;
    }
}
exports.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference = AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference[_c] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct.match),
    };
}
exports.appmeshRouteSpecGrpcRouteMatchMetadataToTerraform = appmeshRouteSpecGrpcRouteMatchMetadataToTerraform;
function appmeshRouteSpecGrpcRouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        method_name: cdktf.stringToTerraform(struct.methodName),
        prefix: cdktf.stringToTerraform(struct.prefix),
        service_name: cdktf.stringToTerraform(struct.serviceName),
        metadata: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataToTerraform)(struct.metadata),
    };
}
exports.appmeshRouteSpecGrpcRouteMatchToTerraform = appmeshRouteSpecGrpcRouteMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._methodName) {
            hasAnyValues = true;
            internalValueResult.methodName = this._methodName;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._serviceName) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        if (this._metadata) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._methodName = undefined;
            this._prefix = undefined;
            this._serviceName = undefined;
            this._metadata = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._methodName = value.methodName;
            this._prefix = value.prefix;
            this._serviceName = value.serviceName;
            this._metadata = value.metadata;
        }
    }
    /**
     * @stability stable
     */
    get methodName() {
        return this.getStringAttribute('method_name');
    }
    /**
     * @stability stable
     */
    set methodName(value) {
        this._methodName = value;
    }
    /**
     * @stability stable
     */
    resetMethodName() {
        this._methodName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get methodNameInput() {
        return this._methodName;
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
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    /**
     * @stability stable
     */
    set serviceName(value) {
        this._serviceName = value;
    }
    /**
     * @stability stable
     */
    resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceNameInput() {
        return this._serviceName;
    }
    /**
     * @stability stable
     */
    get metadata() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('metadata');
    }
    /**
     * @stability stable
     */
    set metadata(value) {
        this._metadata = value;
    }
    /**
     * @stability stable
     */
    resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metadataInput() {
        return this._metadata;
    }
}
exports.AppmeshRouteSpecGrpcRouteMatchOutputReference = AppmeshRouteSpecGrpcRouteMatchOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteMatchOutputReference[_d] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteMatchOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
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
exports.appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform = appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference = AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference[_e] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.grpcRetryEvents),
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct.perRetryTimeout),
    };
}
exports.appmeshRouteSpecGrpcRouteRetryPolicyToTerraform = appmeshRouteSpecGrpcRouteRetryPolicyToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // per_retry_timeout - computed: false, optional: false, required: true
        this._perRetryTimeout = new AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._grpcRetryEvents) {
            hasAnyValues = true;
            internalValueResult.grpcRetryEvents = this._grpcRetryEvents;
        }
        if (this._httpRetryEvents) {
            hasAnyValues = true;
            internalValueResult.httpRetryEvents = this._httpRetryEvents;
        }
        if (this._maxRetries) {
            hasAnyValues = true;
            internalValueResult.maxRetries = this._maxRetries;
        }
        if (this._tcpRetryEvents) {
            hasAnyValues = true;
            internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
        }
        if ((_12 = this._perRetryTimeout) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRetryTimeout = (_13 = this._perRetryTimeout) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._grpcRetryEvents = undefined;
            this._httpRetryEvents = undefined;
            this._maxRetries = undefined;
            this._tcpRetryEvents = undefined;
            this._perRetryTimeout.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._grpcRetryEvents = value.grpcRetryEvents;
            this._httpRetryEvents = value.httpRetryEvents;
            this._maxRetries = value.maxRetries;
            this._tcpRetryEvents = value.tcpRetryEvents;
            this._perRetryTimeout.internalValue = value.perRetryTimeout;
        }
    }
    /**
     * @stability stable
     */
    get grpcRetryEvents() {
        return this.getListAttribute('grpc_retry_events');
    }
    /**
     * @stability stable
     */
    set grpcRetryEvents(value) {
        this._grpcRetryEvents = value;
    }
    /**
     * @stability stable
     */
    resetGrpcRetryEvents() {
        this._grpcRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get grpcRetryEventsInput() {
        return this._grpcRetryEvents;
    }
    /**
     * @stability stable
     */
    get httpRetryEvents() {
        return this.getListAttribute('http_retry_events');
    }
    /**
     * @stability stable
     */
    set httpRetryEvents(value) {
        this._httpRetryEvents = value;
    }
    /**
     * @stability stable
     */
    resetHttpRetryEvents() {
        this._httpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpRetryEventsInput() {
        return this._httpRetryEvents;
    }
    /**
     * @stability stable
     */
    get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    /**
     * @stability stable
     */
    set maxRetries(value) {
        this._maxRetries = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxRetriesInput() {
        return this._maxRetries;
    }
    /**
     * @stability stable
     */
    get tcpRetryEvents() {
        return this.getListAttribute('tcp_retry_events');
    }
    /**
     * @stability stable
     */
    set tcpRetryEvents(value) {
        this._tcpRetryEvents = value;
    }
    /**
     * @stability stable
     */
    resetTcpRetryEvents() {
        this._tcpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tcpRetryEventsInput() {
        return this._tcpRetryEvents;
    }
    /**
     * @stability stable
     */
    get perRetryTimeout() {
        return this._perRetryTimeout;
    }
    /**
     * @stability stable
     */
    putPerRetryTimeout(value) {
        this._perRetryTimeout.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRetryTimeoutInput() {
        return this._perRetryTimeout.internalValue;
    }
}
exports.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference = AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference[_f] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct) {
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
exports.appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform = appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference = AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference[_g] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct) {
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
exports.appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform = appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference = AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference[_h] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle: appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct.idle),
        per_request: appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct.perRequest),
    };
}
exports.appmeshRouteSpecGrpcRouteTimeoutToTerraform = appmeshRouteSpecGrpcRouteTimeoutToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteTimeoutOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idle - computed: false, optional: true, required: false
        this._idle = new AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference(this, "idle", true);
        // per_request - computed: false, optional: true, required: false
        this._perRequest = new AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference(this, "per_request", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._idle) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.idle = (_13 = this._idle) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._perRequest) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRequest = (_15 = this._perRequest) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idle.internalValue = undefined;
            this._perRequest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idle.internalValue = value.idle;
            this._perRequest.internalValue = value.perRequest;
        }
    }
    /**
     * @stability stable
     */
    get idle() {
        return this._idle;
    }
    /**
     * @stability stable
     */
    putIdle(value) {
        this._idle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdle() {
        this._idle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleInput() {
        return this._idle.internalValue;
    }
    /**
     * @stability stable
     */
    get perRequest() {
        return this._perRequest;
    }
    /**
     * @stability stable
     */
    putPerRequest(value) {
        this._perRequest.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPerRequest() {
        this._perRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRequestInput() {
        return this._perRequest.internalValue;
    }
}
exports.AppmeshRouteSpecGrpcRouteTimeoutOutputReference = AppmeshRouteSpecGrpcRouteTimeoutOutputReference;
_j = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteTimeoutOutputReference[_j] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteTimeoutOutputReference", version: "3.0.1" };
function appmeshRouteSpecGrpcRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: appmeshRouteSpecGrpcRouteActionToTerraform(struct.action),
        match: appmeshRouteSpecGrpcRouteMatchToTerraform(struct.match),
        retry_policy: appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct.retryPolicy),
        timeout: appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct.timeout),
    };
}
exports.appmeshRouteSpecGrpcRouteToTerraform = appmeshRouteSpecGrpcRouteToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // action - computed: false, optional: false, required: true
        this._action = new AppmeshRouteSpecGrpcRouteActionOutputReference(this, "action", true);
        // match - computed: false, optional: true, required: false
        this._match = new AppmeshRouteSpecGrpcRouteMatchOutputReference(this, "match", true);
        // retry_policy - computed: false, optional: true, required: false
        this._retryPolicy = new AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference(this, "retry_policy", true);
        // timeout - computed: false, optional: true, required: false
        this._timeout = new AppmeshRouteSpecGrpcRouteTimeoutOutputReference(this, "timeout", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17, _18, _19;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._action) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.action = (_13 = this._action) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._match) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.match = (_15 = this._match) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._retryPolicy) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.retryPolicy = (_17 = this._retryPolicy) === null || _17 === void 0 ? void 0 : _17.internalValue;
        }
        if ((_18 = this._timeout) === null || _18 === void 0 ? void 0 : _18.internalValue) {
            hasAnyValues = true;
            internalValueResult.timeout = (_19 = this._timeout) === null || _19 === void 0 ? void 0 : _19.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._action.internalValue = undefined;
            this._match.internalValue = undefined;
            this._retryPolicy.internalValue = undefined;
            this._timeout.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._action.internalValue = value.action;
            this._match.internalValue = value.match;
            this._retryPolicy.internalValue = value.retryPolicy;
            this._timeout.internalValue = value.timeout;
        }
    }
    /**
     * @stability stable
     */
    get action() {
        return this._action;
    }
    /**
     * @stability stable
     */
    putAction(value) {
        this._action.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action.internalValue;
    }
    /**
     * @stability stable
     */
    get match() {
        return this._match;
    }
    /**
     * @stability stable
     */
    putMatch(value) {
        this._match.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMatch() {
        this._match.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get matchInput() {
        return this._match.internalValue;
    }
    /**
     * @stability stable
     */
    get retryPolicy() {
        return this._retryPolicy;
    }
    /**
     * @stability stable
     */
    putRetryPolicy(value) {
        this._retryPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRetryPolicy() {
        this._retryPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryPolicyInput() {
        return this._retryPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get timeout() {
        return this._timeout;
    }
    /**
     * @stability stable
     */
    putTimeout(value) {
        this._timeout.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeout() {
        this._timeout.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInput() {
        return this._timeout.internalValue;
    }
}
exports.AppmeshRouteSpecGrpcRouteOutputReference = AppmeshRouteSpecGrpcRouteOutputReference;
_k = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecGrpcRouteOutputReference[_k] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecGrpcRouteOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform = appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform;
function appmeshRouteSpecHttp2RouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform)(struct.weightedTarget),
    };
}
exports.appmeshRouteSpecHttp2RouteActionToTerraform = appmeshRouteSpecHttp2RouteActionToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
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
        if (this._weightedTarget) {
            hasAnyValues = true;
            internalValueResult.weightedTarget = this._weightedTarget;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._weightedTarget = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._weightedTarget = value.weightedTarget;
        }
    }
    /**
     * @stability stable
     */
    get weightedTarget() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('weighted_target');
    }
    /**
     * @stability stable
     */
    set weightedTarget(value) {
        this._weightedTarget = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get weightedTargetInput() {
        return this._weightedTarget;
    }
}
exports.AppmeshRouteSpecHttp2RouteActionOutputReference = AppmeshRouteSpecHttp2RouteActionOutputReference;
_l = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteActionOutputReference[_l] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteActionOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start),
    };
}
exports.appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform = appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._end) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._start) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._end = undefined;
            this._start = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._end = value.end;
            this._start = value.start;
        }
    }
    /**
     * @stability stable
     */
    get end() {
        return this.getNumberAttribute('end');
    }
    /**
     * @stability stable
     */
    set end(value) {
        this._end = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endInput() {
        return this._end;
    }
    /**
     * @stability stable
     */
    get start() {
        return this.getNumberAttribute('start');
    }
    /**
     * @stability stable
     */
    set start(value) {
        this._start = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startInput() {
        return this._start;
    }
}
exports.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference = AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference;
_m = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference[_m] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct.range),
    };
}
exports.appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform = appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // range - computed: false, optional: true, required: false
        this._range = new AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(this, "range", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._exact) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._regex) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        if (this._suffix) {
            hasAnyValues = true;
            internalValueResult.suffix = this._suffix;
        }
        if ((_12 = this._range) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.range = (_13 = this._range) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exact = undefined;
            this._prefix = undefined;
            this._regex = undefined;
            this._suffix = undefined;
            this._range.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exact = value.exact;
            this._prefix = value.prefix;
            this._regex = value.regex;
            this._suffix = value.suffix;
            this._range.internalValue = value.range;
        }
    }
    /**
     * @stability stable
     */
    get exact() {
        return this.getStringAttribute('exact');
    }
    /**
     * @stability stable
     */
    set exact(value) {
        this._exact = value;
    }
    /**
     * @stability stable
     */
    resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get exactInput() {
        return this._exact;
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
    get regex() {
        return this.getStringAttribute('regex');
    }
    /**
     * @stability stable
     */
    set regex(value) {
        this._regex = value;
    }
    /**
     * @stability stable
     */
    resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regexInput() {
        return this._regex;
    }
    /**
     * @stability stable
     */
    get suffix() {
        return this.getStringAttribute('suffix');
    }
    /**
     * @stability stable
     */
    set suffix(value) {
        this._suffix = value;
    }
    /**
     * @stability stable
     */
    resetSuffix() {
        this._suffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get suffixInput() {
        return this._suffix;
    }
    /**
     * @stability stable
     */
    get range() {
        return this._range;
    }
    /**
     * @stability stable
     */
    putRange(value) {
        this._range.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRange() {
        this._range.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rangeInput() {
        return this._range.internalValue;
    }
}
exports.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference = AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference;
_o = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference[_o] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct.match),
    };
}
exports.appmeshRouteSpecHttp2RouteMatchHeaderToTerraform = appmeshRouteSpecHttp2RouteMatchHeaderToTerraform;
function appmeshRouteSpecHttp2RouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        method: cdktf.stringToTerraform(struct.method),
        prefix: cdktf.stringToTerraform(struct.prefix),
        scheme: cdktf.stringToTerraform(struct.scheme),
        header: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderToTerraform)(struct.header),
    };
}
exports.appmeshRouteSpecHttp2RouteMatchToTerraform = appmeshRouteSpecHttp2RouteMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._method) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._scheme) {
            hasAnyValues = true;
            internalValueResult.scheme = this._scheme;
        }
        if (this._header) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._method = undefined;
            this._prefix = undefined;
            this._scheme = undefined;
            this._header = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._method = value.method;
            this._prefix = value.prefix;
            this._scheme = value.scheme;
            this._header = value.header;
        }
    }
    /**
     * @stability stable
     */
    get method() {
        return this.getStringAttribute('method');
    }
    /**
     * @stability stable
     */
    set method(value) {
        this._method = value;
    }
    /**
     * @stability stable
     */
    resetMethod() {
        this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get methodInput() {
        return this._method;
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
    get scheme() {
        return this.getStringAttribute('scheme');
    }
    /**
     * @stability stable
     */
    set scheme(value) {
        this._scheme = value;
    }
    /**
     * @stability stable
     */
    resetScheme() {
        this._scheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemeInput() {
        return this._scheme;
    }
    /**
     * @stability stable
     */
    get header() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('header');
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
}
exports.AppmeshRouteSpecHttp2RouteMatchOutputReference = AppmeshRouteSpecHttp2RouteMatchOutputReference;
_p = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteMatchOutputReference[_p] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteMatchOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
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
exports.appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform = appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference = AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference;
_q = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference[_q] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct.perRetryTimeout),
    };
}
exports.appmeshRouteSpecHttp2RouteRetryPolicyToTerraform = appmeshRouteSpecHttp2RouteRetryPolicyToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // per_retry_timeout - computed: false, optional: false, required: true
        this._perRetryTimeout = new AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._httpRetryEvents) {
            hasAnyValues = true;
            internalValueResult.httpRetryEvents = this._httpRetryEvents;
        }
        if (this._maxRetries) {
            hasAnyValues = true;
            internalValueResult.maxRetries = this._maxRetries;
        }
        if (this._tcpRetryEvents) {
            hasAnyValues = true;
            internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
        }
        if ((_12 = this._perRetryTimeout) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRetryTimeout = (_13 = this._perRetryTimeout) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._httpRetryEvents = undefined;
            this._maxRetries = undefined;
            this._tcpRetryEvents = undefined;
            this._perRetryTimeout.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._httpRetryEvents = value.httpRetryEvents;
            this._maxRetries = value.maxRetries;
            this._tcpRetryEvents = value.tcpRetryEvents;
            this._perRetryTimeout.internalValue = value.perRetryTimeout;
        }
    }
    /**
     * @stability stable
     */
    get httpRetryEvents() {
        return this.getListAttribute('http_retry_events');
    }
    /**
     * @stability stable
     */
    set httpRetryEvents(value) {
        this._httpRetryEvents = value;
    }
    /**
     * @stability stable
     */
    resetHttpRetryEvents() {
        this._httpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpRetryEventsInput() {
        return this._httpRetryEvents;
    }
    /**
     * @stability stable
     */
    get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    /**
     * @stability stable
     */
    set maxRetries(value) {
        this._maxRetries = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxRetriesInput() {
        return this._maxRetries;
    }
    /**
     * @stability stable
     */
    get tcpRetryEvents() {
        return this.getListAttribute('tcp_retry_events');
    }
    /**
     * @stability stable
     */
    set tcpRetryEvents(value) {
        this._tcpRetryEvents = value;
    }
    /**
     * @stability stable
     */
    resetTcpRetryEvents() {
        this._tcpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tcpRetryEventsInput() {
        return this._tcpRetryEvents;
    }
    /**
     * @stability stable
     */
    get perRetryTimeout() {
        return this._perRetryTimeout;
    }
    /**
     * @stability stable
     */
    putPerRetryTimeout(value) {
        this._perRetryTimeout.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRetryTimeoutInput() {
        return this._perRetryTimeout.internalValue;
    }
}
exports.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference = AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference;
_r = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference[_r] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct) {
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
exports.appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform = appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference = AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference;
_s = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference[_s] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct) {
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
exports.appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform = appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference = AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference;
_t = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference[_t] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle: appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct.idle),
        per_request: appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct.perRequest),
    };
}
exports.appmeshRouteSpecHttp2RouteTimeoutToTerraform = appmeshRouteSpecHttp2RouteTimeoutToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteTimeoutOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idle - computed: false, optional: true, required: false
        this._idle = new AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference(this, "idle", true);
        // per_request - computed: false, optional: true, required: false
        this._perRequest = new AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference(this, "per_request", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._idle) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.idle = (_13 = this._idle) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._perRequest) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRequest = (_15 = this._perRequest) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idle.internalValue = undefined;
            this._perRequest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idle.internalValue = value.idle;
            this._perRequest.internalValue = value.perRequest;
        }
    }
    /**
     * @stability stable
     */
    get idle() {
        return this._idle;
    }
    /**
     * @stability stable
     */
    putIdle(value) {
        this._idle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdle() {
        this._idle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleInput() {
        return this._idle.internalValue;
    }
    /**
     * @stability stable
     */
    get perRequest() {
        return this._perRequest;
    }
    /**
     * @stability stable
     */
    putPerRequest(value) {
        this._perRequest.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPerRequest() {
        this._perRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRequestInput() {
        return this._perRequest.internalValue;
    }
}
exports.AppmeshRouteSpecHttp2RouteTimeoutOutputReference = AppmeshRouteSpecHttp2RouteTimeoutOutputReference;
_u = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteTimeoutOutputReference[_u] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteTimeoutOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttp2RouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: appmeshRouteSpecHttp2RouteActionToTerraform(struct.action),
        match: appmeshRouteSpecHttp2RouteMatchToTerraform(struct.match),
        retry_policy: appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct.retryPolicy),
        timeout: appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct.timeout),
    };
}
exports.appmeshRouteSpecHttp2RouteToTerraform = appmeshRouteSpecHttp2RouteToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // action - computed: false, optional: false, required: true
        this._action = new AppmeshRouteSpecHttp2RouteActionOutputReference(this, "action", true);
        // match - computed: false, optional: false, required: true
        this._match = new AppmeshRouteSpecHttp2RouteMatchOutputReference(this, "match", true);
        // retry_policy - computed: false, optional: true, required: false
        this._retryPolicy = new AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference(this, "retry_policy", true);
        // timeout - computed: false, optional: true, required: false
        this._timeout = new AppmeshRouteSpecHttp2RouteTimeoutOutputReference(this, "timeout", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17, _18, _19;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._action) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.action = (_13 = this._action) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._match) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.match = (_15 = this._match) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._retryPolicy) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.retryPolicy = (_17 = this._retryPolicy) === null || _17 === void 0 ? void 0 : _17.internalValue;
        }
        if ((_18 = this._timeout) === null || _18 === void 0 ? void 0 : _18.internalValue) {
            hasAnyValues = true;
            internalValueResult.timeout = (_19 = this._timeout) === null || _19 === void 0 ? void 0 : _19.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._action.internalValue = undefined;
            this._match.internalValue = undefined;
            this._retryPolicy.internalValue = undefined;
            this._timeout.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._action.internalValue = value.action;
            this._match.internalValue = value.match;
            this._retryPolicy.internalValue = value.retryPolicy;
            this._timeout.internalValue = value.timeout;
        }
    }
    /**
     * @stability stable
     */
    get action() {
        return this._action;
    }
    /**
     * @stability stable
     */
    putAction(value) {
        this._action.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action.internalValue;
    }
    /**
     * @stability stable
     */
    get match() {
        return this._match;
    }
    /**
     * @stability stable
     */
    putMatch(value) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get matchInput() {
        return this._match.internalValue;
    }
    /**
     * @stability stable
     */
    get retryPolicy() {
        return this._retryPolicy;
    }
    /**
     * @stability stable
     */
    putRetryPolicy(value) {
        this._retryPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRetryPolicy() {
        this._retryPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryPolicyInput() {
        return this._retryPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get timeout() {
        return this._timeout;
    }
    /**
     * @stability stable
     */
    putTimeout(value) {
        this._timeout.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeout() {
        this._timeout.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInput() {
        return this._timeout.internalValue;
    }
}
exports.AppmeshRouteSpecHttp2RouteOutputReference = AppmeshRouteSpecHttp2RouteOutputReference;
_v = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttp2RouteOutputReference[_v] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttp2RouteOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform = appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform;
function appmeshRouteSpecHttpRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform)(struct.weightedTarget),
    };
}
exports.appmeshRouteSpecHttpRouteActionToTerraform = appmeshRouteSpecHttpRouteActionToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
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
        if (this._weightedTarget) {
            hasAnyValues = true;
            internalValueResult.weightedTarget = this._weightedTarget;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._weightedTarget = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._weightedTarget = value.weightedTarget;
        }
    }
    /**
     * @stability stable
     */
    get weightedTarget() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('weighted_target');
    }
    /**
     * @stability stable
     */
    set weightedTarget(value) {
        this._weightedTarget = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get weightedTargetInput() {
        return this._weightedTarget;
    }
}
exports.AppmeshRouteSpecHttpRouteActionOutputReference = AppmeshRouteSpecHttpRouteActionOutputReference;
_w = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteActionOutputReference[_w] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteActionOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start),
    };
}
exports.appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform = appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
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
        if (this._end) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._start) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._end = undefined;
            this._start = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._end = value.end;
            this._start = value.start;
        }
    }
    /**
     * @stability stable
     */
    get end() {
        return this.getNumberAttribute('end');
    }
    /**
     * @stability stable
     */
    set end(value) {
        this._end = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endInput() {
        return this._end;
    }
    /**
     * @stability stable
     */
    get start() {
        return this.getNumberAttribute('start');
    }
    /**
     * @stability stable
     */
    set start(value) {
        this._start = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startInput() {
        return this._start;
    }
}
exports.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference = AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference;
_x = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference[_x] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct.range),
    };
}
exports.appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform = appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // range - computed: false, optional: true, required: false
        this._range = new AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(this, "range", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._exact) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._regex) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        if (this._suffix) {
            hasAnyValues = true;
            internalValueResult.suffix = this._suffix;
        }
        if ((_12 = this._range) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.range = (_13 = this._range) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exact = undefined;
            this._prefix = undefined;
            this._regex = undefined;
            this._suffix = undefined;
            this._range.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exact = value.exact;
            this._prefix = value.prefix;
            this._regex = value.regex;
            this._suffix = value.suffix;
            this._range.internalValue = value.range;
        }
    }
    /**
     * @stability stable
     */
    get exact() {
        return this.getStringAttribute('exact');
    }
    /**
     * @stability stable
     */
    set exact(value) {
        this._exact = value;
    }
    /**
     * @stability stable
     */
    resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get exactInput() {
        return this._exact;
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
    get regex() {
        return this.getStringAttribute('regex');
    }
    /**
     * @stability stable
     */
    set regex(value) {
        this._regex = value;
    }
    /**
     * @stability stable
     */
    resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regexInput() {
        return this._regex;
    }
    /**
     * @stability stable
     */
    get suffix() {
        return this.getStringAttribute('suffix');
    }
    /**
     * @stability stable
     */
    set suffix(value) {
        this._suffix = value;
    }
    /**
     * @stability stable
     */
    resetSuffix() {
        this._suffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get suffixInput() {
        return this._suffix;
    }
    /**
     * @stability stable
     */
    get range() {
        return this._range;
    }
    /**
     * @stability stable
     */
    putRange(value) {
        this._range.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRange() {
        this._range.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rangeInput() {
        return this._range.internalValue;
    }
}
exports.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference = AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference;
_y = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference[_y] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct.match),
    };
}
exports.appmeshRouteSpecHttpRouteMatchHeaderToTerraform = appmeshRouteSpecHttpRouteMatchHeaderToTerraform;
function appmeshRouteSpecHttpRouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        method: cdktf.stringToTerraform(struct.method),
        prefix: cdktf.stringToTerraform(struct.prefix),
        scheme: cdktf.stringToTerraform(struct.scheme),
        header: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderToTerraform)(struct.header),
    };
}
exports.appmeshRouteSpecHttpRouteMatchToTerraform = appmeshRouteSpecHttpRouteMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._method) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._scheme) {
            hasAnyValues = true;
            internalValueResult.scheme = this._scheme;
        }
        if (this._header) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._method = undefined;
            this._prefix = undefined;
            this._scheme = undefined;
            this._header = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._method = value.method;
            this._prefix = value.prefix;
            this._scheme = value.scheme;
            this._header = value.header;
        }
    }
    /**
     * @stability stable
     */
    get method() {
        return this.getStringAttribute('method');
    }
    /**
     * @stability stable
     */
    set method(value) {
        this._method = value;
    }
    /**
     * @stability stable
     */
    resetMethod() {
        this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get methodInput() {
        return this._method;
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
    get scheme() {
        return this.getStringAttribute('scheme');
    }
    /**
     * @stability stable
     */
    set scheme(value) {
        this._scheme = value;
    }
    /**
     * @stability stable
     */
    resetScheme() {
        this._scheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemeInput() {
        return this._scheme;
    }
    /**
     * @stability stable
     */
    get header() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('header');
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
}
exports.AppmeshRouteSpecHttpRouteMatchOutputReference = AppmeshRouteSpecHttpRouteMatchOutputReference;
_z = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteMatchOutputReference[_z] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteMatchOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
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
exports.appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform = appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference = AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference[_0] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct.perRetryTimeout),
    };
}
exports.appmeshRouteSpecHttpRouteRetryPolicyToTerraform = appmeshRouteSpecHttpRouteRetryPolicyToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // per_retry_timeout - computed: false, optional: false, required: true
        this._perRetryTimeout = new AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._httpRetryEvents) {
            hasAnyValues = true;
            internalValueResult.httpRetryEvents = this._httpRetryEvents;
        }
        if (this._maxRetries) {
            hasAnyValues = true;
            internalValueResult.maxRetries = this._maxRetries;
        }
        if (this._tcpRetryEvents) {
            hasAnyValues = true;
            internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
        }
        if ((_12 = this._perRetryTimeout) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRetryTimeout = (_13 = this._perRetryTimeout) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._httpRetryEvents = undefined;
            this._maxRetries = undefined;
            this._tcpRetryEvents = undefined;
            this._perRetryTimeout.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._httpRetryEvents = value.httpRetryEvents;
            this._maxRetries = value.maxRetries;
            this._tcpRetryEvents = value.tcpRetryEvents;
            this._perRetryTimeout.internalValue = value.perRetryTimeout;
        }
    }
    /**
     * @stability stable
     */
    get httpRetryEvents() {
        return this.getListAttribute('http_retry_events');
    }
    /**
     * @stability stable
     */
    set httpRetryEvents(value) {
        this._httpRetryEvents = value;
    }
    /**
     * @stability stable
     */
    resetHttpRetryEvents() {
        this._httpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpRetryEventsInput() {
        return this._httpRetryEvents;
    }
    /**
     * @stability stable
     */
    get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    /**
     * @stability stable
     */
    set maxRetries(value) {
        this._maxRetries = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxRetriesInput() {
        return this._maxRetries;
    }
    /**
     * @stability stable
     */
    get tcpRetryEvents() {
        return this.getListAttribute('tcp_retry_events');
    }
    /**
     * @stability stable
     */
    set tcpRetryEvents(value) {
        this._tcpRetryEvents = value;
    }
    /**
     * @stability stable
     */
    resetTcpRetryEvents() {
        this._tcpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tcpRetryEventsInput() {
        return this._tcpRetryEvents;
    }
    /**
     * @stability stable
     */
    get perRetryTimeout() {
        return this._perRetryTimeout;
    }
    /**
     * @stability stable
     */
    putPerRetryTimeout(value) {
        this._perRetryTimeout.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRetryTimeoutInput() {
        return this._perRetryTimeout.internalValue;
    }
}
exports.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference = AppmeshRouteSpecHttpRouteRetryPolicyOutputReference;
_1 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteRetryPolicyOutputReference[_1] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct) {
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
exports.appmeshRouteSpecHttpRouteTimeoutIdleToTerraform = appmeshRouteSpecHttpRouteTimeoutIdleToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference = AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference;
_2 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference[_2] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct) {
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
exports.appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform = appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference = AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference;
_3 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference[_3] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle: appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct.idle),
        per_request: appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct.perRequest),
    };
}
exports.appmeshRouteSpecHttpRouteTimeoutToTerraform = appmeshRouteSpecHttpRouteTimeoutToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idle - computed: false, optional: true, required: false
        this._idle = new AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference(this, "idle", true);
        // per_request - computed: false, optional: true, required: false
        this._perRequest = new AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference(this, "per_request", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._idle) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.idle = (_13 = this._idle) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._perRequest) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRequest = (_15 = this._perRequest) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idle.internalValue = undefined;
            this._perRequest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idle.internalValue = value.idle;
            this._perRequest.internalValue = value.perRequest;
        }
    }
    /**
     * @stability stable
     */
    get idle() {
        return this._idle;
    }
    /**
     * @stability stable
     */
    putIdle(value) {
        this._idle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdle() {
        this._idle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleInput() {
        return this._idle.internalValue;
    }
    /**
     * @stability stable
     */
    get perRequest() {
        return this._perRequest;
    }
    /**
     * @stability stable
     */
    putPerRequest(value) {
        this._perRequest.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPerRequest() {
        this._perRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRequestInput() {
        return this._perRequest.internalValue;
    }
}
exports.AppmeshRouteSpecHttpRouteTimeoutOutputReference = AppmeshRouteSpecHttpRouteTimeoutOutputReference;
_4 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteTimeoutOutputReference[_4] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteTimeoutOutputReference", version: "3.0.1" };
function appmeshRouteSpecHttpRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: appmeshRouteSpecHttpRouteActionToTerraform(struct.action),
        match: appmeshRouteSpecHttpRouteMatchToTerraform(struct.match),
        retry_policy: appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct.retryPolicy),
        timeout: appmeshRouteSpecHttpRouteTimeoutToTerraform(struct.timeout),
    };
}
exports.appmeshRouteSpecHttpRouteToTerraform = appmeshRouteSpecHttpRouteToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // action - computed: false, optional: false, required: true
        this._action = new AppmeshRouteSpecHttpRouteActionOutputReference(this, "action", true);
        // match - computed: false, optional: false, required: true
        this._match = new AppmeshRouteSpecHttpRouteMatchOutputReference(this, "match", true);
        // retry_policy - computed: false, optional: true, required: false
        this._retryPolicy = new AppmeshRouteSpecHttpRouteRetryPolicyOutputReference(this, "retry_policy", true);
        // timeout - computed: false, optional: true, required: false
        this._timeout = new AppmeshRouteSpecHttpRouteTimeoutOutputReference(this, "timeout", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17, _18, _19;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._action) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.action = (_13 = this._action) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._match) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.match = (_15 = this._match) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._retryPolicy) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.retryPolicy = (_17 = this._retryPolicy) === null || _17 === void 0 ? void 0 : _17.internalValue;
        }
        if ((_18 = this._timeout) === null || _18 === void 0 ? void 0 : _18.internalValue) {
            hasAnyValues = true;
            internalValueResult.timeout = (_19 = this._timeout) === null || _19 === void 0 ? void 0 : _19.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._action.internalValue = undefined;
            this._match.internalValue = undefined;
            this._retryPolicy.internalValue = undefined;
            this._timeout.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._action.internalValue = value.action;
            this._match.internalValue = value.match;
            this._retryPolicy.internalValue = value.retryPolicy;
            this._timeout.internalValue = value.timeout;
        }
    }
    /**
     * @stability stable
     */
    get action() {
        return this._action;
    }
    /**
     * @stability stable
     */
    putAction(value) {
        this._action.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action.internalValue;
    }
    /**
     * @stability stable
     */
    get match() {
        return this._match;
    }
    /**
     * @stability stable
     */
    putMatch(value) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get matchInput() {
        return this._match.internalValue;
    }
    /**
     * @stability stable
     */
    get retryPolicy() {
        return this._retryPolicy;
    }
    /**
     * @stability stable
     */
    putRetryPolicy(value) {
        this._retryPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRetryPolicy() {
        this._retryPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryPolicyInput() {
        return this._retryPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get timeout() {
        return this._timeout;
    }
    /**
     * @stability stable
     */
    putTimeout(value) {
        this._timeout.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeout() {
        this._timeout.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInput() {
        return this._timeout.internalValue;
    }
}
exports.AppmeshRouteSpecHttpRouteOutputReference = AppmeshRouteSpecHttpRouteOutputReference;
_5 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecHttpRouteOutputReference[_5] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecHttpRouteOutputReference", version: "3.0.1" };
function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform = appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform;
function appmeshRouteSpecTcpRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform)(struct.weightedTarget),
    };
}
exports.appmeshRouteSpecTcpRouteActionToTerraform = appmeshRouteSpecTcpRouteActionToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecTcpRouteActionOutputReference extends cdktf.ComplexObject {
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
        if (this._weightedTarget) {
            hasAnyValues = true;
            internalValueResult.weightedTarget = this._weightedTarget;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._weightedTarget = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._weightedTarget = value.weightedTarget;
        }
    }
    /**
     * @stability stable
     */
    get weightedTarget() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('weighted_target');
    }
    /**
     * @stability stable
     */
    set weightedTarget(value) {
        this._weightedTarget = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get weightedTargetInput() {
        return this._weightedTarget;
    }
}
exports.AppmeshRouteSpecTcpRouteActionOutputReference = AppmeshRouteSpecTcpRouteActionOutputReference;
_6 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecTcpRouteActionOutputReference[_6] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecTcpRouteActionOutputReference", version: "3.0.1" };
function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct) {
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
exports.appmeshRouteSpecTcpRouteTimeoutIdleToTerraform = appmeshRouteSpecTcpRouteTimeoutIdleToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference = AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference;
_7 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference[_7] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference", version: "3.0.1" };
function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle: appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct.idle),
    };
}
exports.appmeshRouteSpecTcpRouteTimeoutToTerraform = appmeshRouteSpecTcpRouteTimeoutToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecTcpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idle - computed: false, optional: true, required: false
        this._idle = new AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference(this, "idle", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._idle) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.idle = (_13 = this._idle) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idle.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idle.internalValue = value.idle;
        }
    }
    /**
     * @stability stable
     */
    get idle() {
        return this._idle;
    }
    /**
     * @stability stable
     */
    putIdle(value) {
        this._idle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdle() {
        this._idle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleInput() {
        return this._idle.internalValue;
    }
}
exports.AppmeshRouteSpecTcpRouteTimeoutOutputReference = AppmeshRouteSpecTcpRouteTimeoutOutputReference;
_8 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecTcpRouteTimeoutOutputReference[_8] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecTcpRouteTimeoutOutputReference", version: "3.0.1" };
function appmeshRouteSpecTcpRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: appmeshRouteSpecTcpRouteActionToTerraform(struct.action),
        timeout: appmeshRouteSpecTcpRouteTimeoutToTerraform(struct.timeout),
    };
}
exports.appmeshRouteSpecTcpRouteToTerraform = appmeshRouteSpecTcpRouteToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecTcpRouteOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // action - computed: false, optional: false, required: true
        this._action = new AppmeshRouteSpecTcpRouteActionOutputReference(this, "action", true);
        // timeout - computed: false, optional: true, required: false
        this._timeout = new AppmeshRouteSpecTcpRouteTimeoutOutputReference(this, "timeout", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._action) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.action = (_13 = this._action) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._timeout) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.timeout = (_15 = this._timeout) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._action.internalValue = undefined;
            this._timeout.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._action.internalValue = value.action;
            this._timeout.internalValue = value.timeout;
        }
    }
    /**
     * @stability stable
     */
    get action() {
        return this._action;
    }
    /**
     * @stability stable
     */
    putAction(value) {
        this._action.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action.internalValue;
    }
    /**
     * @stability stable
     */
    get timeout() {
        return this._timeout;
    }
    /**
     * @stability stable
     */
    putTimeout(value) {
        this._timeout.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeout() {
        this._timeout.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInput() {
        return this._timeout.internalValue;
    }
}
exports.AppmeshRouteSpecTcpRouteOutputReference = AppmeshRouteSpecTcpRouteOutputReference;
_9 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecTcpRouteOutputReference[_9] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecTcpRouteOutputReference", version: "3.0.1" };
function appmeshRouteSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        grpc_route: appmeshRouteSpecGrpcRouteToTerraform(struct.grpcRoute),
        http2_route: appmeshRouteSpecHttp2RouteToTerraform(struct.http2Route),
        http_route: appmeshRouteSpecHttpRouteToTerraform(struct.httpRoute),
        tcp_route: appmeshRouteSpecTcpRouteToTerraform(struct.tcpRoute),
    };
}
exports.appmeshRouteSpecToTerraform = appmeshRouteSpecToTerraform;
/**
 * @stability stable
 */
class AppmeshRouteSpecOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // grpc_route - computed: false, optional: true, required: false
        this._grpcRoute = new AppmeshRouteSpecGrpcRouteOutputReference(this, "grpc_route", true);
        // http2_route - computed: false, optional: true, required: false
        this._http2Route = new AppmeshRouteSpecHttp2RouteOutputReference(this, "http2_route", true);
        // http_route - computed: false, optional: true, required: false
        this._httpRoute = new AppmeshRouteSpecHttpRouteOutputReference(this, "http_route", true);
        // tcp_route - computed: false, optional: true, required: false
        this._tcpRoute = new AppmeshRouteSpecTcpRouteOutputReference(this, "tcp_route", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17, _18, _19;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._priority) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if ((_12 = this._grpcRoute) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.grpcRoute = (_13 = this._grpcRoute) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._http2Route) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.http2Route = (_15 = this._http2Route) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._httpRoute) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.httpRoute = (_17 = this._httpRoute) === null || _17 === void 0 ? void 0 : _17.internalValue;
        }
        if ((_18 = this._tcpRoute) === null || _18 === void 0 ? void 0 : _18.internalValue) {
            hasAnyValues = true;
            internalValueResult.tcpRoute = (_19 = this._tcpRoute) === null || _19 === void 0 ? void 0 : _19.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._priority = undefined;
            this._grpcRoute.internalValue = undefined;
            this._http2Route.internalValue = undefined;
            this._httpRoute.internalValue = undefined;
            this._tcpRoute.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._priority = value.priority;
            this._grpcRoute.internalValue = value.grpcRoute;
            this._http2Route.internalValue = value.http2Route;
            this._httpRoute.internalValue = value.httpRoute;
            this._tcpRoute.internalValue = value.tcpRoute;
        }
    }
    /**
     * @stability stable
     */
    get priority() {
        return this.getNumberAttribute('priority');
    }
    /**
     * @stability stable
     */
    set priority(value) {
        this._priority = value;
    }
    /**
     * @stability stable
     */
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get priorityInput() {
        return this._priority;
    }
    /**
     * @stability stable
     */
    get grpcRoute() {
        return this._grpcRoute;
    }
    /**
     * @stability stable
     */
    putGrpcRoute(value) {
        this._grpcRoute.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetGrpcRoute() {
        this._grpcRoute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get grpcRouteInput() {
        return this._grpcRoute.internalValue;
    }
    /**
     * @stability stable
     */
    get http2Route() {
        return this._http2Route;
    }
    /**
     * @stability stable
     */
    putHttp2Route(value) {
        this._http2Route.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHttp2Route() {
        this._http2Route.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get http2RouteInput() {
        return this._http2Route.internalValue;
    }
    /**
     * @stability stable
     */
    get httpRoute() {
        return this._httpRoute;
    }
    /**
     * @stability stable
     */
    putHttpRoute(value) {
        this._httpRoute.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHttpRoute() {
        this._httpRoute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpRouteInput() {
        return this._httpRoute.internalValue;
    }
    /**
     * @stability stable
     */
    get tcpRoute() {
        return this._tcpRoute;
    }
    /**
     * @stability stable
     */
    putTcpRoute(value) {
        this._tcpRoute.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTcpRoute() {
        this._tcpRoute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tcpRouteInput() {
        return this._tcpRoute.internalValue;
    }
}
exports.AppmeshRouteSpecOutputReference = AppmeshRouteSpecOutputReference;
_10 = JSII_RTTI_SYMBOL_1;
AppmeshRouteSpecOutputReference[_10] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRouteSpecOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route}.
 *
 * @stability stable
 */
class AppmeshRoute extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appmesh_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // spec - computed: false, optional: false, required: true
        this._spec = new AppmeshRouteSpecOutputReference(this, "spec", true);
        this._meshName = config.meshName;
        this._meshOwner = config.meshOwner;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._virtualRouterName = config.virtualRouterName;
        this._spec.internalValue = config.spec;
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
    // created_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get createdDate() {
        return this.getStringAttribute('created_date');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastUpdatedDate() {
        return this.getStringAttribute('last_updated_date');
    }
    /**
     * @stability stable
     */
    get meshName() {
        return this.getStringAttribute('mesh_name');
    }
    /**
     * @stability stable
     */
    set meshName(value) {
        this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get meshNameInput() {
        return this._meshName;
    }
    /**
     * @stability stable
     */
    get meshOwner() {
        return this.getStringAttribute('mesh_owner');
    }
    /**
     * @stability stable
     */
    set meshOwner(value) {
        this._meshOwner = value;
    }
    /**
     * @stability stable
     */
    resetMeshOwner() {
        this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get meshOwnerInput() {
        return this._meshOwner;
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
    // resource_owner - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get resourceOwner() {
        return this.getStringAttribute('resource_owner');
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
    get virtualRouterName() {
        return this.getStringAttribute('virtual_router_name');
    }
    /**
     * @stability stable
     */
    set virtualRouterName(value) {
        this._virtualRouterName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get virtualRouterNameInput() {
        return this._virtualRouterName;
    }
    /**
     * @stability stable
     */
    get spec() {
        return this._spec;
    }
    /**
     * @stability stable
     */
    putSpec(value) {
        this._spec.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get specInput() {
        return this._spec.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
            spec: appmeshRouteSpecToTerraform(this._spec.internalValue),
        };
    }
}
exports.AppmeshRoute = AppmeshRoute;
_11 = JSII_RTTI_SYMBOL_1;
AppmeshRoute[_11] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshRoute", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppmeshRoute.tfResourceType = "aws_appmesh_route";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbWVzaC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBtZXNoL2FwcG1lc2gtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUEwQi9CLFNBQWdCLHdEQUF3RCxDQUFDLE1BQXNEO0lBQzdILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQztBQVRELDRIQVNDO0FBT0QsU0FBZ0IsMENBQTBDLENBQUMsTUFBeUY7SUFDbEosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDcEgsQ0FBQTtBQUNILENBQUM7QUFSRCxnR0FRQzs7OztBQUVELE1BQWEsOENBQStDLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJckYsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVB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QUFDO1lBQ3BELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3JFLElBQUksRUFBRSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUM1RCxDQUFDO0lBQ0osQ0FBQzs7QUFqTEgsb0NBa0xDOzs7QUFoTEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywyQkFBYyxHQUFXLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc2hOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzaE93bmVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXJ0dWFsUm91dGVyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BlYzogQXBwbWVzaFJvdXRlU3BlYztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5vZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsX25vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5vZGUpLFxuICAgIHdlaWdodDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZFRhcmdldDogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3ZWlnaHRlZF90YXJnZXQ6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0VG9UZXJyYWZvcm0pKHN0cnVjdCEud2VpZ2h0ZWRUYXJnZXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVBY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3dlaWdodGVkVGFyZ2V0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC53ZWlnaHRlZFRhcmdldCA9IHRoaXMuX3dlaWdodGVkVGFyZ2V0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3dlaWdodGVkVGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl93ZWlnaHRlZFRhcmdldCA9IHZhbHVlLndlaWdodGVkVGFyZ2V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdlaWdodGVkX3RhcmdldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF93ZWlnaHRlZFRhcmdldD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdOyBcbiAgcHVibGljIGdldCB3ZWlnaHRlZFRhcmdldCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd2VpZ2h0ZWRfdGFyZ2V0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgd2VpZ2h0ZWRUYXJnZXQodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdKSB7XG4gICAgdGhpcy5fd2VpZ2h0ZWRUYXJnZXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2VpZ2h0ZWRUYXJnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2VpZ2h0ZWRUYXJnZXQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZCksXG4gICAgc3RhcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoUmFuZ2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuZCA9IHRoaXMuX2VuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXJ0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGFydCA9IHRoaXMuX3N0YXJ0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuZCA9IHZhbHVlLmVuZDtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWUuc3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuZD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2VuZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kO1xuICB9XG5cbiAgLy8gc3RhcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3RhcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4YWN0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWdleD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VmZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmFuZ2U/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleGFjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leGFjdCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcmVnZXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnZXgpLFxuICAgIHN1ZmZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWZmaXgpLFxuICAgIHJhbmdlOiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnJhbmdlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9leGFjdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhhY3QgPSB0aGlzLl9leGFjdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWZpeCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVnZXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZ2V4ID0gdGhpcy5fcmVnZXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1ZmZpeCA9IHRoaXMuX3N1ZmZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JhbmdlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yYW5nZSA9IHRoaXMuX3JhbmdlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2V4YWN0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVnZXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWZmaXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yYW5nZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9leGFjdCA9IHZhbHVlLmV4YWN0O1xuICAgICAgdGhpcy5fcHJlZml4ID0gdmFsdWUucHJlZml4O1xuICAgICAgdGhpcy5fcmVnZXggPSB2YWx1ZS5yZWdleDtcbiAgICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlLnN1ZmZpeDtcbiAgICAgIHRoaXMuX3JhbmdlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5yYW5nZTtcbiAgICB9XG4gIH1cblxuICAvLyBleGFjdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGFjdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhhY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGFjdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhhY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4YWN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhhY3QoKSB7XG4gICAgdGhpcy5fZXhhY3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4YWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4YWN0O1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZpeCgpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICAvLyByZWdleCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWdleD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVnZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdleCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVnZXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZ2V4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVnZXgoKSB7XG4gICAgdGhpcy5fcmVnZXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZ2V4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2V4O1xuICB9XG5cbiAgLy8gc3VmZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1ZmZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VmZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VmZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1ZmZpeCgpIHtcbiAgICB0aGlzLl9zdWZmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1ZmZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWZmaXg7XG4gIH1cblxuICAvLyByYW5nZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yYW5nZSA9IG5ldyBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoUmFuZ2VPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmFuZ2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xuICB9XG4gIHB1YmxpYyBwdXRSYW5nZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlKSB7XG4gICAgdGhpcy5fcmFuZ2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJhbmdlKCkge1xuICAgIHRoaXMuX3JhbmdlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJhbmdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnZlcnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGludmVydDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW52ZXJ0KSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIG1hdGNoOiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoVG9UZXJyYWZvcm0oc3RydWN0IS5tYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWV0aG9kTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldGFkYXRhPzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1ldGhvZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldGhvZE5hbWUpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHNlcnZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlTmFtZSksXG4gICAgbWV0YWRhdGE6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXRhZGF0YSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2ggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21ldGhvZE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldGhvZE5hbWUgPSB0aGlzLl9tZXRob2ROYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVmaXggPSB0aGlzLl9wcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJ2aWNlTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VydmljZU5hbWUgPSB0aGlzLl9zZXJ2aWNlTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldGFkYXRhKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRhZGF0YSA9IHRoaXMuX21ldGFkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWV0aG9kTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlcnZpY2VOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21ldGhvZE5hbWUgPSB2YWx1ZS5tZXRob2ROYW1lO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdmFsdWUucHJlZml4O1xuICAgICAgdGhpcy5fc2VydmljZU5hbWUgPSB2YWx1ZS5zZXJ2aWNlTmFtZTtcbiAgICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWUubWV0YWRhdGE7XG4gICAgfVxuICB9XG5cbiAgLy8gbWV0aG9kX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWV0aG9kTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0aG9kTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldGhvZF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRob2ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRob2ROYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0aG9kTmFtZSgpIHtcbiAgICB0aGlzLl9tZXRob2ROYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRob2ROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGhvZE5hbWU7XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZml4KCkge1xuICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeDtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZpY2VOYW1lKCkge1xuICAgIHRoaXMuX3NlcnZpY2VOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlTmFtZTtcbiAgfVxuXG4gIC8vIG1ldGFkYXRhIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldGFkYXRhPzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFbXTsgXG4gIHB1YmxpYyBnZXQgbWV0YWRhdGEoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21ldGFkYXRhJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0YWRhdGEodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhW10pIHtcbiAgICB0aGlzLl9tZXRhZGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldGFkYXRhKCkge1xuICAgIHRoaXMuX21ldGFkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRhZGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JwY1JldHJ5RXZlbnRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwUmV0cnlFdmVudHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFJldHJpZXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0Y3BSZXRyeUV2ZW50cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyUmV0cnlUaW1lb3V0OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBncnBjX3JldHJ5X2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5ncnBjUmV0cnlFdmVudHMpLFxuICAgIGh0dHBfcmV0cnlfZXZlbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmh0dHBSZXRyeUV2ZW50cyksXG4gICAgbWF4X3JldHJpZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UmV0cmllcyksXG4gICAgdGNwX3JldHJ5X2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50Y3BSZXRyeUV2ZW50cyksXG4gICAgcGVyX3JldHJ5X3RpbWVvdXQ6IGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dFRvVGVycmFmb3JtKHN0cnVjdCEucGVyUmV0cnlUaW1lb3V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVJldHJ5UG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZ3JwY1JldHJ5RXZlbnRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ncnBjUmV0cnlFdmVudHMgPSB0aGlzLl9ncnBjUmV0cnlFdmVudHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwUmV0cnlFdmVudHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmh0dHBSZXRyeUV2ZW50cyA9IHRoaXMuX2h0dHBSZXRyeUV2ZW50cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heFJldHJpZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFJldHJpZXMgPSB0aGlzLl9tYXhSZXRyaWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGNwUmV0cnlFdmVudHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRjcFJldHJ5RXZlbnRzID0gdGhpcy5fdGNwUmV0cnlFdmVudHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZXJSZXRyeVRpbWVvdXQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBlclJldHJ5VGltZW91dCA9IHRoaXMuX3BlclJldHJ5VGltZW91dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dycGNSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2h0dHBSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFJldHJpZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90Y3BSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlclJldHJ5VGltZW91dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ncnBjUmV0cnlFdmVudHMgPSB2YWx1ZS5ncnBjUmV0cnlFdmVudHM7XG4gICAgICB0aGlzLl9odHRwUmV0cnlFdmVudHMgPSB2YWx1ZS5odHRwUmV0cnlFdmVudHM7XG4gICAgICB0aGlzLl9tYXhSZXRyaWVzID0gdmFsdWUubWF4UmV0cmllcztcbiAgICAgIHRoaXMuX3RjcFJldHJ5RXZlbnRzID0gdmFsdWUudGNwUmV0cnlFdmVudHM7XG4gICAgICB0aGlzLl9wZXJSZXRyeVRpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnBlclJldHJ5VGltZW91dDtcbiAgICB9XG4gIH1cblxuICAvLyBncnBjX3JldHJ5X2V2ZW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncnBjUmV0cnlFdmVudHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZ3JwY1JldHJ5RXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2dycGNfcmV0cnlfZXZlbnRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBncnBjUmV0cnlFdmVudHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZ3JwY1JldHJ5RXZlbnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R3JwY1JldHJ5RXZlbnRzKCkge1xuICAgIHRoaXMuX2dycGNSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3JwY1JldHJ5RXZlbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGNSZXRyeUV2ZW50cztcbiAgfVxuXG4gIC8vIGh0dHBfcmV0cnlfZXZlbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2h0dHBSZXRyeUV2ZW50cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBodHRwUmV0cnlFdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaHR0cF9yZXRyeV9ldmVudHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBSZXRyeUV2ZW50cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9odHRwUmV0cnlFdmVudHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwUmV0cnlFdmVudHMoKSB7XG4gICAgdGhpcy5faHR0cFJldHJ5RXZlbnRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwUmV0cnlFdmVudHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cFJldHJ5RXZlbnRzO1xuICB9XG5cbiAgLy8gbWF4X3JldHJpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4UmV0cmllcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4UmV0cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9yZXRyaWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhSZXRyaWVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhSZXRyaWVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFJldHJpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UmV0cmllcztcbiAgfVxuXG4gIC8vIHRjcF9yZXRyeV9ldmVudHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGNwUmV0cnlFdmVudHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdGNwUmV0cnlFdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndGNwX3JldHJ5X2V2ZW50cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGNwUmV0cnlFdmVudHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGNwUmV0cnlFdmVudHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUY3BSZXRyeUV2ZW50cygpIHtcbiAgICB0aGlzLl90Y3BSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGNwUmV0cnlFdmVudHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGNwUmV0cnlFdmVudHM7XG4gIH1cblxuICAvLyBwZXJfcmV0cnlfdGltZW91dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wZXJSZXRyeVRpbWVvdXQgPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInBlcl9yZXRyeV90aW1lb3V0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHBlclJldHJ5VGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyUmV0cnlUaW1lb3V0O1xuICB9XG4gIHB1YmxpYyBwdXRQZXJSZXRyeVRpbWVvdXQodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dCkge1xuICAgIHRoaXMuX3BlclJldHJ5VGltZW91dC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlclJldHJ5VGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJSZXRyeVRpbWVvdXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRpbWVvdXRJZGxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0SWRsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0SWRsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dFBlclJlcXVlc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dFBlclJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dFBlclJlcXVlc3RPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dFBlclJlcXVlc3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0UGVyUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0UGVyUmVxdWVzdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGxlPzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRpbWVvdXRJZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyUmVxdWVzdD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0UGVyUmVxdWVzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRpbWVvdXRPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlkbGU6IGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0SWRsZVRvVGVycmFmb3JtKHN0cnVjdCEuaWRsZSksXG4gICAgcGVyX3JlcXVlc3Q6IGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0UGVyUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdCEucGVyUmVxdWVzdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pZGxlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pZGxlID0gdGhpcy5faWRsZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlclJlcXVlc3Q/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBlclJlcXVlc3QgPSB0aGlzLl9wZXJSZXF1ZXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRpbWVvdXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wZXJSZXF1ZXN0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmlkbGU7XG4gICAgICB0aGlzLl9wZXJSZXF1ZXN0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5wZXJSZXF1ZXN0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGlkbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWRsZSA9IG5ldyBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaWRsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpZGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9pZGxlO1xuICB9XG4gIHB1YmxpYyBwdXRJZGxlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGUpIHtcbiAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZGxlKCkge1xuICAgIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZGxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwZXJfcmVxdWVzdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZXJSZXF1ZXN0ID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0UGVyUmVxdWVzdE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwZXJfcmVxdWVzdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwZXJSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJSZXF1ZXN0O1xuICB9XG4gIHB1YmxpYyBwdXRQZXJSZXF1ZXN0KHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dFBlclJlcXVlc3QpIHtcbiAgICB0aGlzLl9wZXJSZXF1ZXN0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQZXJSZXF1ZXN0KCkge1xuICAgIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGVyUmVxdWVzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJSZXF1ZXN0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb246IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVBY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXRjaD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJldHJ5UG9saWN5PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVJldHJ5UG9saWN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb24pLFxuICAgIG1hdGNoOiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hdGNoKSxcbiAgICByZXRyeV9wb2xpY3k6IGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeVRvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlQb2xpY3kpLFxuICAgIHRpbWVvdXQ6IGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvbiA9IHRoaXMuX2FjdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hdGNoPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXRjaCA9IHRoaXMuX21hdGNoPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmV0cnlQb2xpY3k/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJldHJ5UG9saWN5ID0gdGhpcy5fcmV0cnlQb2xpY3k/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0ID0gdGhpcy5fdGltZW91dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXRyeVBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGltZW91dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjdGlvbjtcbiAgICAgIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tYXRjaDtcbiAgICAgIHRoaXMuX3JldHJ5UG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZXRyeVBvbGljeTtcbiAgICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRpbWVvdXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjdGlvbiA9IG5ldyBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFjdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QWN0aW9uKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uKSB7XG4gICAgdGhpcy5fYWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF0Y2ggPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm1hdGNoXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1hdGNoKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaDtcbiAgfVxuICBwdWJsaWMgcHV0TWF0Y2godmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaCkge1xuICAgIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXRjaCgpIHtcbiAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXRjaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmV0cnlfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldHJ5UG9saWN5ID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyZXRyeV9wb2xpY3lcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmV0cnlQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5UG9saWN5O1xuICB9XG4gIHB1YmxpYyBwdXRSZXRyeVBvbGljeSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVJldHJ5UG9saWN5KSB7XG4gICAgdGhpcy5fcmV0cnlQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJldHJ5UG9saWN5KCkge1xuICAgIHRoaXMuX3JldHJ5UG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldHJ5UG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5UG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXQgPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRpbWVvdXRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0KHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dCkge1xuICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXQoKSB7XG4gICAgdGhpcy5fdGltZW91dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5vZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZpcnR1YWxfbm9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTm9kZSksXG4gICAgd2VpZ2h0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZFRhcmdldDogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2VpZ2h0ZWRfdGFyZ2V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRUb1RlcnJhZm9ybSkoc3RydWN0IS53ZWlnaHRlZFRhcmdldCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl93ZWlnaHRlZFRhcmdldCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud2VpZ2h0ZWRUYXJnZXQgPSB0aGlzLl93ZWlnaHRlZFRhcmdldDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fd2VpZ2h0ZWRUYXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3dlaWdodGVkVGFyZ2V0ID0gdmFsdWUud2VpZ2h0ZWRUYXJnZXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gd2VpZ2h0ZWRfdGFyZ2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3dlaWdodGVkVGFyZ2V0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdOyBcbiAgcHVibGljIGdldCB3ZWlnaHRlZFRhcmdldCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd2VpZ2h0ZWRfdGFyZ2V0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgd2VpZ2h0ZWRUYXJnZXQodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRbXSkge1xuICAgIHRoaXMuX3dlaWdodGVkVGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlaWdodGVkVGFyZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlaWdodGVkVGFyZ2V0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZCksXG4gICAgc3RhcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5kKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmQgPSB0aGlzLl9lbmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGFydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhcnQgPSB0aGlzLl9zdGFydDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuZCA9IHZhbHVlLmVuZDtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWUuc3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuZD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2VuZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kO1xuICB9XG5cbiAgLy8gc3RhcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3RhcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhhY3Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZ2V4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWZmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByYW5nZT86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXhhY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhhY3QpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHJlZ2V4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZ2V4KSxcbiAgICBzdWZmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VmZml4KSxcbiAgICByYW5nZTogYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnJhbmdlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJNYXRjaCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZXhhY3QpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmV4YWN0ID0gdGhpcy5fZXhhY3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWZpeCA9IHRoaXMuX3ByZWZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlZ2V4KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWdleCA9IHRoaXMuX3JlZ2V4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VmZml4KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWZmaXggPSB0aGlzLl9zdWZmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yYW5nZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmFuZ2UgPSB0aGlzLl9yYW5nZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJNYXRjaCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2V4YWN0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVnZXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWZmaXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yYW5nZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9leGFjdCA9IHZhbHVlLmV4YWN0O1xuICAgICAgdGhpcy5fcHJlZml4ID0gdmFsdWUucHJlZml4O1xuICAgICAgdGhpcy5fcmVnZXggPSB2YWx1ZS5yZWdleDtcbiAgICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlLnN1ZmZpeDtcbiAgICAgIHRoaXMuX3JhbmdlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5yYW5nZTtcbiAgICB9XG4gIH1cblxuICAvLyBleGFjdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGFjdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhhY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGFjdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhhY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4YWN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhhY3QoKSB7XG4gICAgdGhpcy5fZXhhY3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4YWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4YWN0O1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZpeCgpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICAvLyByZWdleCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWdleD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVnZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdleCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVnZXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZ2V4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVnZXgoKSB7XG4gICAgdGhpcy5fcmVnZXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZ2V4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2V4O1xuICB9XG5cbiAgLy8gc3VmZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1ZmZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VmZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VmZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1ZmZpeCgpIHtcbiAgICB0aGlzLl9zdWZmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1ZmZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWZmaXg7XG4gIH1cblxuICAvLyByYW5nZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yYW5nZSA9IG5ldyBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyYW5nZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XG4gIH1cbiAgcHVibGljIHB1dFJhbmdlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZSkge1xuICAgIHRoaXMuX3JhbmdlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSYW5nZSgpIHtcbiAgICB0aGlzLl9yYW5nZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByYW5nZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yYW5nZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnZlcnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGludmVydDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW52ZXJ0KSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIG1hdGNoOiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRob2Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFkZXI/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0aG9kKSxcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICBzY2hlbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NoZW1lKSxcbiAgICBoZWFkZXI6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlclRvVGVycmFmb3JtKShzdHJ1Y3QhLmhlYWRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWV0aG9kKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRob2QgPSB0aGlzLl9tZXRob2Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWZpeCA9IHRoaXMuX3ByZWZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NjaGVtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NoZW1lID0gdGhpcy5fc2NoZW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5faGVhZGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFkZXIgPSB0aGlzLl9oZWFkZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWV0aG9kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NoZW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVhZGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tZXRob2QgPSB2YWx1ZS5tZXRob2Q7XG4gICAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZS5wcmVmaXg7XG4gICAgICB0aGlzLl9zY2hlbWUgPSB2YWx1ZS5zY2hlbWU7XG4gICAgICB0aGlzLl9oZWFkZXIgPSB2YWx1ZS5oZWFkZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gbWV0aG9kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldGhvZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0aG9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0aG9kJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRob2QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21ldGhvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldGhvZCgpIHtcbiAgICB0aGlzLl9tZXRob2QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGhvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRob2Q7XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICAvLyBzY2hlbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzY2hlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY2hlbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjaGVtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NoZW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NoZW1lKCkge1xuICAgIHRoaXMuX3NjaGVtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtZTtcbiAgfVxuXG4gIC8vIGhlYWRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFkZXI/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyW107IFxuICBwdWJsaWMgZ2V0IGhlYWRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaGVhZGVyJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhZGVyKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyW10pIHtcbiAgICB0aGlzLl9oZWFkZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFkZXIoKSB7XG4gICAgdGhpcy5faGVhZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFkZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBSZXRyeUV2ZW50cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4UmV0cmllczogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRjcFJldHJ5RXZlbnRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwZXJSZXRyeVRpbWVvdXQ6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBodHRwX3JldHJ5X2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5odHRwUmV0cnlFdmVudHMpLFxuICAgIG1heF9yZXRyaWVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFJldHJpZXMpLFxuICAgIHRjcF9yZXRyeV9ldmVudHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGNwUmV0cnlFdmVudHMpLFxuICAgIHBlcl9yZXRyeV90aW1lb3V0OiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0IS5wZXJSZXRyeVRpbWVvdXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2h0dHBSZXRyeUV2ZW50cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cFJldHJ5RXZlbnRzID0gdGhpcy5faHR0cFJldHJ5RXZlbnRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4UmV0cmllcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4UmV0cmllcyA9IHRoaXMuX21heFJldHJpZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl90Y3BSZXRyeUV2ZW50cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGNwUmV0cnlFdmVudHMgPSB0aGlzLl90Y3BSZXRyeUV2ZW50cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlclJldHJ5VGltZW91dD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGVyUmV0cnlUaW1lb3V0ID0gdGhpcy5fcGVyUmV0cnlUaW1lb3V0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2h0dHBSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFJldHJpZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90Y3BSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlclJldHJ5VGltZW91dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9odHRwUmV0cnlFdmVudHMgPSB2YWx1ZS5odHRwUmV0cnlFdmVudHM7XG4gICAgICB0aGlzLl9tYXhSZXRyaWVzID0gdmFsdWUubWF4UmV0cmllcztcbiAgICAgIHRoaXMuX3RjcFJldHJ5RXZlbnRzID0gdmFsdWUudGNwUmV0cnlFdmVudHM7XG4gICAgICB0aGlzLl9wZXJSZXRyeVRpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnBlclJldHJ5VGltZW91dDtcbiAgICB9XG4gIH1cblxuICAvLyBodHRwX3JldHJ5X2V2ZW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwUmV0cnlFdmVudHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaHR0cFJldHJ5RXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2h0dHBfcmV0cnlfZXZlbnRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwUmV0cnlFdmVudHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faHR0cFJldHJ5RXZlbnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFJldHJ5RXZlbnRzKCkge1xuICAgIHRoaXMuX2h0dHBSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cFJldHJ5RXZlbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBSZXRyeUV2ZW50cztcbiAgfVxuXG4gIC8vIG1heF9yZXRyaWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heFJldHJpZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFJldHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcmV0cmllcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4UmV0cmllcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4UmV0cmllcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhSZXRyaWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFJldHJpZXM7XG4gIH1cblxuICAvLyB0Y3BfcmV0cnlfZXZlbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RjcFJldHJ5RXZlbnRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRjcFJldHJ5RXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RjcF9yZXRyeV9ldmVudHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRjcFJldHJ5RXZlbnRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RjcFJldHJ5RXZlbnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGNwUmV0cnlFdmVudHMoKSB7XG4gICAgdGhpcy5fdGNwUmV0cnlFdmVudHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRjcFJldHJ5RXZlbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RjcFJldHJ5RXZlbnRzO1xuICB9XG5cbiAgLy8gcGVyX3JldHJ5X3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcGVyUmV0cnlUaW1lb3V0ID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicGVyX3JldHJ5X3RpbWVvdXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGVyUmV0cnlUaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJSZXRyeVRpbWVvdXQ7XG4gIH1cbiAgcHVibGljIHB1dFBlclJldHJ5VGltZW91dCh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dCkge1xuICAgIHRoaXMuX3BlclJldHJ5VGltZW91dC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlclJldHJ5VGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJSZXRyeVRpbWVvdXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRJZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0SWRsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dElkbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRJZGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dElkbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0SWRsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dElkbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0UGVyUmVxdWVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFBlclJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0UGVyUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFBlclJlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGxlPzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0SWRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlclJlcXVlc3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaWRsZTogYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0SWRsZVRvVGVycmFmb3JtKHN0cnVjdCEuaWRsZSksXG4gICAgcGVyX3JlcXVlc3Q6IGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFBlclJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnBlclJlcXVlc3QpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pZGxlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pZGxlID0gdGhpcy5faWRsZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlclJlcXVlc3Q/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBlclJlcXVlc3QgPSB0aGlzLl9wZXJSZXF1ZXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pZGxlO1xuICAgICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGVyUmVxdWVzdDtcbiAgICB9XG4gIH1cblxuICAvLyBpZGxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkbGUgPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0SWRsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpZGxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlkbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkbGU7XG4gIH1cbiAgcHVibGljIHB1dElkbGUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dElkbGUpIHtcbiAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZGxlKCkge1xuICAgIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZGxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwZXJfcmVxdWVzdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZXJSZXF1ZXN0ID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFBlclJlcXVlc3RPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicGVyX3JlcXVlc3RcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGVyUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyUmVxdWVzdDtcbiAgfVxuICBwdWJsaWMgcHV0UGVyUmVxdWVzdCh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0UGVyUmVxdWVzdCkge1xuICAgIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlclJlcXVlc3QoKSB7XG4gICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZXJSZXF1ZXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb246IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRyeVBvbGljeT86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uKSxcbiAgICBtYXRjaDogYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaFRvVGVycmFmb3JtKHN0cnVjdCEubWF0Y2gpLFxuICAgIHJldHJ5X3BvbGljeTogYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeVRvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlQb2xpY3kpLFxuICAgIHRpbWVvdXQ6IGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvbiA9IHRoaXMuX2FjdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hdGNoPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXRjaCA9IHRoaXMuX21hdGNoPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmV0cnlQb2xpY3k/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJldHJ5UG9saWN5ID0gdGhpcy5fcmV0cnlQb2xpY3k/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0ID0gdGhpcy5fdGltZW91dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmV0cnlQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hY3Rpb247XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWF0Y2g7XG4gICAgICB0aGlzLl9yZXRyeVBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmV0cnlQb2xpY3k7XG4gICAgICB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWUgPSB2YWx1ZS50aW1lb3V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY3Rpb24gPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVBY3Rpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWN0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBY3Rpb24odmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uKSB7XG4gICAgdGhpcy5fYWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF0Y2ggPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtYXRjaFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2g7XG4gIH1cbiAgcHVibGljIHB1dE1hdGNoKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoKSB7XG4gICAgdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXRjaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmV0cnlfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldHJ5UG9saWN5ID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmV0cnlfcG9saWN5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHJldHJ5UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRyeVBvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0UmV0cnlQb2xpY3kodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3kpIHtcbiAgICB0aGlzLl9yZXRyeVBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV0cnlQb2xpY3koKSB7XG4gICAgdGhpcy5fcmV0cnlQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmV0cnlQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0cnlQb2xpY3kuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dCA9IG5ldyBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0KHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXQpIHtcbiAgICB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0KCkge1xuICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5vZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsX25vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5vZGUpLFxuICAgIHdlaWdodDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZFRhcmdldDogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3ZWlnaHRlZF90YXJnZXQ6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0VG9UZXJyYWZvcm0pKHN0cnVjdCEud2VpZ2h0ZWRUYXJnZXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVBY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3dlaWdodGVkVGFyZ2V0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC53ZWlnaHRlZFRhcmdldCA9IHRoaXMuX3dlaWdodGVkVGFyZ2V0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3dlaWdodGVkVGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl93ZWlnaHRlZFRhcmdldCA9IHZhbHVlLndlaWdodGVkVGFyZ2V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdlaWdodGVkX3RhcmdldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF93ZWlnaHRlZFRhcmdldD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdOyBcbiAgcHVibGljIGdldCB3ZWlnaHRlZFRhcmdldCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd2VpZ2h0ZWRfdGFyZ2V0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgd2VpZ2h0ZWRUYXJnZXQodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdKSB7XG4gICAgdGhpcy5fd2VpZ2h0ZWRUYXJnZXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2VpZ2h0ZWRUYXJnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2VpZ2h0ZWRUYXJnZXQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlck1hdGNoUmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5lbmQpLFxuICAgIHN0YXJ0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuZCA9IHRoaXMuX2VuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXJ0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGFydCA9IHRoaXMuX3N0YXJ0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmQgPSB2YWx1ZS5lbmQ7XG4gICAgICB0aGlzLl9zdGFydCA9IHZhbHVlLnN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2VuZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lbmQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZDtcbiAgfVxuXG4gIC8vIHN0YXJ0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXJ0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3N0YXJ0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGFydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RhcnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhhY3Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZ2V4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWZmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByYW5nZT86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlck1hdGNoUmFuZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlck1hdGNoT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleGFjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leGFjdCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcmVnZXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnZXgpLFxuICAgIHN1ZmZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWZmaXgpLFxuICAgIHJhbmdlOiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5yYW5nZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlck1hdGNoT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlck1hdGNoIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9leGFjdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhhY3QgPSB0aGlzLl9leGFjdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWZpeCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVnZXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZ2V4ID0gdGhpcy5fcmVnZXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1ZmZpeCA9IHRoaXMuX3N1ZmZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JhbmdlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yYW5nZSA9IHRoaXMuX3JhbmdlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2ggfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9leGFjdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VmZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmFuZ2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXhhY3QgPSB2YWx1ZS5leGFjdDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlLnByZWZpeDtcbiAgICAgIHRoaXMuX3JlZ2V4ID0gdmFsdWUucmVnZXg7XG4gICAgICB0aGlzLl9zdWZmaXggPSB2YWx1ZS5zdWZmaXg7XG4gICAgICB0aGlzLl9yYW5nZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmFuZ2U7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhhY3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhhY3Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4YWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhhY3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4YWN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leGFjdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4YWN0KCkge1xuICAgIHRoaXMuX2V4YWN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGFjdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGFjdDtcbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmaXgoKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB9XG5cbiAgLy8gcmVnZXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVnZXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlZ2V4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnZXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZ2V4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWdleCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZ2V4KCkge1xuICAgIHRoaXMuX3JlZ2V4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWdleElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdleDtcbiAgfVxuXG4gIC8vIHN1ZmZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWZmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN1ZmZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1ZmZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWZmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWZmaXgoKSB7XG4gICAgdGhpcy5fc3VmZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWZmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VmZml4O1xuICB9XG5cbiAgLy8gcmFuZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmFuZ2UgPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyYW5nZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XG4gIH1cbiAgcHVibGljIHB1dFJhbmdlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlKSB7XG4gICAgdGhpcy5fcmFuZ2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJhbmdlKCkge1xuICAgIHRoaXMuX3JhbmdlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJhbmdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW52ZXJ0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hdGNoPzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnZlcnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmludmVydCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBtYXRjaDogYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldGhvZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZml4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWRlcj86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlcltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldGhvZCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgc2NoZW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVtZSksXG4gICAgaGVhZGVyOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlclRvVGVycmFmb3JtKShzdHJ1Y3QhLmhlYWRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2ggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21ldGhvZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWV0aG9kID0gdGhpcy5fbWV0aG9kO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVmaXggPSB0aGlzLl9wcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2hlbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjaGVtZSA9IHRoaXMuX3NjaGVtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hlYWRlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhZGVyID0gdGhpcy5faGVhZGVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWV0aG9kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NoZW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVhZGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tZXRob2QgPSB2YWx1ZS5tZXRob2Q7XG4gICAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZS5wcmVmaXg7XG4gICAgICB0aGlzLl9zY2hlbWUgPSB2YWx1ZS5zY2hlbWU7XG4gICAgICB0aGlzLl9oZWFkZXIgPSB2YWx1ZS5oZWFkZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gbWV0aG9kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldGhvZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0aG9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0aG9kJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRob2QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21ldGhvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldGhvZCgpIHtcbiAgICB0aGlzLl9tZXRob2QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGhvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRob2Q7XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICAvLyBzY2hlbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzY2hlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY2hlbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjaGVtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NoZW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NoZW1lKCkge1xuICAgIHRoaXMuX3NjaGVtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtZTtcbiAgfVxuXG4gIC8vIGhlYWRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFkZXI/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJbXTsgXG4gIHB1YmxpYyBnZXQgaGVhZGVyKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFkZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFkZXIodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlcltdKSB7XG4gICAgdGhpcy5faGVhZGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhZGVyKCkge1xuICAgIHRoaXMuX2hlYWRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cFJldHJ5RXZlbnRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhSZXRyaWVzOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGNwUmV0cnlFdmVudHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlclJldHJ5VGltZW91dDogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaHR0cF9yZXRyeV9ldmVudHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaHR0cFJldHJ5RXZlbnRzKSxcbiAgICBtYXhfcmV0cmllczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhSZXRyaWVzKSxcbiAgICB0Y3BfcmV0cnlfZXZlbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRjcFJldHJ5RXZlbnRzKSxcbiAgICBwZXJfcmV0cnlfdGltZW91dDogYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0IS5wZXJSZXRyeVRpbWVvdXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9odHRwUmV0cnlFdmVudHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmh0dHBSZXRyeUV2ZW50cyA9IHRoaXMuX2h0dHBSZXRyeUV2ZW50cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heFJldHJpZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFJldHJpZXMgPSB0aGlzLl9tYXhSZXRyaWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGNwUmV0cnlFdmVudHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRjcFJldHJ5RXZlbnRzID0gdGhpcy5fdGNwUmV0cnlFdmVudHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZXJSZXRyeVRpbWVvdXQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBlclJldHJ5VGltZW91dCA9IHRoaXMuX3BlclJldHJ5VGltZW91dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2h0dHBSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFJldHJpZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90Y3BSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlclJldHJ5VGltZW91dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9odHRwUmV0cnlFdmVudHMgPSB2YWx1ZS5odHRwUmV0cnlFdmVudHM7XG4gICAgICB0aGlzLl9tYXhSZXRyaWVzID0gdmFsdWUubWF4UmV0cmllcztcbiAgICAgIHRoaXMuX3RjcFJldHJ5RXZlbnRzID0gdmFsdWUudGNwUmV0cnlFdmVudHM7XG4gICAgICB0aGlzLl9wZXJSZXRyeVRpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnBlclJldHJ5VGltZW91dDtcbiAgICB9XG4gIH1cblxuICAvLyBodHRwX3JldHJ5X2V2ZW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwUmV0cnlFdmVudHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaHR0cFJldHJ5RXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2h0dHBfcmV0cnlfZXZlbnRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwUmV0cnlFdmVudHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faHR0cFJldHJ5RXZlbnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFJldHJ5RXZlbnRzKCkge1xuICAgIHRoaXMuX2h0dHBSZXRyeUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cFJldHJ5RXZlbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBSZXRyeUV2ZW50cztcbiAgfVxuXG4gIC8vIG1heF9yZXRyaWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heFJldHJpZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFJldHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcmV0cmllcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4UmV0cmllcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4UmV0cmllcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhSZXRyaWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFJldHJpZXM7XG4gIH1cblxuICAvLyB0Y3BfcmV0cnlfZXZlbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RjcFJldHJ5RXZlbnRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRjcFJldHJ5RXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RjcF9yZXRyeV9ldmVudHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRjcFJldHJ5RXZlbnRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RjcFJldHJ5RXZlbnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGNwUmV0cnlFdmVudHMoKSB7XG4gICAgdGhpcy5fdGNwUmV0cnlFdmVudHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRjcFJldHJ5RXZlbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RjcFJldHJ5RXZlbnRzO1xuICB9XG5cbiAgLy8gcGVyX3JldHJ5X3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcGVyUmV0cnlUaW1lb3V0ID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwZXJfcmV0cnlfdGltZW91dFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwZXJSZXRyeVRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlclJldHJ5VGltZW91dDtcbiAgfVxuICBwdWJsaWMgcHV0UGVyUmV0cnlUaW1lb3V0KHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQpIHtcbiAgICB0aGlzLl9wZXJSZXRyeVRpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZXJSZXRyeVRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyUmV0cnlUaW1lb3V0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRJZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRJZGxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRJZGxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRJZGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0SWRsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dElkbGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dElkbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0UGVyUmVxdWVzdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFBlclJlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFBlclJlcXVlc3QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWRsZT86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0SWRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlclJlcXVlc3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFBlclJlcXVlc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpZGxlOiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dElkbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkbGUpLFxuICAgIHBlcl9yZXF1ZXN0OiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFBlclJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnBlclJlcXVlc3QpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faWRsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWRsZSA9IHRoaXMuX2lkbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZXJSZXF1ZXN0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wZXJSZXF1ZXN0ID0gdGhpcy5fcGVyUmVxdWVzdD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pZGxlO1xuICAgICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGVyUmVxdWVzdDtcbiAgICB9XG4gIH1cblxuICAvLyBpZGxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkbGUgPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRJZGxlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImlkbGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaWRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRsZTtcbiAgfVxuICBwdWJsaWMgcHV0SWRsZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRJZGxlKSB7XG4gICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWRsZSgpIHtcbiAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcGVyX3JlcXVlc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGVyUmVxdWVzdCA9IG5ldyBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFBlclJlcXVlc3RPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicGVyX3JlcXVlc3RcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGVyUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyUmVxdWVzdDtcbiAgfVxuICBwdWJsaWMgcHV0UGVyUmVxdWVzdCh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0KSB7XG4gICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVyUmVxdWVzdCgpIHtcbiAgICB0aGlzLl9wZXJSZXF1ZXN0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlclJlcXVlc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJldHJ5UG9saWN5PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb24pLFxuICAgIG1hdGNoOiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hdGNoKSxcbiAgICByZXRyeV9wb2xpY3k6IGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeVRvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlQb2xpY3kpLFxuICAgIHRpbWVvdXQ6IGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvbiA9IHRoaXMuX2FjdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hdGNoPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXRjaCA9IHRoaXMuX21hdGNoPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmV0cnlQb2xpY3k/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJldHJ5UG9saWN5ID0gdGhpcy5fcmV0cnlQb2xpY3k/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0ID0gdGhpcy5fdGltZW91dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXRyeVBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGltZW91dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjdGlvbjtcbiAgICAgIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tYXRjaDtcbiAgICAgIHRoaXMuX3JldHJ5UG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZXRyeVBvbGljeTtcbiAgICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRpbWVvdXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjdGlvbiA9IG5ldyBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFjdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QWN0aW9uKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uKSB7XG4gICAgdGhpcy5fYWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF0Y2ggPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm1hdGNoXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1hdGNoKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaDtcbiAgfVxuICBwdWJsaWMgcHV0TWF0Y2godmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaCkge1xuICAgIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF0Y2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJldHJ5X3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXRyeVBvbGljeSA9IG5ldyBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmV0cnlfcG9saWN5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHJldHJ5UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRyeVBvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0UmV0cnlQb2xpY3kodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeSkge1xuICAgIHRoaXMuX3JldHJ5UG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXRyeVBvbGljeSgpIHtcbiAgICB0aGlzLl9yZXRyeVBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXRyeVBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRyeVBvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0ID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRpbWVvdXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dCh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXQpIHtcbiAgICB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0KCkge1xuICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXJ0dWFsTm9kZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsX25vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5vZGUpLFxuICAgIHdlaWdodDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdlaWdodGVkVGFyZ2V0OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2VpZ2h0ZWRfdGFyZ2V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0VG9UZXJyYWZvcm0pKHN0cnVjdCEud2VpZ2h0ZWRUYXJnZXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl93ZWlnaHRlZFRhcmdldCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud2VpZ2h0ZWRUYXJnZXQgPSB0aGlzLl93ZWlnaHRlZFRhcmdldDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZUFjdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3dlaWdodGVkVGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl93ZWlnaHRlZFRhcmdldCA9IHZhbHVlLndlaWdodGVkVGFyZ2V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIHdlaWdodGVkX3RhcmdldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF93ZWlnaHRlZFRhcmdldD86IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0W107IFxuICBwdWJsaWMgZ2V0IHdlaWdodGVkVGFyZ2V0KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd3ZWlnaHRlZF90YXJnZXQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWlnaHRlZFRhcmdldCh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRbXSkge1xuICAgIHRoaXMuX3dlaWdodGVkVGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlaWdodGVkVGFyZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlaWdodGVkVGFyZ2V0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRJZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dElkbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0SWRsZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRJZGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRJZGxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRJZGxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dElkbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGxlPzogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dElkbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpZGxlOiBhcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0SWRsZVRvVGVycmFmb3JtKHN0cnVjdCEuaWRsZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faWRsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWRsZSA9IHRoaXMuX2lkbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pZGxlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlkbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWRsZSA9IG5ldyBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0SWRsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpZGxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlkbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkbGU7XG4gIH1cbiAgcHVibGljIHB1dElkbGUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRJZGxlKSB7XG4gICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWRsZSgpIHtcbiAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb246IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZUFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXQ/OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBhcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbiksXG4gICAgdGltZW91dDogYXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dFRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWN0aW9uID0gdGhpcy5fYWN0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZW91dD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGltZW91dCA9IHRoaXMuX3RpbWVvdXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hY3Rpb247XG4gICAgICB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWUgPSB2YWx1ZS50aW1lb3V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY3Rpb24gPSBuZXcgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFjdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QWN0aW9uKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb24pIHtcbiAgICB0aGlzLl9hY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXQgPSBuZXcgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXQodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXQpIHtcbiAgICB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0KCkge1xuICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlYyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmlvcml0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdycGNSb3V0ZT86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwMlJvdXRlPzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwUm91dGU/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGNwUm91dGU/OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hSb3V0ZVNwZWMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcmlvcml0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gICAgZ3JwY19yb3V0ZTogYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdCEuZ3JwY1JvdXRlKSxcbiAgICBodHRwMl9yb3V0ZTogYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHAyUm91dGUpLFxuICAgIGh0dHBfcm91dGU6IGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBSb3V0ZSksXG4gICAgdGNwX3JvdXRlOiBhcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnRjcFJvdXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFJvdXRlU3BlY091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoUm91dGVTcGVjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmlvcml0eSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJpb3JpdHkgPSB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2dycGNSb3V0ZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ3JwY1JvdXRlID0gdGhpcy5fZ3JwY1JvdXRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faHR0cDJSb3V0ZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cDJSb3V0ZSA9IHRoaXMuX2h0dHAyUm91dGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwUm91dGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmh0dHBSb3V0ZSA9IHRoaXMuX2h0dHBSb3V0ZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RjcFJvdXRlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50Y3BSb3V0ZSA9IHRoaXMuX3RjcFJvdXRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZ3JwY1JvdXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwMlJvdXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwUm91dGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RjcFJvdXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWUucHJpb3JpdHk7XG4gICAgICB0aGlzLl9ncnBjUm91dGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmdycGNSb3V0ZTtcbiAgICAgIHRoaXMuX2h0dHAyUm91dGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmh0dHAyUm91dGU7XG4gICAgICB0aGlzLl9odHRwUm91dGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmh0dHBSb3V0ZTtcbiAgICAgIHRoaXMuX3RjcFJvdXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS50Y3BSb3V0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmlvcml0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwcmlvcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpb3JpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpb3JpdHkoKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaW9yaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgLy8gZ3JwY19yb3V0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncnBjUm91dGUgPSBuZXcgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJncnBjX3JvdXRlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGdycGNSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JwY1JvdXRlO1xuICB9XG4gIHB1YmxpYyBwdXRHcnBjUm91dGUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGUpIHtcbiAgICB0aGlzLl9ncnBjUm91dGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdycGNSb3V0ZSgpIHtcbiAgICB0aGlzLl9ncnBjUm91dGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3JwY1JvdXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGNSb3V0ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaHR0cDJfcm91dGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cDJSb3V0ZSA9IG5ldyBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJodHRwMl9yb3V0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBodHRwMlJvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwMlJvdXRlO1xuICB9XG4gIHB1YmxpYyBwdXRIdHRwMlJvdXRlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZSkge1xuICAgIHRoaXMuX2h0dHAyUm91dGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHAyUm91dGUoKSB7XG4gICAgdGhpcy5faHR0cDJSb3V0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwMlJvdXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAyUm91dGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGh0dHBfcm91dGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cFJvdXRlID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHR0cF9yb3V0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBodHRwUm91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBSb3V0ZTtcbiAgfVxuICBwdWJsaWMgcHV0SHR0cFJvdXRlKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlKSB7XG4gICAgdGhpcy5faHR0cFJvdXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwUm91dGUoKSB7XG4gICAgdGhpcy5faHR0cFJvdXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh0dHBSb3V0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwUm91dGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRjcF9yb3V0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90Y3BSb3V0ZSA9IG5ldyBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGNwX3JvdXRlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRjcFJvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLl90Y3BSb3V0ZTtcbiAgfVxuICBwdWJsaWMgcHV0VGNwUm91dGUodmFsdWU6IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZSkge1xuICAgIHRoaXMuX3RjcFJvdXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUY3BSb3V0ZSgpIHtcbiAgICB0aGlzLl90Y3BSb3V0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0Y3BSb3V0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90Y3BSb3V0ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcHBtZXNoUm91dGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXBwbWVzaF9yb3V0ZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBwbWVzaFJvdXRlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBwbWVzaF9yb3V0ZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9tZXNoTmFtZSA9IGNvbmZpZy5tZXNoTmFtZTtcbiAgICB0aGlzLl9tZXNoT3duZXIgPSBjb25maWcubWVzaE93bmVyO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lID0gY29uZmlnLnZpcnR1YWxSb3V0ZXJOYW1lO1xuICAgIHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zcGVjO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfZGF0ZScpO1xuICB9XG5cbiAgLy8gbWVzaF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc2hOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXNoTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc2hfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzaE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc2hOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc2hOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc2hOYW1lO1xuICB9XG5cbiAgLy8gbWVzaF9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc2hPd25lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzaE93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzaF9vd25lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzaE93bmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNoT3duZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXNoT3duZXIoKSB7XG4gICAgdGhpcy5fbWVzaE93bmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNoT3duZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzaE93bmVyO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlT3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9vd25lcicpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHZpcnR1YWxfcm91dGVyX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmlydHVhbFJvdXRlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZpcnR1YWxSb3V0ZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlydHVhbF9yb3V0ZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlydHVhbFJvdXRlck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpcnR1YWxSb3V0ZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lO1xuICB9XG5cbiAgLy8gc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zcGVjID0gbmV3IEFwcG1lc2hSb3V0ZVNwZWNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3BlY1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzcGVjKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVjO1xuICB9XG4gIHB1YmxpYyBwdXRTcGVjKHZhbHVlOiBBcHBtZXNoUm91dGVTcGVjKSB7XG4gICAgdGhpcy5fc3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNoX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21lc2hOYW1lKSxcbiAgICAgIG1lc2hfb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21lc2hPd25lciksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdmlydHVhbF9yb3V0ZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmlydHVhbFJvdXRlck5hbWUpLFxuICAgICAgc3BlYzogYXBwbWVzaFJvdXRlU3BlY1RvVGVycmFmb3JtKHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19