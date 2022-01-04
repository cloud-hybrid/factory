"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apigatewayv2Route = exports.apigatewayv2RouteRequestParameterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apigatewayv2RouteRequestParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        request_parameter_key: cdktf.stringToTerraform(struct.requestParameterKey),
        required: cdktf.booleanToTerraform(struct.required),
    };
}
exports.apigatewayv2RouteRequestParameterToTerraform = apigatewayv2RouteRequestParameterToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route}.
 *
 * @stability stable
 */
class Apigatewayv2Route extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apigatewayv2_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._apiId = config.apiId;
        this._apiKeyRequired = config.apiKeyRequired;
        this._authorizationScopes = config.authorizationScopes;
        this._authorizationType = config.authorizationType;
        this._authorizerId = config.authorizerId;
        this._modelSelectionExpression = config.modelSelectionExpression;
        this._operationName = config.operationName;
        this._requestModels = config.requestModels;
        this._routeKey = config.routeKey;
        this._routeResponseSelectionExpression = config.routeResponseSelectionExpression;
        this._target = config.target;
        this._requestParameter = config.requestParameter;
    }
    /**
     * @stability stable
     */
    get apiId() {
        return this.getStringAttribute('api_id');
    }
    /**
     * @stability stable
     */
    set apiId(value) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get apiIdInput() {
        return this._apiId;
    }
    /**
     * @stability stable
     */
    get apiKeyRequired() {
        return this.getBooleanAttribute('api_key_required');
    }
    /**
     * @stability stable
     */
    set apiKeyRequired(value) {
        this._apiKeyRequired = value;
    }
    /**
     * @stability stable
     */
    resetApiKeyRequired() {
        this._apiKeyRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get apiKeyRequiredInput() {
        return this._apiKeyRequired;
    }
    /**
     * @stability stable
     */
    get authorizationScopes() {
        return this.getListAttribute('authorization_scopes');
    }
    /**
     * @stability stable
     */
    set authorizationScopes(value) {
        this._authorizationScopes = value;
    }
    /**
     * @stability stable
     */
    resetAuthorizationScopes() {
        this._authorizationScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizationScopesInput() {
        return this._authorizationScopes;
    }
    /**
     * @stability stable
     */
    get authorizationType() {
        return this.getStringAttribute('authorization_type');
    }
    /**
     * @stability stable
     */
    set authorizationType(value) {
        this._authorizationType = value;
    }
    /**
     * @stability stable
     */
    resetAuthorizationType() {
        this._authorizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizationTypeInput() {
        return this._authorizationType;
    }
    /**
     * @stability stable
     */
    get authorizerId() {
        return this.getStringAttribute('authorizer_id');
    }
    /**
     * @stability stable
     */
    set authorizerId(value) {
        this._authorizerId = value;
    }
    /**
     * @stability stable
     */
    resetAuthorizerId() {
        this._authorizerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizerIdInput() {
        return this._authorizerId;
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
    get modelSelectionExpression() {
        return this.getStringAttribute('model_selection_expression');
    }
    /**
     * @stability stable
     */
    set modelSelectionExpression(value) {
        this._modelSelectionExpression = value;
    }
    /**
     * @stability stable
     */
    resetModelSelectionExpression() {
        this._modelSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get modelSelectionExpressionInput() {
        return this._modelSelectionExpression;
    }
    /**
     * @stability stable
     */
    get operationName() {
        return this.getStringAttribute('operation_name');
    }
    /**
     * @stability stable
     */
    set operationName(value) {
        this._operationName = value;
    }
    /**
     * @stability stable
     */
    resetOperationName() {
        this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get operationNameInput() {
        return this._operationName;
    }
    /**
     * @stability stable
     */
    get requestModels() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('request_models');
    }
    /**
     * @stability stable
     */
    set requestModels(value) {
        this._requestModels = value;
    }
    /**
     * @stability stable
     */
    resetRequestModels() {
        this._requestModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requestModelsInput() {
        return this._requestModels;
    }
    /**
     * @stability stable
     */
    get routeKey() {
        return this.getStringAttribute('route_key');
    }
    /**
     * @stability stable
     */
    set routeKey(value) {
        this._routeKey = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get routeKeyInput() {
        return this._routeKey;
    }
    /**
     * @stability stable
     */
    get routeResponseSelectionExpression() {
        return this.getStringAttribute('route_response_selection_expression');
    }
    /**
     * @stability stable
     */
    set routeResponseSelectionExpression(value) {
        this._routeResponseSelectionExpression = value;
    }
    /**
     * @stability stable
     */
    resetRouteResponseSelectionExpression() {
        this._routeResponseSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get routeResponseSelectionExpressionInput() {
        return this._routeResponseSelectionExpression;
    }
    /**
     * @stability stable
     */
    get target() {
        return this.getStringAttribute('target');
    }
    /**
     * @stability stable
     */
    set target(value) {
        this._target = value;
    }
    /**
     * @stability stable
     */
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetInput() {
        return this._target;
    }
    /**
     * @stability stable
     */
    get requestParameter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('request_parameter');
    }
    /**
     * @stability stable
     */
    set requestParameter(value) {
        this._requestParameter = value;
    }
    /**
     * @stability stable
     */
    resetRequestParameter() {
        this._requestParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requestParameterInput() {
        return this._requestParameter;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
            authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
            authorization_type: cdktf.stringToTerraform(this._authorizationType),
            authorizer_id: cdktf.stringToTerraform(this._authorizerId),
            model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
            operation_name: cdktf.stringToTerraform(this._operationName),
            request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
            route_key: cdktf.stringToTerraform(this._routeKey),
            route_response_selection_expression: cdktf.stringToTerraform(this._routeResponseSelectionExpression),
            target: cdktf.stringToTerraform(this._target),
            request_parameter: cdktf.listMapper(apigatewayv2RouteRequestParameterToTerraform)(this._requestParameter),
        };
    }
}
exports.Apigatewayv2Route = Apigatewayv2Route;
_a = JSII_RTTI_SYMBOL_1;
Apigatewayv2Route[_a] = { fqn: "@cdktf/provider-aws.apigatewayv2.Apigatewayv2Route", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Apigatewayv2Route.tfResourceType = "aws_apigatewayv2_route";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheXYyLXJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaWdhdGV3YXl2Mi9hcGlnYXRld2F5djItcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFvQy9CLFNBQWdCLDRDQUE0QyxDQUFDLE1BQTBDO0lBQ3JHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDckQsQ0FBQTtBQUNILENBQUM7QUFURCxvR0FTQzs7Ozs7O0FBSUQsTUFBYSxpQkFBa0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzVELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUErQjtRQUM5RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHdCQUF3QjtZQUMvQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxD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QWlCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1lBQ25GLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM1RCxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUMzRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztZQUNwRyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMxRyxDQUFDO0lBQ0osQ0FBQzs7QUE3UEgsOENBOFBDOzs7QUE1UEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxnQ0FBYyxHQUFXLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEFwaWdhdGV3YXl2MlJvdXRlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcGlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcGlLZXlSZXF1aXJlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRob3JpemF0aW9uU2NvcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRob3JpemF0aW9uVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aG9yaXplcklkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vZGVsU2VsZWN0aW9uRXhwcmVzc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcGVyYXRpb25OYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3RNb2RlbHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb3V0ZUtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3RQYXJhbWV0ZXI/OiBBcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXJbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBpZ2F0ZXdheXYyUm91dGVSZXF1ZXN0UGFyYW1ldGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3RQYXJhbWV0ZXJLZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlZDogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpZ2F0ZXdheXYyUm91dGVSZXF1ZXN0UGFyYW1ldGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQXBpZ2F0ZXdheXYyUm91dGVSZXF1ZXN0UGFyYW1ldGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVxdWVzdF9wYXJhbWV0ZXJfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVlc3RQYXJhbWV0ZXJLZXkpLFxuICAgIHJlcXVpcmVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlZCksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEFwaWdhdGV3YXl2MlJvdXRlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2FwaWdhdGV3YXl2Ml9yb3V0ZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBpZ2F0ZXdheXYyUm91dGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hcGlnYXRld2F5djJfcm91dGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXBpSWQgPSBjb25maWcuYXBpSWQ7XG4gICAgdGhpcy5fYXBpS2V5UmVxdWlyZWQgPSBjb25maWcuYXBpS2V5UmVxdWlyZWQ7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvblNjb3BlcyA9IGNvbmZpZy5hdXRob3JpemF0aW9uU2NvcGVzO1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25UeXBlID0gY29uZmlnLmF1dGhvcml6YXRpb25UeXBlO1xuICAgIHRoaXMuX2F1dGhvcml6ZXJJZCA9IGNvbmZpZy5hdXRob3JpemVySWQ7XG4gICAgdGhpcy5fbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uID0gY29uZmlnLm1vZGVsU2VsZWN0aW9uRXhwcmVzc2lvbjtcbiAgICB0aGlzLl9vcGVyYXRpb25OYW1lID0gY29uZmlnLm9wZXJhdGlvbk5hbWU7XG4gICAgdGhpcy5fcmVxdWVzdE1vZGVscyA9IGNvbmZpZy5yZXF1ZXN0TW9kZWxzO1xuICAgIHRoaXMuX3JvdXRlS2V5ID0gY29uZmlnLnJvdXRlS2V5O1xuICAgIHRoaXMuX3JvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uID0gY29uZmlnLnJvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uO1xuICAgIHRoaXMuX3RhcmdldCA9IGNvbmZpZy50YXJnZXQ7XG4gICAgdGhpcy5fcmVxdWVzdFBhcmFtZXRlciA9IGNvbmZpZy5yZXF1ZXN0UGFyYW1ldGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcGlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXBpSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwaUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBpX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcGlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBpSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBpSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpSWQ7XG4gIH1cblxuICAvLyBhcGlfa2V5X3JlcXVpcmVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwaUtleVJlcXVpcmVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhcGlLZXlSZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhcGlfa2V5X3JlcXVpcmVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXBpS2V5UmVxdWlyZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FwaUtleVJlcXVpcmVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBpS2V5UmVxdWlyZWQoKSB7XG4gICAgdGhpcy5fYXBpS2V5UmVxdWlyZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwaUtleVJlcXVpcmVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUtleVJlcXVpcmVkO1xuICB9XG5cbiAgLy8gYXV0aG9yaXphdGlvbl9zY29wZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aG9yaXphdGlvblNjb3Blcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhdXRob3JpemF0aW9uU2NvcGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2F1dGhvcml6YXRpb25fc2NvcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRob3JpemF0aW9uU2NvcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25TY29wZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRob3JpemF0aW9uU2NvcGVzKCkge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25TY29wZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25TY29wZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvblNjb3BlcztcbiAgfVxuXG4gIC8vIGF1dGhvcml6YXRpb25fdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRob3JpemF0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRob3JpemF0aW9uX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhvcml6YXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRob3JpemF0aW9uVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhvcml6YXRpb25UeXBlKCkge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemF0aW9uVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRob3JpemF0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIGF1dGhvcml6ZXJfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aG9yaXplcklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRob3JpemVySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRob3JpemVyX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRob3JpemVySWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhvcml6ZXJJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhvcml6ZXJJZCgpIHtcbiAgICB0aGlzLl9hdXRob3JpemVySWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6ZXJJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRob3JpemVySWQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbW9kZWxfc2VsZWN0aW9uX2V4cHJlc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtb2RlbFNlbGVjdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtb2RlbF9zZWxlY3Rpb25fZXhwcmVzc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RlbFNlbGVjdGlvbkV4cHJlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb2RlbFNlbGVjdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgdGhpcy5fbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb2RlbFNlbGVjdGlvbkV4cHJlc3Npb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uO1xuICB9XG5cbiAgLy8gb3BlcmF0aW9uX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3BlcmF0aW9uTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3BlcmF0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29wZXJhdGlvbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBvcGVyYXRpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcGVyYXRpb25OYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3BlcmF0aW9uTmFtZSgpIHtcbiAgICB0aGlzLl9vcGVyYXRpb25OYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcGVyYXRpb25OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbk5hbWU7XG4gIH1cblxuICAvLyByZXF1ZXN0X21vZGVscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1ZXN0TW9kZWxzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1ZXN0TW9kZWxzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXF1ZXN0X21vZGVscycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVlc3RNb2RlbHModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlcXVlc3RNb2RlbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1ZXN0TW9kZWxzKCkge1xuICAgIHRoaXMuX3JlcXVlc3RNb2RlbHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVlc3RNb2RlbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdE1vZGVscztcbiAgfVxuXG4gIC8vIHJvdXRlX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yb3V0ZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm91dGVLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb3V0ZV9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvdXRlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb3V0ZUtleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb3V0ZUtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZUtleTtcbiAgfVxuXG4gIC8vIHJvdXRlX3Jlc3BvbnNlX3NlbGVjdGlvbl9leHByZXNzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvdXRlX3Jlc3BvbnNlX3NlbGVjdGlvbl9leHByZXNzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm91dGVSZXNwb25zZVNlbGVjdGlvbkV4cHJlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbigpIHtcbiAgICB0aGlzLl9yb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm91dGVSZXNwb25zZVNlbGVjdGlvbkV4cHJlc3Npb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm91dGVSZXNwb25zZVNlbGVjdGlvbkV4cHJlc3Npb247XG4gIH1cblxuICAvLyB0YXJnZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXJnZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0KCkge1xuICAgIHRoaXMuX3RhcmdldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgfVxuXG4gIC8vIHJlcXVlc3RfcGFyYW1ldGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVlc3RQYXJhbWV0ZXI/OiBBcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXJbXTsgXG4gIHB1YmxpYyBnZXQgcmVxdWVzdFBhcmFtZXRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVxdWVzdF9wYXJhbWV0ZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1ZXN0UGFyYW1ldGVyKHZhbHVlOiBBcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXJbXSkge1xuICAgIHRoaXMuX3JlcXVlc3RQYXJhbWV0ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1ZXN0UGFyYW1ldGVyKCkge1xuICAgIHRoaXMuX3JlcXVlc3RQYXJhbWV0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVlc3RQYXJhbWV0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFBhcmFtZXRlcjtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hcGlJZCksXG4gICAgICBhcGlfa2V5X3JlcXVpcmVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXBpS2V5UmVxdWlyZWQpLFxuICAgICAgYXV0aG9yaXphdGlvbl9zY29wZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2F1dGhvcml6YXRpb25TY29wZXMpLFxuICAgICAgYXV0aG9yaXphdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRob3JpemF0aW9uVHlwZSksXG4gICAgICBhdXRob3JpemVyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRob3JpemVySWQpLFxuICAgICAgbW9kZWxfc2VsZWN0aW9uX2V4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21vZGVsU2VsZWN0aW9uRXhwcmVzc2lvbiksXG4gICAgICBvcGVyYXRpb25fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fb3BlcmF0aW9uTmFtZSksXG4gICAgICByZXF1ZXN0X21vZGVsczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fcmVxdWVzdE1vZGVscyksXG4gICAgICByb3V0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvdXRlS2V5KSxcbiAgICAgIHJvdXRlX3Jlc3BvbnNlX3NlbGVjdGlvbl9leHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbiksXG4gICAgICB0YXJnZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RhcmdldCksXG4gICAgICByZXF1ZXN0X3BhcmFtZXRlcjogY2RrdGYubGlzdE1hcHBlcihhcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXJUb1RlcnJhZm9ybSkodGhpcy5fcmVxdWVzdFBhcmFtZXRlciksXG4gICAgfTtcbiAgfVxufVxuIl19