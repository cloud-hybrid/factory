"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsPricingProduct = exports.dataAwsPricingProductFiltersToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function dataAwsPricingProductFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field: cdktf.stringToTerraform(struct.field),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsPricingProductFiltersToTerraform = dataAwsPricingProductFiltersToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html aws_pricing_product}.
 *
 * @stability stable
 */
class DataAwsPricingProduct extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html aws_pricing_product} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_pricing_product',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._serviceCode = config.serviceCode;
        this._filters = config.filters;
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
    // result - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get result() {
        return this.getStringAttribute('result');
    }
    /**
     * @stability stable
     */
    get serviceCode() {
        return this.getStringAttribute('service_code');
    }
    /**
     * @stability stable
     */
    set serviceCode(value) {
        this._serviceCode = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceCodeInput() {
        return this._serviceCode;
    }
    /**
     * @stability stable
     */
    get filters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('filters');
    }
    /**
     * @stability stable
     */
    set filters(value) {
        this._filters = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get filtersInput() {
        return this._filters;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            service_code: cdktf.stringToTerraform(this._serviceCode),
            filters: cdktf.listMapper(dataAwsPricingProductFiltersToTerraform)(this._filters),
        };
    }
}
exports.DataAwsPricingProduct = DataAwsPricingProduct;
_a = JSII_RTTI_SYMBOL_1;
DataAwsPricingProduct[_a] = { fqn: "@cdktf/provider-aws.pricing.DataAwsPricingProduct", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsPricingProduct.tfResourceType = "aws_pricing_product";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcHJpY2luZy1wcm9kdWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ByaWNpbmcvZGF0YS1hd3MtcHJpY2luZy1wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBZ0IvQixTQUFnQix1Q0FBdUMsQ0FBQyxNQUFxQztJQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCwwRkFTQzs7Ozs7O0FBSUQsTUFBYSxxQkFBc0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBT2xFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFtQztRQUNsRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFCQUFxQjtZQUM1QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw0REFBNEQ7Ozs7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUMxRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBcUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDbEYsQ0FBQztJQUNKLENBQUM7O0FBN0VILHNEQThFQzs7O0FBNUVDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csb0NBQWMsR0FBVyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NQcmljaW5nUHJvZHVjdENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VDb2RlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbHRlcnM6IERhdGFBd3NQcmljaW5nUHJvZHVjdEZpbHRlcnNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c1ByaWNpbmdQcm9kdWN0RmlsdGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpZWxkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzUHJpY2luZ1Byb2R1Y3RGaWx0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c1ByaWNpbmdQcm9kdWN0RmlsdGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpZWxkKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NQcmljaW5nUHJvZHVjdCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3ByaWNpbmdfcHJvZHVjdFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NQcmljaW5nUHJvZHVjdENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3ByaWNpbmdfcHJvZHVjdCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9zZXJ2aWNlQ29kZSA9IGNvbmZpZy5zZXJ2aWNlQ29kZTtcbiAgICB0aGlzLl9maWx0ZXJzID0gY29uZmlnLmZpbHRlcnM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyByZXN1bHQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXN1bHQnKTtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfY29kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlQ29kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZUNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2NvZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQ29kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlQ29kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlQ29kZTtcbiAgfVxuXG4gIC8vIGZpbHRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlsdGVycz86IERhdGFBd3NQcmljaW5nUHJvZHVjdEZpbHRlcnNbXTsgXG4gIHB1YmxpYyBnZXQgZmlsdGVycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlsdGVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbHRlcnModmFsdWU6IERhdGFBd3NQcmljaW5nUHJvZHVjdEZpbHRlcnNbXSkge1xuICAgIHRoaXMuX2ZpbHRlcnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsdGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBzZXJ2aWNlX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZpY2VDb2RlKSxcbiAgICAgIGZpbHRlcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c1ByaWNpbmdQcm9kdWN0RmlsdGVyc1RvVGVycmFmb3JtKSh0aGlzLl9maWx0ZXJzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=