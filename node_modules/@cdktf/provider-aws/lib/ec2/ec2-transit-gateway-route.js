"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ec2TransitGatewayRoute = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html aws_ec2_transit_gateway_route}.
 *
 * @stability stable
 */
class Ec2TransitGatewayRoute extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html aws_ec2_transit_gateway_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._blackhole = config.blackhole;
        this._destinationCidrBlock = config.destinationCidrBlock;
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
    /**
     * @stability stable
     */
    get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    /**
     * @stability stable
     */
    set destinationCidrBlock(value) {
        this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationCidrBlockInput() {
        return this._destinationCidrBlock;
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
            destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
        };
    }
}
exports.Ec2TransitGatewayRoute = Ec2TransitGatewayRoute;
_a = JSII_RTTI_SYMBOL_1;
Ec2TransitGatewayRoute[_a] = { fqn: "@cdktf/provider-aws.ec2.Ec2TransitGatewayRoute", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Ec2TransitGatewayRoute.tfResourceType = "aws_ec2_transit_gateway_route";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXRyYW5zaXQtZ2F0ZXdheS1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lYzIvZWMyLXRyYW5zaXQtZ2F0ZXdheS1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBZS9CLE1BQWEsc0JBQXVCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9qRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBb0M7UUFDbkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwrQkFBK0I7WUFDdEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDckUsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztJQUN2RSxDQUFDOzs7O0lBUUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBUSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFrQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBQ0QsSUFBVywwQkFBMEIsQ0FBQyxLQUFhO1FBQ2pELElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNNLCtCQUErQjtRQUNwQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUlELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBYTtRQUNqRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDM0UsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN4Riw4QkFBOEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1NBQzFGLENBQUM7SUFDSixDQUFDOztBQTNHSCx3REE0R0M7OztBQTFHQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHFDQUFjLEdBQVcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEVjMlRyYW5zaXRHYXRld2F5Um91dGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJsYWNraG9sZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzdGluYXRpb25DaWRyQmxvY2s6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkOiBzdHJpbmc7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBFYzJUcmFuc2l0R2F0ZXdheVJvdXRlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2VjMl90cmFuc2l0X2dhdGV3YXlfcm91dGVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBFYzJUcmFuc2l0R2F0ZXdheVJvdXRlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWMyX3RyYW5zaXRfZ2F0ZXdheV9yb3V0ZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9ibGFja2hvbGUgPSBjb25maWcuYmxhY2tob2xlO1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uQ2lkckJsb2NrID0gY29uZmlnLmRlc3RpbmF0aW9uQ2lkckJsb2NrO1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5QXR0YWNobWVudElkID0gY29uZmlnLnRyYW5zaXRHYXRld2F5QXR0YWNobWVudElkO1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkID0gY29uZmlnLnRyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBibGFja2hvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxhY2tob2xlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBibGFja2hvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYmxhY2tob2xlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYmxhY2tob2xlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9ibGFja2hvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbGFja2hvbGUoKSB7XG4gICAgdGhpcy5fYmxhY2tob2xlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBibGFja2hvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxhY2tob2xlO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fY2lkcl9ibG9jayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbkNpZHJCbG9jaz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25DaWRyQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9jaWRyX2Jsb2NrJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXN0aW5hdGlvbkNpZHJCbG9jayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25DaWRyQmxvY2sgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25DaWRyQmxvY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25DaWRyQmxvY2s7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gdHJhbnNpdF9nYXRld2F5X2F0dGFjaG1lbnRfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5QXR0YWNobWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9nYXRld2F5X2F0dGFjaG1lbnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYW5zaXRHYXRld2F5QXR0YWNobWVudElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRyYW5zaXRHYXRld2F5QXR0YWNobWVudElkKCkge1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5QXR0YWNobWVudElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZDtcbiAgfVxuXG4gIC8vIHRyYW5zaXRfZ2F0ZXdheV9yb3V0ZV90YWJsZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90cmFuc2l0R2F0ZXdheVJvdXRlVGFibGVJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEdhdGV3YXlSb3V0ZVRhYmxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmFuc2l0X2dhdGV3YXlfcm91dGVfdGFibGVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheVJvdXRlVGFibGVJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheVJvdXRlVGFibGVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2l0R2F0ZXdheVJvdXRlVGFibGVJZDtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmxhY2tob2xlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYmxhY2tob2xlKSxcbiAgICAgIGRlc3RpbmF0aW9uX2NpZHJfYmxvY2s6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc3RpbmF0aW9uQ2lkckJsb2NrKSxcbiAgICAgIHRyYW5zaXRfZ2F0ZXdheV9hdHRhY2htZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZCksXG4gICAgICB0cmFuc2l0X2dhdGV3YXlfcm91dGVfdGFibGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RyYW5zaXRHYXRld2F5Um91dGVUYWJsZUlkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=