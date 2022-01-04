"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppstreamDirectoryConfig = exports.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference = exports.appstreamDirectoryConfigServiceAccountCredentialsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appstreamDirectoryConfigServiceAccountCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_name: cdktf.stringToTerraform(struct.accountName),
        account_password: cdktf.stringToTerraform(struct.accountPassword),
    };
}
exports.appstreamDirectoryConfigServiceAccountCredentialsToTerraform = appstreamDirectoryConfigServiceAccountCredentialsToTerraform;
/**
 * @stability stable
 */
class AppstreamDirectoryConfigServiceAccountCredentialsOutputReference extends cdktf.ComplexObject {
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
        if (this._accountName) {
            hasAnyValues = true;
            internalValueResult.accountName = this._accountName;
        }
        if (this._accountPassword) {
            hasAnyValues = true;
            internalValueResult.accountPassword = this._accountPassword;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accountName = undefined;
            this._accountPassword = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accountName = value.accountName;
            this._accountPassword = value.accountPassword;
        }
    }
    /**
     * @stability stable
     */
    get accountName() {
        return this.getStringAttribute('account_name');
    }
    /**
     * @stability stable
     */
    set accountName(value) {
        this._accountName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accountNameInput() {
        return this._accountName;
    }
    /**
     * @stability stable
     */
    get accountPassword() {
        return this.getStringAttribute('account_password');
    }
    /**
     * @stability stable
     */
    set accountPassword(value) {
        this._accountPassword = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accountPasswordInput() {
        return this._accountPassword;
    }
}
exports.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference = AppstreamDirectoryConfigServiceAccountCredentialsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppstreamDirectoryConfigServiceAccountCredentialsOutputReference[_a] = { fqn: "@cdktf/provider-aws.appstream.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html aws_appstream_directory_config}.
 *
 * @stability stable
 */
class AppstreamDirectoryConfig extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html aws_appstream_directory_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appstream_directory_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // service_account_credentials - computed: false, optional: false, required: true
        this._serviceAccountCredentials = new AppstreamDirectoryConfigServiceAccountCredentialsOutputReference(this, "service_account_credentials", true);
        this._directoryName = config.directoryName;
        this._organizationalUnitDistinguishedNames = config.organizationalUnitDistinguishedNames;
        this._serviceAccountCredentials.internalValue = config.serviceAccountCredentials;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_time - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    /**
     * @stability stable
     */
    get directoryName() {
        return this.getStringAttribute('directory_name');
    }
    /**
     * @stability stable
     */
    set directoryName(value) {
        this._directoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get directoryNameInput() {
        return this._directoryName;
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
    get organizationalUnitDistinguishedNames() {
        return this.getListAttribute('organizational_unit_distinguished_names');
    }
    /**
     * @stability stable
     */
    set organizationalUnitDistinguishedNames(value) {
        this._organizationalUnitDistinguishedNames = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get organizationalUnitDistinguishedNamesInput() {
        return this._organizationalUnitDistinguishedNames;
    }
    /**
     * @stability stable
     */
    get serviceAccountCredentials() {
        return this._serviceAccountCredentials;
    }
    /**
     * @stability stable
     */
    putServiceAccountCredentials(value) {
        this._serviceAccountCredentials.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceAccountCredentialsInput() {
        return this._serviceAccountCredentials.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            directory_name: cdktf.stringToTerraform(this._directoryName),
            organizational_unit_distinguished_names: cdktf.listMapper(cdktf.stringToTerraform)(this._organizationalUnitDistinguishedNames),
            service_account_credentials: appstreamDirectoryConfigServiceAccountCredentialsToTerraform(this._serviceAccountCredentials.internalValue),
        };
    }
}
exports.AppstreamDirectoryConfig = AppstreamDirectoryConfig;
_b = JSII_RTTI_SYMBOL_1;
AppstreamDirectoryConfig[_b] = { fqn: "@cdktf/provider-aws.appstream.AppstreamDirectoryConfig", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppstreamDirectoryConfig.tfResourceType = "aws_appstream_directory_config";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3RyZWFtLWRpcmVjdG9yeS1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwc3RyZWFtL2FwcHN0cmVhbS1kaXJlY3RvcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBa0IvQixTQUFnQiw0REFBNEQsQ0FBQyxNQUE2SDtJQUN4TSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUNuRSxDQUFBO0FBQ0gsQ0FBQztBQVRELG9JQVNDOzs7O0FBRUQsTUFBYSxnRUFBaUUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2RyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENB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LHVDQUF1QyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO1lBQzlILDJCQUEyQixFQUFFLDREQUE0RCxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLENBQUM7U0FDekksQ0FBQztJQUNKLENBQUM7O0FBM0ZILDREQTRGQzs7O0FBMUZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csdUNBQWMsR0FBVyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBBcHBzdHJlYW1EaXJlY3RvcnlDb25maWdDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkaXJlY3RvcnlOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZXM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VBY2NvdW50Q3JlZGVudGlhbHM6IEFwcHN0cmVhbURpcmVjdG9yeUNvbmZpZ1NlcnZpY2VBY2NvdW50Q3JlZGVudGlhbHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHN0cmVhbURpcmVjdG9yeUNvbmZpZ1NlcnZpY2VBY2NvdW50Q3JlZGVudGlhbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjb3VudE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjb3VudFBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzdHJlYW1EaXJlY3RvcnlDb25maWdTZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwc3RyZWFtRGlyZWN0b3J5Q29uZmlnU2VydmljZUFjY291bnRDcmVkZW50aWFsc091dHB1dFJlZmVyZW5jZSB8IEFwcHN0cmVhbURpcmVjdG9yeUNvbmZpZ1NlcnZpY2VBY2NvdW50Q3JlZGVudGlhbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudE5hbWUpLFxuICAgIGFjY291bnRfcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudFBhc3N3b3JkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwc3RyZWFtRGlyZWN0b3J5Q29uZmlnU2VydmljZUFjY291bnRDcmVkZW50aWFsc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBzdHJlYW1EaXJlY3RvcnlDb25maWdTZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2NvdW50TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjb3VudE5hbWUgPSB0aGlzLl9hY2NvdW50TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FjY291bnRQYXNzd29yZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjb3VudFBhc3N3b3JkID0gdGhpcy5fYWNjb3VudFBhc3N3b3JkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwc3RyZWFtRGlyZWN0b3J5Q29uZmlnU2VydmljZUFjY291bnRDcmVkZW50aWFscyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjY291bnROYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWNjb3VudFBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY2NvdW50TmFtZSA9IHZhbHVlLmFjY291bnROYW1lO1xuICAgICAgdGhpcy5fYWNjb3VudFBhc3N3b3JkID0gdmFsdWUuYWNjb3VudFBhc3N3b3JkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjY291bnRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY2NvdW50TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWNjb3VudE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2NvdW50X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY291bnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY2NvdW50TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NvdW50TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NvdW50TmFtZTtcbiAgfVxuXG4gIC8vIGFjY291bnRfcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWNjb3VudFBhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2NvdW50UGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2NvdW50X3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2NvdW50UGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY291bnRQYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NvdW50UGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3VudFBhc3N3b3JkO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEFwcHN0cmVhbURpcmVjdG9yeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hcHBzdHJlYW1fZGlyZWN0b3J5X2NvbmZpZ1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcHBzdHJlYW1EaXJlY3RvcnlDb25maWdDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hcHBzdHJlYW1fZGlyZWN0b3J5X2NvbmZpZycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kaXJlY3RvcnlOYW1lID0gY29uZmlnLmRpcmVjdG9yeU5hbWU7XG4gICAgdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3Vpc2hlZE5hbWVzID0gY29uZmlnLm9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lcztcbiAgICB0aGlzLl9zZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzLmludGVybmFsVmFsdWUgPSBjb25maWcuc2VydmljZUFjY291bnRDcmVkZW50aWFscztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY3JlYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGRpcmVjdG9yeV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RpcmVjdG9yeU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3RvcnlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGlyZWN0b3J5TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlyZWN0b3J5TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXJlY3RvcnlOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdG9yeU5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gb3JnYW5pemF0aW9uYWxfdW5pdF9kaXN0aW5ndWlzaGVkX25hbWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX29yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBvcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnb3JnYW5pemF0aW9uYWxfdW5pdF9kaXN0aW5ndWlzaGVkX25hbWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBvcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3Vpc2hlZE5hbWVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZXM7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2FjY291bnRfY3JlZGVudGlhbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VydmljZUFjY291bnRDcmVkZW50aWFscyA9IG5ldyBBcHBzdHJlYW1EaXJlY3RvcnlDb25maWdTZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNlcnZpY2VfYWNjb3VudF9jcmVkZW50aWFsc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzO1xuICB9XG4gIHB1YmxpYyBwdXRTZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzKHZhbHVlOiBBcHBzdHJlYW1EaXJlY3RvcnlDb25maWdTZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzKSB7XG4gICAgdGhpcy5fc2VydmljZUFjY291bnRDcmVkZW50aWFscy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VBY2NvdW50Q3JlZGVudGlhbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUFjY291bnRDcmVkZW50aWFscy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkaXJlY3RvcnlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGlyZWN0b3J5TmFtZSksXG4gICAgICBvcmdhbml6YXRpb25hbF91bml0X2Rpc3Rpbmd1aXNoZWRfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lcyksXG4gICAgICBzZXJ2aWNlX2FjY291bnRfY3JlZGVudGlhbHM6IGFwcHN0cmVhbURpcmVjdG9yeUNvbmZpZ1NlcnZpY2VBY2NvdW50Q3JlZGVudGlhbHNUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlQWNjb3VudENyZWRlbnRpYWxzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==