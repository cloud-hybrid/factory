"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcEndpointConnectionNotification = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification}.
 *
 * @stability stable
 */
class VpcEndpointConnectionNotification extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_connection_notification',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._connectionEvents = config.connectionEvents;
        this._connectionNotificationArn = config.connectionNotificationArn;
        this._vpcEndpointId = config.vpcEndpointId;
        this._vpcEndpointServiceId = config.vpcEndpointServiceId;
    }
    /**
     * @stability stable
     */
    get connectionEvents() {
        return this.getListAttribute('connection_events');
    }
    /**
     * @stability stable
     */
    set connectionEvents(value) {
        this._connectionEvents = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get connectionEventsInput() {
        return this._connectionEvents;
    }
    /**
     * @stability stable
     */
    get connectionNotificationArn() {
        return this.getStringAttribute('connection_notification_arn');
    }
    /**
     * @stability stable
     */
    set connectionNotificationArn(value) {
        this._connectionNotificationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get connectionNotificationArnInput() {
        return this._connectionNotificationArn;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // notification_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get notificationType() {
        return this.getStringAttribute('notification_type');
    }
    // state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get state() {
        return this.getStringAttribute('state');
    }
    /**
     * @stability stable
     */
    get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }
    /**
     * @stability stable
     */
    set vpcEndpointId(value) {
        this._vpcEndpointId = value;
    }
    /**
     * @stability stable
     */
    resetVpcEndpointId() {
        this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcEndpointIdInput() {
        return this._vpcEndpointId;
    }
    /**
     * @stability stable
     */
    get vpcEndpointServiceId() {
        return this.getStringAttribute('vpc_endpoint_service_id');
    }
    /**
     * @stability stable
     */
    set vpcEndpointServiceId(value) {
        this._vpcEndpointServiceId = value;
    }
    /**
     * @stability stable
     */
    resetVpcEndpointServiceId() {
        this._vpcEndpointServiceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcEndpointServiceIdInput() {
        return this._vpcEndpointServiceId;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            connection_events: cdktf.listMapper(cdktf.stringToTerraform)(this._connectionEvents),
            connection_notification_arn: cdktf.stringToTerraform(this._connectionNotificationArn),
            vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
            vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId),
        };
    }
}
exports.VpcEndpointConnectionNotification = VpcEndpointConnectionNotification;
_a = JSII_RTTI_SYMBOL_1;
VpcEndpointConnectionNotification[_a] = { fqn: "@cdktf/provider-aws.vpc.VpcEndpointConnectionNotification", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
VpcEndpointConnectionNotification.tfResourceType = "aws_vpc_endpoint_connection_notification";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLWVuZHBvaW50LWNvbm5lY3Rpb24tbm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZwYy92cGMtZW5kcG9pbnQtY29ubmVjdGlvbi1ub3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQWUvQixNQUFhLGlDQUFrQyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPNUUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQStDO1FBQzlGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMENBQTBDO1lBQ2pFLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7SUFDM0QsQ0FBQzs7OztJQVFELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBZTtRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUNELElBQVcseUJBQXlCLENBQUMsS0FBYTtRQUNoRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDekMsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUVBQXVFOzs7O0lBQ3ZFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDJEQUEyRDs7OztJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7OztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDcEYsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUNyRixlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDN0QsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUM3RSxDQUFDO0lBQ0osQ0FBQzs7QUFySEgsOEVBc0hDOzs7QUFwSEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxnREFBYyxHQUFXLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBWcGNFbmRwb2ludENvbm5lY3Rpb25Ob3RpZmljYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29ubmVjdGlvbkV2ZW50czogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29ubmVjdGlvbk5vdGlmaWNhdGlvbkFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY0VuZHBvaW50SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY0VuZHBvaW50U2VydmljZUlkPzogc3RyaW5nO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFZwY0VuZHBvaW50Q29ubmVjdGlvbk5vdGlmaWNhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c192cGNfZW5kcG9pbnRfY29ubmVjdGlvbl9ub3RpZmljYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBWcGNFbmRwb2ludENvbm5lY3Rpb25Ob3RpZmljYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c192cGNfZW5kcG9pbnRfY29ubmVjdGlvbl9ub3RpZmljYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY29ubmVjdGlvbkV2ZW50cyA9IGNvbmZpZy5jb25uZWN0aW9uRXZlbnRzO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25Ob3RpZmljYXRpb25Bcm4gPSBjb25maWcuY29ubmVjdGlvbk5vdGlmaWNhdGlvbkFybjtcbiAgICB0aGlzLl92cGNFbmRwb2ludElkID0gY29uZmlnLnZwY0VuZHBvaW50SWQ7XG4gICAgdGhpcy5fdnBjRW5kcG9pbnRTZXJ2aWNlSWQgPSBjb25maWcudnBjRW5kcG9pbnRTZXJ2aWNlSWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNvbm5lY3Rpb25fZXZlbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb25FdmVudHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbkV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjb25uZWN0aW9uX2V2ZW50cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29ubmVjdGlvbkV2ZW50cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jb25uZWN0aW9uRXZlbnRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25FdmVudHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkV2ZW50cztcbiAgfVxuXG4gIC8vIGNvbm5lY3Rpb25fbm90aWZpY2F0aW9uX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb25uZWN0aW9uTm90aWZpY2F0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25uZWN0aW9uTm90aWZpY2F0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29ubmVjdGlvbl9ub3RpZmljYXRpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25uZWN0aW9uTm90aWZpY2F0aW9uQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25uZWN0aW9uTm90aWZpY2F0aW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25Ob3RpZmljYXRpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbk5vdGlmaWNhdGlvbkFybjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBub3RpZmljYXRpb25fdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdub3RpZmljYXRpb25fdHlwZScpO1xuICB9XG5cbiAgLy8gc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlJyk7XG4gIH1cblxuICAvLyB2cGNfZW5kcG9pbnRfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjRW5kcG9pbnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdnBjRW5kcG9pbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19lbmRwb2ludF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjRW5kcG9pbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdnBjRW5kcG9pbnRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY0VuZHBvaW50SWQoKSB7XG4gICAgdGhpcy5fdnBjRW5kcG9pbnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjRW5kcG9pbnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNFbmRwb2ludElkO1xuICB9XG5cbiAgLy8gdnBjX2VuZHBvaW50X3NlcnZpY2VfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjRW5kcG9pbnRTZXJ2aWNlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZwY0VuZHBvaW50U2VydmljZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX2VuZHBvaW50X3NlcnZpY2VfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY0VuZHBvaW50U2VydmljZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92cGNFbmRwb2ludFNlcnZpY2VJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY0VuZHBvaW50U2VydmljZUlkKCkge1xuICAgIHRoaXMuX3ZwY0VuZHBvaW50U2VydmljZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNFbmRwb2ludFNlcnZpY2VJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNFbmRwb2ludFNlcnZpY2VJZDtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29ubmVjdGlvbl9ldmVudHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2Nvbm5lY3Rpb25FdmVudHMpLFxuICAgICAgY29ubmVjdGlvbl9ub3RpZmljYXRpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb25uZWN0aW9uTm90aWZpY2F0aW9uQXJuKSxcbiAgICAgIHZwY19lbmRwb2ludF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdnBjRW5kcG9pbnRJZCksXG4gICAgICB2cGNfZW5kcG9pbnRfc2VydmljZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdnBjRW5kcG9pbnRTZXJ2aWNlSWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==