"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppautoscalingScheduledAction = exports.AppautoscalingScheduledActionScalableTargetActionOutputReference = exports.appautoscalingScheduledActionScalableTargetActionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appautoscalingScheduledActionScalableTargetActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_capacity: cdktf.stringToTerraform(struct.maxCapacity),
        min_capacity: cdktf.stringToTerraform(struct.minCapacity),
    };
}
exports.appautoscalingScheduledActionScalableTargetActionToTerraform = appautoscalingScheduledActionScalableTargetActionToTerraform;
/**
 * @stability stable
 */
class AppautoscalingScheduledActionScalableTargetActionOutputReference extends cdktf.ComplexObject {
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
        if (this._maxCapacity) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
        }
    }
    /**
     * @stability stable
     */
    get maxCapacity() {
        return this.getStringAttribute('max_capacity');
    }
    /**
     * @stability stable
     */
    set maxCapacity(value) {
        this._maxCapacity = value;
    }
    /**
     * @stability stable
     */
    resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxCapacityInput() {
        return this._maxCapacity;
    }
    /**
     * @stability stable
     */
    get minCapacity() {
        return this.getStringAttribute('min_capacity');
    }
    /**
     * @stability stable
     */
    set minCapacity(value) {
        this._minCapacity = value;
    }
    /**
     * @stability stable
     */
    resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minCapacityInput() {
        return this._minCapacity;
    }
}
exports.AppautoscalingScheduledActionScalableTargetActionOutputReference = AppautoscalingScheduledActionScalableTargetActionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppautoscalingScheduledActionScalableTargetActionOutputReference[_a] = { fqn: "@cdktf/provider-aws.appautoscaling.AppautoscalingScheduledActionScalableTargetActionOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action}.
 *
 * @stability stable
 */
class AppautoscalingScheduledAction extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appautoscaling_scheduled_action',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // scalable_target_action - computed: false, optional: false, required: true
        this._scalableTargetAction = new AppautoscalingScheduledActionScalableTargetActionOutputReference(this, "scalable_target_action", true);
        this._endTime = config.endTime;
        this._name = config.name;
        this._resourceId = config.resourceId;
        this._scalableDimension = config.scalableDimension;
        this._schedule = config.schedule;
        this._serviceNamespace = config.serviceNamespace;
        this._startTime = config.startTime;
        this._timezone = config.timezone;
        this._scalableTargetAction.internalValue = config.scalableTargetAction;
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
    get endTime() {
        return this.getStringAttribute('end_time');
    }
    /**
     * @stability stable
     */
    set endTime(value) {
        this._endTime = value;
    }
    /**
     * @stability stable
     */
    resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endTimeInput() {
        return this._endTime;
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
    get schedule() {
        return this.getStringAttribute('schedule');
    }
    /**
     * @stability stable
     */
    set schedule(value) {
        this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scheduleInput() {
        return this._schedule;
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
    get startTime() {
        return this.getStringAttribute('start_time');
    }
    /**
     * @stability stable
     */
    set startTime(value) {
        this._startTime = value;
    }
    /**
     * @stability stable
     */
    resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startTimeInput() {
        return this._startTime;
    }
    /**
     * @stability stable
     */
    get timezone() {
        return this.getStringAttribute('timezone');
    }
    /**
     * @stability stable
     */
    set timezone(value) {
        this._timezone = value;
    }
    /**
     * @stability stable
     */
    resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timezoneInput() {
        return this._timezone;
    }
    /**
     * @stability stable
     */
    get scalableTargetAction() {
        return this._scalableTargetAction;
    }
    /**
     * @stability stable
     */
    putScalableTargetAction(value) {
        this._scalableTargetAction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scalableTargetActionInput() {
        return this._scalableTargetAction.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            end_time: cdktf.stringToTerraform(this._endTime),
            name: cdktf.stringToTerraform(this._name),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
            schedule: cdktf.stringToTerraform(this._schedule),
            service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
            start_time: cdktf.stringToTerraform(this._startTime),
            timezone: cdktf.stringToTerraform(this._timezone),
            scalable_target_action: appautoscalingScheduledActionScalableTargetActionToTerraform(this._scalableTargetAction.internalValue),
        };
    }
}
exports.AppautoscalingScheduledAction = AppautoscalingScheduledAction;
_b = JSII_RTTI_SYMBOL_1;
AppautoscalingScheduledAction[_b] = { fqn: "@cdktf/provider-aws.appautoscaling.AppautoscalingScheduledAction", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppautoscalingScheduledAction.tfResourceType = "aws_appautoscaling_scheduled_action";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYXV0b3NjYWxpbmctc2NoZWR1bGVkLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBhdXRvc2NhbGluZy9hcHBhdXRvc2NhbGluZy1zY2hlZHVsZWQtYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBOEIvQixTQUFnQiw0REFBNEQsQ0FBQyxNQUE2SDtJQUN4TSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFURCxvSUFTQzs7OztBQUVELE1BQWEsZ0VBQWlFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJdkcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFX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YUFBYSxDQUFDO0lBQ2xELENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDcEUsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEUsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqRCxzQkFBc0IsRUFBRSw0REFBNEQsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO1NBQy9ILENBQUM7SUFDSixDQUFDOztBQTlMSCxzRUErTEM7OztBQTdMQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDRDQUFjLEdBQVcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXBwYXV0b3NjYWxpbmdTY2hlZHVsZWRBY3Rpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kVGltZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjYWxhYmxlRGltZW5zaW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVkdWxlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VOYW1lc3BhY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXJ0VGltZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZXpvbmU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjYWxhYmxlVGFyZ2V0QWN0aW9uOiBBcHBhdXRvc2NhbGluZ1NjaGVkdWxlZEFjdGlvblNjYWxhYmxlVGFyZ2V0QWN0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBhdXRvc2NhbGluZ1NjaGVkdWxlZEFjdGlvblNjYWxhYmxlVGFyZ2V0QWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhDYXBhY2l0eT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5DYXBhY2l0eT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGF1dG9zY2FsaW5nU2NoZWR1bGVkQWN0aW9uU2NhbGFibGVUYXJnZXRBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBhdXRvc2NhbGluZ1NjaGVkdWxlZEFjdGlvblNjYWxhYmxlVGFyZ2V0QWN0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwYXV0b3NjYWxpbmdTY2hlZHVsZWRBY3Rpb25TY2FsYWJsZVRhcmdldEFjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1heF9jYXBhY2l0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDYXBhY2l0eSksXG4gICAgbWluX2NhcGFjaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbkNhcGFjaXR5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwYXV0b3NjYWxpbmdTY2hlZHVsZWRBY3Rpb25TY2FsYWJsZVRhcmdldEFjdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBhdXRvc2NhbGluZ1NjaGVkdWxlZEFjdGlvblNjYWxhYmxlVGFyZ2V0QWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhDYXBhY2l0eSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4Q2FwYWNpdHkgPSB0aGlzLl9tYXhDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pbkNhcGFjaXR5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5taW5DYXBhY2l0eSA9IHRoaXMuX21pbkNhcGFjaXR5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwYXV0b3NjYWxpbmdTY2hlZHVsZWRBY3Rpb25TY2FsYWJsZVRhcmdldEFjdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21heENhcGFjaXR5ID0gdmFsdWUubWF4Q2FwYWNpdHk7XG4gICAgICB0aGlzLl9taW5DYXBhY2l0eSA9IHZhbHVlLm1pbkNhcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhDYXBhY2l0eT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENhcGFjaXR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heENhcGFjaXR5KCkge1xuICAgIHRoaXMuX21heENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIG1pbl9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5DYXBhY2l0eT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWluQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtaW5fY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pbkNhcGFjaXR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9taW5DYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbkNhcGFjaXR5KCkge1xuICAgIHRoaXMuX21pbkNhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5DYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5DYXBhY2l0eTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQXBwYXV0b3NjYWxpbmdTY2hlZHVsZWRBY3Rpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXBwYXV0b3NjYWxpbmdfc2NoZWR1bGVkX2FjdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcHBhdXRvc2NhbGluZ1NjaGVkdWxlZEFjdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwcGF1dG9zY2FsaW5nX3NjaGVkdWxlZF9hY3Rpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZW5kVGltZSA9IGNvbmZpZy5lbmRUaW1lO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9yZXNvdXJjZUlkID0gY29uZmlnLnJlc291cmNlSWQ7XG4gICAgdGhpcy5fc2NhbGFibGVEaW1lbnNpb24gPSBjb25maWcuc2NhbGFibGVEaW1lbnNpb247XG4gICAgdGhpcy5fc2NoZWR1bGUgPSBjb25maWcuc2NoZWR1bGU7XG4gICAgdGhpcy5fc2VydmljZU5hbWVzcGFjZSA9IGNvbmZpZy5zZXJ2aWNlTmFtZXNwYWNlO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IGNvbmZpZy5zdGFydFRpbWU7XG4gICAgdGhpcy5fdGltZXpvbmUgPSBjb25maWcudGltZXpvbmU7XG4gICAgdGhpcy5fc2NhbGFibGVUYXJnZXRBY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zY2FsYWJsZVRhcmdldEFjdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBlbmRfdGltZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmRUaW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kX3RpbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZFRpbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZFRpbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmRUaW1lKCkge1xuICAgIHRoaXMuX2VuZFRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZFRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kVGltZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlSWQ7XG4gIH1cblxuICAvLyBzY2FsYWJsZV9kaW1lbnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NhbGFibGVEaW1lbnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjYWxhYmxlRGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NhbGFibGVfZGltZW5zaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY2FsYWJsZURpbWVuc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NhbGFibGVEaW1lbnNpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NhbGFibGVEaW1lbnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGFibGVEaW1lbnNpb247XG4gIH1cblxuICAvLyBzY2hlZHVsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zY2hlZHVsZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY2hlZHVsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZWR1bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjaGVkdWxlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlO1xuICB9XG5cbiAgLy8gc2VydmljZV9uYW1lc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VydmljZU5hbWVzcGFjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfbmFtZXNwYWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlTmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTmFtZXNwYWNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lc3BhY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZU5hbWVzcGFjZTtcbiAgfVxuXG4gIC8vIHN0YXJ0X3RpbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhcnRUaW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGFydFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFydF90aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGFydFRpbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXJ0VGltZSgpIHtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXJ0VGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG4gIH1cblxuICAvLyB0aW1lem9uZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lem9uZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGltZXpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aW1lem9uZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZXpvbmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpbWV6b25lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZXpvbmUoKSB7XG4gICAgdGhpcy5fdGltZXpvbmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWV6b25lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWV6b25lO1xuICB9XG5cbiAgLy8gc2NhbGFibGVfdGFyZ2V0X2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zY2FsYWJsZVRhcmdldEFjdGlvbiA9IG5ldyBBcHBhdXRvc2NhbGluZ1NjaGVkdWxlZEFjdGlvblNjYWxhYmxlVGFyZ2V0QWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNjYWxhYmxlX3RhcmdldF9hY3Rpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2NhbGFibGVUYXJnZXRBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxhYmxlVGFyZ2V0QWN0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTY2FsYWJsZVRhcmdldEFjdGlvbih2YWx1ZTogQXBwYXV0b3NjYWxpbmdTY2hlZHVsZWRBY3Rpb25TY2FsYWJsZVRhcmdldEFjdGlvbikge1xuICAgIHRoaXMuX3NjYWxhYmxlVGFyZ2V0QWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NhbGFibGVUYXJnZXRBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGFibGVUYXJnZXRBY3Rpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZW5kX3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZFRpbWUpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICByZXNvdXJjZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVzb3VyY2VJZCksXG4gICAgICBzY2FsYWJsZV9kaW1lbnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NjYWxhYmxlRGltZW5zaW9uKSxcbiAgICAgIHNjaGVkdWxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zY2hlZHVsZSksXG4gICAgICBzZXJ2aWNlX25hbWVzcGFjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmljZU5hbWVzcGFjZSksXG4gICAgICBzdGFydF90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGFydFRpbWUpLFxuICAgICAgdGltZXpvbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RpbWV6b25lKSxcbiAgICAgIHNjYWxhYmxlX3RhcmdldF9hY3Rpb246IGFwcGF1dG9zY2FsaW5nU2NoZWR1bGVkQWN0aW9uU2NhbGFibGVUYXJnZXRBY3Rpb25Ub1RlcnJhZm9ybSh0aGlzLl9zY2FsYWJsZVRhcmdldEFjdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=