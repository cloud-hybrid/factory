"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcPeeringConnectionAccepterA = exports.VpcPeeringConnectionAccepterRequesterOutputReference = exports.vpcPeeringConnectionAccepterRequesterToTerraform = exports.VpcPeeringConnectionAccepterAccepterOutputReference = exports.vpcPeeringConnectionAccepterAccepterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function vpcPeeringConnectionAccepterAccepterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink),
    };
}
exports.vpcPeeringConnectionAccepterAccepterToTerraform = vpcPeeringConnectionAccepterAccepterToTerraform;
/**
 * @stability stable
 */
class VpcPeeringConnectionAccepterAccepterOutputReference extends cdktf.ComplexObject {
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
        if (this._allowClassicLinkToRemoteVpc) {
            hasAnyValues = true;
            internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
        }
        if (this._allowRemoteVpcDnsResolution) {
            hasAnyValues = true;
            internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
        }
        if (this._allowVpcToRemoteClassicLink) {
            hasAnyValues = true;
            internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowClassicLinkToRemoteVpc = undefined;
            this._allowRemoteVpcDnsResolution = undefined;
            this._allowVpcToRemoteClassicLink = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
            this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
            this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
        }
    }
    /**
     * @stability stable
     */
    get allowClassicLinkToRemoteVpc() {
        return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
    }
    /**
     * @stability stable
     */
    set allowClassicLinkToRemoteVpc(value) {
        this._allowClassicLinkToRemoteVpc = value;
    }
    /**
     * @stability stable
     */
    resetAllowClassicLinkToRemoteVpc() {
        this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowClassicLinkToRemoteVpcInput() {
        return this._allowClassicLinkToRemoteVpc;
    }
    /**
     * @stability stable
     */
    get allowRemoteVpcDnsResolution() {
        return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
    }
    /**
     * @stability stable
     */
    set allowRemoteVpcDnsResolution(value) {
        this._allowRemoteVpcDnsResolution = value;
    }
    /**
     * @stability stable
     */
    resetAllowRemoteVpcDnsResolution() {
        this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowRemoteVpcDnsResolutionInput() {
        return this._allowRemoteVpcDnsResolution;
    }
    /**
     * @stability stable
     */
    get allowVpcToRemoteClassicLink() {
        return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
    }
    /**
     * @stability stable
     */
    set allowVpcToRemoteClassicLink(value) {
        this._allowVpcToRemoteClassicLink = value;
    }
    /**
     * @stability stable
     */
    resetAllowVpcToRemoteClassicLink() {
        this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowVpcToRemoteClassicLinkInput() {
        return this._allowVpcToRemoteClassicLink;
    }
}
exports.VpcPeeringConnectionAccepterAccepterOutputReference = VpcPeeringConnectionAccepterAccepterOutputReference;
_a = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionAccepterAccepterOutputReference[_a] = { fqn: "@cdktf/provider-aws.vpc.VpcPeeringConnectionAccepterAccepterOutputReference", version: "3.0.1" };
function vpcPeeringConnectionAccepterRequesterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink),
    };
}
exports.vpcPeeringConnectionAccepterRequesterToTerraform = vpcPeeringConnectionAccepterRequesterToTerraform;
/**
 * @stability stable
 */
class VpcPeeringConnectionAccepterRequesterOutputReference extends cdktf.ComplexObject {
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
        if (this._allowClassicLinkToRemoteVpc) {
            hasAnyValues = true;
            internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
        }
        if (this._allowRemoteVpcDnsResolution) {
            hasAnyValues = true;
            internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
        }
        if (this._allowVpcToRemoteClassicLink) {
            hasAnyValues = true;
            internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowClassicLinkToRemoteVpc = undefined;
            this._allowRemoteVpcDnsResolution = undefined;
            this._allowVpcToRemoteClassicLink = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
            this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
            this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
        }
    }
    /**
     * @stability stable
     */
    get allowClassicLinkToRemoteVpc() {
        return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
    }
    /**
     * @stability stable
     */
    set allowClassicLinkToRemoteVpc(value) {
        this._allowClassicLinkToRemoteVpc = value;
    }
    /**
     * @stability stable
     */
    resetAllowClassicLinkToRemoteVpc() {
        this._allowClassicLinkToRemoteVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowClassicLinkToRemoteVpcInput() {
        return this._allowClassicLinkToRemoteVpc;
    }
    /**
     * @stability stable
     */
    get allowRemoteVpcDnsResolution() {
        return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
    }
    /**
     * @stability stable
     */
    set allowRemoteVpcDnsResolution(value) {
        this._allowRemoteVpcDnsResolution = value;
    }
    /**
     * @stability stable
     */
    resetAllowRemoteVpcDnsResolution() {
        this._allowRemoteVpcDnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowRemoteVpcDnsResolutionInput() {
        return this._allowRemoteVpcDnsResolution;
    }
    /**
     * @stability stable
     */
    get allowVpcToRemoteClassicLink() {
        return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
    }
    /**
     * @stability stable
     */
    set allowVpcToRemoteClassicLink(value) {
        this._allowVpcToRemoteClassicLink = value;
    }
    /**
     * @stability stable
     */
    resetAllowVpcToRemoteClassicLink() {
        this._allowVpcToRemoteClassicLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowVpcToRemoteClassicLinkInput() {
        return this._allowVpcToRemoteClassicLink;
    }
}
exports.VpcPeeringConnectionAccepterRequesterOutputReference = VpcPeeringConnectionAccepterRequesterOutputReference;
_b = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionAccepterRequesterOutputReference[_b] = { fqn: "@cdktf/provider-aws.vpc.VpcPeeringConnectionAccepterRequesterOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter}.
 *
 * @stability stable
 */
class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // accepter - computed: false, optional: true, required: false
        this._accepter = new VpcPeeringConnectionAccepterAccepterOutputReference(this, "accepter", true);
        // requester - computed: false, optional: true, required: false
        this._requester = new VpcPeeringConnectionAccepterRequesterOutputReference(this, "requester", true);
        this._autoAccept = config.autoAccept;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
        this._accepter.internalValue = config.accepter;
        this._requester.internalValue = config.requester;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accept_status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get acceptStatus() {
        return this.getStringAttribute('accept_status');
    }
    /**
     * @stability stable
     */
    get autoAccept() {
        return this.getBooleanAttribute('auto_accept');
    }
    /**
     * @stability stable
     */
    set autoAccept(value) {
        this._autoAccept = value;
    }
    /**
     * @stability stable
     */
    resetAutoAccept() {
        this._autoAccept = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoAcceptInput() {
        return this._autoAccept;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // peer_owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get peerOwnerId() {
        return this.getStringAttribute('peer_owner_id');
    }
    // peer_region - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get peerRegion() {
        return this.getStringAttribute('peer_region');
    }
    // peer_vpc_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get peerVpcId() {
        return this.getStringAttribute('peer_vpc_id');
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
    get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
    /**
     * @stability stable
     */
    set vpcPeeringConnectionId(value) {
        this._vpcPeeringConnectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcPeeringConnectionIdInput() {
        return this._vpcPeeringConnectionId;
    }
    /**
     * @stability stable
     */
    get accepter() {
        return this._accepter;
    }
    /**
     * @stability stable
     */
    putAccepter(value) {
        this._accepter.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAccepter() {
        this._accepter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accepterInput() {
        return this._accepter.internalValue;
    }
    /**
     * @stability stable
     */
    get requester() {
        return this._requester;
    }
    /**
     * @stability stable
     */
    putRequester(value) {
        this._requester.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRequester() {
        this._requester.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requesterInput() {
        return this._requester.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            auto_accept: cdktf.booleanToTerraform(this._autoAccept),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
            accepter: vpcPeeringConnectionAccepterAccepterToTerraform(this._accepter.internalValue),
            requester: vpcPeeringConnectionAccepterRequesterToTerraform(this._requester.internalValue),
        };
    }
}
exports.VpcPeeringConnectionAccepterA = VpcPeeringConnectionAccepterA;
_c = JSII_RTTI_SYMBOL_1;
VpcPeeringConnectionAccepterA[_c] = { fqn: "@cdktf/provider-aws.vpc.VpcPeeringConnectionAccepterA", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
VpcPeeringConnectionAccepterA.tfResourceType = "aws_vpc_peering_connection_accepter";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLXBlZXJpbmctY29ubmVjdGlvbi1hY2NlcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92cGMvdnBjLXBlZXJpbmctY29ubmVjdGlvbi1hY2NlcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTBCL0IsU0FBZ0IsK0NBQStDLENBQUMsTUFBbUc7SUFDakssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQy9GLCtCQUErQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDOUYsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztLQUNoRyxDQUFBO0FBQ0gsQ0FBQztBQVZELDBHQVVDOzs7O0FBRUQsTUFBYSxtREFBb0QsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkxRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFD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QyxLQUE0QztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3ZELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDaEYsUUFBUSxFQUFFLCtDQUErQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1lBQ3ZGLFNBQVMsRUFBRSxnREFBZ0QsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztTQUMzRixDQUFDO0lBQ0osQ0FBQzs7QUE3S0gsc0VBOEtDOzs7QUE1S0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw0Q0FBYyxHQUFXLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvQWNjZXB0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY1BlZXJpbmdDb25uZWN0aW9uSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXB0ZXI/OiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQWNjZXB0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3Rlcj86IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyT3V0cHV0UmVmZXJlbmNlIHwgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyksXG4gICAgYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKSxcbiAgICBhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluazogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB2YWx1ZS5hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM7XG4gICAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB2YWx1ZS5hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb247XG4gICAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB2YWx1ZS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms7XG4gICAgfVxuICB9XG5cbiAgLy8gYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfY2xhc3NpY19saW5rX3RvX3JlbW90ZV92cGMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYygpIHtcbiAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM7XG4gIH1cblxuICAvLyBhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FsbG93X3JlbW90ZV92cGNfZG5zX3Jlc29sdXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbigpIHtcbiAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb247XG4gIH1cblxuICAvLyBhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd192cGNfdG9fcmVtb3RlX2NsYXNzaWNfbGluaycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKCkge1xuICAgIHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbms/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2cGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlclJlcXVlc3Rlck91dHB1dFJlZmVyZW5jZSB8IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKSxcbiAgICBhbGxvd19yZW1vdGVfdnBjX2Ruc19yZXNvbHV0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24pLFxuICAgIGFsbG93X3ZwY190b19yZW1vdGVfY2xhc3NpY19saW5rOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmspLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmspIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyA9IHZhbHVlLmFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYztcbiAgICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHZhbHVlLmFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbjtcbiAgICAgIHRoaXMuX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluayA9IHZhbHVlLmFsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaztcbiAgICB9XG4gIH1cblxuICAvLyBhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd0NsYXNzaWNMaW5rVG9SZW1vdGVWcGM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19jbGFzc2ljX2xpbmtfdG9fcmVtb3RlX3ZwYycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjKCkge1xuICAgIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dDbGFzc2ljTGlua1RvUmVtb3RlVnBjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93Q2xhc3NpY0xpbmtUb1JlbW90ZVZwYztcbiAgfVxuXG4gIC8vIGFsbG93X3JlbW90ZV92cGNfZG5zX3Jlc29sdXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd1JlbW90ZVZwY0Ruc1Jlc29sdXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfcmVtb3RlX3ZwY19kbnNfcmVzb2x1dGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uKCkge1xuICAgIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dSZW1vdGVWcGNEbnNSZXNvbHV0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93UmVtb3RlVnBjRG5zUmVzb2x1dGlvbjtcbiAgfVxuXG4gIC8vIGFsbG93X3ZwY190b19yZW1vdGVfY2xhc3NpY19saW5rIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93VnBjVG9SZW1vdGVDbGFzc2ljTGluaz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FsbG93X3ZwY190b19yZW1vdGVfY2xhc3NpY19saW5rJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmsoKSB7XG4gICAgdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd1ZwY1RvUmVtb3RlQ2xhc3NpY0xpbmtJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dWcGNUb1JlbW90ZUNsYXNzaWNMaW5rO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyQSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c192cGNfcGVlcmluZ19jb25uZWN0aW9uX2FjY2VwdGVyXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9hY2NlcHRlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hdXRvQWNjZXB0ID0gY29uZmlnLmF1dG9BY2NlcHQ7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkID0gY29uZmlnLnZwY1BlZXJpbmdDb25uZWN0aW9uSWQ7XG4gICAgdGhpcy5fYWNjZXB0ZXIuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hY2NlcHRlcjtcbiAgICB0aGlzLl9yZXF1ZXN0ZXIuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5yZXF1ZXN0ZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjY2VwdF9zdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2NlcHRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2NlcHRfc3RhdHVzJyk7XG4gIH1cblxuICAvLyBhdXRvX2FjY2VwdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvQWNjZXB0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRvQWNjZXB0KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fYWNjZXB0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b0FjY2VwdCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXV0b0FjY2VwdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9BY2NlcHQoKSB7XG4gICAgdGhpcy5fYXV0b0FjY2VwdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b0FjY2VwdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQWNjZXB0O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHBlZXJfb3duZXJfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwZWVyT3duZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BlZXJfb3duZXJfaWQnKTtcbiAgfVxuXG4gIC8vIHBlZXJfcmVnaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGVlclJlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BlZXJfcmVnaW9uJyk7XG4gIH1cblxuICAvLyBwZWVyX3ZwY19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBlZXJWcGNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BlZXJfdnBjX2lkJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdnBjX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxuXG4gIC8vIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY1BlZXJpbmdDb25uZWN0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNQZWVyaW5nQ29ubmVjdGlvbklkO1xuICB9XG5cbiAgLy8gYWNjZXB0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjZXB0ZXIgPSBuZXcgVnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFjY2VwdGVyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjY2VwdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NlcHRlcjtcbiAgfVxuICBwdWJsaWMgcHV0QWNjZXB0ZXIodmFsdWU6IFZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJBY2NlcHRlcikge1xuICAgIHRoaXMuX2FjY2VwdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2NlcHRlcigpIHtcbiAgICB0aGlzLl9hY2NlcHRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NlcHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NlcHRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmVxdWVzdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVlc3RlciA9IG5ldyBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlcXVlc3RlclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZXF1ZXN0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RlcjtcbiAgfVxuICBwdWJsaWMgcHV0UmVxdWVzdGVyKHZhbHVlOiBWcGNQZWVyaW5nQ29ubmVjdGlvbkFjY2VwdGVyUmVxdWVzdGVyKSB7XG4gICAgdGhpcy5fcmVxdWVzdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1ZXN0ZXIoKSB7XG4gICAgdGhpcy5fcmVxdWVzdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVlc3RlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0b19hY2NlcHQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvQWNjZXB0KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCksXG4gICAgICBhY2NlcHRlcjogdnBjUGVlcmluZ0Nvbm5lY3Rpb25BY2NlcHRlckFjY2VwdGVyVG9UZXJyYWZvcm0odGhpcy5fYWNjZXB0ZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICByZXF1ZXN0ZXI6IHZwY1BlZXJpbmdDb25uZWN0aW9uQWNjZXB0ZXJSZXF1ZXN0ZXJUb1RlcnJhZm9ybSh0aGlzLl9yZXF1ZXN0ZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19