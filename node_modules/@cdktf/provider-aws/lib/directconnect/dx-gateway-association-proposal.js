"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DxGatewayAssociationProposal = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html aws_dx_gateway_association_proposal}.
 *
 * @stability stable
 */
class DxGatewayAssociationProposal extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html aws_dx_gateway_association_proposal} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_dx_gateway_association_proposal',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowedPrefixes = config.allowedPrefixes;
        this._associatedGatewayId = config.associatedGatewayId;
        this._dxGatewayId = config.dxGatewayId;
        this._dxGatewayOwnerAccountId = config.dxGatewayOwnerAccountId;
    }
    /**
     * @stability stable
     */
    get allowedPrefixes() {
        return this.getListAttribute('allowed_prefixes');
    }
    /**
     * @stability stable
     */
    set allowedPrefixes(value) {
        this._allowedPrefixes = value;
    }
    /**
     * @stability stable
     */
    resetAllowedPrefixes() {
        this._allowedPrefixes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowedPrefixesInput() {
        return this._allowedPrefixes;
    }
    /**
     * @stability stable
     */
    get associatedGatewayId() {
        return this.getStringAttribute('associated_gateway_id');
    }
    /**
     * @stability stable
     */
    set associatedGatewayId(value) {
        this._associatedGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get associatedGatewayIdInput() {
        return this._associatedGatewayId;
    }
    // associated_gateway_owner_account_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get associatedGatewayOwnerAccountId() {
        return this.getStringAttribute('associated_gateway_owner_account_id');
    }
    // associated_gateway_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get associatedGatewayType() {
        return this.getStringAttribute('associated_gateway_type');
    }
    /**
     * @stability stable
     */
    get dxGatewayId() {
        return this.getStringAttribute('dx_gateway_id');
    }
    /**
     * @stability stable
     */
    set dxGatewayId(value) {
        this._dxGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dxGatewayIdInput() {
        return this._dxGatewayId;
    }
    /**
     * @stability stable
     */
    get dxGatewayOwnerAccountId() {
        return this.getStringAttribute('dx_gateway_owner_account_id');
    }
    /**
     * @stability stable
     */
    set dxGatewayOwnerAccountId(value) {
        this._dxGatewayOwnerAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dxGatewayOwnerAccountIdInput() {
        return this._dxGatewayOwnerAccountId;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrefixes),
            associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
            dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
            dx_gateway_owner_account_id: cdktf.stringToTerraform(this._dxGatewayOwnerAccountId),
        };
    }
}
exports.DxGatewayAssociationProposal = DxGatewayAssociationProposal;
_a = JSII_RTTI_SYMBOL_1;
DxGatewayAssociationProposal[_a] = { fqn: "@cdktf/provider-aws.directconnect.DxGatewayAssociationProposal", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DxGatewayAssociationProposal.tfResourceType = "aws_dx_gateway_association_proposal";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHgtZ2F0ZXdheS1hc3NvY2lhdGlvbi1wcm9wb3NhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXJlY3Rjb25uZWN0L2R4LWdhdGV3YXktYXNzb2NpYXRpb24tcHJvcG9zYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQWUvQixNQUFhLDRCQUE2QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPdkUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTBDO1FBQ3pGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUscUNBQXFDO1lBQzVELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO0lBQ2pFLENBQUM7Ozs7SUFRRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBZTtRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7SUFFRCx5RkFBeUY7Ozs7SUFDekYsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsNkVBQTZFOzs7O0lBQzdFLElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFhO1FBQzlDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2xGLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDekUsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pELDJCQUEyQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7U0FDcEYsQ0FBQztJQUNKLENBQUM7O0FBbEhILG9FQW1IQzs7O0FBakhDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csMkNBQWMsR0FBVyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEeEdhdGV3YXlBc3NvY2lhdGlvblByb3Bvc2FsQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93ZWRQcmVmaXhlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXNzb2NpYXRlZEdhdGV3YXlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkeEdhdGV3YXlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZHhHYXRld2F5T3duZXJBY2NvdW50SWQ6IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIER4R2F0ZXdheUFzc29jaWF0aW9uUHJvcG9zYWwgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZHhfZ2F0ZXdheV9hc3NvY2lhdGlvbl9wcm9wb3NhbFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IER4R2F0ZXdheUFzc29jaWF0aW9uUHJvcG9zYWxDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19keF9nYXRld2F5X2Fzc29jaWF0aW9uX3Byb3Bvc2FsJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FsbG93ZWRQcmVmaXhlcyA9IGNvbmZpZy5hbGxvd2VkUHJlZml4ZXM7XG4gICAgdGhpcy5fYXNzb2NpYXRlZEdhdGV3YXlJZCA9IGNvbmZpZy5hc3NvY2lhdGVkR2F0ZXdheUlkO1xuICAgIHRoaXMuX2R4R2F0ZXdheUlkID0gY29uZmlnLmR4R2F0ZXdheUlkO1xuICAgIHRoaXMuX2R4R2F0ZXdheU93bmVyQWNjb3VudElkID0gY29uZmlnLmR4R2F0ZXdheU93bmVyQWNjb3VudElkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbGxvd2VkX3ByZWZpeGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dlZFByZWZpeGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFsbG93ZWRQcmVmaXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhbGxvd2VkX3ByZWZpeGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd2VkUHJlZml4ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYWxsb3dlZFByZWZpeGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dlZFByZWZpeGVzKCkge1xuICAgIHRoaXMuX2FsbG93ZWRQcmVmaXhlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dlZFByZWZpeGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93ZWRQcmVmaXhlcztcbiAgfVxuXG4gIC8vIGFzc29jaWF0ZWRfZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hc3NvY2lhdGVkR2F0ZXdheUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhc3NvY2lhdGVkR2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNzb2NpYXRlZF9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhc3NvY2lhdGVkR2F0ZXdheUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hc3NvY2lhdGVkR2F0ZXdheUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFzc29jaWF0ZWRHYXRld2F5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzb2NpYXRlZEdhdGV3YXlJZDtcbiAgfVxuXG4gIC8vIGFzc29jaWF0ZWRfZ2F0ZXdheV9vd25lcl9hY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXNzb2NpYXRlZEdhdGV3YXlPd25lckFjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc29jaWF0ZWRfZ2F0ZXdheV9vd25lcl9hY2NvdW50X2lkJyk7XG4gIH1cblxuICAvLyBhc3NvY2lhdGVkX2dhdGV3YXlfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc29jaWF0ZWRHYXRld2F5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc29jaWF0ZWRfZ2F0ZXdheV90eXBlJyk7XG4gIH1cblxuICAvLyBkeF9nYXRld2F5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2R4R2F0ZXdheUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkeEdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2R4X2dhdGV3YXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGR4R2F0ZXdheUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9keEdhdGV3YXlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkeEdhdGV3YXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9keEdhdGV3YXlJZDtcbiAgfVxuXG4gIC8vIGR4X2dhdGV3YXlfb3duZXJfYWNjb3VudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9keEdhdGV3YXlPd25lckFjY291bnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZHhHYXRld2F5T3duZXJBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkeF9nYXRld2F5X293bmVyX2FjY291bnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGR4R2F0ZXdheU93bmVyQWNjb3VudElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9keEdhdGV3YXlPd25lckFjY291bnRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkeEdhdGV3YXlPd25lckFjY291bnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9keEdhdGV3YXlPd25lckFjY291bnRJZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG93ZWRfcHJlZml4ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2FsbG93ZWRQcmVmaXhlcyksXG4gICAgICBhc3NvY2lhdGVkX2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Fzc29jaWF0ZWRHYXRld2F5SWQpLFxuICAgICAgZHhfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZHhHYXRld2F5SWQpLFxuICAgICAgZHhfZ2F0ZXdheV9vd25lcl9hY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9keEdhdGV3YXlPd25lckFjY291bnRJZCksXG4gICAgfTtcbiAgfVxufVxuIl19