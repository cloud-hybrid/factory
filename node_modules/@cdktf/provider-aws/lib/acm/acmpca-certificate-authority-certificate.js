"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcmpcaCertificateAuthorityCertificate = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html aws_acmpca_certificate_authority_certificate}.
 *
 * @stability stable
 */
class AcmpcaCertificateAuthorityCertificate extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html aws_acmpca_certificate_authority_certificate} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_acmpca_certificate_authority_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._certificate = config.certificate;
        this._certificateAuthorityArn = config.certificateAuthorityArn;
        this._certificateChain = config.certificateChain;
    }
    /**
     * @stability stable
     */
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    /**
     * @stability stable
     */
    set certificate(value) {
        this._certificate = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateInput() {
        return this._certificate;
    }
    /**
     * @stability stable
     */
    get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    /**
     * @stability stable
     */
    set certificateAuthorityArn(value) {
        this._certificateAuthorityArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateAuthorityArnInput() {
        return this._certificateAuthorityArn;
    }
    /**
     * @stability stable
     */
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    /**
     * @stability stable
     */
    set certificateChain(value) {
        this._certificateChain = value;
    }
    /**
     * @stability stable
     */
    resetCertificateChain() {
        this._certificateChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateChainInput() {
        return this._certificateChain;
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
            certificate: cdktf.stringToTerraform(this._certificate),
            certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
            certificate_chain: cdktf.stringToTerraform(this._certificateChain),
        };
    }
}
exports.AcmpcaCertificateAuthorityCertificate = AcmpcaCertificateAuthorityCertificate;
_a = JSII_RTTI_SYMBOL_1;
AcmpcaCertificateAuthorityCertificate[_a] = { fqn: "@cdktf/provider-aws.acm.AcmpcaCertificateAuthorityCertificate", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AcmpcaCertificateAuthorityCertificate.tfResourceType = "aws_acmpca_certificate_authority_certificate";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtcGNhLWNlcnRpZmljYXRlLWF1dGhvcml0eS1jZXJ0aWZpY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY20vYWNtcGNhLWNlcnRpZmljYXRlLWF1dGhvcml0eS1jZXJ0aWZpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBYS9CLE1BQWEscUNBQXNDLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9oRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBbUQ7UUFDbEcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw4Q0FBOEM7WUFDckUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQzs7OztJQVFELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFhO1FBQzlDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdkQseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztZQUNqRixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDOztBQXpGSCxzRkEwRkM7OztBQXhGQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLG9EQUFjLEdBQVcsOENBQThDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBBY21wY2FDZXJ0aWZpY2F0ZUF1dGhvcml0eUNlcnRpZmljYXRlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBdXRob3JpdHlBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDZXJ0aWZpY2F0ZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hY21wY2FfY2VydGlmaWNhdGVfYXV0aG9yaXR5X2NlcnRpZmljYXRlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQWNtcGNhQ2VydGlmaWNhdGVBdXRob3JpdHlDZXJ0aWZpY2F0ZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FjbXBjYV9jZXJ0aWZpY2F0ZV9hdXRob3JpdHlfY2VydGlmaWNhdGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY2VydGlmaWNhdGUgPSBjb25maWcuY2VydGlmaWNhdGU7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm4gPSBjb25maWcuY2VydGlmaWNhdGVBdXRob3JpdHlBcm47XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IGNvbmZpZy5jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlO1xuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfYXV0aG9yaXR5X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBdXRob3JpdHlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZUF1dGhvcml0eUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm47XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVDaGFpbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlcnRpZmljYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZSksXG4gICAgICBjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybiksXG4gICAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2VydGlmaWNhdGVDaGFpbiksXG4gICAgfTtcbiAgfVxufVxuIl19