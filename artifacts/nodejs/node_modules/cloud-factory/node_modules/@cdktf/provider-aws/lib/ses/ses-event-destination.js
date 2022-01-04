"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SesEventDestination = exports.SesEventDestinationSnsDestinationOutputReference = exports.sesEventDestinationSnsDestinationToTerraform = exports.SesEventDestinationKinesisDestinationOutputReference = exports.sesEventDestinationKinesisDestinationToTerraform = exports.sesEventDestinationCloudwatchDestinationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sesEventDestinationCloudwatchDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_value: cdktf.stringToTerraform(struct.defaultValue),
        dimension_name: cdktf.stringToTerraform(struct.dimensionName),
        value_source: cdktf.stringToTerraform(struct.valueSource),
    };
}
exports.sesEventDestinationCloudwatchDestinationToTerraform = sesEventDestinationCloudwatchDestinationToTerraform;
function sesEventDestinationKinesisDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        stream_arn: cdktf.stringToTerraform(struct.streamArn),
    };
}
exports.sesEventDestinationKinesisDestinationToTerraform = sesEventDestinationKinesisDestinationToTerraform;
/**
 * @stability stable
 */
class SesEventDestinationKinesisDestinationOutputReference extends cdktf.ComplexObject {
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
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._streamArn) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._roleArn = undefined;
            this._streamArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._roleArn = value.roleArn;
            this._streamArn = value.streamArn;
        }
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
    get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    /**
     * @stability stable
     */
    set streamArn(value) {
        this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get streamArnInput() {
        return this._streamArn;
    }
}
exports.SesEventDestinationKinesisDestinationOutputReference = SesEventDestinationKinesisDestinationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SesEventDestinationKinesisDestinationOutputReference[_a] = { fqn: "@cdktf/provider-aws.ses.SesEventDestinationKinesisDestinationOutputReference", version: "3.0.1" };
function sesEventDestinationSnsDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
exports.sesEventDestinationSnsDestinationToTerraform = sesEventDestinationSnsDestinationToTerraform;
/**
 * @stability stable
 */
class SesEventDestinationSnsDestinationOutputReference extends cdktf.ComplexObject {
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
        if (this._topicArn) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._topicArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._topicArn = value.topicArn;
        }
    }
    /**
     * @stability stable
     */
    get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    /**
     * @stability stable
     */
    set topicArn(value) {
        this._topicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get topicArnInput() {
        return this._topicArn;
    }
}
exports.SesEventDestinationSnsDestinationOutputReference = SesEventDestinationSnsDestinationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SesEventDestinationSnsDestinationOutputReference[_b] = { fqn: "@cdktf/provider-aws.ses.SesEventDestinationSnsDestinationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination}.
 *
 * @stability stable
 */
class SesEventDestination extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ses_event_destination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // kinesis_destination - computed: false, optional: true, required: false
        this._kinesisDestination = new SesEventDestinationKinesisDestinationOutputReference(this, "kinesis_destination", true);
        // sns_destination - computed: false, optional: true, required: false
        this._snsDestination = new SesEventDestinationSnsDestinationOutputReference(this, "sns_destination", true);
        this._configurationSetName = config.configurationSetName;
        this._enabled = config.enabled;
        this._matchingTypes = config.matchingTypes;
        this._name = config.name;
        this._cloudwatchDestination = config.cloudwatchDestination;
        this._kinesisDestination.internalValue = config.kinesisDestination;
        this._snsDestination.internalValue = config.snsDestination;
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
    get configurationSetName() {
        return this.getStringAttribute('configuration_set_name');
    }
    /**
     * @stability stable
     */
    set configurationSetName(value) {
        this._configurationSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationSetNameInput() {
        return this._configurationSetName;
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
    get matchingTypes() {
        return this.getListAttribute('matching_types');
    }
    /**
     * @stability stable
     */
    set matchingTypes(value) {
        this._matchingTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get matchingTypesInput() {
        return this._matchingTypes;
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
    get cloudwatchDestination() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cloudwatch_destination');
    }
    /**
     * @stability stable
     */
    set cloudwatchDestination(value) {
        this._cloudwatchDestination = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchDestination() {
        this._cloudwatchDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchDestinationInput() {
        return this._cloudwatchDestination;
    }
    /**
     * @stability stable
     */
    get kinesisDestination() {
        return this._kinesisDestination;
    }
    /**
     * @stability stable
     */
    putKinesisDestination(value) {
        this._kinesisDestination.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKinesisDestination() {
        this._kinesisDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisDestinationInput() {
        return this._kinesisDestination.internalValue;
    }
    /**
     * @stability stable
     */
    get snsDestination() {
        return this._snsDestination;
    }
    /**
     * @stability stable
     */
    putSnsDestination(value) {
        this._snsDestination.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSnsDestination() {
        this._snsDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snsDestinationInput() {
        return this._snsDestination.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            configuration_set_name: cdktf.stringToTerraform(this._configurationSetName),
            enabled: cdktf.booleanToTerraform(this._enabled),
            matching_types: cdktf.listMapper(cdktf.stringToTerraform)(this._matchingTypes),
            name: cdktf.stringToTerraform(this._name),
            cloudwatch_destination: cdktf.listMapper(sesEventDestinationCloudwatchDestinationToTerraform)(this._cloudwatchDestination),
            kinesis_destination: sesEventDestinationKinesisDestinationToTerraform(this._kinesisDestination.internalValue),
            sns_destination: sesEventDestinationSnsDestinationToTerraform(this._snsDestination.internalValue),
        };
    }
}
exports.SesEventDestination = SesEventDestination;
_c = JSII_RTTI_SYMBOL_1;
SesEventDestination[_c] = { fqn: "@cdktf/provider-aws.ses.SesEventDestination", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SesEventDestination.tfResourceType = "aws_ses_event_destination";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VzLWV2ZW50LWRlc3RpbmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nlcy9zZXMtZXZlbnQtZGVzdGluYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE0Qi9CLFNBQWdCLG1EQUFtRCxDQUFDLE1BQWlEO0lBQ25ILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFWRCxrSEFVQztBQVNELFNBQWdCLGdEQUFnRCxDQUFDLE1BQXFHO0lBQ3BLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FB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b0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csa0NBQWMsR0FBVywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBTZXNFdmVudERlc3RpbmF0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvblNldE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2hpbmdUeXBlczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWR3YXRjaERlc3RpbmF0aW9uPzogU2VzRXZlbnREZXN0aW5hdGlvbkNsb3Vkd2F0Y2hEZXN0aW5hdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZXNpc0Rlc3RpbmF0aW9uPzogU2VzRXZlbnREZXN0aW5hdGlvbktpbmVzaXNEZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNuc0Rlc3RpbmF0aW9uPzogU2VzRXZlbnREZXN0aW5hdGlvblNuc0Rlc3RpbmF0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBTZXNFdmVudERlc3RpbmF0aW9uQ2xvdWR3YXRjaERlc3RpbmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0VmFsdWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpbWVuc2lvbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVTb3VyY2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlc0V2ZW50RGVzdGluYXRpb25DbG91ZHdhdGNoRGVzdGluYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZXNFdmVudERlc3RpbmF0aW9uQ2xvdWR3YXRjaERlc3RpbmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdF92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0VmFsdWUpLFxuICAgIGRpbWVuc2lvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpbWVuc2lvbk5hbWUpLFxuICAgIHZhbHVlX3NvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZVNvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXNFdmVudERlc3RpbmF0aW9uS2luZXNpc0Rlc3RpbmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdHJlYW1Bcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlc0V2ZW50RGVzdGluYXRpb25LaW5lc2lzRGVzdGluYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZXNFdmVudERlc3RpbmF0aW9uS2luZXNpc0Rlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgU2VzRXZlbnREZXN0aW5hdGlvbktpbmVzaXNEZXN0aW5hdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHN0cmVhbV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VzRXZlbnREZXN0aW5hdGlvbktpbmVzaXNEZXN0aW5hdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTZXNFdmVudERlc3RpbmF0aW9uS2luZXNpc0Rlc3RpbmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yb2xlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb2xlQXJuID0gdGhpcy5fcm9sZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0cmVhbUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RyZWFtQXJuID0gdGhpcy5fc3RyZWFtQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2VzRXZlbnREZXN0aW5hdGlvbktpbmVzaXNEZXN0aW5hdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdHJlYW1Bcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgICAgdGhpcy5fc3RyZWFtQXJuID0gdmFsdWUuc3RyZWFtQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cblxuICAvLyBzdHJlYW1fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0cmVhbUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RyZWFtQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyZWFtX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RyZWFtQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdHJlYW1Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RyZWFtQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmVhbUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTZXNFdmVudERlc3RpbmF0aW9uU25zRGVzdGluYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b3BpY0Fybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VzRXZlbnREZXN0aW5hdGlvblNuc0Rlc3RpbmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU2VzRXZlbnREZXN0aW5hdGlvblNuc0Rlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgU2VzRXZlbnREZXN0aW5hdGlvblNuc0Rlc3RpbmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdG9waWNfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvcGljQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VzRXZlbnREZXN0aW5hdGlvblNuc0Rlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNlc0V2ZW50RGVzdGluYXRpb25TbnNEZXN0aW5hdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdG9waWNBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRvcGljQXJuID0gdGhpcy5fdG9waWNBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZXNFdmVudERlc3RpbmF0aW9uU25zRGVzdGluYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90b3BpY0FybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdG9waWNBcm4gPSB2YWx1ZS50b3BpY0FybjtcbiAgICB9XG4gIH1cblxuICAvLyB0b3BpY19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdG9waWNBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRvcGljQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndG9waWNfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCB0b3BpY0Fybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdG9waWNBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9waWNBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9waWNBcm47XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTZXNFdmVudERlc3RpbmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3Nlc19ldmVudF9kZXN0aW5hdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTZXNFdmVudERlc3RpbmF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc2VzX2V2ZW50X2Rlc3RpbmF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TZXROYW1lID0gY29uZmlnLmNvbmZpZ3VyYXRpb25TZXROYW1lO1xuICAgIHRoaXMuX2VuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcbiAgICB0aGlzLl9tYXRjaGluZ1R5cGVzID0gY29uZmlnLm1hdGNoaW5nVHlwZXM7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hEZXN0aW5hdGlvbiA9IGNvbmZpZy5jbG91ZHdhdGNoRGVzdGluYXRpb247XG4gICAgdGhpcy5fa2luZXNpc0Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcua2luZXNpc0Rlc3RpbmF0aW9uO1xuICAgIHRoaXMuX3Nuc0Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuc25zRGVzdGluYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbl9zZXRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9uU2V0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWd1cmF0aW9uX3NldF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9uU2V0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvblNldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblNldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvblNldE5hbWU7XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtYXRjaGluZ190eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXRjaGluZ1R5cGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IG1hdGNoaW5nVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbWF0Y2hpbmdfdHlwZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hdGNoaW5nVHlwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbWF0Y2hpbmdUeXBlcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXRjaGluZ1R5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoaW5nVHlwZXM7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfZGVzdGluYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaERlc3RpbmF0aW9uPzogU2VzRXZlbnREZXN0aW5hdGlvbkNsb3Vkd2F0Y2hEZXN0aW5hdGlvbltdOyBcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoRGVzdGluYXRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfZGVzdGluYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjbG91ZHdhdGNoRGVzdGluYXRpb24odmFsdWU6IFNlc0V2ZW50RGVzdGluYXRpb25DbG91ZHdhdGNoRGVzdGluYXRpb25bXSkge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hEZXN0aW5hdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsb3Vkd2F0Y2hEZXN0aW5hdGlvbigpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoRGVzdGluYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hEZXN0aW5hdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoRGVzdGluYXRpb247XG4gIH1cblxuICAvLyBraW5lc2lzX2Rlc3RpbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tpbmVzaXNEZXN0aW5hdGlvbiA9IG5ldyBTZXNFdmVudERlc3RpbmF0aW9uS2luZXNpc0Rlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImtpbmVzaXNfZGVzdGluYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQga2luZXNpc0Rlc3RpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzRGVzdGluYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEtpbmVzaXNEZXN0aW5hdGlvbih2YWx1ZTogU2VzRXZlbnREZXN0aW5hdGlvbktpbmVzaXNEZXN0aW5hdGlvbikge1xuICAgIHRoaXMuX2tpbmVzaXNEZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2luZXNpc0Rlc3RpbmF0aW9uKCkge1xuICAgIHRoaXMuX2tpbmVzaXNEZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBraW5lc2lzRGVzdGluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc0Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzbnNfZGVzdGluYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc25zRGVzdGluYXRpb24gPSBuZXcgU2VzRXZlbnREZXN0aW5hdGlvblNuc0Rlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNuc19kZXN0aW5hdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzbnNEZXN0aW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc25zRGVzdGluYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFNuc0Rlc3RpbmF0aW9uKHZhbHVlOiBTZXNFdmVudERlc3RpbmF0aW9uU25zRGVzdGluYXRpb24pIHtcbiAgICB0aGlzLl9zbnNEZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U25zRGVzdGluYXRpb24oKSB7XG4gICAgdGhpcy5fc25zRGVzdGluYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc25zRGVzdGluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc25zRGVzdGluYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhdGlvbl9zZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29uZmlndXJhdGlvblNldE5hbWUpLFxuICAgICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZWQpLFxuICAgICAgbWF0Y2hpbmdfdHlwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX21hdGNoaW5nVHlwZXMpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBjbG91ZHdhdGNoX2Rlc3RpbmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHNlc0V2ZW50RGVzdGluYXRpb25DbG91ZHdhdGNoRGVzdGluYXRpb25Ub1RlcnJhZm9ybSkodGhpcy5fY2xvdWR3YXRjaERlc3RpbmF0aW9uKSxcbiAgICAgIGtpbmVzaXNfZGVzdGluYXRpb246IHNlc0V2ZW50RGVzdGluYXRpb25LaW5lc2lzRGVzdGluYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9raW5lc2lzRGVzdGluYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzbnNfZGVzdGluYXRpb246IHNlc0V2ZW50RGVzdGluYXRpb25TbnNEZXN0aW5hdGlvblRvVGVycmFmb3JtKHRoaXMuX3Nuc0Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==