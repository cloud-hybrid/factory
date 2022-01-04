"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FmsPolicy = exports.FmsPolicySecurityServicePolicyDataOutputReference = exports.fmsPolicySecurityServicePolicyDataToTerraform = exports.FmsPolicyIncludeMapOutputReference = exports.fmsPolicyIncludeMapToTerraform = exports.FmsPolicyExcludeMapOutputReference = exports.fmsPolicyExcludeMapToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function fmsPolicyExcludeMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account: cdktf.listMapper(cdktf.stringToTerraform)(struct.account),
        orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct.orgunit),
    };
}
exports.fmsPolicyExcludeMapToTerraform = fmsPolicyExcludeMapToTerraform;
/**
 * @stability stable
 */
class FmsPolicyExcludeMapOutputReference extends cdktf.ComplexObject {
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
        if (this._account) {
            hasAnyValues = true;
            internalValueResult.account = this._account;
        }
        if (this._orgunit) {
            hasAnyValues = true;
            internalValueResult.orgunit = this._orgunit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._account = undefined;
            this._orgunit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._account = value.account;
            this._orgunit = value.orgunit;
        }
    }
    /**
     * @stability stable
     */
    get account() {
        return this.getListAttribute('account');
    }
    /**
     * @stability stable
     */
    set account(value) {
        this._account = value;
    }
    /**
     * @stability stable
     */
    resetAccount() {
        this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accountInput() {
        return this._account;
    }
    /**
     * @stability stable
     */
    get orgunit() {
        return this.getListAttribute('orgunit');
    }
    /**
     * @stability stable
     */
    set orgunit(value) {
        this._orgunit = value;
    }
    /**
     * @stability stable
     */
    resetOrgunit() {
        this._orgunit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get orgunitInput() {
        return this._orgunit;
    }
}
exports.FmsPolicyExcludeMapOutputReference = FmsPolicyExcludeMapOutputReference;
_a = JSII_RTTI_SYMBOL_1;
FmsPolicyExcludeMapOutputReference[_a] = { fqn: "@cdktf/provider-aws.fms.FmsPolicyExcludeMapOutputReference", version: "3.0.1" };
function fmsPolicyIncludeMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account: cdktf.listMapper(cdktf.stringToTerraform)(struct.account),
        orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct.orgunit),
    };
}
exports.fmsPolicyIncludeMapToTerraform = fmsPolicyIncludeMapToTerraform;
/**
 * @stability stable
 */
class FmsPolicyIncludeMapOutputReference extends cdktf.ComplexObject {
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
        if (this._account) {
            hasAnyValues = true;
            internalValueResult.account = this._account;
        }
        if (this._orgunit) {
            hasAnyValues = true;
            internalValueResult.orgunit = this._orgunit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._account = undefined;
            this._orgunit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._account = value.account;
            this._orgunit = value.orgunit;
        }
    }
    /**
     * @stability stable
     */
    get account() {
        return this.getListAttribute('account');
    }
    /**
     * @stability stable
     */
    set account(value) {
        this._account = value;
    }
    /**
     * @stability stable
     */
    resetAccount() {
        this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accountInput() {
        return this._account;
    }
    /**
     * @stability stable
     */
    get orgunit() {
        return this.getListAttribute('orgunit');
    }
    /**
     * @stability stable
     */
    set orgunit(value) {
        this._orgunit = value;
    }
    /**
     * @stability stable
     */
    resetOrgunit() {
        this._orgunit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get orgunitInput() {
        return this._orgunit;
    }
}
exports.FmsPolicyIncludeMapOutputReference = FmsPolicyIncludeMapOutputReference;
_b = JSII_RTTI_SYMBOL_1;
FmsPolicyIncludeMapOutputReference[_b] = { fqn: "@cdktf/provider-aws.fms.FmsPolicyIncludeMapOutputReference", version: "3.0.1" };
function fmsPolicySecurityServicePolicyDataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        managed_service_data: cdktf.stringToTerraform(struct.managedServiceData),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.fmsPolicySecurityServicePolicyDataToTerraform = fmsPolicySecurityServicePolicyDataToTerraform;
/**
 * @stability stable
 */
class FmsPolicySecurityServicePolicyDataOutputReference extends cdktf.ComplexObject {
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
        if (this._managedServiceData) {
            hasAnyValues = true;
            internalValueResult.managedServiceData = this._managedServiceData;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._managedServiceData = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._managedServiceData = value.managedServiceData;
            this._type = value.type;
        }
    }
    /**
     * @stability stable
     */
    get managedServiceData() {
        return this.getStringAttribute('managed_service_data');
    }
    /**
     * @stability stable
     */
    set managedServiceData(value) {
        this._managedServiceData = value;
    }
    /**
     * @stability stable
     */
    resetManagedServiceData() {
        this._managedServiceData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get managedServiceDataInput() {
        return this._managedServiceData;
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
}
exports.FmsPolicySecurityServicePolicyDataOutputReference = FmsPolicySecurityServicePolicyDataOutputReference;
_c = JSII_RTTI_SYMBOL_1;
FmsPolicySecurityServicePolicyDataOutputReference[_c] = { fqn: "@cdktf/provider-aws.fms.FmsPolicySecurityServicePolicyDataOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy}.
 *
 * @stability stable
 */
class FmsPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_fms_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // exclude_map - computed: false, optional: true, required: false
        this._excludeMap = new FmsPolicyExcludeMapOutputReference(this, "exclude_map", true);
        // include_map - computed: false, optional: true, required: false
        this._includeMap = new FmsPolicyIncludeMapOutputReference(this, "include_map", true);
        // security_service_policy_data - computed: false, optional: false, required: true
        this._securityServicePolicyData = new FmsPolicySecurityServicePolicyDataOutputReference(this, "security_service_policy_data", true);
        this._deleteAllPolicyResources = config.deleteAllPolicyResources;
        this._excludeResourceTags = config.excludeResourceTags;
        this._name = config.name;
        this._remediationEnabled = config.remediationEnabled;
        this._resourceTags = config.resourceTags;
        this._resourceType = config.resourceType;
        this._resourceTypeList = config.resourceTypeList;
        this._excludeMap.internalValue = config.excludeMap;
        this._includeMap.internalValue = config.includeMap;
        this._securityServicePolicyData.internalValue = config.securityServicePolicyData;
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
    /**
     * @stability stable
     */
    get deleteAllPolicyResources() {
        return this.getBooleanAttribute('delete_all_policy_resources');
    }
    /**
     * @stability stable
     */
    set deleteAllPolicyResources(value) {
        this._deleteAllPolicyResources = value;
    }
    /**
     * @stability stable
     */
    resetDeleteAllPolicyResources() {
        this._deleteAllPolicyResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deleteAllPolicyResourcesInput() {
        return this._deleteAllPolicyResources;
    }
    /**
     * @stability stable
     */
    get excludeResourceTags() {
        return this.getBooleanAttribute('exclude_resource_tags');
    }
    /**
     * @stability stable
     */
    set excludeResourceTags(value) {
        this._excludeResourceTags = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get excludeResourceTagsInput() {
        return this._excludeResourceTags;
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
    // policy_update_token - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get policyUpdateToken() {
        return this.getStringAttribute('policy_update_token');
    }
    /**
     * @stability stable
     */
    get remediationEnabled() {
        return this.getBooleanAttribute('remediation_enabled');
    }
    /**
     * @stability stable
     */
    set remediationEnabled(value) {
        this._remediationEnabled = value;
    }
    /**
     * @stability stable
     */
    resetRemediationEnabled() {
        this._remediationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get remediationEnabledInput() {
        return this._remediationEnabled;
    }
    /**
     * @stability stable
     */
    get resourceTags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_tags');
    }
    /**
     * @stability stable
     */
    set resourceTags(value) {
        this._resourceTags = value;
    }
    /**
     * @stability stable
     */
    resetResourceTags() {
        this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceTagsInput() {
        return this._resourceTags;
    }
    /**
     * @stability stable
     */
    get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    /**
     * @stability stable
     */
    set resourceType(value) {
        this._resourceType = value;
    }
    /**
     * @stability stable
     */
    resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceTypeInput() {
        return this._resourceType;
    }
    /**
     * @stability stable
     */
    get resourceTypeList() {
        return this.getListAttribute('resource_type_list');
    }
    /**
     * @stability stable
     */
    set resourceTypeList(value) {
        this._resourceTypeList = value;
    }
    /**
     * @stability stable
     */
    resetResourceTypeList() {
        this._resourceTypeList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceTypeListInput() {
        return this._resourceTypeList;
    }
    /**
     * @stability stable
     */
    get excludeMap() {
        return this._excludeMap;
    }
    /**
     * @stability stable
     */
    putExcludeMap(value) {
        this._excludeMap.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetExcludeMap() {
        this._excludeMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get excludeMapInput() {
        return this._excludeMap.internalValue;
    }
    /**
     * @stability stable
     */
    get includeMap() {
        return this._includeMap;
    }
    /**
     * @stability stable
     */
    putIncludeMap(value) {
        this._includeMap.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIncludeMap() {
        this._includeMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeMapInput() {
        return this._includeMap.internalValue;
    }
    /**
     * @stability stable
     */
    get securityServicePolicyData() {
        return this._securityServicePolicyData;
    }
    /**
     * @stability stable
     */
    putSecurityServicePolicyData(value) {
        this._securityServicePolicyData.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityServicePolicyDataInput() {
        return this._securityServicePolicyData.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            delete_all_policy_resources: cdktf.booleanToTerraform(this._deleteAllPolicyResources),
            exclude_resource_tags: cdktf.booleanToTerraform(this._excludeResourceTags),
            name: cdktf.stringToTerraform(this._name),
            remediation_enabled: cdktf.booleanToTerraform(this._remediationEnabled),
            resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
            resource_type: cdktf.stringToTerraform(this._resourceType),
            resource_type_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeList),
            exclude_map: fmsPolicyExcludeMapToTerraform(this._excludeMap.internalValue),
            include_map: fmsPolicyIncludeMapToTerraform(this._includeMap.internalValue),
            security_service_policy_data: fmsPolicySecurityServicePolicyDataToTerraform(this._securityServicePolicyData.internalValue),
        };
    }
}
exports.FmsPolicy = FmsPolicy;
_d = JSII_RTTI_SYMBOL_1;
FmsPolicy[_d] = { fqn: "@cdktf/provider-aws.fms.FmsPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
FmsPolicy.tfResourceType = "aws_fms_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm1zLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbXMvZm1zLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWdDL0IsU0FBZ0IsOEJBQThCLENBQUMsTUFBaUU7SUFDOUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25FLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFURCx3RUFTQzs7OztBQUVELE1BQWEsa0NBQW1DLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJekUsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdB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OztBQTlOQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHdCQUFjLEdBQVcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEZtc1BvbGljeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGVBbGxQb2xpY3lSZXNvdXJjZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4Y2x1ZGVSZXNvdXJjZVRhZ3M6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVtZWRpYXRpb25FbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlVGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlVHlwZUxpc3Q/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4Y2x1ZGVNYXA/OiBGbXNQb2xpY3lFeGNsdWRlTWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZU1hcD86IEZtc1BvbGljeUluY2x1ZGVNYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhOiBGbXNQb2xpY3lTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhO1xufVxuZXhwb3J0IGludGVyZmFjZSBGbXNQb2xpY3lFeGNsdWRlTWFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50Pzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JndW5pdD86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm1zUG9saWN5RXhjbHVkZU1hcFRvVGVycmFmb3JtKHN0cnVjdD86IEZtc1BvbGljeUV4Y2x1ZGVNYXBPdXRwdXRSZWZlcmVuY2UgfCBGbXNQb2xpY3lFeGNsdWRlTWFwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNjb3VudDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY2NvdW50KSxcbiAgICBvcmd1bml0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm9yZ3VuaXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbXNQb2xpY3lFeGNsdWRlTWFwT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEZtc1BvbGljeUV4Y2x1ZGVNYXAgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjY291bnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY291bnQgPSB0aGlzLl9hY2NvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3JndW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JndW5pdCA9IHRoaXMuX29yZ3VuaXQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBGbXNQb2xpY3lFeGNsdWRlTWFwIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29yZ3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY291bnQgPSB2YWx1ZS5hY2NvdW50O1xuICAgICAgdGhpcy5fb3JndW5pdCA9IHZhbHVlLm9yZ3VuaXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50Pzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFjY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWNjb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjb3VudCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hY2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjb3VudCgpIHtcbiAgICB0aGlzLl9hY2NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnQ7XG4gIH1cblxuICAvLyBvcmd1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29yZ3VuaXQ/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgb3JndW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdvcmd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvcmd1bml0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX29yZ3VuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmd1bml0KCkge1xuICAgIHRoaXMuX29yZ3VuaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yZ3VuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JndW5pdDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBGbXNQb2xpY3lJbmNsdWRlTWFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50Pzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JndW5pdD86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm1zUG9saWN5SW5jbHVkZU1hcFRvVGVycmFmb3JtKHN0cnVjdD86IEZtc1BvbGljeUluY2x1ZGVNYXBPdXRwdXRSZWZlcmVuY2UgfCBGbXNQb2xpY3lJbmNsdWRlTWFwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNjb3VudDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY2NvdW50KSxcbiAgICBvcmd1bml0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm9yZ3VuaXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbXNQb2xpY3lJbmNsdWRlTWFwT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEZtc1BvbGljeUluY2x1ZGVNYXAgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjY291bnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY291bnQgPSB0aGlzLl9hY2NvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3JndW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JndW5pdCA9IHRoaXMuX29yZ3VuaXQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBGbXNQb2xpY3lJbmNsdWRlTWFwIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29yZ3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY291bnQgPSB2YWx1ZS5hY2NvdW50O1xuICAgICAgdGhpcy5fb3JndW5pdCA9IHZhbHVlLm9yZ3VuaXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50Pzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFjY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWNjb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjb3VudCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hY2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjb3VudCgpIHtcbiAgICB0aGlzLl9hY2NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnQ7XG4gIH1cblxuICAvLyBvcmd1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29yZ3VuaXQ/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgb3JndW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdvcmd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvcmd1bml0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX29yZ3VuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmd1bml0KCkge1xuICAgIHRoaXMuX29yZ3VuaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yZ3VuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JndW5pdDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBGbXNQb2xpY3lTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hbmFnZWRTZXJ2aWNlRGF0YT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbXNQb2xpY3lTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhVG9UZXJyYWZvcm0oc3RydWN0PzogRm1zUG9saWN5U2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YU91dHB1dFJlZmVyZW5jZSB8IEZtc1BvbGljeVNlY3VyaXR5U2VydmljZVBvbGljeURhdGEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYW5hZ2VkX3NlcnZpY2VfZGF0YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYW5hZ2VkU2VydmljZURhdGEpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZtc1BvbGljeVNlY3VyaXR5U2VydmljZVBvbGljeURhdGFPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRm1zUG9saWN5U2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWFuYWdlZFNlcnZpY2VEYXRhKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYW5hZ2VkU2VydmljZURhdGEgPSB0aGlzLl9tYW5hZ2VkU2VydmljZURhdGE7XG4gICAgfVxuICAgIGlmICh0aGlzLl90eXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEZtc1BvbGljeVNlY3VyaXR5U2VydmljZVBvbGljeURhdGEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYW5hZ2VkU2VydmljZURhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYW5hZ2VkU2VydmljZURhdGEgPSB2YWx1ZS5tYW5hZ2VkU2VydmljZURhdGE7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBtYW5hZ2VkX3NlcnZpY2VfZGF0YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYW5hZ2VkU2VydmljZURhdGE/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1hbmFnZWRTZXJ2aWNlRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21hbmFnZWRfc2VydmljZV9kYXRhJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYW5hZ2VkU2VydmljZURhdGEodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21hbmFnZWRTZXJ2aWNlRGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hbmFnZWRTZXJ2aWNlRGF0YSgpIHtcbiAgICB0aGlzLl9tYW5hZ2VkU2VydmljZURhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hbmFnZWRTZXJ2aWNlRGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYW5hZ2VkU2VydmljZURhdGE7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRm1zUG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Ztc19wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEZtc1BvbGljeUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2Ztc19wb2xpY3knLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGVsZXRlQWxsUG9saWN5UmVzb3VyY2VzID0gY29uZmlnLmRlbGV0ZUFsbFBvbGljeVJlc291cmNlcztcbiAgICB0aGlzLl9leGNsdWRlUmVzb3VyY2VUYWdzID0gY29uZmlnLmV4Y2x1ZGVSZXNvdXJjZVRhZ3M7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3JlbWVkaWF0aW9uRW5hYmxlZCA9IGNvbmZpZy5yZW1lZGlhdGlvbkVuYWJsZWQ7XG4gICAgdGhpcy5fcmVzb3VyY2VUYWdzID0gY29uZmlnLnJlc291cmNlVGFncztcbiAgICB0aGlzLl9yZXNvdXJjZVR5cGUgPSBjb25maWcucmVzb3VyY2VUeXBlO1xuICAgIHRoaXMuX3Jlc291cmNlVHlwZUxpc3QgPSBjb25maWcucmVzb3VyY2VUeXBlTGlzdDtcbiAgICB0aGlzLl9leGNsdWRlTWFwLmludGVybmFsVmFsdWUgPSBjb25maWcuZXhjbHVkZU1hcDtcbiAgICB0aGlzLl9pbmNsdWRlTWFwLmludGVybmFsVmFsdWUgPSBjb25maWcuaW5jbHVkZU1hcDtcbiAgICB0aGlzLl9zZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhLmludGVybmFsVmFsdWUgPSBjb25maWcuc2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBkZWxldGVfYWxsX3BvbGljeV9yZXNvdXJjZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRlQWxsUG9saWN5UmVzb3VyY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkZWxldGVBbGxQb2xpY3lSZXNvdXJjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRlX2FsbF9wb2xpY3lfcmVzb3VyY2VzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlQWxsUG9saWN5UmVzb3VyY2VzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kZWxldGVBbGxQb2xpY3lSZXNvdXJjZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGVBbGxQb2xpY3lSZXNvdXJjZXMoKSB7XG4gICAgdGhpcy5fZGVsZXRlQWxsUG9saWN5UmVzb3VyY2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVBbGxQb2xpY3lSZXNvdXJjZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlQWxsUG9saWN5UmVzb3VyY2VzO1xuICB9XG5cbiAgLy8gZXhjbHVkZV9yZXNvdXJjZV90YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2V4Y2x1ZGVSZXNvdXJjZVRhZ3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVSZXNvdXJjZVRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZXhjbHVkZV9yZXNvdXJjZV90YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZXhjbHVkZVJlc291cmNlVGFncyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZXhjbHVkZVJlc291cmNlVGFncyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGNsdWRlUmVzb3VyY2VUYWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVSZXNvdXJjZVRhZ3M7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwb2xpY3lfdXBkYXRlX3Rva2VuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9saWN5VXBkYXRlVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb2xpY3lfdXBkYXRlX3Rva2VuJyk7XG4gIH1cblxuICAvLyByZW1lZGlhdGlvbl9lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlbWVkaWF0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVtZWRpYXRpb25FbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlbWVkaWF0aW9uX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZW1lZGlhdGlvbkVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlbWVkaWF0aW9uRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlbWVkaWF0aW9uRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9yZW1lZGlhdGlvbkVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlbWVkaWF0aW9uRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1lZGlhdGlvbkVuYWJsZWQ7XG4gIH1cblxuICAvLyByZXNvdXJjZV90YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlVGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUYWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZV90YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VUYWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXNvdXJjZVRhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZVRhZ3MoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUYWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUYWdzO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZVR5cGUoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfdHlwZV9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VUeXBlTGlzdD86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3Jlc291cmNlX3R5cGVfbGlzdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VUeXBlTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZVR5cGVMaXN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VUeXBlTGlzdCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZVR5cGVMaXN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVMaXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlVHlwZUxpc3Q7XG4gIH1cblxuICAvLyBleGNsdWRlX21hcCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGNsdWRlTWFwID0gbmV3IEZtc1BvbGljeUV4Y2x1ZGVNYXBPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZXhjbHVkZV9tYXBcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZXhjbHVkZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZU1hcDtcbiAgfVxuICBwdWJsaWMgcHV0RXhjbHVkZU1hcCh2YWx1ZTogRm1zUG9saWN5RXhjbHVkZU1hcCkge1xuICAgIHRoaXMuX2V4Y2x1ZGVNYXAuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4Y2x1ZGVNYXAoKSB7XG4gICAgdGhpcy5fZXhjbHVkZU1hcC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGNsdWRlTWFwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVNYXAuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfbWFwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVNYXAgPSBuZXcgRm1zUG9saWN5SW5jbHVkZU1hcE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbmNsdWRlX21hcFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbmNsdWRlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlTWFwO1xuICB9XG4gIHB1YmxpYyBwdXRJbmNsdWRlTWFwKHZhbHVlOiBGbXNQb2xpY3lJbmNsdWRlTWFwKSB7XG4gICAgdGhpcy5faW5jbHVkZU1hcC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZU1hcCgpIHtcbiAgICB0aGlzLl9pbmNsdWRlTWFwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVNYXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU1hcC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfc2VydmljZV9wb2xpY3lfZGF0YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhID0gbmV3IEZtc1BvbGljeVNlY3VyaXR5U2VydmljZVBvbGljeURhdGFPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2VjdXJpdHlfc2VydmljZV9wb2xpY3lfZGF0YVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhO1xuICB9XG4gIHB1YmxpYyBwdXRTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhKHZhbHVlOiBGbXNQb2xpY3lTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5U2VydmljZVBvbGljeURhdGFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxldGVfYWxsX3BvbGljeV9yZXNvdXJjZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9kZWxldGVBbGxQb2xpY3lSZXNvdXJjZXMpLFxuICAgICAgZXhjbHVkZV9yZXNvdXJjZV90YWdzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZXhjbHVkZVJlc291cmNlVGFncyksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHJlbWVkaWF0aW9uX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZW1lZGlhdGlvbkVuYWJsZWQpLFxuICAgICAgcmVzb3VyY2VfdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fcmVzb3VyY2VUYWdzKSxcbiAgICAgIHJlc291cmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jlc291cmNlVHlwZSksXG4gICAgICByZXNvdXJjZV90eXBlX2xpc3Q6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3Jlc291cmNlVHlwZUxpc3QpLFxuICAgICAgZXhjbHVkZV9tYXA6IGZtc1BvbGljeUV4Y2x1ZGVNYXBUb1RlcnJhZm9ybSh0aGlzLl9leGNsdWRlTWFwLmludGVybmFsVmFsdWUpLFxuICAgICAgaW5jbHVkZV9tYXA6IGZtc1BvbGljeUluY2x1ZGVNYXBUb1RlcnJhZm9ybSh0aGlzLl9pbmNsdWRlTWFwLmludGVybmFsVmFsdWUpLFxuICAgICAgc2VjdXJpdHlfc2VydmljZV9wb2xpY3lfZGF0YTogZm1zUG9saWN5U2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YVRvVGVycmFmb3JtKHRoaXMuX3NlY3VyaXR5U2VydmljZVBvbGljeURhdGEuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19