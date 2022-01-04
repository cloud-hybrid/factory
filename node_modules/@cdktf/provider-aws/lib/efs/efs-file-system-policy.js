"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EfsFileSystemPolicy = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html aws_efs_file_system_policy}.
 *
 * @stability stable
 */
class EfsFileSystemPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html aws_efs_file_system_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_efs_file_system_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
        this._fileSystemId = config.fileSystemId;
        this._policy = config.policy;
    }
    /**
     * @stability stable
     */
    get bypassPolicyLockoutSafetyCheck() {
        return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
    }
    /**
     * @stability stable
     */
    set bypassPolicyLockoutSafetyCheck(value) {
        this._bypassPolicyLockoutSafetyCheck = value;
    }
    /**
     * @stability stable
     */
    resetBypassPolicyLockoutSafetyCheck() {
        this._bypassPolicyLockoutSafetyCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bypassPolicyLockoutSafetyCheckInput() {
        return this._bypassPolicyLockoutSafetyCheck;
    }
    /**
     * @stability stable
     */
    get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    /**
     * @stability stable
     */
    set fileSystemId(value) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileSystemIdInput() {
        return this._fileSystemId;
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
    get policy() {
        return this.getStringAttribute('policy');
    }
    /**
     * @stability stable
     */
    set policy(value) {
        this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get policyInput() {
        return this._policy;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            policy: cdktf.stringToTerraform(this._policy),
        };
    }
}
exports.EfsFileSystemPolicy = EfsFileSystemPolicy;
_a = JSII_RTTI_SYMBOL_1;
EfsFileSystemPolicy[_a] = { fqn: "@cdktf/provider-aws.efs.EfsFileSystemPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
EfsFileSystemPolicy.tfResourceType = "aws_efs_file_system_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZzLWZpbGUtc3lzdGVtLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZnMvZWZzLWZpbGUtc3lzdGVtLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBYS9CLE1BQWEsbUJBQW9CLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU85RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBaUM7UUFDaEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw0QkFBNEI7WUFDbkQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQywrQkFBK0IsR0FBRyxNQUFNLENBQUMsOEJBQThCLENBQUM7UUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7O0lBUUQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0NBQW9DLENBQVEsQ0FBQztJQUMvRSxDQUFDOzs7O0lBQ0QsSUFBVyw4QkFBOEIsQ0FBQyxLQUFrQztRQUMxRSxJQUFJLENBQUMsK0JBQStCLEdBQUcsS0FBSyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDTSxtQ0FBbUM7UUFDeEMsSUFBSSxDQUFDLCtCQUErQixHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUNBQW1DO1FBQzVDLE9BQU8sSUFBSSxDQUFDLCtCQUErQixDQUFDO0lBQzlDLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztZQUNsRyxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0QsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlDLENBQUM7SUFDSixDQUFDOztBQXpGSCxrREEwRkM7OztBQXhGQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGtDQUFjLEdBQVcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEVmc0ZpbGVTeXN0ZW1Qb2xpY3lDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnlwYXNzUG9saWN5TG9ja291dFNhZmV0eUNoZWNrPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGVTeXN0ZW1JZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9saWN5OiBzdHJpbmc7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBFZnNGaWxlU3lzdGVtUG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Vmc19maWxlX3N5c3RlbV9wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBFZnNGaWxlU3lzdGVtUG9saWN5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWZzX2ZpbGVfc3lzdGVtX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9ieXBhc3NQb2xpY3lMb2Nrb3V0U2FmZXR5Q2hlY2sgPSBjb25maWcuYnlwYXNzUG9saWN5TG9ja291dFNhZmV0eUNoZWNrO1xuICAgIHRoaXMuX2ZpbGVTeXN0ZW1JZCA9IGNvbmZpZy5maWxlU3lzdGVtSWQ7XG4gICAgdGhpcy5fcG9saWN5ID0gY29uZmlnLnBvbGljeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYnlwYXNzX3BvbGljeV9sb2Nrb3V0X3NhZmV0eV9jaGVjayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ieXBhc3NQb2xpY3lMb2Nrb3V0U2FmZXR5Q2hlY2s/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGJ5cGFzc1BvbGljeUxvY2tvdXRTYWZldHlDaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdieXBhc3NfcG9saWN5X2xvY2tvdXRfc2FmZXR5X2NoZWNrJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYnlwYXNzUG9saWN5TG9ja291dFNhZmV0eUNoZWNrKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9ieXBhc3NQb2xpY3lMb2Nrb3V0U2FmZXR5Q2hlY2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCeXBhc3NQb2xpY3lMb2Nrb3V0U2FmZXR5Q2hlY2soKSB7XG4gICAgdGhpcy5fYnlwYXNzUG9saWN5TG9ja291dFNhZmV0eUNoZWNrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBieXBhc3NQb2xpY3lMb2Nrb3V0U2FmZXR5Q2hlY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnlwYXNzUG9saWN5TG9ja291dFNhZmV0eUNoZWNrO1xuICB9XG5cbiAgLy8gZmlsZV9zeXN0ZW1faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlsZVN5c3RlbUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaWxlU3lzdGVtSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWxlX3N5c3RlbV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsZVN5c3RlbUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maWxlU3lzdGVtSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZVN5c3RlbUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVTeXN0ZW1JZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBwb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb2xpY3k7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ5cGFzc19wb2xpY3lfbG9ja291dF9zYWZldHlfY2hlY2s6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9ieXBhc3NQb2xpY3lMb2Nrb3V0U2FmZXR5Q2hlY2spLFxuICAgICAgZmlsZV9zeXN0ZW1faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZpbGVTeXN0ZW1JZCksXG4gICAgICBwb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BvbGljeSksXG4gICAgfTtcbiAgfVxufVxuIl19