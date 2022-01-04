"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChimeVoiceConnectorStreaming = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html aws_chime_voice_connector_streaming}.
 *
 * @stability stable
 */
class ChimeVoiceConnectorStreaming extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html aws_chime_voice_connector_streaming} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_chime_voice_connector_streaming',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._dataRetention = config.dataRetention;
        this._disabled = config.disabled;
        this._streamingNotificationTargets = config.streamingNotificationTargets;
        this._voiceConnectorId = config.voiceConnectorId;
    }
    /**
     * @stability stable
     */
    get dataRetention() {
        return this.getNumberAttribute('data_retention');
    }
    /**
     * @stability stable
     */
    set dataRetention(value) {
        this._dataRetention = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataRetentionInput() {
        return this._dataRetention;
    }
    /**
     * @stability stable
     */
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    /**
     * @stability stable
     */
    set disabled(value) {
        this._disabled = value;
    }
    /**
     * @stability stable
     */
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get disabledInput() {
        return this._disabled;
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
    get streamingNotificationTargets() {
        return this.getListAttribute('streaming_notification_targets');
    }
    /**
     * @stability stable
     */
    set streamingNotificationTargets(value) {
        this._streamingNotificationTargets = value;
    }
    /**
     * @stability stable
     */
    resetStreamingNotificationTargets() {
        this._streamingNotificationTargets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get streamingNotificationTargetsInput() {
        return this._streamingNotificationTargets;
    }
    /**
     * @stability stable
     */
    get voiceConnectorId() {
        return this.getStringAttribute('voice_connector_id');
    }
    /**
     * @stability stable
     */
    set voiceConnectorId(value) {
        this._voiceConnectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get voiceConnectorIdInput() {
        return this._voiceConnectorId;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            data_retention: cdktf.numberToTerraform(this._dataRetention),
            disabled: cdktf.booleanToTerraform(this._disabled),
            streaming_notification_targets: cdktf.listMapper(cdktf.stringToTerraform)(this._streamingNotificationTargets),
            voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
        };
    }
}
exports.ChimeVoiceConnectorStreaming = ChimeVoiceConnectorStreaming;
_a = JSII_RTTI_SYMBOL_1;
ChimeVoiceConnectorStreaming[_a] = { fqn: "@cdktf/provider-aws.chime.ChimeVoiceConnectorStreaming", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ChimeVoiceConnectorStreaming.tfResourceType = "aws_chime_voice_connector_streaming";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbWUtdm9pY2UtY29ubmVjdG9yLXN0cmVhbWluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGltZS9jaGltZS12b2ljZS1jb25uZWN0b3Itc3RyZWFtaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7Ozs7QUFlL0IsTUFBYSw0QkFBNkIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3ZFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEwQztRQUN6RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFDQUFxQztZQUM1RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1FBQ3pFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQzs7OztJQVFELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFRLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWtDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFDRCxJQUFXLDRCQUE0QixDQUFDLEtBQWU7UUFDckQsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ00saUNBQWlDO1FBQ3RDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxTQUFTLENBQUM7SUFDakQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlDQUFpQztRQUMxQyxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztJQUM1QyxDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDNUQsUUFBUSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELDhCQUE4QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO1lBQzdHLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7O0FBM0dILG9FQTRHQzs7O0FBMUdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csMkNBQWMsR0FBVyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBDaGltZVZvaWNlQ29ubmVjdG9yU3RyZWFtaW5nQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YVJldGVudGlvbjogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RyZWFtaW5nTm90aWZpY2F0aW9uVGFyZ2V0cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9pY2VDb25uZWN0b3JJZDogc3RyaW5nO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ2hpbWVWb2ljZUNvbm5lY3RvclN0cmVhbWluZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19jaGltZV92b2ljZV9jb25uZWN0b3Jfc3RyZWFtaW5nXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ2hpbWVWb2ljZUNvbm5lY3RvclN0cmVhbWluZ0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NoaW1lX3ZvaWNlX2Nvbm5lY3Rvcl9zdHJlYW1pbmcnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGF0YVJldGVudGlvbiA9IGNvbmZpZy5kYXRhUmV0ZW50aW9uO1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29uZmlnLmRpc2FibGVkO1xuICAgIHRoaXMuX3N0cmVhbWluZ05vdGlmaWNhdGlvblRhcmdldHMgPSBjb25maWcuc3RyZWFtaW5nTm90aWZpY2F0aW9uVGFyZ2V0cztcbiAgICB0aGlzLl92b2ljZUNvbm5lY3RvcklkID0gY29uZmlnLnZvaWNlQ29ubmVjdG9ySWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGRhdGFfcmV0ZW50aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RhdGFSZXRlbnRpb24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRhdGFSZXRlbnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkYXRhX3JldGVudGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YVJldGVudGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGF0YVJldGVudGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhUmV0ZW50aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFSZXRlbnRpb247XG4gIH1cblxuICAvLyBkaXNhYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaXNhYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGlzYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXNhYmxlZCgpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlzYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gc3RyZWFtaW5nX25vdGlmaWNhdGlvbl90YXJnZXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0cmVhbWluZ05vdGlmaWNhdGlvblRhcmdldHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3RyZWFtaW5nTm90aWZpY2F0aW9uVGFyZ2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdHJlYW1pbmdfbm90aWZpY2F0aW9uX3RhcmdldHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0cmVhbWluZ05vdGlmaWNhdGlvblRhcmdldHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3RyZWFtaW5nTm90aWZpY2F0aW9uVGFyZ2V0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0cmVhbWluZ05vdGlmaWNhdGlvblRhcmdldHMoKSB7XG4gICAgdGhpcy5fc3RyZWFtaW5nTm90aWZpY2F0aW9uVGFyZ2V0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RyZWFtaW5nTm90aWZpY2F0aW9uVGFyZ2V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW1pbmdOb3RpZmljYXRpb25UYXJnZXRzO1xuICB9XG5cbiAgLy8gdm9pY2VfY29ubmVjdG9yX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZvaWNlQ29ubmVjdG9ySWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZvaWNlQ29ubmVjdG9ySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2b2ljZV9jb25uZWN0b3JfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZvaWNlQ29ubmVjdG9ySWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZvaWNlQ29ubmVjdG9ySWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdm9pY2VDb25uZWN0b3JJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92b2ljZUNvbm5lY3RvcklkO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhX3JldGVudGlvbjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZGF0YVJldGVudGlvbiksXG4gICAgICBkaXNhYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2Rpc2FibGVkKSxcbiAgICAgIHN0cmVhbWluZ19ub3RpZmljYXRpb25fdGFyZ2V0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc3RyZWFtaW5nTm90aWZpY2F0aW9uVGFyZ2V0cyksXG4gICAgICB2b2ljZV9jb25uZWN0b3JfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZvaWNlQ29ubmVjdG9ySWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==