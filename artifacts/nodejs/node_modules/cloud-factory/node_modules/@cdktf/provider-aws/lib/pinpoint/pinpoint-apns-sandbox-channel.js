"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinpointApnsSandboxChannel = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html aws_pinpoint_apns_sandbox_channel}.
 *
 * @stability stable
 */
class PinpointApnsSandboxChannel extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html aws_pinpoint_apns_sandbox_channel} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_pinpoint_apns_sandbox_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._applicationId = config.applicationId;
        this._bundleId = config.bundleId;
        this._certificate = config.certificate;
        this._defaultAuthenticationMethod = config.defaultAuthenticationMethod;
        this._enabled = config.enabled;
        this._privateKey = config.privateKey;
        this._teamId = config.teamId;
        this._tokenKey = config.tokenKey;
        this._tokenKeyId = config.tokenKeyId;
    }
    /**
     * @stability stable
     */
    get applicationId() {
        return this.getStringAttribute('application_id');
    }
    /**
     * @stability stable
     */
    set applicationId(value) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationIdInput() {
        return this._applicationId;
    }
    /**
     * @stability stable
     */
    get bundleId() {
        return this.getStringAttribute('bundle_id');
    }
    /**
     * @stability stable
     */
    set bundleId(value) {
        this._bundleId = value;
    }
    /**
     * @stability stable
     */
    resetBundleId() {
        this._bundleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bundleIdInput() {
        return this._bundleId;
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
    /**
     * @stability stable
     */
    resetCertificate() {
        this._certificate = undefined;
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
    get defaultAuthenticationMethod() {
        return this.getStringAttribute('default_authentication_method');
    }
    /**
     * @stability stable
     */
    set defaultAuthenticationMethod(value) {
        this._defaultAuthenticationMethod = value;
    }
    /**
     * @stability stable
     */
    resetDefaultAuthenticationMethod() {
        this._defaultAuthenticationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultAuthenticationMethodInput() {
        return this._defaultAuthenticationMethod;
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
    /**
     * @stability stable
     */
    get teamId() {
        return this.getStringAttribute('team_id');
    }
    /**
     * @stability stable
     */
    set teamId(value) {
        this._teamId = value;
    }
    /**
     * @stability stable
     */
    resetTeamId() {
        this._teamId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get teamIdInput() {
        return this._teamId;
    }
    /**
     * @stability stable
     */
    get tokenKey() {
        return this.getStringAttribute('token_key');
    }
    /**
     * @stability stable
     */
    set tokenKey(value) {
        this._tokenKey = value;
    }
    /**
     * @stability stable
     */
    resetTokenKey() {
        this._tokenKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tokenKeyInput() {
        return this._tokenKey;
    }
    /**
     * @stability stable
     */
    get tokenKeyId() {
        return this.getStringAttribute('token_key_id');
    }
    /**
     * @stability stable
     */
    set tokenKeyId(value) {
        this._tokenKeyId = value;
    }
    /**
     * @stability stable
     */
    resetTokenKeyId() {
        this._tokenKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tokenKeyIdInput() {
        return this._tokenKeyId;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            bundle_id: cdktf.stringToTerraform(this._bundleId),
            certificate: cdktf.stringToTerraform(this._certificate),
            default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
            enabled: cdktf.booleanToTerraform(this._enabled),
            private_key: cdktf.stringToTerraform(this._privateKey),
            team_id: cdktf.stringToTerraform(this._teamId),
            token_key: cdktf.stringToTerraform(this._tokenKey),
            token_key_id: cdktf.stringToTerraform(this._tokenKeyId),
        };
    }
}
exports.PinpointApnsSandboxChannel = PinpointApnsSandboxChannel;
_a = JSII_RTTI_SYMBOL_1;
PinpointApnsSandboxChannel[_a] = { fqn: "@cdktf/provider-aws.pinpoint.PinpointApnsSandboxChannel", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
PinpointApnsSandboxChannel.tfResourceType = "aws_pinpoint_apns_sandbox_channel";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlucG9pbnQtYXBucy1zYW5kYm94LWNoYW5uZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlucG9pbnQvcGlucG9pbnQtYXBucy1zYW5kYm94LWNoYW5uZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQXlCL0IsTUFBYSwwQkFBMkIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3JFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF3QztRQUN2RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG1DQUFtQztZQUMxRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0s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SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzVELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdkQsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztZQUN6RixPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QyxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3hELENBQUM7SUFDSixDQUFDOztBQXhNSCxnRUF5TUM7OztBQXZNQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHlDQUFjLEdBQVcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgUGlucG9pbnRBcG5zU2FuZGJveENoYW5uZWxDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVuZGxlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRBdXRoZW50aWNhdGlvbk1ldGhvZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZWFtSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRva2VuS2V5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b2tlbktleUlkPzogc3RyaW5nO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBQaW5wb2ludEFwbnNTYW5kYm94Q2hhbm5lbCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19waW5wb2ludF9hcG5zX3NhbmRib3hfY2hhbm5lbFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFBpbnBvaW50QXBuc1NhbmRib3hDaGFubmVsQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfcGlucG9pbnRfYXBuc19zYW5kYm94X2NoYW5uZWwnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXBwbGljYXRpb25JZCA9IGNvbmZpZy5hcHBsaWNhdGlvbklkO1xuICAgIHRoaXMuX2J1bmRsZUlkID0gY29uZmlnLmJ1bmRsZUlkO1xuICAgIHRoaXMuX2NlcnRpZmljYXRlID0gY29uZmlnLmNlcnRpZmljYXRlO1xuICAgIHRoaXMuX2RlZmF1bHRBdXRoZW50aWNhdGlvbk1ldGhvZCA9IGNvbmZpZy5kZWZhdWx0QXV0aGVudGljYXRpb25NZXRob2Q7XG4gICAgdGhpcy5fZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuICAgIHRoaXMuX3ByaXZhdGVLZXkgPSBjb25maWcucHJpdmF0ZUtleTtcbiAgICB0aGlzLl90ZWFtSWQgPSBjb25maWcudGVhbUlkO1xuICAgIHRoaXMuX3Rva2VuS2V5ID0gY29uZmlnLnRva2VuS2V5O1xuICAgIHRoaXMuX3Rva2VuS2V5SWQgPSBjb25maWcudG9rZW5LZXlJZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXBwbGljYXRpb25faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25JZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBsaWNhdGlvbklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbklkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25JZDtcbiAgfVxuXG4gIC8vIGJ1bmRsZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idW5kbGVJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVuZGxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidW5kbGVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1bmRsZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idW5kbGVJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1bmRsZUlkKCkge1xuICAgIHRoaXMuX2J1bmRsZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidW5kbGVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idW5kbGVJZDtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDZXJ0aWZpY2F0ZSgpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGU7XG4gIH1cblxuICAvLyBkZWZhdWx0X2F1dGhlbnRpY2F0aW9uX21ldGhvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0QXV0aGVudGljYXRpb25NZXRob2Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRBdXRoZW50aWNhdGlvbk1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfYXV0aGVudGljYXRpb25fbWV0aG9kJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0QXV0aGVudGljYXRpb25NZXRob2QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRBdXRoZW50aWNhdGlvbk1ldGhvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRBdXRoZW50aWNhdGlvbk1ldGhvZCgpIHtcbiAgICB0aGlzLl9kZWZhdWx0QXV0aGVudGljYXRpb25NZXRob2QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRBdXRoZW50aWNhdGlvbk1ldGhvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0QXV0aGVudGljYXRpb25NZXRob2Q7XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBwcml2YXRlX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcml2YXRlS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcml2YXRlS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpdmF0ZV9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaXZhdGVLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByaXZhdGVLZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcml2YXRlS2V5KCkge1xuICAgIHRoaXMuX3ByaXZhdGVLZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaXZhdGVLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpdmF0ZUtleTtcbiAgfVxuXG4gIC8vIHRlYW1faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVhbUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0ZWFtSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0ZWFtX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZWFtSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RlYW1JZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlYW1JZCgpIHtcbiAgICB0aGlzLl90ZWFtSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlYW1JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZWFtSWQ7XG4gIH1cblxuICAvLyB0b2tlbl9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdG9rZW5LZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRva2VuS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndG9rZW5fa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0b2tlbktleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdG9rZW5LZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUb2tlbktleSgpIHtcbiAgICB0aGlzLl90b2tlbktleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9rZW5LZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW5LZXk7XG4gIH1cblxuICAvLyB0b2tlbl9rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdG9rZW5LZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdG9rZW5LZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rva2VuX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdG9rZW5LZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdG9rZW5LZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRva2VuS2V5SWQoKSB7XG4gICAgdGhpcy5fdG9rZW5LZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9rZW5LZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90b2tlbktleUlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBsaWNhdGlvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBwbGljYXRpb25JZCksXG4gICAgICBidW5kbGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2J1bmRsZUlkKSxcbiAgICAgIGNlcnRpZmljYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZSksXG4gICAgICBkZWZhdWx0X2F1dGhlbnRpY2F0aW9uX21ldGhvZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdEF1dGhlbnRpY2F0aW9uTWV0aG9kKSxcbiAgICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVkKSxcbiAgICAgIHByaXZhdGVfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcml2YXRlS2V5KSxcbiAgICAgIHRlYW1faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RlYW1JZCksXG4gICAgICB0b2tlbl9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Rva2VuS2V5KSxcbiAgICAgIHRva2VuX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdG9rZW5LZXlJZCksXG4gICAgfTtcbiAgfVxufVxuIl19