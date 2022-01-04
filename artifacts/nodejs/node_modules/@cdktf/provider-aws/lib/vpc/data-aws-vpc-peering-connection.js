"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsVpcPeeringConnection = exports.dataAwsVpcPeeringConnectionFilterToTerraform = exports.DataAwsVpcPeeringConnectionPeerCidrBlockSet = exports.DataAwsVpcPeeringConnectionCidrBlockSet = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsVpcPeeringConnectionCidrBlockSet extends cdktf.ComplexComputedList {
    // cidr_block - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
}
exports.DataAwsVpcPeeringConnectionCidrBlockSet = DataAwsVpcPeeringConnectionCidrBlockSet;
_a = JSII_RTTI_SYMBOL_1;
DataAwsVpcPeeringConnectionCidrBlockSet[_a] = { fqn: "@cdktf/provider-aws.vpc.DataAwsVpcPeeringConnectionCidrBlockSet", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsVpcPeeringConnectionPeerCidrBlockSet extends cdktf.ComplexComputedList {
    // cidr_block - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
}
exports.DataAwsVpcPeeringConnectionPeerCidrBlockSet = DataAwsVpcPeeringConnectionPeerCidrBlockSet;
_b = JSII_RTTI_SYMBOL_1;
DataAwsVpcPeeringConnectionPeerCidrBlockSet[_b] = { fqn: "@cdktf/provider-aws.vpc.DataAwsVpcPeeringConnectionPeerCidrBlockSet", version: "3.0.1" };
function dataAwsVpcPeeringConnectionFilterToTerraform(struct) {
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
exports.dataAwsVpcPeeringConnectionFilterToTerraform = dataAwsVpcPeeringConnectionFilterToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection}.
 *
 * @stability stable
 */
class DataAwsVpcPeeringConnection extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cidrBlock = config.cidrBlock;
        this._ownerId = config.ownerId;
        this._peerCidrBlock = config.peerCidrBlock;
        this._peerOwnerId = config.peerOwnerId;
        this._peerRegion = config.peerRegion;
        this._peerVpcId = config.peerVpcId;
        this._region = config.region;
        this._status = config.status;
        this._tags = config.tags;
        this._vpcId = config.vpcId;
        this._filter = config.filter;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accepter - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    accepter(key) {
        return new cdktf.BooleanMap(this, 'accepter').lookup(key);
    }
    /**
     * @stability stable
     */
    get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    /**
     * @stability stable
     */
    set cidrBlock(value) {
        this._cidrBlock = value;
    }
    /**
     * @stability stable
     */
    resetCidrBlock() {
        this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cidrBlockInput() {
        return this._cidrBlock;
    }
    // cidr_block_set - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    cidrBlockSet(index) {
        return new DataAwsVpcPeeringConnectionCidrBlockSet(this, 'cidr_block_set', index);
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
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    /**
     * @stability stable
     */
    set ownerId(value) {
        this._ownerId = value;
    }
    /**
     * @stability stable
     */
    resetOwnerId() {
        this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ownerIdInput() {
        return this._ownerId;
    }
    /**
     * @stability stable
     */
    get peerCidrBlock() {
        return this.getStringAttribute('peer_cidr_block');
    }
    /**
     * @stability stable
     */
    set peerCidrBlock(value) {
        this._peerCidrBlock = value;
    }
    /**
     * @stability stable
     */
    resetPeerCidrBlock() {
        this._peerCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get peerCidrBlockInput() {
        return this._peerCidrBlock;
    }
    // peer_cidr_block_set - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    peerCidrBlockSet(index) {
        return new DataAwsVpcPeeringConnectionPeerCidrBlockSet(this, 'peer_cidr_block_set', index);
    }
    /**
     * @stability stable
     */
    get peerOwnerId() {
        return this.getStringAttribute('peer_owner_id');
    }
    /**
     * @stability stable
     */
    set peerOwnerId(value) {
        this._peerOwnerId = value;
    }
    /**
     * @stability stable
     */
    resetPeerOwnerId() {
        this._peerOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get peerOwnerIdInput() {
        return this._peerOwnerId;
    }
    /**
     * @stability stable
     */
    get peerRegion() {
        return this.getStringAttribute('peer_region');
    }
    /**
     * @stability stable
     */
    set peerRegion(value) {
        this._peerRegion = value;
    }
    /**
     * @stability stable
     */
    resetPeerRegion() {
        this._peerRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get peerRegionInput() {
        return this._peerRegion;
    }
    /**
     * @stability stable
     */
    get peerVpcId() {
        return this.getStringAttribute('peer_vpc_id');
    }
    /**
     * @stability stable
     */
    set peerVpcId(value) {
        this._peerVpcId = value;
    }
    /**
     * @stability stable
     */
    resetPeerVpcId() {
        this._peerVpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get peerVpcIdInput() {
        return this._peerVpcId;
    }
    /**
     * @stability stable
     */
    get region() {
        return this.getStringAttribute('region');
    }
    /**
     * @stability stable
     */
    set region(value) {
        this._region = value;
    }
    /**
     * @stability stable
     */
    resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regionInput() {
        return this._region;
    }
    // requester - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    requester(key) {
        return new cdktf.BooleanMap(this, 'requester').lookup(key);
    }
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    /**
     * @stability stable
     */
    set status(value) {
        this._status = value;
    }
    /**
     * @stability stable
     */
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusInput() {
        return this._status;
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
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    /**
     * @stability stable
     */
    set vpcId(value) {
        this._vpcId = value;
    }
    /**
     * @stability stable
     */
    resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcIdInput() {
        return this._vpcId;
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
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            owner_id: cdktf.stringToTerraform(this._ownerId),
            peer_cidr_block: cdktf.stringToTerraform(this._peerCidrBlock),
            peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
            peer_region: cdktf.stringToTerraform(this._peerRegion),
            peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
            region: cdktf.stringToTerraform(this._region),
            status: cdktf.stringToTerraform(this._status),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            filter: cdktf.listMapper(dataAwsVpcPeeringConnectionFilterToTerraform)(this._filter),
        };
    }
}
exports.DataAwsVpcPeeringConnection = DataAwsVpcPeeringConnection;
_c = JSII_RTTI_SYMBOL_1;
DataAwsVpcPeeringConnection[_c] = { fqn: "@cdktf/provider-aws.vpc.DataAwsVpcPeeringConnection", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsVpcPeeringConnection.tfResourceType = "aws_vpc_peering_connection";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtdnBjLXBlZXJpbmctY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92cGMvZGF0YS1hd3MtdnBjLXBlZXJpbmctY29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQTJCL0IsTUFBYSx1Q0FBd0MsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXBGLGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7QUFMSCwwRkFNQzs7Ozs7O0FBQ0QsTUFBYSwyQ0FBNEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXhGLGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7QUFMSCxrR0FNQzs7O0FBUUQsU0FBZ0IsNENBQTRDLENBQUMsTUFBMEM7SUFDckcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQztBQVRELG9HQVNDOzs7Ozs7QUFJRCxNQUFhLDJCQUE0QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7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QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDBDQUFjLEdBQVcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NWcGNQZWVyaW5nQ29ubmVjdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNpZHJCbG9jaz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG93bmVySWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlZXJDaWRyQmxvY2s/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVlck93bmVySWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwZWVyUmVnaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVlclZwY0lkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWdpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2cGNJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbHRlcj86IERhdGFBd3NWcGNQZWVyaW5nQ29ubmVjdGlvbkZpbHRlcltdO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NWcGNQZWVyaW5nQ29ubmVjdGlvbkNpZHJCbG9ja1NldCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNpZHJfYmxvY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaWRyQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjaWRyX2Jsb2NrJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzVnBjUGVlcmluZ0Nvbm5lY3Rpb25QZWVyQ2lkckJsb2NrU2V0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2lkcl9ibG9jayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNpZHJCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NpZHJfYmxvY2snKTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzVnBjUGVlcmluZ0Nvbm5lY3Rpb25GaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NWcGNQZWVyaW5nQ29ubmVjdGlvbkZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NWcGNQZWVyaW5nQ29ubmVjdGlvbkZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlcyksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c1ZwY1BlZXJpbmdDb25uZWN0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfdnBjX3BlZXJpbmdfY29ubmVjdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzVnBjUGVlcmluZ0Nvbm5lY3Rpb25Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY2lkckJsb2NrID0gY29uZmlnLmNpZHJCbG9jaztcbiAgICB0aGlzLl9vd25lcklkID0gY29uZmlnLm93bmVySWQ7XG4gICAgdGhpcy5fcGVlckNpZHJCbG9jayA9IGNvbmZpZy5wZWVyQ2lkckJsb2NrO1xuICAgIHRoaXMuX3BlZXJPd25lcklkID0gY29uZmlnLnBlZXJPd25lcklkO1xuICAgIHRoaXMuX3BlZXJSZWdpb24gPSBjb25maWcucGVlclJlZ2lvbjtcbiAgICB0aGlzLl9wZWVyVnBjSWQgPSBjb25maWcucGVlclZwY0lkO1xuICAgIHRoaXMuX3JlZ2lvbiA9IGNvbmZpZy5yZWdpb247XG4gICAgdGhpcy5fc3RhdHVzID0gY29uZmlnLnN0YXR1cztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdnBjSWQgPSBjb25maWcudnBjSWQ7XG4gICAgdGhpcy5fZmlsdGVyID0gY29uZmlnLmZpbHRlcjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjZXB0ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGFjY2VwdGVyKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5ldyBjZGt0Zi5Cb29sZWFuTWFwKHRoaXMsICdhY2NlcHRlcicpLmxvb2t1cChrZXkpO1xuICB9XG5cbiAgLy8gY2lkcl9ibG9jayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NpZHJCbG9jaz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2lkckJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2lkcl9ibG9jaycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2lkckJsb2NrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaWRyQmxvY2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaWRyQmxvY2soKSB7XG4gICAgdGhpcy5fY2lkckJsb2NrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjaWRyQmxvY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2lkckJsb2NrO1xuICB9XG5cbiAgLy8gY2lkcl9ibG9ja19zZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGNpZHJCbG9ja1NldChpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzVnBjUGVlcmluZ0Nvbm5lY3Rpb25DaWRyQmxvY2tTZXQodGhpcywgJ2NpZHJfYmxvY2tfc2V0JywgaW5kZXgpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG93bmVyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3duZXJJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3duZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBvd25lcklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vd25lcklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3duZXJJZCgpIHtcbiAgICB0aGlzLl9vd25lcklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvd25lcklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX293bmVySWQ7XG4gIH1cblxuICAvLyBwZWVyX2NpZHJfYmxvY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZWVyQ2lkckJsb2NrPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwZWVyQ2lkckJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGVlcl9jaWRyX2Jsb2NrJyk7XG4gIH1cbiAgcHVibGljIHNldCBwZWVyQ2lkckJsb2NrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wZWVyQ2lkckJsb2NrID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVlckNpZHJCbG9jaygpIHtcbiAgICB0aGlzLl9wZWVyQ2lkckJsb2NrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZWVyQ2lkckJsb2NrSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDaWRyQmxvY2s7XG4gIH1cblxuICAvLyBwZWVyX2NpZHJfYmxvY2tfc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBwZWVyQ2lkckJsb2NrU2V0KGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NWcGNQZWVyaW5nQ29ubmVjdGlvblBlZXJDaWRyQmxvY2tTZXQodGhpcywgJ3BlZXJfY2lkcl9ibG9ja19zZXQnLCBpbmRleCk7XG4gIH1cblxuICAvLyBwZWVyX293bmVyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGVlck93bmVySWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBlZXJPd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGVlcl9vd25lcl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGVlck93bmVySWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BlZXJPd25lcklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVlck93bmVySWQoKSB7XG4gICAgdGhpcy5fcGVlck93bmVySWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlZXJPd25lcklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJPd25lcklkO1xuICB9XG5cbiAgLy8gcGVlcl9yZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZWVyUmVnaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwZWVyUmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGVlcl9yZWdpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBlZXJSZWdpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BlZXJSZWdpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQZWVyUmVnaW9uKCkge1xuICAgIHRoaXMuX3BlZXJSZWdpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlZXJSZWdpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlclJlZ2lvbjtcbiAgfVxuXG4gIC8vIHBlZXJfdnBjX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGVlclZwY0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwZWVyVnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwZWVyX3ZwY19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGVlclZwY0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wZWVyVnBjSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQZWVyVnBjSWQoKSB7XG4gICAgdGhpcy5fcGVlclZwY0lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZWVyVnBjSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlclZwY0lkO1xuICB9XG5cbiAgLy8gcmVnaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVnaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWdpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZ2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVnaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVnaW9uKCkge1xuICAgIHRoaXMuX3JlZ2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVnaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2lvbjtcbiAgfVxuXG4gIC8vIHJlcXVlc3RlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgcmVxdWVzdGVyKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5ldyBjZGt0Zi5Cb29sZWFuTWFwKHRoaXMsICdyZXF1ZXN0ZXInKS5sb29rdXAoa2V5KTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXR1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXR1cygpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHZwY19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2cGNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwY0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjSWQoKSB7XG4gICAgdGhpcy5fdnBjSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY0lkO1xuICB9XG5cbiAgLy8gZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbHRlcj86IERhdGFBd3NWcGNQZWVyaW5nQ29ubmVjdGlvbkZpbHRlcltdOyBcbiAgcHVibGljIGdldCBmaWx0ZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpbHRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbHRlcih2YWx1ZTogRGF0YUF3c1ZwY1BlZXJpbmdDb25uZWN0aW9uRmlsdGVyW10pIHtcbiAgICB0aGlzLl9maWx0ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWx0ZXIoKSB7XG4gICAgdGhpcy5fZmlsdGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWx0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjaWRyX2Jsb2NrOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jaWRyQmxvY2spLFxuICAgICAgb3duZXJfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX293bmVySWQpLFxuICAgICAgcGVlcl9jaWRyX2Jsb2NrOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wZWVyQ2lkckJsb2NrKSxcbiAgICAgIHBlZXJfb3duZXJfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BlZXJPd25lcklkKSxcbiAgICAgIHBlZXJfcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wZWVyUmVnaW9uKSxcbiAgICAgIHBlZXJfdnBjX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wZWVyVnBjSWQpLFxuICAgICAgcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZWdpb24pLFxuICAgICAgc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGF0dXMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB2cGNfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZwY0lkKSxcbiAgICAgIGZpbHRlcjogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzVnBjUGVlcmluZ0Nvbm5lY3Rpb25GaWx0ZXJUb1RlcnJhZm9ybSkodGhpcy5fZmlsdGVyKSxcbiAgICB9O1xuICB9XG59XG4iXX0=