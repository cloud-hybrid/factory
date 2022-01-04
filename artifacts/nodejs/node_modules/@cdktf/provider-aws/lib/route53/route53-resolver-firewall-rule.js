"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route53ResolverFirewallRule = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule}.
 *
 * @stability stable
 */
class Route53ResolverFirewallRule extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route53_resolver_firewall_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._action = config.action;
        this._blockOverrideDnsType = config.blockOverrideDnsType;
        this._blockOverrideDomain = config.blockOverrideDomain;
        this._blockOverrideTtl = config.blockOverrideTtl;
        this._blockResponse = config.blockResponse;
        this._firewallDomainListId = config.firewallDomainListId;
        this._firewallRuleGroupId = config.firewallRuleGroupId;
        this._name = config.name;
        this._priority = config.priority;
    }
    /**
     * @stability stable
     */
    get action() {
        return this.getStringAttribute('action');
    }
    /**
     * @stability stable
     */
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action;
    }
    /**
     * @stability stable
     */
    get blockOverrideDnsType() {
        return this.getStringAttribute('block_override_dns_type');
    }
    /**
     * @stability stable
     */
    set blockOverrideDnsType(value) {
        this._blockOverrideDnsType = value;
    }
    /**
     * @stability stable
     */
    resetBlockOverrideDnsType() {
        this._blockOverrideDnsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockOverrideDnsTypeInput() {
        return this._blockOverrideDnsType;
    }
    /**
     * @stability stable
     */
    get blockOverrideDomain() {
        return this.getStringAttribute('block_override_domain');
    }
    /**
     * @stability stable
     */
    set blockOverrideDomain(value) {
        this._blockOverrideDomain = value;
    }
    /**
     * @stability stable
     */
    resetBlockOverrideDomain() {
        this._blockOverrideDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockOverrideDomainInput() {
        return this._blockOverrideDomain;
    }
    /**
     * @stability stable
     */
    get blockOverrideTtl() {
        return this.getNumberAttribute('block_override_ttl');
    }
    /**
     * @stability stable
     */
    set blockOverrideTtl(value) {
        this._blockOverrideTtl = value;
    }
    /**
     * @stability stable
     */
    resetBlockOverrideTtl() {
        this._blockOverrideTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockOverrideTtlInput() {
        return this._blockOverrideTtl;
    }
    /**
     * @stability stable
     */
    get blockResponse() {
        return this.getStringAttribute('block_response');
    }
    /**
     * @stability stable
     */
    set blockResponse(value) {
        this._blockResponse = value;
    }
    /**
     * @stability stable
     */
    resetBlockResponse() {
        this._blockResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockResponseInput() {
        return this._blockResponse;
    }
    /**
     * @stability stable
     */
    get firewallDomainListId() {
        return this.getStringAttribute('firewall_domain_list_id');
    }
    /**
     * @stability stable
     */
    set firewallDomainListId(value) {
        this._firewallDomainListId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get firewallDomainListIdInput() {
        return this._firewallDomainListId;
    }
    /**
     * @stability stable
     */
    get firewallRuleGroupId() {
        return this.getStringAttribute('firewall_rule_group_id');
    }
    /**
     * @stability stable
     */
    set firewallRuleGroupId(value) {
        this._firewallRuleGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get firewallRuleGroupIdInput() {
        return this._firewallRuleGroupId;
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
    get name() {
        return this.getStringAttribute('name');
    }
    /**
     * @stability stable
     */
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
    }
    /**
     * @stability stable
     */
    get priority() {
        return this.getNumberAttribute('priority');
    }
    /**
     * @stability stable
     */
    set priority(value) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get priorityInput() {
        return this._priority;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            action: cdktf.stringToTerraform(this._action),
            block_override_dns_type: cdktf.stringToTerraform(this._blockOverrideDnsType),
            block_override_domain: cdktf.stringToTerraform(this._blockOverrideDomain),
            block_override_ttl: cdktf.numberToTerraform(this._blockOverrideTtl),
            block_response: cdktf.stringToTerraform(this._blockResponse),
            firewall_domain_list_id: cdktf.stringToTerraform(this._firewallDomainListId),
            firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
        };
    }
}
exports.Route53ResolverFirewallRule = Route53ResolverFirewallRule;
_a = JSII_RTTI_SYMBOL_1;
Route53ResolverFirewallRule[_a] = { fqn: "@cdktf/provider-aws.route53.Route53ResolverFirewallRule", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Route53ResolverFirewallRule.tfResourceType = "aws_route53_resolver_firewall_rule";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1My1yZXNvbHZlci1maXJld2FsbC1ydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlNTMvcm91dGU1My1yZXNvbHZlci1maXJld2FsbC1ydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7Ozs7QUF5Qi9CLE1BQWEsMkJBQTRCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU90RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBeUM7UUFDeEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxvQ0FBb0M7WUFDM0QsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FB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cUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN6RSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ25FLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM1RCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzVFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDMUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNsRCxDQUFDO0lBQ0osQ0FBQzs7QUE1TEgsa0VBNkxDOzs7QUEzTEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywwQ0FBYyxHQUFXLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibG9ja092ZXJyaWRlRG5zVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibG9ja092ZXJyaWRlRG9tYWluPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJsb2NrT3ZlcnJpZGVUdGw/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJsb2NrUmVzcG9uc2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpcmV3YWxsRG9tYWluTGlzdElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaXJld2FsbFJ1bGVHcm91cElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXI7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3JvdXRlNTNfcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFJvdXRlNTNSZXNvbHZlckZpcmV3YWxsUnVsZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3JvdXRlNTNfcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hY3Rpb24gPSBjb25maWcuYWN0aW9uO1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVEbnNUeXBlID0gY29uZmlnLmJsb2NrT3ZlcnJpZGVEbnNUeXBlO1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVEb21haW4gPSBjb25maWcuYmxvY2tPdmVycmlkZURvbWFpbjtcbiAgICB0aGlzLl9ibG9ja092ZXJyaWRlVHRsID0gY29uZmlnLmJsb2NrT3ZlcnJpZGVUdGw7XG4gICAgdGhpcy5fYmxvY2tSZXNwb25zZSA9IGNvbmZpZy5ibG9ja1Jlc3BvbnNlO1xuICAgIHRoaXMuX2ZpcmV3YWxsRG9tYWluTGlzdElkID0gY29uZmlnLmZpcmV3YWxsRG9tYWluTGlzdElkO1xuICAgIHRoaXMuX2ZpcmV3YWxsUnVsZUdyb3VwSWQgPSBjb25maWcuZmlyZXdhbGxSdWxlR3JvdXBJZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBjb25maWcucHJpb3JpdHk7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY3Rpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbjtcbiAgfVxuXG4gIC8vIGJsb2NrX292ZXJyaWRlX2Ruc190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jsb2NrT3ZlcnJpZGVEbnNUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBibG9ja092ZXJyaWRlRG5zVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Jsb2NrX292ZXJyaWRlX2Ruc190eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBibG9ja092ZXJyaWRlRG5zVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmxvY2tPdmVycmlkZURuc1R5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbG9ja092ZXJyaWRlRG5zVHlwZSgpIHtcbiAgICB0aGlzLl9ibG9ja092ZXJyaWRlRG5zVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvY2tPdmVycmlkZURuc1R5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tPdmVycmlkZURuc1R5cGU7XG4gIH1cblxuICAvLyBibG9ja19vdmVycmlkZV9kb21haW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvY2tPdmVycmlkZURvbWFpbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYmxvY2tPdmVycmlkZURvbWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Jsb2NrX292ZXJyaWRlX2RvbWFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmxvY2tPdmVycmlkZURvbWFpbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmxvY2tPdmVycmlkZURvbWFpbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJsb2NrT3ZlcnJpZGVEb21haW4oKSB7XG4gICAgdGhpcy5fYmxvY2tPdmVycmlkZURvbWFpbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvY2tPdmVycmlkZURvbWFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja092ZXJyaWRlRG9tYWluO1xuICB9XG5cbiAgLy8gYmxvY2tfb3ZlcnJpZGVfdHRsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jsb2NrT3ZlcnJpZGVUdGw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJsb2NrT3ZlcnJpZGVUdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdibG9ja19vdmVycmlkZV90dGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJsb2NrT3ZlcnJpZGVUdGwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVUdGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbG9ja092ZXJyaWRlVHRsKCkge1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVUdGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJsb2NrT3ZlcnJpZGVUdGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tPdmVycmlkZVR0bDtcbiAgfVxuXG4gIC8vIGJsb2NrX3Jlc3BvbnNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jsb2NrUmVzcG9uc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJsb2NrUmVzcG9uc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdibG9ja19yZXNwb25zZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmxvY2tSZXNwb25zZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmxvY2tSZXNwb25zZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJsb2NrUmVzcG9uc2UoKSB7XG4gICAgdGhpcy5fYmxvY2tSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvY2tSZXNwb25zZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja1Jlc3BvbnNlO1xuICB9XG5cbiAgLy8gZmlyZXdhbGxfZG9tYWluX2xpc3RfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlyZXdhbGxEb21haW5MaXN0SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpcmV3YWxsRG9tYWluTGlzdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlyZXdhbGxfZG9tYWluX2xpc3RfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpcmV3YWxsRG9tYWluTGlzdElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maXJld2FsbERvbWFpbkxpc3RJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJld2FsbERvbWFpbkxpc3RJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maXJld2FsbERvbWFpbkxpc3RJZDtcbiAgfVxuXG4gIC8vIGZpcmV3YWxsX3J1bGVfZ3JvdXBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlyZXdhbGxSdWxlR3JvdXBJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlyZXdhbGxSdWxlR3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpcmV3YWxsX3J1bGVfZ3JvdXBfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpcmV3YWxsUnVsZUdyb3VwSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpcmV3YWxsUnVsZUdyb3VwSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlyZXdhbGxSdWxlR3JvdXBJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maXJld2FsbFJ1bGVHcm91cElkO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcHJpb3JpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJpb3JpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncHJpb3JpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaW9yaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmlvcml0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hY3Rpb24pLFxuICAgICAgYmxvY2tfb3ZlcnJpZGVfZG5zX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Jsb2NrT3ZlcnJpZGVEbnNUeXBlKSxcbiAgICAgIGJsb2NrX292ZXJyaWRlX2RvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYmxvY2tPdmVycmlkZURvbWFpbiksXG4gICAgICBibG9ja19vdmVycmlkZV90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2Jsb2NrT3ZlcnJpZGVUdGwpLFxuICAgICAgYmxvY2tfcmVzcG9uc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Jsb2NrUmVzcG9uc2UpLFxuICAgICAgZmlyZXdhbGxfZG9tYWluX2xpc3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZpcmV3YWxsRG9tYWluTGlzdElkKSxcbiAgICAgIGZpcmV3YWxsX3J1bGVfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZpcmV3YWxsUnVsZUdyb3VwSWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwcmlvcml0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcHJpb3JpdHkpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==