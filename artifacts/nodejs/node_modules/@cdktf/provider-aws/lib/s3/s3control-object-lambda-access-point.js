"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ControlObjectLambdaAccessPoint = exports.S3ControlObjectLambdaAccessPointConfigurationOutputReference = exports.s3ControlObjectLambdaAccessPointConfigurationToTerraform = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform = exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform = exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn),
        function_payload: cdktf.stringToTerraform(struct.functionPayload),
    };
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform;
/**
 * @stability stable
 */
class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference extends cdktf.ComplexObject {
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
        if (this._functionArn) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        if (this._functionPayload) {
            hasAnyValues = true;
            internalValueResult.functionPayload = this._functionPayload;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._functionArn = undefined;
            this._functionPayload = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._functionArn = value.functionArn;
            this._functionPayload = value.functionPayload;
        }
    }
    /**
     * @stability stable
     */
    get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    /**
     * @stability stable
     */
    set functionArn(value) {
        this._functionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get functionArnInput() {
        return this._functionArn;
    }
    /**
     * @stability stable
     */
    get functionPayload() {
        return this.getStringAttribute('function_payload');
    }
    /**
     * @stability stable
     */
    set functionPayload(value) {
        this._functionPayload = value;
    }
    /**
     * @stability stable
     */
    resetFunctionPayload() {
        this._functionPayload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get functionPayloadInput() {
        return this._functionPayload;
    }
}
exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference = S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference;
_a = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference[_a] = { fqn: "@cdktf/provider-aws.s3.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference", version: "3.0.1" };
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_lambda: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform(struct.awsLambda),
    };
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform;
/**
 * @stability stable
 */
class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // aws_lambda - computed: false, optional: false, required: true
        this._awsLambda = new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference(this, "aws_lambda", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _e, _f;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_e = this._awsLambda) === null || _e === void 0 ? void 0 : _e.internalValue) {
            hasAnyValues = true;
            internalValueResult.awsLambda = (_f = this._awsLambda) === null || _f === void 0 ? void 0 : _f.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsLambda.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsLambda.internalValue = value.awsLambda;
        }
    }
    /**
     * @stability stable
     */
    get awsLambda() {
        return this._awsLambda;
    }
    /**
     * @stability stable
     */
    putAwsLambda(value) {
        this._awsLambda.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsLambdaInput() {
        return this._awsLambda.internalValue;
    }
}
exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference = S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference[_b] = { fqn: "@cdktf/provider-aws.s3.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference", version: "3.0.1" };
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        content_transformation: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct.contentTransformation),
    };
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform;
function s3ControlObjectLambdaAccessPointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_features: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedFeatures),
        cloud_watch_metrics_enabled: cdktf.booleanToTerraform(struct.cloudWatchMetricsEnabled),
        supporting_access_point: cdktf.stringToTerraform(struct.supportingAccessPoint),
        transformation_configuration: cdktf.listMapper(s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform)(struct.transformationConfiguration),
    };
}
exports.s3ControlObjectLambdaAccessPointConfigurationToTerraform = s3ControlObjectLambdaAccessPointConfigurationToTerraform;
/**
 * @stability stable
 */
class S3ControlObjectLambdaAccessPointConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._allowedFeatures) {
            hasAnyValues = true;
            internalValueResult.allowedFeatures = this._allowedFeatures;
        }
        if (this._cloudWatchMetricsEnabled) {
            hasAnyValues = true;
            internalValueResult.cloudWatchMetricsEnabled = this._cloudWatchMetricsEnabled;
        }
        if (this._supportingAccessPoint) {
            hasAnyValues = true;
            internalValueResult.supportingAccessPoint = this._supportingAccessPoint;
        }
        if (this._transformationConfiguration) {
            hasAnyValues = true;
            internalValueResult.transformationConfiguration = this._transformationConfiguration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowedFeatures = undefined;
            this._cloudWatchMetricsEnabled = undefined;
            this._supportingAccessPoint = undefined;
            this._transformationConfiguration = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowedFeatures = value.allowedFeatures;
            this._cloudWatchMetricsEnabled = value.cloudWatchMetricsEnabled;
            this._supportingAccessPoint = value.supportingAccessPoint;
            this._transformationConfiguration = value.transformationConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get allowedFeatures() {
        return this.getListAttribute('allowed_features');
    }
    /**
     * @stability stable
     */
    set allowedFeatures(value) {
        this._allowedFeatures = value;
    }
    /**
     * @stability stable
     */
    resetAllowedFeatures() {
        this._allowedFeatures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowedFeaturesInput() {
        return this._allowedFeatures;
    }
    /**
     * @stability stable
     */
    get cloudWatchMetricsEnabled() {
        return this.getBooleanAttribute('cloud_watch_metrics_enabled');
    }
    /**
     * @stability stable
     */
    set cloudWatchMetricsEnabled(value) {
        this._cloudWatchMetricsEnabled = value;
    }
    /**
     * @stability stable
     */
    resetCloudWatchMetricsEnabled() {
        this._cloudWatchMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudWatchMetricsEnabledInput() {
        return this._cloudWatchMetricsEnabled;
    }
    /**
     * @stability stable
     */
    get supportingAccessPoint() {
        return this.getStringAttribute('supporting_access_point');
    }
    /**
     * @stability stable
     */
    set supportingAccessPoint(value) {
        this._supportingAccessPoint = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportingAccessPointInput() {
        return this._supportingAccessPoint;
    }
    /**
     * @stability stable
     */
    get transformationConfiguration() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('transformation_configuration');
    }
    /**
     * @stability stable
     */
    set transformationConfiguration(value) {
        this._transformationConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get transformationConfigurationInput() {
        return this._transformationConfiguration;
    }
}
exports.S3ControlObjectLambdaAccessPointConfigurationOutputReference = S3ControlObjectLambdaAccessPointConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPointConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.s3.S3ControlObjectLambdaAccessPointConfigurationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html aws_s3control_object_lambda_access_point}.
 *
 * @stability stable
 */
class S3ControlObjectLambdaAccessPoint extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html aws_s3control_object_lambda_access_point} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3control_object_lambda_access_point',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // configuration - computed: false, optional: false, required: true
        this._configuration = new S3ControlObjectLambdaAccessPointConfigurationOutputReference(this, "configuration", true);
        this._accountId = config.accountId;
        this._name = config.name;
        this._configuration.internalValue = config.configuration;
    }
    /**
     * @stability stable
     */
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    /**
     * @stability stable
     */
    set accountId(value) {
        this._accountId = value;
    }
    /**
     * @stability stable
     */
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accountIdInput() {
        return this._accountId;
    }
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
    get configuration() {
        return this._configuration;
    }
    /**
     * @stability stable
     */
    putConfiguration(value) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationInput() {
        return this._configuration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
            configuration: s3ControlObjectLambdaAccessPointConfigurationToTerraform(this._configuration.internalValue),
        };
    }
}
exports.S3ControlObjectLambdaAccessPoint = S3ControlObjectLambdaAccessPoint;
_d = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPoint[_d] = { fqn: "@cdktf/provider-aws.s3.S3ControlObjectLambdaAccessPoint", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
S3ControlObjectLambdaAccessPoint.tfResourceType = "aws_s3control_object_lambda_access_point";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczNjb250cm9sLW9iamVjdC1sYW1iZGEtYWNjZXNzLXBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3MzL3MzY29udHJvbC1vYmplY3QtbGFtYmRhLWFjY2Vzcy1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWtCL0IsU0FBZ0IsaUhBQWlILENBQUMsTUFBdU87SUFDdlcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDMUQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7S0FDbkUsQ0FBQTtBQUNILENBQUM7QUFURCw4T0FTQzs7OztBQUVELE1BQWEscUhBQXNILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJNUosWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFX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SUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00sZ0JBQWdCLENBQUMsS0FBb0Q7UUFDMUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLGFBQWEsRUFBRSx3REFBd0QsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztTQUMzRyxDQUFDO0lBQ0osQ0FBQzs7QUE5RkgsNEVBK0ZDOzs7QUE3RkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywrQ0FBYyxHQUFXLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjb3VudElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvbjogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnVuY3Rpb25Bcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnVuY3Rpb25QYXlsb2FkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhVG9UZXJyYWZvcm0oc3RydWN0PzogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhT3V0cHV0UmVmZXJlbmNlIHwgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZnVuY3Rpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZ1bmN0aW9uQXJuKSxcbiAgICBmdW5jdGlvbl9wYXlsb2FkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZ1bmN0aW9uUGF5bG9hZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbkF3c0xhbWJkYU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Z1bmN0aW9uQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mdW5jdGlvbkFybiA9IHRoaXMuX2Z1bmN0aW9uQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZnVuY3Rpb25QYXlsb2FkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mdW5jdGlvblBheWxvYWQgPSB0aGlzLl9mdW5jdGlvblBheWxvYWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mdW5jdGlvbkFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Z1bmN0aW9uUGF5bG9hZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZnVuY3Rpb25Bcm4gPSB2YWx1ZS5mdW5jdGlvbkFybjtcbiAgICAgIHRoaXMuX2Z1bmN0aW9uUGF5bG9hZCA9IHZhbHVlLmZ1bmN0aW9uUGF5bG9hZDtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZnVuY3Rpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnVuY3Rpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBmdW5jdGlvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25Bcm47XG4gIH1cblxuICAvLyBmdW5jdGlvbl9wYXlsb2FkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Z1bmN0aW9uUGF5bG9hZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25QYXlsb2FkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnVuY3Rpb25fcGF5bG9hZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnVuY3Rpb25QYXlsb2FkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mdW5jdGlvblBheWxvYWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGdW5jdGlvblBheWxvYWQoKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25QYXlsb2FkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvblBheWxvYWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25QYXlsb2FkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXdzTGFtYmRhOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhd3NfbGFtYmRhOiBzM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGFUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c0xhbWJkYSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F3c0xhbWJkYT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXdzTGFtYmRhID0gdGhpcy5fYXdzTGFtYmRhPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXdzTGFtYmRhLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F3c0xhbWJkYS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYXdzTGFtYmRhO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF3c19sYW1iZGEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXdzTGFtYmRhID0gbmV3IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbkF3c0xhbWJkYU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhd3NfbGFtYmRhXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF3c0xhbWJkYSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXdzTGFtYmRhO1xuICB9XG4gIHB1YmxpYyBwdXRBd3NMYW1iZGEodmFsdWU6IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbkF3c0xhbWJkYSkge1xuICAgIHRoaXMuX2F3c0xhbWJkYS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF3c0xhbWJkYUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NMYW1iZGEuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb25zOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50VHJhbnNmb3JtYXRpb246IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWN0aW9ucyksXG4gICAgY29udGVudF90cmFuc2Zvcm1hdGlvbjogczNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHJhbnNmb3JtYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dlZEZlYXR1cmVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbG91ZFdhdGNoTWV0cmljc0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VwcG9ydGluZ0FjY2Vzc1BvaW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFsbG93ZWRfZmVhdHVyZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxsb3dlZEZlYXR1cmVzKSxcbiAgICBjbG91ZF93YXRjaF9tZXRyaWNzX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZCksXG4gICAgc3VwcG9ydGluZ19hY2Nlc3NfcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VwcG9ydGluZ0FjY2Vzc1BvaW50KSxcbiAgICB0cmFuc2Zvcm1hdGlvbl9jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FsbG93ZWRGZWF0dXJlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dlZEZlYXR1cmVzID0gdGhpcy5fYWxsb3dlZEZlYXR1cmVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZFdhdGNoTWV0cmljc0VuYWJsZWQgPSB0aGlzLl9jbG91ZFdhdGNoTWV0cmljc0VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdXBwb3J0aW5nQWNjZXNzUG9pbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1cHBvcnRpbmdBY2Nlc3NQb2ludCA9IHRoaXMuX3N1cHBvcnRpbmdBY2Nlc3NQb2ludDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uID0gdGhpcy5fdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxsb3dlZEZlYXR1cmVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VwcG9ydGluZ0FjY2Vzc1BvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hbGxvd2VkRmVhdHVyZXMgPSB2YWx1ZS5hbGxvd2VkRmVhdHVyZXM7XG4gICAgICB0aGlzLl9jbG91ZFdhdGNoTWV0cmljc0VuYWJsZWQgPSB2YWx1ZS5jbG91ZFdhdGNoTWV0cmljc0VuYWJsZWQ7XG4gICAgICB0aGlzLl9zdXBwb3J0aW5nQWNjZXNzUG9pbnQgPSB2YWx1ZS5zdXBwb3J0aW5nQWNjZXNzUG9pbnQ7XG4gICAgICB0aGlzLl90cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24gPSB2YWx1ZS50cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYWxsb3dlZF9mZWF0dXJlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd2VkRmVhdHVyZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dlZEZlYXR1cmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FsbG93ZWRfZmVhdHVyZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93ZWRGZWF0dXJlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hbGxvd2VkRmVhdHVyZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd2VkRmVhdHVyZXMoKSB7XG4gICAgdGhpcy5fYWxsb3dlZEZlYXR1cmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd2VkRmVhdHVyZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dlZEZlYXR1cmVzO1xuICB9XG5cbiAgLy8gY2xvdWRfd2F0Y2hfbWV0cmljc19lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Nsb3VkX3dhdGNoX21ldHJpY3NfZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkKCkge1xuICAgIHRoaXMuX2Nsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIHN1cHBvcnRpbmdfYWNjZXNzX3BvaW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N1cHBvcnRpbmdBY2Nlc3NQb2ludD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGluZ0FjY2Vzc1BvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VwcG9ydGluZ19hY2Nlc3NfcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1cHBvcnRpbmdBY2Nlc3NQb2ludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VwcG9ydGluZ0FjY2Vzc1BvaW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRpbmdBY2Nlc3NQb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0aW5nQWNjZXNzUG9pbnQ7XG4gIH1cblxuICAvLyB0cmFuc2Zvcm1hdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbj86IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbltdOyBcbiAgcHVibGljIGdldCB0cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RyYW5zZm9ybWF0aW9uX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbltdKSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb247XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfczNjb250cm9sX29iamVjdF9sYW1iZGFfYWNjZXNzX3BvaW50JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FjY291bnRJZCA9IGNvbmZpZy5hY2NvdW50SWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb25maWd1cmF0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjb3VudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2NvdW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2NvdW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY291bnRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjY291bnRJZCgpIHtcbiAgICB0aGlzLl9hY2NvdW50SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY291bnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NvdW50SWQ7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIGNvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvbiA9IG5ldyBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDb25maWd1cmF0aW9uKHZhbHVlOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FjY291bnRJZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19