"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcmCertificate = exports.AcmCertificateOptionsOutputReference = exports.acmCertificateOptionsToTerraform = exports.AcmCertificateDomainValidationOptions = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class AcmCertificateDomainValidationOptions extends cdktf.ComplexComputedList {
    // domain_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    // resource_record_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get resourceRecordName() {
        return this.getStringAttribute('resource_record_name');
    }
    // resource_record_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get resourceRecordType() {
        return this.getStringAttribute('resource_record_type');
    }
    // resource_record_value - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get resourceRecordValue() {
        return this.getStringAttribute('resource_record_value');
    }
}
exports.AcmCertificateDomainValidationOptions = AcmCertificateDomainValidationOptions;
_a = JSII_RTTI_SYMBOL_1;
AcmCertificateDomainValidationOptions[_a] = { fqn: "@cdktf/provider-aws.acm.AcmCertificateDomainValidationOptions", version: "3.0.1" };
function acmCertificateOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_transparency_logging_preference: cdktf.stringToTerraform(struct.certificateTransparencyLoggingPreference),
    };
}
exports.acmCertificateOptionsToTerraform = acmCertificateOptionsToTerraform;
/**
 * @stability stable
 */
class AcmCertificateOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateTransparencyLoggingPreference) {
            hasAnyValues = true;
            internalValueResult.certificateTransparencyLoggingPreference = this._certificateTransparencyLoggingPreference;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateTransparencyLoggingPreference = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateTransparencyLoggingPreference = value.certificateTransparencyLoggingPreference;
        }
    }
    /**
     * @stability stable
     */
    get certificateTransparencyLoggingPreference() {
        return this.getStringAttribute('certificate_transparency_logging_preference');
    }
    /**
     * @stability stable
     */
    set certificateTransparencyLoggingPreference(value) {
        this._certificateTransparencyLoggingPreference = value;
    }
    /**
     * @stability stable
     */
    resetCertificateTransparencyLoggingPreference() {
        this._certificateTransparencyLoggingPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateTransparencyLoggingPreferenceInput() {
        return this._certificateTransparencyLoggingPreference;
    }
}
exports.AcmCertificateOptionsOutputReference = AcmCertificateOptionsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AcmCertificateOptionsOutputReference[_b] = { fqn: "@cdktf/provider-aws.acm.AcmCertificateOptionsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html aws_acm_certificate}.
 *
 * @stability stable
 */
class AcmCertificate extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html aws_acm_certificate} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_acm_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // options - computed: false, optional: true, required: false
        this._options = new AcmCertificateOptionsOutputReference(this, "options", true);
        this._certificateAuthorityArn = config.certificateAuthorityArn;
        this._certificateBody = config.certificateBody;
        this._certificateChain = config.certificateChain;
        this._domainName = config.domainName;
        this._privateKey = config.privateKey;
        this._subjectAlternativeNames = config.subjectAlternativeNames;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._validationMethod = config.validationMethod;
        this._options.internalValue = config.options;
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
    get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    /**
     * @stability stable
     */
    set certificateAuthorityArn(value) {
        this._certificateAuthorityArn = value;
    }
    /**
     * @stability stable
     */
    resetCertificateAuthorityArn() {
        this._certificateAuthorityArn = undefined;
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
    get certificateBody() {
        return this.getStringAttribute('certificate_body');
    }
    /**
     * @stability stable
     */
    set certificateBody(value) {
        this._certificateBody = value;
    }
    /**
     * @stability stable
     */
    resetCertificateBody() {
        this._certificateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateBodyInput() {
        return this._certificateBody;
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
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    /**
     * @stability stable
     */
    set domainName(value) {
        this._domainName = value;
    }
    /**
     * @stability stable
     */
    resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainNameInput() {
        return this._domainName;
    }
    // domain_validation_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    domainValidationOptions(index) {
        return new AcmCertificateDomainValidationOptions(this, 'domain_validation_options', index);
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
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    /**
     * @stability stable
     */
    set privateKey(value) {
        this._privateKey = value;
    }
    /**
     * @stability stable
     */
    resetPrivateKey() {
        this._privateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get privateKeyInput() {
        return this._privateKey;
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    /**
     * @stability stable
     */
    get subjectAlternativeNames() {
        return this.getListAttribute('subject_alternative_names');
    }
    /**
     * @stability stable
     */
    set subjectAlternativeNames(value) {
        this._subjectAlternativeNames = value;
    }
    /**
     * @stability stable
     */
    resetSubjectAlternativeNames() {
        this._subjectAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames;
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
    // validation_emails - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get validationEmails() {
        return this.getListAttribute('validation_emails');
    }
    /**
     * @stability stable
     */
    get validationMethod() {
        return this.getStringAttribute('validation_method');
    }
    /**
     * @stability stable
     */
    set validationMethod(value) {
        this._validationMethod = value;
    }
    /**
     * @stability stable
     */
    resetValidationMethod() {
        this._validationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validationMethodInput() {
        return this._validationMethod;
    }
    /**
     * @stability stable
     */
    get options() {
        return this._options;
    }
    /**
     * @stability stable
     */
    putOptions(value) {
        this._options.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get optionsInput() {
        return this._options.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
            certificate_body: cdktf.stringToTerraform(this._certificateBody),
            certificate_chain: cdktf.stringToTerraform(this._certificateChain),
            domain_name: cdktf.stringToTerraform(this._domainName),
            private_key: cdktf.stringToTerraform(this._privateKey),
            subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform)(this._subjectAlternativeNames),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            validation_method: cdktf.stringToTerraform(this._validationMethod),
            options: acmCertificateOptionsToTerraform(this._options.internalValue),
        };
    }
}
exports.AcmCertificate = AcmCertificate;
_c = JSII_RTTI_SYMBOL_1;
AcmCertificate[_c] = { fqn: "@cdktf/provider-aws.acm.AcmCertificate", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AcmCertificate.tfResourceType = "aws_acm_certificate";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtLWNlcnRpZmljYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjbS9hY20tY2VydGlmaWNhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUF5Qi9CLE1BQWEscUNBQXNDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRixpRUFBaUU7Ozs7SUFDakUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwwRUFBMEU7Ozs7SUFDMUUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsMEVBQTBFOzs7O0lBQzFFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDJFQUEyRTs7OztJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7O0FBcEJILHNGQXFCQzs7O0FBTUQsU0FBZ0IsZ0NBQWdDLENBQUMsTUFBcUU7SUFDcEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCwyQ0FBMkMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHdDQUF3QyxDQUFDO0tBQ3ZILENBQUE7QUFDSCxDQUFDO0FBUkQsNEVBUUM7Ozs7QUFFRCxNQUFhLG9DQUFx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Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQWNtQ2VydGlmaWNhdGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBdXRob3JpdHlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQm9keT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3ViamVjdEFsdGVybmF0aXZlTmFtZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbGlkYXRpb25NZXRob2Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3B0aW9ucz86IEFjbUNlcnRpZmljYXRlT3B0aW9ucztcbn1cbmV4cG9ydCBjbGFzcyBBY21DZXJ0aWZpY2F0ZURvbWFpblZhbGlkYXRpb25PcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZG9tYWluX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX3JlY29yZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VSZWNvcmROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfcmVjb3JkX25hbWUnKTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX3JlY29yZF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VSZWNvcmRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfcmVjb3JkX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX3JlY29yZF92YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlUmVjb3JkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9yZWNvcmRfdmFsdWUnKTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBY21DZXJ0aWZpY2F0ZU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZVRyYW5zcGFyZW5jeUxvZ2dpbmdQcmVmZXJlbmNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWNtQ2VydGlmaWNhdGVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogQWNtQ2VydGlmaWNhdGVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgQWNtQ2VydGlmaWNhdGVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfdHJhbnNwYXJlbmN5X2xvZ2dpbmdfcHJlZmVyZW5jZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZVRyYW5zcGFyZW5jeUxvZ2dpbmdQcmVmZXJlbmNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWNtQ2VydGlmaWNhdGVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFjbUNlcnRpZmljYXRlT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVUcmFuc3BhcmVuY3lMb2dnaW5nUHJlZmVyZW5jZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVUcmFuc3BhcmVuY3lMb2dnaW5nUHJlZmVyZW5jZSA9IHRoaXMuX2NlcnRpZmljYXRlVHJhbnNwYXJlbmN5TG9nZ2luZ1ByZWZlcmVuY2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBY21DZXJ0aWZpY2F0ZU9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZVRyYW5zcGFyZW5jeUxvZ2dpbmdQcmVmZXJlbmNlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZVRyYW5zcGFyZW5jeUxvZ2dpbmdQcmVmZXJlbmNlID0gdmFsdWUuY2VydGlmaWNhdGVUcmFuc3BhcmVuY3lMb2dnaW5nUHJlZmVyZW5jZTtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV90cmFuc3BhcmVuY3lfbG9nZ2luZ19wcmVmZXJlbmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlVHJhbnNwYXJlbmN5TG9nZ2luZ1ByZWZlcmVuY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlVHJhbnNwYXJlbmN5TG9nZ2luZ1ByZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV90cmFuc3BhcmVuY3lfbG9nZ2luZ19wcmVmZXJlbmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZVRyYW5zcGFyZW5jeUxvZ2dpbmdQcmVmZXJlbmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZVRyYW5zcGFyZW5jeUxvZ2dpbmdQcmVmZXJlbmNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVUcmFuc3BhcmVuY3lMb2dnaW5nUHJlZmVyZW5jZSgpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZVRyYW5zcGFyZW5jeUxvZ2dpbmdQcmVmZXJlbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZVRyYW5zcGFyZW5jeUxvZ2dpbmdQcmVmZXJlbmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlVHJhbnNwYXJlbmN5TG9nZ2luZ1ByZWZlcmVuY2U7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBY21DZXJ0aWZpY2F0ZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hY21fY2VydGlmaWNhdGVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQWNtQ2VydGlmaWNhdGVDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FjbV9jZXJ0aWZpY2F0ZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybiA9IGNvbmZpZy5jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybjtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUJvZHkgPSBjb25maWcuY2VydGlmaWNhdGVCb2R5O1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSBjb25maWcuY2VydGlmaWNhdGVDaGFpbjtcbiAgICB0aGlzLl9kb21haW5OYW1lID0gY29uZmlnLmRvbWFpbk5hbWU7XG4gICAgdGhpcy5fcHJpdmF0ZUtleSA9IGNvbmZpZy5wcml2YXRlS2V5O1xuICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzID0gY29uZmlnLnN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdmFsaWRhdGlvbk1ldGhvZCA9IGNvbmZpZy52YWxpZGF0aW9uTWV0aG9kO1xuICAgIHRoaXMuX29wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5vcHRpb25zO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2F1dGhvcml0eV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2VydGlmaWNhdGVBdXRob3JpdHlBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXV0aG9yaXR5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfYXV0aG9yaXR5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVBdXRob3JpdHlBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXV0aG9yaXR5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVBdXRob3JpdHlBcm4oKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXV0aG9yaXR5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQXV0aG9yaXR5QXJuO1xuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfYm9keSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUJvZHk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQm9keSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2JvZHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQm9keSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVCb2R5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVCb2R5KCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQm9keSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVCb2R5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQm9keTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2NoYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQ2hhaW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9jaGFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVDaGFpbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRpZmljYXRlQ2hhaW4oKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG5cbiAgLy8gZG9tYWluX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb21haW5OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb21haW5OYW1lKCkge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluTmFtZTtcbiAgfVxuXG4gIC8vIGRvbWFpbl92YWxpZGF0aW9uX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGRvbWFpblZhbGlkYXRpb25PcHRpb25zKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IEFjbUNlcnRpZmljYXRlRG9tYWluVmFsaWRhdGlvbk9wdGlvbnModGhpcywgJ2RvbWFpbl92YWxpZGF0aW9uX29wdGlvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJpdmF0ZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpdmF0ZUtleSgpIHtcbiAgICB0aGlzLl9wcml2YXRlS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcml2YXRlS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXZhdGVLZXk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKCkge1xuICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcztcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB2YWxpZGF0aW9uX2VtYWlscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbGlkYXRpb25FbWFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndmFsaWRhdGlvbl9lbWFpbHMnKTtcbiAgfVxuXG4gIC8vIHZhbGlkYXRpb25fbWV0aG9kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsaWRhdGlvbk1ldGhvZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsaWRhdGlvbk1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkYXRpb25fbWV0aG9kJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWxpZGF0aW9uTWV0aG9kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWxpZGF0aW9uTWV0aG9kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmFsaWRhdGlvbk1ldGhvZCgpIHtcbiAgICB0aGlzLl92YWxpZGF0aW9uTWV0aG9kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZGF0aW9uTWV0aG9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb25NZXRob2Q7XG4gIH1cblxuICAvLyBvcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29wdGlvbnMgPSBuZXcgQWNtQ2VydGlmaWNhdGVPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm9wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0T3B0aW9ucyh2YWx1ZTogQWNtQ2VydGlmaWNhdGVPcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3B0aW9ucygpIHtcbiAgICB0aGlzLl9vcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybiksXG4gICAgICBjZXJ0aWZpY2F0ZV9ib2R5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZUJvZHkpLFxuICAgICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4pLFxuICAgICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RvbWFpbk5hbWUpLFxuICAgICAgcHJpdmF0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByaXZhdGVLZXkpLFxuICAgICAgc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB2YWxpZGF0aW9uX21ldGhvZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmFsaWRhdGlvbk1ldGhvZCksXG4gICAgICBvcHRpb25zOiBhY21DZXJ0aWZpY2F0ZU9wdGlvbnNUb1RlcnJhZm9ybSh0aGlzLl9vcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==