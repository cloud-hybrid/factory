"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryServiceConditionalForwarder = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder}.
 *
 * @stability stable
 */
class DirectoryServiceConditionalForwarder extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_directory_service_conditional_forwarder',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._directoryId = config.directoryId;
        this._dnsIps = config.dnsIps;
        this._remoteDomainName = config.remoteDomainName;
    }
    /**
     * @stability stable
     */
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    /**
     * @stability stable
     */
    set directoryId(value) {
        this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get directoryIdInput() {
        return this._directoryId;
    }
    /**
     * @stability stable
     */
    get dnsIps() {
        return this.getListAttribute('dns_ips');
    }
    /**
     * @stability stable
     */
    set dnsIps(value) {
        this._dnsIps = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dnsIpsInput() {
        return this._dnsIps;
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
    get remoteDomainName() {
        return this.getStringAttribute('remote_domain_name');
    }
    /**
     * @stability stable
     */
    set remoteDomainName(value) {
        this._remoteDomainName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get remoteDomainNameInput() {
        return this._remoteDomainName;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsIps),
            remote_domain_name: cdktf.stringToTerraform(this._remoteDomainName),
        };
    }
}
exports.DirectoryServiceConditionalForwarder = DirectoryServiceConditionalForwarder;
_a = JSII_RTTI_SYMBOL_1;
DirectoryServiceConditionalForwarder[_a] = { fqn: "@cdktf/provider-aws.directoryservice.DirectoryServiceConditionalForwarder", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DirectoryServiceConditionalForwarder.tfResourceType = "aws_directory_service_conditional_forwarder";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3J5LXNlcnZpY2UtY29uZGl0aW9uYWwtZm9yd2FyZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RpcmVjdG9yeXNlcnZpY2UvZGlyZWN0b3J5LXNlcnZpY2UtY29uZGl0aW9uYWwtZm9yd2FyZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7Ozs7QUFhL0IsTUFBYSxvQ0FBcUMsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTy9FLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFrRDtRQUNqRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDZDQUE2QztZQUNwRSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7Ozs7SUFRRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFlO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7O0FBdEZILG9GQXVGQzs7O0FBckZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csbURBQWMsR0FBVyw2Q0FBNkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvcnlTZXJ2aWNlQ29uZGl0aW9uYWxGb3J3YXJkZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkaXJlY3RvcnlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG5zSXBzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZW1vdGVEb21haW5OYW1lOiBzdHJpbmc7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGlyZWN0b3J5U2VydmljZUNvbmRpdGlvbmFsRm9yd2FyZGVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2RpcmVjdG9yeV9zZXJ2aWNlX2NvbmRpdGlvbmFsX2ZvcndhcmRlclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERpcmVjdG9yeVNlcnZpY2VDb25kaXRpb25hbEZvcndhcmRlckNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2RpcmVjdG9yeV9zZXJ2aWNlX2NvbmRpdGlvbmFsX2ZvcndhcmRlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kaXJlY3RvcnlJZCA9IGNvbmZpZy5kaXJlY3RvcnlJZDtcbiAgICB0aGlzLl9kbnNJcHMgPSBjb25maWcuZG5zSXBzO1xuICAgIHRoaXMuX3JlbW90ZURvbWFpbk5hbWUgPSBjb25maWcucmVtb3RlRG9tYWluTmFtZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZGlyZWN0b3J5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RpcmVjdG9yeUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkaXJlY3RvcnlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RpcmVjdG9yeV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGlyZWN0b3J5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RpcmVjdG9yeUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdG9yeUlkO1xuICB9XG5cbiAgLy8gZG5zX2lwcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kbnNJcHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZG5zSXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2Ruc19pcHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRuc0lwcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9kbnNJcHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG5zSXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Ruc0lwcztcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyByZW1vdGVfZG9tYWluX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVtb3RlRG9tYWluTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVtb3RlRG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlbW90ZV9kb21haW5fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVtb3RlRG9tYWluTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVtb3RlRG9tYWluTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZW1vdGVEb21haW5OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW90ZURvbWFpbk5hbWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdG9yeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGlyZWN0b3J5SWQpLFxuICAgICAgZG5zX2lwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fZG5zSXBzKSxcbiAgICAgIHJlbW90ZV9kb21haW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVtb3RlRG9tYWluTmFtZSksXG4gICAgfTtcbiAgfVxufVxuIl19