"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeartifactRepositoryPermissionsPolicy = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html aws_codeartifact_repository_permissions_policy}.
 *
 * @stability stable
 */
class CodeartifactRepositoryPermissionsPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html aws_codeartifact_repository_permissions_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codeartifact_repository_permissions_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._domain = config.domain;
        this._domainOwner = config.domainOwner;
        this._policyDocument = config.policyDocument;
        this._policyRevision = config.policyRevision;
        this._repository = config.repository;
    }
    /**
     * @stability stable
     */
    get domain() {
        return this.getStringAttribute('domain');
    }
    /**
     * @stability stable
     */
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainInput() {
        return this._domain;
    }
    /**
     * @stability stable
     */
    get domainOwner() {
        return this.getStringAttribute('domain_owner');
    }
    /**
     * @stability stable
     */
    set domainOwner(value) {
        this._domainOwner = value;
    }
    /**
     * @stability stable
     */
    resetDomainOwner() {
        this._domainOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainOwnerInput() {
        return this._domainOwner;
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
    get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    /**
     * @stability stable
     */
    set policyDocument(value) {
        this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get policyDocumentInput() {
        return this._policyDocument;
    }
    /**
     * @stability stable
     */
    get policyRevision() {
        return this.getStringAttribute('policy_revision');
    }
    /**
     * @stability stable
     */
    set policyRevision(value) {
        this._policyRevision = value;
    }
    /**
     * @stability stable
     */
    resetPolicyRevision() {
        this._policyRevision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get policyRevisionInput() {
        return this._policyRevision;
    }
    /**
     * @stability stable
     */
    get repository() {
        return this.getStringAttribute('repository');
    }
    /**
     * @stability stable
     */
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get repositoryInput() {
        return this._repository;
    }
    // resource_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            domain_owner: cdktf.stringToTerraform(this._domainOwner),
            policy_document: cdktf.stringToTerraform(this._policyDocument),
            policy_revision: cdktf.stringToTerraform(this._policyRevision),
            repository: cdktf.stringToTerraform(this._repository),
        };
    }
}
exports.CodeartifactRepositoryPermissionsPolicy = CodeartifactRepositoryPermissionsPolicy;
_a = JSII_RTTI_SYMBOL_1;
CodeartifactRepositoryPermissionsPolicy[_a] = { fqn: "@cdktf/provider-aws.codeartifact.CodeartifactRepositoryPermissionsPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CodeartifactRepositoryPermissionsPolicy.tfResourceType = "aws_codeartifact_repository_permissions_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWFydGlmYWN0LXJlcG9zaXRvcnktcGVybWlzc2lvbnMtcG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvZGVhcnRpZmFjdC9jb2RlYXJ0aWZhY3QtcmVwb3NpdG9yeS1wZXJtaXNzaW9ucy1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQWlCL0IsTUFBYSx1Q0FBd0MsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT2xGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFxRDtRQUNwRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGdEQUFnRDtZQUN2RSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBUUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElB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QUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIENvZGVhcnRpZmFjdFJlcG9zaXRvcnlQZXJtaXNzaW9uc1BvbGljeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbk93bmVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvbGljeURvY3VtZW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9saWN5UmV2aXNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvc2l0b3J5OiBzdHJpbmc7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29kZWFydGlmYWN0UmVwb3NpdG9yeVBlcm1pc3Npb25zUG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2NvZGVhcnRpZmFjdF9yZXBvc2l0b3J5X3Blcm1pc3Npb25zX3BvbGljeVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvZGVhcnRpZmFjdFJlcG9zaXRvcnlQZXJtaXNzaW9uc1BvbGljeUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvZGVhcnRpZmFjdF9yZXBvc2l0b3J5X3Blcm1pc3Npb25zX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kb21haW4gPSBjb25maWcuZG9tYWluO1xuICAgIHRoaXMuX2RvbWFpbk93bmVyID0gY29uZmlnLmRvbWFpbk93bmVyO1xuICAgIHRoaXMuX3BvbGljeURvY3VtZW50ID0gY29uZmlnLnBvbGljeURvY3VtZW50O1xuICAgIHRoaXMuX3BvbGljeVJldmlzaW9uID0gY29uZmlnLnBvbGljeVJldmlzaW9uO1xuICAgIHRoaXMuX3JlcG9zaXRvcnkgPSBjb25maWcucmVwb3NpdG9yeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZG9tYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9tYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluO1xuICB9XG5cbiAgLy8gZG9tYWluX293bmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZG9tYWluT3duZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvbWFpbk93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX293bmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW5Pd25lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9tYWluT3duZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb21haW5Pd25lcigpIHtcbiAgICB0aGlzLl9kb21haW5Pd25lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluT3duZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluT3duZXI7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcG9saWN5X2RvY3VtZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BvbGljeURvY3VtZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb2xpY3lEb2N1bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BvbGljeV9kb2N1bWVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9saWN5RG9jdW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BvbGljeURvY3VtZW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvbGljeURvY3VtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGljeURvY3VtZW50O1xuICB9XG5cbiAgLy8gcG9saWN5X3JldmlzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9saWN5UmV2aXNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvbGljeVJldmlzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9saWN5X3JldmlzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBwb2xpY3lSZXZpc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9saWN5UmV2aXNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb2xpY3lSZXZpc2lvbigpIHtcbiAgICB0aGlzLl9wb2xpY3lSZXZpc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9saWN5UmV2aXNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9saWN5UmV2aXNpb247XG4gIH1cblxuICAvLyByZXBvc2l0b3J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlcG9zaXRvcnk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBvc2l0b3J5Jyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvc2l0b3J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvc2l0b3J5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZG9tYWluKSxcbiAgICAgIGRvbWFpbl9vd25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZG9tYWluT3duZXIpLFxuICAgICAgcG9saWN5X2RvY3VtZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wb2xpY3lEb2N1bWVudCksXG4gICAgICBwb2xpY3lfcmV2aXNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BvbGljeVJldmlzaW9uKSxcbiAgICAgIHJlcG9zaXRvcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcG9zaXRvcnkpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==