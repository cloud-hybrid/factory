"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcIpamPool = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html aws_vpc_ipam_pool}.
 *
 * @stability stable
 */
class VpcIpamPool extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html aws_vpc_ipam_pool} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_ipam_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._addressFamily = config.addressFamily;
        this._allocationDefaultNetmaskLength = config.allocationDefaultNetmaskLength;
        this._allocationMaxNetmaskLength = config.allocationMaxNetmaskLength;
        this._allocationMinNetmaskLength = config.allocationMinNetmaskLength;
        this._allocationResourceTags = config.allocationResourceTags;
        this._autoImport = config.autoImport;
        this._awsService = config.awsService;
        this._description = config.description;
        this._ipamScopeId = config.ipamScopeId;
        this._locale = config.locale;
        this._publiclyAdvertisable = config.publiclyAdvertisable;
        this._sourceIpamPoolId = config.sourceIpamPoolId;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    /**
     * @stability stable
     */
    get addressFamily() {
        return this.getStringAttribute('address_family');
    }
    /**
     * @stability stable
     */
    set addressFamily(value) {
        this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get addressFamilyInput() {
        return this._addressFamily;
    }
    /**
     * @stability stable
     */
    get allocationDefaultNetmaskLength() {
        return this.getNumberAttribute('allocation_default_netmask_length');
    }
    /**
     * @stability stable
     */
    set allocationDefaultNetmaskLength(value) {
        this._allocationDefaultNetmaskLength = value;
    }
    /**
     * @stability stable
     */
    resetAllocationDefaultNetmaskLength() {
        this._allocationDefaultNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allocationDefaultNetmaskLengthInput() {
        return this._allocationDefaultNetmaskLength;
    }
    /**
     * @stability stable
     */
    get allocationMaxNetmaskLength() {
        return this.getNumberAttribute('allocation_max_netmask_length');
    }
    /**
     * @stability stable
     */
    set allocationMaxNetmaskLength(value) {
        this._allocationMaxNetmaskLength = value;
    }
    /**
     * @stability stable
     */
    resetAllocationMaxNetmaskLength() {
        this._allocationMaxNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allocationMaxNetmaskLengthInput() {
        return this._allocationMaxNetmaskLength;
    }
    /**
     * @stability stable
     */
    get allocationMinNetmaskLength() {
        return this.getNumberAttribute('allocation_min_netmask_length');
    }
    /**
     * @stability stable
     */
    set allocationMinNetmaskLength(value) {
        this._allocationMinNetmaskLength = value;
    }
    /**
     * @stability stable
     */
    resetAllocationMinNetmaskLength() {
        this._allocationMinNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allocationMinNetmaskLengthInput() {
        return this._allocationMinNetmaskLength;
    }
    /**
     * @stability stable
     */
    get allocationResourceTags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('allocation_resource_tags');
    }
    /**
     * @stability stable
     */
    set allocationResourceTags(value) {
        this._allocationResourceTags = value;
    }
    /**
     * @stability stable
     */
    resetAllocationResourceTags() {
        this._allocationResourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allocationResourceTagsInput() {
        return this._allocationResourceTags;
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    get autoImport() {
        return this.getBooleanAttribute('auto_import');
    }
    /**
     * @stability stable
     */
    set autoImport(value) {
        this._autoImport = value;
    }
    /**
     * @stability stable
     */
    resetAutoImport() {
        this._autoImport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoImportInput() {
        return this._autoImport;
    }
    /**
     * @stability stable
     */
    get awsService() {
        return this.getStringAttribute('aws_service');
    }
    /**
     * @stability stable
     */
    set awsService(value) {
        this._awsService = value;
    }
    /**
     * @stability stable
     */
    resetAwsService() {
        this._awsService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsServiceInput() {
        return this._awsService;
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
    get ipamScopeId() {
        return this.getStringAttribute('ipam_scope_id');
    }
    /**
     * @stability stable
     */
    set ipamScopeId(value) {
        this._ipamScopeId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipamScopeIdInput() {
        return this._ipamScopeId;
    }
    // ipam_scope_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipamScopeType() {
        return this.getStringAttribute('ipam_scope_type');
    }
    /**
     * @stability stable
     */
    get locale() {
        return this.getStringAttribute('locale');
    }
    /**
     * @stability stable
     */
    set locale(value) {
        this._locale = value;
    }
    /**
     * @stability stable
     */
    resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get localeInput() {
        return this._locale;
    }
    // pool_depth - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get poolDepth() {
        return this.getNumberAttribute('pool_depth');
    }
    /**
     * @stability stable
     */
    get publiclyAdvertisable() {
        return this.getBooleanAttribute('publicly_advertisable');
    }
    /**
     * @stability stable
     */
    set publiclyAdvertisable(value) {
        this._publiclyAdvertisable = value;
    }
    /**
     * @stability stable
     */
    resetPubliclyAdvertisable() {
        this._publiclyAdvertisable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publiclyAdvertisableInput() {
        return this._publiclyAdvertisable;
    }
    /**
     * @stability stable
     */
    get sourceIpamPoolId() {
        return this.getStringAttribute('source_ipam_pool_id');
    }
    /**
     * @stability stable
     */
    set sourceIpamPoolId(value) {
        this._sourceIpamPoolId = value;
    }
    /**
     * @stability stable
     */
    resetSourceIpamPoolId() {
        this._sourceIpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceIpamPoolIdInput() {
        return this._sourceIpamPoolId;
    }
    // state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get state() {
        return this.getStringAttribute('state');
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
            address_family: cdktf.stringToTerraform(this._addressFamily),
            allocation_default_netmask_length: cdktf.numberToTerraform(this._allocationDefaultNetmaskLength),
            allocation_max_netmask_length: cdktf.numberToTerraform(this._allocationMaxNetmaskLength),
            allocation_min_netmask_length: cdktf.numberToTerraform(this._allocationMinNetmaskLength),
            allocation_resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._allocationResourceTags),
            auto_import: cdktf.booleanToTerraform(this._autoImport),
            aws_service: cdktf.stringToTerraform(this._awsService),
            description: cdktf.stringToTerraform(this._description),
            ipam_scope_id: cdktf.stringToTerraform(this._ipamScopeId),
            locale: cdktf.stringToTerraform(this._locale),
            publicly_advertisable: cdktf.booleanToTerraform(this._publiclyAdvertisable),
            source_ipam_pool_id: cdktf.stringToTerraform(this._sourceIpamPoolId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
exports.VpcIpamPool = VpcIpamPool;
_a = JSII_RTTI_SYMBOL_1;
VpcIpamPool[_a] = { fqn: "@cdktf/provider-aws.vpc.VpcIpamPool", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
VpcIpamPool.tfResourceType = "aws_vpc_ipam_pool";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLWlwYW0tcG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92cGMvdnBjLWlwYW0tcG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBbUMvQixNQUFhLFdBQVksU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3RELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF5QjtRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG1CQUFtQjtZQUMxQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQywrQkFBK0IsR0FBRyxNQUFNLENBQUMsOEJBQThCLENBQUM7UUFDN0UsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUNyRSxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxD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QUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDcEUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEUsQ0FBQztJQUNKLENBQUM7O0FBdFRILGtDQXVUQzs7O0FBclRDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csMEJBQWMsR0FBVyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgVnBjSXBhbVBvb2xDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWRkcmVzc0ZhbWlseTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25EZWZhdWx0TmV0bWFza0xlbmd0aD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb2NhdGlvbk1heE5ldG1hc2tMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25NaW5OZXRtYXNrTGVuZ3RoPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25SZXNvdXJjZVRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9JbXBvcnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF3c1NlcnZpY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXBhbVNjb3BlSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2NhbGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHVibGljbHlBZHZlcnRpc2FibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VJcGFtUG9vbElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFZwY0lwYW1Qb29sIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3ZwY19pcGFtX3Bvb2xcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogVnBjSXBhbVBvb2xDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c192cGNfaXBhbV9wb29sJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FkZHJlc3NGYW1pbHkgPSBjb25maWcuYWRkcmVzc0ZhbWlseTtcbiAgICB0aGlzLl9hbGxvY2F0aW9uRGVmYXVsdE5ldG1hc2tMZW5ndGggPSBjb25maWcuYWxsb2NhdGlvbkRlZmF1bHROZXRtYXNrTGVuZ3RoO1xuICAgIHRoaXMuX2FsbG9jYXRpb25NYXhOZXRtYXNrTGVuZ3RoID0gY29uZmlnLmFsbG9jYXRpb25NYXhOZXRtYXNrTGVuZ3RoO1xuICAgIHRoaXMuX2FsbG9jYXRpb25NaW5OZXRtYXNrTGVuZ3RoID0gY29uZmlnLmFsbG9jYXRpb25NaW5OZXRtYXNrTGVuZ3RoO1xuICAgIHRoaXMuX2FsbG9jYXRpb25SZXNvdXJjZVRhZ3MgPSBjb25maWcuYWxsb2NhdGlvblJlc291cmNlVGFncztcbiAgICB0aGlzLl9hdXRvSW1wb3J0ID0gY29uZmlnLmF1dG9JbXBvcnQ7XG4gICAgdGhpcy5fYXdzU2VydmljZSA9IGNvbmZpZy5hd3NTZXJ2aWNlO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2lwYW1TY29wZUlkID0gY29uZmlnLmlwYW1TY29wZUlkO1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGU7XG4gICAgdGhpcy5fcHVibGljbHlBZHZlcnRpc2FibGUgPSBjb25maWcucHVibGljbHlBZHZlcnRpc2FibGU7XG4gICAgdGhpcy5fc291cmNlSXBhbVBvb2xJZCA9IGNvbmZpZy5zb3VyY2VJcGFtUG9vbElkO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFkZHJlc3NfZmFtaWx5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FkZHJlc3NGYW1pbHk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFkZHJlc3NGYW1pbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZGRyZXNzX2ZhbWlseScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWRkcmVzc0ZhbWlseSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWRkcmVzc0ZhbWlseSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGRyZXNzRmFtaWx5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NGYW1pbHk7XG4gIH1cblxuICAvLyBhbGxvY2F0aW9uX2RlZmF1bHRfbmV0bWFza19sZW5ndGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb2NhdGlvbkRlZmF1bHROZXRtYXNrTGVuZ3RoPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhbGxvY2F0aW9uRGVmYXVsdE5ldG1hc2tMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhbGxvY2F0aW9uX2RlZmF1bHRfbmV0bWFza19sZW5ndGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG9jYXRpb25EZWZhdWx0TmV0bWFza0xlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYWxsb2NhdGlvbkRlZmF1bHROZXRtYXNrTGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb2NhdGlvbkRlZmF1bHROZXRtYXNrTGVuZ3RoKCkge1xuICAgIHRoaXMuX2FsbG9jYXRpb25EZWZhdWx0TmV0bWFza0xlbmd0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb2NhdGlvbkRlZmF1bHROZXRtYXNrTGVuZ3RoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG9jYXRpb25EZWZhdWx0TmV0bWFza0xlbmd0aDtcbiAgfVxuXG4gIC8vIGFsbG9jYXRpb25fbWF4X25ldG1hc2tfbGVuZ3RoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG9jYXRpb25NYXhOZXRtYXNrTGVuZ3RoPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhbGxvY2F0aW9uTWF4TmV0bWFza0xlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2FsbG9jYXRpb25fbWF4X25ldG1hc2tfbGVuZ3RoJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvY2F0aW9uTWF4TmV0bWFza0xlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYWxsb2NhdGlvbk1heE5ldG1hc2tMZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvY2F0aW9uTWF4TmV0bWFza0xlbmd0aCgpIHtcbiAgICB0aGlzLl9hbGxvY2F0aW9uTWF4TmV0bWFza0xlbmd0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb2NhdGlvbk1heE5ldG1hc2tMZW5ndGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb2NhdGlvbk1heE5ldG1hc2tMZW5ndGg7XG4gIH1cblxuICAvLyBhbGxvY2F0aW9uX21pbl9uZXRtYXNrX2xlbmd0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvY2F0aW9uTWluTmV0bWFza0xlbmd0aD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYWxsb2NhdGlvbk1pbk5ldG1hc2tMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhbGxvY2F0aW9uX21pbl9uZXRtYXNrX2xlbmd0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb2NhdGlvbk1pbk5ldG1hc2tMZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FsbG9jYXRpb25NaW5OZXRtYXNrTGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb2NhdGlvbk1pbk5ldG1hc2tMZW5ndGgoKSB7XG4gICAgdGhpcy5fYWxsb2NhdGlvbk1pbk5ldG1hc2tMZW5ndGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25NaW5OZXRtYXNrTGVuZ3RoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG9jYXRpb25NaW5OZXRtYXNrTGVuZ3RoO1xuICB9XG5cbiAgLy8gYWxsb2NhdGlvbl9yZXNvdXJjZV90YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG9jYXRpb25SZXNvdXJjZVRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25SZXNvdXJjZVRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FsbG9jYXRpb25fcmVzb3VyY2VfdGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG9jYXRpb25SZXNvdXJjZVRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG9jYXRpb25SZXNvdXJjZVRhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvY2F0aW9uUmVzb3VyY2VUYWdzKCkge1xuICAgIHRoaXMuX2FsbG9jYXRpb25SZXNvdXJjZVRhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25SZXNvdXJjZVRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb2NhdGlvblJlc291cmNlVGFncztcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b19pbXBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0ltcG9ydD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYXV0b0ltcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX2ltcG9ydCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9JbXBvcnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dG9JbXBvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvSW1wb3J0KCkge1xuICAgIHRoaXMuX2F1dG9JbXBvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9JbXBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ltcG9ydDtcbiAgfVxuXG4gIC8vIGF3c19zZXJ2aWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F3c1NlcnZpY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF3c1NlcnZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3Nfc2VydmljZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXdzU2VydmljZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXdzU2VydmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF3c1NlcnZpY2UoKSB7XG4gICAgdGhpcy5fYXdzU2VydmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXdzU2VydmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NTZXJ2aWNlO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpcGFtX3Njb3BlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lwYW1TY29wZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpcGFtU2NvcGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwYW1fc2NvcGVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwYW1TY29wZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pcGFtU2NvcGVJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcGFtU2NvcGVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pcGFtU2NvcGVJZDtcbiAgfVxuXG4gIC8vIGlwYW1fc2NvcGVfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwYW1TY29wZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcGFtX3Njb3BlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGxvY2FsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2NhbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2NhbGUoKSB7XG4gICAgdGhpcy5fbG9jYWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2NhbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgLy8gcG9vbF9kZXB0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvb2xEZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Bvb2xfZGVwdGgnKTtcbiAgfVxuXG4gIC8vIHB1YmxpY2x5X2FkdmVydGlzYWJsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wdWJsaWNseUFkdmVydGlzYWJsZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcHVibGljbHlBZHZlcnRpc2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHVibGljbHlfYWR2ZXJ0aXNhYmxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcHVibGljbHlBZHZlcnRpc2FibGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3B1YmxpY2x5QWR2ZXJ0aXNhYmxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHVibGljbHlBZHZlcnRpc2FibGUoKSB7XG4gICAgdGhpcy5fcHVibGljbHlBZHZlcnRpc2FibGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHB1YmxpY2x5QWR2ZXJ0aXNhYmxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1YmxpY2x5QWR2ZXJ0aXNhYmxlO1xuICB9XG5cbiAgLy8gc291cmNlX2lwYW1fcG9vbF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VJcGFtUG9vbElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VJcGFtUG9vbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2lwYW1fcG9vbF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlSXBhbVBvb2xJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlSXBhbVBvb2xJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZUlwYW1Qb29sSWQoKSB7XG4gICAgdGhpcy5fc291cmNlSXBhbVBvb2xJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlSXBhbVBvb2xJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VJcGFtUG9vbElkO1xuICB9XG5cbiAgLy8gc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzX2ZhbWlseTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWRkcmVzc0ZhbWlseSksXG4gICAgICBhbGxvY2F0aW9uX2RlZmF1bHRfbmV0bWFza19sZW5ndGg6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2FsbG9jYXRpb25EZWZhdWx0TmV0bWFza0xlbmd0aCksXG4gICAgICBhbGxvY2F0aW9uX21heF9uZXRtYXNrX2xlbmd0aDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fYWxsb2NhdGlvbk1heE5ldG1hc2tMZW5ndGgpLFxuICAgICAgYWxsb2NhdGlvbl9taW5fbmV0bWFza19sZW5ndGg6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2FsbG9jYXRpb25NaW5OZXRtYXNrTGVuZ3RoKSxcbiAgICAgIGFsbG9jYXRpb25fcmVzb3VyY2VfdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fYWxsb2NhdGlvblJlc291cmNlVGFncyksXG4gICAgICBhdXRvX2ltcG9ydDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2F1dG9JbXBvcnQpLFxuICAgICAgYXdzX3NlcnZpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F3c1NlcnZpY2UpLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGlwYW1fc2NvcGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lwYW1TY29wZUlkKSxcbiAgICAgIGxvY2FsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbG9jYWxlKSxcbiAgICAgIHB1YmxpY2x5X2FkdmVydGlzYWJsZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3B1YmxpY2x5QWR2ZXJ0aXNhYmxlKSxcbiAgICAgIHNvdXJjZV9pcGFtX3Bvb2xfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NvdXJjZUlwYW1Qb29sSWQpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgfTtcbiAgfVxufVxuIl19