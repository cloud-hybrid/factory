"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamAccountPasswordPolicy = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy}.
 *
 * @stability stable
 */
class IamAccountPasswordPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_iam_account_password_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowUsersToChangePassword = config.allowUsersToChangePassword;
        this._hardExpiry = config.hardExpiry;
        this._maxPasswordAge = config.maxPasswordAge;
        this._minimumPasswordLength = config.minimumPasswordLength;
        this._passwordReusePrevention = config.passwordReusePrevention;
        this._requireLowercaseCharacters = config.requireLowercaseCharacters;
        this._requireNumbers = config.requireNumbers;
        this._requireSymbols = config.requireSymbols;
        this._requireUppercaseCharacters = config.requireUppercaseCharacters;
    }
    /**
     * @stability stable
     */
    get allowUsersToChangePassword() {
        return this.getBooleanAttribute('allow_users_to_change_password');
    }
    /**
     * @stability stable
     */
    set allowUsersToChangePassword(value) {
        this._allowUsersToChangePassword = value;
    }
    /**
     * @stability stable
     */
    resetAllowUsersToChangePassword() {
        this._allowUsersToChangePassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowUsersToChangePasswordInput() {
        return this._allowUsersToChangePassword;
    }
    // expire_passwords - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get expirePasswords() {
        return this.getBooleanAttribute('expire_passwords');
    }
    /**
     * @stability stable
     */
    get hardExpiry() {
        return this.getBooleanAttribute('hard_expiry');
    }
    /**
     * @stability stable
     */
    set hardExpiry(value) {
        this._hardExpiry = value;
    }
    /**
     * @stability stable
     */
    resetHardExpiry() {
        this._hardExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hardExpiryInput() {
        return this._hardExpiry;
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
    get maxPasswordAge() {
        return this.getNumberAttribute('max_password_age');
    }
    /**
     * @stability stable
     */
    set maxPasswordAge(value) {
        this._maxPasswordAge = value;
    }
    /**
     * @stability stable
     */
    resetMaxPasswordAge() {
        this._maxPasswordAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxPasswordAgeInput() {
        return this._maxPasswordAge;
    }
    /**
     * @stability stable
     */
    get minimumPasswordLength() {
        return this.getNumberAttribute('minimum_password_length');
    }
    /**
     * @stability stable
     */
    set minimumPasswordLength(value) {
        this._minimumPasswordLength = value;
    }
    /**
     * @stability stable
     */
    resetMinimumPasswordLength() {
        this._minimumPasswordLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minimumPasswordLengthInput() {
        return this._minimumPasswordLength;
    }
    /**
     * @stability stable
     */
    get passwordReusePrevention() {
        return this.getNumberAttribute('password_reuse_prevention');
    }
    /**
     * @stability stable
     */
    set passwordReusePrevention(value) {
        this._passwordReusePrevention = value;
    }
    /**
     * @stability stable
     */
    resetPasswordReusePrevention() {
        this._passwordReusePrevention = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passwordReusePreventionInput() {
        return this._passwordReusePrevention;
    }
    /**
     * @stability stable
     */
    get requireLowercaseCharacters() {
        return this.getBooleanAttribute('require_lowercase_characters');
    }
    /**
     * @stability stable
     */
    set requireLowercaseCharacters(value) {
        this._requireLowercaseCharacters = value;
    }
    /**
     * @stability stable
     */
    resetRequireLowercaseCharacters() {
        this._requireLowercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireLowercaseCharactersInput() {
        return this._requireLowercaseCharacters;
    }
    /**
     * @stability stable
     */
    get requireNumbers() {
        return this.getBooleanAttribute('require_numbers');
    }
    /**
     * @stability stable
     */
    set requireNumbers(value) {
        this._requireNumbers = value;
    }
    /**
     * @stability stable
     */
    resetRequireNumbers() {
        this._requireNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireNumbersInput() {
        return this._requireNumbers;
    }
    /**
     * @stability stable
     */
    get requireSymbols() {
        return this.getBooleanAttribute('require_symbols');
    }
    /**
     * @stability stable
     */
    set requireSymbols(value) {
        this._requireSymbols = value;
    }
    /**
     * @stability stable
     */
    resetRequireSymbols() {
        this._requireSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireSymbolsInput() {
        return this._requireSymbols;
    }
    /**
     * @stability stable
     */
    get requireUppercaseCharacters() {
        return this.getBooleanAttribute('require_uppercase_characters');
    }
    /**
     * @stability stable
     */
    set requireUppercaseCharacters(value) {
        this._requireUppercaseCharacters = value;
    }
    /**
     * @stability stable
     */
    resetRequireUppercaseCharacters() {
        this._requireUppercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireUppercaseCharactersInput() {
        return this._requireUppercaseCharacters;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            allow_users_to_change_password: cdktf.booleanToTerraform(this._allowUsersToChangePassword),
            hard_expiry: cdktf.booleanToTerraform(this._hardExpiry),
            max_password_age: cdktf.numberToTerraform(this._maxPasswordAge),
            minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
            password_reuse_prevention: cdktf.numberToTerraform(this._passwordReusePrevention),
            require_lowercase_characters: cdktf.booleanToTerraform(this._requireLowercaseCharacters),
            require_numbers: cdktf.booleanToTerraform(this._requireNumbers),
            require_symbols: cdktf.booleanToTerraform(this._requireSymbols),
            require_uppercase_characters: cdktf.booleanToTerraform(this._requireUppercaseCharacters),
        };
    }
}
exports.IamAccountPasswordPolicy = IamAccountPasswordPolicy;
_a = JSII_RTTI_SYMBOL_1;
IamAccountPasswordPolicy[_a] = { fqn: "@cdktf/provider-aws.iam.IamAccountPasswordPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
IamAccountPasswordPolicy.tfResourceType = "aws_iam_account_password_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLWFjY291bnQtcGFzc3dvcmQtcG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lhbS9pYW0tYWNjb3VudC1wYXNzd29yZC1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQXlCL0IsTUFBYSx3QkFBeUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT25FLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUF5QyxFQUFFO1FBQzFGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsaUNBQWlDO1lBQ3hELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQy9ELElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdB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QixvQkFBb0I7Ozs7QUFDRyx1Q0FBYyxHQUFXLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3lDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd1VzZXJzVG9DaGFuZ2VQYXNzd29yZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGFyZEV4cGlyeT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFBhc3N3b3JkQWdlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5pbXVtUGFzc3dvcmRMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXNzd29yZFJldXNlUHJldmVudGlvbj86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVOdW1iZXJzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVTeW1ib2xzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgSWFtQWNjb3VudFBhc3N3b3JkUG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogSWFtQWNjb3VudFBhc3N3b3JkUG9saWN5Q29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19pYW1fYWNjb3VudF9wYXNzd29yZF9wb2xpY3knLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQgPSBjb25maWcuYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQ7XG4gICAgdGhpcy5faGFyZEV4cGlyeSA9IGNvbmZpZy5oYXJkRXhwaXJ5O1xuICAgIHRoaXMuX21heFBhc3N3b3JkQWdlID0gY29uZmlnLm1heFBhc3N3b3JkQWdlO1xuICAgIHRoaXMuX21pbmltdW1QYXNzd29yZExlbmd0aCA9IGNvbmZpZy5taW5pbXVtUGFzc3dvcmRMZW5ndGg7XG4gICAgdGhpcy5fcGFzc3dvcmRSZXVzZVByZXZlbnRpb24gPSBjb25maWcucGFzc3dvcmRSZXVzZVByZXZlbnRpb247XG4gICAgdGhpcy5fcmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnMgPSBjb25maWcucmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnM7XG4gICAgdGhpcy5fcmVxdWlyZU51bWJlcnMgPSBjb25maWcucmVxdWlyZU51bWJlcnM7XG4gICAgdGhpcy5fcmVxdWlyZVN5bWJvbHMgPSBjb25maWcucmVxdWlyZVN5bWJvbHM7XG4gICAgdGhpcy5fcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnMgPSBjb25maWcucmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFsbG93X3VzZXJzX3RvX2NoYW5nZV9wYXNzd29yZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd1VzZXJzVG9DaGFuZ2VQYXNzd29yZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfdXNlcnNfdG9fY2hhbmdlX3Bhc3N3b3JkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5fYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkO1xuICB9XG5cbiAgLy8gZXhwaXJlX3Bhc3N3b3JkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4cGlyZVBhc3N3b3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdleHBpcmVfcGFzc3dvcmRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaGFyZF9leHBpcnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oYXJkRXhwaXJ5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBoYXJkRXhwaXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2hhcmRfZXhwaXJ5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaGFyZEV4cGlyeSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faGFyZEV4cGlyeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhhcmRFeHBpcnkoKSB7XG4gICAgdGhpcy5faGFyZEV4cGlyeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGFyZEV4cGlyeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oYXJkRXhwaXJ5O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG1heF9wYXNzd29yZF9hZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhQYXNzd29yZEFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4UGFzc3dvcmRBZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcGFzc3dvcmRfYWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhQYXNzd29yZEFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4UGFzc3dvcmRBZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhQYXNzd29yZEFnZSgpIHtcbiAgICB0aGlzLl9tYXhQYXNzd29yZEFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4UGFzc3dvcmRBZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UGFzc3dvcmRBZ2U7XG4gIH1cblxuICAvLyBtaW5pbXVtX3Bhc3N3b3JkX2xlbmd0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5pbXVtUGFzc3dvcmRMZW5ndGg/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbmltdW1QYXNzd29yZExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbmltdW1fcGFzc3dvcmRfbGVuZ3RoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5pbXVtUGFzc3dvcmRMZW5ndGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbmltdW1QYXNzd29yZExlbmd0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbmltdW1QYXNzd29yZExlbmd0aCgpIHtcbiAgICB0aGlzLl9taW5pbXVtUGFzc3dvcmRMZW5ndGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pbmltdW1QYXNzd29yZExlbmd0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5pbXVtUGFzc3dvcmRMZW5ndGg7XG4gIH1cblxuICAvLyBwYXNzd29yZF9yZXVzZV9wcmV2ZW50aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFzc3dvcmRSZXVzZVByZXZlbnRpb24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkUmV1c2VQcmV2ZW50aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncGFzc3dvcmRfcmV1c2VfcHJldmVudGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFzc3dvcmRSZXVzZVByZXZlbnRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFzc3dvcmRSZXVzZVByZXZlbnRpb24oKSB7XG4gICAgdGhpcy5fcGFzc3dvcmRSZXVzZVByZXZlbnRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkUmV1c2VQcmV2ZW50aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uO1xuICB9XG5cbiAgLy8gcmVxdWlyZV9sb3dlcmNhc2VfY2hhcmFjdGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX2xvd2VyY2FzZV9jaGFyYWN0ZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnMoKSB7XG4gICAgdGhpcy5fcmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzO1xuICB9XG5cbiAgLy8gcmVxdWlyZV9udW1iZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZU51bWJlcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJlcXVpcmVOdW1iZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVpcmVfbnVtYmVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVOdW1iZXJzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXF1aXJlTnVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVOdW1iZXJzKCkge1xuICAgIHRoaXMuX3JlcXVpcmVOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlTnVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTnVtYmVycztcbiAgfVxuXG4gIC8vIHJlcXVpcmVfc3ltYm9scyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVpcmVTeW1ib2xzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1aXJlU3ltYm9scygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX3N5bWJvbHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlU3ltYm9scyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZVN5bWJvbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlU3ltYm9scygpIHtcbiAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZVN5bWJvbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZVN5bWJvbHM7XG4gIH1cblxuICAvLyByZXF1aXJlX3VwcGVyY2FzZV9jaGFyYWN0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVpcmVfdXBwZXJjYXNlX2NoYXJhY3RlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycygpIHtcbiAgICB0aGlzLl9yZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnM7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG93X3VzZXJzX3RvX2NoYW5nZV9wYXNzd29yZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkKSxcbiAgICAgIGhhcmRfZXhwaXJ5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5faGFyZEV4cGlyeSksXG4gICAgICBtYXhfcGFzc3dvcmRfYWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhQYXNzd29yZEFnZSksXG4gICAgICBtaW5pbXVtX3Bhc3N3b3JkX2xlbmd0aDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluaW11bVBhc3N3b3JkTGVuZ3RoKSxcbiAgICAgIHBhc3N3b3JkX3JldXNlX3ByZXZlbnRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uKSxcbiAgICAgIHJlcXVpcmVfbG93ZXJjYXNlX2NoYXJhY3RlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycyksXG4gICAgICByZXF1aXJlX251bWJlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlTnVtYmVycyksXG4gICAgICByZXF1aXJlX3N5bWJvbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlU3ltYm9scyksXG4gICAgICByZXF1aXJlX3VwcGVyY2FzZV9jaGFyYWN0ZXJzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==