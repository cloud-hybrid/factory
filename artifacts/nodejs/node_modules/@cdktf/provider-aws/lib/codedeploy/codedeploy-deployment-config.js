"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodedeployDeploymentConfig = exports.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference = exports.codedeployDeploymentConfigTrafficRoutingConfigToTerraform = exports.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference = exports.codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform = exports.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference = exports.codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform = exports.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference = exports.codedeployDeploymentConfigMinimumHealthyHostsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function codedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.codedeployDeploymentConfigMinimumHealthyHostsToTerraform = codedeployDeploymentConfigMinimumHealthyHostsToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentConfigMinimumHealthyHostsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
            this._value = value.value;
        }
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
    /**
     * @stability stable
     */
    resetType() {
        this._type = undefined;
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
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @stability stable
     */
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference = CodedeployDeploymentConfigMinimumHealthyHostsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentConfigMinimumHealthyHostsOutputReference[_a] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference", version: "3.0.1" };
function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.numberToTerraform(struct.interval),
        percentage: cdktf.numberToTerraform(struct.percentage),
    };
}
exports.codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform = codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._interval) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._percentage) {
            hasAnyValues = true;
            internalValueResult.percentage = this._percentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._interval = undefined;
            this._percentage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._interval = value.interval;
            this._percentage = value.percentage;
        }
    }
    /**
     * @stability stable
     */
    get interval() {
        return this.getNumberAttribute('interval');
    }
    /**
     * @stability stable
     */
    set interval(value) {
        this._interval = value;
    }
    /**
     * @stability stable
     */
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalInput() {
        return this._interval;
    }
    /**
     * @stability stable
     */
    get percentage() {
        return this.getNumberAttribute('percentage');
    }
    /**
     * @stability stable
     */
    set percentage(value) {
        this._percentage = value;
    }
    /**
     * @stability stable
     */
    resetPercentage() {
        this._percentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get percentageInput() {
        return this._percentage;
    }
}
exports.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference = CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference[_b] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference", version: "3.0.1" };
function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.numberToTerraform(struct.interval),
        percentage: cdktf.numberToTerraform(struct.percentage),
    };
}
exports.codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform = codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._interval) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._percentage) {
            hasAnyValues = true;
            internalValueResult.percentage = this._percentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._interval = undefined;
            this._percentage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._interval = value.interval;
            this._percentage = value.percentage;
        }
    }
    /**
     * @stability stable
     */
    get interval() {
        return this.getNumberAttribute('interval');
    }
    /**
     * @stability stable
     */
    set interval(value) {
        this._interval = value;
    }
    /**
     * @stability stable
     */
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalInput() {
        return this._interval;
    }
    /**
     * @stability stable
     */
    get percentage() {
        return this.getNumberAttribute('percentage');
    }
    /**
     * @stability stable
     */
    set percentage(value) {
        this._percentage = value;
    }
    /**
     * @stability stable
     */
    resetPercentage() {
        this._percentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get percentageInput() {
        return this._percentage;
    }
}
exports.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference = CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference[_c] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference", version: "3.0.1" };
function codedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        time_based_canary: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct.timeBasedCanary),
        time_based_linear: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct.timeBasedLinear),
    };
}
exports.codedeployDeploymentConfigTrafficRoutingConfigToTerraform = codedeployDeploymentConfigTrafficRoutingConfigToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentConfigTrafficRoutingConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // time_based_canary - computed: false, optional: true, required: false
        this._timeBasedCanary = new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(this, "time_based_canary", true);
        // time_based_linear - computed: false, optional: true, required: false
        this._timeBasedLinear = new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(this, "time_based_linear", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g, _h, _j;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if ((_f = this._timeBasedCanary) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.timeBasedCanary = (_g = this._timeBasedCanary) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        if ((_h = this._timeBasedLinear) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.timeBasedLinear = (_j = this._timeBasedLinear) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
            this._timeBasedCanary.internalValue = undefined;
            this._timeBasedLinear.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
            this._timeBasedCanary.internalValue = value.timeBasedCanary;
            this._timeBasedLinear.internalValue = value.timeBasedLinear;
        }
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
    /**
     * @stability stable
     */
    resetType() {
        this._type = undefined;
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
    get timeBasedCanary() {
        return this._timeBasedCanary;
    }
    /**
     * @stability stable
     */
    putTimeBasedCanary(value) {
        this._timeBasedCanary.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeBasedCanary() {
        this._timeBasedCanary.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeBasedCanaryInput() {
        return this._timeBasedCanary.internalValue;
    }
    /**
     * @stability stable
     */
    get timeBasedLinear() {
        return this._timeBasedLinear;
    }
    /**
     * @stability stable
     */
    putTimeBasedLinear(value) {
        this._timeBasedLinear.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeBasedLinear() {
        this._timeBasedLinear.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeBasedLinearInput() {
        return this._timeBasedLinear.internalValue;
    }
}
exports.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference = CodedeployDeploymentConfigTrafficRoutingConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentConfigTrafficRoutingConfigOutputReference[_d] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config}.
 *
 * @stability stable
 */
class CodedeployDeploymentConfig extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codedeploy_deployment_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // minimum_healthy_hosts - computed: false, optional: true, required: false
        this._minimumHealthyHosts = new CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(this, "minimum_healthy_hosts", true);
        // traffic_routing_config - computed: false, optional: true, required: false
        this._trafficRoutingConfig = new CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(this, "traffic_routing_config", true);
        this._computePlatform = config.computePlatform;
        this._deploymentConfigName = config.deploymentConfigName;
        this._minimumHealthyHosts.internalValue = config.minimumHealthyHosts;
        this._trafficRoutingConfig.internalValue = config.trafficRoutingConfig;
    }
    /**
     * @stability stable
     */
    get computePlatform() {
        return this.getStringAttribute('compute_platform');
    }
    /**
     * @stability stable
     */
    set computePlatform(value) {
        this._computePlatform = value;
    }
    /**
     * @stability stable
     */
    resetComputePlatform() {
        this._computePlatform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get computePlatformInput() {
        return this._computePlatform;
    }
    // deployment_config_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deploymentConfigId() {
        return this.getStringAttribute('deployment_config_id');
    }
    /**
     * @stability stable
     */
    get deploymentConfigName() {
        return this.getStringAttribute('deployment_config_name');
    }
    /**
     * @stability stable
     */
    set deploymentConfigName(value) {
        this._deploymentConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentConfigNameInput() {
        return this._deploymentConfigName;
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
    get minimumHealthyHosts() {
        return this._minimumHealthyHosts;
    }
    /**
     * @stability stable
     */
    putMinimumHealthyHosts(value) {
        this._minimumHealthyHosts.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMinimumHealthyHosts() {
        this._minimumHealthyHosts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minimumHealthyHostsInput() {
        return this._minimumHealthyHosts.internalValue;
    }
    /**
     * @stability stable
     */
    get trafficRoutingConfig() {
        return this._trafficRoutingConfig;
    }
    /**
     * @stability stable
     */
    putTrafficRoutingConfig(value) {
        this._trafficRoutingConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTrafficRoutingConfig() {
        this._trafficRoutingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get trafficRoutingConfigInput() {
        return this._trafficRoutingConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            compute_platform: cdktf.stringToTerraform(this._computePlatform),
            deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
            minimum_healthy_hosts: codedeployDeploymentConfigMinimumHealthyHostsToTerraform(this._minimumHealthyHosts.internalValue),
            traffic_routing_config: codedeployDeploymentConfigTrafficRoutingConfigToTerraform(this._trafficRoutingConfig.internalValue),
        };
    }
}
exports.CodedeployDeploymentConfig = CodedeployDeploymentConfig;
_e = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentConfig[_e] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentConfig", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CodedeployDeploymentConfig.tfResourceType = "aws_codedeploy_deployment_config";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWRlcGxveS1kZXBsb3ltZW50LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2RlZGVwbG95L2NvZGVkZXBsb3ktZGVwbG95bWVudC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFvQi9CLFNBQWdCLHdEQUF3RCxDQUFDLE1BQXFIO0lBQzVMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVRELDRIQVNDOzs7O0FBRUQsTUFBYSw0REFBNkQsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUluRyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUks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Q0FBQztZQUMzRSxxQkFBcUIsRUFBRSx3REFBd0QsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1lBQ3hILHNCQUFzQixFQUFFLHlEQUF5RCxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7U0FDNUgsQ0FBQztJQUNKLENBQUM7O0FBbkhILGdFQW9IQzs7O0FBbEhDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0cseUNBQWMsR0FBVyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wdXRlUGxhdGZvcm0/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXBsb3ltZW50Q29uZmlnTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5pbXVtSGVhbHRoeUhvc3RzPzogQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdNaW5pbXVtSGVhbHRoeUhvc3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmFmZmljUm91dGluZ0NvbmZpZz86IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnTWluaW11bUhlYWx0aHlIb3N0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnTWluaW11bUhlYWx0aHlIb3N0c1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnTWluaW11bUhlYWx0aHlIb3N0c091dHB1dFJlZmVyZW5jZSB8IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnTWluaW11bUhlYWx0aHlIb3N0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ01pbmltdW1IZWFsdGh5SG9zdHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdNaW5pbXVtSGVhbHRoeUhvc3RzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90eXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdNaW5pbXVtSGVhbHRoeUhvc3RzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR5cGUoKSB7XG4gICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbHVlKCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnVGltZUJhc2VkQ2FuYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZXJ2YWw/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwZXJjZW50YWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RpbWVCYXNlZENhbmFyeVRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWdUaW1lQmFzZWRDYW5hcnlPdXRwdXRSZWZlcmVuY2UgfCBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnVGltZUJhc2VkQ2FuYXJ5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW50ZXJ2YWw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWwpLFxuICAgIHBlcmNlbnRhZ2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGVyY2VudGFnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWdUaW1lQmFzZWRDYW5hcnlPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RpbWVCYXNlZENhbmFyeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsID0gdGhpcy5faW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZXJjZW50YWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wZXJjZW50YWdlID0gdGhpcy5fcGVyY2VudGFnZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWdUaW1lQmFzZWRDYW5hcnkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWUuaW50ZXJ2YWw7XG4gICAgICB0aGlzLl9wZXJjZW50YWdlID0gdmFsdWUucGVyY2VudGFnZTtcbiAgICB9XG4gIH1cblxuICAvLyBpbnRlcnZhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnRlcnZhbD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnRlcnZhbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGludGVydmFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xuICB9XG5cbiAgLy8gcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZXJjZW50YWdlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwZXJjZW50YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncGVyY2VudGFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGVyY2VudGFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fcGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJjZW50YWdlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWdUaW1lQmFzZWRMaW5lYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnRlcnZhbD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlcmNlbnRhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnVGltZUJhc2VkTGluZWFyVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RpbWVCYXNlZExpbmVhck91dHB1dFJlZmVyZW5jZSB8IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWdUaW1lQmFzZWRMaW5lYXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnRlcnZhbDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbCksXG4gICAgcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wZXJjZW50YWdlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RpbWVCYXNlZExpbmVhck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnVGltZUJhc2VkTGluZWFyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW50ZXJ2YWwgPSB0aGlzLl9pbnRlcnZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlcmNlbnRhZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBlcmNlbnRhZ2UgPSB0aGlzLl9wZXJjZW50YWdlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RpbWVCYXNlZExpbmVhciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZS5pbnRlcnZhbDtcbiAgICAgIHRoaXMuX3BlcmNlbnRhZ2UgPSB2YWx1ZS5wZXJjZW50YWdlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGludGVydmFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ludGVydmFsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ludGVydmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICAvLyBwZXJjZW50YWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BlcmNlbnRhZ2U/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwZXJjZW50YWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wZXJjZW50YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl9wZXJjZW50YWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZXJjZW50YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnRhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lQmFzZWRDYW5hcnk/OiBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnVGltZUJhc2VkQ2FuYXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lQmFzZWRMaW5lYXI/OiBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnVGltZUJhc2VkTGluZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB0aW1lX2Jhc2VkX2NhbmFyeTogY29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RpbWVCYXNlZENhbmFyeVRvVGVycmFmb3JtKHN0cnVjdCEudGltZUJhc2VkQ2FuYXJ5KSxcbiAgICB0aW1lX2Jhc2VkX2xpbmVhcjogY29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RpbWVCYXNlZExpbmVhclRvVGVycmFmb3JtKHN0cnVjdCEudGltZUJhc2VkTGluZWFyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90eXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVCYXNlZENhbmFyeT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGltZUJhc2VkQ2FuYXJ5ID0gdGhpcy5fdGltZUJhc2VkQ2FuYXJ5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZUJhc2VkTGluZWFyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lQmFzZWRMaW5lYXIgPSB0aGlzLl90aW1lQmFzZWRMaW5lYXI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVCYXNlZENhbmFyeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGltZUJhc2VkTGluZWFyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZS50eXBlO1xuICAgICAgdGhpcy5fdGltZUJhc2VkQ2FuYXJ5LmludGVybmFsVmFsdWUgPSB2YWx1ZS50aW1lQmFzZWRDYW5hcnk7XG4gICAgICB0aGlzLl90aW1lQmFzZWRMaW5lYXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRpbWVCYXNlZExpbmVhcjtcbiAgICB9XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHlwZSgpIHtcbiAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyB0aW1lX2Jhc2VkX2NhbmFyeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lQmFzZWRDYW5hcnkgPSBuZXcgQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ1RpbWVCYXNlZENhbmFyeU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lX2Jhc2VkX2NhbmFyeVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lQmFzZWRDYW5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVCYXNlZENhbmFyeTtcbiAgfVxuICBwdWJsaWMgcHV0VGltZUJhc2VkQ2FuYXJ5KHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnVGltZUJhc2VkQ2FuYXJ5KSB7XG4gICAgdGhpcy5fdGltZUJhc2VkQ2FuYXJ5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lQmFzZWRDYW5hcnkoKSB7XG4gICAgdGhpcy5fdGltZUJhc2VkQ2FuYXJ5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVCYXNlZENhbmFyeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lQmFzZWRDYW5hcnkuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRpbWVfYmFzZWRfbGluZWFyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVCYXNlZExpbmVhciA9IG5ldyBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ1RyYWZmaWNSb3V0aW5nQ29uZmlnVGltZUJhc2VkTGluZWFyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRpbWVfYmFzZWRfbGluZWFyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRpbWVCYXNlZExpbmVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZUJhc2VkTGluZWFyO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lQmFzZWRMaW5lYXIodmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWdUaW1lQmFzZWRMaW5lYXIpIHtcbiAgICB0aGlzLl90aW1lQmFzZWRMaW5lYXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVCYXNlZExpbmVhcigpIHtcbiAgICB0aGlzLl90aW1lQmFzZWRMaW5lYXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZUJhc2VkTGluZWFySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVCYXNlZExpbmVhci5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19jb2RlZGVwbG95X2RlcGxveW1lbnRfY29uZmlnXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY29kZWRlcGxveV9kZXBsb3ltZW50X2NvbmZpZycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jb21wdXRlUGxhdGZvcm0gPSBjb25maWcuY29tcHV0ZVBsYXRmb3JtO1xuICAgIHRoaXMuX2RlcGxveW1lbnRDb25maWdOYW1lID0gY29uZmlnLmRlcGxveW1lbnRDb25maWdOYW1lO1xuICAgIHRoaXMuX21pbmltdW1IZWFsdGh5SG9zdHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5taW5pbXVtSGVhbHRoeUhvc3RzO1xuICAgIHRoaXMuX3RyYWZmaWNSb3V0aW5nQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcudHJhZmZpY1JvdXRpbmdDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNvbXB1dGVfcGxhdGZvcm0gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcHV0ZVBsYXRmb3JtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wdXRlUGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wdXRlX3BsYXRmb3JtJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wdXRlUGxhdGZvcm0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXB1dGVQbGF0Zm9ybSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXB1dGVQbGF0Zm9ybSgpIHtcbiAgICB0aGlzLl9jb21wdXRlUGxhdGZvcm0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXB1dGVQbGF0Zm9ybUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wdXRlUGxhdGZvcm07XG4gIH1cblxuICAvLyBkZXBsb3ltZW50X2NvbmZpZ19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRDb25maWdJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlcGxveW1lbnRfY29uZmlnX2lkJyk7XG4gIH1cblxuICAvLyBkZXBsb3ltZW50X2NvbmZpZ19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRDb25maWdOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXBsb3ltZW50Q29uZmlnTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlcGxveW1lbnRfY29uZmlnX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlcGxveW1lbnRDb25maWdOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29uZmlnTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXBsb3ltZW50Q29uZmlnTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50Q29uZmlnTmFtZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtaW5pbXVtX2hlYWx0aHlfaG9zdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluaW11bUhlYWx0aHlIb3N0cyA9IG5ldyBDb2RlZGVwbG95RGVwbG95bWVudENvbmZpZ01pbmltdW1IZWFsdGh5SG9zdHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWluaW11bV9oZWFsdGh5X2hvc3RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1pbmltdW1IZWFsdGh5SG9zdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbmltdW1IZWFsdGh5SG9zdHM7XG4gIH1cbiAgcHVibGljIHB1dE1pbmltdW1IZWFsdGh5SG9zdHModmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnTWluaW11bUhlYWx0aHlIb3N0cykge1xuICAgIHRoaXMuX21pbmltdW1IZWFsdGh5SG9zdHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbmltdW1IZWFsdGh5SG9zdHMoKSB7XG4gICAgdGhpcy5fbWluaW11bUhlYWx0aHlIb3N0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5pbXVtSGVhbHRoeUhvc3RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbmltdW1IZWFsdGh5SG9zdHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRyYWZmaWNfcm91dGluZ19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJhZmZpY1JvdXRpbmdDb25maWcgPSBuZXcgQ29kZWRlcGxveURlcGxveW1lbnRDb25maWdUcmFmZmljUm91dGluZ0NvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0cmFmZmljX3JvdXRpbmdfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRyYWZmaWNSb3V0aW5nQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl90cmFmZmljUm91dGluZ0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0VHJhZmZpY1JvdXRpbmdDb25maWcodmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWcpIHtcbiAgICB0aGlzLl90cmFmZmljUm91dGluZ0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHJhZmZpY1JvdXRpbmdDb25maWcoKSB7XG4gICAgdGhpcy5fdHJhZmZpY1JvdXRpbmdDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJhZmZpY1JvdXRpbmdDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhZmZpY1JvdXRpbmdDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcHV0ZV9wbGF0Zm9ybTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29tcHV0ZVBsYXRmb3JtKSxcbiAgICAgIGRlcGxveW1lbnRfY29uZmlnX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlcGxveW1lbnRDb25maWdOYW1lKSxcbiAgICAgIG1pbmltdW1faGVhbHRoeV9ob3N0czogY29kZWRlcGxveURlcGxveW1lbnRDb25maWdNaW5pbXVtSGVhbHRoeUhvc3RzVG9UZXJyYWZvcm0odGhpcy5fbWluaW11bUhlYWx0aHlIb3N0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHRyYWZmaWNfcm91dGluZ19jb25maWc6IGNvZGVkZXBsb3lEZXBsb3ltZW50Q29uZmlnVHJhZmZpY1JvdXRpbmdDb25maWdUb1RlcnJhZm9ybSh0aGlzLl90cmFmZmljUm91dGluZ0NvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=