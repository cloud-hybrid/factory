"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoscalingplansScalingPlan = exports.autoscalingplansScalingPlanScalingInstructionToTerraform = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform = exports.AutoscalingplansScalingPlanApplicationSourceOutputReference = exports.autoscalingplansScalingPlanApplicationSourceToTerraform = exports.autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform = autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform;
function autoscalingplansScalingPlanApplicationSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudformation_stack_arn: cdktf.stringToTerraform(struct.cloudformationStackArn),
        tag_filter: cdktf.listMapper(autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform)(struct.tagFilter),
    };
}
exports.autoscalingplansScalingPlanApplicationSourceToTerraform = autoscalingplansScalingPlanApplicationSourceToTerraform;
/**
 * @stability stable
 */
class AutoscalingplansScalingPlanApplicationSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudformationStackArn) {
            hasAnyValues = true;
            internalValueResult.cloudformationStackArn = this._cloudformationStackArn;
        }
        if (this._tagFilter) {
            hasAnyValues = true;
            internalValueResult.tagFilter = this._tagFilter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudformationStackArn = undefined;
            this._tagFilter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudformationStackArn = value.cloudformationStackArn;
            this._tagFilter = value.tagFilter;
        }
    }
    /**
     * @stability stable
     */
    get cloudformationStackArn() {
        return this.getStringAttribute('cloudformation_stack_arn');
    }
    /**
     * @stability stable
     */
    set cloudformationStackArn(value) {
        this._cloudformationStackArn = value;
    }
    /**
     * @stability stable
     */
    resetCloudformationStackArn() {
        this._cloudformationStackArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudformationStackArnInput() {
        return this._cloudformationStackArn;
    }
    /**
     * @stability stable
     */
    get tagFilter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tag_filter');
    }
    /**
     * @stability stable
     */
    set tagFilter(value) {
        this._tagFilter = value;
    }
    /**
     * @stability stable
     */
    resetTagFilter() {
        this._tagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagFilterInput() {
        return this._tagFilter;
    }
}
exports.AutoscalingplansScalingPlanApplicationSourceOutputReference = AutoscalingplansScalingPlanApplicationSourceOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanApplicationSourceOutputReference[_a] = { fqn: "@cdktf/provider-aws.autoscalingplans.AutoscalingplansScalingPlanApplicationSourceOutputReference", version: "3.0.1" };
function autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct.dimensions),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform = autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._dimensions) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions;
        }
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dimensions = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimensions = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
        }
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
}
exports.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference = AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference[_b] = { fqn: "@cdktf/provider-aws.autoscalingplans.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_load_metric_type: cdktf.stringToTerraform(struct.predefinedLoadMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform = autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedLoadMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricType = this._predefinedLoadMetricType;
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
            this._predefinedLoadMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedLoadMetricType = value.predefinedLoadMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    /**
     * @stability stable
     */
    get predefinedLoadMetricType() {
        return this.getStringAttribute('predefined_load_metric_type');
    }
    /**
     * @stability stable
     */
    set predefinedLoadMetricType(value) {
        this._predefinedLoadMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedLoadMetricTypeInput() {
        return this._predefinedLoadMetricType;
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
exports.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference = AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference[_c] = { fqn: "@cdktf/provider-aws.autoscalingplans.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct.dimensions),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._dimensions) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions;
        }
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dimensions = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimensions = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
        }
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
}
exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference = AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference[_d] = { fqn: "@cdktf/provider-aws.autoscalingplans.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_scaling_metric_type: cdktf.stringToTerraform(struct.predefinedScalingMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedScalingMetricType) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricType = this._predefinedScalingMetricType;
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
            this._predefinedScalingMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedScalingMetricType = value.predefinedScalingMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    /**
     * @stability stable
     */
    get predefinedScalingMetricType() {
        return this.getStringAttribute('predefined_scaling_metric_type');
    }
    /**
     * @stability stable
     */
    set predefinedScalingMetricType(value) {
        this._predefinedScalingMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get predefinedScalingMetricTypeInput() {
        return this._predefinedScalingMetricType;
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
exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference = AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference[_e] = { fqn: "@cdktf/provider-aws.autoscalingplans.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference", version: "3.0.1" };
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        estimated_instance_warmup: cdktf.numberToTerraform(struct.estimatedInstanceWarmup),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_scaling_metric_specification: autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct.customizedScalingMetricSpecification),
        predefined_scaling_metric_specification: autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct.predefinedScalingMetricSpecification),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform;
function autoscalingplansScalingPlanScalingInstructionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_dynamic_scaling: cdktf.booleanToTerraform(struct.disableDynamicScaling),
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        predictive_scaling_max_capacity_behavior: cdktf.stringToTerraform(struct.predictiveScalingMaxCapacityBehavior),
        predictive_scaling_max_capacity_buffer: cdktf.numberToTerraform(struct.predictiveScalingMaxCapacityBuffer),
        predictive_scaling_mode: cdktf.stringToTerraform(struct.predictiveScalingMode),
        resource_id: cdktf.stringToTerraform(struct.resourceId),
        scalable_dimension: cdktf.stringToTerraform(struct.scalableDimension),
        scaling_policy_update_behavior: cdktf.stringToTerraform(struct.scalingPolicyUpdateBehavior),
        scheduled_action_buffer_time: cdktf.numberToTerraform(struct.scheduledActionBufferTime),
        service_namespace: cdktf.stringToTerraform(struct.serviceNamespace),
        customized_load_metric_specification: autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct.customizedLoadMetricSpecification),
        predefined_load_metric_specification: autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct.predefinedLoadMetricSpecification),
        target_tracking_configuration: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform)(struct.targetTrackingConfiguration),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionToTerraform = autoscalingplansScalingPlanScalingInstructionToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html aws_autoscalingplans_scaling_plan}.
 *
 * @stability stable
 */
class AutoscalingplansScalingPlan extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html aws_autoscalingplans_scaling_plan} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscalingplans_scaling_plan',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // application_source - computed: false, optional: false, required: true
        this._applicationSource = new AutoscalingplansScalingPlanApplicationSourceOutputReference(this, "application_source", true);
        this._name = config.name;
        this._applicationSource.internalValue = config.applicationSource;
        this._scalingInstruction = config.scalingInstruction;
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
    // scaling_plan_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get scalingPlanVersion() {
        return this.getNumberAttribute('scaling_plan_version');
    }
    /**
     * @stability stable
     */
    get applicationSource() {
        return this._applicationSource;
    }
    /**
     * @stability stable
     */
    putApplicationSource(value) {
        this._applicationSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationSourceInput() {
        return this._applicationSource.internalValue;
    }
    /**
     * @stability stable
     */
    get scalingInstruction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('scaling_instruction');
    }
    /**
     * @stability stable
     */
    set scalingInstruction(value) {
        this._scalingInstruction = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scalingInstructionInput() {
        return this._scalingInstruction;
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
            application_source: autoscalingplansScalingPlanApplicationSourceToTerraform(this._applicationSource.internalValue),
            scaling_instruction: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionToTerraform)(this._scalingInstruction),
        };
    }
}
exports.AutoscalingplansScalingPlan = AutoscalingplansScalingPlan;
_f = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlan[_f] = { fqn: "@cdktf/provider-aws.autoscalingplans.AutoscalingplansScalingPlan", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AutoscalingplansScalingPlan.tfResourceType = "aws_autoscalingplans_scaling_plan";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NjYWxpbmdwbGFucy1zY2FsaW5nLXBsYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXV0b3NjYWxpbmdwbGFucy9hdXRvc2NhbGluZ3BsYW5zLXNjYWxpbmctcGxhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWtCL0IsU0FBZ0IsZ0VBQWdFLENBQUMsTUFBOEQ7SUFDN0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQztBQVRELDRJQVNDO0FBU0QsU0FBZ0IsdURBQXVELENBQUMsTUFBbUg7SUFDekwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2pGLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGdFQUFnRSxDQUFDLENBQUMsTUFB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WTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxrQkFBa0IsRUFBRSx1REFBdUQsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1lBQ2xILG1CQUFtQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsd0RBQXdELENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDMUgsQ0FBQztJQUNKLENBQUM7O0FBNUZILGtFQTZGQzs7O0FBM0ZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csMENBQWMsR0FBVyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBsaWNhdGlvblNvdXJjZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NhbGluZ0luc3RydWN0aW9uOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25bXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVGFnRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3VkZm9ybWF0aW9uU3RhY2tBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnRmlsdGVyPzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsb3VkZm9ybWF0aW9uX3N0YWNrX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZGZvcm1hdGlvblN0YWNrQXJuKSxcbiAgICB0YWdfZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVGFnRmlsdGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFnRmlsdGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nsb3VkZm9ybWF0aW9uU3RhY2tBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsb3VkZm9ybWF0aW9uU3RhY2tBcm4gPSB0aGlzLl9jbG91ZGZvcm1hdGlvblN0YWNrQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFnRmlsdGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWdGaWx0ZXIgPSB0aGlzLl90YWdGaWx0ZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nsb3VkZm9ybWF0aW9uU3RhY2tBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWdGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Nsb3VkZm9ybWF0aW9uU3RhY2tBcm4gPSB2YWx1ZS5jbG91ZGZvcm1hdGlvblN0YWNrQXJuO1xuICAgICAgdGhpcy5fdGFnRmlsdGVyID0gdmFsdWUudGFnRmlsdGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsb3VkZm9ybWF0aW9uX3N0YWNrX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbG91ZGZvcm1hdGlvblN0YWNrQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbG91ZGZvcm1hdGlvblN0YWNrQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xvdWRmb3JtYXRpb25fc3RhY2tfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbG91ZGZvcm1hdGlvblN0YWNrQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbG91ZGZvcm1hdGlvblN0YWNrQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWRmb3JtYXRpb25TdGFja0FybigpIHtcbiAgICB0aGlzLl9jbG91ZGZvcm1hdGlvblN0YWNrQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZGZvcm1hdGlvblN0YWNrQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3VkZm9ybWF0aW9uU3RhY2tBcm47XG4gIH1cblxuICAvLyB0YWdfZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ0ZpbHRlcj86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVGFnRmlsdGVyW107IFxuICBwdWJsaWMgZ2V0IHRhZ0ZpbHRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnX2ZpbHRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ0ZpbHRlcih2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJbXSkge1xuICAgIHRoaXMuX3RhZ0ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ0ZpbHRlcigpIHtcbiAgICB0aGlzLl90YWdGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ0ZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdGaWx0ZXI7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGltZW5zaW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRpc3RpYzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGltZW5zaW9uczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgICBtZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNOYW1lKSxcbiAgICBuYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlKSxcbiAgICBzdGF0aXN0aWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljKSxcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kaW1lbnNpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaW1lbnNpb25zID0gdGhpcy5fZGltZW5zaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY05hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldHJpY05hbWUgPSB0aGlzLl9tZXRyaWNOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lc3BhY2UgPSB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0aXN0aWMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRpc3RpYyA9IHRoaXMuX3N0YXRpc3RpYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGltZW5zaW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21ldHJpY05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0aXN0aWMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kaW1lbnNpb25zID0gdmFsdWUuZGltZW5zaW9ucztcbiAgICAgIHRoaXMuX21ldHJpY05hbWUgPSB2YWx1ZS5tZXRyaWNOYW1lO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWUubmFtZXNwYWNlO1xuICAgICAgdGhpcy5fc3RhdGlzdGljID0gdmFsdWUuc3RhdGlzdGljO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGltZW5zaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaW1lbnNpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkaW1lbnNpb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkaW1lbnNpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGltZW5zaW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICB9XG5cbiAgLy8gbWV0cmljX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWV0cmljTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY19uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRyaWNOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRyaWNOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljTmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVzcGFjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lc3BhY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVzcGFjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgfVxuXG4gIC8vIHN0YXRpc3RpYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGF0aXN0aWM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRpc3RpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGlzdGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0aXN0aWMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGlzdGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRpc3RpYztcbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVbml0KCkge1xuICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VMYWJlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByZWRlZmluZWRfbG9hZF9tZXRyaWNfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkTG9hZE1ldHJpY1R5cGUpLFxuICAgIHJlc291cmNlX2xhYmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlTGFiZWwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1R5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWRlZmluZWRMb2FkTWV0cmljVHlwZSA9IHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlTGFiZWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlTGFiZWwgPSB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlID0gdmFsdWUucHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHZhbHVlLnJlc291cmNlTGFiZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9sb2FkX21ldHJpY190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByZWRlZmluZWRMb2FkTWV0cmljVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZGVmaW5lZF9sb2FkX21ldHJpY190eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVkZWZpbmVkTG9hZE1ldHJpY1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTG9hZE1ldHJpY1R5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VMYWJlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2xhYmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VMYWJlbCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGltZW5zaW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRpc3RpYzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGltZW5zaW9uczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgICBtZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNOYW1lKSxcbiAgICBuYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlKSxcbiAgICBzdGF0aXN0aWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljKSxcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kaW1lbnNpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaW1lbnNpb25zID0gdGhpcy5fZGltZW5zaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY05hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldHJpY05hbWUgPSB0aGlzLl9tZXRyaWNOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lc3BhY2UgPSB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0aXN0aWMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRpc3RpYyA9IHRoaXMuX3N0YXRpc3RpYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGltZW5zaW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21ldHJpY05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0aXN0aWMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kaW1lbnNpb25zID0gdmFsdWUuZGltZW5zaW9ucztcbiAgICAgIHRoaXMuX21ldHJpY05hbWUgPSB2YWx1ZS5tZXRyaWNOYW1lO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWUubmFtZXNwYWNlO1xuICAgICAgdGhpcy5fc3RhdGlzdGljID0gdmFsdWUuc3RhdGlzdGljO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGltZW5zaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaW1lbnNpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkaW1lbnNpb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkaW1lbnNpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGltZW5zaW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICB9XG5cbiAgLy8gbWV0cmljX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWV0cmljTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY19uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRyaWNOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRyaWNOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljTmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVzcGFjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lc3BhY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVzcGFjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgfVxuXG4gIC8vIHN0YXRpc3RpYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGF0aXN0aWM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRpc3RpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGlzdGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0aXN0aWMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGlzdGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRpc3RpYztcbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVbml0KCkge1xuICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VMYWJlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGUpLFxuICAgIHJlc291cmNlX2xhYmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlTGFiZWwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWRlZmluZWRTY2FsaW5nTWV0cmljVHlwZSA9IHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlTGFiZWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlTGFiZWwgPSB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlID0gdmFsdWUucHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHZhbHVlLnJlc291cmNlTGFiZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY190eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VMYWJlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2xhYmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VMYWJlbCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlzYWJsZVNjYWxlSW4/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVzdGltYXRlZEluc3RhbmNlV2FybXVwPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjYWxlSW5Db29sZG93bj86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjYWxlT3V0Q29vbGRvd24/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRWYWx1ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbj86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXNhYmxlX3NjYWxlX2luOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kaXNhYmxlU2NhbGVJbiksXG4gICAgZXN0aW1hdGVkX2luc3RhbmNlX3dhcm11cDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCksXG4gICAgc2NhbGVfaW5fY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGVJbkNvb2xkb3duKSxcbiAgICBzY2FsZV9vdXRfY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGVPdXRDb29sZG93biksXG4gICAgdGFyZ2V0X3ZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFZhbHVlKSxcbiAgICBjdXN0b21pemVkX3NjYWxpbmdfbWV0cmljX3NwZWNpZmljYXRpb246IGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgICBwcmVkZWZpbmVkX3NjYWxpbmdfbWV0cmljX3NwZWNpZmljYXRpb246IGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlzYWJsZUR5bmFtaWNTY2FsaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q2FwYWNpdHk6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pbkNhcGFjaXR5OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWRpY3RpdmVTY2FsaW5nTWF4Q2FwYWNpdHlCZWhhdmlvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QnVmZmVyPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWRpY3RpdmVTY2FsaW5nTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2FsYWJsZURpbWVuc2lvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NhbGluZ1BvbGljeVVwZGF0ZUJlaGF2aW9yPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VOYW1lc3BhY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbjogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXNhYmxlX2R5bmFtaWNfc2NhbGluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGlzYWJsZUR5bmFtaWNTY2FsaW5nKSxcbiAgICBtYXhfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q2FwYWNpdHkpLFxuICAgIG1pbl9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5DYXBhY2l0eSksXG4gICAgcHJlZGljdGl2ZV9zY2FsaW5nX21heF9jYXBhY2l0eV9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QmVoYXZpb3IpLFxuICAgIHByZWRpY3RpdmVfc2NhbGluZ19tYXhfY2FwYWNpdHlfYnVmZmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRpY3RpdmVTY2FsaW5nTWF4Q2FwYWNpdHlCdWZmZXIpLFxuICAgIHByZWRpY3RpdmVfc2NhbGluZ19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRpY3RpdmVTY2FsaW5nTW9kZSksXG4gICAgcmVzb3VyY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VJZCksXG4gICAgc2NhbGFibGVfZGltZW5zaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjYWxhYmxlRGltZW5zaW9uKSxcbiAgICBzY2FsaW5nX3BvbGljeV91cGRhdGVfYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGluZ1BvbGljeVVwZGF0ZUJlaGF2aW9yKSxcbiAgICBzY2hlZHVsZWRfYWN0aW9uX2J1ZmZlcl90aW1lOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlZEFjdGlvbkJ1ZmZlclRpbWUpLFxuICAgIHNlcnZpY2VfbmFtZXNwYWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VOYW1lc3BhY2UpLFxuICAgIGN1c3RvbWl6ZWRfbG9hZF9tZXRyaWNfc3BlY2lmaWNhdGlvbjogYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24pLFxuICAgIHByZWRlZmluZWRfbG9hZF9tZXRyaWNfc3BlY2lmaWNhdGlvbjogYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24pLFxuICAgIHRhcmdldF90cmFja2luZ19jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW5cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU291cmNlLmludGVybmFsVmFsdWUgPSBjb25maWcuYXBwbGljYXRpb25Tb3VyY2U7XG4gICAgdGhpcy5fc2NhbGluZ0luc3RydWN0aW9uID0gY29uZmlnLnNjYWxpbmdJbnN0cnVjdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gc2NhbGluZ19wbGFuX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2FsaW5nUGxhblZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsaW5nX3BsYW5fdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uU291cmNlID0gbmV3IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFwcGxpY2F0aW9uX3NvdXJjZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvblNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25Tb3VyY2U7XG4gIH1cbiAgcHVibGljIHB1dEFwcGxpY2F0aW9uU291cmNlKHZhbHVlOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZSkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25Tb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNjYWxpbmdfaW5zdHJ1Y3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NhbGluZ0luc3RydWN0aW9uPzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uW107IFxuICBwdWJsaWMgZ2V0IHNjYWxpbmdJbnN0cnVjdGlvbigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2NhbGluZ19pbnN0cnVjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjYWxpbmdJbnN0cnVjdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uW10pIHtcbiAgICB0aGlzLl9zY2FsaW5nSW5zdHJ1Y3Rpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NhbGluZ0luc3RydWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxpbmdJbnN0cnVjdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBhcHBsaWNhdGlvbl9zb3VyY2U6IGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVG9UZXJyYWZvcm0odGhpcy5fYXBwbGljYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzY2FsaW5nX2luc3RydWN0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRvVGVycmFmb3JtKSh0aGlzLl9zY2FsaW5nSW5zdHJ1Y3Rpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==