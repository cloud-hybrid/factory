"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsworksUserProfile = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html aws_opsworks_user_profile}.
 *
 * @stability stable
 */
class OpsworksUserProfile extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html aws_opsworks_user_profile} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_opsworks_user_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowSelfManagement = config.allowSelfManagement;
        this._sshPublicKey = config.sshPublicKey;
        this._sshUsername = config.sshUsername;
        this._userArn = config.userArn;
    }
    /**
     * @stability stable
     */
    get allowSelfManagement() {
        return this.getBooleanAttribute('allow_self_management');
    }
    /**
     * @stability stable
     */
    set allowSelfManagement(value) {
        this._allowSelfManagement = value;
    }
    /**
     * @stability stable
     */
    resetAllowSelfManagement() {
        this._allowSelfManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowSelfManagementInput() {
        return this._allowSelfManagement;
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
    get sshPublicKey() {
        return this.getStringAttribute('ssh_public_key');
    }
    /**
     * @stability stable
     */
    set sshPublicKey(value) {
        this._sshPublicKey = value;
    }
    /**
     * @stability stable
     */
    resetSshPublicKey() {
        this._sshPublicKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sshPublicKeyInput() {
        return this._sshPublicKey;
    }
    /**
     * @stability stable
     */
    get sshUsername() {
        return this.getStringAttribute('ssh_username');
    }
    /**
     * @stability stable
     */
    set sshUsername(value) {
        this._sshUsername = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sshUsernameInput() {
        return this._sshUsername;
    }
    /**
     * @stability stable
     */
    get userArn() {
        return this.getStringAttribute('user_arn');
    }
    /**
     * @stability stable
     */
    set userArn(value) {
        this._userArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userArnInput() {
        return this._userArn;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            allow_self_management: cdktf.booleanToTerraform(this._allowSelfManagement),
            ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
            ssh_username: cdktf.stringToTerraform(this._sshUsername),
            user_arn: cdktf.stringToTerraform(this._userArn),
        };
    }
}
exports.OpsworksUserProfile = OpsworksUserProfile;
_a = JSII_RTTI_SYMBOL_1;
OpsworksUserProfile[_a] = { fqn: "@cdktf/provider-aws.opsworks.OpsworksUserProfile", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
OpsworksUserProfile.tfResourceType = "aws_opsworks_user_profile";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Bzd29ya3MtdXNlci1wcm9maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29wc3dvcmtzL29wc3dvcmtzLXVzZXItcHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBZS9CLE1BQWEsbUJBQW9CLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU85RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBaUM7UUFDaEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwyQkFBMkI7WUFDbEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7OztJQVFELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFRLENBQUM7SUFDbEUsQ0FBQzs7OztJQUNELElBQVcsbUJBQW1CLENBQUMsS0FBa0M7UUFDL0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUMxRSxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0QsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNqRCxDQUFDO0lBQ0osQ0FBQzs7QUEzR0gsa0RBNEdDOzs7QUExR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxrQ0FBYyxHQUFXLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIE9wc3dvcmtzVXNlclByb2ZpbGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dTZWxmTWFuYWdlbWVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNzaFB1YmxpY0tleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NoVXNlcm5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJBcm46IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBPcHN3b3Jrc1VzZXJQcm9maWxlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX29wc3dvcmtzX3VzZXJfcHJvZmlsZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBPcHN3b3Jrc1VzZXJQcm9maWxlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfb3Bzd29ya3NfdXNlcl9wcm9maWxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FsbG93U2VsZk1hbmFnZW1lbnQgPSBjb25maWcuYWxsb3dTZWxmTWFuYWdlbWVudDtcbiAgICB0aGlzLl9zc2hQdWJsaWNLZXkgPSBjb25maWcuc3NoUHVibGljS2V5O1xuICAgIHRoaXMuX3NzaFVzZXJuYW1lID0gY29uZmlnLnNzaFVzZXJuYW1lO1xuICAgIHRoaXMuX3VzZXJBcm4gPSBjb25maWcudXNlckFybjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxsb3dfc2VsZl9tYW5hZ2VtZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93U2VsZk1hbmFnZW1lbnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93U2VsZk1hbmFnZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfc2VsZl9tYW5hZ2VtZW50JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dTZWxmTWFuYWdlbWVudCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dTZWxmTWFuYWdlbWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93U2VsZk1hbmFnZW1lbnQoKSB7XG4gICAgdGhpcy5fYWxsb3dTZWxmTWFuYWdlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dTZWxmTWFuYWdlbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd1NlbGZNYW5hZ2VtZW50O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHNzaF9wdWJsaWNfa2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzaFB1YmxpY0tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3NoUHVibGljS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3NoX3B1YmxpY19rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNzaFB1YmxpY0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NoUHVibGljS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NoUHVibGljS2V5KCkge1xuICAgIHRoaXMuX3NzaFB1YmxpY0tleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NoUHVibGljS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzaFB1YmxpY0tleTtcbiAgfVxuXG4gIC8vIHNzaF91c2VybmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zc2hVc2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3NoVXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2hfdXNlcm5hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNzaFVzZXJuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zc2hVc2VybmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzc2hVc2VybmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2hVc2VybmFtZTtcbiAgfVxuXG4gIC8vIHVzZXJfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VzZXJBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlckFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlckFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJBcm47XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG93X3NlbGZfbWFuYWdlbWVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FsbG93U2VsZk1hbmFnZW1lbnQpLFxuICAgICAgc3NoX3B1YmxpY19rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NzaFB1YmxpY0tleSksXG4gICAgICBzc2hfdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NzaFVzZXJuYW1lKSxcbiAgICAgIHVzZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl91c2VyQXJuKSxcbiAgICB9O1xuICB9XG59XG4iXX0=