"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppautoscalingPolicy = exports.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference = exports.appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform = exports.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference = exports.appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform = exports.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference = exports.appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform = exports.appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform = exports.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference = exports.appautoscalingPolicyStepScalingPolicyConfigurationToTerraform = exports.appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform(struct) {
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
exports.appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform = appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform;
function appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        adjustment_type: cdktf.stringToTerraform(struct.adjustmentType),
        cooldown: cdktf.numberToTerraform(struct.cooldown),
        metric_aggregation_type: cdktf.stringToTerraform(struct.metricAggregationType),
        min_adjustment_magnitude: cdktf.numberToTerraform(struct.minAdjustmentMagnitude),
        step_adjustment: cdktf.listMapper(appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform)(struct.stepAdjustment),
    };
}
exports.appautoscalingPolicyStepScalingPolicyConfigurationToTerraform = appautoscalingPolicyStepScalingPolicyConfigurationToTerraform;
/**
 * @stability stable
 */
class AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._adjustmentType) {
            hasAnyValues = true;
            internalValueResult.adjustmentType = this._adjustmentType;
        }
        if (this._cooldown) {
            hasAnyValues = true;
            internalValueResult.cooldown = this._cooldown;
        }
        if (this._metricAggregationType) {
            hasAnyValues = true;
            internalValueResult.metricAggregationType = this._metricAggregationType;
        }
        if (this._minAdjustmentMagnitude) {
            hasAnyValues = true;
            internalValueResult.minAdjustmentMagnitude = this._minAdjustmentMagnitude;
        }
        if (this._stepAdjustment) {
            hasAnyValues = true;
            internalValueResult.stepAdjustment = this._stepAdjustment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._adjustmentType = undefined;
            this._cooldown = undefined;
            this._metricAggregationType = undefined;
            this._minAdjustmentMagnitude = undefined;
            this._stepAdjustment = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._adjustmentType = value.adjustmentType;
            this._cooldown = value.cooldown;
            this._metricAggregationType = value.metricAggregationType;
            this._minAdjustmentMagnitude = value.minAdjustmentMagnitude;
            this._stepAdjustment = value.stepAdjustment;
        }
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
}
exports.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference = AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.appautoscaling.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference", version: "3.0.1" };
function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct) {
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
exports.appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform = appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform;
function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct) {
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
        dimensions: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform)(struct.dimensions),
    };
}
exports.appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform = appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._dimensions) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions;
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
            this._dimensions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
            this._dimensions = value.dimensions;
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
    get dimensions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('dimensions');
    }
    /**
     * @stability stable
     */
    set dimensions(value) {
        this._dimensions = value;
    }
    /**
     * @stability stable
     */
    resetDimensions() {
        this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dimensionsInput() {
        return this._dimensions;
    }
}
exports.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference = AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference[_b] = { fqn: "@cdktf/provider-aws.appautoscaling.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference", version: "3.0.1" };
function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct) {
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
exports.appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform = appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
exports.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference = AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference[_c] = { fqn: "@cdktf/provider-aws.appautoscaling.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference", version: "3.0.1" };
function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_metric_specification: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct.customizedMetricSpecification),
        predefined_metric_specification: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct.predefinedMetricSpecification),
    };
}
exports.appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform = appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform;
/**
 * @stability stable
 */
class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
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
        this._customizedMetricSpecification = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification", true);
        // predefined_metric_specification - computed: false, optional: true, required: false
        this._predefinedMetricSpecification = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g, _h, _j;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._disableScaleIn) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._scaleInCooldown) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        if ((_f = this._customizedMetricSpecification) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.customizedMetricSpecification = (_g = this._customizedMetricSpecification) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        if ((_h = this._predefinedMetricSpecification) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricSpecification = (_j = this._predefinedMetricSpecification) === null || _j === void 0 ? void 0 : _j.internalValue;
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
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
            this._customizedMetricSpecification.internalValue = undefined;
            this._predefinedMetricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._disableScaleIn = value.disableScaleIn;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
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
    get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    /**
     * @stability stable
     */
    set scaleInCooldown(value) {
        this._scaleInCooldown = value;
    }
    /**
     * @stability stable
     */
    resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }
    /**
     * @stability stable
     */
    get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    /**
     * @stability stable
     */
    set scaleOutCooldown(value) {
        this._scaleOutCooldown = value;
    }
    /**
     * @stability stable
     */
    resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
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
exports.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference = AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference[_d] = { fqn: "@cdktf/provider-aws.appautoscaling.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy}.
 *
 * @stability stable
 */
class AppautoscalingPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appautoscaling_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // step_scaling_policy_configuration - computed: false, optional: true, required: false
        this._stepScalingPolicyConfiguration = new AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference(this, "step_scaling_policy_configuration", true);
        // target_tracking_scaling_policy_configuration - computed: false, optional: true, required: false
        this._targetTrackingScalingPolicyConfiguration = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration", true);
        this._name = config.name;
        this._policyType = config.policyType;
        this._resourceId = config.resourceId;
        this._scalableDimension = config.scalableDimension;
        this._serviceNamespace = config.serviceNamespace;
        this._stepScalingPolicyConfiguration.internalValue = config.stepScalingPolicyConfiguration;
        this._targetTrackingScalingPolicyConfiguration.internalValue = config.targetTrackingScalingPolicyConfiguration;
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
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    /**
     * @stability stable
     */
    set resourceId(value) {
        this._resourceId = value;
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
    get scalableDimension() {
        return this.getStringAttribute('scalable_dimension');
    }
    /**
     * @stability stable
     */
    set scalableDimension(value) {
        this._scalableDimension = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scalableDimensionInput() {
        return this._scalableDimension;
    }
    /**
     * @stability stable
     */
    get serviceNamespace() {
        return this.getStringAttribute('service_namespace');
    }
    /**
     * @stability stable
     */
    set serviceNamespace(value) {
        this._serviceNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceNamespaceInput() {
        return this._serviceNamespace;
    }
    /**
     * @stability stable
     */
    get stepScalingPolicyConfiguration() {
        return this._stepScalingPolicyConfiguration;
    }
    /**
     * @stability stable
     */
    putStepScalingPolicyConfiguration(value) {
        this._stepScalingPolicyConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetStepScalingPolicyConfiguration() {
        this._stepScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stepScalingPolicyConfigurationInput() {
        return this._stepScalingPolicyConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    /**
     * @stability stable
     */
    putTargetTrackingScalingPolicyConfiguration(value) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
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
            policy_type: cdktf.stringToTerraform(this._policyType),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
            service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
            step_scaling_policy_configuration: appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(this._stepScalingPolicyConfiguration.internalValue),
            target_tracking_scaling_policy_configuration: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(this._targetTrackingScalingPolicyConfiguration.internalValue),
        };
    }
}
exports.AppautoscalingPolicy = AppautoscalingPolicy;
_e = JSII_RTTI_SYMBOL_1;
AppautoscalingPolicy[_e] = { fqn: "@cdktf/provider-aws.appautoscaling.AppautoscalingPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppautoscalingPolicy.tfResourceType = "aws_appautoscaling_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYXV0b3NjYWxpbmctcG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcGF1dG9zY2FsaW5nL2FwcGF1dG9zY2FsaW5nLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTRCL0IsU0FBZ0IsMkVBQTJFLENBQUMsTUFBeUU7SUFDbkssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCwyQkFBMkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ3RGLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDdEYsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUN2RSxDQUFBO0FBQ0gsQ0FBQztBQVZELGtLQVVDO0FBZUQsU0FBZ0IsNkRBQTZELENBQUMsTUFBK0g7SUFDM00sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIs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QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEUsaUNBQWlDLEVBQUUsNkRBQTZELENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQztZQUNwSiw0Q0FBNEMsRUFBRSx1RUFBdUUsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsYUFBYSxDQUFDO1NBQ3BMLENBQUM7SUFDSixDQUFDOztBQWhLSCxvREFpS0M7OztBQS9KQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLG1DQUFjLEdBQVcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXBwYXV0b3NjYWxpbmdQb2xpY3lDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvbGljeVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NhbGFibGVEaW1lbnNpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlTmFtZXNwYWNlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uPzogQXBwYXV0b3NjYWxpbmdQb2xpY3lTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbj86IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwYXV0b3NjYWxpbmdQb2xpY3lTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25TdGVwQWRqdXN0bWVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNJbnRlcnZhbExvd2VyQm91bmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2FsaW5nQWRqdXN0bWVudDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwYXV0b3NjYWxpbmdQb2xpY3lTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25TdGVwQWRqdXN0bWVudFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcGF1dG9zY2FsaW5nUG9saWN5U3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uU3RlcEFkanVzdG1lbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXRyaWNfaW50ZXJ2YWxfbG93ZXJfYm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljSW50ZXJ2YWxMb3dlckJvdW5kKSxcbiAgICBtZXRyaWNfaW50ZXJ2YWxfdXBwZXJfYm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljSW50ZXJ2YWxVcHBlckJvdW5kKSxcbiAgICBzY2FsaW5nX2FkanVzdG1lbnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGluZ0FkanVzdG1lbnQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwYXV0b3NjYWxpbmdQb2xpY3lTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWRqdXN0bWVudFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29vbGRvd24/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWV0cmljQWdncmVnYXRpb25UeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluQWRqdXN0bWVudE1hZ25pdHVkZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGVwQWRqdXN0bWVudD86IEFwcGF1dG9zY2FsaW5nUG9saWN5U3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uU3RlcEFkanVzdG1lbnRbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGF1dG9zY2FsaW5nUG9saWN5U3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwYXV0b3NjYWxpbmdQb2xpY3lTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBcHBhdXRvc2NhbGluZ1BvbGljeVN0ZXBTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkanVzdG1lbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZGp1c3RtZW50VHlwZSksXG4gICAgY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY29vbGRvd24pLFxuICAgIG1ldHJpY19hZ2dyZWdhdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY0FnZ3JlZ2F0aW9uVHlwZSksXG4gICAgbWluX2FkanVzdG1lbnRfbWFnbml0dWRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbkFkanVzdG1lbnRNYWduaXR1ZGUpLFxuICAgIHN0ZXBfYWRqdXN0bWVudDogY2RrdGYubGlzdE1hcHBlcihhcHBhdXRvc2NhbGluZ1BvbGljeVN0ZXBTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblN0ZXBBZGp1c3RtZW50VG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RlcEFkanVzdG1lbnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBhdXRvc2NhbGluZ1BvbGljeVN0ZXBTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBhdXRvc2NhbGluZ1BvbGljeVN0ZXBTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWRqdXN0bWVudFR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFkanVzdG1lbnRUeXBlID0gdGhpcy5fYWRqdXN0bWVudFR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb29sZG93bikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29vbGRvd24gPSB0aGlzLl9jb29sZG93bjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWV0cmljQWdncmVnYXRpb25UeXBlID0gdGhpcy5fbWV0cmljQWdncmVnYXRpb25UeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWluQWRqdXN0bWVudE1hZ25pdHVkZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWluQWRqdXN0bWVudE1hZ25pdHVkZSA9IHRoaXMuX21pbkFkanVzdG1lbnRNYWduaXR1ZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGVwQWRqdXN0bWVudCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RlcEFkanVzdG1lbnQgPSB0aGlzLl9zdGVwQWRqdXN0bWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcGF1dG9zY2FsaW5nUG9saWN5U3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWRqdXN0bWVudFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb29sZG93biA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21pbkFkanVzdG1lbnRNYWduaXR1ZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGVwQWRqdXN0bWVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWRqdXN0bWVudFR5cGUgPSB2YWx1ZS5hZGp1c3RtZW50VHlwZTtcbiAgICAgIHRoaXMuX2Nvb2xkb3duID0gdmFsdWUuY29vbGRvd247XG4gICAgICB0aGlzLl9tZXRyaWNBZ2dyZWdhdGlvblR5cGUgPSB2YWx1ZS5tZXRyaWNBZ2dyZWdhdGlvblR5cGU7XG4gICAgICB0aGlzLl9taW5BZGp1c3RtZW50TWFnbml0dWRlID0gdmFsdWUubWluQWRqdXN0bWVudE1hZ25pdHVkZTtcbiAgICAgIHRoaXMuX3N0ZXBBZGp1c3RtZW50ID0gdmFsdWUuc3RlcEFkanVzdG1lbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYWRqdXN0bWVudF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FkanVzdG1lbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhZGp1c3RtZW50VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkanVzdG1lbnRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWRqdXN0bWVudFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FkanVzdG1lbnRUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWRqdXN0bWVudFR5cGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0bWVudFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkanVzdG1lbnRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkanVzdG1lbnRUeXBlO1xuICB9XG5cbiAgLy8gY29vbGRvd24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29vbGRvd24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNvb2xkb3duKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY29vbGRvd24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvb2xkb3duKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb29sZG93biA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvb2xkb3duKCkge1xuICAgIHRoaXMuX2Nvb2xkb3duID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb29sZG93bklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb29sZG93bjtcbiAgfVxuXG4gIC8vIG1ldHJpY19hZ2dyZWdhdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljQWdncmVnYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljX2FnZ3JlZ2F0aW9uX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldHJpY0FnZ3JlZ2F0aW9uVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0cmljQWdncmVnYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0cmljQWdncmVnYXRpb25UeXBlKCkge1xuICAgIHRoaXMuX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWV0cmljQWdncmVnYXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIG1pbl9hZGp1c3RtZW50X21hZ25pdHVkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5BZGp1c3RtZW50TWFnbml0dWRlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5BZGp1c3RtZW50TWFnbml0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX2FkanVzdG1lbnRfbWFnbml0dWRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5BZGp1c3RtZW50TWFnbml0dWRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5BZGp1c3RtZW50TWFnbml0dWRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluQWRqdXN0bWVudE1hZ25pdHVkZSgpIHtcbiAgICB0aGlzLl9taW5BZGp1c3RtZW50TWFnbml0dWRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5BZGp1c3RtZW50TWFnbml0dWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkFkanVzdG1lbnRNYWduaXR1ZGU7XG4gIH1cblxuICAvLyBzdGVwX2FkanVzdG1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RlcEFkanVzdG1lbnQ/OiBBcHBhdXRvc2NhbGluZ1BvbGljeVN0ZXBTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblN0ZXBBZGp1c3RtZW50W107IFxuICBwdWJsaWMgZ2V0IHN0ZXBBZGp1c3RtZW50KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGVwX2FkanVzdG1lbnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdGVwQWRqdXN0bWVudCh2YWx1ZTogQXBwYXV0b3NjYWxpbmdQb2xpY3lTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25TdGVwQWRqdXN0bWVudFtdKSB7XG4gICAgdGhpcy5fc3RlcEFkanVzdG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGVwQWRqdXN0bWVudCgpIHtcbiAgICB0aGlzLl9zdGVwQWRqdXN0bWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RlcEFkanVzdG1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcEFkanVzdG1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25EaW1lbnNpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbkRpbWVuc2lvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbkRpbWVuc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRpc3RpYzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpbWVuc2lvbnM/OiBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbkRpbWVuc2lvbnNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1ldHJpY19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY05hbWUpLFxuICAgIG5hbWVzcGFjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lc3BhY2UpLFxuICAgIHN0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aXN0aWMpLFxuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgZGltZW5zaW9uczogY2RrdGYubGlzdE1hcHBlcihhcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbkRpbWVuc2lvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21ldHJpY05hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldHJpY05hbWUgPSB0aGlzLl9tZXRyaWNOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lc3BhY2UgPSB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0aXN0aWMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRpc3RpYyA9IHRoaXMuX3N0YXRpc3RpYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGltZW5zaW9ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGltZW5zaW9ucyA9IHRoaXMuX2RpbWVuc2lvbnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21ldHJpY05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0aXN0aWMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGltZW5zaW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlLm1ldHJpY05hbWU7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZS5uYW1lc3BhY2U7XG4gICAgICB0aGlzLl9zdGF0aXN0aWMgPSB2YWx1ZS5zdGF0aXN0aWM7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB2YWx1ZS5kaW1lbnNpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1ldHJpY19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21ldHJpY05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY05hbWU7XG4gIH1cblxuICAvLyBuYW1lc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZXNwYWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lc3BhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVzcGFjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gIH1cblxuICAvLyBzdGF0aXN0aWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdGlzdGljPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0aXN0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0aXN0aWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRpc3RpYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdGlzdGljID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0aXN0aWM7XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VW5pdCgpIHtcbiAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyBkaW1lbnNpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RpbWVuc2lvbnM/OiBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbkRpbWVuc2lvbnNbXTsgXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9ucygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGltZW5zaW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpbWVuc2lvbnModmFsdWU6IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uRGltZW5zaW9uc1tdKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZGVmaW5lZE1ldHJpY1R5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUxhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkTWV0cmljVHlwZSksXG4gICAgcmVzb3VyY2VfbGFiZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VMYWJlbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlTGFiZWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlTGFiZWwgPSB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdmFsdWUucHJlZGVmaW5lZE1ldHJpY1R5cGU7XG4gICAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWUucmVzb3VyY2VMYWJlbDtcbiAgICB9XG4gIH1cblxuICAvLyBwcmVkZWZpbmVkX21ldHJpY190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByZWRlZmluZWRNZXRyaWNUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWRlZmluZWRfbWV0cmljX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWRlZmluZWRNZXRyaWNUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2xhYmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlTGFiZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9sYWJlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VMYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlTGFiZWwoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc2FibGVTY2FsZUluPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjYWxlSW5Db29sZG93bj86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjYWxlT3V0Q29vbGRvd24/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRWYWx1ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uPzogQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24/OiBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc2FibGVfc2NhbGVfaW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc2FibGVTY2FsZUluKSxcbiAgICBzY2FsZV9pbl9jb29sZG93bjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zY2FsZUluQ29vbGRvd24pLFxuICAgIHNjYWxlX291dF9jb29sZG93bjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zY2FsZU91dENvb2xkb3duKSxcbiAgICB0YXJnZXRfdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0VmFsdWUpLFxuICAgIGN1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb246IGFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfc3BlY2lmaWNhdGlvbjogYXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZVNjYWxlSW4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRpc2FibGVTY2FsZUluID0gdGhpcy5fZGlzYWJsZVNjYWxlSW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2FsZUluQ29vbGRvd24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjYWxlSW5Db29sZG93biA9IHRoaXMuX3NjYWxlSW5Db29sZG93bjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NjYWxlT3V0Q29vbGRvd24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjYWxlT3V0Q29vbGRvd24gPSB0aGlzLl9zY2FsZU91dENvb2xkb3duO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0VmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldFZhbHVlID0gdGhpcy5fdGFyZ2V0VmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24gPSB0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiA9IHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGlzYWJsZVNjYWxlSW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2FsZUluQ29vbGRvd24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2FsZU91dENvb2xkb3duID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGlzYWJsZVNjYWxlSW4gPSB2YWx1ZS5kaXNhYmxlU2NhbGVJbjtcbiAgICAgIHRoaXMuX3NjYWxlSW5Db29sZG93biA9IHZhbHVlLnNjYWxlSW5Db29sZG93bjtcbiAgICAgIHRoaXMuX3NjYWxlT3V0Q29vbGRvd24gPSB2YWx1ZS5zY2FsZU91dENvb2xkb3duO1xuICAgICAgdGhpcy5fdGFyZ2V0VmFsdWUgPSB2YWx1ZS50YXJnZXRWYWx1ZTtcbiAgICAgIHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBkaXNhYmxlX3NjYWxlX2luIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rpc2FibGVTY2FsZUluPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkaXNhYmxlU2NhbGVJbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkaXNhYmxlX3NjYWxlX2luJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGlzYWJsZVNjYWxlSW4odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Rpc2FibGVTY2FsZUluID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGlzYWJsZVNjYWxlSW4oKSB7XG4gICAgdGhpcy5fZGlzYWJsZVNjYWxlSW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpc2FibGVTY2FsZUluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVTY2FsZUluO1xuICB9XG5cbiAgLy8gc2NhbGVfaW5fY29vbGRvd24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NhbGVJbkNvb2xkb3duPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzY2FsZUluQ29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsZV9pbl9jb29sZG93bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NhbGVJbkNvb2xkb3duKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY2FsZUluQ29vbGRvd24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2FsZUluQ29vbGRvd24oKSB7XG4gICAgdGhpcy5fc2NhbGVJbkNvb2xkb3duID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2FsZUluQ29vbGRvd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGVJbkNvb2xkb3duO1xuICB9XG5cbiAgLy8gc2NhbGVfb3V0X2Nvb2xkb3duIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjYWxlT3V0Q29vbGRvd24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNjYWxlT3V0Q29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsZV9vdXRfY29vbGRvd24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjYWxlT3V0Q29vbGRvd24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NjYWxlT3V0Q29vbGRvd24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2FsZU91dENvb2xkb3duKCkge1xuICAgIHRoaXMuX3NjYWxlT3V0Q29vbGRvd24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjYWxlT3V0Q29vbGRvd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGVPdXRDb29sZG93bjtcbiAgfVxuXG4gIC8vIHRhcmdldF92YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRWYWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfdmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXJnZXRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRWYWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRWYWx1ZTtcbiAgfVxuXG4gIC8vIGN1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24gPSBuZXcgQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3VzdG9taXplZF9tZXRyaWNfc3BlY2lmaWNhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uKHZhbHVlOiBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9tZXRyaWNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiA9IG5ldyBBcHBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwcmVkZWZpbmVkX21ldHJpY19zcGVjaWZpY2F0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24odmFsdWU6IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcHBhdXRvc2NhbGluZ1BvbGljeSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hcHBhdXRvc2NhbGluZ19wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFwcGF1dG9zY2FsaW5nUG9saWN5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBwYXV0b3NjYWxpbmdfcG9saWN5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9wb2xpY3lUeXBlID0gY29uZmlnLnBvbGljeVR5cGU7XG4gICAgdGhpcy5fcmVzb3VyY2VJZCA9IGNvbmZpZy5yZXNvdXJjZUlkO1xuICAgIHRoaXMuX3NjYWxhYmxlRGltZW5zaW9uID0gY29uZmlnLnNjYWxhYmxlRGltZW5zaW9uO1xuICAgIHRoaXMuX3NlcnZpY2VOYW1lc3BhY2UgPSBjb25maWcuc2VydmljZU5hbWVzcGFjZTtcbiAgICB0aGlzLl9zdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fdGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcG9saWN5X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9saWN5VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcG9saWN5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BvbGljeV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwb2xpY3lUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wb2xpY3lUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9saWN5VHlwZSgpIHtcbiAgICB0aGlzLl9wb2xpY3lUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb2xpY3lUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGljeVR5cGU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUlkO1xuICB9XG5cbiAgLy8gc2NhbGFibGVfZGltZW5zaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NjYWxhYmxlRGltZW5zaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzY2FsYWJsZURpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjYWxhYmxlX2RpbWVuc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NhbGFibGVEaW1lbnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjYWxhYmxlRGltZW5zaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjYWxhYmxlRGltZW5zaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxhYmxlRGltZW5zaW9uO1xuICB9XG5cbiAgLy8gc2VydmljZV9uYW1lc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VydmljZU5hbWVzcGFjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfbmFtZXNwYWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlTmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTmFtZXNwYWNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lc3BhY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZU5hbWVzcGFjZTtcbiAgfVxuXG4gIC8vIHN0ZXBfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24gPSBuZXcgQXBwYXV0b3NjYWxpbmdQb2xpY3lTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3RlcF9zY2FsaW5nX3BvbGljeV9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHN0ZXBTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24odmFsdWU6IEFwcGF1dG9zY2FsaW5nUG9saWN5U3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fc3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fc3RlcFNjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0ZXBTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRhcmdldF90cmFja2luZ19zY2FsaW5nX3BvbGljeV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24gPSBuZXcgQXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRhcmdldF90cmFja2luZ19zY2FsaW5nX3BvbGljeV9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24odmFsdWU6IEFwcGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fdGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwb2xpY3lfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcG9saWN5VHlwZSksXG4gICAgICByZXNvdXJjZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVzb3VyY2VJZCksXG4gICAgICBzY2FsYWJsZV9kaW1lbnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NjYWxhYmxlRGltZW5zaW9uKSxcbiAgICAgIHNlcnZpY2VfbmFtZXNwYWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlTmFtZXNwYWNlKSxcbiAgICAgIHN0ZXBfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbjogYXBwYXV0b3NjYWxpbmdQb2xpY3lTdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9zdGVwU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YXJnZXRfdHJhY2tpbmdfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbjogYXBwYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fdGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=