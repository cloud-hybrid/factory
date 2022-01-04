"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsNetworkInterface = exports.dataAwsNetworkInterfaceFilterToTerraform = exports.DataAwsNetworkInterfaceAttachment = exports.DataAwsNetworkInterfaceAssociation = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsNetworkInterfaceAssociation extends cdktf.ComplexComputedList {
    // allocation_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get allocationId() {
        return this.getStringAttribute('allocation_id');
    }
    // association_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get associationId() {
        return this.getStringAttribute('association_id');
    }
    // carrier_ip - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get carrierIp() {
        return this.getStringAttribute('carrier_ip');
    }
    // customer_owned_ip - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get customerOwnedIp() {
        return this.getStringAttribute('customer_owned_ip');
    }
    // ip_owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipOwnerId() {
        return this.getStringAttribute('ip_owner_id');
    }
    // public_dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get publicDnsName() {
        return this.getStringAttribute('public_dns_name');
    }
    // public_ip - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get publicIp() {
        return this.getStringAttribute('public_ip');
    }
}
exports.DataAwsNetworkInterfaceAssociation = DataAwsNetworkInterfaceAssociation;
_a = JSII_RTTI_SYMBOL_1;
DataAwsNetworkInterfaceAssociation[_a] = { fqn: "@cdktf/provider-aws.vpc.DataAwsNetworkInterfaceAssociation", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsNetworkInterfaceAttachment extends cdktf.ComplexComputedList {
    // attachment_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get attachmentId() {
        return this.getStringAttribute('attachment_id');
    }
    // device_index - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceIndex() {
        return this.getNumberAttribute('device_index');
    }
    // instance_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    // instance_owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceOwnerId() {
        return this.getStringAttribute('instance_owner_id');
    }
}
exports.DataAwsNetworkInterfaceAttachment = DataAwsNetworkInterfaceAttachment;
_b = JSII_RTTI_SYMBOL_1;
DataAwsNetworkInterfaceAttachment[_b] = { fqn: "@cdktf/provider-aws.vpc.DataAwsNetworkInterfaceAttachment", version: "3.0.1" };
function dataAwsNetworkInterfaceFilterToTerraform(struct) {
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
exports.dataAwsNetworkInterfaceFilterToTerraform = dataAwsNetworkInterfaceFilterToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface}.
 *
 * @stability stable
 */
class DataAwsNetworkInterface extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_network_interface',
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
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // association - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    association(index) {
        return new DataAwsNetworkInterfaceAssociation(this, 'association', index);
    }
    // attachment - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    attachment(index) {
        return new DataAwsNetworkInterfaceAttachment(this, 'attachment', index);
    }
    // availability_zone - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // interface_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get interfaceType() {
        return this.getStringAttribute('interface_type');
    }
    // ipv6_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv6Addresses() {
        return this.getListAttribute('ipv6_addresses');
    }
    // mac_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get macAddress() {
        return this.getStringAttribute('mac_address');
    }
    // outpost_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get outpostArn() {
        return this.getStringAttribute('outpost_arn');
    }
    // owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // private_dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get privateDnsName() {
        return this.getStringAttribute('private_dns_name');
    }
    // private_ip - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get privateIp() {
        return this.getStringAttribute('private_ip');
    }
    // private_ips - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get privateIps() {
        return this.getListAttribute('private_ips');
    }
    // requester_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get requesterId() {
        return this.getStringAttribute('requester_id');
    }
    // security_groups - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // subnet_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get subnetId() {
        return this.getStringAttribute('subnet_id');
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
    // vpc_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcId() {
        return this.getStringAttribute('vpc_id');
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
            filter: cdktf.listMapper(dataAwsNetworkInterfaceFilterToTerraform)(this._filter),
        };
    }
}
exports.DataAwsNetworkInterface = DataAwsNetworkInterface;
_c = JSII_RTTI_SYMBOL_1;
DataAwsNetworkInterface[_c] = { fqn: "@cdktf/provider-aws.vpc.DataAwsNetworkInterface", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsNetworkInterface.tfResourceType = "aws_network_interface";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbmV0d29yay1pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdnBjL2RhdGEtYXdzLW5ldHdvcmstaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7O0FBUy9CLE1BQWEsa0NBQW1DLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUvRSxtRUFBbUU7Ozs7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxvRUFBb0U7Ozs7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHVFQUF1RTs7OztJQUN2RSxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsaUVBQWlFOzs7O0lBQ2pFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQscUVBQXFFOzs7O0lBQ3JFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCwrREFBK0Q7Ozs7SUFDL0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O0FBbkNILGdGQW9DQzs7Ozs7O0FBQ0QsTUFBYSxpQ0FBa0MsU0FBUSxLQUFLLENBQUMsbUJB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QUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2pGLENBQUM7SUFDSixDQUFDOztBQXBLSCwwREFxS0M7OztBQW5LQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHNDQUFjLEdBQVcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NOZXR3b3JrSW50ZXJmYWNlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbHRlcj86IERhdGFBd3NOZXR3b3JrSW50ZXJmYWNlRmlsdGVyW107XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c05ldHdvcmtJbnRlcmZhY2VBc3NvY2lhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFsbG9jYXRpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGxvY2F0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGxvY2F0aW9uX2lkJyk7XG4gIH1cblxuICAvLyBhc3NvY2lhdGlvbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc29jaWF0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhc3NvY2lhdGlvbl9pZCcpO1xuICB9XG5cbiAgLy8gY2Fycmllcl9pcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhcnJpZXJJcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhcnJpZXJfaXAnKTtcbiAgfVxuXG4gIC8vIGN1c3RvbWVyX293bmVkX2lwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJPd25lZElwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfb3duZWRfaXAnKTtcbiAgfVxuXG4gIC8vIGlwX293bmVyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBPd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXBfb3duZXJfaWQnKTtcbiAgfVxuXG4gIC8vIHB1YmxpY19kbnNfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHB1YmxpY0Ruc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwdWJsaWNfZG5zX25hbWUnKTtcbiAgfVxuXG4gIC8vIHB1YmxpY19pcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHB1YmxpY0lwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHVibGljX2lwJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTmV0d29ya0ludGVyZmFjZUF0dGFjaG1lbnQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdHRhY2htZW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXR0YWNobWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXR0YWNobWVudF9pZCcpO1xuICB9XG5cbiAgLy8gZGV2aWNlX2luZGV4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGV2aWNlSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZXZpY2VfaW5kZXgnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2lkJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9vd25lcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlT3duZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX293bmVyX2lkJyk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c05ldHdvcmtJbnRlcmZhY2VGaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NOZXR3b3JrSW50ZXJmYWNlRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c05ldHdvcmtJbnRlcmZhY2VGaWx0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c05ldHdvcmtJbnRlcmZhY2UgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19uZXR3b3JrX2ludGVyZmFjZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c05ldHdvcmtJbnRlcmZhY2VDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX25ldHdvcmtfaW50ZXJmYWNlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl9maWx0ZXIgPSBjb25maWcuZmlsdGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGFzc29jaWF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBhc3NvY2lhdGlvbihpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTmV0d29ya0ludGVyZmFjZUFzc29jaWF0aW9uKHRoaXMsICdhc3NvY2lhdGlvbicsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGF0dGFjaG1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGF0dGFjaG1lbnQoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c05ldHdvcmtJbnRlcmZhY2VBdHRhY2htZW50KHRoaXMsICdhdHRhY2htZW50JywgaW5kZXgpO1xuICB9XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGludGVyZmFjZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJmYWNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ludGVyZmFjZV90eXBlJyk7XG4gIH1cblxuICAvLyBpcHY2X2FkZHJlc3NlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwdjZBZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXB2Nl9hZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIG1hY19hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFjQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21hY19hZGRyZXNzJyk7XG4gIH1cblxuICAvLyBvdXRwb3N0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG91dHBvc3RBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvdXRwb3N0X2FybicpO1xuICB9XG5cbiAgLy8gb3duZXJfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3duZXJfaWQnKTtcbiAgfVxuXG4gIC8vIHByaXZhdGVfZG5zX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcml2YXRlRG5zTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfZG5zX25hbWUnKTtcbiAgfVxuXG4gIC8vIHByaXZhdGVfaXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcml2YXRlSXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcml2YXRlX2lwJyk7XG4gIH1cblxuICAvLyBwcml2YXRlX2lwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaXZhdGVJcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncHJpdmF0ZV9pcHMnKTtcbiAgfVxuXG4gIC8vIHJlcXVlc3Rlcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcXVlc3RlcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVxdWVzdGVyX2lkJyk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VibmV0X2lkJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHZwY19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZwY0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX2lkJyk7XG4gIH1cblxuICAvLyBmaWx0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsdGVyPzogRGF0YUF3c05ldHdvcmtJbnRlcmZhY2VGaWx0ZXJbXTsgXG4gIHB1YmxpYyBnZXQgZmlsdGVyKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWx0ZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmaWx0ZXIodmFsdWU6IERhdGFBd3NOZXR3b3JrSW50ZXJmYWNlRmlsdGVyW10pIHtcbiAgICB0aGlzLl9maWx0ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWx0ZXIoKSB7XG4gICAgdGhpcy5fZmlsdGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWx0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIGZpbHRlcjogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzTmV0d29ya0ludGVyZmFjZUZpbHRlclRvVGVycmFmb3JtKSh0aGlzLl9maWx0ZXIpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==