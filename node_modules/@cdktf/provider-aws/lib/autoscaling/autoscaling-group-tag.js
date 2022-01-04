"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoscalingGroupTagA = exports.AutoscalingGroupTagTagOutputReference = exports.autoscalingGroupTagTagToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function autoscalingGroupTagTagToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        propagate_at_launch: cdktf.booleanToTerraform(struct.propagateAtLaunch),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.autoscalingGroupTagTagToTerraform = autoscalingGroupTagTagToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupTagTagOutputReference extends cdktf.ComplexObject {
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
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propagateAtLaunch) {
            hasAnyValues = true;
            internalValueResult.propagateAtLaunch = this._propagateAtLaunch;
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
            this._key = undefined;
            this._propagateAtLaunch = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._propagateAtLaunch = value.propagateAtLaunch;
            this._value = value.value;
        }
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
    get propagateAtLaunch() {
        return this.getBooleanAttribute('propagate_at_launch');
    }
    /**
     * @stability stable
     */
    set propagateAtLaunch(value) {
        this._propagateAtLaunch = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get propagateAtLaunchInput() {
        return this._propagateAtLaunch;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getStringAttribute('value');
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
exports.AutoscalingGroupTagTagOutputReference = AutoscalingGroupTagTagOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AutoscalingGroupTagTagOutputReference[_a] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupTagTagOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag}.
 *
 * @stability stable
 */
class AutoscalingGroupTagA extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_group_tag',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // tag - computed: false, optional: false, required: true
        this._tag = new AutoscalingGroupTagTagOutputReference(this, "tag", true);
        this._autoscalingGroupName = config.autoscalingGroupName;
        this._tag.internalValue = config.tag;
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
    get tag() {
        return this._tag;
    }
    /**
     * @stability stable
     */
    putTag(value) {
        this._tag.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagInput() {
        return this._tag.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            tag: autoscalingGroupTagTagToTerraform(this._tag.internalValue),
        };
    }
}
exports.AutoscalingGroupTagA = AutoscalingGroupTagA;
_b = JSII_RTTI_SYMBOL_1;
AutoscalingGroupTagA[_b] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupTagA", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AutoscalingGroupTagA.tfResourceType = "aws_autoscaling_group_tag";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NjYWxpbmctZ3JvdXAtdGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dG9zY2FsaW5nL2F1dG9zY2FsaW5nLWdyb3VwLXRhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWtCL0IsU0FBZ0IsaUNBQWlDLENBQUMsTUFBdUU7SUFDdkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RSxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFWRCw4RUFVQzs7OztBQUVELE1BQWEscUNBQXNDLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJNUUsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixZQUFZ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QkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLEdBQUcsRUFBRSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNoRSxDQUFDO0lBQ0osQ0FBQzs7QUF2RUgsb0RBd0VDOzs7QUF0RUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxtQ0FBYyxHQUFXLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwVGFnQUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvc2NhbGluZ0dyb3VwTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZzogQXV0b3NjYWxpbmdHcm91cFRhZ1RhZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cFRhZ1RhZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvcGFnYXRlQXRMYXVuY2g6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cFRhZ1RhZ1RvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBUYWdUYWdPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwVGFnVGFnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgcHJvcGFnYXRlX2F0X2xhdW5jaDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucHJvcGFnYXRlQXRMYXVuY2gpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cFRhZ1RhZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwVGFnVGFnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9rZXkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleSA9IHRoaXMuX2tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb3BhZ2F0ZUF0TGF1bmNoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9wYWdhdGVBdExhdW5jaCA9IHRoaXMuX3Byb3BhZ2F0ZUF0TGF1bmNoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwVGFnVGFnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvcGFnYXRlQXRMYXVuY2ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWUua2V5O1xuICAgICAgdGhpcy5fcHJvcGFnYXRlQXRMYXVuY2ggPSB2YWx1ZS5wcm9wYWdhdGVBdExhdW5jaDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLy8gcHJvcGFnYXRlX2F0X2xhdW5jaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm9wYWdhdGVBdExhdW5jaD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcHJvcGFnYXRlQXRMYXVuY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJvcGFnYXRlX2F0X2xhdW5jaCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb3BhZ2F0ZUF0TGF1bmNoKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVBdExhdW5jaCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9wYWdhdGVBdExhdW5jaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wYWdhdGVBdExhdW5jaDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwVGFnQSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hdXRvc2NhbGluZ19ncm91cF90YWdcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEF1dG9zY2FsaW5nR3JvdXBUYWdBQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXV0b3NjYWxpbmdfZ3JvdXBfdGFnJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2F1dG9zY2FsaW5nR3JvdXBOYW1lID0gY29uZmlnLmF1dG9zY2FsaW5nR3JvdXBOYW1lO1xuICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRhZztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXV0b3NjYWxpbmdfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRvc2NhbGluZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRvc2NhbGluZ19ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvc2NhbGluZ0dyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gdGFnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhZyA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwVGFnVGFnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRhZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0YWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZztcbiAgfVxuICBwdWJsaWMgcHV0VGFnKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwVGFnVGFnKSB7XG4gICAgdGhpcy5fdGFnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhdXRvc2NhbGluZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRvc2NhbGluZ0dyb3VwTmFtZSksXG4gICAgICB0YWc6IGF1dG9zY2FsaW5nR3JvdXBUYWdUYWdUb1RlcnJhZm9ybSh0aGlzLl90YWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19