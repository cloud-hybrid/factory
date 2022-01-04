"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultVpc = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc}.
 *
 * @stability stable
 */
class DefaultVpc extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_default_vpc',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._enableClassiclink = config.enableClassiclink;
        this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
        this._enableDnsHostnames = config.enableDnsHostnames;
        this._enableDnsSupport = config.enableDnsSupport;
        this._ipv4IpamPoolId = config.ipv4IpamPoolId;
        this._ipv4NetmaskLength = config.ipv4NetmaskLength;
        this._ipv6CidrBlock = config.ipv6CidrBlock;
        this._ipv6IpamPoolId = config.ipv6IpamPoolId;
        this._ipv6NetmaskLength = config.ipv6NetmaskLength;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
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
    // assign_generated_ipv6_cidr_block - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get assignGeneratedIpv6CidrBlock() {
        return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
    }
    // cidr_block - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    // default_network_acl_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultNetworkAclId() {
        return this.getStringAttribute('default_network_acl_id');
    }
    // default_route_table_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultRouteTableId() {
        return this.getStringAttribute('default_route_table_id');
    }
    // default_security_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultSecurityGroupId() {
        return this.getStringAttribute('default_security_group_id');
    }
    // dhcp_options_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dhcpOptionsId() {
        return this.getStringAttribute('dhcp_options_id');
    }
    /**
     * @stability stable
     */
    get enableClassiclink() {
        return this.getBooleanAttribute('enable_classiclink');
    }
    /**
     * @stability stable
     */
    set enableClassiclink(value) {
        this._enableClassiclink = value;
    }
    /**
     * @stability stable
     */
    resetEnableClassiclink() {
        this._enableClassiclink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableClassiclinkInput() {
        return this._enableClassiclink;
    }
    /**
     * @stability stable
     */
    get enableClassiclinkDnsSupport() {
        return this.getBooleanAttribute('enable_classiclink_dns_support');
    }
    /**
     * @stability stable
     */
    set enableClassiclinkDnsSupport(value) {
        this._enableClassiclinkDnsSupport = value;
    }
    /**
     * @stability stable
     */
    resetEnableClassiclinkDnsSupport() {
        this._enableClassiclinkDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableClassiclinkDnsSupportInput() {
        return this._enableClassiclinkDnsSupport;
    }
    /**
     * @stability stable
     */
    get enableDnsHostnames() {
        return this.getBooleanAttribute('enable_dns_hostnames');
    }
    /**
     * @stability stable
     */
    set enableDnsHostnames(value) {
        this._enableDnsHostnames = value;
    }
    /**
     * @stability stable
     */
    resetEnableDnsHostnames() {
        this._enableDnsHostnames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableDnsHostnamesInput() {
        return this._enableDnsHostnames;
    }
    /**
     * @stability stable
     */
    get enableDnsSupport() {
        return this.getBooleanAttribute('enable_dns_support');
    }
    /**
     * @stability stable
     */
    set enableDnsSupport(value) {
        this._enableDnsSupport = value;
    }
    /**
     * @stability stable
     */
    resetEnableDnsSupport() {
        this._enableDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableDnsSupportInput() {
        return this._enableDnsSupport;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_tenancy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceTenancy() {
        return this.getStringAttribute('instance_tenancy');
    }
    /**
     * @stability stable
     */
    get ipv4IpamPoolId() {
        return this.getStringAttribute('ipv4_ipam_pool_id');
    }
    /**
     * @stability stable
     */
    set ipv4IpamPoolId(value) {
        this._ipv4IpamPoolId = value;
    }
    /**
     * @stability stable
     */
    resetIpv4IpamPoolId() {
        this._ipv4IpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipv4IpamPoolIdInput() {
        return this._ipv4IpamPoolId;
    }
    /**
     * @stability stable
     */
    get ipv4NetmaskLength() {
        return this.getNumberAttribute('ipv4_netmask_length');
    }
    /**
     * @stability stable
     */
    set ipv4NetmaskLength(value) {
        this._ipv4NetmaskLength = value;
    }
    /**
     * @stability stable
     */
    resetIpv4NetmaskLength() {
        this._ipv4NetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipv4NetmaskLengthInput() {
        return this._ipv4NetmaskLength;
    }
    // ipv6_association_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv6AssociationId() {
        return this.getStringAttribute('ipv6_association_id');
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
    get ipv6IpamPoolId() {
        return this.getStringAttribute('ipv6_ipam_pool_id');
    }
    /**
     * @stability stable
     */
    set ipv6IpamPoolId(value) {
        this._ipv6IpamPoolId = value;
    }
    /**
     * @stability stable
     */
    resetIpv6IpamPoolId() {
        this._ipv6IpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipv6IpamPoolIdInput() {
        return this._ipv6IpamPoolId;
    }
    /**
     * @stability stable
     */
    get ipv6NetmaskLength() {
        return this.getNumberAttribute('ipv6_netmask_length');
    }
    /**
     * @stability stable
     */
    set ipv6NetmaskLength(value) {
        this._ipv6NetmaskLength = value;
    }
    /**
     * @stability stable
     */
    resetIpv6NetmaskLength() {
        this._ipv6NetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipv6NetmaskLengthInput() {
        return this._ipv6NetmaskLength;
    }
    // main_route_table_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get mainRouteTableId() {
        return this.getStringAttribute('main_route_table_id');
    }
    // owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ownerId() {
        return this.getStringAttribute('owner_id');
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
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
            enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
            enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
            enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
            ipv4_ipam_pool_id: cdktf.stringToTerraform(this._ipv4IpamPoolId),
            ipv4_netmask_length: cdktf.numberToTerraform(this._ipv4NetmaskLength),
            ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
            ipv6_ipam_pool_id: cdktf.stringToTerraform(this._ipv6IpamPoolId),
            ipv6_netmask_length: cdktf.numberToTerraform(this._ipv6NetmaskLength),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
exports.DefaultVpc = DefaultVpc;
_a = JSII_RTTI_SYMBOL_1;
DefaultVpc[_a] = { fqn: "@cdktf/provider-aws.vpc.DefaultVpc", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DefaultVpc.tfResourceType = "aws_default_vpc";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12cGMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdnBjL2RlZmF1bHQtdnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7Ozs7QUE2Qi9CLE1BQWEsVUFBVyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPckQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQTJCLEVBQUU7UUFDNUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxpQkFBaUI7WUFDeEMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztRQUN2RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJ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QW9COzs7O0FBQ0cseUJBQWMsR0FBVyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZwY0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUNsYXNzaWNsaW5rPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUNsYXNzaWNsaW5rRG5zU3VwcG9ydD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlRG5zSG9zdG5hbWVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZURuc1N1cHBvcnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlwdjRJcGFtUG9vbElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXB2NE5ldG1hc2tMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXB2NkNpZHJCbG9jaz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXB2NklwYW1Qb29sSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpcHY2TmV0bWFza0xlbmd0aD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERlZmF1bHRWcGMgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZGVmYXVsdF92cGNcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGVmYXVsdFZwY0NvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZGVmYXVsdF92cGMnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZW5hYmxlQ2xhc3NpY2xpbmsgPSBjb25maWcuZW5hYmxlQ2xhc3NpY2xpbms7XG4gICAgdGhpcy5fZW5hYmxlQ2xhc3NpY2xpbmtEbnNTdXBwb3J0ID0gY29uZmlnLmVuYWJsZUNsYXNzaWNsaW5rRG5zU3VwcG9ydDtcbiAgICB0aGlzLl9lbmFibGVEbnNIb3N0bmFtZXMgPSBjb25maWcuZW5hYmxlRG5zSG9zdG5hbWVzO1xuICAgIHRoaXMuX2VuYWJsZURuc1N1cHBvcnQgPSBjb25maWcuZW5hYmxlRG5zU3VwcG9ydDtcbiAgICB0aGlzLl9pcHY0SXBhbVBvb2xJZCA9IGNvbmZpZy5pcHY0SXBhbVBvb2xJZDtcbiAgICB0aGlzLl9pcHY0TmV0bWFza0xlbmd0aCA9IGNvbmZpZy5pcHY0TmV0bWFza0xlbmd0aDtcbiAgICB0aGlzLl9pcHY2Q2lkckJsb2NrID0gY29uZmlnLmlwdjZDaWRyQmxvY2s7XG4gICAgdGhpcy5faXB2NklwYW1Qb29sSWQgPSBjb25maWcuaXB2NklwYW1Qb29sSWQ7XG4gICAgdGhpcy5faXB2Nk5ldG1hc2tMZW5ndGggPSBjb25maWcuaXB2Nk5ldG1hc2tMZW5ndGg7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhc3NpZ25fZ2VuZXJhdGVkX2lwdjZfY2lkcl9ibG9jayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc2lnbkdlbmVyYXRlZElwdjZDaWRyQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXNzaWduX2dlbmVyYXRlZF9pcHY2X2NpZHJfYmxvY2snKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjaWRyX2Jsb2NrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2lkckJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2lkcl9ibG9jaycpO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9uZXR3b3JrX2FjbF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZmF1bHROZXR3b3JrQWNsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X25ldHdvcmtfYWNsX2lkJyk7XG4gIH1cblxuICAvLyBkZWZhdWx0X3JvdXRlX3RhYmxlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJvdXRlVGFibGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfcm91dGVfdGFibGVfaWQnKTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWZhdWx0U2VjdXJpdHlHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9zZWN1cml0eV9ncm91cF9pZCcpO1xuICB9XG5cbiAgLy8gZGhjcF9vcHRpb25zX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGhjcE9wdGlvbnNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RoY3Bfb3B0aW9uc19pZCcpO1xuICB9XG5cbiAgLy8gZW5hYmxlX2NsYXNzaWNsaW5rIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlQ2xhc3NpY2xpbms/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUNsYXNzaWNsaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9jbGFzc2ljbGluaycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUNsYXNzaWNsaW5rKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVDbGFzc2ljbGluayA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUNsYXNzaWNsaW5rKCkge1xuICAgIHRoaXMuX2VuYWJsZUNsYXNzaWNsaW5rID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVDbGFzc2ljbGlua0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVDbGFzc2ljbGluaztcbiAgfVxuXG4gIC8vIGVuYWJsZV9jbGFzc2ljbGlua19kbnNfc3VwcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUNsYXNzaWNsaW5rRG5zU3VwcG9ydD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQ2xhc3NpY2xpbmtEbnNTdXBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9jbGFzc2ljbGlua19kbnNfc3VwcG9ydCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUNsYXNzaWNsaW5rRG5zU3VwcG9ydCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlQ2xhc3NpY2xpbmtEbnNTdXBwb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQ2xhc3NpY2xpbmtEbnNTdXBwb3J0KCkge1xuICAgIHRoaXMuX2VuYWJsZUNsYXNzaWNsaW5rRG5zU3VwcG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlQ2xhc3NpY2xpbmtEbnNTdXBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUNsYXNzaWNsaW5rRG5zU3VwcG9ydDtcbiAgfVxuXG4gIC8vIGVuYWJsZV9kbnNfaG9zdG5hbWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlRG5zSG9zdG5hbWVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVEbnNIb3N0bmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2Ruc19ob3N0bmFtZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVEbnNIb3N0bmFtZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZURuc0hvc3RuYW1lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZURuc0hvc3RuYW1lcygpIHtcbiAgICB0aGlzLl9lbmFibGVEbnNIb3N0bmFtZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZURuc0hvc3RuYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVEbnNIb3N0bmFtZXM7XG4gIH1cblxuICAvLyBlbmFibGVfZG5zX3N1cHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlRG5zU3VwcG9ydD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlRG5zU3VwcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfZG5zX3N1cHBvcnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVEbnNTdXBwb3J0KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVEbnNTdXBwb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlRG5zU3VwcG9ydCgpIHtcbiAgICB0aGlzLl9lbmFibGVEbnNTdXBwb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVEbnNTdXBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZURuc1N1cHBvcnQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdGVuYW5jeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVGVuYW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3RlbmFuY3knKTtcbiAgfVxuXG4gIC8vIGlwdjRfaXBhbV9wb29sX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjRJcGFtUG9vbElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcHY0SXBhbVBvb2xJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwdjRfaXBhbV9wb29sX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpcHY0SXBhbVBvb2xJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXB2NElwYW1Qb29sSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcHY0SXBhbVBvb2xJZCgpIHtcbiAgICB0aGlzLl9pcHY0SXBhbVBvb2xJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXB2NElwYW1Qb29sSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXB2NElwYW1Qb29sSWQ7XG4gIH1cblxuICAvLyBpcHY0X25ldG1hc2tfbGVuZ3RoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjROZXRtYXNrTGVuZ3RoPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpcHY0TmV0bWFza0xlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lwdjRfbmV0bWFza19sZW5ndGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwdjROZXRtYXNrTGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pcHY0TmV0bWFza0xlbmd0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElwdjROZXRtYXNrTGVuZ3RoKCkge1xuICAgIHRoaXMuX2lwdjROZXRtYXNrTGVuZ3RoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcHY0TmV0bWFza0xlbmd0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pcHY0TmV0bWFza0xlbmd0aDtcbiAgfVxuXG4gIC8vIGlwdjZfYXNzb2NpYXRpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcHY2QXNzb2NpYXRpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwdjZfYXNzb2NpYXRpb25faWQnKTtcbiAgfVxuXG4gIC8vIGlwdjZfY2lkcl9ibG9jayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjZDaWRyQmxvY2s/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlwdjZDaWRyQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcHY2X2NpZHJfYmxvY2snKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwdjZDaWRyQmxvY2sodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcHY2Q2lkckJsb2NrKCkge1xuICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlwdjZDaWRyQmxvY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXB2NkNpZHJCbG9jaztcbiAgfVxuXG4gIC8vIGlwdjZfaXBhbV9wb29sX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjZJcGFtUG9vbElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcHY2SXBhbVBvb2xJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwdjZfaXBhbV9wb29sX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpcHY2SXBhbVBvb2xJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXB2NklwYW1Qb29sSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcHY2SXBhbVBvb2xJZCgpIHtcbiAgICB0aGlzLl9pcHY2SXBhbVBvb2xJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXB2NklwYW1Qb29sSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXB2NklwYW1Qb29sSWQ7XG4gIH1cblxuICAvLyBpcHY2X25ldG1hc2tfbGVuZ3RoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjZOZXRtYXNrTGVuZ3RoPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpcHY2TmV0bWFza0xlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lwdjZfbmV0bWFza19sZW5ndGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwdjZOZXRtYXNrTGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pcHY2TmV0bWFza0xlbmd0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElwdjZOZXRtYXNrTGVuZ3RoKCkge1xuICAgIHRoaXMuX2lwdjZOZXRtYXNrTGVuZ3RoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcHY2TmV0bWFza0xlbmd0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pcHY2TmV0bWFza0xlbmd0aDtcbiAgfVxuXG4gIC8vIG1haW5fcm91dGVfdGFibGVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYWluUm91dGVUYWJsZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFpbl9yb3V0ZV90YWJsZV9pZCcpO1xuICB9XG5cbiAgLy8gb3duZXJfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3duZXJfaWQnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVuYWJsZV9jbGFzc2ljbGluazogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZUNsYXNzaWNsaW5rKSxcbiAgICAgIGVuYWJsZV9jbGFzc2ljbGlua19kbnNfc3VwcG9ydDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZUNsYXNzaWNsaW5rRG5zU3VwcG9ydCksXG4gICAgICBlbmFibGVfZG5zX2hvc3RuYW1lczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZURuc0hvc3RuYW1lcyksXG4gICAgICBlbmFibGVfZG5zX3N1cHBvcnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVEbnNTdXBwb3J0KSxcbiAgICAgIGlwdjRfaXBhbV9wb29sX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pcHY0SXBhbVBvb2xJZCksXG4gICAgICBpcHY0X25ldG1hc2tfbGVuZ3RoOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9pcHY0TmV0bWFza0xlbmd0aCksXG4gICAgICBpcHY2X2NpZHJfYmxvY2s6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lwdjZDaWRyQmxvY2spLFxuICAgICAgaXB2Nl9pcGFtX3Bvb2xfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lwdjZJcGFtUG9vbElkKSxcbiAgICAgIGlwdjZfbmV0bWFza19sZW5ndGg6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2lwdjZOZXRtYXNrTGVuZ3RoKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==