"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsOrganizationsOrganization = exports.DataAwsOrganizationsOrganizationRoots = exports.DataAwsOrganizationsOrganizationRootsPolicyTypes = exports.DataAwsOrganizationsOrganizationNonMasterAccounts = exports.DataAwsOrganizationsOrganizationAccounts = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsOrganizationsOrganizationAccounts extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // email - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get email() {
        return this.getStringAttribute('email');
    }
    // id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
}
exports.DataAwsOrganizationsOrganizationAccounts = DataAwsOrganizationsOrganizationAccounts;
_a = JSII_RTTI_SYMBOL_1;
DataAwsOrganizationsOrganizationAccounts[_a] = { fqn: "@cdktf/provider-aws.organizations.DataAwsOrganizationsOrganizationAccounts", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsOrganizationsOrganizationNonMasterAccounts extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // email - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get email() {
        return this.getStringAttribute('email');
    }
    // id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
}
exports.DataAwsOrganizationsOrganizationNonMasterAccounts = DataAwsOrganizationsOrganizationNonMasterAccounts;
_b = JSII_RTTI_SYMBOL_1;
DataAwsOrganizationsOrganizationNonMasterAccounts[_b] = { fqn: "@cdktf/provider-aws.organizations.DataAwsOrganizationsOrganizationNonMasterAccounts", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsOrganizationsOrganizationRootsPolicyTypes extends cdktf.ComplexComputedList {
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    // type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsOrganizationsOrganizationRootsPolicyTypes = DataAwsOrganizationsOrganizationRootsPolicyTypes;
_c = JSII_RTTI_SYMBOL_1;
DataAwsOrganizationsOrganizationRootsPolicyTypes[_c] = { fqn: "@cdktf/provider-aws.organizations.DataAwsOrganizationsOrganizationRootsPolicyTypes", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsOrganizationsOrganizationRoots extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    // policy_types - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get policyTypes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('policy_types');
    }
}
exports.DataAwsOrganizationsOrganizationRoots = DataAwsOrganizationsOrganizationRoots;
_d = JSII_RTTI_SYMBOL_1;
DataAwsOrganizationsOrganizationRoots[_d] = { fqn: "@cdktf/provider-aws.organizations.DataAwsOrganizationsOrganizationRoots", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization.html aws_organizations_organization}.
 *
 * @stability stable
 */
class DataAwsOrganizationsOrganization extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization.html aws_organizations_organization} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_organizations_organization',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accounts - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    accounts(index) {
        return new DataAwsOrganizationsOrganizationAccounts(this, 'accounts', index);
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // aws_service_access_principals - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get awsServiceAccessPrincipals() {
        return this.getListAttribute('aws_service_access_principals');
    }
    // enabled_policy_types - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabledPolicyTypes() {
        return this.getListAttribute('enabled_policy_types');
    }
    // feature_set - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get featureSet() {
        return this.getStringAttribute('feature_set');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // master_account_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get masterAccountArn() {
        return this.getStringAttribute('master_account_arn');
    }
    // master_account_email - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get masterAccountEmail() {
        return this.getStringAttribute('master_account_email');
    }
    // master_account_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get masterAccountId() {
        return this.getStringAttribute('master_account_id');
    }
    // non_master_accounts - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    nonMasterAccounts(index) {
        return new DataAwsOrganizationsOrganizationNonMasterAccounts(this, 'non_master_accounts', index);
    }
    // roots - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    roots(index) {
        return new DataAwsOrganizationsOrganizationRoots(this, 'roots', index);
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {};
    }
}
exports.DataAwsOrganizationsOrganization = DataAwsOrganizationsOrganization;
_e = JSII_RTTI_SYMBOL_1;
DataAwsOrganizationsOrganization[_e] = { fqn: "@cdktf/provider-aws.organizations.DataAwsOrganizationsOrganization", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsOrganizationsOrganization.tfResourceType = "aws_organizations_organization";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtb3JnYW5pemF0aW9ucy1vcmdhbml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3JnYW5pemF0aW9ucy9kYXRhLWF3cy1vcmdhbml6YXRpb25zLW9yZ2FuaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQUsvQixNQUFhLHdDQUF5QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckYseURBQXlEOzs7O0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyREFBMkQ7Ozs7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHdEQUF3RDs7OztJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMERBQTBEOzs7O0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw0REFBNEQ7Ozs7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7QUF6QkgsNEZBMEJDOzs7Ozs7QUFDRCxNQUFhLGlEQUFrRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUYseURBQXlEOzs7O0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyREFBMkQ7Ozs7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxD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LE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHdFQUF3RTs7OztJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCwwRUFBMEU7Ozs7SUFDMUUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsdUVBQXVFOzs7O0lBQ3ZFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx5RUFBeUU7Ozs7SUFDbEUsaUJBQWlCLENBQUMsS0FBYTtRQUNwQyxPQUFPLElBQUksaURBQWlELENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCwyREFBMkQ7Ozs7SUFDcEQsS0FBSyxDQUFDLEtBQWE7UUFDeEIsT0FBTyxJQUFJLHFDQUFxQyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPLEVBQ04sQ0FBQztJQUNKLENBQUM7O0FBM0ZILDRFQTRGQzs7O0FBMUZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csK0NBQWMsR0FBVyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NPcmdhbml6YXRpb25zT3JnYW5pemF0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c09yZ2FuaXphdGlvbnNPcmdhbml6YXRpb25BY2NvdW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZW1haWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbWFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtYWlsJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzT3JnYW5pemF0aW9uc09yZ2FuaXphdGlvbk5vbk1hc3RlckFjY291bnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBlbWFpbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVtYWlsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1haWwnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NPcmdhbml6YXRpb25zT3JnYW5pemF0aW9uUm9vdHNQb2xpY3lUeXBlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzT3JnYW5pemF0aW9uc09yZ2FuaXphdGlvblJvb3RzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gcG9saWN5X3R5cGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9saWN5VHlwZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BvbGljeV90eXBlcycpIGFzIGFueTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEYXRhQXdzT3JnYW5pemF0aW9uc09yZ2FuaXphdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX29yZ2FuaXphdGlvbnNfb3JnYW5pemF0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzT3JnYW5pemF0aW9uc09yZ2FuaXphdGlvbkNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfb3JnYW5pemF0aW9uc19vcmdhbml6YXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjY291bnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBhY2NvdW50cyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzT3JnYW5pemF0aW9uc09yZ2FuaXphdGlvbkFjY291bnRzKHRoaXMsICdhY2NvdW50cycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXdzX3NlcnZpY2VfYWNjZXNzX3ByaW5jaXBhbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NTZXJ2aWNlQWNjZXNzUHJpbmNpcGFscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhd3Nfc2VydmljZV9hY2Nlc3NfcHJpbmNpcGFscycpO1xuICB9XG5cbiAgLy8gZW5hYmxlZF9wb2xpY3lfdHlwZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkUG9saWN5VHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZW5hYmxlZF9wb2xpY3lfdHlwZXMnKTtcbiAgfVxuXG4gIC8vIGZlYXR1cmVfc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmVhdHVyZVNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZlYXR1cmVfc2V0Jyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbWFzdGVyX2FjY291bnRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFzdGVyQWNjb3VudEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21hc3Rlcl9hY2NvdW50X2FybicpO1xuICB9XG5cbiAgLy8gbWFzdGVyX2FjY291bnRfZW1haWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXN0ZXJBY2NvdW50RW1haWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXN0ZXJfYWNjb3VudF9lbWFpbCcpO1xuICB9XG5cbiAgLy8gbWFzdGVyX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXN0ZXJBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXN0ZXJfYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gbm9uX21hc3Rlcl9hY2NvdW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgbm9uTWFzdGVyQWNjb3VudHMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c09yZ2FuaXphdGlvbnNPcmdhbml6YXRpb25Ob25NYXN0ZXJBY2NvdW50cyh0aGlzLCAnbm9uX21hc3Rlcl9hY2NvdW50cycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHJvb3RzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyByb290cyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzT3JnYW5pemF0aW9uc09yZ2FuaXphdGlvblJvb3RzKHRoaXMsICdyb290cycsIGluZGV4KTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgIH07XG4gIH1cbn1cbiJdfQ==