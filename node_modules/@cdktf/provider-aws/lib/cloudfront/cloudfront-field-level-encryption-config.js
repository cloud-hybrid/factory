"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontFieldLevelEncryptionConfig = exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform = exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform = exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform = exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        format: cdktf.stringToTerraform(struct.format),
        profile_id: cdktf.stringToTerraform(struct.profileId),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform;
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform)(struct.items),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform;
/**
 * @stability stable
 */
class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference extends cdktf.ComplexObject {
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
        if (this._items) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    /**
     * @stability stable
     */
    get items() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
    }
    /**
     * @stability stable
     */
    set items(value) {
        this._items = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get itemsInput() {
        return this._items;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference = CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference[_a] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference", version: "3.0.1" };
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forward_when_content_type_is_unknown: cdktf.booleanToTerraform(struct.forwardWhenContentTypeIsUnknown),
        content_type_profiles: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct.contentTypeProfiles),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // content_type_profiles - computed: false, optional: false, required: true
        this._contentTypeProfiles = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference(this, "content_type_profiles", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._forwardWhenContentTypeIsUnknown) {
            hasAnyValues = true;
            internalValueResult.forwardWhenContentTypeIsUnknown = this._forwardWhenContentTypeIsUnknown;
        }
        if ((_f = this._contentTypeProfiles) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.contentTypeProfiles = (_g = this._contentTypeProfiles) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forwardWhenContentTypeIsUnknown = undefined;
            this._contentTypeProfiles.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forwardWhenContentTypeIsUnknown = value.forwardWhenContentTypeIsUnknown;
            this._contentTypeProfiles.internalValue = value.contentTypeProfiles;
        }
    }
    /**
     * @stability stable
     */
    get forwardWhenContentTypeIsUnknown() {
        return this.getBooleanAttribute('forward_when_content_type_is_unknown');
    }
    /**
     * @stability stable
     */
    set forwardWhenContentTypeIsUnknown(value) {
        this._forwardWhenContentTypeIsUnknown = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forwardWhenContentTypeIsUnknownInput() {
        return this._forwardWhenContentTypeIsUnknown;
    }
    /**
     * @stability stable
     */
    get contentTypeProfiles() {
        return this._contentTypeProfiles;
    }
    /**
     * @stability stable
     */
    putContentTypeProfiles(value) {
        this._contentTypeProfiles.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentTypeProfilesInput() {
        return this._contentTypeProfiles.internalValue;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference = CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference", version: "3.0.1" };
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        profile_id: cdktf.stringToTerraform(struct.profileId),
        query_arg: cdktf.stringToTerraform(struct.queryArg),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform;
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform)(struct.items),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform;
/**
 * @stability stable
 */
class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference extends cdktf.ComplexObject {
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
        if (this._items) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    /**
     * @stability stable
     */
    get items() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
    }
    /**
     * @stability stable
     */
    set items(value) {
        this._items = value;
    }
    /**
     * @stability stable
     */
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get itemsInput() {
        return this._items;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference = CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference[_c] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference", version: "3.0.1" };
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forward_when_query_arg_profile_is_unknown: cdktf.booleanToTerraform(struct.forwardWhenQueryArgProfileIsUnknown),
        query_arg_profiles: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct.queryArgProfiles),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // query_arg_profiles - computed: false, optional: true, required: false
        this._queryArgProfiles = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference(this, "query_arg_profiles", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._forwardWhenQueryArgProfileIsUnknown) {
            hasAnyValues = true;
            internalValueResult.forwardWhenQueryArgProfileIsUnknown = this._forwardWhenQueryArgProfileIsUnknown;
        }
        if ((_f = this._queryArgProfiles) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryArgProfiles = (_g = this._queryArgProfiles) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forwardWhenQueryArgProfileIsUnknown = undefined;
            this._queryArgProfiles.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forwardWhenQueryArgProfileIsUnknown = value.forwardWhenQueryArgProfileIsUnknown;
            this._queryArgProfiles.internalValue = value.queryArgProfiles;
        }
    }
    /**
     * @stability stable
     */
    get forwardWhenQueryArgProfileIsUnknown() {
        return this.getBooleanAttribute('forward_when_query_arg_profile_is_unknown');
    }
    /**
     * @stability stable
     */
    set forwardWhenQueryArgProfileIsUnknown(value) {
        this._forwardWhenQueryArgProfileIsUnknown = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forwardWhenQueryArgProfileIsUnknownInput() {
        return this._forwardWhenQueryArgProfileIsUnknown;
    }
    /**
     * @stability stable
     */
    get queryArgProfiles() {
        return this._queryArgProfiles;
    }
    /**
     * @stability stable
     */
    putQueryArgProfiles(value) {
        this._queryArgProfiles.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetQueryArgProfiles() {
        this._queryArgProfiles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryArgProfilesInput() {
        return this._queryArgProfiles.internalValue;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference = CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference[_d] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html aws_cloudfront_field_level_encryption_config}.
 *
 * @stability stable
 */
class CloudfrontFieldLevelEncryptionConfig extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html aws_cloudfront_field_level_encryption_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_field_level_encryption_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // content_type_profile_config - computed: false, optional: false, required: true
        this._contentTypeProfileConfig = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference(this, "content_type_profile_config", true);
        // query_arg_profile_config - computed: false, optional: false, required: true
        this._queryArgProfileConfig = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference(this, "query_arg_profile_config", true);
        this._comment = config.comment;
        this._contentTypeProfileConfig.internalValue = config.contentTypeProfileConfig;
        this._queryArgProfileConfig.internalValue = config.queryArgProfileConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // caller_reference - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get callerReference() {
        return this.getStringAttribute('caller_reference');
    }
    /**
     * @stability stable
     */
    get comment() {
        return this.getStringAttribute('comment');
    }
    /**
     * @stability stable
     */
    set comment(value) {
        this._comment = value;
    }
    /**
     * @stability stable
     */
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get commentInput() {
        return this._comment;
    }
    // etag - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get etag() {
        return this.getStringAttribute('etag');
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
    get contentTypeProfileConfig() {
        return this._contentTypeProfileConfig;
    }
    /**
     * @stability stable
     */
    putContentTypeProfileConfig(value) {
        this._contentTypeProfileConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentTypeProfileConfigInput() {
        return this._contentTypeProfileConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get queryArgProfileConfig() {
        return this._queryArgProfileConfig;
    }
    /**
     * @stability stable
     */
    putQueryArgProfileConfig(value) {
        this._queryArgProfileConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryArgProfileConfigInput() {
        return this._queryArgProfileConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            content_type_profile_config: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(this._contentTypeProfileConfig.internalValue),
            query_arg_profile_config: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(this._queryArgProfileConfig.internalValue),
        };
    }
}
exports.CloudfrontFieldLevelEncryptionConfig = CloudfrontFieldLevelEncryptionConfig;
_e = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfig[_e] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontFieldLevelEncryptionConfig", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CloudfrontFieldLevelEncryptionConfig.tfResourceType = "aws_cloudfront_field_level_encryption_config";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1maWVsZC1sZXZlbC1lbmNyeXB0aW9uLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZGZyb250L2Nsb3VkZnJvbnQtZmllbGQtbGV2ZWwtZW5jcnlwdGlvbi1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFvQi9CLFNBQWdCLCtGQUErRixDQUFDLE1BQTZGO0lBQzNNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDdkQsQ0FBQTtBQUNILENBQUM7QUFWRCwwTUFVQztBQU9ELFNBQWdCLDBGQUEwRixDQUFDLE1BQXlMO0lBQ2xTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0ZBQStGLENBQUMsQ0FBQyxNQUFPLENBQUMsS0FBSyxD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QUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ00sd0JBQXdCLENBQUMsS0FBZ0U7UUFDOUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDcEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7SUFDbkQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9DLDJCQUEyQixFQUFFLHVFQUF1RSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7WUFDbEosd0JBQXdCLEVBQUUsb0VBQW9FLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztTQUMxSSxDQUFDO0lBQ0osQ0FBQzs7QUFuR0gsb0ZBb0dDOzs7QUFsR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxtREFBYyxHQUFXLDhDQUE4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tbWVudD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZzogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnlBcmdQcm9maWxlQ29uZmlnOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZvcm1hdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2ZpbGVJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZSksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgcHJvZmlsZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9maWxlSWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpdGVtczogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlc0l0ZW1zW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzSXRlbXNUb1RlcnJhZm9ybSkoc3RydWN0IS5pdGVtcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWUuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaXRlbXM/OiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzSXRlbXNbXTsgXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2l0ZW1zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc1tdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXRlbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93bjogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudFR5cGVQcm9maWxlczogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcndhcmRfd2hlbl9jb250ZW50X3R5cGVfaXNfdW5rbm93bjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93biksXG4gICAgY29udGVudF90eXBlX3Byb2ZpbGVzOiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZVByb2ZpbGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93bikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93biA9IHRoaXMuX2ZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd247XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb250ZW50VHlwZVByb2ZpbGVzID0gdGhpcy5fY29udGVudFR5cGVQcm9maWxlcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd24gPSB2YWx1ZS5mb3J3YXJkV2hlbkNvbnRlbnRUeXBlSXNVbmtub3duO1xuICAgICAgdGhpcy5fY29udGVudFR5cGVQcm9maWxlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29udGVudFR5cGVQcm9maWxlcztcbiAgICB9XG4gIH1cblxuICAvLyBmb3J3YXJkX3doZW5fY29udGVudF90eXBlX2lzX3Vua25vd24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93bj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmb3J3YXJkX3doZW5fY29udGVudF90eXBlX2lzX3Vua25vd24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmb3J3YXJkV2hlbkNvbnRlbnRUeXBlSXNVbmtub3duKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9mb3J3YXJkV2hlbkNvbnRlbnRUeXBlSXNVbmtub3duID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93bjtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfdHlwZV9wcm9maWxlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb250ZW50VHlwZVByb2ZpbGVzID0gbmV3IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29udGVudF90eXBlX3Byb2ZpbGVzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvbnRlbnRUeXBlUHJvZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZXM7XG4gIH1cbiAgcHVibGljIHB1dENvbnRlbnRUeXBlUHJvZmlsZXModmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXMpIHtcbiAgICB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGVQcm9maWxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc0l0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9maWxlSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnlBcmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb2ZpbGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvZmlsZUlkKSxcbiAgICBxdWVyeV9hcmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVlcnlBcmcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpdGVtcz86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc0l0ZW1zVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2l0ZW1zPzogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc0l0ZW1zW107IFxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpdGVtcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzSXRlbXNbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGl0ZW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93bjogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnlBcmdQcm9maWxlcz86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmb3J3YXJkX3doZW5fcXVlcnlfYXJnX3Byb2ZpbGVfaXNfdW5rbm93bjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24pLFxuICAgIHF1ZXJ5X2FyZ19wcm9maWxlczogY2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc1RvVGVycmFmb3JtKHN0cnVjdCEucXVlcnlBcmdQcm9maWxlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93biA9IHRoaXMuX2ZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcXVlcnlBcmdQcm9maWxlcz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucXVlcnlBcmdQcm9maWxlcyA9IHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93biA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24gPSB2YWx1ZS5mb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93bjtcbiAgICAgIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnF1ZXJ5QXJnUHJvZmlsZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZm9yd2FyZF93aGVuX3F1ZXJ5X2FyZ19wcm9maWxlX2lzX3Vua25vd24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZvcndhcmRfd2hlbl9xdWVyeV9hcmdfcHJvZmlsZV9pc191bmtub3duJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2ZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duO1xuICB9XG5cbiAgLy8gcXVlcnlfYXJnX3Byb2ZpbGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3F1ZXJ5QXJnUHJvZmlsZXMgPSBuZXcgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJxdWVyeV9hcmdfcHJvZmlsZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcXVlcnlBcmdQcm9maWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlBcmdQcm9maWxlcztcbiAgfVxuICBwdWJsaWMgcHV0UXVlcnlBcmdQcm9maWxlcyh2YWx1ZTogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlcykge1xuICAgIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFF1ZXJ5QXJnUHJvZmlsZXMoKSB7XG4gICAgdGhpcy5fcXVlcnlBcmdQcm9maWxlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWVyeUFyZ1Byb2ZpbGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWdcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY29tbWVudCA9IGNvbmZpZy5jb21tZW50O1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZztcbiAgICB0aGlzLl9xdWVyeUFyZ1Byb2ZpbGVDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5xdWVyeUFyZ1Byb2ZpbGVDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNhbGxlcl9yZWZlcmVuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYWxsZXJSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYWxsZXJfcmVmZXJlbmNlJyk7XG4gIH1cblxuICAvLyBjb21tZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbW1lbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21tZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tbWVudCgpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21tZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1lbnQ7XG4gIH1cblxuICAvLyBldGFnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXRhZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V0YWcnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBjb250ZW50X3R5cGVfcHJvZmlsZV9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29udGVudFR5cGVQcm9maWxlQ29uZmlnID0gbmV3IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb250ZW50X3R5cGVfcHJvZmlsZV9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGVQcm9maWxlQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dENvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZyh2YWx1ZTogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnKSB7XG4gICAgdGhpcy5fY29udGVudFR5cGVQcm9maWxlQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGVQcm9maWxlQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcXVlcnlfYXJnX3Byb2ZpbGVfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3F1ZXJ5QXJnUHJvZmlsZUNvbmZpZyA9IG5ldyBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicXVlcnlfYXJnX3Byb2ZpbGVfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHF1ZXJ5QXJnUHJvZmlsZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlBcmdQcm9maWxlQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRRdWVyeUFyZ1Byb2ZpbGVDb25maWcodmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZykge1xuICAgIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXJ5QXJnUHJvZmlsZUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeUFyZ1Byb2ZpbGVDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29tbWVudCksXG4gICAgICBjb250ZW50X3R5cGVfcHJvZmlsZV9jb25maWc6IGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHF1ZXJ5X2FyZ19wcm9maWxlX2NvbmZpZzogY2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fcXVlcnlBcmdQcm9maWxlQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==