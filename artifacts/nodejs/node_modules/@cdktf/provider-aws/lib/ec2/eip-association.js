"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EipAssociation = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html aws_eip_association}.
 *
 * @stability stable
 */
class EipAssociation extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html aws_eip_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_eip_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allocationId = config.allocationId;
        this._allowReassociation = config.allowReassociation;
        this._instanceId = config.instanceId;
        this._networkInterfaceId = config.networkInterfaceId;
        this._privateIpAddress = config.privateIpAddress;
        this._publicIp = config.publicIp;
    }
    /**
     * @stability stable
     */
    get allocationId() {
        return this.getStringAttribute('allocation_id');
    }
    /**
     * @stability stable
     */
    set allocationId(value) {
        this._allocationId = value;
    }
    /**
     * @stability stable
     */
    resetAllocationId() {
        this._allocationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allocationIdInput() {
        return this._allocationId;
    }
    /**
     * @stability stable
     */
    get allowReassociation() {
        return this.getBooleanAttribute('allow_reassociation');
    }
    /**
     * @stability stable
     */
    set allowReassociation(value) {
        this._allowReassociation = value;
    }
    /**
     * @stability stable
     */
    resetAllowReassociation() {
        this._allowReassociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowReassociationInput() {
        return this._allowReassociation;
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
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    /**
     * @stability stable
     */
    set instanceId(value) {
        this._instanceId = value;
    }
    /**
     * @stability stable
     */
    resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceIdInput() {
        return this._instanceId;
    }
    /**
     * @stability stable
     */
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    /**
     * @stability stable
     */
    set networkInterfaceId(value) {
        this._networkInterfaceId = value;
    }
    /**
     * @stability stable
     */
    resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }
    /**
     * @stability stable
     */
    get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }
    /**
     * @stability stable
     */
    set privateIpAddress(value) {
        this._privateIpAddress = value;
    }
    /**
     * @stability stable
     */
    resetPrivateIpAddress() {
        this._privateIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get privateIpAddressInput() {
        return this._privateIpAddress;
    }
    /**
     * @stability stable
     */
    get publicIp() {
        return this.getStringAttribute('public_ip');
    }
    /**
     * @stability stable
     */
    set publicIp(value) {
        this._publicIp = value;
    }
    /**
     * @stability stable
     */
    resetPublicIp() {
        this._publicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publicIpInput() {
        return this._publicIp;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            allocation_id: cdktf.stringToTerraform(this._allocationId),
            allow_reassociation: cdktf.booleanToTerraform(this._allowReassociation),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
            public_ip: cdktf.stringToTerraform(this._publicIp),
        };
    }
}
exports.EipAssociation = EipAssociation;
_a = JSII_RTTI_SYMBOL_1;
EipAssociation[_a] = { fqn: "@cdktf/provider-aws.ec2.EipAssociation", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
EipAssociation.tfResourceType = "aws_eip_association";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWlwLWFzc29jaWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VjMi9laXAtYXNzb2NpYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQW1CL0IsTUFBYSxjQUFlLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU96RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBK0IsRUFBRTtRQUNoRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFCQUFxQjtZQUM1QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQzs7OztJQVFELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFB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RixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkUsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ25ELENBQUM7SUFDSixDQUFDOztBQXJKSCx3Q0FzSkM7OztBQXBKQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDZCQUFjLEdBQVcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEVpcEFzc29jaWF0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25JZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dSZWFzc29jaWF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUlwQWRkcmVzcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHB1YmxpY0lwPzogc3RyaW5nO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVpcEFzc29jaWF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2VpcF9hc3NvY2lhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBFaXBBc3NvY2lhdGlvbkNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWlwX2Fzc29jaWF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FsbG9jYXRpb25JZCA9IGNvbmZpZy5hbGxvY2F0aW9uSWQ7XG4gICAgdGhpcy5fYWxsb3dSZWFzc29jaWF0aW9uID0gY29uZmlnLmFsbG93UmVhc3NvY2lhdGlvbjtcbiAgICB0aGlzLl9pbnN0YW5jZUlkID0gY29uZmlnLmluc3RhbmNlSWQ7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZUlkID0gY29uZmlnLm5ldHdvcmtJbnRlcmZhY2VJZDtcbiAgICB0aGlzLl9wcml2YXRlSXBBZGRyZXNzID0gY29uZmlnLnByaXZhdGVJcEFkZHJlc3M7XG4gICAgdGhpcy5fcHVibGljSXAgPSBjb25maWcucHVibGljSXA7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFsbG9jYXRpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvY2F0aW9uSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsbG9jYXRpb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG9jYXRpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxsb2NhdGlvbklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb2NhdGlvbklkKCkge1xuICAgIHRoaXMuX2FsbG9jYXRpb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb2NhdGlvbklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG9jYXRpb25JZDtcbiAgfVxuXG4gIC8vIGFsbG93X3JlYXNzb2NpYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dSZWFzc29jaWF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd1JlYXNzb2NpYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfcmVhc3NvY2lhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93UmVhc3NvY2lhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dSZWFzc29jaWF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dSZWFzc29jaWF0aW9uKCkge1xuICAgIHRoaXMuX2FsbG93UmVhc3NvY2lhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dSZWFzc29jaWF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93UmVhc3NvY2lhdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlSWQoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUlkO1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnRlcmZhY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXR3b3JrSW50ZXJmYWNlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnRlcmZhY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25ldHdvcmtfaW50ZXJmYWNlX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrSW50ZXJmYWNlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25ldHdvcmtJbnRlcmZhY2VJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtJbnRlcmZhY2VJZCgpIHtcbiAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnRlcmZhY2VJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlSWQ7XG4gIH1cblxuICAvLyBwcml2YXRlX2lwX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcml2YXRlSXBBZGRyZXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcml2YXRlSXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpdmF0ZV9pcF9hZGRyZXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlSXBBZGRyZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlSXBBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpdmF0ZUlwQWRkcmVzcygpIHtcbiAgICB0aGlzLl9wcml2YXRlSXBBZGRyZXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcml2YXRlSXBBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXZhdGVJcEFkZHJlc3M7XG4gIH1cblxuICAvLyBwdWJsaWNfaXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wdWJsaWNJcD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHVibGljSXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwdWJsaWNfaXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHB1YmxpY0lwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wdWJsaWNJcCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFB1YmxpY0lwKCkge1xuICAgIHRoaXMuX3B1YmxpY0lwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWJsaWNJcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaWNJcDtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb2NhdGlvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWxsb2NhdGlvbklkKSxcbiAgICAgIGFsbG93X3JlYXNzb2NpYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hbGxvd1JlYXNzb2NpYXRpb24pLFxuICAgICAgaW5zdGFuY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlSWQpLFxuICAgICAgbmV0d29ya19pbnRlcmZhY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25ldHdvcmtJbnRlcmZhY2VJZCksXG4gICAgICBwcml2YXRlX2lwX2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByaXZhdGVJcEFkZHJlc3MpLFxuICAgICAgcHVibGljX2lwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wdWJsaWNJcCksXG4gICAgfTtcbiAgfVxufVxuIl19