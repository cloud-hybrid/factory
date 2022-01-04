"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WafregionalSqlInjectionMatchSet = exports.wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform = exports.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference = exports.wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform = wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform;
/**
 * @stability stable
 */
class WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._data) {
            hasAnyValues = true;
            internalValueResult.data = this._data;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._data = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._data = value.data;
            this._type = value.type;
        }
    }
    /**
     * @stability stable
     */
    get data() {
        return this.getStringAttribute('data');
    }
    /**
     * @stability stable
     */
    set data(value) {
        this._data = value;
    }
    /**
     * @stability stable
     */
    resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataInput() {
        return this._data;
    }
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
    /**
     * @stability stable
     */
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeInput() {
        return this._type;
    }
}
exports.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference = WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference;
_a = JSII_RTTI_SYMBOL_1;
WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference[_a] = { fqn: "@cdktf/provider-aws.wafregional.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference", version: "3.0.1" };
function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform(struct.fieldToMatch),
    };
}
exports.wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform = wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set}.
 *
 * @stability stable
 */
class WafregionalSqlInjectionMatchSet extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_wafregional_sql_injection_match_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._sqlInjectionMatchTuple = config.sqlInjectionMatchTuple;
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
    /**
     * @stability stable
     */
    get sqlInjectionMatchTuple() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('sql_injection_match_tuple');
    }
    /**
     * @stability stable
     */
    set sqlInjectionMatchTuple(value) {
        this._sqlInjectionMatchTuple = value;
    }
    /**
     * @stability stable
     */
    resetSqlInjectionMatchTuple() {
        this._sqlInjectionMatchTuple = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sqlInjectionMatchTupleInput() {
        return this._sqlInjectionMatchTuple;
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
            sql_injection_match_tuple: cdktf.listMapper(wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform)(this._sqlInjectionMatchTuple),
        };
    }
}
exports.WafregionalSqlInjectionMatchSet = WafregionalSqlInjectionMatchSet;
_b = JSII_RTTI_SYMBOL_1;
WafregionalSqlInjectionMatchSet[_b] = { fqn: "@cdktf/provider-aws.wafregional.WafregionalSqlInjectionMatchSet", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
WafregionalSqlInjectionMatchSet.tfResourceType = "aws_wafregional_sql_injection_match_set";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FmcmVnaW9uYWwtc3FsLWluamVjdGlvbi1tYXRjaC1zZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2FmcmVnaW9uYWwvd2FmcmVnaW9uYWwtc3FsLWluamVjdGlvbi1tYXRjaC1zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFnQi9CLFNBQWdCLDRFQUE0RSxDQUFDLE1BQTZKO0lBQ3hQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVRELG9LQVNDOzs7O0FBRUQsTUFBYSxnRkFBaUYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2SCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMs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QUM7WUFDekMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztTQUM1SSxDQUFDO0lBQ0osQ0FBQzs7QUEzRUgsMEVBNEVDOzs7QUExRUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw4Q0FBYyxHQUFXLHlDQUF5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBXYWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNxbEluamVjdGlvbk1hdGNoVHVwbGU/OiBXYWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0U3FsSW5qZWN0aW9uTWF0Y2hUdXBsZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBXYWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0U3FsSW5qZWN0aW9uTWF0Y2hUdXBsZUZpZWxkVG9NYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmcmVnaW9uYWxTcWxJbmplY3Rpb25NYXRjaFNldFNxbEluamVjdGlvbk1hdGNoVHVwbGVGaWVsZFRvTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0U3FsSW5qZWN0aW9uTWF0Y2hUdXBsZUZpZWxkVG9NYXRjaE91dHB1dFJlZmVyZW5jZSB8IFdhZnJlZ2lvbmFsU3FsSW5qZWN0aW9uTWF0Y2hTZXRTcWxJbmplY3Rpb25NYXRjaFR1cGxlRmllbGRUb01hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0U3FsSW5qZWN0aW9uTWF0Y2hUdXBsZUZpZWxkVG9NYXRjaE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBXYWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0U3FsSW5qZWN0aW9uTWF0Y2hUdXBsZUZpZWxkVG9NYXRjaCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIGlmICh0aGlzLl90eXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnJlZ2lvbmFsU3FsSW5qZWN0aW9uTWF0Y2hTZXRTcWxJbmplY3Rpb25NYXRjaFR1cGxlRmllbGRUb01hdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZS5kYXRhO1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYXRhPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhdGEoKSB7XG4gICAgdGhpcy5fZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmcmVnaW9uYWxTcWxJbmplY3Rpb25NYXRjaFNldFNxbEluamVjdGlvbk1hdGNoVHVwbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGV4dFRyYW5zZm9ybWF0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpZWxkVG9NYXRjaDogV2FmcmVnaW9uYWxTcWxJbmplY3Rpb25NYXRjaFNldFNxbEluamVjdGlvbk1hdGNoVHVwbGVGaWVsZFRvTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0U3FsSW5qZWN0aW9uTWF0Y2hUdXBsZVRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnJlZ2lvbmFsU3FsSW5qZWN0aW9uTWF0Y2hTZXRTcWxJbmplY3Rpb25NYXRjaFR1cGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGV4dF90cmFuc2Zvcm1hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50ZXh0VHJhbnNmb3JtYXRpb24pLFxuICAgIGZpZWxkX3RvX21hdGNoOiB3YWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0U3FsSW5qZWN0aW9uTWF0Y2hUdXBsZUZpZWxkVG9NYXRjaFRvVGVycmFmb3JtKHN0cnVjdCEuZmllbGRUb01hdGNoKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFdhZnJlZ2lvbmFsU3FsSW5qZWN0aW9uTWF0Y2hTZXQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfd2FmcmVnaW9uYWxfc3FsX2luamVjdGlvbl9tYXRjaF9zZXRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFdhZnJlZ2lvbmFsU3FsSW5qZWN0aW9uTWF0Y2hTZXRDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c193YWZyZWdpb25hbF9zcWxfaW5qZWN0aW9uX21hdGNoX3NldCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fc3FsSW5qZWN0aW9uTWF0Y2hUdXBsZSA9IGNvbmZpZy5zcWxJbmplY3Rpb25NYXRjaFR1cGxlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBzcWxfaW5qZWN0aW9uX21hdGNoX3R1cGxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NxbEluamVjdGlvbk1hdGNoVHVwbGU/OiBXYWZyZWdpb25hbFNxbEluamVjdGlvbk1hdGNoU2V0U3FsSW5qZWN0aW9uTWF0Y2hUdXBsZVtdOyBcbiAgcHVibGljIGdldCBzcWxJbmplY3Rpb25NYXRjaFR1cGxlKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcWxfaW5qZWN0aW9uX21hdGNoX3R1cGxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3FsSW5qZWN0aW9uTWF0Y2hUdXBsZSh2YWx1ZTogV2FmcmVnaW9uYWxTcWxJbmplY3Rpb25NYXRjaFNldFNxbEluamVjdGlvbk1hdGNoVHVwbGVbXSkge1xuICAgIHRoaXMuX3NxbEluamVjdGlvbk1hdGNoVHVwbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcWxJbmplY3Rpb25NYXRjaFR1cGxlKCkge1xuICAgIHRoaXMuX3NxbEluamVjdGlvbk1hdGNoVHVwbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNxbEluamVjdGlvbk1hdGNoVHVwbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3FsSW5qZWN0aW9uTWF0Y2hUdXBsZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBzcWxfaW5qZWN0aW9uX21hdGNoX3R1cGxlOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnJlZ2lvbmFsU3FsSW5qZWN0aW9uTWF0Y2hTZXRTcWxJbmplY3Rpb25NYXRjaFR1cGxlVG9UZXJyYWZvcm0pKHRoaXMuX3NxbEluamVjdGlvbk1hdGNoVHVwbGUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==