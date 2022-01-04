"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsyncResolver = exports.AppsyncResolverPipelineConfigOutputReference = exports.appsyncResolverPipelineConfigToTerraform = exports.AppsyncResolverCachingConfigOutputReference = exports.appsyncResolverCachingConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appsyncResolverCachingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        caching_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachingKeys),
        ttl: cdktf.numberToTerraform(struct.ttl),
    };
}
exports.appsyncResolverCachingConfigToTerraform = appsyncResolverCachingConfigToTerraform;
/**
 * @stability stable
 */
class AppsyncResolverCachingConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._cachingKeys) {
            hasAnyValues = true;
            internalValueResult.cachingKeys = this._cachingKeys;
        }
        if (this._ttl) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cachingKeys = undefined;
            this._ttl = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cachingKeys = value.cachingKeys;
            this._ttl = value.ttl;
        }
    }
    /**
     * @stability stable
     */
    get cachingKeys() {
        return this.getListAttribute('caching_keys');
    }
    /**
     * @stability stable
     */
    set cachingKeys(value) {
        this._cachingKeys = value;
    }
    /**
     * @stability stable
     */
    resetCachingKeys() {
        this._cachingKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cachingKeysInput() {
        return this._cachingKeys;
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
}
exports.AppsyncResolverCachingConfigOutputReference = AppsyncResolverCachingConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppsyncResolverCachingConfigOutputReference[_a] = { fqn: "@cdktf/provider-aws.appsync.AppsyncResolverCachingConfigOutputReference", version: "3.0.1" };
function appsyncResolverPipelineConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        functions: cdktf.listMapper(cdktf.stringToTerraform)(struct.functions),
    };
}
exports.appsyncResolverPipelineConfigToTerraform = appsyncResolverPipelineConfigToTerraform;
/**
 * @stability stable
 */
class AppsyncResolverPipelineConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._functions) {
            hasAnyValues = true;
            internalValueResult.functions = this._functions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._functions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._functions = value.functions;
        }
    }
    /**
     * @stability stable
     */
    get functions() {
        return this.getListAttribute('functions');
    }
    /**
     * @stability stable
     */
    set functions(value) {
        this._functions = value;
    }
    /**
     * @stability stable
     */
    resetFunctions() {
        this._functions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get functionsInput() {
        return this._functions;
    }
}
exports.AppsyncResolverPipelineConfigOutputReference = AppsyncResolverPipelineConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppsyncResolverPipelineConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.appsync.AppsyncResolverPipelineConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver}.
 *
 * @stability stable
 */
class AppsyncResolver extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appsync_resolver',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // caching_config - computed: false, optional: true, required: false
        this._cachingConfig = new AppsyncResolverCachingConfigOutputReference(this, "caching_config", true);
        // pipeline_config - computed: false, optional: true, required: false
        this._pipelineConfig = new AppsyncResolverPipelineConfigOutputReference(this, "pipeline_config", true);
        this._apiId = config.apiId;
        this._dataSource = config.dataSource;
        this._field = config.field;
        this._kind = config.kind;
        this._requestTemplate = config.requestTemplate;
        this._responseTemplate = config.responseTemplate;
        this._type = config.type;
        this._cachingConfig.internalValue = config.cachingConfig;
        this._pipelineConfig.internalValue = config.pipelineConfig;
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
    get dataSource() {
        return this.getStringAttribute('data_source');
    }
    /**
     * @stability stable
     */
    set dataSource(value) {
        this._dataSource = value;
    }
    /**
     * @stability stable
     */
    resetDataSource() {
        this._dataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataSourceInput() {
        return this._dataSource;
    }
    /**
     * @stability stable
     */
    get field() {
        return this.getStringAttribute('field');
    }
    /**
     * @stability stable
     */
    set field(value) {
        this._field = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fieldInput() {
        return this._field;
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
    get kind() {
        return this.getStringAttribute('kind');
    }
    /**
     * @stability stable
     */
    set kind(value) {
        this._kind = value;
    }
    /**
     * @stability stable
     */
    resetKind() {
        this._kind = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kindInput() {
        return this._kind;
    }
    /**
     * @stability stable
     */
    get requestTemplate() {
        return this.getStringAttribute('request_template');
    }
    /**
     * @stability stable
     */
    set requestTemplate(value) {
        this._requestTemplate = value;
    }
    /**
     * @stability stable
     */
    resetRequestTemplate() {
        this._requestTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requestTemplateInput() {
        return this._requestTemplate;
    }
    /**
     * @stability stable
     */
    get responseTemplate() {
        return this.getStringAttribute('response_template');
    }
    /**
     * @stability stable
     */
    set responseTemplate(value) {
        this._responseTemplate = value;
    }
    /**
     * @stability stable
     */
    resetResponseTemplate() {
        this._responseTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseTemplateInput() {
        return this._responseTemplate;
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
    get cachingConfig() {
        return this._cachingConfig;
    }
    /**
     * @stability stable
     */
    putCachingConfig(value) {
        this._cachingConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCachingConfig() {
        this._cachingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cachingConfigInput() {
        return this._cachingConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get pipelineConfig() {
        return this._pipelineConfig;
    }
    /**
     * @stability stable
     */
    putPipelineConfig(value) {
        this._pipelineConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPipelineConfig() {
        this._pipelineConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pipelineConfigInput() {
        return this._pipelineConfig.internalValue;
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
            data_source: cdktf.stringToTerraform(this._dataSource),
            field: cdktf.stringToTerraform(this._field),
            kind: cdktf.stringToTerraform(this._kind),
            request_template: cdktf.stringToTerraform(this._requestTemplate),
            response_template: cdktf.stringToTerraform(this._responseTemplate),
            type: cdktf.stringToTerraform(this._type),
            caching_config: appsyncResolverCachingConfigToTerraform(this._cachingConfig.internalValue),
            pipeline_config: appsyncResolverPipelineConfigToTerraform(this._pipelineConfig.internalValue),
        };
    }
}
exports.AppsyncResolver = AppsyncResolver;
_c = JSII_RTTI_SYMBOL_1;
AppsyncResolver[_c] = { fqn: "@cdktf/provider-aws.appsync.AppsyncResolver", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppsyncResolver.tfResourceType = "aws_appsync_resolver";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3luYy1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBzeW5jL2FwcHN5bmMtcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE4Qi9CLFNBQWdCLHVDQUF1QyxDQUFDLE1BQW1GO0lBQ3pJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUM1RSxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFURCwwRkFTQzs7OztBQUVELE1BQWEsMkNBQTRDLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJbEYsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxD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dEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2hFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEUsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLGNBQWMsRUFBRSx1Q0FBdUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUMxRixlQUFlLEVBQUUsd0NBQXdDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7U0FDOUYsQ0FBQztJQUNKLENBQUM7O0FBdk1ILDBDQXdNQzs7O0FBdE1DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csOEJBQWMsR0FBVyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNSZXNvbHZlckNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcGlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YVNvdXJjZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpZWxkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1ZXN0VGVtcGxhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNwb25zZVRlbXBsYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhY2hpbmdDb25maWc/OiBBcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGlwZWxpbmVDb25maWc/OiBBcHBzeW5jUmVzb2x2ZXJQaXBlbGluZUNvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhY2hpbmdLZXlzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR0bD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNSZXNvbHZlckNhY2hpbmdDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNhY2hpbmdfa2V5czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jYWNoaW5nS2V5cyksXG4gICAgdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnR0bCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcHN5bmNSZXNvbHZlckNhY2hpbmdDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2FjaGluZ0tleXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhY2hpbmdLZXlzID0gdGhpcy5fY2FjaGluZ0tleXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl90dGwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR0bCA9IHRoaXMuX3R0bDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHN5bmNSZXNvbHZlckNhY2hpbmdDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jYWNoaW5nS2V5cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R0bCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2FjaGluZ0tleXMgPSB2YWx1ZS5jYWNoaW5nS2V5cztcbiAgICAgIHRoaXMuX3R0bCA9IHZhbHVlLnR0bDtcbiAgICB9XG4gIH1cblxuICAvLyBjYWNoaW5nX2tleXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FjaGluZ0tleXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2FjaGluZ0tleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY2FjaGluZ19rZXlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYWNoaW5nS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jYWNoaW5nS2V5cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhY2hpbmdLZXlzKCkge1xuICAgIHRoaXMuX2NhY2hpbmdLZXlzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWNoaW5nS2V5c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoaW5nS2V5cztcbiAgfVxuXG4gIC8vIHR0bCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dGw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R0bCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHRsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdGwoKSB7XG4gICAgdGhpcy5fdHRsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHRsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnVuY3Rpb25zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jUmVzb2x2ZXJQaXBlbGluZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmdW5jdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZnVuY3Rpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Z1bmN0aW9ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZnVuY3Rpb25zID0gdGhpcy5fZnVuY3Rpb25zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mdW5jdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Z1bmN0aW9ucyA9IHZhbHVlLmZ1bmN0aW9ucztcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZnVuY3Rpb25zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdmdW5jdGlvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZ1bmN0aW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9mdW5jdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGdW5jdGlvbnMoKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25zO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcHBzeW5jUmVzb2x2ZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXBwc3luY19yZXNvbHZlclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBwc3luY1Jlc29sdmVyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBwc3luY19yZXNvbHZlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hcGlJZCA9IGNvbmZpZy5hcGlJZDtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gY29uZmlnLmRhdGFTb3VyY2U7XG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5fa2luZCA9IGNvbmZpZy5raW5kO1xuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IGNvbmZpZy5yZXF1ZXN0VGVtcGxhdGU7XG4gICAgdGhpcy5fcmVzcG9uc2VUZW1wbGF0ZSA9IGNvbmZpZy5yZXNwb25zZVRlbXBsYXRlO1xuICAgIHRoaXMuX3R5cGUgPSBjb25maWcudHlwZTtcbiAgICB0aGlzLl9jYWNoaW5nQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuY2FjaGluZ0NvbmZpZztcbiAgICB0aGlzLl9waXBlbGluZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnBpcGVsaW5lQ29uZmlnO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcGlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXBpSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwaUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBpX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcGlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBpSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBpSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpSWQ7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRhdGFfc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGFTb3VyY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NvdXJjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YVNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhdGFTb3VyY2UoKSB7XG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xuICB9XG5cbiAgLy8gZmllbGQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmllbGQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpZWxkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmllbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpZWxkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maWVsZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWVsZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWVsZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBraW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tpbmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtpbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdraW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCBraW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9raW5kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2luZCgpIHtcbiAgICB0aGlzLl9raW5kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBraW5kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gIH1cblxuICAvLyByZXF1ZXN0X3RlbXBsYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVlc3RUZW1wbGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVxdWVzdFRlbXBsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVxdWVzdF90ZW1wbGF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWVzdFRlbXBsYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1ZXN0VGVtcGxhdGUoKSB7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1ZXN0VGVtcGxhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFRlbXBsYXRlO1xuICB9XG5cbiAgLy8gcmVzcG9uc2VfdGVtcGxhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzcG9uc2VUZW1wbGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc3BvbnNlX3RlbXBsYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNwb25zZVRlbXBsYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNwb25zZVRlbXBsYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzcG9uc2VUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLl9yZXNwb25zZVRlbXBsYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNwb25zZVRlbXBsYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVGVtcGxhdGU7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8vIGNhY2hpbmdfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhY2hpbmdDb25maWcgPSBuZXcgQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjYWNoaW5nX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjYWNoaW5nQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoaW5nQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDYWNoaW5nQ29uZmlnKHZhbHVlOiBBcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnKSB7XG4gICAgdGhpcy5fY2FjaGluZ0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FjaGluZ0NvbmZpZygpIHtcbiAgICB0aGlzLl9jYWNoaW5nQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhY2hpbmdDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGluZ0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcGlwZWxpbmVfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BpcGVsaW5lQ29uZmlnID0gbmV3IEFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInBpcGVsaW5lX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwaXBlbGluZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dFBpcGVsaW5lQ29uZmlnKHZhbHVlOiBBcHBzeW5jUmVzb2x2ZXJQaXBlbGluZUNvbmZpZykge1xuICAgIHRoaXMuX3BpcGVsaW5lQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQaXBlbGluZUNvbmZpZygpIHtcbiAgICB0aGlzLl9waXBlbGluZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwaXBlbGluZUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZUNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwaUlkKSxcbiAgICAgIGRhdGFfc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhU291cmNlKSxcbiAgICAgIGZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maWVsZCksXG4gICAgICBraW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9raW5kKSxcbiAgICAgIHJlcXVlc3RfdGVtcGxhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSksXG4gICAgICByZXNwb25zZV90ZW1wbGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVzcG9uc2VUZW1wbGF0ZSksXG4gICAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgIGNhY2hpbmdfY29uZmlnOiBhcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fY2FjaGluZ0NvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHBpcGVsaW5lX2NvbmZpZzogYXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9waXBlbGluZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=