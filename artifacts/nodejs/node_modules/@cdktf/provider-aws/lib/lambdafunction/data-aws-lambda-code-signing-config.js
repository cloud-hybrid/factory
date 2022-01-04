"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsLambdaCodeSigningConfig = exports.DataAwsLambdaCodeSigningConfigPolicies = exports.DataAwsLambdaCodeSigningConfigAllowedPublishers = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsLambdaCodeSigningConfigAllowedPublishers extends cdktf.ComplexComputedList {
    // signing_profile_version_arns - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get signingProfileVersionArns() {
        return this.getListAttribute('signing_profile_version_arns');
    }
}
exports.DataAwsLambdaCodeSigningConfigAllowedPublishers = DataAwsLambdaCodeSigningConfigAllowedPublishers;
_a = JSII_RTTI_SYMBOL_1;
DataAwsLambdaCodeSigningConfigAllowedPublishers[_a] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaCodeSigningConfigAllowedPublishers", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLambdaCodeSigningConfigPolicies extends cdktf.ComplexComputedList {
    // untrusted_artifact_on_deployment - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get untrustedArtifactOnDeployment() {
        return this.getStringAttribute('untrusted_artifact_on_deployment');
    }
}
exports.DataAwsLambdaCodeSigningConfigPolicies = DataAwsLambdaCodeSigningConfigPolicies;
_b = JSII_RTTI_SYMBOL_1;
DataAwsLambdaCodeSigningConfigPolicies[_b] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaCodeSigningConfigPolicies", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html aws_lambda_code_signing_config}.
 *
 * @stability stable
 */
class DataAwsLambdaCodeSigningConfig extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html aws_lambda_code_signing_config} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lambda_code_signing_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._arn = config.arn;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allowed_publishers - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    allowedPublishers(index) {
        return new DataAwsLambdaCodeSigningConfigAllowedPublishers(this, 'allowed_publishers', index);
    }
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get arnInput() {
        return this._arn;
    }
    // config_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get configId() {
        return this.getStringAttribute('config_id');
    }
    // description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // last_modified - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    // policies - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    policies(index) {
        return new DataAwsLambdaCodeSigningConfigPolicies(this, 'policies', index);
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            arn: cdktf.stringToTerraform(this._arn),
        };
    }
}
exports.DataAwsLambdaCodeSigningConfig = DataAwsLambdaCodeSigningConfig;
_c = JSII_RTTI_SYMBOL_1;
DataAwsLambdaCodeSigningConfig[_c] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaCodeSigningConfig", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsLambdaCodeSigningConfig.tfResourceType = "aws_lambda_code_signing_config";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbGFtYmRhLWNvZGUtc2lnbmluZy1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGFtYmRhZnVuY3Rpb24vZGF0YS1hd3MtbGFtYmRhLWNvZGUtc2lnbmluZy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUFPL0IsTUFBYSwrQ0FBZ0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTVGLGtGQUFrRjs7OztJQUNsRixJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O0FBTEgsMEdBTUM7Ozs7OztBQUNELE1BQWEsc0NBQXVDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVuRixzRkFBc0Y7Ozs7SUFDdEYsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNyRSxDQUFDOztBQUxILHdGQU1DOzs7Ozs7OztBQUdELE1BQWEsOEJBQStCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQU8zRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBNEM7UUFDM0YsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxnQ0FBZ0M7WUFDdkQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsd0VBQXdFOzs7O0lBQ2pFLGlCQUFpQixDQUFDLEtBQWE7UUFDcEMsT0FBTyxJQUFJLCtDQUErQyxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7O0lBSUQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNELElBQVcsR0FBRyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCwrREFBK0Q7Ozs7SUFDL0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpRUFBaUU7Ozs7SUFDakUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELG1FQUFtRTs7OztJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDhEQUE4RDs7OztJQUN2RCxRQUFRLENBQUMsS0FBYTtRQUMzQixPQUFPLElBQUksc0NBQXNDLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDeEMsQ0FBQztJQUNKLENBQUM7O0FBakZILHdFQWtGQzs7O0FBaEZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNkNBQWMsR0FBVyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0xhbWJkYUNvZGVTaWduaW5nQ29uZmlnQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcm46IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGFtYmRhQ29kZVNpZ25pbmdDb25maWdBbGxvd2VkUHVibGlzaGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNpZ25pbmdfcHJvZmlsZV92ZXJzaW9uX2FybnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaWduaW5nUHJvZmlsZVZlcnNpb25Bcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NpZ25pbmdfcHJvZmlsZV92ZXJzaW9uX2FybnMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYW1iZGFDb2RlU2lnbmluZ0NvbmZpZ1BvbGljaWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdW50cnVzdGVkX2FydGlmYWN0X29uX2RlcGxveW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1bnRydXN0ZWRBcnRpZmFjdE9uRGVwbG95bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VudHJ1c3RlZF9hcnRpZmFjdF9vbl9kZXBsb3ltZW50Jyk7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhbWJkYUNvZGVTaWduaW5nQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfbGFtYmRhX2NvZGVfc2lnbmluZ19jb25maWdcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c0xhbWJkYUNvZGVTaWduaW5nQ29uZmlnQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbGFtYmRhX2NvZGVfc2lnbmluZ19jb25maWcnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXJuID0gY29uZmlnLmFybjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxsb3dlZF9wdWJsaXNoZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBhbGxvd2VkUHVibGlzaGVycyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGFtYmRhQ29kZVNpZ25pbmdDb25maWdBbGxvd2VkUHVibGlzaGVycyh0aGlzLCAnYWxsb3dlZF9wdWJsaXNoZXJzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJuO1xuICB9XG5cbiAgLy8gY29uZmlnX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uZmlnSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWdfaWQnKTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfbW9kaWZpZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0TW9kaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X21vZGlmaWVkJyk7XG4gIH1cblxuICAvLyBwb2xpY2llcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgcG9saWNpZXMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0xhbWJkYUNvZGVTaWduaW5nQ29uZmlnUG9saWNpZXModGhpcywgJ3BvbGljaWVzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FybiksXG4gICAgfTtcbiAgfVxufVxuIl19