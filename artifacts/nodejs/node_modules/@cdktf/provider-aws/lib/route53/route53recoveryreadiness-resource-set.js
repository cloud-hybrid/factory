"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route53RecoveryreadinessResourceSet = exports.Route53RecoveryreadinessResourceSetTimeoutsOutputReference = exports.route53RecoveryreadinessResourceSetTimeoutsToTerraform = exports.route53RecoveryreadinessResourceSetResourcesToTerraform = exports.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference = exports.route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform = exports.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference = exports.route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform = exports.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference = exports.route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform = exports.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference = exports.route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
    };
}
exports.route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform = route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform;
/**
 * @stability stable
 */
class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
        }
    }
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    set arn(value) {
        this._arn = value;
    }
    /**
     * @stability stable
     */
    resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get arnInput() {
        return this._arn;
    }
}
exports.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference = Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference[_a] = { fqn: "@cdktf/provider-aws.route53.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference", version: "3.0.1" };
function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain_name: cdktf.stringToTerraform(struct.domainName),
        record_set_id: cdktf.stringToTerraform(struct.recordSetId),
    };
}
exports.route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform = route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform;
/**
 * @stability stable
 */
class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference extends cdktf.ComplexObject {
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
        if (this._domainName) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._recordSetId) {
            hasAnyValues = true;
            internalValueResult.recordSetId = this._recordSetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._domainName = undefined;
            this._recordSetId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._domainName = value.domainName;
            this._recordSetId = value.recordSetId;
        }
    }
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    /**
     * @stability stable
     */
    set domainName(value) {
        this._domainName = value;
    }
    /**
     * @stability stable
     */
    resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainNameInput() {
        return this._domainName;
    }
    /**
     * @stability stable
     */
    get recordSetId() {
        return this.getStringAttribute('record_set_id');
    }
    /**
     * @stability stable
     */
    set recordSetId(value) {
        this._recordSetId = value;
    }
    /**
     * @stability stable
     */
    resetRecordSetId() {
        this._recordSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordSetIdInput() {
        return this._recordSetId;
    }
}
exports.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference = Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference;
_b = JSII_RTTI_SYMBOL_1;
Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference[_b] = { fqn: "@cdktf/provider-aws.route53.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference", version: "3.0.1" };
function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        nlb_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct.nlbResource),
        r53_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct.r53Resource),
    };
}
exports.route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform = route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform;
/**
 * @stability stable
 */
class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // nlb_resource - computed: false, optional: true, required: false
        this._nlbResource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(this, "nlb_resource", true);
        // r53_resource - computed: false, optional: true, required: false
        this._r53Resource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(this, "r53_resource", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _g, _h, _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_g = this._nlbResource) === null || _g === void 0 ? void 0 : _g.internalValue) {
            hasAnyValues = true;
            internalValueResult.nlbResource = (_h = this._nlbResource) === null || _h === void 0 ? void 0 : _h.internalValue;
        }
        if ((_j = this._r53Resource) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.r53Resource = (_k = this._r53Resource) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._nlbResource.internalValue = undefined;
            this._r53Resource.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._nlbResource.internalValue = value.nlbResource;
            this._r53Resource.internalValue = value.r53Resource;
        }
    }
    /**
     * @stability stable
     */
    get nlbResource() {
        return this._nlbResource;
    }
    /**
     * @stability stable
     */
    putNlbResource(value) {
        this._nlbResource.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetNlbResource() {
        this._nlbResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nlbResourceInput() {
        return this._nlbResource.internalValue;
    }
    /**
     * @stability stable
     */
    get r53Resource() {
        return this._r53Resource;
    }
    /**
     * @stability stable
     */
    putR53Resource(value) {
        this._r53Resource.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetR53Resource() {
        this._r53Resource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get r53ResourceInput() {
        return this._r53Resource.internalValue;
    }
}
exports.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference = Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference;
_c = JSII_RTTI_SYMBOL_1;
Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference[_c] = { fqn: "@cdktf/provider-aws.route53.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference", version: "3.0.1" };
function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain_name: cdktf.stringToTerraform(struct.domainName),
        hosted_zone_arn: cdktf.stringToTerraform(struct.hostedZoneArn),
        record_set_id: cdktf.stringToTerraform(struct.recordSetId),
        record_type: cdktf.stringToTerraform(struct.recordType),
        target_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct.targetResource),
    };
}
exports.route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform = route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform;
/**
 * @stability stable
 */
class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // target_resource - computed: false, optional: true, required: false
        this._targetResource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(this, "target_resource", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _g, _h;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._domainName) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._hostedZoneArn) {
            hasAnyValues = true;
            internalValueResult.hostedZoneArn = this._hostedZoneArn;
        }
        if (this._recordSetId) {
            hasAnyValues = true;
            internalValueResult.recordSetId = this._recordSetId;
        }
        if (this._recordType) {
            hasAnyValues = true;
            internalValueResult.recordType = this._recordType;
        }
        if ((_g = this._targetResource) === null || _g === void 0 ? void 0 : _g.internalValue) {
            hasAnyValues = true;
            internalValueResult.targetResource = (_h = this._targetResource) === null || _h === void 0 ? void 0 : _h.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._domainName = undefined;
            this._hostedZoneArn = undefined;
            this._recordSetId = undefined;
            this._recordType = undefined;
            this._targetResource.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._domainName = value.domainName;
            this._hostedZoneArn = value.hostedZoneArn;
            this._recordSetId = value.recordSetId;
            this._recordType = value.recordType;
            this._targetResource.internalValue = value.targetResource;
        }
    }
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    /**
     * @stability stable
     */
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainNameInput() {
        return this._domainName;
    }
    /**
     * @stability stable
     */
    get hostedZoneArn() {
        return this.getStringAttribute('hosted_zone_arn');
    }
    /**
     * @stability stable
     */
    set hostedZoneArn(value) {
        this._hostedZoneArn = value;
    }
    /**
     * @stability stable
     */
    resetHostedZoneArn() {
        this._hostedZoneArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostedZoneArnInput() {
        return this._hostedZoneArn;
    }
    /**
     * @stability stable
     */
    get recordSetId() {
        return this.getStringAttribute('record_set_id');
    }
    /**
     * @stability stable
     */
    set recordSetId(value) {
        this._recordSetId = value;
    }
    /**
     * @stability stable
     */
    resetRecordSetId() {
        this._recordSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordSetIdInput() {
        return this._recordSetId;
    }
    /**
     * @stability stable
     */
    get recordType() {
        return this.getStringAttribute('record_type');
    }
    /**
     * @stability stable
     */
    set recordType(value) {
        this._recordType = value;
    }
    /**
     * @stability stable
     */
    resetRecordType() {
        this._recordType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordTypeInput() {
        return this._recordType;
    }
    /**
     * @stability stable
     */
    get targetResource() {
        return this._targetResource;
    }
    /**
     * @stability stable
     */
    putTargetResource(value) {
        this._targetResource.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTargetResource() {
        this._targetResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetResourceInput() {
        return this._targetResource.internalValue;
    }
}
exports.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference = Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference;
_d = JSII_RTTI_SYMBOL_1;
Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference[_d] = { fqn: "@cdktf/provider-aws.route53.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference", version: "3.0.1" };
function route53RecoveryreadinessResourceSetResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        readiness_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct.readinessScopes),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        dns_target_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct.dnsTargetResource),
    };
}
exports.route53RecoveryreadinessResourceSetResourcesToTerraform = route53RecoveryreadinessResourceSetResourcesToTerraform;
function route53RecoveryreadinessResourceSetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
exports.route53RecoveryreadinessResourceSetTimeoutsToTerraform = route53RecoveryreadinessResourceSetTimeoutsToTerraform;
/**
 * @stability stable
 */
class Route53RecoveryreadinessResourceSetTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._delete) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._delete = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._delete = value.delete;
        }
    }
    /**
     * @stability stable
     */
    get delete() {
        return this.getStringAttribute('delete');
    }
    /**
     * @stability stable
     */
    set delete(value) {
        this._delete = value;
    }
    /**
     * @stability stable
     */
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deleteInput() {
        return this._delete;
    }
}
exports.Route53RecoveryreadinessResourceSetTimeoutsOutputReference = Route53RecoveryreadinessResourceSetTimeoutsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
Route53RecoveryreadinessResourceSetTimeoutsOutputReference[_e] = { fqn: "@cdktf/provider-aws.route53.Route53RecoveryreadinessResourceSetTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set}.
 *
 * @stability stable
 */
class Route53RecoveryreadinessResourceSet extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route53recoveryreadiness_resource_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new Route53RecoveryreadinessResourceSetTimeoutsOutputReference(this, "timeouts", true);
        this._resourceSetName = config.resourceSetName;
        this._resourceSetType = config.resourceSetType;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._resources = config.resources;
        this._timeouts.internalValue = config.timeouts;
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
    get resourceSetName() {
        return this.getStringAttribute('resource_set_name');
    }
    /**
     * @stability stable
     */
    set resourceSetName(value) {
        this._resourceSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceSetNameInput() {
        return this._resourceSetName;
    }
    /**
     * @stability stable
     */
    get resourceSetType() {
        return this.getStringAttribute('resource_set_type');
    }
    /**
     * @stability stable
     */
    set resourceSetType(value) {
        this._resourceSetType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceSetTypeInput() {
        return this._resourceSetType;
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
    get resources() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resources');
    }
    /**
     * @stability stable
     */
    set resources(value) {
        this._resources = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourcesInput() {
        return this._resources;
    }
    /**
     * @stability stable
     */
    get timeouts() {
        return this._timeouts;
    }
    /**
     * @stability stable
     */
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
            resource_set_type: cdktf.stringToTerraform(this._resourceSetType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            resources: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesToTerraform)(this._resources),
            timeouts: route53RecoveryreadinessResourceSetTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.Route53RecoveryreadinessResourceSet = Route53RecoveryreadinessResourceSet;
_f = JSII_RTTI_SYMBOL_1;
Route53RecoveryreadinessResourceSet[_f] = { fqn: "@cdktf/provider-aws.route53.Route53RecoveryreadinessResourceSet", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Route53RecoveryreadinessResourceSet.tfResourceType = "aws_route53recoveryreadiness_resource_set";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1M3JlY292ZXJ5cmVhZGluZXNzLXJlc291cmNlLXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZTUzL3JvdXRlNTNyZWNvdmVyeXJlYWRpbmVzcy1yZXNvdXJjZS1zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFzQi9CLFNBQWdCLGlHQUFpRyxDQUFDLE1BQXVNO0lBQ3ZULElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDO0FBUkQsOE1BUUM7Ozs7QUFFRCxNQUFhLHFHQUFzRyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTVJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNyQztRQUNELE9BQU8sWUFBWSxDQUFDLENB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QUM1QixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVEQUF1RCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNyRyxRQUFRLEVBQUUsc0RBQXNELENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDL0YsQ0FBQztJQUNKLENBQUM7O0FBcEpILGtGQXFKQzs7O0FBbkpDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csa0RBQWMsR0FBVywyQ0FBMkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVNldE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VTZXRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZXM6IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRUaW1lb3V0cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlTmxiUmVzb3VyY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZU5sYlJlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlTmxiUmVzb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VObGJSZXNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VObGJSZXNvdXJjZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VObGJSZXNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hcm4gPSB0aGlzLl9hcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VObGJSZXNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXJuID0gdmFsdWUuYXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcm4oKSB7XG4gICAgdGhpcy5fYXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZVI1M1Jlc291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZFNldElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlUjUzUmVzb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VSNTNSZXNvdXJjZU91dHB1dFJlZmVyZW5jZSB8IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZVI1M1Jlc291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluTmFtZSksXG4gICAgcmVjb3JkX3NldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRTZXRJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZVI1M1Jlc291cmNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZVI1M1Jlc291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kb21haW5OYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kb21haW5OYW1lID0gdGhpcy5fZG9tYWluTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlY29yZFNldElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRTZXRJZCA9IHRoaXMuX3JlY29yZFNldElkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlUjUzUmVzb3VyY2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kb21haW5OYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVjb3JkU2V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZS5kb21haW5OYW1lO1xuICAgICAgdGhpcy5fcmVjb3JkU2V0SWQgPSB2YWx1ZS5yZWNvcmRTZXRJZDtcbiAgICB9XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb21haW5OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb21haW5OYW1lKCkge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluTmFtZTtcbiAgfVxuXG4gIC8vIHJlY29yZF9zZXRfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVjb3JkU2V0SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZFNldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX3NldF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkU2V0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZFNldElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVjb3JkU2V0SWQoKSB7XG4gICAgdGhpcy5fcmVjb3JkU2V0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZFNldElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZFNldElkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5sYlJlc291cmNlPzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlTmxiUmVzb3VyY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHI1M1Jlc291cmNlPzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlUjUzUmVzb3VyY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBubGJfcmVzb3VyY2U6IHJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZU5sYlJlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5ubGJSZXNvdXJjZSksXG4gICAgcjUzX3Jlc291cmNlOiByb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VSNTNSZXNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdCEucjUzUmVzb3VyY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVGFyZ2V0UmVzb3VyY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ubGJSZXNvdXJjZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmxiUmVzb3VyY2UgPSB0aGlzLl9ubGJSZXNvdXJjZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3I1M1Jlc291cmNlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yNTNSZXNvdXJjZSA9IHRoaXMuX3I1M1Jlc291cmNlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbmxiUmVzb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3I1M1Jlc291cmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX25sYlJlc291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ubGJSZXNvdXJjZTtcbiAgICAgIHRoaXMuX3I1M1Jlc291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5yNTNSZXNvdXJjZTtcbiAgICB9XG4gIH1cblxuICAvLyBubGJfcmVzb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmxiUmVzb3VyY2UgPSBuZXcgUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlTmxiUmVzb3VyY2VPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibmxiX3Jlc291cmNlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG5sYlJlc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9ubGJSZXNvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0TmxiUmVzb3VyY2UodmFsdWU6IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZU5sYlJlc291cmNlKSB7XG4gICAgdGhpcy5fbmxiUmVzb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5sYlJlc291cmNlKCkge1xuICAgIHRoaXMuX25sYlJlc291cmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5sYlJlc291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25sYlJlc291cmNlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByNTNfcmVzb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcjUzUmVzb3VyY2UgPSBuZXcgUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlUjUzUmVzb3VyY2VPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicjUzX3Jlc291cmNlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHI1M1Jlc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9yNTNSZXNvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0UjUzUmVzb3VyY2UodmFsdWU6IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZVI1M1Jlc291cmNlKSB7XG4gICAgdGhpcy5fcjUzUmVzb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFI1M1Jlc291cmNlKCkge1xuICAgIHRoaXMuX3I1M1Jlc291cmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHI1M1Jlc291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3I1M1Jlc291cmNlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0ZWRab25lQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkU2V0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldFJlc291cmNlPzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluTmFtZSksXG4gICAgaG9zdGVkX3pvbmVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RlZFpvbmVBcm4pLFxuICAgIHJlY29yZF9zZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkU2V0SWQpLFxuICAgIHJlY29yZF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZFR5cGUpLFxuICAgIHRhcmdldF9yZXNvdXJjZTogcm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRSZXNvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZG9tYWluTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG9tYWluTmFtZSA9IHRoaXMuX2RvbWFpbk5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3N0ZWRab25lQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0ZWRab25lQXJuID0gdGhpcy5faG9zdGVkWm9uZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlY29yZFNldElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRTZXRJZCA9IHRoaXMuX3JlY29yZFNldElkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkVHlwZSA9IHRoaXMuX3JlY29yZFR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRSZXNvdXJjZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0UmVzb3VyY2UgPSB0aGlzLl90YXJnZXRSZXNvdXJjZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kb21haW5OYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faG9zdGVkWm9uZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZFNldElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVjb3JkVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldFJlc291cmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZS5kb21haW5OYW1lO1xuICAgICAgdGhpcy5faG9zdGVkWm9uZUFybiA9IHZhbHVlLmhvc3RlZFpvbmVBcm47XG4gICAgICB0aGlzLl9yZWNvcmRTZXRJZCA9IHZhbHVlLnJlY29yZFNldElkO1xuICAgICAgdGhpcy5fcmVjb3JkVHlwZSA9IHZhbHVlLnJlY29yZFR5cGU7XG4gICAgICB0aGlzLl90YXJnZXRSZXNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGFyZ2V0UmVzb3VyY2U7XG4gICAgfVxuICB9XG5cbiAgLy8gZG9tYWluX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZG9tYWluTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvbWFpbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW5OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb21haW5OYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluTmFtZTtcbiAgfVxuXG4gIC8vIGhvc3RlZF96b25lX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob3N0ZWRab25lQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0ZWRab25lQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdGVkX3pvbmVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBob3N0ZWRab25lQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ZWRab25lQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9zdGVkWm9uZUFybigpIHtcbiAgICB0aGlzLl9ob3N0ZWRab25lQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0ZWRab25lQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RlZFpvbmVBcm47XG4gIH1cblxuICAvLyByZWNvcmRfc2V0X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlY29yZFNldElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRTZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9zZXRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZFNldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRTZXRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlY29yZFNldElkKCkge1xuICAgIHRoaXMuX3JlY29yZFNldElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRTZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRTZXRJZDtcbiAgfVxuXG4gIC8vIHJlY29yZF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlY29yZFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlY29yZFR5cGUoKSB7XG4gICAgdGhpcy5fcmVjb3JkVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRUeXBlO1xuICB9XG5cbiAgLy8gdGFyZ2V0X3Jlc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldFJlc291cmNlID0gbmV3IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzRG5zVGFyZ2V0UmVzb3VyY2VUYXJnZXRSZXNvdXJjZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0YXJnZXRfcmVzb3VyY2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGFyZ2V0UmVzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFJlc291cmNlO1xuICB9XG4gIHB1YmxpYyBwdXRUYXJnZXRSZXNvdXJjZSh2YWx1ZTogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZVRhcmdldFJlc291cmNlKSB7XG4gICAgdGhpcy5fdGFyZ2V0UmVzb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldFJlc291cmNlKCkge1xuICAgIHRoaXMuX3RhcmdldFJlc291cmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFJlc291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFJlc291cmNlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVhZGluZXNzU2NvcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRuc1RhcmdldFJlc291cmNlPzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNEbnNUYXJnZXRSZXNvdXJjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWFkaW5lc3Nfc2NvcGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnJlYWRpbmVzc1Njb3BlcyksXG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICBkbnNfdGFyZ2V0X3Jlc291cmNlOiByb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFJlc291cmNlc0Ruc1RhcmdldFJlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5kbnNUYXJnZXRSZXNvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRUaW1lb3V0c091dHB1dFJlZmVyZW5jZSB8IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0VGltZW91dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRUaW1lb3V0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFRpbWVvdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWxldGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZSA9IHRoaXMuX2RlbGV0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0VGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBkZWxldGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxldGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlKCkge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfcm91dGU1M3JlY292ZXJ5cmVhZGluZXNzX3Jlc291cmNlX3NldFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBSb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3JvdXRlNTNyZWNvdmVyeXJlYWRpbmVzc19yZXNvdXJjZV9zZXQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fcmVzb3VyY2VTZXROYW1lID0gY29uZmlnLnJlc291cmNlU2V0TmFtZTtcbiAgICB0aGlzLl9yZXNvdXJjZVNldFR5cGUgPSBjb25maWcucmVzb3VyY2VTZXRUeXBlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fcmVzb3VyY2VzID0gY29uZmlnLnJlc291cmNlcztcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyByZXNvdXJjZV9zZXRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZVNldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlU2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX3NldF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZVNldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlU2V0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVNldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VTZXROYW1lO1xuICB9XG5cbiAgLy8gcmVzb3VyY2Vfc2V0X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VTZXRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZVNldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9zZXRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VTZXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZVNldFR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VTZXRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlU2V0VHlwZTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyByZXNvdXJjZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VzPzogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNbXTsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNvdXJjZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZXModmFsdWU6IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0UmVzb3VyY2VzW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlcztcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IFJvdXRlNTNSZWNvdmVyeXJlYWRpbmVzc1Jlc291cmNlU2V0VGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0cyh2YWx1ZTogUm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICByZXNvdXJjZV9zZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVzb3VyY2VTZXROYW1lKSxcbiAgICAgIHJlc291cmNlX3NldF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXNvdXJjZVNldFR5cGUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICByZXNvdXJjZXM6IGNka3RmLmxpc3RNYXBwZXIocm91dGU1M1JlY292ZXJ5cmVhZGluZXNzUmVzb3VyY2VTZXRSZXNvdXJjZXNUb1RlcnJhZm9ybSkodGhpcy5fcmVzb3VyY2VzKSxcbiAgICAgIHRpbWVvdXRzOiByb3V0ZTUzUmVjb3ZlcnlyZWFkaW5lc3NSZXNvdXJjZVNldFRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19