"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudwatchMetricAlarm = exports.cloudwatchMetricAlarmMetricQueryToTerraform = exports.CloudwatchMetricAlarmMetricQueryMetricOutputReference = exports.cloudwatchMetricAlarmMetricQueryMetricToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct) {
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
        period: cdktf.numberToTerraform(struct.period),
        stat: cdktf.stringToTerraform(struct.stat),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
exports.cloudwatchMetricAlarmMetricQueryMetricToTerraform = cloudwatchMetricAlarmMetricQueryMetricToTerraform;
/**
 * @stability stable
 */
class CloudwatchMetricAlarmMetricQueryMetricOutputReference extends cdktf.ComplexObject {
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
        if (this._period) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._stat) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
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
            this._period = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimensions = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._period = value.period;
            this._stat = value.stat;
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
    /**
     * @stability stable
     */
    resetNamespace() {
        this._namespace = undefined;
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
    get period() {
        return this.getNumberAttribute('period');
    }
    /**
     * @stability stable
     */
    set period(value) {
        this._period = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get periodInput() {
        return this._period;
    }
    /**
     * @stability stable
     */
    get stat() {
        return this.getStringAttribute('stat');
    }
    /**
     * @stability stable
     */
    set stat(value) {
        this._stat = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statInput() {
        return this._stat;
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
exports.CloudwatchMetricAlarmMetricQueryMetricOutputReference = CloudwatchMetricAlarmMetricQueryMetricOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudwatchMetricAlarmMetricQueryMetricOutputReference[_a] = { fqn: "@cdktf/provider-aws.cloudwatch.CloudwatchMetricAlarmMetricQueryMetricOutputReference", version: "3.0.1" };
function cloudwatchMetricAlarmMetricQueryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        expression: cdktf.stringToTerraform(struct.expression),
        id: cdktf.stringToTerraform(struct.id),
        label: cdktf.stringToTerraform(struct.label),
        return_data: cdktf.booleanToTerraform(struct.returnData),
        metric: cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct.metric),
    };
}
exports.cloudwatchMetricAlarmMetricQueryToTerraform = cloudwatchMetricAlarmMetricQueryToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm}.
 *
 * @stability stable
 */
class CloudwatchMetricAlarm extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudwatch_metric_alarm',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._actionsEnabled = config.actionsEnabled;
        this._alarmActions = config.alarmActions;
        this._alarmDescription = config.alarmDescription;
        this._alarmName = config.alarmName;
        this._comparisonOperator = config.comparisonOperator;
        this._datapointsToAlarm = config.datapointsToAlarm;
        this._dimensions = config.dimensions;
        this._evaluateLowSampleCountPercentiles = config.evaluateLowSampleCountPercentiles;
        this._evaluationPeriods = config.evaluationPeriods;
        this._extendedStatistic = config.extendedStatistic;
        this._insufficientDataActions = config.insufficientDataActions;
        this._metricName = config.metricName;
        this._namespace = config.namespace;
        this._okActions = config.okActions;
        this._period = config.period;
        this._statistic = config.statistic;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._threshold = config.threshold;
        this._thresholdMetricId = config.thresholdMetricId;
        this._treatMissingData = config.treatMissingData;
        this._unit = config.unit;
        this._metricQuery = config.metricQuery;
    }
    /**
     * @stability stable
     */
    get actionsEnabled() {
        return this.getBooleanAttribute('actions_enabled');
    }
    /**
     * @stability stable
     */
    set actionsEnabled(value) {
        this._actionsEnabled = value;
    }
    /**
     * @stability stable
     */
    resetActionsEnabled() {
        this._actionsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionsEnabledInput() {
        return this._actionsEnabled;
    }
    /**
     * @stability stable
     */
    get alarmActions() {
        return this.getListAttribute('alarm_actions');
    }
    /**
     * @stability stable
     */
    set alarmActions(value) {
        this._alarmActions = value;
    }
    /**
     * @stability stable
     */
    resetAlarmActions() {
        this._alarmActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get alarmActionsInput() {
        return this._alarmActions;
    }
    /**
     * @stability stable
     */
    get alarmDescription() {
        return this.getStringAttribute('alarm_description');
    }
    /**
     * @stability stable
     */
    set alarmDescription(value) {
        this._alarmDescription = value;
    }
    /**
     * @stability stable
     */
    resetAlarmDescription() {
        this._alarmDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get alarmDescriptionInput() {
        return this._alarmDescription;
    }
    /**
     * @stability stable
     */
    get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    /**
     * @stability stable
     */
    set alarmName(value) {
        this._alarmName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get alarmNameInput() {
        return this._alarmName;
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
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    /**
     * @stability stable
     */
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    /**
     * @stability stable
     */
    get datapointsToAlarm() {
        return this.getNumberAttribute('datapoints_to_alarm');
    }
    /**
     * @stability stable
     */
    set datapointsToAlarm(value) {
        this._datapointsToAlarm = value;
    }
    /**
     * @stability stable
     */
    resetDatapointsToAlarm() {
        this._datapointsToAlarm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get datapointsToAlarmInput() {
        return this._datapointsToAlarm;
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
    get evaluateLowSampleCountPercentiles() {
        return this.getStringAttribute('evaluate_low_sample_count_percentiles');
    }
    /**
     * @stability stable
     */
    set evaluateLowSampleCountPercentiles(value) {
        this._evaluateLowSampleCountPercentiles = value;
    }
    /**
     * @stability stable
     */
    resetEvaluateLowSampleCountPercentiles() {
        this._evaluateLowSampleCountPercentiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get evaluateLowSampleCountPercentilesInput() {
        return this._evaluateLowSampleCountPercentiles;
    }
    /**
     * @stability stable
     */
    get evaluationPeriods() {
        return this.getNumberAttribute('evaluation_periods');
    }
    /**
     * @stability stable
     */
    set evaluationPeriods(value) {
        this._evaluationPeriods = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get evaluationPeriodsInput() {
        return this._evaluationPeriods;
    }
    /**
     * @stability stable
     */
    get extendedStatistic() {
        return this.getStringAttribute('extended_statistic');
    }
    /**
     * @stability stable
     */
    set extendedStatistic(value) {
        this._extendedStatistic = value;
    }
    /**
     * @stability stable
     */
    resetExtendedStatistic() {
        this._extendedStatistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get extendedStatisticInput() {
        return this._extendedStatistic;
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
    get insufficientDataActions() {
        return this.getListAttribute('insufficient_data_actions');
    }
    /**
     * @stability stable
     */
    set insufficientDataActions(value) {
        this._insufficientDataActions = value;
    }
    /**
     * @stability stable
     */
    resetInsufficientDataActions() {
        this._insufficientDataActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get insufficientDataActionsInput() {
        return this._insufficientDataActions;
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
    /**
     * @stability stable
     */
    resetMetricName() {
        this._metricName = undefined;
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
    /**
     * @stability stable
     */
    resetNamespace() {
        this._namespace = undefined;
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
    get okActions() {
        return this.getListAttribute('ok_actions');
    }
    /**
     * @stability stable
     */
    set okActions(value) {
        this._okActions = value;
    }
    /**
     * @stability stable
     */
    resetOkActions() {
        this._okActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get okActionsInput() {
        return this._okActions;
    }
    /**
     * @stability stable
     */
    get period() {
        return this.getNumberAttribute('period');
    }
    /**
     * @stability stable
     */
    set period(value) {
        this._period = value;
    }
    /**
     * @stability stable
     */
    resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get periodInput() {
        return this._period;
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
    /**
     * @stability stable
     */
    resetStatistic() {
        this._statistic = undefined;
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
    get threshold() {
        return this.getNumberAttribute('threshold');
    }
    /**
     * @stability stable
     */
    set threshold(value) {
        this._threshold = value;
    }
    /**
     * @stability stable
     */
    resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get thresholdInput() {
        return this._threshold;
    }
    /**
     * @stability stable
     */
    get thresholdMetricId() {
        return this.getStringAttribute('threshold_metric_id');
    }
    /**
     * @stability stable
     */
    set thresholdMetricId(value) {
        this._thresholdMetricId = value;
    }
    /**
     * @stability stable
     */
    resetThresholdMetricId() {
        this._thresholdMetricId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get thresholdMetricIdInput() {
        return this._thresholdMetricId;
    }
    /**
     * @stability stable
     */
    get treatMissingData() {
        return this.getStringAttribute('treat_missing_data');
    }
    /**
     * @stability stable
     */
    set treatMissingData(value) {
        this._treatMissingData = value;
    }
    /**
     * @stability stable
     */
    resetTreatMissingData() {
        this._treatMissingData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get treatMissingDataInput() {
        return this._treatMissingData;
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
    get metricQuery() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('metric_query');
    }
    /**
     * @stability stable
     */
    set metricQuery(value) {
        this._metricQuery = value;
    }
    /**
     * @stability stable
     */
    resetMetricQuery() {
        this._metricQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metricQueryInput() {
        return this._metricQuery;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
            alarm_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._alarmActions),
            alarm_description: cdktf.stringToTerraform(this._alarmDescription),
            alarm_name: cdktf.stringToTerraform(this._alarmName),
            comparison_operator: cdktf.stringToTerraform(this._comparisonOperator),
            datapoints_to_alarm: cdktf.numberToTerraform(this._datapointsToAlarm),
            dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(this._dimensions),
            evaluate_low_sample_count_percentiles: cdktf.stringToTerraform(this._evaluateLowSampleCountPercentiles),
            evaluation_periods: cdktf.numberToTerraform(this._evaluationPeriods),
            extended_statistic: cdktf.stringToTerraform(this._extendedStatistic),
            insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._insufficientDataActions),
            metric_name: cdktf.stringToTerraform(this._metricName),
            namespace: cdktf.stringToTerraform(this._namespace),
            ok_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._okActions),
            period: cdktf.numberToTerraform(this._period),
            statistic: cdktf.stringToTerraform(this._statistic),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            threshold: cdktf.numberToTerraform(this._threshold),
            threshold_metric_id: cdktf.stringToTerraform(this._thresholdMetricId),
            treat_missing_data: cdktf.stringToTerraform(this._treatMissingData),
            unit: cdktf.stringToTerraform(this._unit),
            metric_query: cdktf.listMapper(cloudwatchMetricAlarmMetricQueryToTerraform)(this._metricQuery),
        };
    }
}
exports.CloudwatchMetricAlarm = CloudwatchMetricAlarm;
_b = JSII_RTTI_SYMBOL_1;
CloudwatchMetricAlarm[_b] = { fqn: "@cdktf/provider-aws.cloudwatch.CloudwatchMetricAlarm", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CloudwatchMetricAlarm.tfResourceType = "aws_cloudwatch_metric_alarm";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWR3YXRjaC1tZXRyaWMtYWxhcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWR3YXRjaC9jbG91ZHdhdGNoLW1ldHJpYy1hbGFybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWtFL0IsU0FBZ0IsaURBQWlELENBQUMsTUFBdUc7SUFDdkssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN0RSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3JELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBYkQsOEdBYUM7Ozs7QUFFRCxNQUFhLHFEQUFzRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTVGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxr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QUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMvRixDQUFDO0lBQ0osQ0FBQzs7QUF2Y0gsc0RBd2NDOzs7QUF0Y0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxvQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb25zRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxhcm1BY3Rpb25zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxhcm1EZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxhcm1OYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb25PcGVyYXRvcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhcG9pbnRzVG9BbGFybT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGltZW5zaW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXZhbHVhdGlvblBlcmlvZHM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4dGVuZGVkU3RhdGlzdGljPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN1ZmZpY2llbnREYXRhQWN0aW9ucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldHJpY05hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9rQWN0aW9ucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGlzdGljPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aHJlc2hvbGQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocmVzaG9sZE1ldHJpY0lkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJlYXRNaXNzaW5nRGF0YT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNRdWVyeT86IENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5W107XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGltZW5zaW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwZXJpb2Q6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlNZXRyaWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpY091dHB1dFJlZmVyZW5jZSB8IENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGltZW5zaW9uczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgICBtZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNOYW1lKSxcbiAgICBuYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlKSxcbiAgICBwZXJpb2Q6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGVyaW9kKSxcbiAgICBzdGF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXQpLFxuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kaW1lbnNpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaW1lbnNpb25zID0gdGhpcy5fZGltZW5zaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY05hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldHJpY05hbWUgPSB0aGlzLl9tZXRyaWNOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lc3BhY2UgPSB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZXJpb2QpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBlcmlvZCA9IHRoaXMuX3BlcmlvZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXQgPSB0aGlzLl9zdGF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVyaW9kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB2YWx1ZS5kaW1lbnNpb25zO1xuICAgICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlLm1ldHJpY05hbWU7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZS5uYW1lc3BhY2U7XG4gICAgICB0aGlzLl9wZXJpb2QgPSB2YWx1ZS5wZXJpb2Q7XG4gICAgICB0aGlzLl9zdGF0ID0gdmFsdWUuc3RhdDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGRpbWVuc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGltZW5zaW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9ucygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGltZW5zaW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpbWVuc2lvbnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaW1lbnNpb25zKCkge1xuICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9ucztcbiAgfVxuXG4gIC8vIG1ldHJpY19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21ldHJpY05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY05hbWU7XG4gIH1cblxuICAvLyBuYW1lc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZXNwYWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lc3BhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVzcGFjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZXNwYWNlKCkge1xuICAgIHRoaXMuX25hbWVzcGFjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgfVxuXG4gIC8vIHBlcmlvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wZXJpb2Q/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBlcmlvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGVyaW9kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wZXJpb2QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGVyaW9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmlvZDtcbiAgfVxuXG4gIC8vIHN0YXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0O1xuICB9XG5cbiAgLy8gdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91bml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVuaXQoKSB7XG4gICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjb3VudElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleHByZXNzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFiZWw/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmV0dXJuRGF0YT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWM/OiBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5VG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY291bnRJZCksXG4gICAgZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHByZXNzaW9uKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgbGFiZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFiZWwpLFxuICAgIHJldHVybl9kYXRhOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXR1cm5EYXRhKSxcbiAgICBtZXRyaWM6IGNsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWMpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENsb3Vkd2F0Y2hNZXRyaWNBbGFybUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FjdGlvbnNFbmFibGVkID0gY29uZmlnLmFjdGlvbnNFbmFibGVkO1xuICAgIHRoaXMuX2FsYXJtQWN0aW9ucyA9IGNvbmZpZy5hbGFybUFjdGlvbnM7XG4gICAgdGhpcy5fYWxhcm1EZXNjcmlwdGlvbiA9IGNvbmZpZy5hbGFybURlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2FsYXJtTmFtZSA9IGNvbmZpZy5hbGFybU5hbWU7XG4gICAgdGhpcy5fY29tcGFyaXNvbk9wZXJhdG9yID0gY29uZmlnLmNvbXBhcmlzb25PcGVyYXRvcjtcbiAgICB0aGlzLl9kYXRhcG9pbnRzVG9BbGFybSA9IGNvbmZpZy5kYXRhcG9pbnRzVG9BbGFybTtcbiAgICB0aGlzLl9kaW1lbnNpb25zID0gY29uZmlnLmRpbWVuc2lvbnM7XG4gICAgdGhpcy5fZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzID0gY29uZmlnLmV2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlcztcbiAgICB0aGlzLl9ldmFsdWF0aW9uUGVyaW9kcyA9IGNvbmZpZy5ldmFsdWF0aW9uUGVyaW9kcztcbiAgICB0aGlzLl9leHRlbmRlZFN0YXRpc3RpYyA9IGNvbmZpZy5leHRlbmRlZFN0YXRpc3RpYztcbiAgICB0aGlzLl9pbnN1ZmZpY2llbnREYXRhQWN0aW9ucyA9IGNvbmZpZy5pbnN1ZmZpY2llbnREYXRhQWN0aW9ucztcbiAgICB0aGlzLl9tZXRyaWNOYW1lID0gY29uZmlnLm1ldHJpY05hbWU7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gY29uZmlnLm5hbWVzcGFjZTtcbiAgICB0aGlzLl9va0FjdGlvbnMgPSBjb25maWcub2tBY3Rpb25zO1xuICAgIHRoaXMuX3BlcmlvZCA9IGNvbmZpZy5wZXJpb2Q7XG4gICAgdGhpcy5fc3RhdGlzdGljID0gY29uZmlnLnN0YXRpc3RpYztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQ7XG4gICAgdGhpcy5fdGhyZXNob2xkTWV0cmljSWQgPSBjb25maWcudGhyZXNob2xkTWV0cmljSWQ7XG4gICAgdGhpcy5fdHJlYXRNaXNzaW5nRGF0YSA9IGNvbmZpZy50cmVhdE1pc3NpbmdEYXRhO1xuICAgIHRoaXMuX3VuaXQgPSBjb25maWcudW5pdDtcbiAgICB0aGlzLl9tZXRyaWNRdWVyeSA9IGNvbmZpZy5tZXRyaWNRdWVyeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWN0aW9uc19lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjdGlvbnNFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhY3Rpb25zRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhY3Rpb25zX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb25zRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWN0aW9uc0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY3Rpb25zRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9hY3Rpb25zRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uc0VuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uc0VuYWJsZWQ7XG4gIH1cblxuICAvLyBhbGFybV9hY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsYXJtQWN0aW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhbGFybUFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxhcm1fYWN0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxhcm1BY3Rpb25zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FsYXJtQWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsYXJtQWN0aW9ucygpIHtcbiAgICB0aGlzLl9hbGFybUFjdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsYXJtQWN0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGFybUFjdGlvbnM7XG4gIH1cblxuICAvLyBhbGFybV9kZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGFybURlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbGFybURlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxhcm1fZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsYXJtRGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FsYXJtRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGFybURlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2FsYXJtRGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsYXJtRGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxhcm1EZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGFsYXJtX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWxhcm1OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbGFybU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGFybV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGFybU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FsYXJtTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGFybU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxhcm1OYW1lO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjb21wYXJpc29uX29wZXJhdG9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbXBhcmlzb25PcGVyYXRvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGFyaXNvbk9wZXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcGFyaXNvbl9vcGVyYXRvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcGFyaXNvbk9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wYXJpc29uT3BlcmF0b3IgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcGFyaXNvbk9wZXJhdG9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmlzb25PcGVyYXRvcjtcbiAgfVxuXG4gIC8vIGRhdGFwb2ludHNfdG9fYWxhcm0gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YXBvaW50c1RvQWxhcm0/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRhdGFwb2ludHNUb0FsYXJtKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGF0YXBvaW50c190b19hbGFybScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YXBvaW50c1RvQWxhcm0odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RhdGFwb2ludHNUb0FsYXJtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0YXBvaW50c1RvQWxhcm0oKSB7XG4gICAgdGhpcy5fZGF0YXBvaW50c1RvQWxhcm0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFwb2ludHNUb0FsYXJtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFwb2ludHNUb0FsYXJtO1xuICB9XG5cbiAgLy8gZGltZW5zaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaW1lbnNpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkaW1lbnNpb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkaW1lbnNpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGltZW5zaW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICB9XG5cbiAgLy8gZXZhbHVhdGVfbG93X3NhbXBsZV9jb3VudF9wZXJjZW50aWxlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXZhbHVhdGVfbG93X3NhbXBsZV9jb3VudF9wZXJjZW50aWxlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ldmFsdWF0ZUxvd1NhbXBsZUNvdW50UGVyY2VudGlsZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFdmFsdWF0ZUxvd1NhbXBsZUNvdW50UGVyY2VudGlsZXMoKSB7XG4gICAgdGhpcy5fZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBldmFsdWF0ZUxvd1NhbXBsZUNvdW50UGVyY2VudGlsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzO1xuICB9XG5cbiAgLy8gZXZhbHVhdGlvbl9wZXJpb2RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2V2YWx1YXRpb25QZXJpb2RzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBldmFsdWF0aW9uUGVyaW9kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2V2YWx1YXRpb25fcGVyaW9kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXZhbHVhdGlvblBlcmlvZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2V2YWx1YXRpb25QZXJpb2RzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV2YWx1YXRpb25QZXJpb2RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2YWx1YXRpb25QZXJpb2RzO1xuICB9XG5cbiAgLy8gZXh0ZW5kZWRfc3RhdGlzdGljIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4dGVuZGVkU3RhdGlzdGljPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBleHRlbmRlZFN0YXRpc3RpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4dGVuZGVkX3N0YXRpc3RpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXh0ZW5kZWRTdGF0aXN0aWModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4dGVuZGVkU3RhdGlzdGljID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXh0ZW5kZWRTdGF0aXN0aWMoKSB7XG4gICAgdGhpcy5fZXh0ZW5kZWRTdGF0aXN0aWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dGVuZGVkU3RhdGlzdGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZGVkU3RhdGlzdGljO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3VmZmljaWVudF9kYXRhX2FjdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdWZmaWNpZW50RGF0YUFjdGlvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaW5zdWZmaWNpZW50RGF0YUFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaW5zdWZmaWNpZW50X2RhdGFfYWN0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdWZmaWNpZW50RGF0YUFjdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faW5zdWZmaWNpZW50RGF0YUFjdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN1ZmZpY2llbnREYXRhQWN0aW9ucygpIHtcbiAgICB0aGlzLl9pbnN1ZmZpY2llbnREYXRhQWN0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdWZmaWNpZW50RGF0YUFjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdWZmaWNpZW50RGF0YUFjdGlvbnM7XG4gIH1cblxuICAvLyBtZXRyaWNfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRyaWNOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXRyaWNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldHJpY05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21ldHJpY05hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNOYW1lKCkge1xuICAgIHRoaXMuX21ldHJpY05hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljTmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVzcGFjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lc3BhY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVzcGFjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lc3BhY2UoKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lc3BhY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICB9XG5cbiAgLy8gb2tfYWN0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9va0FjdGlvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgb2tBY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ29rX2FjdGlvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9rQWN0aW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9va0FjdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPa0FjdGlvbnMoKSB7XG4gICAgdGhpcy5fb2tBY3Rpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBva0FjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2tBY3Rpb25zO1xuICB9XG5cbiAgLy8gcGVyaW9kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BlcmlvZD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcGVyaW9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncGVyaW9kJyk7XG4gIH1cbiAgcHVibGljIHNldCBwZXJpb2QodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BlcmlvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlcmlvZCgpIHtcbiAgICB0aGlzLl9wZXJpb2QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlcmlvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJpb2Q7XG4gIH1cblxuICAvLyBzdGF0aXN0aWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGlzdGljPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0aXN0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0aXN0aWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRpc3RpYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdGlzdGljID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdGlzdGljKCkge1xuICAgIHRoaXMuX3N0YXRpc3RpYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGlzdGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRpc3RpYztcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0aHJlc2hvbGQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhyZXNob2xkPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aHJlc2hvbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyZXNob2xkKCkge1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhyZXNob2xkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgfVxuXG4gIC8vIHRocmVzaG9sZF9tZXRyaWNfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhyZXNob2xkTWV0cmljSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRocmVzaG9sZE1ldHJpY0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGhyZXNob2xkX21ldHJpY19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyZXNob2xkTWV0cmljSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RocmVzaG9sZE1ldHJpY0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyZXNob2xkTWV0cmljSWQoKSB7XG4gICAgdGhpcy5fdGhyZXNob2xkTWV0cmljSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocmVzaG9sZE1ldHJpY0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZE1ldHJpY0lkO1xuICB9XG5cbiAgLy8gdHJlYXRfbWlzc2luZ19kYXRhIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RyZWF0TWlzc2luZ0RhdGE/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRyZWF0TWlzc2luZ0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmVhdF9taXNzaW5nX2RhdGEnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyZWF0TWlzc2luZ0RhdGEodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyZWF0TWlzc2luZ0RhdGEgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcmVhdE1pc3NpbmdEYXRhKCkge1xuICAgIHRoaXMuX3RyZWF0TWlzc2luZ0RhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyZWF0TWlzc2luZ0RhdGFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJlYXRNaXNzaW5nRGF0YTtcbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVbml0KCkge1xuICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIG1ldHJpY19xdWVyeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRyaWNRdWVyeT86IENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5W107IFxuICBwdWJsaWMgZ2V0IG1ldHJpY1F1ZXJ5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtZXRyaWNfcXVlcnknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRyaWNRdWVyeSh2YWx1ZTogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlbXSkge1xuICAgIHRoaXMuX21ldHJpY1F1ZXJ5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0cmljUXVlcnkoKSB7XG4gICAgdGhpcy5fbWV0cmljUXVlcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY1F1ZXJ5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY1F1ZXJ5O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpb25zX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hY3Rpb25zRW5hYmxlZCksXG4gICAgICBhbGFybV9hY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9hbGFybUFjdGlvbnMpLFxuICAgICAgYWxhcm1fZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FsYXJtRGVzY3JpcHRpb24pLFxuICAgICAgYWxhcm1fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWxhcm1OYW1lKSxcbiAgICAgIGNvbXBhcmlzb25fb3BlcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbXBhcmlzb25PcGVyYXRvciksXG4gICAgICBkYXRhcG9pbnRzX3RvX2FsYXJtOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kYXRhcG9pbnRzVG9BbGFybSksXG4gICAgICBkaW1lbnNpb25zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl9kaW1lbnNpb25zKSxcbiAgICAgIGV2YWx1YXRlX2xvd19zYW1wbGVfY291bnRfcGVyY2VudGlsZXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlcyksXG4gICAgICBldmFsdWF0aW9uX3BlcmlvZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2V2YWx1YXRpb25QZXJpb2RzKSxcbiAgICAgIGV4dGVuZGVkX3N0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXh0ZW5kZWRTdGF0aXN0aWMpLFxuICAgICAgaW5zdWZmaWNpZW50X2RhdGFfYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5faW5zdWZmaWNpZW50RGF0YUFjdGlvbnMpLFxuICAgICAgbWV0cmljX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21ldHJpY05hbWUpLFxuICAgICAgbmFtZXNwYWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lc3BhY2UpLFxuICAgICAgb2tfYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fb2tBY3Rpb25zKSxcbiAgICAgIHBlcmlvZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcGVyaW9kKSxcbiAgICAgIHN0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RhdGlzdGljKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGhyZXNob2xkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90aHJlc2hvbGQpLFxuICAgICAgdGhyZXNob2xkX21ldHJpY19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGhyZXNob2xkTWV0cmljSWQpLFxuICAgICAgdHJlYXRfbWlzc2luZ19kYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90cmVhdE1pc3NpbmdEYXRhKSxcbiAgICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VuaXQpLFxuICAgICAgbWV0cmljX3F1ZXJ5OiBjZGt0Zi5saXN0TWFwcGVyKGNsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5VG9UZXJyYWZvcm0pKHRoaXMuX21ldHJpY1F1ZXJ5KSxcbiAgICB9O1xuICB9XG59XG4iXX0=