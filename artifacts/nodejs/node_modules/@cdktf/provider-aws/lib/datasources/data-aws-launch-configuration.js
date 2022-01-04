"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsLaunchConfiguration = exports.DataAwsLaunchConfigurationRootBlockDevice = exports.DataAwsLaunchConfigurationMetadataOptions = exports.DataAwsLaunchConfigurationEphemeralBlockDevice = exports.DataAwsLaunchConfigurationEbsBlockDevice = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsLaunchConfigurationEbsBlockDevice extends cdktf.ComplexComputedList {
    // delete_on_termination - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    // device_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    // encrypted - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    // iops - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // no_device - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get noDevice() {
        return this.getBooleanAttribute('no_device');
    }
    // snapshot_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get snapshotId() {
        return this.getStringAttribute('snapshot_id');
    }
    // throughput - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get throughput() {
        return this.getBooleanAttribute('throughput');
    }
    // volume_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    // volume_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
}
exports.DataAwsLaunchConfigurationEbsBlockDevice = DataAwsLaunchConfigurationEbsBlockDevice;
_a = JSII_RTTI_SYMBOL_1;
DataAwsLaunchConfigurationEbsBlockDevice[_a] = { fqn: "@cdktf/provider-aws.datasources.DataAwsLaunchConfigurationEbsBlockDevice", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchConfigurationEphemeralBlockDevice extends cdktf.ComplexComputedList {
    // device_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    // virtual_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get virtualName() {
        return this.getStringAttribute('virtual_name');
    }
}
exports.DataAwsLaunchConfigurationEphemeralBlockDevice = DataAwsLaunchConfigurationEphemeralBlockDevice;
_b = JSII_RTTI_SYMBOL_1;
DataAwsLaunchConfigurationEphemeralBlockDevice[_b] = { fqn: "@cdktf/provider-aws.datasources.DataAwsLaunchConfigurationEphemeralBlockDevice", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchConfigurationMetadataOptions extends cdktf.ComplexComputedList {
    // http_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get httpEndpoint() {
        return this.getStringAttribute('http_endpoint');
    }
    // http_put_response_hop_limit - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get httpPutResponseHopLimit() {
        return this.getNumberAttribute('http_put_response_hop_limit');
    }
    // http_tokens - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get httpTokens() {
        return this.getStringAttribute('http_tokens');
    }
}
exports.DataAwsLaunchConfigurationMetadataOptions = DataAwsLaunchConfigurationMetadataOptions;
_c = JSII_RTTI_SYMBOL_1;
DataAwsLaunchConfigurationMetadataOptions[_c] = { fqn: "@cdktf/provider-aws.datasources.DataAwsLaunchConfigurationMetadataOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchConfigurationRootBlockDevice extends cdktf.ComplexComputedList {
    // delete_on_termination - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    // encrypted - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    // iops - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // throughput - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get throughput() {
        return this.getBooleanAttribute('throughput');
    }
    // volume_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    // volume_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
}
exports.DataAwsLaunchConfigurationRootBlockDevice = DataAwsLaunchConfigurationRootBlockDevice;
_d = JSII_RTTI_SYMBOL_1;
DataAwsLaunchConfigurationRootBlockDevice[_d] = { fqn: "@cdktf/provider-aws.datasources.DataAwsLaunchConfigurationRootBlockDevice", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration}.
 *
 * @stability stable
 */
class DataAwsLaunchConfiguration extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_launch_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
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
    // associate_public_ip_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get associatePublicIpAddress() {
        return this.getBooleanAttribute('associate_public_ip_address');
    }
    // ebs_block_device - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    ebsBlockDevice(index) {
        return new DataAwsLaunchConfigurationEbsBlockDevice(this, 'ebs_block_device', index);
    }
    // ebs_optimized - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    // enable_monitoring - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enableMonitoring() {
        return this.getBooleanAttribute('enable_monitoring');
    }
    // ephemeral_block_device - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    ephemeralBlockDevice(index) {
        return new DataAwsLaunchConfigurationEphemeralBlockDevice(this, 'ephemeral_block_device', index);
    }
    // iam_instance_profile - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get iamInstanceProfile() {
        return this.getStringAttribute('iam_instance_profile');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // image_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    // instance_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // key_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keyName() {
        return this.getStringAttribute('key_name');
    }
    // metadata_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    metadataOptions(index) {
        return new DataAwsLaunchConfigurationMetadataOptions(this, 'metadata_options', index);
    }
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    /**
     * @stability stable
     */
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
    }
    // placement_tenancy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get placementTenancy() {
        return this.getStringAttribute('placement_tenancy');
    }
    // root_block_device - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    rootBlockDevice(index) {
        return new DataAwsLaunchConfigurationRootBlockDevice(this, 'root_block_device', index);
    }
    // security_groups - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // spot_price - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    // user_data - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userData() {
        return this.getStringAttribute('user_data');
    }
    // vpc_classic_link_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcClassicLinkId() {
        return this.getStringAttribute('vpc_classic_link_id');
    }
    // vpc_classic_link_security_groups - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcClassicLinkSecurityGroups() {
        return this.getListAttribute('vpc_classic_link_security_groups');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
exports.DataAwsLaunchConfiguration = DataAwsLaunchConfiguration;
_e = JSII_RTTI_SYMBOL_1;
DataAwsLaunchConfiguration[_e] = { fqn: "@cdktf/provider-aws.datasources.DataAwsLaunchConfiguration", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsLaunchConfiguration.tfResourceType = "aws_launch_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbGF1bmNoLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YXNvdXJjZXMvZGF0YS1hd3MtbGF1bmNoLWNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUFPL0IsTUFBYSx3Q0FBeUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXJGLDJFQUEyRTs7OztJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBUSxDQUFDO0lBQ2xFLENBQUM7SUFFRCxpRUFBaUU7Ozs7SUFDakUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwrREFBK0Q7Ozs7SUFDL0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBUSxDQUFDO0lBQ3RELENBQUM7SUFFRCwwREFBMEQ7Ozs7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELCtEQUErRDs7OztJQUMvRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFRLENBQUM7SUFDdEQsQ0FBQztJQUVELGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUVELGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJ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QWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHlFQUF5RTs7OztJQUN6RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxzRkFBc0Y7Ozs7SUFDdEYsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUMsQ0FBQztJQUNKLENBQUM7O0FBbEpILGdFQW1KQzs7O0FBakpDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0cseUNBQWMsR0FBVywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0xhdW5jaENvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhdW5jaENvbmZpZ3VyYXRpb25FYnNCbG9ja0RldmljZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlbGV0ZU9uVGVybWluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRlX29uX3Rlcm1pbmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGV2aWNlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX25hbWUnKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmNyeXB0ZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpb3BzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lvcHMnKTtcbiAgfVxuXG4gIC8vIG5vX2RldmljZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5vRGV2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ25vX2RldmljZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNuYXBzaG90X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc25hcHNob3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NuYXBzaG90X2lkJyk7XG4gIH1cblxuICAvLyB0aHJvdWdocHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGhyb3VnaHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0aHJvdWdocHV0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gdm9sdW1lX3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2b2x1bWVTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndm9sdW1lX3NpemUnKTtcbiAgfVxuXG4gIC8vIHZvbHVtZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdm9sdW1lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZvbHVtZV90eXBlJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGF1bmNoQ29uZmlndXJhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGV2aWNlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHZpcnR1YWxfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZpcnR1YWxOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlydHVhbF9uYW1lJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGF1bmNoQ29uZmlndXJhdGlvbk1ldGFkYXRhT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGh0dHBfZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodHRwX2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwUHV0UmVzcG9uc2VIb3BMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2h0dHBfcHV0X3Jlc3BvbnNlX2hvcF9saW1pdCcpO1xuICB9XG5cbiAgLy8gaHR0cF90b2tlbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwVG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF90b2tlbnMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYXVuY2hDb25maWd1cmF0aW9uUm9vdEJsb2NrRGV2aWNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVsZXRlX29uX3Rlcm1pbmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsZXRlT25UZXJtaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkZWxldGVfb25fdGVybWluYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBlbmNyeXB0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNyeXB0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5jcnlwdGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW9wcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlvcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpb3BzJyk7XG4gIH1cblxuICAvLyB0aHJvdWdocHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGhyb3VnaHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0aHJvdWdocHV0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gdm9sdW1lX3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2b2x1bWVTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndm9sdW1lX3NpemUnKTtcbiAgfVxuXG4gIC8vIHZvbHVtZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdm9sdW1lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZvbHVtZV90eXBlJyk7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhdW5jaENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19sYXVuY2hfY29uZmlndXJhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NMYXVuY2hDb25maWd1cmF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbGF1bmNoX2NvbmZpZ3VyYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhc3NvY2lhdGVfcHVibGljX2lwX2FkZHJlc3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBlYnNfYmxvY2tfZGV2aWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBlYnNCbG9ja0RldmljZShpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGF1bmNoQ29uZmlndXJhdGlvbkVic0Jsb2NrRGV2aWNlKHRoaXMsICdlYnNfYmxvY2tfZGV2aWNlJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gZWJzX29wdGltaXplZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlYnNfb3B0aW1pemVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZW5hYmxlX21vbml0b3JpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVNb25pdG9yaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9tb25pdG9yaW5nJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXBoZW1lcmFsX2Jsb2NrX2RldmljZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZXBoZW1lcmFsQmxvY2tEZXZpY2UoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0xhdW5jaENvbmZpZ3VyYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZSh0aGlzLCAnZXBoZW1lcmFsX2Jsb2NrX2RldmljZScsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGlhbV9pbnN0YW5jZV9wcm9maWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWFtSW5zdGFuY2VQcm9maWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWFtX2luc3RhbmNlX3Byb2ZpbGUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbWFnZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV9pZCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGtleV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV9uYW1lJyk7XG4gIH1cblxuICAvLyBtZXRhZGF0YV9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBtZXRhZGF0YU9wdGlvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0xhdW5jaENvbmZpZ3VyYXRpb25NZXRhZGF0YU9wdGlvbnModGhpcywgJ21ldGFkYXRhX29wdGlvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHBsYWNlbWVudF90ZW5hbmN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50VGVuYW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYWNlbWVudF90ZW5hbmN5Jyk7XG4gIH1cblxuICAvLyByb290X2Jsb2NrX2RldmljZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgcm9vdEJsb2NrRGV2aWNlKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NMYXVuY2hDb25maWd1cmF0aW9uUm9vdEJsb2NrRGV2aWNlKHRoaXMsICdyb290X2Jsb2NrX2RldmljZScsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwcycpO1xuICB9XG5cbiAgLy8gc3BvdF9wcmljZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwb3RQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nwb3RfcHJpY2UnKTtcbiAgfVxuXG4gIC8vIHVzZXJfZGF0YSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9kYXRhJyk7XG4gIH1cblxuICAvLyB2cGNfY2xhc3NpY19saW5rX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjQ2xhc3NpY0xpbmtJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19jbGFzc2ljX2xpbmtfaWQnKTtcbiAgfVxuXG4gIC8vIHZwY19jbGFzc2ljX2xpbmtfc2VjdXJpdHlfZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjQ2xhc3NpY0xpbmtTZWN1cml0eUdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfY2xhc3NpY19saW5rX3NlY3VyaXR5X2dyb3VwcycpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICB9O1xuICB9XG59XG4iXX0=