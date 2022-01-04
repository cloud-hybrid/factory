"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ec2TransitGatewayPrefixListReference = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html aws_ec2_transit_gateway_prefix_list_reference}.
 *
 * @stability stable
 */
class Ec2TransitGatewayPrefixListReference extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html aws_ec2_transit_gateway_prefix_list_reference} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_prefix_list_reference',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._blackhole = config.blackhole;
        this._prefixListId = config.prefixListId;
        this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
    }
    /**
     * @stability stable
     */
    get blackhole() {
        return this.getBooleanAttribute('blackhole');
    }
    /**
     * @stability stable
     */
    set blackhole(value) {
        this._blackhole = value;
    }
    /**
     * @stability stable
     */
    resetBlackhole() {
        this._blackhole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blackholeInput() {
        return this._blackhole;
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
    get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }
    /**
     * @stability stable
     */
    set prefixListId(value) {
        this._prefixListId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prefixListIdInput() {
        return this._prefixListId;
    }
    // prefix_list_owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get prefixListOwnerId() {
        return this.getStringAttribute('prefix_list_owner_id');
    }
    /**
     * @stability stable
     */
    get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    /**
     * @stability stable
     */
    set transitGatewayAttachmentId(value) {
        this._transitGatewayAttachmentId = value;
    }
    /**
     * @stability stable
     */
    resetTransitGatewayAttachmentId() {
        this._transitGatewayAttachmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get transitGatewayAttachmentIdInput() {
        return this._transitGatewayAttachmentId;
    }
    /**
     * @stability stable
     */
    get transitGatewayRouteTableId() {
        return this.getStringAttribute('transit_gateway_route_table_id');
    }
    /**
     * @stability stable
     */
    set transitGatewayRouteTableId(value) {
        this._transitGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get transitGatewayRouteTableIdInput() {
        return this._transitGatewayRouteTableId;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            blackhole: cdktf.booleanToTerraform(this._blackhole),
            prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
        };
    }
}
exports.Ec2TransitGatewayPrefixListReference = Ec2TransitGatewayPrefixListReference;
_a = JSII_RTTI_SYMBOL_1;
Ec2TransitGatewayPrefixListReference[_a] = { fqn: "@cdktf/provider-aws.ec2.Ec2TransitGatewayPrefixListReference", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Ec2TransitGatewayPrefixListReference.tfResourceType = "aws_ec2_transit_gateway_prefix_list_reference";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXRyYW5zaXQtZ2F0ZXdheS1wcmVmaXgtbGlzdC1yZWZlcmVuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZWMyL2VjMi10cmFuc2l0LWdhdGV3YXktcHJlZml4LWxpc3QtcmVmZXJlbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7Ozs7QUFlL0IsTUFBYSxvQ0FBcUMsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTy9FLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFrRDtRQUNqRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLCtDQUErQztZQUN0RSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7SUFDdkUsQ0FBQzs7OztJQVFELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQVEsQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBa0M7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCwwRUFBMEU7Ozs7SUFDMUUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBQ0QsSUFBVywwQkFBMEIsQ0FBQyxLQUFhO1FBQ2pELElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNNLCtCQUErQjtRQUNwQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUlELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBYTtRQUNqRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMzRCw2QkFBNkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hGLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7U0FDMUYsQ0FBQztJQUNKLENBQUM7O0FBaEhILG9GQWlIQzs7O0FBL0dDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csbURBQWMsR0FBVywrQ0FBK0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRWMyVHJhbnNpdEdhdGV3YXlQcmVmaXhMaXN0UmVmZXJlbmNlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibGFja2hvbGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZml4TGlzdElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmFuc2l0R2F0ZXdheVJvdXRlVGFibGVJZDogc3RyaW5nO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBFYzJUcmFuc2l0R2F0ZXdheVByZWZpeExpc3RSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWMyX3RyYW5zaXRfZ2F0ZXdheV9wcmVmaXhfbGlzdF9yZWZlcmVuY2VcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWMyVHJhbnNpdEdhdGV3YXlQcmVmaXhMaXN0UmVmZXJlbmNlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWMyX3RyYW5zaXRfZ2F0ZXdheV9wcmVmaXhfbGlzdF9yZWZlcmVuY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYmxhY2tob2xlID0gY29uZmlnLmJsYWNraG9sZTtcbiAgICB0aGlzLl9wcmVmaXhMaXN0SWQgPSBjb25maWcucHJlZml4TGlzdElkO1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5QXR0YWNobWVudElkID0gY29uZmlnLnRyYW5zaXRHYXRld2F5QXR0YWNobWVudElkO1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkID0gY29uZmlnLnRyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBibGFja2hvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxhY2tob2xlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBibGFja2hvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYmxhY2tob2xlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYmxhY2tob2xlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9ibGFja2hvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbGFja2hvbGUoKSB7XG4gICAgdGhpcy5fYmxhY2tob2xlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBibGFja2hvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxhY2tob2xlO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHByZWZpeF9saXN0X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByZWZpeExpc3RJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZml4TGlzdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4X2xpc3RfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZpeExpc3RJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4TGlzdElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeExpc3RJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXhMaXN0SWQ7XG4gIH1cblxuICAvLyBwcmVmaXhfbGlzdF9vd25lcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZWZpeExpc3RPd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4X2xpc3Rfb3duZXJfaWQnKTtcbiAgfVxuXG4gIC8vIHRyYW5zaXRfZ2F0ZXdheV9hdHRhY2htZW50X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RyYW5zaXRHYXRld2F5QXR0YWNobWVudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RyYW5zaXRfZ2F0ZXdheV9hdHRhY2htZW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB0cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZCgpIHtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQ7XG4gIH1cblxuICAvLyB0cmFuc2l0X2dhdGV3YXlfcm91dGVfdGFibGVfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHJhbnNpdEdhdGV3YXlSb3V0ZVRhYmxlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9nYXRld2F5X3JvdXRlX3RhYmxlX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB0cmFuc2l0R2F0ZXdheVJvdXRlVGFibGVJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJhbnNpdEdhdGV3YXlSb3V0ZVRhYmxlSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEdhdGV3YXlSb3V0ZVRhYmxlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdEdhdGV3YXlSb3V0ZVRhYmxlSWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJsYWNraG9sZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2JsYWNraG9sZSksXG4gICAgICBwcmVmaXhfbGlzdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJlZml4TGlzdElkKSxcbiAgICAgIHRyYW5zaXRfZ2F0ZXdheV9hdHRhY2htZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZCksXG4gICAgICB0cmFuc2l0X2dhdGV3YXlfcm91dGVfdGFibGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=