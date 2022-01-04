"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoscalingPolicy = exports.AutoscalingPolicyTargetTrackingConfigurationOutputReference = exports.autoscalingPolicyTargetTrackingConfigurationToTerraform = exports.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference = exports.autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform = exports.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference = exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform = exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform = exports.autoscalingPolicyStepAdjustmentToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    /**
     * @stability stable
     */
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    /**
     * @stability stable
     */
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    /**
     * @stability stable
     */
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    /**
     * @stability stable
     */
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference[_a] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    /**
     * @stability stable
     */
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    /**
     * @stability stable
     */
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    /**
     * @stability stable
     */
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    /**
     * @stability stable
     */
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference[_b] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference", version: "3.0.1" };
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    /**
     * @stability stable
     */
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    /**
     * @stability stable
     */
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    /**
     * @stability stable
     */
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    /**
     * @stability stable
     */
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference[_c] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        target_value: cdktf.numberToTerraform(struct.targetValue),
        predefined_load_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct.predefinedLoadMetricSpecification),
        predefined_metric_pair_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct.predefinedMetricPairSpecification),
        predefined_scaling_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct.predefinedScalingMetricSpecification),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // predefined_load_metric_specification - computed: false, optional: true, required: false
        this._predefinedLoadMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification", true);
        // predefined_metric_pair_specification - computed: false, optional: true, required: false
        this._predefinedMetricPairSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference(this, "predefined_metric_pair_specification", true);
        // predefined_scaling_metric_specification - computed: false, optional: true, required: false
        this._predefinedScalingMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l, _m, _o, _p, _q;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._targetValue) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        if ((_k = this._predefinedLoadMetricSpecification) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricSpecification = (_l = this._predefinedLoadMetricSpecification) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        if ((_m = this._predefinedMetricPairSpecification) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricPairSpecification = (_o = this._predefinedMetricPairSpecification) === null || _o === void 0 ? void 0 : _o.internalValue;
        }
        if ((_p = this._predefinedScalingMetricSpecification) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricSpecification = (_q = this._predefinedScalingMetricSpecification) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._targetValue = undefined;
            this._predefinedLoadMetricSpecification.internalValue = undefined;
            this._predefinedMetricPairSpecification.internalValue = undefined;
            this._predefinedScalingMetricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._targetValue = value.targetValue;
            this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
            this._predefinedMetricPairSpecification.internalValue = value.predefinedMetricPairSpecification;
            this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
        }
    }
    /**
     * @stability stable
     */
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    /**
     * @stability stable
     */
    set targetValue(value) {
        this._targetValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetValueInput() {
        return this._targetValue;
    }
    /**
     * @stability stable
     */
    get predefinedLoadMetricSpecification() {
        return this._predefinedLoadMetricSpecification;
    }
    /**
     * @stability stable
     */
    putPredefinedLoadMetricSpecification(value) {
        this._predefinedLoadMetricSpecification.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPredefinedLoadMetricSpecification() {
        this._predefinedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedLoadMetricSpecificationInput() {
        return this._predefinedLoadMetricSpecification.internalValue;
    }
    /**
     * @stability stable
     */
    get predefinedMetricPairSpecification() {
        return this._predefinedMetricPairSpecification;
    }
    /**
     * @stability stable
     */
    putPredefinedMetricPairSpecification(value) {
        this._predefinedMetricPairSpecification.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPredefinedMetricPairSpecification() {
        this._predefinedMetricPairSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedMetricPairSpecificationInput() {
        return this._predefinedMetricPairSpecification.internalValue;
    }
    /**
     * @stability stable
     */
    get predefinedScalingMetricSpecification() {
        return this._predefinedScalingMetricSpecification;
    }
    /**
     * @stability stable
     */
    putPredefinedScalingMetricSpecification(value) {
        this._predefinedScalingMetricSpecification.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPredefinedScalingMetricSpecification() {
        this._predefinedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedScalingMetricSpecificationInput() {
        return this._predefinedScalingMetricSpecification.internalValue;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference[_d] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_capacity_breach_behavior: cdktf.stringToTerraform(struct.maxCapacityBreachBehavior),
        max_capacity_buffer: cdktf.stringToTerraform(struct.maxCapacityBuffer),
        mode: cdktf.stringToTerraform(struct.mode),
        scheduling_buffer_time: cdktf.stringToTerraform(struct.schedulingBufferTime),
        metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct.metricSpecification),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationToTerraform = autoscalingPolicyPredictiveScalingConfigurationToTerraform;
/**
 * @stability stable
 */
class AutoscalingPolicyPredictiveScalingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // metric_specification - computed: false, optional: false, required: true
        this._metricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference(this, "metric_specification", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._maxCapacityBreachBehavior) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBreachBehavior = this._maxCapacityBreachBehavior;
        }
        if (this._maxCapacityBuffer) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBuffer = this._maxCapacityBuffer;
        }
        if (this._mode) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._schedulingBufferTime) {
            hasAnyValues = true;
            internalValueResult.schedulingBufferTime = this._schedulingBufferTime;
        }
        if ((_k = this._metricSpecification) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.metricSpecification = (_l = this._metricSpecification) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxCapacityBreachBehavior = undefined;
            this._maxCapacityBuffer = undefined;
            this._mode = undefined;
            this._schedulingBufferTime = undefined;
            this._metricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxCapacityBreachBehavior = value.maxCapacityBreachBehavior;
            this._maxCapacityBuffer = value.maxCapacityBuffer;
            this._mode = value.mode;
            this._schedulingBufferTime = value.schedulingBufferTime;
            this._metricSpecification.internalValue = value.metricSpecification;
        }
    }
    /**
     * @stability stable
     */
    get maxCapacityBreachBehavior() {
        return this.getStringAttribute('max_capacity_breach_behavior');
    }
    /**
     * @stability stable
     */
    set maxCapacityBreachBehavior(value) {
        this._maxCapacityBreachBehavior = value;
    }
    /**
     * @stability stable
     */
    resetMaxCapacityBreachBehavior() {
        this._maxCapacityBreachBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxCapacityBreachBehaviorInput() {
        return this._maxCapacityBreachBehavior;
    }
    /**
     * @stability stable
     */
    get maxCapacityBuffer() {
        return this.getStringAttribute('max_capacity_buffer');
    }
    /**
     * @stability stable
     */
    set maxCapacityBuffer(value) {
        this._maxCapacityBuffer = value;
    }
    /**
     * @stability stable
     */
    resetMaxCapacityBuffer() {
        this._maxCapacityBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxCapacityBufferInput() {
        return this._maxCapacityBuffer;
    }
    /**
     * @stability stable
     */
    get mode() {
        return this.getStringAttribute('mode');
    }
    /**
     * @stability stable
     */
    set mode(value) {
        this._mode = value;
    }
    /**
     * @stability stable
     */
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get modeInput() {
        return this._mode;
    }
    /**
     * @stability stable
     */
    get schedulingBufferTime() {
        return this.getStringAttribute('scheduling_buffer_time');
    }
    /**
     * @stability stable
     */
    set schedulingBufferTime(value) {
        this._schedulingBufferTime = value;
    }
    /**
     * @stability stable
     */
    resetSchedulingBufferTime() {
        this._schedulingBufferTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schedulingBufferTimeInput() {
        return this._schedulingBufferTime;
    }
    /**
     * @stability stable
     */
    get metricSpecification() {
        return this._metricSpecification;
    }
    /**
     * @stability stable
     */
    putMetricSpecification(value) {
        this._metricSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metricSpecificationInput() {
        return this._metricSpecification.internalValue;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationOutputReference[_e] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicyPredictiveScalingConfigurationOutputReference", version: "3.0.1" };
function autoscalingPolicyStepAdjustmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metric_interval_lower_bound: cdktf.stringToTerraform(struct.metricIntervalLowerBound),
        metric_interval_upper_bound: cdktf.stringToTerraform(struct.metricIntervalUpperBound),
        scaling_adjustment: cdktf.numberToTerraform(struct.scalingAdjustment),
    };
}
exports.autoscalingPolicyStepAdjustmentToTerraform = autoscalingPolicyStepAdjustmentToTerraform;
function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform = autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform;
function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
        metric_dimension: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform)(struct.metricDimension),
    };
}
exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform = autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._metricName) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._statistic) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._metricDimension) {
            hasAnyValues = true;
            internalValueResult.metricDimension = this._metricDimension;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
            this._metricDimension = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
            this._metricDimension = value.metricDimension;
        }
    }
    /**
     * @stability stable
     */
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    /**
     * @stability stable
     */
    set metricName(value) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metricNameInput() {
        return this._metricName;
    }
    /**
     * @stability stable
     */
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    /**
     * @stability stable
     */
    set namespace(value) {
        this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get namespaceInput() {
        return this._namespace;
    }
    /**
     * @stability stable
     */
    get statistic() {
        return this.getStringAttribute('statistic');
    }
    /**
     * @stability stable
     */
    set statistic(value) {
        this._statistic = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statisticInput() {
        return this._statistic;
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
    /**
     * @stability stable
     */
    resetUnit() {
        this._unit = undefined;
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
    get metricDimension() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('metric_dimension');
    }
    /**
     * @stability stable
     */
    set metricDimension(value) {
        this._metricDimension = value;
    }
    /**
     * @stability stable
     */
    resetMetricDimension() {
        this._metricDimension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metricDimensionInput() {
        return this._metricDimension;
    }
}
exports.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference = AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference[_f] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform = autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    /**
     * @stability stable
     */
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    /**
     * @stability stable
     */
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    /**
     * @stability stable
     */
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    /**
     * @stability stable
     */
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    /**
     * @stability stable
     */
    resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
exports.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference = AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference[_g] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_metric_specification: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct.customizedMetricSpecification),
        predefined_metric_specification: autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct.predefinedMetricSpecification),
    };
}
exports.autoscalingPolicyTargetTrackingConfigurationToTerraform = autoscalingPolicyTargetTrackingConfigurationToTerraform;
/**
 * @stability stable
 */
class AutoscalingPolicyTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // customized_metric_specification - computed: false, optional: true, required: false
        this._customizedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification", true);
        // predefined_metric_specification - computed: false, optional: true, required: false
        this._predefinedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l, _m, _o;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._disableScaleIn) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._targetValue) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        if ((_k = this._customizedMetricSpecification) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.customizedMetricSpecification = (_l = this._customizedMetricSpecification) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        if ((_m = this._predefinedMetricSpecification) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricSpecification = (_o = this._predefinedMetricSpecification) === null || _o === void 0 ? void 0 : _o.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._disableScaleIn = undefined;
            this._targetValue = undefined;
            this._customizedMetricSpecification.internalValue = undefined;
            this._predefinedMetricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._disableScaleIn = value.disableScaleIn;
            this._targetValue = value.targetValue;
            this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
            this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
        }
    }
    /**
     * @stability stable
     */
    get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    /**
     * @stability stable
     */
    set disableScaleIn(value) {
        this._disableScaleIn = value;
    }
    /**
     * @stability stable
     */
    resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get disableScaleInInput() {
        return this._disableScaleIn;
    }
    /**
     * @stability stable
     */
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    /**
     * @stability stable
     */
    set targetValue(value) {
        this._targetValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetValueInput() {
        return this._targetValue;
    }
    /**
     * @stability stable
     */
    get customizedMetricSpecification() {
        return this._customizedMetricSpecification;
    }
    /**
     * @stability stable
     */
    putCustomizedMetricSpecification(value) {
        this._customizedMetricSpecification.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCustomizedMetricSpecification() {
        this._customizedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customizedMetricSpecificationInput() {
        return this._customizedMetricSpecification.internalValue;
    }
    /**
     * @stability stable
     */
    get predefinedMetricSpecification() {
        return this._predefinedMetricSpecification;
    }
    /**
     * @stability stable
     */
    putPredefinedMetricSpecification(value) {
        this._predefinedMetricSpecification.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPredefinedMetricSpecification() {
        this._predefinedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedMetricSpecificationInput() {
        return this._predefinedMetricSpecification.internalValue;
    }
}
exports.AutoscalingPolicyTargetTrackingConfigurationOutputReference = AutoscalingPolicyTargetTrackingConfigurationOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyTargetTrackingConfigurationOutputReference[_h] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicyTargetTrackingConfigurationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy}.
 *
 * @stability stable
 */
class AutoscalingPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // predictive_scaling_configuration - computed: false, optional: true, required: false
        this._predictiveScalingConfiguration = new AutoscalingPolicyPredictiveScalingConfigurationOutputReference(this, "predictive_scaling_configuration", true);
        // target_tracking_configuration - computed: false, optional: true, required: false
        this._targetTrackingConfiguration = new AutoscalingPolicyTargetTrackingConfigurationOutputReference(this, "target_tracking_configuration", true);
        this._adjustmentType = config.adjustmentType;
        this._autoscalingGroupName = config.autoscalingGroupName;
        this._cooldown = config.cooldown;
        this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
        this._metricAggregationType = config.metricAggregationType;
        this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
        this._name = config.name;
        this._policyType = config.policyType;
        this._scalingAdjustment = config.scalingAdjustment;
        this._predictiveScalingConfiguration.internalValue = config.predictiveScalingConfiguration;
        this._stepAdjustment = config.stepAdjustment;
        this._targetTrackingConfiguration.internalValue = config.targetTrackingConfiguration;
    }
    /**
     * @stability stable
     */
    get adjustmentType() {
        return this.getStringAttribute('adjustment_type');
    }
    /**
     * @stability stable
     */
    set adjustmentType(value) {
        this._adjustmentType = value;
    }
    /**
     * @stability stable
     */
    resetAdjustmentType() {
        this._adjustmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get adjustmentTypeInput() {
        return this._adjustmentType;
    }
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
    get autoscalingGroupName() {
        return this.getStringAttribute('autoscaling_group_name');
    }
    /**
     * @stability stable
     */
    set autoscalingGroupName(value) {
        this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoscalingGroupNameInput() {
        return this._autoscalingGroupName;
    }
    /**
     * @stability stable
     */
    get cooldown() {
        return this.getNumberAttribute('cooldown');
    }
    /**
     * @stability stable
     */
    set cooldown(value) {
        this._cooldown = value;
    }
    /**
     * @stability stable
     */
    resetCooldown() {
        this._cooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cooldownInput() {
        return this._cooldown;
    }
    /**
     * @stability stable
     */
    get estimatedInstanceWarmup() {
        return this.getNumberAttribute('estimated_instance_warmup');
    }
    /**
     * @stability stable
     */
    set estimatedInstanceWarmup(value) {
        this._estimatedInstanceWarmup = value;
    }
    /**
     * @stability stable
     */
    resetEstimatedInstanceWarmup() {
        this._estimatedInstanceWarmup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get estimatedInstanceWarmupInput() {
        return this._estimatedInstanceWarmup;
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
    get metricAggregationType() {
        return this.getStringAttribute('metric_aggregation_type');
    }
    /**
     * @stability stable
     */
    set metricAggregationType(value) {
        this._metricAggregationType = value;
    }
    /**
     * @stability stable
     */
    resetMetricAggregationType() {
        this._metricAggregationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metricAggregationTypeInput() {
        return this._metricAggregationType;
    }
    /**
     * @stability stable
     */
    get minAdjustmentMagnitude() {
        return this.getNumberAttribute('min_adjustment_magnitude');
    }
    /**
     * @stability stable
     */
    set minAdjustmentMagnitude(value) {
        this._minAdjustmentMagnitude = value;
    }
    /**
     * @stability stable
     */
    resetMinAdjustmentMagnitude() {
        this._minAdjustmentMagnitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minAdjustmentMagnitudeInput() {
        return this._minAdjustmentMagnitude;
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
    get policyType() {
        return this.getStringAttribute('policy_type');
    }
    /**
     * @stability stable
     */
    set policyType(value) {
        this._policyType = value;
    }
    /**
     * @stability stable
     */
    resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get policyTypeInput() {
        return this._policyType;
    }
    /**
     * @stability stable
     */
    get scalingAdjustment() {
        return this.getNumberAttribute('scaling_adjustment');
    }
    /**
     * @stability stable
     */
    set scalingAdjustment(value) {
        this._scalingAdjustment = value;
    }
    /**
     * @stability stable
     */
    resetScalingAdjustment() {
        this._scalingAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scalingAdjustmentInput() {
        return this._scalingAdjustment;
    }
    /**
     * @stability stable
     */
    get predictiveScalingConfiguration() {
        return this._predictiveScalingConfiguration;
    }
    /**
     * @stability stable
     */
    putPredictiveScalingConfiguration(value) {
        this._predictiveScalingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPredictiveScalingConfiguration() {
        this._predictiveScalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predictiveScalingConfigurationInput() {
        return this._predictiveScalingConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get stepAdjustment() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('step_adjustment');
    }
    /**
     * @stability stable
     */
    set stepAdjustment(value) {
        this._stepAdjustment = value;
    }
    /**
     * @stability stable
     */
    resetStepAdjustment() {
        this._stepAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stepAdjustmentInput() {
        return this._stepAdjustment;
    }
    /**
     * @stability stable
     */
    get targetTrackingConfiguration() {
        return this._targetTrackingConfiguration;
    }
    /**
     * @stability stable
     */
    putTargetTrackingConfiguration(value) {
        this._targetTrackingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTargetTrackingConfiguration() {
        this._targetTrackingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetTrackingConfigurationInput() {
        return this._targetTrackingConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            cooldown: cdktf.numberToTerraform(this._cooldown),
            estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
            metric_aggregation_type: cdktf.stringToTerraform(this._metricAggregationType),
            min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
            name: cdktf.stringToTerraform(this._name),
            policy_type: cdktf.stringToTerraform(this._policyType),
            scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
            predictive_scaling_configuration: autoscalingPolicyPredictiveScalingConfigurationToTerraform(this._predictiveScalingConfiguration.internalValue),
            step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform)(this._stepAdjustment),
            target_tracking_configuration: autoscalingPolicyTargetTrackingConfigurationToTerraform(this._targetTrackingConfiguration.internalValue),
        };
    }
}
exports.AutoscalingPolicy = AutoscalingPolicy;
_j = JSII_RTTI_SYMBOL_1;
AutoscalingPolicy[_j] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AutoscalingPolicy.tfResourceType = "aws_autoscaling_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NjYWxpbmctcG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dG9zY2FsaW5nL2F1dG9zY2FsaW5nLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQW9DL0IsU0FBZ0IsOEdBQThHLENBQUMsTUFBaU87SUFDOVYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQzdFLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztLQUMvRCxDQUFBO0FBQ0gsQ0FBQztBQVRELHdPQVNDOzs7O0FBRUQsTUFBYSxrSEFBbUgsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl6SixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFx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QkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BFLGdDQUFnQyxFQUFFLDBEQUEwRCxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUM7WUFDaEosZUFBZSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ25HLDZCQUE2QixFQUFFLHVEQUF1RCxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7U0FDeEksQ0FBQztJQUNKLENBQUM7O0FBalFILDhDQWtRQzs7O0FBaFFDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csZ0NBQWMsR0FBVyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdQb2xpY3lDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkanVzdG1lbnRUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvc2NhbGluZ0dyb3VwTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvb2xkb3duPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlc3RpbWF0ZWRJbnN0YW5jZVdhcm11cD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNBZ2dyZWdhdGlvblR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5BZGp1c3RtZW50TWFnbml0dWRlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9saWN5VHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjYWxpbmdBZGp1c3RtZW50PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbj86IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0ZXBBZGp1c3RtZW50PzogQXV0b3NjYWxpbmdQb2xpY3lTdGVwQWRqdXN0bWVudFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbj86IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVkZWZpbmVkTWV0cmljVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlTGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByZWRlZmluZWRfbWV0cmljX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZE1ldHJpY1R5cGUpLFxuICAgIHJlc291cmNlX2xhYmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlTGFiZWwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlTGFiZWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlTGFiZWwgPSB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHZhbHVlLnByZWRlZmluZWRNZXRyaWNUeXBlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHZhbHVlLnJlc291cmNlTGFiZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9tZXRyaWNfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcmVkZWZpbmVkTWV0cmljVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZE1ldHJpY1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVkZWZpbmVkX21ldHJpY190eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVkZWZpbmVkTWV0cmljVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZE1ldHJpY1R5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9sYWJlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUxhYmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfbGFiZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlTGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWRlZmluZWRNZXRyaWNUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VMYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkTWV0cmljVHlwZSksXG4gICAgcmVzb3VyY2VfbGFiZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VMYWJlbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VMYWJlbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VMYWJlbCA9IHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdmFsdWUucHJlZGVmaW5lZE1ldHJpY1R5cGU7XG4gICAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWUucmVzb3VyY2VMYWJlbDtcbiAgICB9XG4gIH1cblxuICAvLyBwcmVkZWZpbmVkX21ldHJpY190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByZWRlZmluZWRNZXRyaWNUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWRlZmluZWRfbWV0cmljX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWRlZmluZWRNZXRyaWNUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2xhYmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlTGFiZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9sYWJlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VMYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZGVmaW5lZE1ldHJpY1R5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcmVkZWZpbmVkX21ldHJpY190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRNZXRyaWNUeXBlKSxcbiAgICByZXNvdXJjZV9sYWJlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUxhYmVsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWRlZmluZWRNZXRyaWNUeXBlID0gdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUxhYmVsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUxhYmVsID0gdGhpcy5fcmVzb3VyY2VMYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB2YWx1ZS5wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB2YWx1ZS5yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByZWRlZmluZWRfbWV0cmljX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJlZGVmaW5lZE1ldHJpY1R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZGVmaW5lZF9tZXRyaWNfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZGVmaW5lZE1ldHJpY1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VMYWJlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2xhYmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlTGFiZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VMYWJlbDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0VmFsdWU6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24/OiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbj86IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRhcmdldF92YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRWYWx1ZSksXG4gICAgcHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfcGFpcl9zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbiksXG4gICAgcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3RhcmdldFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRWYWx1ZSA9IHRoaXMuX3RhcmdldFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24gPSB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbiA9IHRoaXMuX3ByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uID0gdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdGFyZ2V0VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3RhcmdldFZhbHVlID0gdmFsdWUudGFyZ2V0VmFsdWU7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gdGFyZ2V0X3ZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhcmdldFZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0YXJnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RhcmdldF92YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFZhbHVlO1xuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRQcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24odmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwcmVkZWZpbmVkX21ldHJpY19wYWlyX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uID0gbmV3IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwcmVkZWZpbmVkX21ldHJpY19wYWlyX3NwZWNpZmljYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24oKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24gPSBuZXcgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24pIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q2FwYWNpdHlCdWZmZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVkdWxpbmdCdWZmZXJUaW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldHJpY1NwZWNpZmljYXRpb246IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1heF9jYXBhY2l0eV9icmVhY2hfYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvciksXG4gICAgbWF4X2NhcGFjaXR5X2J1ZmZlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDYXBhY2l0eUJ1ZmZlciksXG4gICAgbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb2RlKSxcbiAgICBzY2hlZHVsaW5nX2J1ZmZlcl90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxpbmdCdWZmZXJUaW1lKSxcbiAgICBtZXRyaWNfc3BlY2lmaWNhdGlvbjogYXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21heENhcGFjaXR5QnJlYWNoQmVoYXZpb3IpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heENhcGFjaXR5QnJlYWNoQmVoYXZpb3IgPSB0aGlzLl9tYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4Q2FwYWNpdHlCdWZmZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heENhcGFjaXR5QnVmZmVyID0gdGhpcy5fbWF4Q2FwYWNpdHlCdWZmZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NjaGVkdWxpbmdCdWZmZXJUaW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY2hlZHVsaW5nQnVmZmVyVGltZSA9IHRoaXMuX3NjaGVkdWxpbmdCdWZmZXJUaW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWV0cmljU3BlY2lmaWNhdGlvbiA9IHRoaXMuX21ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heENhcGFjaXR5QnJlYWNoQmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhDYXBhY2l0eUJ1ZmZlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2hlZHVsaW5nQnVmZmVyVGltZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvciA9IHZhbHVlLm1heENhcGFjaXR5QnJlYWNoQmVoYXZpb3I7XG4gICAgICB0aGlzLl9tYXhDYXBhY2l0eUJ1ZmZlciA9IHZhbHVlLm1heENhcGFjaXR5QnVmZmVyO1xuICAgICAgdGhpcy5fbW9kZSA9IHZhbHVlLm1vZGU7XG4gICAgICB0aGlzLl9zY2hlZHVsaW5nQnVmZmVyVGltZSA9IHZhbHVlLnNjaGVkdWxpbmdCdWZmZXJUaW1lO1xuICAgICAgdGhpcy5fbWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfY2FwYWNpdHlfYnJlYWNoX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heENhcGFjaXR5QnJlYWNoQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5QnJlYWNoQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfY2FwYWNpdHlfYnJlYWNoX2JlaGF2aW9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvcigpIHtcbiAgICB0aGlzLl9tYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENhcGFjaXR5QnJlYWNoQmVoYXZpb3I7XG4gIH1cblxuICAvLyBtYXhfY2FwYWNpdHlfYnVmZmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heENhcGFjaXR5QnVmZmVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eUJ1ZmZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF9jYXBhY2l0eV9idWZmZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENhcGFjaXR5QnVmZmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhDYXBhY2l0eUJ1ZmZlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heENhcGFjaXR5QnVmZmVyKCkge1xuICAgIHRoaXMuX21heENhcGFjaXR5QnVmZmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eUJ1ZmZlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhDYXBhY2l0eUJ1ZmZlcjtcbiAgfVxuXG4gIC8vIG1vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb2RlKCkge1xuICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8vIHNjaGVkdWxpbmdfYnVmZmVyX3RpbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZWR1bGluZ0J1ZmZlclRpbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjaGVkdWxpbmdCdWZmZXJUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NoZWR1bGluZ19idWZmZXJfdGltZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZWR1bGluZ0J1ZmZlclRpbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjaGVkdWxpbmdCdWZmZXJUaW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NoZWR1bGluZ0J1ZmZlclRpbWUoKSB7XG4gICAgdGhpcy5fc2NoZWR1bGluZ0J1ZmZlclRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVkdWxpbmdCdWZmZXJUaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxpbmdCdWZmZXJUaW1lO1xuICB9XG5cbiAgLy8gbWV0cmljX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWV0cmljU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWV0cmljX3NwZWNpZmljYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0TWV0cmljU3BlY2lmaWNhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fbWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY1NwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWV0cmljSW50ZXJ2YWxMb3dlckJvdW5kPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWV0cmljSW50ZXJ2YWxVcHBlckJvdW5kPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NhbGluZ0FkanVzdG1lbnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVN0ZXBBZGp1c3RtZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWV0cmljX2ludGVydmFsX2xvd2VyX2JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY0ludGVydmFsTG93ZXJCb3VuZCksXG4gICAgbWV0cmljX2ludGVydmFsX3VwcGVyX2JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY0ludGVydmFsVXBwZXJCb3VuZCksXG4gICAgc2NhbGluZ19hZGp1c3RtZW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjYWxpbmdBZGp1c3RtZW50KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRpc3RpYzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldHJpY0RpbWVuc2lvbj86IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb25bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1ldHJpY19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY05hbWUpLFxuICAgIG5hbWVzcGFjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lc3BhY2UpLFxuICAgIHN0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aXN0aWMpLFxuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgbWV0cmljX2RpbWVuc2lvbjogY2RrdGYubGlzdE1hcHBlcihhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEubWV0cmljRGltZW5zaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tZXRyaWNOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRyaWNOYW1lID0gdGhpcy5fbWV0cmljTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZXNwYWNlID0gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGlzdGljKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGF0aXN0aWMgPSB0aGlzLl9zdGF0aXN0aWM7XG4gICAgfVxuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY0RpbWVuc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWV0cmljRGltZW5zaW9uID0gdGhpcy5fbWV0cmljRGltZW5zaW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21ldHJpY05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0aXN0aWMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWV0cmljRGltZW5zaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tZXRyaWNOYW1lID0gdmFsdWUubWV0cmljTmFtZTtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IHZhbHVlLm5hbWVzcGFjZTtcbiAgICAgIHRoaXMuX3N0YXRpc3RpYyA9IHZhbHVlLnN0YXRpc3RpYztcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fbWV0cmljRGltZW5zaW9uID0gdmFsdWUubWV0cmljRGltZW5zaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1ldHJpY19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21ldHJpY05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY05hbWU7XG4gIH1cblxuICAvLyBuYW1lc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZXNwYWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lc3BhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVzcGFjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gIH1cblxuICAvLyBzdGF0aXN0aWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdGlzdGljPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0aXN0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0aXN0aWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRpc3RpYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdGlzdGljID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0aXN0aWM7XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VW5pdCgpIHtcbiAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyBtZXRyaWNfZGltZW5zaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY0RpbWVuc2lvbj86IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb25bXTsgXG4gIHB1YmxpYyBnZXQgbWV0cmljRGltZW5zaW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtZXRyaWNfZGltZW5zaW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljRGltZW5zaW9uKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uW10pIHtcbiAgICB0aGlzLl9tZXRyaWNEaW1lbnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNEaW1lbnNpb24oKSB7XG4gICAgdGhpcy5fbWV0cmljRGltZW5zaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNEaW1lbnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljRGltZW5zaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVkZWZpbmVkTWV0cmljVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlTGFiZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcmVkZWZpbmVkX21ldHJpY190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRNZXRyaWNUeXBlKSxcbiAgICByZXNvdXJjZV9sYWJlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUxhYmVsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlTGFiZWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlTGFiZWwgPSB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB2YWx1ZS5wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB2YWx1ZS5yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByZWRlZmluZWRfbWV0cmljX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJlZGVmaW5lZE1ldHJpY1R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZGVmaW5lZF9tZXRyaWNfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZGVmaW5lZE1ldHJpY1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VMYWJlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2xhYmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VMYWJlbCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkaXNhYmxlU2NhbGVJbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldFZhbHVlOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc2FibGVfc2NhbGVfaW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc2FibGVTY2FsZUluKSxcbiAgICB0YXJnZXRfdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0VmFsdWUpLFxuICAgIGN1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb246IGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgICBwcmVkZWZpbmVkX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kaXNhYmxlU2NhbGVJbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGlzYWJsZVNjYWxlSW4gPSB0aGlzLl9kaXNhYmxlU2NhbGVJbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRWYWx1ZSA9IHRoaXMuX3RhcmdldFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uID0gdGhpcy5fY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24gPSB0aGlzLl9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGlzYWJsZVNjYWxlSW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kaXNhYmxlU2NhbGVJbiA9IHZhbHVlLmRpc2FibGVTY2FsZUluO1xuICAgICAgdGhpcy5fdGFyZ2V0VmFsdWUgPSB2YWx1ZS50YXJnZXRWYWx1ZTtcbiAgICAgIHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBkaXNhYmxlX3NjYWxlX2luIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rpc2FibGVTY2FsZUluPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkaXNhYmxlU2NhbGVJbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkaXNhYmxlX3NjYWxlX2luJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGlzYWJsZVNjYWxlSW4odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Rpc2FibGVTY2FsZUluID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGlzYWJsZVNjYWxlSW4oKSB7XG4gICAgdGhpcy5fZGlzYWJsZVNjYWxlSW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpc2FibGVTY2FsZUluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVTY2FsZUluO1xuICB9XG5cbiAgLy8gdGFyZ2V0X3ZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhcmdldFZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0YXJnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RhcmdldF92YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFZhbHVlO1xuICB9XG5cbiAgLy8gY3VzdG9taXplZF9tZXRyaWNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImN1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9tZXRyaWNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByZWRlZmluZWRfbWV0cmljX3NwZWNpZmljYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRQcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3kgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXV0b3NjYWxpbmdfcG9saWN5XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBdXRvc2NhbGluZ1BvbGljeUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2F1dG9zY2FsaW5nX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hZGp1c3RtZW50VHlwZSA9IGNvbmZpZy5hZGp1c3RtZW50VHlwZTtcbiAgICB0aGlzLl9hdXRvc2NhbGluZ0dyb3VwTmFtZSA9IGNvbmZpZy5hdXRvc2NhbGluZ0dyb3VwTmFtZTtcbiAgICB0aGlzLl9jb29sZG93biA9IGNvbmZpZy5jb29sZG93bjtcbiAgICB0aGlzLl9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCA9IGNvbmZpZy5lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cDtcbiAgICB0aGlzLl9tZXRyaWNBZ2dyZWdhdGlvblR5cGUgPSBjb25maWcubWV0cmljQWdncmVnYXRpb25UeXBlO1xuICAgIHRoaXMuX21pbkFkanVzdG1lbnRNYWduaXR1ZGUgPSBjb25maWcubWluQWRqdXN0bWVudE1hZ25pdHVkZTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcG9saWN5VHlwZSA9IGNvbmZpZy5wb2xpY3lUeXBlO1xuICAgIHRoaXMuX3NjYWxpbmdBZGp1c3RtZW50ID0gY29uZmlnLnNjYWxpbmdBZGp1c3RtZW50O1xuICAgIHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9zdGVwQWRqdXN0bWVudCA9IGNvbmZpZy5zdGVwQWRqdXN0bWVudDtcbiAgICB0aGlzLl90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFkanVzdG1lbnRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hZGp1c3RtZW50VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWRqdXN0bWVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZGp1c3RtZW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkanVzdG1lbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGp1c3RtZW50VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkanVzdG1lbnRUeXBlKCkge1xuICAgIHRoaXMuX2FkanVzdG1lbnRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGp1c3RtZW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGp1c3RtZW50VHlwZTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b3NjYWxpbmdfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRvc2NhbGluZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRvc2NhbGluZ19ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvc2NhbGluZ0dyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWU7XG4gIH1cblxuICAvLyBjb29sZG93biAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb29sZG93bj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjb29sZG93bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29vbGRvd24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Nvb2xkb3duID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29vbGRvd24oKSB7XG4gICAgdGhpcy5fY29vbGRvd24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvb2xkb3duSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvb2xkb3duO1xuICB9XG5cbiAgLy8gZXN0aW1hdGVkX2luc3RhbmNlX3dhcm11cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdlc3RpbWF0ZWRfaW5zdGFuY2Vfd2FybXVwJyk7XG4gIH1cbiAgcHVibGljIHNldCBlc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCgpIHtcbiAgICB0aGlzLl9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbWV0cmljX2FnZ3JlZ2F0aW9uX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRyaWNBZ2dyZWdhdGlvblR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldHJpY0FnZ3JlZ2F0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY19hZ2dyZWdhdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRyaWNBZ2dyZWdhdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldHJpY0FnZ3JlZ2F0aW9uVHlwZSgpIHtcbiAgICB0aGlzLl9tZXRyaWNBZ2dyZWdhdGlvblR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY0FnZ3JlZ2F0aW9uVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRyaWNBZ2dyZWdhdGlvblR5cGU7XG4gIH1cblxuICAvLyBtaW5fYWRqdXN0bWVudF9tYWduaXR1ZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluQWRqdXN0bWVudE1hZ25pdHVkZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWluQWRqdXN0bWVudE1hZ25pdHVkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9hZGp1c3RtZW50X21hZ25pdHVkZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluQWRqdXN0bWVudE1hZ25pdHVkZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluQWRqdXN0bWVudE1hZ25pdHVkZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbkFkanVzdG1lbnRNYWduaXR1ZGUoKSB7XG4gICAgdGhpcy5fbWluQWRqdXN0bWVudE1hZ25pdHVkZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluQWRqdXN0bWVudE1hZ25pdHVkZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5BZGp1c3RtZW50TWFnbml0dWRlO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwb2xpY3lfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb2xpY3lUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb2xpY3lUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9saWN5X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvbGljeVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BvbGljeVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb2xpY3lUeXBlKCkge1xuICAgIHRoaXMuX3BvbGljeVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvbGljeVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9saWN5VHlwZTtcbiAgfVxuXG4gIC8vIHNjYWxpbmdfYWRqdXN0bWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2FsaW5nQWRqdXN0bWVudD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc2NhbGluZ0FkanVzdG1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsaW5nX2FkanVzdG1lbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjYWxpbmdBZGp1c3RtZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY2FsaW5nQWRqdXN0bWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjYWxpbmdBZGp1c3RtZW50KCkge1xuICAgIHRoaXMuX3NjYWxpbmdBZGp1c3RtZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2FsaW5nQWRqdXN0bWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2FsaW5nQWRqdXN0bWVudDtcbiAgfVxuXG4gIC8vIHByZWRpY3RpdmVfc2NhbGluZ19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwcmVkaWN0aXZlX3NjYWxpbmdfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzdGVwX2FkanVzdG1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RlcEFkanVzdG1lbnQ/OiBBdXRvc2NhbGluZ1BvbGljeVN0ZXBBZGp1c3RtZW50W107IFxuICBwdWJsaWMgZ2V0IHN0ZXBBZGp1c3RtZW50KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGVwX2FkanVzdG1lbnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdGVwQWRqdXN0bWVudCh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lTdGVwQWRqdXN0bWVudFtdKSB7XG4gICAgdGhpcy5fc3RlcEFkanVzdG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGVwQWRqdXN0bWVudCgpIHtcbiAgICB0aGlzLl9zdGVwQWRqdXN0bWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RlcEFkanVzdG1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcEFkanVzdG1lbnQ7XG4gIH1cblxuICAvLyB0YXJnZXRfdHJhY2tpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGFyZ2V0X3RyYWNraW5nX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhZGp1c3RtZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FkanVzdG1lbnRUeXBlKSxcbiAgICAgIGF1dG9zY2FsaW5nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dG9zY2FsaW5nR3JvdXBOYW1lKSxcbiAgICAgIGNvb2xkb3duOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9jb29sZG93biksXG4gICAgICBlc3RpbWF0ZWRfaW5zdGFuY2Vfd2FybXVwOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCksXG4gICAgICBtZXRyaWNfYWdncmVnYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWV0cmljQWdncmVnYXRpb25UeXBlKSxcbiAgICAgIG1pbl9hZGp1c3RtZW50X21hZ25pdHVkZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluQWRqdXN0bWVudE1hZ25pdHVkZSksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHBvbGljeV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wb2xpY3lUeXBlKSxcbiAgICAgIHNjYWxpbmdfYWRqdXN0bWVudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fc2NhbGluZ0FkanVzdG1lbnQpLFxuICAgICAgcHJlZGljdGl2ZV9zY2FsaW5nX2NvbmZpZ3VyYXRpb246IGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgc3RlcF9hZGp1c3RtZW50OiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnRUb1RlcnJhZm9ybSkodGhpcy5fc3RlcEFkanVzdG1lbnQpLFxuICAgICAgdGFyZ2V0X3RyYWNraW5nX2NvbmZpZ3VyYXRpb246IGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fdGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==