"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticsearchDomainSamlOptions = exports.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference = exports.elasticsearchDomainSamlOptionsSamlOptionsToTerraform = exports.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference = exports.elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entity_id: cdktf.stringToTerraform(struct.entityId),
        metadata_content: cdktf.stringToTerraform(struct.metadataContent),
    };
}
exports.elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform = elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform;
/**
 * @stability stable
 */
class ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference extends cdktf.ComplexObject {
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
        if (this._entityId) {
            hasAnyValues = true;
            internalValueResult.entityId = this._entityId;
        }
        if (this._metadataContent) {
            hasAnyValues = true;
            internalValueResult.metadataContent = this._metadataContent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._entityId = undefined;
            this._metadataContent = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._entityId = value.entityId;
            this._metadataContent = value.metadataContent;
        }
    }
    /**
     * @stability stable
     */
    get entityId() {
        return this.getStringAttribute('entity_id');
    }
    /**
     * @stability stable
     */
    set entityId(value) {
        this._entityId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get entityIdInput() {
        return this._entityId;
    }
    /**
     * @stability stable
     */
    get metadataContent() {
        return this.getStringAttribute('metadata_content');
    }
    /**
     * @stability stable
     */
    set metadataContent(value) {
        this._metadataContent = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metadataContentInput() {
        return this._metadataContent;
    }
}
exports.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference = ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference[_a] = { fqn: "@cdktf/provider-aws.elasticsearch.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference", version: "3.0.1" };
function elasticsearchDomainSamlOptionsSamlOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        master_backend_role: cdktf.stringToTerraform(struct.masterBackendRole),
        master_user_name: cdktf.stringToTerraform(struct.masterUserName),
        roles_key: cdktf.stringToTerraform(struct.rolesKey),
        session_timeout_minutes: cdktf.numberToTerraform(struct.sessionTimeoutMinutes),
        subject_key: cdktf.stringToTerraform(struct.subjectKey),
        idp: elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct.idp),
    };
}
exports.elasticsearchDomainSamlOptionsSamlOptionsToTerraform = elasticsearchDomainSamlOptionsSamlOptionsToTerraform;
/**
 * @stability stable
 */
class ElasticsearchDomainSamlOptionsSamlOptionsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idp - computed: false, optional: true, required: false
        this._idp = new ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference(this, "idp", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _d, _e;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._masterBackendRole) {
            hasAnyValues = true;
            internalValueResult.masterBackendRole = this._masterBackendRole;
        }
        if (this._masterUserName) {
            hasAnyValues = true;
            internalValueResult.masterUserName = this._masterUserName;
        }
        if (this._rolesKey) {
            hasAnyValues = true;
            internalValueResult.rolesKey = this._rolesKey;
        }
        if (this._sessionTimeoutMinutes) {
            hasAnyValues = true;
            internalValueResult.sessionTimeoutMinutes = this._sessionTimeoutMinutes;
        }
        if (this._subjectKey) {
            hasAnyValues = true;
            internalValueResult.subjectKey = this._subjectKey;
        }
        if ((_d = this._idp) === null || _d === void 0 ? void 0 : _d.internalValue) {
            hasAnyValues = true;
            internalValueResult.idp = (_e = this._idp) === null || _e === void 0 ? void 0 : _e.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._masterBackendRole = undefined;
            this._masterUserName = undefined;
            this._rolesKey = undefined;
            this._sessionTimeoutMinutes = undefined;
            this._subjectKey = undefined;
            this._idp.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._masterBackendRole = value.masterBackendRole;
            this._masterUserName = value.masterUserName;
            this._rolesKey = value.rolesKey;
            this._sessionTimeoutMinutes = value.sessionTimeoutMinutes;
            this._subjectKey = value.subjectKey;
            this._idp.internalValue = value.idp;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get masterBackendRole() {
        return this.getStringAttribute('master_backend_role');
    }
    /**
     * @stability stable
     */
    set masterBackendRole(value) {
        this._masterBackendRole = value;
    }
    /**
     * @stability stable
     */
    resetMasterBackendRole() {
        this._masterBackendRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get masterBackendRoleInput() {
        return this._masterBackendRole;
    }
    /**
     * @stability stable
     */
    get masterUserName() {
        return this.getStringAttribute('master_user_name');
    }
    /**
     * @stability stable
     */
    set masterUserName(value) {
        this._masterUserName = value;
    }
    /**
     * @stability stable
     */
    resetMasterUserName() {
        this._masterUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get masterUserNameInput() {
        return this._masterUserName;
    }
    /**
     * @stability stable
     */
    get rolesKey() {
        return this.getStringAttribute('roles_key');
    }
    /**
     * @stability stable
     */
    set rolesKey(value) {
        this._rolesKey = value;
    }
    /**
     * @stability stable
     */
    resetRolesKey() {
        this._rolesKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rolesKeyInput() {
        return this._rolesKey;
    }
    /**
     * @stability stable
     */
    get sessionTimeoutMinutes() {
        return this.getNumberAttribute('session_timeout_minutes');
    }
    /**
     * @stability stable
     */
    set sessionTimeoutMinutes(value) {
        this._sessionTimeoutMinutes = value;
    }
    /**
     * @stability stable
     */
    resetSessionTimeoutMinutes() {
        this._sessionTimeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sessionTimeoutMinutesInput() {
        return this._sessionTimeoutMinutes;
    }
    /**
     * @stability stable
     */
    get subjectKey() {
        return this.getStringAttribute('subject_key');
    }
    /**
     * @stability stable
     */
    set subjectKey(value) {
        this._subjectKey = value;
    }
    /**
     * @stability stable
     */
    resetSubjectKey() {
        this._subjectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subjectKeyInput() {
        return this._subjectKey;
    }
    /**
     * @stability stable
     */
    get idp() {
        return this._idp;
    }
    /**
     * @stability stable
     */
    putIdp(value) {
        this._idp.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdp() {
        this._idp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idpInput() {
        return this._idp.internalValue;
    }
}
exports.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference = ElasticsearchDomainSamlOptionsSamlOptionsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ElasticsearchDomainSamlOptionsSamlOptionsOutputReference[_b] = { fqn: "@cdktf/provider-aws.elasticsearch.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options}.
 *
 * @stability stable
 */
class ElasticsearchDomainSamlOptions extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elasticsearch_domain_saml_options',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // saml_options - computed: false, optional: true, required: false
        this._samlOptions = new ElasticsearchDomainSamlOptionsSamlOptionsOutputReference(this, "saml_options", true);
        this._domainName = config.domainName;
        this._samlOptions.internalValue = config.samlOptions;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainNameInput() {
        return this._domainName;
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
    get samlOptions() {
        return this._samlOptions;
    }
    /**
     * @stability stable
     */
    putSamlOptions(value) {
        this._samlOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSamlOptions() {
        this._samlOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get samlOptionsInput() {
        return this._samlOptions.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            saml_options: elasticsearchDomainSamlOptionsSamlOptionsToTerraform(this._samlOptions.internalValue),
        };
    }
}
exports.ElasticsearchDomainSamlOptions = ElasticsearchDomainSamlOptions;
_c = JSII_RTTI_SYMBOL_1;
ElasticsearchDomainSamlOptions[_c] = { fqn: "@cdktf/provider-aws.elasticsearch.ElasticsearchDomainSamlOptions", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ElasticsearchDomainSamlOptions.tfResourceType = "aws_elasticsearch_domain_saml_options";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpY3NlYXJjaC1kb21haW4tc2FtbC1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VsYXN0aWNzZWFyY2gvZWxhc3RpY3NlYXJjaC1kb21haW4tc2FtbC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBZ0IvQixTQUFnQix1REFBdUQsQ0FBQyxNQUFtSDtJQUN6TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUNuRSxDQUFBO0FBQ0gsQ0FBQztBQVRELDBIQVNDOzs7O0FBRUQsTUFBYSwyREFBNEQsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlsRyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFD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O0FBekVDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNkNBQWMsR0FBVyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2FtbE9wdGlvbnM/OiBFbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9ucztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnNJZHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVudGl0eUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRhZGF0YUNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWNzZWFyY2hEb21haW5TYW1sT3B0aW9uc1NhbWxPcHRpb25zSWRwVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnNJZHBPdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9uc0lkcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVudGl0eV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbnRpdHlJZCksXG4gICAgbWV0YWRhdGFfY29udGVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRhZGF0YUNvbnRlbnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9uc0lkcE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9uc0lkcCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW50aXR5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVudGl0eUlkID0gdGhpcy5fZW50aXR5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXRhZGF0YUNvbnRlbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldGFkYXRhQ29udGVudCA9IHRoaXMuX21ldGFkYXRhQ29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWNzZWFyY2hEb21haW5TYW1sT3B0aW9uc1NhbWxPcHRpb25zSWRwIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50aXR5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRhZGF0YUNvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VudGl0eUlkID0gdmFsdWUuZW50aXR5SWQ7XG4gICAgICB0aGlzLl9tZXRhZGF0YUNvbnRlbnQgPSB2YWx1ZS5tZXRhZGF0YUNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZW50aXR5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VudGl0eUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbnRpdHlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VudGl0eV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW50aXR5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VudGl0eUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVudGl0eUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eUlkO1xuICB9XG5cbiAgLy8gbWV0YWRhdGFfY29udGVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tZXRhZGF0YUNvbnRlbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldGFkYXRhX2NvbnRlbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldGFkYXRhQ29udGVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFDb250ZW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhQ29udGVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YUNvbnRlbnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hc3RlckJhY2tlbmRSb2xlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFzdGVyVXNlck5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZXNLZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlc3Npb25UaW1lb3V0TWludXRlcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3ViamVjdEtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWRwPzogRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnNJZHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5TYW1sT3B0aW9uc1NhbWxPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBtYXN0ZXJfYmFja2VuZF9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hc3RlckJhY2tlbmRSb2xlKSxcbiAgICBtYXN0ZXJfdXNlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hc3RlclVzZXJOYW1lKSxcbiAgICByb2xlc19rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZXNLZXkpLFxuICAgIHNlc3Npb25fdGltZW91dF9taW51dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlc3Npb25UaW1lb3V0TWludXRlcyksXG4gICAgc3ViamVjdF9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3ViamVjdEtleSksXG4gICAgaWRwOiBlbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9uc0lkcFRvVGVycmFmb3JtKHN0cnVjdCEuaWRwKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWFzdGVyQmFja2VuZFJvbGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hc3RlckJhY2tlbmRSb2xlID0gdGhpcy5fbWFzdGVyQmFja2VuZFJvbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXN0ZXJVc2VyTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFzdGVyVXNlck5hbWUgPSB0aGlzLl9tYXN0ZXJVc2VyTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVzS2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb2xlc0tleSA9IHRoaXMuX3JvbGVzS2V5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Vzc2lvblRpbWVvdXRNaW51dGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXNzaW9uVGltZW91dE1pbnV0ZXMgPSB0aGlzLl9zZXNzaW9uVGltZW91dE1pbnV0ZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJqZWN0S2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJqZWN0S2V5ID0gdGhpcy5fc3ViamVjdEtleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lkcD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWRwID0gdGhpcy5faWRwPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFzdGVyQmFja2VuZFJvbGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXN0ZXJVc2VyTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVzS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2Vzc2lvblRpbWVvdXRNaW51dGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3ViamVjdEtleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lkcC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX21hc3RlckJhY2tlbmRSb2xlID0gdmFsdWUubWFzdGVyQmFja2VuZFJvbGU7XG4gICAgICB0aGlzLl9tYXN0ZXJVc2VyTmFtZSA9IHZhbHVlLm1hc3RlclVzZXJOYW1lO1xuICAgICAgdGhpcy5fcm9sZXNLZXkgPSB2YWx1ZS5yb2xlc0tleTtcbiAgICAgIHRoaXMuX3Nlc3Npb25UaW1lb3V0TWludXRlcyA9IHZhbHVlLnNlc3Npb25UaW1lb3V0TWludXRlcztcbiAgICAgIHRoaXMuX3N1YmplY3RLZXkgPSB2YWx1ZS5zdWJqZWN0S2V5O1xuICAgICAgdGhpcy5faWRwLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pZHA7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBtYXN0ZXJfYmFja2VuZF9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21hc3RlckJhY2tlbmRSb2xlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXN0ZXJCYWNrZW5kUm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21hc3Rlcl9iYWNrZW5kX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hc3RlckJhY2tlbmRSb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXN0ZXJCYWNrZW5kUm9sZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hc3RlckJhY2tlbmRSb2xlKCkge1xuICAgIHRoaXMuX21hc3RlckJhY2tlbmRSb2xlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXN0ZXJCYWNrZW5kUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJCYWNrZW5kUm9sZTtcbiAgfVxuXG4gIC8vIG1hc3Rlcl91c2VyX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFzdGVyVXNlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1hc3RlclVzZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFzdGVyX3VzZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWFzdGVyVXNlck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21hc3RlclVzZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFzdGVyVXNlck5hbWUoKSB7XG4gICAgdGhpcy5fbWFzdGVyVXNlck5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hc3RlclVzZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hc3RlclVzZXJOYW1lO1xuICB9XG5cbiAgLy8gcm9sZXNfa2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JvbGVzS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlc0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVzX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZXNLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVzS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9sZXNLZXkoKSB7XG4gICAgdGhpcy5fcm9sZXNLZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVzS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVzS2V5O1xuICB9XG5cbiAgLy8gc2Vzc2lvbl90aW1lb3V0X21pbnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2Vzc2lvblRpbWVvdXRNaW51dGVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzZXNzaW9uVGltZW91dE1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZXNzaW9uX3RpbWVvdXRfbWludXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2Vzc2lvblRpbWVvdXRNaW51dGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZXNzaW9uVGltZW91dE1pbnV0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXNzaW9uVGltZW91dE1pbnV0ZXMoKSB7XG4gICAgdGhpcy5fc2Vzc2lvblRpbWVvdXRNaW51dGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXNzaW9uVGltZW91dE1pbnV0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblRpbWVvdXRNaW51dGVzO1xuICB9XG5cbiAgLy8gc3ViamVjdF9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3ViamVjdEtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3ViamVjdEtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1YmplY3Rfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJqZWN0S2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWJqZWN0S2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3ViamVjdEtleSgpIHtcbiAgICB0aGlzLl9zdWJqZWN0S2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJqZWN0S2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3RLZXk7XG4gIH1cblxuICAvLyBpZHAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWRwID0gbmV3IEVsYXN0aWNzZWFyY2hEb21haW5TYW1sT3B0aW9uc1NhbWxPcHRpb25zSWRwT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImlkcFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpZHAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkcDtcbiAgfVxuICBwdWJsaWMgcHV0SWRwKHZhbHVlOiBFbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9uc0lkcCkge1xuICAgIHRoaXMuX2lkcC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWRwKCkge1xuICAgIHRoaXMuX2lkcC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZHBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRwLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBFbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWxhc3RpY3NlYXJjaF9kb21haW5fc2FtbF9vcHRpb25zXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWxhc3RpY3NlYXJjaF9kb21haW5fc2FtbF9vcHRpb25zJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSBjb25maWcuZG9tYWluTmFtZTtcbiAgICB0aGlzLl9zYW1sT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNhbWxPcHRpb25zO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kb21haW5OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5OYW1lO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHNhbWxfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYW1sT3B0aW9ucyA9IG5ldyBFbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzYW1sX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2FtbE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbWxPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRTYW1sT3B0aW9ucyh2YWx1ZTogRWxhc3RpY3NlYXJjaERvbWFpblNhbWxPcHRpb25zU2FtbE9wdGlvbnMpIHtcbiAgICB0aGlzLl9zYW1sT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FtbE9wdGlvbnMoKSB7XG4gICAgdGhpcy5fc2FtbE9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FtbE9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtbE9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RvbWFpbk5hbWUpLFxuICAgICAgc2FtbF9vcHRpb25zOiBlbGFzdGljc2VhcmNoRG9tYWluU2FtbE9wdGlvbnNTYW1sT3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX3NhbWxPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==