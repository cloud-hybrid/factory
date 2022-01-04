"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAclRule = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule}.
 *
 * @stability stable
 */
class NetworkAclRule extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_network_acl_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cidrBlock = config.cidrBlock;
        this._egress = config.egress;
        this._fromPort = config.fromPort;
        this._icmpCode = config.icmpCode;
        this._icmpType = config.icmpType;
        this._ipv6CidrBlock = config.ipv6CidrBlock;
        this._networkAclId = config.networkAclId;
        this._protocol = config.protocol;
        this._ruleAction = config.ruleAction;
        this._ruleNumber = config.ruleNumber;
        this._toPort = config.toPort;
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
    /**
     * @stability stable
     */
    get egress() {
        return this.getBooleanAttribute('egress');
    }
    /**
     * @stability stable
     */
    set egress(value) {
        this._egress = value;
    }
    /**
     * @stability stable
     */
    resetEgress() {
        this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get egressInput() {
        return this._egress;
    }
    /**
     * @stability stable
     */
    get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    /**
     * @stability stable
     */
    set fromPort(value) {
        this._fromPort = value;
    }
    /**
     * @stability stable
     */
    resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fromPortInput() {
        return this._fromPort;
    }
    /**
     * @stability stable
     */
    get icmpCode() {
        return this.getStringAttribute('icmp_code');
    }
    /**
     * @stability stable
     */
    set icmpCode(value) {
        this._icmpCode = value;
    }
    /**
     * @stability stable
     */
    resetIcmpCode() {
        this._icmpCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get icmpCodeInput() {
        return this._icmpCode;
    }
    /**
     * @stability stable
     */
    get icmpType() {
        return this.getStringAttribute('icmp_type');
    }
    /**
     * @stability stable
     */
    set icmpType(value) {
        this._icmpType = value;
    }
    /**
     * @stability stable
     */
    resetIcmpType() {
        this._icmpType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get icmpTypeInput() {
        return this._icmpType;
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
    get ipv6CidrBlock() {
        return this.getStringAttribute('ipv6_cidr_block');
    }
    /**
     * @stability stable
     */
    set ipv6CidrBlock(value) {
        this._ipv6CidrBlock = value;
    }
    /**
     * @stability stable
     */
    resetIpv6CidrBlock() {
        this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipv6CidrBlockInput() {
        return this._ipv6CidrBlock;
    }
    /**
     * @stability stable
     */
    get networkAclId() {
        return this.getStringAttribute('network_acl_id');
    }
    /**
     * @stability stable
     */
    set networkAclId(value) {
        this._networkAclId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkAclIdInput() {
        return this._networkAclId;
    }
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    /**
     * @stability stable
     */
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protocolInput() {
        return this._protocol;
    }
    /**
     * @stability stable
     */
    get ruleAction() {
        return this.getStringAttribute('rule_action');
    }
    /**
     * @stability stable
     */
    set ruleAction(value) {
        this._ruleAction = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ruleActionInput() {
        return this._ruleAction;
    }
    /**
     * @stability stable
     */
    get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
    /**
     * @stability stable
     */
    set ruleNumber(value) {
        this._ruleNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ruleNumberInput() {
        return this._ruleNumber;
    }
    /**
     * @stability stable
     */
    get toPort() {
        return this.getNumberAttribute('to_port');
    }
    /**
     * @stability stable
     */
    set toPort(value) {
        this._toPort = value;
    }
    /**
     * @stability stable
     */
    resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get toPortInput() {
        return this._toPort;
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
            egress: cdktf.booleanToTerraform(this._egress),
            from_port: cdktf.numberToTerraform(this._fromPort),
            icmp_code: cdktf.stringToTerraform(this._icmpCode),
            icmp_type: cdktf.stringToTerraform(this._icmpType),
            ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
            network_acl_id: cdktf.stringToTerraform(this._networkAclId),
            protocol: cdktf.stringToTerraform(this._protocol),
            rule_action: cdktf.stringToTerraform(this._ruleAction),
            rule_number: cdktf.numberToTerraform(this._ruleNumber),
            to_port: cdktf.numberToTerraform(this._toPort),
        };
    }
}
exports.NetworkAclRule = NetworkAclRule;
_a = JSII_RTTI_SYMBOL_1;
NetworkAclRule[_a] = { fqn: "@cdktf/provider-aws.vpc.NetworkAclRule", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
NetworkAclRule.tfResourceType = "aws_network_acl_rule";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay1hY2wtcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92cGMvbmV0d29yay1hY2wtcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBNkIvQixNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3pELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE0QjtRQUMzRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHNCQUFzQjtZQUM3QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxH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SyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDL0MsQ0FBQztJQUNKLENBQUM7O0FBbk9ILHdDQW9PQzs7O0FBbE9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNkJBQWMsR0FBVyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya0FjbFJ1bGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNpZHJCbG9jaz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlZ3Jlc3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnJvbVBvcnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWNtcENvZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWNtcFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXB2NkNpZHJCbG9jaz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0FjbElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGVBY3Rpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcnVsZU51bWJlcjogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdG9Qb3J0PzogbnVtYmVyO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgTmV0d29ya0FjbFJ1bGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfbmV0d29ya19hY2xfcnVsZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBOZXR3b3JrQWNsUnVsZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX25ldHdvcmtfYWNsX3J1bGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY2lkckJsb2NrID0gY29uZmlnLmNpZHJCbG9jaztcbiAgICB0aGlzLl9lZ3Jlc3MgPSBjb25maWcuZWdyZXNzO1xuICAgIHRoaXMuX2Zyb21Qb3J0ID0gY29uZmlnLmZyb21Qb3J0O1xuICAgIHRoaXMuX2ljbXBDb2RlID0gY29uZmlnLmljbXBDb2RlO1xuICAgIHRoaXMuX2ljbXBUeXBlID0gY29uZmlnLmljbXBUeXBlO1xuICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSBjb25maWcuaXB2NkNpZHJCbG9jaztcbiAgICB0aGlzLl9uZXR3b3JrQWNsSWQgPSBjb25maWcubmV0d29ya0FjbElkO1xuICAgIHRoaXMuX3Byb3RvY29sID0gY29uZmlnLnByb3RvY29sO1xuICAgIHRoaXMuX3J1bGVBY3Rpb24gPSBjb25maWcucnVsZUFjdGlvbjtcbiAgICB0aGlzLl9ydWxlTnVtYmVyID0gY29uZmlnLnJ1bGVOdW1iZXI7XG4gICAgdGhpcy5fdG9Qb3J0ID0gY29uZmlnLnRvUG9ydDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY2lkcl9ibG9jayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jaWRyQmxvY2s/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNpZHJCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NpZHJfYmxvY2snKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNpZHJCbG9jayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2lkckJsb2NrID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2lkckJsb2NrKCkge1xuICAgIHRoaXMuX2NpZHJCbG9jayA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2lkckJsb2NrSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NpZHJCbG9jaztcbiAgfVxuXG4gIC8vIGVncmVzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lZ3Jlc3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVncmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlZ3Jlc3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlZ3Jlc3ModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VncmVzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVncmVzcygpIHtcbiAgICB0aGlzLl9lZ3Jlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVncmVzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lZ3Jlc3M7XG4gIH1cblxuICAvLyBmcm9tX3BvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZnJvbVBvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGZyb21Qb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbV9wb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmcm9tUG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZnJvbVBvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGcm9tUG9ydCgpIHtcbiAgICB0aGlzLl9mcm9tUG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnJvbVBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbVBvcnQ7XG4gIH1cblxuICAvLyBpY21wX2NvZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWNtcENvZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGljbXBDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWNtcF9jb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpY21wQ29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNtcENvZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJY21wQ29kZSgpIHtcbiAgICB0aGlzLl9pY21wQ29kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWNtcENvZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWNtcENvZGU7XG4gIH1cblxuICAvLyBpY21wX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWNtcFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGljbXBUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWNtcF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpY21wVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNtcFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJY21wVHlwZSgpIHtcbiAgICB0aGlzLl9pY21wVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWNtcFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWNtcFR5cGU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaXB2Nl9jaWRyX2Jsb2NrIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjZDaWRyQmxvY2s/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlwdjZDaWRyQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcHY2X2NpZHJfYmxvY2snKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwdjZDaWRyQmxvY2sodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcHY2Q2lkckJsb2NrKCkge1xuICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlwdjZDaWRyQmxvY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXB2NkNpZHJCbG9jaztcbiAgfVxuXG4gIC8vIG5ldHdvcmtfYWNsX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25ldHdvcmtBY2xJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmV0d29ya0FjbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV0d29ya19hY2xfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtBY2xJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmV0d29ya0FjbElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtBY2xJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrQWNsSWQ7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLy8gcnVsZV9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcnVsZUFjdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcnVsZUFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bGVfYWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBydWxlQWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ydWxlQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bGVBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZUFjdGlvbjtcbiAgfVxuXG4gIC8vIHJ1bGVfbnVtYmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3J1bGVOdW1iZXI/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHJ1bGVOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdydWxlX251bWJlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcnVsZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcnVsZU51bWJlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydWxlTnVtYmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGVOdW1iZXI7XG4gIH1cblxuICAvLyB0b19wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RvUG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdG9Qb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndG9fcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdG9Qb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b1BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUb1BvcnQoKSB7XG4gICAgdGhpcy5fdG9Qb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0b1BvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Qb3J0O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjaWRyX2Jsb2NrOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jaWRyQmxvY2spLFxuICAgICAgZWdyZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZWdyZXNzKSxcbiAgICAgIGZyb21fcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZnJvbVBvcnQpLFxuICAgICAgaWNtcF9jb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pY21wQ29kZSksXG4gICAgICBpY21wX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ljbXBUeXBlKSxcbiAgICAgIGlwdjZfY2lkcl9ibG9jazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faXB2NkNpZHJCbG9jayksXG4gICAgICBuZXR3b3JrX2FjbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmV0d29ya0FjbElkKSxcbiAgICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcm90b2NvbCksXG4gICAgICBydWxlX2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcnVsZUFjdGlvbiksXG4gICAgICBydWxlX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcnVsZU51bWJlciksXG4gICAgICB0b19wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90b1BvcnQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==