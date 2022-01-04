"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppautoscalingTarget = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target}.
 *
 * @stability stable
 */
class AppautoscalingTarget extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appautoscaling_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._maxCapacity = config.maxCapacity;
        this._minCapacity = config.minCapacity;
        this._resourceId = config.resourceId;
        this._roleArn = config.roleArn;
        this._scalableDimension = config.scalableDimension;
        this._serviceNamespace = config.serviceNamespace;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    /**
     * @stability stable
     */
    set maxCapacity(value) {
        this._maxCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxCapacityInput() {
        return this._maxCapacity;
    }
    /**
     * @stability stable
     */
    get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    /**
     * @stability stable
     */
    set minCapacity(value) {
        this._minCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minCapacityInput() {
        return this._minCapacity;
    }
    /**
     * @stability stable
     */
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    /**
     * @stability stable
     */
    set resourceId(value) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceIdInput() {
        return this._resourceId;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    /**
     * @stability stable
     */
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get scalableDimension() {
        return this.getStringAttribute('scalable_dimension');
    }
    /**
     * @stability stable
     */
    set scalableDimension(value) {
        this._scalableDimension = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scalableDimensionInput() {
        return this._scalableDimension;
    }
    /**
     * @stability stable
     */
    get serviceNamespace() {
        return this.getStringAttribute('service_namespace');
    }
    /**
     * @stability stable
     */
    set serviceNamespace(value) {
        this._serviceNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceNamespaceInput() {
        return this._serviceNamespace;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            max_capacity: cdktf.numberToTerraform(this._maxCapacity),
            min_capacity: cdktf.numberToTerraform(this._minCapacity),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
            service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
        };
    }
}
exports.AppautoscalingTarget = AppautoscalingTarget;
_a = JSII_RTTI_SYMBOL_1;
AppautoscalingTarget[_a] = { fqn: "@cdktf/provider-aws.appautoscaling.AppautoscalingTarget", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppautoscalingTarget.tfResourceType = "aws_appautoscaling_target";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYXV0b3NjYWxpbmctdGFyZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcGF1dG9zY2FsaW5nL2FwcGF1dG9zY2FsaW5nLXRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBbUIvQixNQUFhLG9CQUFxQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPL0QsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWtDO1FBQ2pGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMkJBQTJCO1lBQ2xELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJ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aUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDbkUsQ0FBQztJQUNKLENBQUM7O0FBdElILG9EQXVJQzs7O0FBcklDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csbUNBQWMsR0FBVywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBBcHBhdXRvc2NhbGluZ1RhcmdldENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q2FwYWNpdHk6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pbkNhcGFjaXR5OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2FsYWJsZURpbWVuc2lvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VOYW1lc3BhY2U6IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcHBhdXRvc2NhbGluZ1RhcmdldCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hcHBhdXRvc2NhbGluZ190YXJnZXRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFwcGF1dG9zY2FsaW5nVGFyZ2V0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBwYXV0b3NjYWxpbmdfdGFyZ2V0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX21heENhcGFjaXR5ID0gY29uZmlnLm1heENhcGFjaXR5O1xuICAgIHRoaXMuX21pbkNhcGFjaXR5ID0gY29uZmlnLm1pbkNhcGFjaXR5O1xuICAgIHRoaXMuX3Jlc291cmNlSWQgPSBjb25maWcucmVzb3VyY2VJZDtcbiAgICB0aGlzLl9yb2xlQXJuID0gY29uZmlnLnJvbGVBcm47XG4gICAgdGhpcy5fc2NhbGFibGVEaW1lbnNpb24gPSBjb25maWcuc2NhbGFibGVEaW1lbnNpb247XG4gICAgdGhpcy5fc2VydmljZU5hbWVzcGFjZSA9IGNvbmZpZy5zZXJ2aWNlTmFtZXNwYWNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbWF4X2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heENhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4Q2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENhcGFjaXR5O1xuICB9XG5cbiAgLy8gbWluX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21pbkNhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5DYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluQ2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pbkNhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pbkNhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkNhcGFjaXR5O1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VJZDtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9sZUFybigpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cblxuICAvLyBzY2FsYWJsZV9kaW1lbnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NhbGFibGVEaW1lbnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjYWxhYmxlRGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NhbGFibGVfZGltZW5zaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY2FsYWJsZURpbWVuc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NhbGFibGVEaW1lbnNpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NhbGFibGVEaW1lbnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGFibGVEaW1lbnNpb247XG4gIH1cblxuICAvLyBzZXJ2aWNlX25hbWVzcGFjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlTmFtZXNwYWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9uYW1lc3BhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VOYW1lc3BhY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZpY2VOYW1lc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWVzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlTmFtZXNwYWNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBtYXhfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heENhcGFjaXR5KSxcbiAgICAgIG1pbl9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluQ2FwYWNpdHkpLFxuICAgICAgcmVzb3VyY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jlc291cmNlSWQpLFxuICAgICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvbGVBcm4pLFxuICAgICAgc2NhbGFibGVfZGltZW5zaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zY2FsYWJsZURpbWVuc2lvbiksXG4gICAgICBzZXJ2aWNlX25hbWVzcGFjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmljZU5hbWVzcGFjZSksXG4gICAgfTtcbiAgfVxufVxuIl19