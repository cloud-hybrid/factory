"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayMethodSettings = exports.ApiGatewayMethodSettingsSettingsOutputReference = exports.apiGatewayMethodSettingsSettingsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apiGatewayMethodSettingsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cache_data_encrypted: cdktf.booleanToTerraform(struct.cacheDataEncrypted),
        cache_ttl_in_seconds: cdktf.numberToTerraform(struct.cacheTtlInSeconds),
        caching_enabled: cdktf.booleanToTerraform(struct.cachingEnabled),
        data_trace_enabled: cdktf.booleanToTerraform(struct.dataTraceEnabled),
        logging_level: cdktf.stringToTerraform(struct.loggingLevel),
        metrics_enabled: cdktf.booleanToTerraform(struct.metricsEnabled),
        require_authorization_for_cache_control: cdktf.booleanToTerraform(struct.requireAuthorizationForCacheControl),
        throttling_burst_limit: cdktf.numberToTerraform(struct.throttlingBurstLimit),
        throttling_rate_limit: cdktf.numberToTerraform(struct.throttlingRateLimit),
        unauthorized_cache_control_header_strategy: cdktf.stringToTerraform(struct.unauthorizedCacheControlHeaderStrategy),
    };
}
exports.apiGatewayMethodSettingsSettingsToTerraform = apiGatewayMethodSettingsSettingsToTerraform;
/**
 * @stability stable
 */
class ApiGatewayMethodSettingsSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._cacheDataEncrypted) {
            hasAnyValues = true;
            internalValueResult.cacheDataEncrypted = this._cacheDataEncrypted;
        }
        if (this._cacheTtlInSeconds) {
            hasAnyValues = true;
            internalValueResult.cacheTtlInSeconds = this._cacheTtlInSeconds;
        }
        if (this._cachingEnabled) {
            hasAnyValues = true;
            internalValueResult.cachingEnabled = this._cachingEnabled;
        }
        if (this._dataTraceEnabled) {
            hasAnyValues = true;
            internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
        }
        if (this._loggingLevel) {
            hasAnyValues = true;
            internalValueResult.loggingLevel = this._loggingLevel;
        }
        if (this._metricsEnabled) {
            hasAnyValues = true;
            internalValueResult.metricsEnabled = this._metricsEnabled;
        }
        if (this._requireAuthorizationForCacheControl) {
            hasAnyValues = true;
            internalValueResult.requireAuthorizationForCacheControl = this._requireAuthorizationForCacheControl;
        }
        if (this._throttlingBurstLimit) {
            hasAnyValues = true;
            internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
        }
        if (this._throttlingRateLimit) {
            hasAnyValues = true;
            internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
        }
        if (this._unauthorizedCacheControlHeaderStrategy) {
            hasAnyValues = true;
            internalValueResult.unauthorizedCacheControlHeaderStrategy = this._unauthorizedCacheControlHeaderStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cacheDataEncrypted = undefined;
            this._cacheTtlInSeconds = undefined;
            this._cachingEnabled = undefined;
            this._dataTraceEnabled = undefined;
            this._loggingLevel = undefined;
            this._metricsEnabled = undefined;
            this._requireAuthorizationForCacheControl = undefined;
            this._throttlingBurstLimit = undefined;
            this._throttlingRateLimit = undefined;
            this._unauthorizedCacheControlHeaderStrategy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cacheDataEncrypted = value.cacheDataEncrypted;
            this._cacheTtlInSeconds = value.cacheTtlInSeconds;
            this._cachingEnabled = value.cachingEnabled;
            this._dataTraceEnabled = value.dataTraceEnabled;
            this._loggingLevel = value.loggingLevel;
            this._metricsEnabled = value.metricsEnabled;
            this._requireAuthorizationForCacheControl = value.requireAuthorizationForCacheControl;
            this._throttlingBurstLimit = value.throttlingBurstLimit;
            this._throttlingRateLimit = value.throttlingRateLimit;
            this._unauthorizedCacheControlHeaderStrategy = value.unauthorizedCacheControlHeaderStrategy;
        }
    }
    /**
     * @stability stable
     */
    get cacheDataEncrypted() {
        return this.getBooleanAttribute('cache_data_encrypted');
    }
    /**
     * @stability stable
     */
    set cacheDataEncrypted(value) {
        this._cacheDataEncrypted = value;
    }
    /**
     * @stability stable
     */
    resetCacheDataEncrypted() {
        this._cacheDataEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cacheDataEncryptedInput() {
        return this._cacheDataEncrypted;
    }
    /**
     * @stability stable
     */
    get cacheTtlInSeconds() {
        return this.getNumberAttribute('cache_ttl_in_seconds');
    }
    /**
     * @stability stable
     */
    set cacheTtlInSeconds(value) {
        this._cacheTtlInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetCacheTtlInSeconds() {
        this._cacheTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cacheTtlInSecondsInput() {
        return this._cacheTtlInSeconds;
    }
    /**
     * @stability stable
     */
    get cachingEnabled() {
        return this.getBooleanAttribute('caching_enabled');
    }
    /**
     * @stability stable
     */
    set cachingEnabled(value) {
        this._cachingEnabled = value;
    }
    /**
     * @stability stable
     */
    resetCachingEnabled() {
        this._cachingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cachingEnabledInput() {
        return this._cachingEnabled;
    }
    /**
     * @stability stable
     */
    get dataTraceEnabled() {
        return this.getBooleanAttribute('data_trace_enabled');
    }
    /**
     * @stability stable
     */
    set dataTraceEnabled(value) {
        this._dataTraceEnabled = value;
    }
    /**
     * @stability stable
     */
    resetDataTraceEnabled() {
        this._dataTraceEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataTraceEnabledInput() {
        return this._dataTraceEnabled;
    }
    /**
     * @stability stable
     */
    get loggingLevel() {
        return this.getStringAttribute('logging_level');
    }
    /**
     * @stability stable
     */
    set loggingLevel(value) {
        this._loggingLevel = value;
    }
    /**
     * @stability stable
     */
    resetLoggingLevel() {
        this._loggingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get loggingLevelInput() {
        return this._loggingLevel;
    }
    /**
     * @stability stable
     */
    get metricsEnabled() {
        return this.getBooleanAttribute('metrics_enabled');
    }
    /**
     * @stability stable
     */
    set metricsEnabled(value) {
        this._metricsEnabled = value;
    }
    /**
     * @stability stable
     */
    resetMetricsEnabled() {
        this._metricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metricsEnabledInput() {
        return this._metricsEnabled;
    }
    /**
     * @stability stable
     */
    get requireAuthorizationForCacheControl() {
        return this.getBooleanAttribute('require_authorization_for_cache_control');
    }
    /**
     * @stability stable
     */
    set requireAuthorizationForCacheControl(value) {
        this._requireAuthorizationForCacheControl = value;
    }
    /**
     * @stability stable
     */
    resetRequireAuthorizationForCacheControl() {
        this._requireAuthorizationForCacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireAuthorizationForCacheControlInput() {
        return this._requireAuthorizationForCacheControl;
    }
    /**
     * @stability stable
     */
    get throttlingBurstLimit() {
        return this.getNumberAttribute('throttling_burst_limit');
    }
    /**
     * @stability stable
     */
    set throttlingBurstLimit(value) {
        this._throttlingBurstLimit = value;
    }
    /**
     * @stability stable
     */
    resetThrottlingBurstLimit() {
        this._throttlingBurstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get throttlingBurstLimitInput() {
        return this._throttlingBurstLimit;
    }
    /**
     * @stability stable
     */
    get throttlingRateLimit() {
        return this.getNumberAttribute('throttling_rate_limit');
    }
    /**
     * @stability stable
     */
    set throttlingRateLimit(value) {
        this._throttlingRateLimit = value;
    }
    /**
     * @stability stable
     */
    resetThrottlingRateLimit() {
        this._throttlingRateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get throttlingRateLimitInput() {
        return this._throttlingRateLimit;
    }
    /**
     * @stability stable
     */
    get unauthorizedCacheControlHeaderStrategy() {
        return this.getStringAttribute('unauthorized_cache_control_header_strategy');
    }
    /**
     * @stability stable
     */
    set unauthorizedCacheControlHeaderStrategy(value) {
        this._unauthorizedCacheControlHeaderStrategy = value;
    }
    /**
     * @stability stable
     */
    resetUnauthorizedCacheControlHeaderStrategy() {
        this._unauthorizedCacheControlHeaderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unauthorizedCacheControlHeaderStrategyInput() {
        return this._unauthorizedCacheControlHeaderStrategy;
    }
}
exports.ApiGatewayMethodSettingsSettingsOutputReference = ApiGatewayMethodSettingsSettingsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ApiGatewayMethodSettingsSettingsOutputReference[_a] = { fqn: "@cdktf/provider-aws.apigateway.ApiGatewayMethodSettingsSettingsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings}.
 *
 * @stability stable
 */
class ApiGatewayMethodSettings extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_api_gateway_method_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // settings - computed: false, optional: false, required: true
        this._settings = new ApiGatewayMethodSettingsSettingsOutputReference(this, "settings", true);
        this._methodPath = config.methodPath;
        this._restApiId = config.restApiId;
        this._stageName = config.stageName;
        this._settings.internalValue = config.settings;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    get methodPath() {
        return this.getStringAttribute('method_path');
    }
    /**
     * @stability stable
     */
    set methodPath(value) {
        this._methodPath = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get methodPathInput() {
        return this._methodPath;
    }
    /**
     * @stability stable
     */
    get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    /**
     * @stability stable
     */
    set restApiId(value) {
        this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restApiIdInput() {
        return this._restApiId;
    }
    /**
     * @stability stable
     */
    get stageName() {
        return this.getStringAttribute('stage_name');
    }
    /**
     * @stability stable
     */
    set stageName(value) {
        this._stageName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stageNameInput() {
        return this._stageName;
    }
    /**
     * @stability stable
     */
    get settings() {
        return this._settings;
    }
    /**
     * @stability stable
     */
    putSettings(value) {
        this._settings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get settingsInput() {
        return this._settings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            method_path: cdktf.stringToTerraform(this._methodPath),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            stage_name: cdktf.stringToTerraform(this._stageName),
            settings: apiGatewayMethodSettingsSettingsToTerraform(this._settings.internalValue),
        };
    }
}
exports.ApiGatewayMethodSettings = ApiGatewayMethodSettings;
_b = JSII_RTTI_SYMBOL_1;
ApiGatewayMethodSettings[_b] = { fqn: "@cdktf/provider-aws.apigateway.ApiGatewayMethodSettings", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ApiGatewayMethodSettings.tfResourceType = "aws_api_gateway_method_settings";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdhdGV3YXktbWV0aG9kLXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaWdhdGV3YXkvYXBpLWdhdGV3YXktbWV0aG9kLXNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBb0MvQixTQUFnQiwyQ0FBMkMsQ0FBQyxNQUEyRjtJQUNySixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDMUUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RSxlQUFlLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDakUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0RSxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsZUFBZSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2pFLHVDQUF1QyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsbUNBQW1DLENBQUM7UUFDOUcsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxxQkFBcUIsRUFBRSxLQUFLLENBQUMs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VyxDQUFDLEtBQXVDO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDckQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELFFBQVEsRUFBRSwyQ0FBMkMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUNwRixDQUFDO0lBQ0osQ0FBQzs7QUFyR0gsNERBc0dDOzs7QUFwR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyx1Q0FBYyxHQUFXLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldGhvZFBhdGg6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzdEFwaUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFnZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2V0dGluZ3M6IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhY2hlRGF0YUVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGVUdGxJblNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGluZ0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YVRyYWNlRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ2dpbmdMZXZlbD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNzRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm90dGxpbmdCdXJzdExpbWl0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm90dGxpbmdSYXRlTGltaXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3k/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYWNoZV9kYXRhX2VuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2FjaGVEYXRhRW5jcnlwdGVkKSxcbiAgICBjYWNoZV90dGxfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jYWNoZVR0bEluU2Vjb25kcyksXG4gICAgY2FjaGluZ19lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jYWNoaW5nRW5hYmxlZCksXG4gICAgZGF0YV90cmFjZV9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhVHJhY2VFbmFibGVkKSxcbiAgICBsb2dnaW5nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ2dpbmdMZXZlbCksXG4gICAgbWV0cmljc19lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNzRW5hYmxlZCksXG4gICAgcmVxdWlyZV9hdXRob3JpemF0aW9uX2Zvcl9jYWNoZV9jb250cm9sOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbCksXG4gICAgdGhyb3R0bGluZ19idXJzdF9saW1pdDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aHJvdHRsaW5nQnVyc3RMaW1pdCksXG4gICAgdGhyb3R0bGluZ19yYXRlX2xpbWl0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRocm90dGxpbmdSYXRlTGltaXQpLFxuICAgIHVuYXV0aG9yaXplZF9jYWNoZV9jb250cm9sX2hlYWRlcl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bmF1dGhvcml6ZWRDYWNoZUNvbnRyb2xIZWFkZXJTdHJhdGVneSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYWNoZURhdGFFbmNyeXB0ZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhY2hlRGF0YUVuY3J5cHRlZCA9IHRoaXMuX2NhY2hlRGF0YUVuY3J5cHRlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhY2hlVHRsSW5TZWNvbmRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYWNoZVR0bEluU2Vjb25kcyA9IHRoaXMuX2NhY2hlVHRsSW5TZWNvbmRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2FjaGluZ0VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhY2hpbmdFbmFibGVkID0gdGhpcy5fY2FjaGluZ0VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kYXRhVHJhY2VFbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhVHJhY2VFbmFibGVkID0gdGhpcy5fZGF0YVRyYWNlRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ2dpbmdMZXZlbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nZ2luZ0xldmVsID0gdGhpcy5fbG9nZ2luZ0xldmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWV0cmljc0VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldHJpY3NFbmFibGVkID0gdGhpcy5fbWV0cmljc0VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2wgPSB0aGlzLl9yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rocm90dGxpbmdCdXJzdExpbWl0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aHJvdHRsaW5nQnVyc3RMaW1pdCA9IHRoaXMuX3Rocm90dGxpbmdCdXJzdExpbWl0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGhyb3R0bGluZ1JhdGVMaW1pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGhyb3R0bGluZ1JhdGVMaW1pdCA9IHRoaXMuX3Rocm90dGxpbmdSYXRlTGltaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91bmF1dGhvcml6ZWRDYWNoZUNvbnRyb2xIZWFkZXJTdHJhdGVneSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3kgPSB0aGlzLl91bmF1dGhvcml6ZWRDYWNoZUNvbnRyb2xIZWFkZXJTdHJhdGVneTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2FjaGVEYXRhRW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FjaGVUdGxJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jYWNoaW5nRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RhdGFUcmFjZUVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dnaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGhyb3R0bGluZ0J1cnN0TGltaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aHJvdHRsaW5nUmF0ZUxpbWl0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhY2hlRGF0YUVuY3J5cHRlZCA9IHZhbHVlLmNhY2hlRGF0YUVuY3J5cHRlZDtcbiAgICAgIHRoaXMuX2NhY2hlVHRsSW5TZWNvbmRzID0gdmFsdWUuY2FjaGVUdGxJblNlY29uZHM7XG4gICAgICB0aGlzLl9jYWNoaW5nRW5hYmxlZCA9IHZhbHVlLmNhY2hpbmdFbmFibGVkO1xuICAgICAgdGhpcy5fZGF0YVRyYWNlRW5hYmxlZCA9IHZhbHVlLmRhdGFUcmFjZUVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dnaW5nTGV2ZWwgPSB2YWx1ZS5sb2dnaW5nTGV2ZWw7XG4gICAgICB0aGlzLl9tZXRyaWNzRW5hYmxlZCA9IHZhbHVlLm1ldHJpY3NFbmFibGVkO1xuICAgICAgdGhpcy5fcmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2wgPSB2YWx1ZS5yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbDtcbiAgICAgIHRoaXMuX3Rocm90dGxpbmdCdXJzdExpbWl0ID0gdmFsdWUudGhyb3R0bGluZ0J1cnN0TGltaXQ7XG4gICAgICB0aGlzLl90aHJvdHRsaW5nUmF0ZUxpbWl0ID0gdmFsdWUudGhyb3R0bGluZ1JhdGVMaW1pdDtcbiAgICAgIHRoaXMuX3VuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5ID0gdmFsdWUudW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3k7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FjaGVfZGF0YV9lbmNyeXB0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoZURhdGFFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNhY2hlRGF0YUVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjYWNoZV9kYXRhX2VuY3J5cHRlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhY2hlRGF0YUVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2FjaGVEYXRhRW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FjaGVEYXRhRW5jcnlwdGVkKCkge1xuICAgIHRoaXMuX2NhY2hlRGF0YUVuY3J5cHRlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FjaGVEYXRhRW5jcnlwdGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlRGF0YUVuY3J5cHRlZDtcbiAgfVxuXG4gIC8vIGNhY2hlX3R0bF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FjaGVUdGxJblNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNhY2hlVHRsSW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY2FjaGVfdHRsX2luX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhY2hlVHRsSW5TZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jYWNoZVR0bEluU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhY2hlVHRsSW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX2NhY2hlVHRsSW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWNoZVR0bEluU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZVR0bEluU2Vjb25kcztcbiAgfVxuXG4gIC8vIGNhY2hpbmdfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhY2hpbmdFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjYWNoaW5nRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjYWNoaW5nX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjYWNoaW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2FjaGluZ0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYWNoaW5nRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9jYWNoaW5nRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FjaGluZ0VuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGluZ0VuYWJsZWQ7XG4gIH1cblxuICAvLyBkYXRhX3RyYWNlX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYXRhVHJhY2VFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkYXRhVHJhY2VFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RhdGFfdHJhY2VfZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFUcmFjZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RhdGFUcmFjZUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhVHJhY2VFbmFibGVkKCkge1xuICAgIHRoaXMuX2RhdGFUcmFjZUVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFUcmFjZUVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVRyYWNlRW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ2dpbmdfbGV2ZWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dnaW5nTGV2ZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ2dpbmdfbGV2ZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ2dpbmdMZXZlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0xldmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZ0xldmVsKCkge1xuICAgIHRoaXMuX2xvZ2dpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0xldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdMZXZlbDtcbiAgfVxuXG4gIC8vIG1ldHJpY3NfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY3NFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBtZXRyaWNzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdtZXRyaWNzX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRyaWNzRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbWV0cmljc0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNzRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9tZXRyaWNzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWV0cmljc0VuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljc0VuYWJsZWQ7XG4gIH1cblxuICAvLyByZXF1aXJlX2F1dGhvcml6YXRpb25fZm9yX2NhY2hlX2NvbnRyb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlQXV0aG9yaXphdGlvbkZvckNhY2hlQ29udHJvbD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVxdWlyZV9hdXRob3JpemF0aW9uX2Zvcl9jYWNoZV9jb250cm9sJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2wodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2woKSB7XG4gICAgdGhpcy5fcmVxdWlyZUF1dGhvcml6YXRpb25Gb3JDYWNoZUNvbnRyb2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVBdXRob3JpemF0aW9uRm9yQ2FjaGVDb250cm9sO1xuICB9XG5cbiAgLy8gdGhyb3R0bGluZ19idXJzdF9saW1pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHJvdHRsaW5nQnVyc3RMaW1pdD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGhyb3R0bGluZ0J1cnN0TGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aHJvdHRsaW5nX2J1cnN0X2xpbWl0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0aHJvdHRsaW5nQnVyc3RMaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyb3R0bGluZ0J1cnN0TGltaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHJvdHRsaW5nQnVyc3RMaW1pdCgpIHtcbiAgICB0aGlzLl90aHJvdHRsaW5nQnVyc3RMaW1pdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhyb3R0bGluZ0J1cnN0TGltaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyb3R0bGluZ0J1cnN0TGltaXQ7XG4gIH1cblxuICAvLyB0aHJvdHRsaW5nX3JhdGVfbGltaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhyb3R0bGluZ1JhdGVMaW1pdD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGhyb3R0bGluZ1JhdGVMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Rocm90dGxpbmdfcmF0ZV9saW1pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyb3R0bGluZ1JhdGVMaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyb3R0bGluZ1JhdGVMaW1pdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRocm90dGxpbmdSYXRlTGltaXQoKSB7XG4gICAgdGhpcy5fdGhyb3R0bGluZ1JhdGVMaW1pdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhyb3R0bGluZ1JhdGVMaW1pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJvdHRsaW5nUmF0ZUxpbWl0O1xuICB9XG5cbiAgLy8gdW5hdXRob3JpemVkX2NhY2hlX2NvbnRyb2xfaGVhZGVyX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuYXV0aG9yaXplZENhY2hlQ29udHJvbEhlYWRlclN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5hdXRob3JpemVkX2NhY2hlX2NvbnRyb2xfaGVhZGVyX3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bmF1dGhvcml6ZWRDYWNoZUNvbnRyb2xIZWFkZXJTdHJhdGVneSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVbmF1dGhvcml6ZWRDYWNoZUNvbnRyb2xIZWFkZXJTdHJhdGVneSgpIHtcbiAgICB0aGlzLl91bmF1dGhvcml6ZWRDYWNoZUNvbnRyb2xIZWFkZXJTdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5hdXRob3JpemVkQ2FjaGVDb250cm9sSGVhZGVyU3RyYXRlZ3k7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3MgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXBpX2dhdGV3YXlfbWV0aG9kX3NldHRpbmdzXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBpR2F0ZXdheU1ldGhvZFNldHRpbmdzQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBpX2dhdGV3YXlfbWV0aG9kX3NldHRpbmdzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX21ldGhvZFBhdGggPSBjb25maWcubWV0aG9kUGF0aDtcbiAgICB0aGlzLl9yZXN0QXBpSWQgPSBjb25maWcucmVzdEFwaUlkO1xuICAgIHRoaXMuX3N0YWdlTmFtZSA9IGNvbmZpZy5zdGFnZU5hbWU7XG4gICAgdGhpcy5fc2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zZXR0aW5ncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG1ldGhvZF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21ldGhvZFBhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldGhvZFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRob2RfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0aG9kUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0aG9kUGF0aCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRob2RQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGhvZFBhdGg7XG4gIH1cblxuICAvLyByZXN0X2FwaV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXN0QXBpSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc3RBcGlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc3RfYXBpX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXN0QXBpSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3RBcGlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXN0QXBpSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdEFwaUlkO1xuICB9XG5cbiAgLy8gc3RhZ2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGFnZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YWdlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YWdlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhZ2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YWdlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFnZU5hbWU7XG4gIH1cblxuICAvLyBzZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXR0aW5ncyA9IG5ldyBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzZXR0aW5nc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dFNldHRpbmdzKHZhbHVlOiBBcGlHYXRld2F5TWV0aG9kU2V0dGluZ3NTZXR0aW5ncykge1xuICAgIHRoaXMuX3NldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0aG9kX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21ldGhvZFBhdGgpLFxuICAgICAgcmVzdF9hcGlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jlc3RBcGlJZCksXG4gICAgICBzdGFnZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGFnZU5hbWUpLFxuICAgICAgc2V0dGluZ3M6IGFwaUdhdGV3YXlNZXRob2RTZXR0aW5nc1NldHRpbmdzVG9UZXJyYWZvcm0odGhpcy5fc2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19