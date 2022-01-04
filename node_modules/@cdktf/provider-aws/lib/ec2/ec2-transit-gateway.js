"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ec2TransitGateway = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway}.
 *
 * @stability stable
 */
class Ec2TransitGateway extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._amazonSideAsn = config.amazonSideAsn;
        this._autoAcceptSharedAttachments = config.autoAcceptSharedAttachments;
        this._defaultRouteTableAssociation = config.defaultRouteTableAssociation;
        this._defaultRouteTablePropagation = config.defaultRouteTablePropagation;
        this._description = config.description;
        this._dnsSupport = config.dnsSupport;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpnEcmpSupport = config.vpnEcmpSupport;
    }
    /**
     * @stability stable
     */
    get amazonSideAsn() {
        return this.getNumberAttribute('amazon_side_asn');
    }
    /**
     * @stability stable
     */
    set amazonSideAsn(value) {
        this._amazonSideAsn = value;
    }
    /**
     * @stability stable
     */
    resetAmazonSideAsn() {
        this._amazonSideAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get amazonSideAsnInput() {
        return this._amazonSideAsn;
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // association_default_route_table_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get associationDefaultRouteTableId() {
        return this.getStringAttribute('association_default_route_table_id');
    }
    /**
     * @stability stable
     */
    get autoAcceptSharedAttachments() {
        return this.getStringAttribute('auto_accept_shared_attachments');
    }
    /**
     * @stability stable
     */
    set autoAcceptSharedAttachments(value) {
        this._autoAcceptSharedAttachments = value;
    }
    /**
     * @stability stable
     */
    resetAutoAcceptSharedAttachments() {
        this._autoAcceptSharedAttachments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoAcceptSharedAttachmentsInput() {
        return this._autoAcceptSharedAttachments;
    }
    /**
     * @stability stable
     */
    get defaultRouteTableAssociation() {
        return this.getStringAttribute('default_route_table_association');
    }
    /**
     * @stability stable
     */
    set defaultRouteTableAssociation(value) {
        this._defaultRouteTableAssociation = value;
    }
    /**
     * @stability stable
     */
    resetDefaultRouteTableAssociation() {
        this._defaultRouteTableAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultRouteTableAssociationInput() {
        return this._defaultRouteTableAssociation;
    }
    /**
     * @stability stable
     */
    get defaultRouteTablePropagation() {
        return this.getStringAttribute('default_route_table_propagation');
    }
    /**
     * @stability stable
     */
    set defaultRouteTablePropagation(value) {
        this._defaultRouteTablePropagation = value;
    }
    /**
     * @stability stable
     */
    resetDefaultRouteTablePropagation() {
        this._defaultRouteTablePropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultRouteTablePropagationInput() {
        return this._defaultRouteTablePropagation;
    }
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    /**
     * @stability stable
     */
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
    }
    /**
     * @stability stable
     */
    get dnsSupport() {
        return this.getStringAttribute('dns_support');
    }
    /**
     * @stability stable
     */
    set dnsSupport(value) {
        this._dnsSupport = value;
    }
    /**
     * @stability stable
     */
    resetDnsSupport() {
        this._dnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dnsSupportInput() {
        return this._dnsSupport;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // propagation_default_route_table_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get propagationDefaultRouteTableId() {
        return this.getStringAttribute('propagation_default_route_table_id');
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
    get vpnEcmpSupport() {
        return this.getStringAttribute('vpn_ecmp_support');
    }
    /**
     * @stability stable
     */
    set vpnEcmpSupport(value) {
        this._vpnEcmpSupport = value;
    }
    /**
     * @stability stable
     */
    resetVpnEcmpSupport() {
        this._vpnEcmpSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpnEcmpSupportInput() {
        return this._vpnEcmpSupport;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            amazon_side_asn: cdktf.numberToTerraform(this._amazonSideAsn),
            auto_accept_shared_attachments: cdktf.stringToTerraform(this._autoAcceptSharedAttachments),
            default_route_table_association: cdktf.stringToTerraform(this._defaultRouteTableAssociation),
            default_route_table_propagation: cdktf.stringToTerraform(this._defaultRouteTablePropagation),
            description: cdktf.stringToTerraform(this._description),
            dns_support: cdktf.stringToTerraform(this._dnsSupport),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpn_ecmp_support: cdktf.stringToTerraform(this._vpnEcmpSupport),
        };
    }
}
exports.Ec2TransitGateway = Ec2TransitGateway;
_a = JSII_RTTI_SYMBOL_1;
Ec2TransitGateway[_a] = { fqn: "@cdktf/provider-aws.ec2.Ec2TransitGateway", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Ec2TransitGateway.tfResourceType = "aws_ec2_transit_gateway";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXRyYW5zaXQtZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lYzIvZWMyLXRyYW5zaXQtZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBeUIvQixNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPNUQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQWtDLEVBQUU7UUFDbkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx5QkFBeUI7WUFDaEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDekUsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENB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RSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ2hFLENBQUM7SUFDSixDQUFDOztBQWpPSCw4Q0FrT0M7OztBQWhPQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGdDQUFjLEdBQVcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEVjMlRyYW5zaXRHYXRld2F5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYW1hem9uU2lkZUFzbj86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvQWNjZXB0U2hhcmVkQXR0YWNobWVudHM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0Um91dGVUYWJsZUFzc29jaWF0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRuc1N1cHBvcnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBuRWNtcFN1cHBvcnQ/OiBzdHJpbmc7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBFYzJUcmFuc2l0R2F0ZXdheSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19lYzJfdHJhbnNpdF9nYXRld2F5XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWMyVHJhbnNpdEdhdGV3YXlDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2VjMl90cmFuc2l0X2dhdGV3YXknLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYW1hem9uU2lkZUFzbiA9IGNvbmZpZy5hbWF6b25TaWRlQXNuO1xuICAgIHRoaXMuX2F1dG9BY2NlcHRTaGFyZWRBdHRhY2htZW50cyA9IGNvbmZpZy5hdXRvQWNjZXB0U2hhcmVkQXR0YWNobWVudHM7XG4gICAgdGhpcy5fZGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbiA9IGNvbmZpZy5kZWZhdWx0Um91dGVUYWJsZUFzc29jaWF0aW9uO1xuICAgIHRoaXMuX2RlZmF1bHRSb3V0ZVRhYmxlUHJvcGFnYXRpb24gPSBjb25maWcuZGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbjtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9kbnNTdXBwb3J0ID0gY29uZmlnLmRuc1N1cHBvcnQ7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl92cG5FY21wU3VwcG9ydCA9IGNvbmZpZy52cG5FY21wU3VwcG9ydDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYW1hem9uX3NpZGVfYXNuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FtYXpvblNpZGVBc24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGFtYXpvblNpZGVBc24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhbWF6b25fc2lkZV9hc24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFtYXpvblNpZGVBc24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FtYXpvblNpZGVBc24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbWF6b25TaWRlQXNuKCkge1xuICAgIHRoaXMuX2FtYXpvblNpZGVBc24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFtYXpvblNpZGVBc25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYW1hem9uU2lkZUFzbjtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXNzb2NpYXRpb25fZGVmYXVsdF9yb3V0ZV90YWJsZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc29jaWF0aW9uRGVmYXVsdFJvdXRlVGFibGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc29jaWF0aW9uX2RlZmF1bHRfcm91dGVfdGFibGVfaWQnKTtcbiAgfVxuXG4gIC8vIGF1dG9fYWNjZXB0X3NoYXJlZF9hdHRhY2htZW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvQWNjZXB0U2hhcmVkQXR0YWNobWVudHM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dG9BY2NlcHRTaGFyZWRBdHRhY2htZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dG9fYWNjZXB0X3NoYXJlZF9hdHRhY2htZW50cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b0FjY2VwdFNoYXJlZEF0dGFjaG1lbnRzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRvQWNjZXB0U2hhcmVkQXR0YWNobWVudHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvQWNjZXB0U2hhcmVkQXR0YWNobWVudHMoKSB7XG4gICAgdGhpcy5fYXV0b0FjY2VwdFNoYXJlZEF0dGFjaG1lbnRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvQWNjZXB0U2hhcmVkQXR0YWNobWVudHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0FjY2VwdFNoYXJlZEF0dGFjaG1lbnRzO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9yb3V0ZV90YWJsZV9hc3NvY2lhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0Um91dGVUYWJsZUFzc29jaWF0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0Um91dGVUYWJsZUFzc29jaWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9yb3V0ZV90YWJsZV9hc3NvY2lhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRSb3V0ZVRhYmxlQXNzb2NpYXRpb24oKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Um91dGVUYWJsZUFzc29jaWF0aW9uO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9yb3V0ZV90YWJsZV9wcm9wYWdhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9yb3V0ZV90YWJsZV9wcm9wYWdhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRSb3V0ZVRhYmxlUHJvcGFnYXRpb24oKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJvdXRlVGFibGVQcm9wYWdhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGRuc19zdXBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Ruc1N1cHBvcnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRuc1N1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkbnNfc3VwcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG5zU3VwcG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG5zU3VwcG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERuc1N1cHBvcnQoKSB7XG4gICAgdGhpcy5fZG5zU3VwcG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG5zU3VwcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kbnNTdXBwb3J0O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG93bmVyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3duZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyX2lkJyk7XG4gIH1cblxuICAvLyBwcm9wYWdhdGlvbl9kZWZhdWx0X3JvdXRlX3RhYmxlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvcGFnYXRpb25EZWZhdWx0Um91dGVUYWJsZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvcGFnYXRpb25fZGVmYXVsdF9yb3V0ZV90YWJsZV9pZCcpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHZwbl9lY21wX3N1cHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBuRWNtcFN1cHBvcnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZwbkVjbXBTdXBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBuX2VjbXBfc3VwcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBuRWNtcFN1cHBvcnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwbkVjbXBTdXBwb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBuRWNtcFN1cHBvcnQoKSB7XG4gICAgdGhpcy5fdnBuRWNtcFN1cHBvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwbkVjbXBTdXBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwbkVjbXBTdXBwb3J0O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbWF6b25fc2lkZV9hc246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2FtYXpvblNpZGVBc24pLFxuICAgICAgYXV0b19hY2NlcHRfc2hhcmVkX2F0dGFjaG1lbnRzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRvQWNjZXB0U2hhcmVkQXR0YWNobWVudHMpLFxuICAgICAgZGVmYXVsdF9yb3V0ZV90YWJsZV9hc3NvY2lhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdFJvdXRlVGFibGVBc3NvY2lhdGlvbiksXG4gICAgICBkZWZhdWx0X3JvdXRlX3RhYmxlX3Byb3BhZ2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0Um91dGVUYWJsZVByb3BhZ2F0aW9uKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBkbnNfc3VwcG9ydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZG5zU3VwcG9ydCksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHZwbl9lY21wX3N1cHBvcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZwbkVjbXBTdXBwb3J0KSxcbiAgICB9O1xuICB9XG59XG4iXX0=