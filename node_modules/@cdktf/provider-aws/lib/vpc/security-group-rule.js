"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityGroupRule = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule}.
 *
 * @stability stable
 */
class SecurityGroupRule extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_security_group_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cidrBlocks = config.cidrBlocks;
        this._description = config.description;
        this._fromPort = config.fromPort;
        this._ipv6CidrBlocks = config.ipv6CidrBlocks;
        this._prefixListIds = config.prefixListIds;
        this._protocol = config.protocol;
        this._securityGroupId = config.securityGroupId;
        this._self = config.selfAttribute;
        this._sourceSecurityGroupId = config.sourceSecurityGroupId;
        this._toPort = config.toPort;
        this._type = config.type;
    }
    /**
     * @stability stable
     */
    get cidrBlocks() {
        return this.getListAttribute('cidr_blocks');
    }
    /**
     * @stability stable
     */
    set cidrBlocks(value) {
        this._cidrBlocks = value;
    }
    /**
     * @stability stable
     */
    resetCidrBlocks() {
        this._cidrBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cidrBlocksInput() {
        return this._cidrBlocks;
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
    get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    /**
     * @stability stable
     */
    set fromPort(value) {
        this._fromPort = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fromPortInput() {
        return this._fromPort;
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
    get ipv6CidrBlocks() {
        return this.getListAttribute('ipv6_cidr_blocks');
    }
    /**
     * @stability stable
     */
    set ipv6CidrBlocks(value) {
        this._ipv6CidrBlocks = value;
    }
    /**
     * @stability stable
     */
    resetIpv6CidrBlocks() {
        this._ipv6CidrBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipv6CidrBlocksInput() {
        return this._ipv6CidrBlocks;
    }
    /**
     * @stability stable
     */
    get prefixListIds() {
        return this.getListAttribute('prefix_list_ids');
    }
    /**
     * @stability stable
     */
    set prefixListIds(value) {
        this._prefixListIds = value;
    }
    /**
     * @stability stable
     */
    resetPrefixListIds() {
        this._prefixListIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prefixListIdsInput() {
        return this._prefixListIds;
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
    get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
    /**
     * @stability stable
     */
    set securityGroupId(value) {
        this._securityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityGroupIdInput() {
        return this._securityGroupId;
    }
    /**
     * @stability stable
     */
    get selfAttribute() {
        return this.getBooleanAttribute('self');
    }
    /**
     * @stability stable
     */
    set selfAttribute(value) {
        this._self = value;
    }
    /**
     * @stability stable
     */
    resetSelfAttribute() {
        this._self = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get selfAttributeInput() {
        return this._self;
    }
    /**
     * @stability stable
     */
    get sourceSecurityGroupId() {
        return this.getStringAttribute('source_security_group_id');
    }
    /**
     * @stability stable
     */
    set sourceSecurityGroupId(value) {
        this._sourceSecurityGroupId = value;
    }
    /**
     * @stability stable
     */
    resetSourceSecurityGroupId() {
        this._sourceSecurityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceSecurityGroupIdInput() {
        return this._sourceSecurityGroupId;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get toPortInput() {
        return this._toPort;
    }
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
    /**
     * @stability stable
     */
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrBlocks),
            description: cdktf.stringToTerraform(this._description),
            from_port: cdktf.numberToTerraform(this._fromPort),
            ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6CidrBlocks),
            prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._prefixListIds),
            protocol: cdktf.stringToTerraform(this._protocol),
            security_group_id: cdktf.stringToTerraform(this._securityGroupId),
            self: cdktf.booleanToTerraform(this._self),
            source_security_group_id: cdktf.stringToTerraform(this._sourceSecurityGroupId),
            to_port: cdktf.numberToTerraform(this._toPort),
            type: cdktf.stringToTerraform(this._type),
        };
    }
}
exports.SecurityGroupRule = SecurityGroupRule;
_a = JSII_RTTI_SYMBOL_1;
SecurityGroupRule[_a] = { fqn: "@cdktf/provider-aws.vpc.SecurityGroupRule", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SecurityGroupRule.tfResourceType = "aws_security_group_rule";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktZ3JvdXAtcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92cGMvc2VjdXJpdHktZ3JvdXAtcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBNkIvQixNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPNUQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQStCO1FBQzlFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUseUJBQXlCO1lBQ2hELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDbEMsSUFBSSxD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LEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUM5RSxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDOUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDOztBQWhPSCw4Q0FpT0M7OztBQS9OQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGdDQUFjLEdBQVcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5R3JvdXBSdWxlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNpZHJCbG9ja3M/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnJvbVBvcnQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlwdjZDaWRyQmxvY2tzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZml4TGlzdElkcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm90b2NvbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlbGZBdHRyaWJ1dGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlU2VjdXJpdHlHcm91cElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdG9Qb3J0OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTZWN1cml0eUdyb3VwUnVsZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zZWN1cml0eV9ncm91cF9ydWxlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNlY3VyaXR5R3JvdXBSdWxlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc2VjdXJpdHlfZ3JvdXBfcnVsZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jaWRyQmxvY2tzID0gY29uZmlnLmNpZHJCbG9ja3M7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZnJvbVBvcnQgPSBjb25maWcuZnJvbVBvcnQ7XG4gICAgdGhpcy5faXB2NkNpZHJCbG9ja3MgPSBjb25maWcuaXB2NkNpZHJCbG9ja3M7XG4gICAgdGhpcy5fcHJlZml4TGlzdElkcyA9IGNvbmZpZy5wcmVmaXhMaXN0SWRzO1xuICAgIHRoaXMuX3Byb3RvY29sID0gY29uZmlnLnByb3RvY29sO1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBJZCA9IGNvbmZpZy5zZWN1cml0eUdyb3VwSWQ7XG4gICAgdGhpcy5fc2VsZiA9IGNvbmZpZy5zZWxmQXR0cmlidXRlO1xuICAgIHRoaXMuX3NvdXJjZVNlY3VyaXR5R3JvdXBJZCA9IGNvbmZpZy5zb3VyY2VTZWN1cml0eUdyb3VwSWQ7XG4gICAgdGhpcy5fdG9Qb3J0ID0gY29uZmlnLnRvUG9ydDtcbiAgICB0aGlzLl90eXBlID0gY29uZmlnLnR5cGU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNpZHJfYmxvY2tzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NpZHJCbG9ja3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2lkckJsb2NrcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjaWRyX2Jsb2NrcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2lkckJsb2Nrcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jaWRyQmxvY2tzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2lkckJsb2NrcygpIHtcbiAgICB0aGlzLl9jaWRyQmxvY2tzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjaWRyQmxvY2tzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NpZHJCbG9ja3M7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gZnJvbV9wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Zyb21Qb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBmcm9tUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Zyb21fcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJvbVBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Zyb21Qb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZyb21Qb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Qb3J0O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGlwdjZfY2lkcl9ibG9ja3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXB2NkNpZHJCbG9ja3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaXB2NkNpZHJCbG9ja3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXB2Nl9jaWRyX2Jsb2NrcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXB2NkNpZHJCbG9ja3ModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faXB2NkNpZHJCbG9ja3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcHY2Q2lkckJsb2NrcygpIHtcbiAgICB0aGlzLl9pcHY2Q2lkckJsb2NrcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXB2NkNpZHJCbG9ja3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXB2NkNpZHJCbG9ja3M7XG4gIH1cblxuICAvLyBwcmVmaXhfbGlzdF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZml4TGlzdElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBwcmVmaXhMaXN0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ByZWZpeF9saXN0X2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZml4TGlzdElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wcmVmaXhMaXN0SWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZml4TGlzdElkcygpIHtcbiAgICB0aGlzLl9wcmVmaXhMaXN0SWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmaXhMaXN0SWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeExpc3RJZHM7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBJZDtcbiAgfVxuXG4gIC8vIHNlbGYgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VsZj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc2VsZkF0dHJpYnV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzZWxmJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2VsZkF0dHJpYnV0ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc2VsZiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlbGZBdHRyaWJ1dGUoKSB7XG4gICAgdGhpcy5fc2VsZiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VsZkF0dHJpYnV0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxmO1xuICB9XG5cbiAgLy8gc291cmNlX3NlY3VyaXR5X2dyb3VwX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlU2VjdXJpdHlHcm91cElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VTZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2Vfc2VjdXJpdHlfZ3JvdXBfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZVNlY3VyaXR5R3JvdXBJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlU2VjdXJpdHlHcm91cElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlU2VjdXJpdHlHcm91cElkKCkge1xuICAgIHRoaXMuX3NvdXJjZVNlY3VyaXR5R3JvdXBJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlU2VjdXJpdHlHcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZVNlY3VyaXR5R3JvdXBJZDtcbiAgfVxuXG4gIC8vIHRvX3BvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdG9Qb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0b1BvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0b19wb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0b1BvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RvUG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0b1BvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Qb3J0O1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpZHJfYmxvY2tzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jaWRyQmxvY2tzKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBmcm9tX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2Zyb21Qb3J0KSxcbiAgICAgIGlwdjZfY2lkcl9ibG9ja3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2lwdjZDaWRyQmxvY2tzKSxcbiAgICAgIHByZWZpeF9saXN0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fcHJlZml4TGlzdElkcyksXG4gICAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJvdG9jb2wpLFxuICAgICAgc2VjdXJpdHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlY3VyaXR5R3JvdXBJZCksXG4gICAgICBzZWxmOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc2VsZiksXG4gICAgICBzb3VyY2Vfc2VjdXJpdHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NvdXJjZVNlY3VyaXR5R3JvdXBJZCksXG4gICAgICB0b19wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90b1BvcnQpLFxuICAgICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHlwZSksXG4gICAgfTtcbiAgfVxufVxuIl19