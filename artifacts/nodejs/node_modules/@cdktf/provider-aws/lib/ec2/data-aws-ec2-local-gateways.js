"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsEc2LocalGateways = exports.dataAwsEc2LocalGatewaysFilterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function dataAwsEc2LocalGatewaysFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.dataAwsEc2LocalGatewaysFilterToTerraform = dataAwsEc2LocalGatewaysFilterToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html aws_ec2_local_gateways}.
 *
 * @stability stable
 */
class DataAwsEc2LocalGateways extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html aws_ec2_local_gateways} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_local_gateways',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._tags = config.tags;
        this._filter = config.filter;
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
    // ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ids() {
        return this.getListAttribute('ids');
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
    /**
     * @stability stable
     */
    resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get filterInput() {
        return this._filter;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2LocalGatewaysFilterToTerraform)(this._filter),
        };
    }
}
exports.DataAwsEc2LocalGateways = DataAwsEc2LocalGateways;
_a = JSII_RTTI_SYMBOL_1;
DataAwsEc2LocalGateways[_a] = { fqn: "@cdktf/provider-aws.ec2.DataAwsEc2LocalGateways", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsEc2LocalGateways.tfResourceType = "aws_ec2_local_gateways";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWMyLWxvY2FsLWdhdGV3YXlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VjMi9kYXRhLWF3cy1lYzItbG9jYWwtZ2F0ZXdheXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFnQi9CLFNBQWdCLHdDQUF3QyxDQUFDLE1BQXNDO0lBQzdGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDbEUsQ0FBQTtBQUNILENBQUM7QUFURCw0RkFTQzs7Ozs7O0FBSUQsTUFBYSx1QkFBd0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBT3BFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUF3QyxFQUFFO1FBQ3pGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsd0JBQXdCO1lBQy9DLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHlEQUF5RDs7OztJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFvRDtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2Ysb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBUSxDQUFDO0lBQ3pELENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFzQztRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2pGLENBQUM7SUFDSixDQUFDOztBQXBGSCwwREFxRkM7OztBQW5GQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHNDQUFjLEdBQVcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NFYzJMb2NhbEdhdGV3YXlzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsdGVyPzogRGF0YUF3c0VjMkxvY2FsR2F0ZXdheXNGaWx0ZXJbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkxvY2FsR2F0ZXdheXNGaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0VjMkxvY2FsR2F0ZXdheXNGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzRWMyTG9jYWxHYXRld2F5c0ZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlcyksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NFYzJMb2NhbEdhdGV3YXlzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWMyX2xvY2FsX2dhdGV3YXlzXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NFYzJMb2NhbEdhdGV3YXlzQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lYzJfbG9jYWxfZ2F0ZXdheXMnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX2ZpbHRlciA9IGNvbmZpZy5maWx0ZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaWRzJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIGZpbHRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWx0ZXI/OiBEYXRhQXdzRWMyTG9jYWxHYXRld2F5c0ZpbHRlcltdOyBcbiAgcHVibGljIGdldCBmaWx0ZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpbHRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbHRlcih2YWx1ZTogRGF0YUF3c0VjMkxvY2FsR2F0ZXdheXNGaWx0ZXJbXSkge1xuICAgIHRoaXMuX2ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLl9maWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NFYzJMb2NhbEdhdGV3YXlzRmlsdGVyVG9UZXJyYWZvcm0pKHRoaXMuX2ZpbHRlciksXG4gICAgfTtcbiAgfVxufVxuIl19