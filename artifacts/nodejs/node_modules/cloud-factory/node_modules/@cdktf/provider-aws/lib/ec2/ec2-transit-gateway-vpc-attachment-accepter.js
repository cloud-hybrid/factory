"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ec2TransitGatewayVpcAttachmentAccepter = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter}.
 *
 * @stability stable
 */
class Ec2TransitGatewayVpcAttachmentAccepter extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
        this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // appliance_mode_support - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get applianceModeSupport() {
        return this.getStringAttribute('appliance_mode_support');
    }
    // dns_support - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsSupport() {
        return this.getStringAttribute('dns_support');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // ipv6_support - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv6Support() {
        return this.getStringAttribute('ipv6_support');
    }
    // subnet_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
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
    get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    /**
     * @stability stable
     */
    set transitGatewayAttachmentId(value) {
        this._transitGatewayAttachmentId = value;
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
    get transitGatewayDefaultRouteTableAssociation() {
        return this.getBooleanAttribute('transit_gateway_default_route_table_association');
    }
    /**
     * @stability stable
     */
    set transitGatewayDefaultRouteTableAssociation(value) {
        this._transitGatewayDefaultRouteTableAssociation = value;
    }
    /**
     * @stability stable
     */
    resetTransitGatewayDefaultRouteTableAssociation() {
        this._transitGatewayDefaultRouteTableAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get transitGatewayDefaultRouteTableAssociationInput() {
        return this._transitGatewayDefaultRouteTableAssociation;
    }
    /**
     * @stability stable
     */
    get transitGatewayDefaultRouteTablePropagation() {
        return this.getBooleanAttribute('transit_gateway_default_route_table_propagation');
    }
    /**
     * @stability stable
     */
    set transitGatewayDefaultRouteTablePropagation(value) {
        this._transitGatewayDefaultRouteTablePropagation = value;
    }
    /**
     * @stability stable
     */
    resetTransitGatewayDefaultRouteTablePropagation() {
        this._transitGatewayDefaultRouteTablePropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get transitGatewayDefaultRouteTablePropagationInput() {
        return this._transitGatewayDefaultRouteTablePropagation;
    }
    // transit_gateway_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    // vpc_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    // vpc_owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcOwnerId() {
        return this.getStringAttribute('vpc_owner_id');
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
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
            transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
        };
    }
}
exports.Ec2TransitGatewayVpcAttachmentAccepter = Ec2TransitGatewayVpcAttachmentAccepter;
_a = JSII_RTTI_SYMBOL_1;
Ec2TransitGatewayVpcAttachmentAccepter[_a] = { fqn: "@cdktf/provider-aws.ec2.Ec2TransitGatewayVpcAttachmentAccepter", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Ec2TransitGatewayVpcAttachmentAccepter.tfResourceType = "aws_ec2_transit_gateway_vpc_attachment_accepter";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXRyYW5zaXQtZ2F0ZXdheS12cGMtYXR0YWNobWVudC1hY2NlcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lYzIvZWMyLXRyYW5zaXQtZ2F0ZXdheS12cGMtYXR0YWNobWVudC1hY2NlcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBaUIvQixNQUFhLHNDQUF1QyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPakYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQW9EO1FBQ25HLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsaURBQWlEO1lBQ3hFLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDckUsSUFBSSxDQUFDLDJDQUEyQyxHQUFHLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQztRQUNyRyxJQUFJLENBQUMsMkNBQTJDLEdBQUcsTUFBTSxDQUFDLDBDQUEwQyxDQUFDO0lBQ3ZHLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiw0RUFBNEU7Ozs7SUFDNUUsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENB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LE9BQU8sSUFBSSxDQUFDLDJDQUEyQyxDQUFDO0lBQzFELENBQUM7SUFFRCx3RUFBd0U7Ozs7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsNERBQTREOzs7O0lBQzVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELDZCQUE2QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7WUFDeEYsK0NBQStDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQztZQUMzSCwrQ0FBK0MsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDO1NBQzVILENBQUM7SUFDSixDQUFDOztBQXJLSCx3RkFzS0M7OztBQXBLQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHFEQUFjLEdBQVcsaURBQWlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEVjMlRyYW5zaXRHYXRld2F5VnBjQXR0YWNobWVudEFjY2VwdGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmFuc2l0R2F0ZXdheURlZmF1bHRSb3V0ZVRhYmxlQXNzb2NpYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVjMlRyYW5zaXRHYXRld2F5VnBjQXR0YWNobWVudEFjY2VwdGVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2VjMl90cmFuc2l0X2dhdGV3YXlfdnBjX2F0dGFjaG1lbnRfYWNjZXB0ZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWMyVHJhbnNpdEdhdGV3YXlWcGNBdHRhY2htZW50QWNjZXB0ZXJDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lYzJfdHJhbnNpdF9nYXRld2F5X3ZwY19hdHRhY2htZW50X2FjY2VwdGVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQgPSBjb25maWcudHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQ7XG4gICAgdGhpcy5fdHJhbnNpdEdhdGV3YXlEZWZhdWx0Um91dGVUYWJsZUFzc29jaWF0aW9uID0gY29uZmlnLnRyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbjtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheURlZmF1bHRSb3V0ZVRhYmxlUHJvcGFnYXRpb24gPSBjb25maWcudHJhbnNpdEdhdGV3YXlEZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcHBsaWFuY2VfbW9kZV9zdXBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXBwbGlhbmNlTW9kZVN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBsaWFuY2VfbW9kZV9zdXBwb3J0Jyk7XG4gIH1cblxuICAvLyBkbnNfc3VwcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRuc1N1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkbnNfc3VwcG9ydCcpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGlwdjZfc3VwcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwdjZTdXBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXB2Nl9zdXBwb3J0Jyk7XG4gIH1cblxuICAvLyBzdWJuZXRfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldF9pZHMnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0cmFuc2l0X2dhdGV3YXlfYXR0YWNobWVudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmFuc2l0X2dhdGV3YXlfYXR0YWNobWVudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5QXR0YWNobWVudElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5QXR0YWNobWVudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRHYXRld2F5QXR0YWNobWVudElkO1xuICB9XG5cbiAgLy8gdHJhbnNpdF9nYXRld2F5X2RlZmF1bHRfcm91dGVfdGFibGVfYXNzb2NpYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJhbnNpdEdhdGV3YXlEZWZhdWx0Um91dGVUYWJsZUFzc29jaWF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheURlZmF1bHRSb3V0ZVRhYmxlQXNzb2NpYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndHJhbnNpdF9nYXRld2F5X2RlZmF1bHRfcm91dGVfdGFibGVfYXNzb2NpYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0cmFuc2l0R2F0ZXdheURlZmF1bHRSb3V0ZVRhYmxlQXNzb2NpYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbigpIHtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheURlZmF1bHRSb3V0ZVRhYmxlQXNzb2NpYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2l0R2F0ZXdheURlZmF1bHRSb3V0ZVRhYmxlQXNzb2NpYXRpb247XG4gIH1cblxuICAvLyB0cmFuc2l0X2dhdGV3YXlfZGVmYXVsdF9yb3V0ZV90YWJsZV9wcm9wYWdhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90cmFuc2l0R2F0ZXdheURlZmF1bHRSb3V0ZVRhYmxlUHJvcGFnYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0cmFuc2l0X2dhdGV3YXlfZGVmYXVsdF9yb3V0ZV90YWJsZV9wcm9wYWdhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdHJhbnNpdEdhdGV3YXlEZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHJhbnNpdEdhdGV3YXlEZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEdhdGV3YXlEZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRHYXRld2F5RGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbjtcbiAgfVxuXG4gIC8vIHRyYW5zaXRfZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmFuc2l0X2dhdGV3YXlfaWQnKTtcbiAgfVxuXG4gIC8vIHZwY19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZwY0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX2lkJyk7XG4gIH1cblxuICAvLyB2cGNfb3duZXJfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNPd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX293bmVyX2lkJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdHJhbnNpdF9nYXRld2F5X2F0dGFjaG1lbnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RyYW5zaXRHYXRld2F5QXR0YWNobWVudElkKSxcbiAgICAgIHRyYW5zaXRfZ2F0ZXdheV9kZWZhdWx0X3JvdXRlX3RhYmxlX2Fzc29jaWF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fdHJhbnNpdEdhdGV3YXlEZWZhdWx0Um91dGVUYWJsZUFzc29jaWF0aW9uKSxcbiAgICAgIHRyYW5zaXRfZ2F0ZXdheV9kZWZhdWx0X3JvdXRlX3RhYmxlX3Byb3BhZ2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fdHJhbnNpdEdhdGV3YXlEZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uKSxcbiAgICB9O1xuICB9XG59XG4iXX0=