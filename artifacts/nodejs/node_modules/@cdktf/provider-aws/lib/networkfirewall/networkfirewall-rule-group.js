"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkfirewallRuleGroup = exports.NetworkfirewallRuleGroupRuleGroupOutputReference = exports.networkfirewallRuleGroupRuleGroupToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference = exports.networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform = exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference = exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform = exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference = exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        definition: cdktf.listMapper(cdktf.stringToTerraform)(struct.definition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference extends cdktf.ComplexObject {
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
        if (this._definition) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._definition = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._definition = value.definition;
        }
    }
    /**
     * @stability stable
     */
    get definition() {
        return this.getListAttribute('definition');
    }
    /**
     * @stability stable
     */
    set definition(value) {
        this._definition = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get definitionInput() {
        return this._definition;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference = NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference;
_a = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference[_a] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        ip_set: networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct.ipSet),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform;
function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        definition: cdktf.listMapper(cdktf.stringToTerraform)(struct.definition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference extends cdktf.ComplexObject {
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
        if (this._definition) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._definition = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._definition = value.definition;
        }
    }
    /**
     * @stability stable
     */
    get definition() {
        return this.getListAttribute('definition');
    }
    /**
     * @stability stable
     */
    set definition(value) {
        this._definition = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get definitionInput() {
        return this._definition;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference = NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference;
_b = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference[_b] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        port_set: networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct.portSet),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform;
function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform)(struct.ipSets),
        port_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform)(struct.portSets),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference extends cdktf.ComplexObject {
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
        if (this._ipSets) {
            hasAnyValues = true;
            internalValueResult.ipSets = this._ipSets;
        }
        if (this._portSets) {
            hasAnyValues = true;
            internalValueResult.portSets = this._portSets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._ipSets = undefined;
            this._portSets = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._ipSets = value.ipSets;
            this._portSets = value.portSets;
        }
    }
    /**
     * @stability stable
     */
    get ipSets() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ip_sets');
    }
    /**
     * @stability stable
     */
    set ipSets(value) {
        this._ipSets = value;
    }
    /**
     * @stability stable
     */
    resetIpSets() {
        this._ipSets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipSetsInput() {
        return this._ipSets;
    }
    /**
     * @stability stable
     */
    get portSets() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('port_sets');
    }
    /**
     * @stability stable
     */
    set portSets(value) {
        this._portSets = value;
    }
    /**
     * @stability stable
     */
    resetPortSets() {
        this._portSets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portSetsInput() {
        return this._portSets;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference = NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference[_c] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        generated_rules_type: cdktf.stringToTerraform(struct.generatedRulesType),
        target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.targetTypes),
        targets: cdktf.listMapper(cdktf.stringToTerraform)(struct.targets),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference extends cdktf.ComplexObject {
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
        if (this._generatedRulesType) {
            hasAnyValues = true;
            internalValueResult.generatedRulesType = this._generatedRulesType;
        }
        if (this._targetTypes) {
            hasAnyValues = true;
            internalValueResult.targetTypes = this._targetTypes;
        }
        if (this._targets) {
            hasAnyValues = true;
            internalValueResult.targets = this._targets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._generatedRulesType = undefined;
            this._targetTypes = undefined;
            this._targets = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._generatedRulesType = value.generatedRulesType;
            this._targetTypes = value.targetTypes;
            this._targets = value.targets;
        }
    }
    /**
     * @stability stable
     */
    get generatedRulesType() {
        return this.getStringAttribute('generated_rules_type');
    }
    /**
     * @stability stable
     */
    set generatedRulesType(value) {
        this._generatedRulesType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get generatedRulesTypeInput() {
        return this._generatedRulesType;
    }
    /**
     * @stability stable
     */
    get targetTypes() {
        return this.getListAttribute('target_types');
    }
    /**
     * @stability stable
     */
    set targetTypes(value) {
        this._targetTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetTypesInput() {
        return this._targetTypes;
    }
    /**
     * @stability stable
     */
    get targets() {
        return this.getListAttribute('targets');
    }
    /**
     * @stability stable
     */
    set targets(value) {
        this._targets = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetsInput() {
        return this._targets;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference;
_d = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference[_d] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
        destination_port: cdktf.stringToTerraform(struct.destinationPort),
        direction: cdktf.stringToTerraform(struct.direction),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source: cdktf.stringToTerraform(struct.source),
        source_port: cdktf.stringToTerraform(struct.sourcePort),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._destination) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._destinationPort) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort;
        }
        if (this._direction) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._protocol) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._source) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._sourcePort) {
            hasAnyValues = true;
            internalValueResult.sourcePort = this._sourcePort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destination = undefined;
            this._destinationPort = undefined;
            this._direction = undefined;
            this._protocol = undefined;
            this._source = undefined;
            this._sourcePort = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destination = value.destination;
            this._destinationPort = value.destinationPort;
            this._direction = value.direction;
            this._protocol = value.protocol;
            this._source = value.source;
            this._sourcePort = value.sourcePort;
        }
    }
    /**
     * @stability stable
     */
    get destination() {
        return this.getStringAttribute('destination');
    }
    /**
     * @stability stable
     */
    set destination(value) {
        this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationInput() {
        return this._destination;
    }
    /**
     * @stability stable
     */
    get destinationPort() {
        return this.getStringAttribute('destination_port');
    }
    /**
     * @stability stable
     */
    set destinationPort(value) {
        this._destinationPort = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationPortInput() {
        return this._destinationPort;
    }
    /**
     * @stability stable
     */
    get direction() {
        return this.getStringAttribute('direction');
    }
    /**
     * @stability stable
     */
    set direction(value) {
        this._direction = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get directionInput() {
        return this._direction;
    }
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    /**
     * @stability stable
     */
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protocolInput() {
        return this._protocol;
    }
    /**
     * @stability stable
     */
    get source() {
        return this.getStringAttribute('source');
    }
    /**
     * @stability stable
     */
    set source(value) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceInput() {
        return this._source;
    }
    /**
     * @stability stable
     */
    get sourcePort() {
        return this.getStringAttribute('source_port');
    }
    /**
     * @stability stable
     */
    set sourcePort(value) {
        this._sourcePort = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourcePortInput() {
        return this._sourcePort;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference;
_e = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference[_e] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        keyword: cdktf.stringToTerraform(struct.keyword),
        settings: cdktf.listMapper(cdktf.stringToTerraform)(struct.settings),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        header: networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct.header),
        rule_option: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform)(struct.ruleOption),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimension: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct.dimension),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
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
        if (this._dimension) {
            hasAnyValues = true;
            internalValueResult.dimension = this._dimension;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dimension = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimension = value.dimension;
        }
    }
    /**
     * @stability stable
     */
    get dimension() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('dimension');
    }
    /**
     * @stability stable
     */
    set dimension(value) {
        this._dimension = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dimensionInput() {
        return this._dimension;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference;
_f = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference[_f] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        publish_metric_action: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct.publishMetricAction),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // publish_metric_action - computed: false, optional: false, required: true
        this._publishMetricAction = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _p, _q;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_p = this._publishMetricAction) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.publishMetricAction = (_q = this._publishMetricAction) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._publishMetricAction.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._publishMetricAction.internalValue = value.publishMetricAction;
        }
    }
    /**
     * @stability stable
     */
    get publishMetricAction() {
        return this._publishMetricAction;
    }
    /**
     * @stability stable
     */
    putPublishMetricAction(value) {
        this._publishMetricAction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publishMetricActionInput() {
        return this._publishMetricAction.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference;
_g = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference[_g] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_name: cdktf.stringToTerraform(struct.actionName),
        action_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct.actionDefinition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address_definition: cdktf.stringToTerraform(struct.addressDefinition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address_definition: cdktf.stringToTerraform(struct.addressDefinition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        flags: cdktf.listMapper(cdktf.stringToTerraform)(struct.flags),
        masks: cdktf.listMapper(cdktf.stringToTerraform)(struct.masks),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        protocols: cdktf.listMapper(cdktf.numberToTerraform)(struct.protocols),
        destination: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform)(struct.destination),
        destination_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform)(struct.destinationPort),
        source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform)(struct.source),
        source_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform)(struct.sourcePort),
        tcp_flag: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform)(struct.tcpFlag),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference extends cdktf.ComplexObject {
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
        if (this._protocols) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        if (this._destination) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._destinationPort) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort;
        }
        if (this._source) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._sourcePort) {
            hasAnyValues = true;
            internalValueResult.sourcePort = this._sourcePort;
        }
        if (this._tcpFlag) {
            hasAnyValues = true;
            internalValueResult.tcpFlag = this._tcpFlag;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._protocols = undefined;
            this._destination = undefined;
            this._destinationPort = undefined;
            this._source = undefined;
            this._sourcePort = undefined;
            this._tcpFlag = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._protocols = value.protocols;
            this._destination = value.destination;
            this._destinationPort = value.destinationPort;
            this._source = value.source;
            this._sourcePort = value.sourcePort;
            this._tcpFlag = value.tcpFlag;
        }
    }
    /**
     * @stability stable
     */
    get protocols() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('protocols');
    }
    /**
     * @stability stable
     */
    set protocols(value) {
        this._protocols = value;
    }
    /**
     * @stability stable
     */
    resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protocolsInput() {
        return this._protocols;
    }
    /**
     * @stability stable
     */
    get destination() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('destination');
    }
    /**
     * @stability stable
     */
    set destination(value) {
        this._destination = value;
    }
    /**
     * @stability stable
     */
    resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationInput() {
        return this._destination;
    }
    /**
     * @stability stable
     */
    get destinationPort() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('destination_port');
    }
    /**
     * @stability stable
     */
    set destinationPort(value) {
        this._destinationPort = value;
    }
    /**
     * @stability stable
     */
    resetDestinationPort() {
        this._destinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationPortInput() {
        return this._destinationPort;
    }
    /**
     * @stability stable
     */
    get source() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('source');
    }
    /**
     * @stability stable
     */
    set source(value) {
        this._source = value;
    }
    /**
     * @stability stable
     */
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceInput() {
        return this._source;
    }
    /**
     * @stability stable
     */
    get sourcePort() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('source_port');
    }
    /**
     * @stability stable
     */
    set sourcePort(value) {
        this._sourcePort = value;
    }
    /**
     * @stability stable
     */
    resetSourcePort() {
        this._sourcePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourcePortInput() {
        return this._sourcePort;
    }
    /**
     * @stability stable
     */
    get tcpFlag() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tcp_flag');
    }
    /**
     * @stability stable
     */
    set tcpFlag(value) {
        this._tcpFlag = value;
    }
    /**
     * @stability stable
     */
    resetTcpFlag() {
        this._tcpFlag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tcpFlagInput() {
        return this._tcpFlag;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference;
_h = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference[_h] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        match_attributes: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct.matchAttributes),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // match_attributes - computed: false, optional: false, required: true
        this._matchAttributes = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference(this, "match_attributes", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _p, _q;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._actions) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if ((_p = this._matchAttributes) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.matchAttributes = (_q = this._matchAttributes) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._actions = undefined;
            this._matchAttributes.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._actions = value.actions;
            this._matchAttributes.internalValue = value.matchAttributes;
        }
    }
    /**
     * @stability stable
     */
    get actions() {
        return this.getListAttribute('actions');
    }
    /**
     * @stability stable
     */
    set actions(value) {
        this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionsInput() {
        return this._actions;
    }
    /**
     * @stability stable
     */
    get matchAttributes() {
        return this._matchAttributes;
    }
    /**
     * @stability stable
     */
    putMatchAttributes(value) {
        this._matchAttributes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get matchAttributesInput() {
        return this._matchAttributes.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference;
_j = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference[_j] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        rule_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct.ruleDefinition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform)(struct.customAction),
        stateless_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform)(struct.statelessRule),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference extends cdktf.ComplexObject {
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
        if (this._customAction) {
            hasAnyValues = true;
            internalValueResult.customAction = this._customAction;
        }
        if (this._statelessRule) {
            hasAnyValues = true;
            internalValueResult.statelessRule = this._statelessRule;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._customAction = undefined;
            this._statelessRule = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._customAction = value.customAction;
            this._statelessRule = value.statelessRule;
        }
    }
    /**
     * @stability stable
     */
    get customAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('custom_action');
    }
    /**
     * @stability stable
     */
    set customAction(value) {
        this._customAction = value;
    }
    /**
     * @stability stable
     */
    resetCustomAction() {
        this._customAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customActionInput() {
        return this._customAction;
    }
    /**
     * @stability stable
     */
    get statelessRule() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stateless_rule');
    }
    /**
     * @stability stable
     */
    set statelessRule(value) {
        this._statelessRule = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statelessRuleInput() {
        return this._statelessRule;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference;
_k = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference[_k] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        rules_string: cdktf.stringToTerraform(struct.rulesString),
        rules_source_list: networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct.rulesSourceList),
        stateful_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform)(struct.statefulRule),
        stateless_rules_and_custom_actions: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct.statelessRulesAndCustomActions),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // rules_source_list - computed: false, optional: true, required: false
        this._rulesSourceList = new NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference(this, "rules_source_list", true);
        // stateless_rules_and_custom_actions - computed: false, optional: true, required: false
        this._statelessRulesAndCustomActions = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(this, "stateless_rules_and_custom_actions", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _p, _q, _r, _s;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._rulesString) {
            hasAnyValues = true;
            internalValueResult.rulesString = this._rulesString;
        }
        if ((_p = this._rulesSourceList) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.rulesSourceList = (_q = this._rulesSourceList) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        if (this._statefulRule) {
            hasAnyValues = true;
            internalValueResult.statefulRule = this._statefulRule;
        }
        if ((_r = this._statelessRulesAndCustomActions) === null || _r === void 0 ? void 0 : _r.internalValue) {
            hasAnyValues = true;
            internalValueResult.statelessRulesAndCustomActions = (_s = this._statelessRulesAndCustomActions) === null || _s === void 0 ? void 0 : _s.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._rulesString = undefined;
            this._rulesSourceList.internalValue = undefined;
            this._statefulRule = undefined;
            this._statelessRulesAndCustomActions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._rulesString = value.rulesString;
            this._rulesSourceList.internalValue = value.rulesSourceList;
            this._statefulRule = value.statefulRule;
            this._statelessRulesAndCustomActions.internalValue = value.statelessRulesAndCustomActions;
        }
    }
    /**
     * @stability stable
     */
    get rulesString() {
        return this.getStringAttribute('rules_string');
    }
    /**
     * @stability stable
     */
    set rulesString(value) {
        this._rulesString = value;
    }
    /**
     * @stability stable
     */
    resetRulesString() {
        this._rulesString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rulesStringInput() {
        return this._rulesString;
    }
    /**
     * @stability stable
     */
    get rulesSourceList() {
        return this._rulesSourceList;
    }
    /**
     * @stability stable
     */
    putRulesSourceList(value) {
        this._rulesSourceList.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRulesSourceList() {
        this._rulesSourceList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rulesSourceListInput() {
        return this._rulesSourceList.internalValue;
    }
    /**
     * @stability stable
     */
    get statefulRule() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stateful_rule');
    }
    /**
     * @stability stable
     */
    set statefulRule(value) {
        this._statefulRule = value;
    }
    /**
     * @stability stable
     */
    resetStatefulRule() {
        this._statefulRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statefulRuleInput() {
        return this._statefulRule;
    }
    /**
     * @stability stable
     */
    get statelessRulesAndCustomActions() {
        return this._statelessRulesAndCustomActions;
    }
    /**
     * @stability stable
     */
    putStatelessRulesAndCustomActions(value) {
        this._statelessRulesAndCustomActions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetStatelessRulesAndCustomActions() {
        this._statelessRulesAndCustomActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statelessRulesAndCustomActionsInput() {
        return this._statelessRulesAndCustomActions.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference;
_l = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference[_l] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference", version: "3.0.1" };
function networkfirewallRuleGroupRuleGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        rule_variables: networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct.ruleVariables),
        rules_source: networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct.rulesSource),
    };
}
exports.networkfirewallRuleGroupRuleGroupToTerraform = networkfirewallRuleGroupRuleGroupToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallRuleGroupRuleGroupOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // rule_variables - computed: false, optional: true, required: false
        this._ruleVariables = new NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(this, "rule_variables", true);
        // rules_source - computed: false, optional: false, required: true
        this._rulesSource = new NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(this, "rules_source", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _p, _q, _r, _s;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_p = this._ruleVariables) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.ruleVariables = (_q = this._ruleVariables) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        if ((_r = this._rulesSource) === null || _r === void 0 ? void 0 : _r.internalValue) {
            hasAnyValues = true;
            internalValueResult.rulesSource = (_s = this._rulesSource) === null || _s === void 0 ? void 0 : _s.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._ruleVariables.internalValue = undefined;
            this._rulesSource.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._ruleVariables.internalValue = value.ruleVariables;
            this._rulesSource.internalValue = value.rulesSource;
        }
    }
    /**
     * @stability stable
     */
    get ruleVariables() {
        return this._ruleVariables;
    }
    /**
     * @stability stable
     */
    putRuleVariables(value) {
        this._ruleVariables.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRuleVariables() {
        this._ruleVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ruleVariablesInput() {
        return this._ruleVariables.internalValue;
    }
    /**
     * @stability stable
     */
    get rulesSource() {
        return this._rulesSource;
    }
    /**
     * @stability stable
     */
    putRulesSource(value) {
        this._rulesSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rulesSourceInput() {
        return this._rulesSource.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupOutputReference = NetworkfirewallRuleGroupRuleGroupOutputReference;
_m = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupOutputReference[_m] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroupRuleGroupOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group}.
 *
 * @stability stable
 */
class NetworkfirewallRuleGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_networkfirewall_rule_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // rule_group - computed: false, optional: true, required: false
        this._ruleGroup = new NetworkfirewallRuleGroupRuleGroupOutputReference(this, "rule_group", true);
        this._capacity = config.capacity;
        this._description = config.description;
        this._name = config.name;
        this._rules = config.rules;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._type = config.type;
        this._ruleGroup.internalValue = config.ruleGroup;
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
    /**
     * @stability stable
     */
    get capacity() {
        return this.getNumberAttribute('capacity');
    }
    /**
     * @stability stable
     */
    set capacity(value) {
        this._capacity = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get capacityInput() {
        return this._capacity;
    }
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    /**
     * @stability stable
     */
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
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
    get rules() {
        return this.getStringAttribute('rules');
    }
    /**
     * @stability stable
     */
    set rules(value) {
        this._rules = value;
    }
    /**
     * @stability stable
     */
    resetRules() {
        this._rules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rulesInput() {
        return this._rules;
    }
    /**
     * @stability stable
     */
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    /**
     * @stability stable
     */
    set tags(value) {
        this._tags = value;
    }
    /**
     * @stability stable
     */
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagsInput() {
        return this._tags;
    }
    /**
     * @stability stable
     */
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    /**
     * @stability stable
     */
    set tagsAll(value) {
        this._tagsAll = value;
    }
    /**
     * @stability stable
     */
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagsAllInput() {
        return this._tagsAll;
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
    // update_token - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get updateToken() {
        return this.getStringAttribute('update_token');
    }
    /**
     * @stability stable
     */
    get ruleGroup() {
        return this._ruleGroup;
    }
    /**
     * @stability stable
     */
    putRuleGroup(value) {
        this._ruleGroup.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRuleGroup() {
        this._ruleGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ruleGroupInput() {
        return this._ruleGroup.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            capacity: cdktf.numberToTerraform(this._capacity),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            rules: cdktf.stringToTerraform(this._rules),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            rule_group: networkfirewallRuleGroupRuleGroupToTerraform(this._ruleGroup.internalValue),
        };
    }
}
exports.NetworkfirewallRuleGroup = NetworkfirewallRuleGroup;
_o = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroup[_o] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallRuleGroup", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
NetworkfirewallRuleGroup.tfResourceType = "aws_networkfirewall_rule_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2ZpcmV3YWxsLXJ1bGUtZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbmV0d29ya2ZpcmV3YWxsL25ldHdvcmtmaXJld2FsbC1ydWxlLWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBMEIvQixTQUFnQixvRUFBb0UsQ0FBQyxNQUE2STtJQUNoTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDMUUsQ0FBQTtBQUNILENBQUM7QUFSRCxvSkFRQzs7OztBQUVELE1BQWEsd0VBQXlFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJL0csWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELE9BQU8s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YWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXBhY2l0eTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcnVsZXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGVHcm91cD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmaW5pdGlvbjogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzSXBTZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzSXBTZXRPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzSXBTZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWZpbml0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlZmluaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzSXBTZXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWZpbml0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWZpbml0aW9uID0gdGhpcy5fZGVmaW5pdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNJcFNldCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlZmluaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RlZmluaXRpb24gPSB2YWx1ZS5kZWZpbml0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmluaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmaW5pdGlvbj86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBkZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2RlZmluaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmluaXRpb24odmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZGVmaW5pdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZpbml0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmluaXRpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpcFNldDogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c1RvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICBpcF9zZXQ6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNJcFNldFRvVGVycmFmb3JtKHN0cnVjdCEuaXBTZXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmluaXRpb246IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldFRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1BvcnRTZXRPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVmaW5pdGlvbjogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kZWZpbml0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWZpbml0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWZpbml0aW9uID0gdGhpcy5fZGVmaW5pdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1BvcnRTZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZWZpbml0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZWZpbml0aW9uID0gdmFsdWUuZGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBkZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RlZmluaXRpb24/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkZWZpbml0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZpbml0aW9uKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2RlZmluaXRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmaW5pdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZpbml0aW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0U2V0OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgcG9ydF9zZXQ6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1BvcnRTZXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnRTZXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXBTZXRzPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnRTZXRzPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc091dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpcF9zZXRzOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNUb1RlcnJhZm9ybSkoc3RydWN0IS5pcFNldHMpLFxuICAgIHBvcnRfc2V0czogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNUb1RlcnJhZm9ybSkoc3RydWN0IS5wb3J0U2V0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faXBTZXRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pcFNldHMgPSB0aGlzLl9pcFNldHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0U2V0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydFNldHMgPSB0aGlzLl9wb3J0U2V0cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pcFNldHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0U2V0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faXBTZXRzID0gdmFsdWUuaXBTZXRzO1xuICAgICAgdGhpcy5fcG9ydFNldHMgPSB2YWx1ZS5wb3J0U2V0cztcbiAgICB9XG4gIH1cblxuICAvLyBpcF9zZXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwU2V0cz86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNbXTsgXG4gIHB1YmxpYyBnZXQgaXBTZXRzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpcF9zZXRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaXBTZXRzKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzW10pIHtcbiAgICB0aGlzLl9pcFNldHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcFNldHMoKSB7XG4gICAgdGhpcy5faXBTZXRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcFNldHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXBTZXRzO1xuICB9XG5cbiAgLy8gcG9ydF9zZXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvcnRTZXRzPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzW107IFxuICBwdWJsaWMgZ2V0IHBvcnRTZXRzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwb3J0X3NldHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0U2V0cyh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzW10pIHtcbiAgICB0aGlzLl9wb3J0U2V0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnRTZXRzKCkge1xuICAgIHRoaXMuX3BvcnRTZXRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0U2V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0U2V0cztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ2VuZXJhdGVkUnVsZXNUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRUeXBlczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldHM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdE91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2VuZXJhdGVkX3J1bGVzX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2VuZXJhdGVkUnVsZXNUeXBlKSxcbiAgICB0YXJnZXRfdHlwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFyZ2V0VHlwZXMpLFxuICAgIHRhcmdldHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFyZ2V0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9nZW5lcmF0ZWRSdWxlc1R5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmdlbmVyYXRlZFJ1bGVzVHlwZSA9IHRoaXMuX2dlbmVyYXRlZFJ1bGVzVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldFR5cGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRUeXBlcyA9IHRoaXMuX3RhcmdldFR5cGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0cyA9IHRoaXMuX3RhcmdldHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dlbmVyYXRlZFJ1bGVzVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldFR5cGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZ2VuZXJhdGVkUnVsZXNUeXBlID0gdmFsdWUuZ2VuZXJhdGVkUnVsZXNUeXBlO1xuICAgICAgdGhpcy5fdGFyZ2V0VHlwZXMgPSB2YWx1ZS50YXJnZXRUeXBlcztcbiAgICAgIHRoaXMuX3RhcmdldHMgPSB2YWx1ZS50YXJnZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdlbmVyYXRlZF9ydWxlc190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2dlbmVyYXRlZFJ1bGVzVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGVkUnVsZXNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2VuZXJhdGVkX3J1bGVzX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdlbmVyYXRlZFJ1bGVzVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2VuZXJhdGVkUnVsZXNUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdlbmVyYXRlZFJ1bGVzVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZWRSdWxlc1R5cGU7XG4gIH1cblxuICAvLyB0YXJnZXRfdHlwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFyZ2V0VHlwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndGFyZ2V0X3R5cGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXRUeXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90YXJnZXRUeXBlcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRUeXBlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRUeXBlcztcbiAgfVxuXG4gIC8vIHRhcmdldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFyZ2V0cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0YXJnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RhcmdldHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGFyZ2V0cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uUG9ydDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlyZWN0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvdG9jb2w6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZVBvcnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVIZWFkZXJPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZUhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgICBkZXN0aW5hdGlvbl9wb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uUG9ydCksXG4gICAgZGlyZWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpcmVjdGlvbiksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHNvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2UpLFxuICAgIHNvdXJjZV9wb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZUhlYWRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZUhlYWRlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVzdGluYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlc3RpbmF0aW9uID0gdGhpcy5fZGVzdGluYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXN0aW5hdGlvblBvcnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlc3RpbmF0aW9uUG9ydCA9IHRoaXMuX2Rlc3RpbmF0aW9uUG9ydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RpcmVjdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGlyZWN0aW9uID0gdGhpcy5fZGlyZWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvdG9jb2wpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb3RvY29sID0gdGhpcy5fcHJvdG9jb2w7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZSA9IHRoaXMuX3NvdXJjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZVBvcnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZVBvcnQgPSB0aGlzLl9zb3VyY2VQb3J0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVIZWFkZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uUG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlUG9ydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVzdGluYXRpb24gPSB2YWx1ZS5kZXN0aW5hdGlvbjtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uUG9ydCA9IHZhbHVlLmRlc3RpbmF0aW9uUG9ydDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbHVlLmRpcmVjdGlvbjtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWUucHJvdG9jb2w7XG4gICAgICB0aGlzLl9zb3VyY2UgPSB2YWx1ZS5zb3VyY2U7XG4gICAgICB0aGlzLl9zb3VyY2VQb3J0ID0gdmFsdWUuc291cmNlUG9ydDtcbiAgICB9XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvblBvcnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc3RpbmF0aW9uUG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Qb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvblBvcnQ7XG4gIH1cblxuICAvLyBkaXJlY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpcmVjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpcmVjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLy8gc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICB9XG5cbiAgLy8gc291cmNlX3BvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc291cmNlUG9ydD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9wb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VQb3J0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VQb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZVBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlUG9ydDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXl3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2V0dGluZ3M/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleXdvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5d29yZCksXG4gICAgc2V0dGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2V0dGluZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVyOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZUhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBydWxlT3B0aW9uOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb25bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uKSxcbiAgICBoZWFkZXI6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFkZXIpLFxuICAgIHJ1bGVfb3B0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnJ1bGVPcHRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGltZW5zaW9uOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbk91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaW1lbnNpb246IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmRpbWVuc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGltZW5zaW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGltZW5zaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kaW1lbnNpb24gPSB2YWx1ZS5kaW1lbnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZGltZW5zaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RpbWVuc2lvbj86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25bXTsgXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkaW1lbnNpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkaW1lbnNpb24odmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25bXSkge1xuICAgIHRoaXMuX2RpbWVuc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaW1lbnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHVibGlzaE1ldHJpY0FjdGlvbjogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHB1Ymxpc2hfbWV0cmljX2FjdGlvbjogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucHVibGlzaE1ldHJpY0FjdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnB1Ymxpc2hNZXRyaWNBY3Rpb24gPSB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHVibGlzaE1ldHJpY0FjdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wdWJsaXNoTWV0cmljQWN0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIHB1Ymxpc2hfbWV0cmljX2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wdWJsaXNoTWV0cmljQWN0aW9uID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicHVibGlzaF9tZXRyaWNfYWN0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHB1Ymxpc2hNZXRyaWNBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb247XG4gIH1cbiAgcHVibGljIHB1dFB1Ymxpc2hNZXRyaWNBY3Rpb24odmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24pIHtcbiAgICB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHVibGlzaE1ldHJpY0FjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb25EZWZpbml0aW9uOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uTmFtZSksXG4gICAgYWN0aW9uX2RlZmluaXRpb246IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uRGVmaW5pdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkZHJlc3NEZWZpbml0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkZHJlc3NfZGVmaW5pdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZGRyZXNzRGVmaW5pdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmcm9tUG9ydDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b1BvcnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydFRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZnJvbV9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb21Qb3J0KSxcbiAgICB0b19wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvUG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhZGRyZXNzRGVmaW5pdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkZHJlc3NfZGVmaW5pdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZGRyZXNzRGVmaW5pdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnJvbVBvcnQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdG9Qb3J0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0VG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZnJvbV9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb21Qb3J0KSxcbiAgICB0b19wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvUG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RjcEZsYWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZsYWdzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXNrcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZmxhZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmxhZ3MpLFxuICAgIG1hc2tzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1hc2tzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3RvY29scz86IG51bWJlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uUG9ydD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VQb3J0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGNwRmxhZz86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc091dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvdG9jb2xzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb3RvY29scyksXG4gICAgZGVzdGluYXRpb246IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgICBkZXN0aW5hdGlvbl9wb3J0OiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0VG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVzdGluYXRpb25Qb3J0KSxcbiAgICBzb3VyY2U6IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VUb1RlcnJhZm9ybSkoc3RydWN0IS5zb3VyY2UpLFxuICAgIHNvdXJjZV9wb3J0OiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlUG9ydFRvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZVBvcnQpLFxuICAgIHRjcF9mbGFnOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRjcEZsYWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJvdG9jb2xzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm90b2NvbHMgPSB0aGlzLl9wcm90b2NvbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXN0aW5hdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb24gPSB0aGlzLl9kZXN0aW5hdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rlc3RpbmF0aW9uUG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb25Qb3J0ID0gdGhpcy5fZGVzdGluYXRpb25Qb3J0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2UgPSB0aGlzLl9zb3VyY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VQb3J0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2VQb3J0ID0gdGhpcy5fc291cmNlUG9ydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RjcEZsYWcpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRjcEZsYWcgPSB0aGlzLl90Y3BGbGFnO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wcm90b2NvbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uUG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZVBvcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90Y3BGbGFnID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wcm90b2NvbHMgPSB2YWx1ZS5wcm90b2NvbHM7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHZhbHVlLmRlc3RpbmF0aW9uO1xuICAgICAgdGhpcy5fZGVzdGluYXRpb25Qb3J0ID0gdmFsdWUuZGVzdGluYXRpb25Qb3J0O1xuICAgICAgdGhpcy5fc291cmNlID0gdmFsdWUuc291cmNlO1xuICAgICAgdGhpcy5fc291cmNlUG9ydCA9IHZhbHVlLnNvdXJjZVBvcnQ7XG4gICAgICB0aGlzLl90Y3BGbGFnID0gdmFsdWUudGNwRmxhZztcbiAgICB9XG4gIH1cblxuICAvLyBwcm90b2NvbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvdG9jb2xzPzogbnVtYmVyW107IFxuICBwdWJsaWMgZ2V0IHByb3RvY29scygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvdG9jb2xzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2xzKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3Byb3RvY29scyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3RvY29scygpIHtcbiAgICB0aGlzLl9wcm90b2NvbHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm90b2NvbHM7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbj86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25bXTsgXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb24odmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25bXSkge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzdGluYXRpb24oKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvblBvcnQ/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydFtdOyBcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvblBvcnQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3BvcnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkZXN0aW5hdGlvblBvcnQodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0W10pIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvblBvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXN0aW5hdGlvblBvcnQoKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Qb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXN0aW5hdGlvblBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25Qb3J0O1xuICB9XG5cbiAgLy8gc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZT86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlW107IFxuICBwdWJsaWMgZ2V0IHNvdXJjZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVtdKSB7XG4gICAgdGhpcy5fc291cmNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlKCkge1xuICAgIHRoaXMuX3NvdXJjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZVBvcnQ/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRbXTsgXG4gIHB1YmxpYyBnZXQgc291cmNlUG9ydCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3BvcnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VQb3J0KHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRbXSkge1xuICAgIHRoaXMuX3NvdXJjZVBvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VQb3J0KCkge1xuICAgIHRoaXMuX3NvdXJjZVBvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZVBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlUG9ydDtcbiAgfVxuXG4gIC8vIHRjcF9mbGFnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RjcEZsYWc/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RjcEZsYWdbXTsgXG4gIHB1YmxpYyBnZXQgdGNwRmxhZygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGNwX2ZsYWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0Y3BGbGFnKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RjcEZsYWdbXSkge1xuICAgIHRoaXMuX3RjcEZsYWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUY3BGbGFnKCkge1xuICAgIHRoaXMuX3RjcEZsYWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRjcEZsYWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGNwRmxhZztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvbnM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hdGNoQXR0cmlidXRlczogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFjdGlvbnMpLFxuICAgIG1hdGNoX2F0dHJpYnV0ZXM6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVG9UZXJyYWZvcm0oc3RydWN0IS5tYXRjaEF0dHJpYnV0ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWN0aW9ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWN0aW9ucyA9IHRoaXMuX2FjdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXRjaEF0dHJpYnV0ZXM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hdGNoQXR0cmlidXRlcyA9IHRoaXMuX21hdGNoQXR0cmlidXRlcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hdGNoQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY3Rpb25zID0gdmFsdWUuYWN0aW9ucztcbiAgICAgIHRoaXMuX21hdGNoQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWF0Y2hBdHRyaWJ1dGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FjdGlvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3Rpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnM7XG4gIH1cblxuICAvLyBtYXRjaF9hdHRyaWJ1dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21hdGNoQXR0cmlidXRlcyA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtYXRjaF9hdHRyaWJ1dGVzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1hdGNoQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hBdHRyaWJ1dGVzO1xuICB9XG4gIHB1YmxpYyBwdXRNYXRjaEF0dHJpYnV0ZXModmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzKSB7XG4gICAgdGhpcy5fbWF0Y2hBdHRyaWJ1dGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF0Y2hBdHRyaWJ1dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBydWxlRGVmaW5pdGlvbjogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcmlvcml0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gICAgcnVsZV9kZWZpbml0aW9uOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucnVsZURlZmluaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUFjdGlvbj86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGVsZXNzUnVsZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjdXN0b21fYWN0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuY3VzdG9tQWN0aW9uKSxcbiAgICBzdGF0ZWxlc3NfcnVsZTogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVUb1RlcnJhZm9ybSkoc3RydWN0IS5zdGF0ZWxlc3NSdWxlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2N1c3RvbUFjdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3VzdG9tQWN0aW9uID0gdGhpcy5fY3VzdG9tQWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGVsZXNzUnVsZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGVsZXNzUnVsZSA9IHRoaXMuX3N0YXRlbGVzc1J1bGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2N1c3RvbUFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXRlbGVzc1J1bGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2N1c3RvbUFjdGlvbiA9IHZhbHVlLmN1c3RvbUFjdGlvbjtcbiAgICAgIHRoaXMuX3N0YXRlbGVzc1J1bGUgPSB2YWx1ZS5zdGF0ZWxlc3NSdWxlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGN1c3RvbV9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tQWN0aW9uPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25bXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tQWN0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjdXN0b21fYWN0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tQWN0aW9uKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbltdKSB7XG4gICAgdGhpcy5fY3VzdG9tQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tQWN0aW9uKCkge1xuICAgIHRoaXMuX2N1c3RvbUFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUFjdGlvbjtcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19ydWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXRlbGVzc1J1bGU/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVbXTsgXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzUnVsZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RhdGVsZXNzX3J1bGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0ZWxlc3NSdWxlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVbXSkge1xuICAgIHRoaXMuX3N0YXRlbGVzc1J1bGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzUnVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWxlc3NSdWxlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGVzU3RyaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGVzU291cmNlTGlzdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRlZnVsUnVsZT86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBydWxlc19zdHJpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucnVsZXNTdHJpbmcpLFxuICAgIHJ1bGVzX3NvdXJjZV9saXN0OiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdFRvVGVycmFmb3JtKHN0cnVjdCEucnVsZXNTb3VyY2VMaXN0KSxcbiAgICBzdGF0ZWZ1bF9ydWxlOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RhdGVmdWxSdWxlKSxcbiAgICBzdGF0ZWxlc3NfcnVsZXNfYW5kX2N1c3RvbV9hY3Rpb25zOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3J1bGVzU3RyaW5nKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydWxlc1N0cmluZyA9IHRoaXMuX3J1bGVzU3RyaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcnVsZXNTb3VyY2VMaXN0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydWxlc1NvdXJjZUxpc3QgPSB0aGlzLl9ydWxlc1NvdXJjZUxpc3Q/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0ZWZ1bFJ1bGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlZnVsUnVsZSA9IHRoaXMuX3N0YXRlZnVsUnVsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zID0gdGhpcy5fc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ydWxlc1N0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3J1bGVzU291cmNlTGlzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdGVmdWxSdWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3J1bGVzU3RyaW5nID0gdmFsdWUucnVsZXNTdHJpbmc7XG4gICAgICB0aGlzLl9ydWxlc1NvdXJjZUxpc3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJ1bGVzU291cmNlTGlzdDtcbiAgICAgIHRoaXMuX3N0YXRlZnVsUnVsZSA9IHZhbHVlLnN0YXRlZnVsUnVsZTtcbiAgICAgIHRoaXMuX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJ1bGVzX3N0cmluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ydWxlc1N0cmluZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcnVsZXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlc19zdHJpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJ1bGVzU3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ydWxlc1N0cmluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJ1bGVzU3RyaW5nKCkge1xuICAgIHRoaXMuX3J1bGVzU3RyaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydWxlc1N0cmluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlc1N0cmluZztcbiAgfVxuXG4gIC8vIHJ1bGVzX3NvdXJjZV9saXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bGVzU291cmNlTGlzdCA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJydWxlc19zb3VyY2VfbGlzdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBydWxlc1NvdXJjZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGVzU291cmNlTGlzdDtcbiAgfVxuICBwdWJsaWMgcHV0UnVsZXNTb3VyY2VMaXN0KHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdCkge1xuICAgIHRoaXMuX3J1bGVzU291cmNlTGlzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UnVsZXNTb3VyY2VMaXN0KCkge1xuICAgIHRoaXMuX3J1bGVzU291cmNlTGlzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydWxlc1NvdXJjZUxpc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXNTb3VyY2VMaXN0LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzdGF0ZWZ1bF9ydWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRlZnVsUnVsZT86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlW107IFxuICBwdWJsaWMgZ2V0IHN0YXRlZnVsUnVsZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RhdGVmdWxfcnVsZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRlZnVsUnVsZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVbXSkge1xuICAgIHRoaXMuX3N0YXRlZnVsUnVsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlZnVsUnVsZSgpIHtcbiAgICB0aGlzLl9zdGF0ZWZ1bFJ1bGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRlZnVsUnVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWZ1bFJ1bGU7XG4gIH1cblxuICAvLyBzdGF0ZWxlc3NfcnVsZXNfYW5kX2N1c3RvbV9hY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucyA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzdGF0ZWxlc3NfcnVsZXNfYW5kX2N1c3RvbV9hY3Rpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnModmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMoKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGVWYXJpYWJsZXM/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGVzU291cmNlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cE91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJ1bGVfdmFyaWFibGVzOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlVmFyaWFibGVzKSxcbiAgICBydWxlc19zb3VyY2U6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlc1NvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXAgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3J1bGVWYXJpYWJsZXM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJ1bGVWYXJpYWJsZXMgPSB0aGlzLl9ydWxlVmFyaWFibGVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcnVsZXNTb3VyY2U/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJ1bGVzU291cmNlID0gdGhpcy5fcnVsZXNTb3VyY2U/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXAgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ydWxlVmFyaWFibGVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ydWxlc1NvdXJjZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ydWxlVmFyaWFibGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ydWxlVmFyaWFibGVzO1xuICAgICAgdGhpcy5fcnVsZXNTb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJ1bGVzU291cmNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJ1bGVfdmFyaWFibGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bGVWYXJpYWJsZXMgPSBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJydWxlX3ZhcmlhYmxlc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBydWxlVmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlVmFyaWFibGVzO1xuICB9XG4gIHB1YmxpYyBwdXRSdWxlVmFyaWFibGVzKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzKSB7XG4gICAgdGhpcy5fcnVsZVZhcmlhYmxlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UnVsZVZhcmlhYmxlcygpIHtcbiAgICB0aGlzLl9ydWxlVmFyaWFibGVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bGVWYXJpYWJsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZVZhcmlhYmxlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcnVsZXNfc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3J1bGVzU291cmNlID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJ1bGVzX3NvdXJjZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBydWxlc1NvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXNTb3VyY2U7XG4gIH1cbiAgcHVibGljIHB1dFJ1bGVzU291cmNlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZSkge1xuICAgIHRoaXMuX3J1bGVzU291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVsZXNTb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXNTb3VyY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXBcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY2FwYWNpdHkgPSBjb25maWcuY2FwYWNpdHk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3J1bGVzID0gY29uZmlnLnJ1bGVzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuX3J1bGVHcm91cC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnJ1bGVHcm91cDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5O1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHJ1bGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bGVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBydWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBydWxlcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcnVsZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdWxlcygpIHtcbiAgICB0aGlzLl9ydWxlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyB1cGRhdGVfdG9rZW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1cGRhdGVUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VwZGF0ZV90b2tlbicpO1xuICB9XG5cbiAgLy8gcnVsZV9ncm91cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ydWxlR3JvdXAgPSBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJ1bGVfZ3JvdXBcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcnVsZUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlR3JvdXA7XG4gIH1cbiAgcHVibGljIHB1dFJ1bGVHcm91cCh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwKSB7XG4gICAgdGhpcy5fcnVsZUdyb3VwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdWxlR3JvdXAoKSB7XG4gICAgdGhpcy5fcnVsZUdyb3VwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bGVHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlR3JvdXAuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2NhcGFjaXR5KSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHJ1bGVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ydWxlcyksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgICAgcnVsZV9ncm91cDogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwVG9UZXJyYWZvcm0odGhpcy5fcnVsZUdyb3VwLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==