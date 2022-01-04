"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route53Record = exports.route53RecordWeightedRoutingPolicyToTerraform = exports.route53RecordLatencyRoutingPolicyToTerraform = exports.route53RecordGeolocationRoutingPolicyToTerraform = exports.route53RecordFailoverRoutingPolicyToTerraform = exports.route53RecordAliasToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function route53RecordAliasToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        evaluate_target_health: cdktf.booleanToTerraform(struct.evaluateTargetHealth),
        name: cdktf.stringToTerraform(struct.name),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
    };
}
exports.route53RecordAliasToTerraform = route53RecordAliasToTerraform;
function route53RecordFailoverRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.route53RecordFailoverRoutingPolicyToTerraform = route53RecordFailoverRoutingPolicyToTerraform;
function route53RecordGeolocationRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        continent: cdktf.stringToTerraform(struct.continent),
        country: cdktf.stringToTerraform(struct.country),
        subdivision: cdktf.stringToTerraform(struct.subdivision),
    };
}
exports.route53RecordGeolocationRoutingPolicyToTerraform = route53RecordGeolocationRoutingPolicyToTerraform;
function route53RecordLatencyRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        region: cdktf.stringToTerraform(struct.region),
    };
}
exports.route53RecordLatencyRoutingPolicyToTerraform = route53RecordLatencyRoutingPolicyToTerraform;
function route53RecordWeightedRoutingPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.route53RecordWeightedRoutingPolicyToTerraform = route53RecordWeightedRoutingPolicyToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record}.
 *
 * @stability stable
 */
class Route53Record extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route53_record',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowOverwrite = config.allowOverwrite;
        this._healthCheckId = config.healthCheckId;
        this._multivalueAnswerRoutingPolicy = config.multivalueAnswerRoutingPolicy;
        this._name = config.name;
        this._records = config.records;
        this._setIdentifier = config.setIdentifier;
        this._ttl = config.ttl;
        this._type = config.type;
        this._zoneId = config.zoneId;
        this._alias = config.alias;
        this._failoverRoutingPolicy = config.failoverRoutingPolicy;
        this._geolocationRoutingPolicy = config.geolocationRoutingPolicy;
        this._latencyRoutingPolicy = config.latencyRoutingPolicy;
        this._weightedRoutingPolicy = config.weightedRoutingPolicy;
    }
    /**
     * @stability stable
     */
    get allowOverwrite() {
        return this.getBooleanAttribute('allow_overwrite');
    }
    /**
     * @stability stable
     */
    set allowOverwrite(value) {
        this._allowOverwrite = value;
    }
    /**
     * @stability stable
     */
    resetAllowOverwrite() {
        this._allowOverwrite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowOverwriteInput() {
        return this._allowOverwrite;
    }
    // fqdn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get fqdn() {
        return this.getStringAttribute('fqdn');
    }
    /**
     * @stability stable
     */
    get healthCheckId() {
        return this.getStringAttribute('health_check_id');
    }
    /**
     * @stability stable
     */
    set healthCheckId(value) {
        this._healthCheckId = value;
    }
    /**
     * @stability stable
     */
    resetHealthCheckId() {
        this._healthCheckId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get healthCheckIdInput() {
        return this._healthCheckId;
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
    get multivalueAnswerRoutingPolicy() {
        return this.getBooleanAttribute('multivalue_answer_routing_policy');
    }
    /**
     * @stability stable
     */
    set multivalueAnswerRoutingPolicy(value) {
        this._multivalueAnswerRoutingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetMultivalueAnswerRoutingPolicy() {
        this._multivalueAnswerRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get multivalueAnswerRoutingPolicyInput() {
        return this._multivalueAnswerRoutingPolicy;
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
    /**
     * @stability stable
     */
    get records() {
        return this.getListAttribute('records');
    }
    /**
     * @stability stable
     */
    set records(value) {
        this._records = value;
    }
    /**
     * @stability stable
     */
    resetRecords() {
        this._records = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordsInput() {
        return this._records;
    }
    /**
     * @stability stable
     */
    get setIdentifier() {
        return this.getStringAttribute('set_identifier');
    }
    /**
     * @stability stable
     */
    set setIdentifier(value) {
        this._setIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetSetIdentifier() {
        this._setIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get setIdentifierInput() {
        return this._setIdentifier;
    }
    /**
     * @stability stable
     */
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    /**
     * @stability stable
     */
    set ttl(value) {
        this._ttl = value;
    }
    /**
     * @stability stable
     */
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ttlInput() {
        return this._ttl;
    }
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
    /**
     * @stability stable
     */
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeInput() {
        return this._type;
    }
    /**
     * @stability stable
     */
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    /**
     * @stability stable
     */
    set zoneId(value) {
        this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get zoneIdInput() {
        return this._zoneId;
    }
    /**
     * @stability stable
     */
    get alias() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('alias');
    }
    /**
     * @stability stable
     */
    set alias(value) {
        this._alias = value;
    }
    /**
     * @stability stable
     */
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get aliasInput() {
        return this._alias;
    }
    /**
     * @stability stable
     */
    get failoverRoutingPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('failover_routing_policy');
    }
    /**
     * @stability stable
     */
    set failoverRoutingPolicy(value) {
        this._failoverRoutingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetFailoverRoutingPolicy() {
        this._failoverRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get failoverRoutingPolicyInput() {
        return this._failoverRoutingPolicy;
    }
    /**
     * @stability stable
     */
    get geolocationRoutingPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('geolocation_routing_policy');
    }
    /**
     * @stability stable
     */
    set geolocationRoutingPolicy(value) {
        this._geolocationRoutingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetGeolocationRoutingPolicy() {
        this._geolocationRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get geolocationRoutingPolicyInput() {
        return this._geolocationRoutingPolicy;
    }
    /**
     * @stability stable
     */
    get latencyRoutingPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('latency_routing_policy');
    }
    /**
     * @stability stable
     */
    set latencyRoutingPolicy(value) {
        this._latencyRoutingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetLatencyRoutingPolicy() {
        this._latencyRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get latencyRoutingPolicyInput() {
        return this._latencyRoutingPolicy;
    }
    /**
     * @stability stable
     */
    get weightedRoutingPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('weighted_routing_policy');
    }
    /**
     * @stability stable
     */
    set weightedRoutingPolicy(value) {
        this._weightedRoutingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetWeightedRoutingPolicy() {
        this._weightedRoutingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get weightedRoutingPolicyInput() {
        return this._weightedRoutingPolicy;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            allow_overwrite: cdktf.booleanToTerraform(this._allowOverwrite),
            health_check_id: cdktf.stringToTerraform(this._healthCheckId),
            multivalue_answer_routing_policy: cdktf.booleanToTerraform(this._multivalueAnswerRoutingPolicy),
            name: cdktf.stringToTerraform(this._name),
            records: cdktf.listMapper(cdktf.stringToTerraform)(this._records),
            set_identifier: cdktf.stringToTerraform(this._setIdentifier),
            ttl: cdktf.numberToTerraform(this._ttl),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
            alias: cdktf.listMapper(route53RecordAliasToTerraform)(this._alias),
            failover_routing_policy: cdktf.listMapper(route53RecordFailoverRoutingPolicyToTerraform)(this._failoverRoutingPolicy),
            geolocation_routing_policy: cdktf.listMapper(route53RecordGeolocationRoutingPolicyToTerraform)(this._geolocationRoutingPolicy),
            latency_routing_policy: cdktf.listMapper(route53RecordLatencyRoutingPolicyToTerraform)(this._latencyRoutingPolicy),
            weighted_routing_policy: cdktf.listMapper(route53RecordWeightedRoutingPolicyToTerraform)(this._weightedRoutingPolicy),
        };
    }
}
exports.Route53Record = Route53Record;
_a = JSII_RTTI_SYMBOL_1;
Route53Record[_a] = { fqn: "@cdktf/provider-aws.route53.Route53Record", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Route53Record.tfResourceType = "aws_route53_record";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1My1yZWNvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGU1My9yb3V0ZTUzLXJlY29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTBDL0IsU0FBZ0IsNkJBQTZCLENBQUMsTUFBMkI7SUFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQzlFLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDakQsQ0FBQTtBQUNILENBQUM7QUFWRCxzRUFVQztBQU9ELFNBQWdCLDZDQUE2QyxDQUFDLE1BQTJDO0lBQ3ZHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBUkQsc0dBUUM7QUFXRCxTQUFnQixnREFBZ0QsQ0FBQyxNQUE4QztJ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O0FBclNDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNEJBQWMsR0FBVyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZTUzUmVjb3JkQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dPdmVyd3JpdGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbXVsdGl2YWx1ZUFuc3dlclJvdXRpbmdQb2xpY3k/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNldElkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHRsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgem9uZUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsaWFzPzogUm91dGU1M1JlY29yZEFsaWFzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZhaWxvdmVyUm91dGluZ1BvbGljeT86IFJvdXRlNTNSZWNvcmRGYWlsb3ZlclJvdXRpbmdQb2xpY3lbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ2VvbG9jYXRpb25Sb3V0aW5nUG9saWN5PzogUm91dGU1M1JlY29yZEdlb2xvY2F0aW9uUm91dGluZ1BvbGljeVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXRlbmN5Um91dGluZ1BvbGljeT86IFJvdXRlNTNSZWNvcmRMYXRlbmN5Um91dGluZ1BvbGljeVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZFJvdXRpbmdQb2xpY3k/OiBSb3V0ZTUzUmVjb3JkV2VpZ2h0ZWRSb3V0aW5nUG9saWN5W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZWNvcmRBbGlhcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBldmFsdWF0ZVRhcmdldEhlYWx0aDogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgem9uZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZTUzUmVjb3JkQWxpYXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZTUzUmVjb3JkQWxpYXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBldmFsdWF0ZV90YXJnZXRfaGVhbHRoOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5ldmFsdWF0ZVRhcmdldEhlYWx0aCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB6b25lX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnpvbmVJZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZTUzUmVjb3JkRmFpbG92ZXJSb3V0aW5nUG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlNTNSZWNvcmRGYWlsb3ZlclJvdXRpbmdQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZTUzUmVjb3JkRmFpbG92ZXJSb3V0aW5nUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZWNvcmRHZW9sb2NhdGlvblJvdXRpbmdQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRpbmVudD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvdW50cnk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1YmRpdmlzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGU1M1JlY29yZEdlb2xvY2F0aW9uUm91dGluZ1BvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IFJvdXRlNTNSZWNvcmRHZW9sb2NhdGlvblJvdXRpbmdQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250aW5lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGluZW50KSxcbiAgICBjb3VudHJ5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvdW50cnkpLFxuICAgIHN1YmRpdmlzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1YmRpdmlzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZWNvcmRMYXRlbmN5Um91dGluZ1BvbGljeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVnaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZTUzUmVjb3JkTGF0ZW5jeVJvdXRpbmdQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZTUzUmVjb3JkTGF0ZW5jeVJvdXRpbmdQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZWNvcmRXZWlnaHRlZFJvdXRpbmdQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGU1M1JlY29yZFdlaWdodGVkUm91dGluZ1BvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IFJvdXRlNTNSZWNvcmRXZWlnaHRlZFJvdXRpbmdQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3ZWlnaHQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0KSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFJvdXRlNTNSZWNvcmQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfcm91dGU1M19yZWNvcmRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFJvdXRlNTNSZWNvcmRDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19yb3V0ZTUzX3JlY29yZCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGxvd092ZXJ3cml0ZSA9IGNvbmZpZy5hbGxvd092ZXJ3cml0ZTtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0lkID0gY29uZmlnLmhlYWx0aENoZWNrSWQ7XG4gICAgdGhpcy5fbXVsdGl2YWx1ZUFuc3dlclJvdXRpbmdQb2xpY3kgPSBjb25maWcubXVsdGl2YWx1ZUFuc3dlclJvdXRpbmdQb2xpY3k7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3JlY29yZHMgPSBjb25maWcucmVjb3JkcztcbiAgICB0aGlzLl9zZXRJZGVudGlmaWVyID0gY29uZmlnLnNldElkZW50aWZpZXI7XG4gICAgdGhpcy5fdHRsID0gY29uZmlnLnR0bDtcbiAgICB0aGlzLl90eXBlID0gY29uZmlnLnR5cGU7XG4gICAgdGhpcy5fem9uZUlkID0gY29uZmlnLnpvbmVJZDtcbiAgICB0aGlzLl9hbGlhcyA9IGNvbmZpZy5hbGlhcztcbiAgICB0aGlzLl9mYWlsb3ZlclJvdXRpbmdQb2xpY3kgPSBjb25maWcuZmFpbG92ZXJSb3V0aW5nUG9saWN5O1xuICAgIHRoaXMuX2dlb2xvY2F0aW9uUm91dGluZ1BvbGljeSA9IGNvbmZpZy5nZW9sb2NhdGlvblJvdXRpbmdQb2xpY3k7XG4gICAgdGhpcy5fbGF0ZW5jeVJvdXRpbmdQb2xpY3kgPSBjb25maWcubGF0ZW5jeVJvdXRpbmdQb2xpY3k7XG4gICAgdGhpcy5fd2VpZ2h0ZWRSb3V0aW5nUG9saWN5ID0gY29uZmlnLndlaWdodGVkUm91dGluZ1BvbGljeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxsb3dfb3ZlcndyaXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dPdmVyd3JpdGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93T3ZlcndyaXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FsbG93X292ZXJ3cml0ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93T3ZlcndyaXRlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd092ZXJ3cml0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93T3ZlcndyaXRlKCkge1xuICAgIHRoaXMuX2FsbG93T3ZlcndyaXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd092ZXJ3cml0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd092ZXJ3cml0ZTtcbiAgfVxuXG4gIC8vIGZxZG4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcWRuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnFkbicpO1xuICB9XG5cbiAgLy8gaGVhbHRoX2NoZWNrX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWx0aENoZWNrSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoZWFsdGhfY2hlY2tfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWx0aENoZWNrSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhDaGVja0lkKCkge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoQ2hlY2tJZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtdWx0aXZhbHVlX2Fuc3dlcl9yb3V0aW5nX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tdWx0aXZhbHVlQW5zd2VyUm91dGluZ1BvbGljeT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgbXVsdGl2YWx1ZUFuc3dlclJvdXRpbmdQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbXVsdGl2YWx1ZV9hbnN3ZXJfcm91dGluZ19wb2xpY3knKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtdWx0aXZhbHVlQW5zd2VyUm91dGluZ1BvbGljeSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbXVsdGl2YWx1ZUFuc3dlclJvdXRpbmdQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNdWx0aXZhbHVlQW5zd2VyUm91dGluZ1BvbGljeSgpIHtcbiAgICB0aGlzLl9tdWx0aXZhbHVlQW5zd2VyUm91dGluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbXVsdGl2YWx1ZUFuc3dlclJvdXRpbmdQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGl2YWx1ZUFuc3dlclJvdXRpbmdQb2xpY3k7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHJlY29yZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVjb3Jkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCByZWNvcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3JlY29yZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcmVjb3JkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlY29yZHMoKSB7XG4gICAgdGhpcy5fcmVjb3JkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3Jkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRzO1xuICB9XG5cbiAgLy8gc2V0X2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2V0SWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NldF9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXRJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXRJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2V0SWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9zZXRJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXRJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldElkZW50aWZpZXI7XG4gIH1cblxuICAvLyB0dGwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHRsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR0bCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdHRsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHRsKCkge1xuICAgIHRoaXMuX3R0bCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHRsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R0bDtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gem9uZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF96b25lSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHpvbmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3pvbmVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHpvbmVJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fem9uZUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHpvbmVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl96b25lSWQ7XG4gIH1cblxuICAvLyBhbGlhcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGlhcz86IFJvdXRlNTNSZWNvcmRBbGlhc1tdOyBcbiAgcHVibGljIGdldCBhbGlhcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWxpYXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhbGlhcyh2YWx1ZTogUm91dGU1M1JlY29yZEFsaWFzW10pIHtcbiAgICB0aGlzLl9hbGlhcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsaWFzKCkge1xuICAgIHRoaXMuX2FsaWFzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGlhc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlhcztcbiAgfVxuXG4gIC8vIGZhaWxvdmVyX3JvdXRpbmdfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZhaWxvdmVyUm91dGluZ1BvbGljeT86IFJvdXRlNTNSZWNvcmRGYWlsb3ZlclJvdXRpbmdQb2xpY3lbXTsgXG4gIHB1YmxpYyBnZXQgZmFpbG92ZXJSb3V0aW5nUG9saWN5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmYWlsb3Zlcl9yb3V0aW5nX3BvbGljeScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZhaWxvdmVyUm91dGluZ1BvbGljeSh2YWx1ZTogUm91dGU1M1JlY29yZEZhaWxvdmVyUm91dGluZ1BvbGljeVtdKSB7XG4gICAgdGhpcy5fZmFpbG92ZXJSb3V0aW5nUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmFpbG92ZXJSb3V0aW5nUG9saWN5KCkge1xuICAgIHRoaXMuX2ZhaWxvdmVyUm91dGluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmFpbG92ZXJSb3V0aW5nUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhaWxvdmVyUm91dGluZ1BvbGljeTtcbiAgfVxuXG4gIC8vIGdlb2xvY2F0aW9uX3JvdXRpbmdfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dlb2xvY2F0aW9uUm91dGluZ1BvbGljeT86IFJvdXRlNTNSZWNvcmRHZW9sb2NhdGlvblJvdXRpbmdQb2xpY3lbXTsgXG4gIHB1YmxpYyBnZXQgZ2VvbG9jYXRpb25Sb3V0aW5nUG9saWN5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdnZW9sb2NhdGlvbl9yb3V0aW5nX3BvbGljeScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGdlb2xvY2F0aW9uUm91dGluZ1BvbGljeSh2YWx1ZTogUm91dGU1M1JlY29yZEdlb2xvY2F0aW9uUm91dGluZ1BvbGljeVtdKSB7XG4gICAgdGhpcy5fZ2VvbG9jYXRpb25Sb3V0aW5nUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2VvbG9jYXRpb25Sb3V0aW5nUG9saWN5KCkge1xuICAgIHRoaXMuX2dlb2xvY2F0aW9uUm91dGluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2VvbG9jYXRpb25Sb3V0aW5nUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb2xvY2F0aW9uUm91dGluZ1BvbGljeTtcbiAgfVxuXG4gIC8vIGxhdGVuY3lfcm91dGluZ19wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF0ZW5jeVJvdXRpbmdQb2xpY3k/OiBSb3V0ZTUzUmVjb3JkTGF0ZW5jeVJvdXRpbmdQb2xpY3lbXTsgXG4gIHB1YmxpYyBnZXQgbGF0ZW5jeVJvdXRpbmdQb2xpY3koKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhdGVuY3lfcm91dGluZ19wb2xpY3knKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsYXRlbmN5Um91dGluZ1BvbGljeSh2YWx1ZTogUm91dGU1M1JlY29yZExhdGVuY3lSb3V0aW5nUG9saWN5W10pIHtcbiAgICB0aGlzLl9sYXRlbmN5Um91dGluZ1BvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdGVuY3lSb3V0aW5nUG9saWN5KCkge1xuICAgIHRoaXMuX2xhdGVuY3lSb3V0aW5nUG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXRlbmN5Um91dGluZ1BvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXRlbmN5Um91dGluZ1BvbGljeTtcbiAgfVxuXG4gIC8vIHdlaWdodGVkX3JvdXRpbmdfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dlaWdodGVkUm91dGluZ1BvbGljeT86IFJvdXRlNTNSZWNvcmRXZWlnaHRlZFJvdXRpbmdQb2xpY3lbXTsgXG4gIHB1YmxpYyBnZXQgd2VpZ2h0ZWRSb3V0aW5nUG9saWN5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd3ZWlnaHRlZF9yb3V0aW5nX3BvbGljeScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHdlaWdodGVkUm91dGluZ1BvbGljeSh2YWx1ZTogUm91dGU1M1JlY29yZFdlaWdodGVkUm91dGluZ1BvbGljeVtdKSB7XG4gICAgdGhpcy5fd2VpZ2h0ZWRSb3V0aW5nUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2VpZ2h0ZWRSb3V0aW5nUG9saWN5KCkge1xuICAgIHRoaXMuX3dlaWdodGVkUm91dGluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2VpZ2h0ZWRSb3V0aW5nUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlaWdodGVkUm91dGluZ1BvbGljeTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dfb3ZlcndyaXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYWxsb3dPdmVyd3JpdGUpLFxuICAgICAgaGVhbHRoX2NoZWNrX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja0lkKSxcbiAgICAgIG11bHRpdmFsdWVfYW5zd2VyX3JvdXRpbmdfcG9saWN5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fbXVsdGl2YWx1ZUFuc3dlclJvdXRpbmdQb2xpY3kpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICByZWNvcmRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9yZWNvcmRzKSxcbiAgICAgIHNldF9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXRJZGVudGlmaWVyKSxcbiAgICAgIHR0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHRsKSxcbiAgICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgICAgem9uZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fem9uZUlkKSxcbiAgICAgIGFsaWFzOiBjZGt0Zi5saXN0TWFwcGVyKHJvdXRlNTNSZWNvcmRBbGlhc1RvVGVycmFmb3JtKSh0aGlzLl9hbGlhcyksXG4gICAgICBmYWlsb3Zlcl9yb3V0aW5nX3BvbGljeTogY2RrdGYubGlzdE1hcHBlcihyb3V0ZTUzUmVjb3JkRmFpbG92ZXJSb3V0aW5nUG9saWN5VG9UZXJyYWZvcm0pKHRoaXMuX2ZhaWxvdmVyUm91dGluZ1BvbGljeSksXG4gICAgICBnZW9sb2NhdGlvbl9yb3V0aW5nX3BvbGljeTogY2RrdGYubGlzdE1hcHBlcihyb3V0ZTUzUmVjb3JkR2VvbG9jYXRpb25Sb3V0aW5nUG9saWN5VG9UZXJyYWZvcm0pKHRoaXMuX2dlb2xvY2F0aW9uUm91dGluZ1BvbGljeSksXG4gICAgICBsYXRlbmN5X3JvdXRpbmdfcG9saWN5OiBjZGt0Zi5saXN0TWFwcGVyKHJvdXRlNTNSZWNvcmRMYXRlbmN5Um91dGluZ1BvbGljeVRvVGVycmFmb3JtKSh0aGlzLl9sYXRlbmN5Um91dGluZ1BvbGljeSksXG4gICAgICB3ZWlnaHRlZF9yb3V0aW5nX3BvbGljeTogY2RrdGYubGlzdE1hcHBlcihyb3V0ZTUzUmVjb3JkV2VpZ2h0ZWRSb3V0aW5nUG9saWN5VG9UZXJyYWZvcm0pKHRoaXMuX3dlaWdodGVkUm91dGluZ1BvbGljeSksXG4gICAgfTtcbiAgfVxufVxuIl19