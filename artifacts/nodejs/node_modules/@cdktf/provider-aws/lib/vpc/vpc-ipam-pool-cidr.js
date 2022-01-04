"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcIpamPoolCidr = exports.VpcIpamPoolCidrCidrAuthorizationContextOutputReference = exports.vpcIpamPoolCidrCidrAuthorizationContextToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function vpcIpamPoolCidrCidrAuthorizationContextToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        signature: cdktf.stringToTerraform(struct.signature),
    };
}
exports.vpcIpamPoolCidrCidrAuthorizationContextToTerraform = vpcIpamPoolCidrCidrAuthorizationContextToTerraform;
/**
 * @stability stable
 */
class VpcIpamPoolCidrCidrAuthorizationContextOutputReference extends cdktf.ComplexObject {
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
        if (this._message) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        if (this._signature) {
            hasAnyValues = true;
            internalValueResult.signature = this._signature;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._message = undefined;
            this._signature = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._message = value.message;
            this._signature = value.signature;
        }
    }
    /**
     * @stability stable
     */
    get message() {
        return this.getStringAttribute('message');
    }
    /**
     * @stability stable
     */
    set message(value) {
        this._message = value;
    }
    /**
     * @stability stable
     */
    resetMessage() {
        this._message = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageInput() {
        return this._message;
    }
    /**
     * @stability stable
     */
    get signature() {
        return this.getStringAttribute('signature');
    }
    /**
     * @stability stable
     */
    set signature(value) {
        this._signature = value;
    }
    /**
     * @stability stable
     */
    resetSignature() {
        this._signature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get signatureInput() {
        return this._signature;
    }
}
exports.VpcIpamPoolCidrCidrAuthorizationContextOutputReference = VpcIpamPoolCidrCidrAuthorizationContextOutputReference;
_a = JSII_RTTI_SYMBOL_1;
VpcIpamPoolCidrCidrAuthorizationContextOutputReference[_a] = { fqn: "@cdktf/provider-aws.vpc.VpcIpamPoolCidrCidrAuthorizationContextOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html aws_vpc_ipam_pool_cidr}.
 *
 * @stability stable
 */
class VpcIpamPoolCidr extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html aws_vpc_ipam_pool_cidr} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_ipam_pool_cidr',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // cidr_authorization_context - computed: false, optional: true, required: false
        this._cidrAuthorizationContext = new VpcIpamPoolCidrCidrAuthorizationContextOutputReference(this, "cidr_authorization_context", true);
        this._cidr = config.cidr;
        this._ipamPoolId = config.ipamPoolId;
        this._cidrAuthorizationContext.internalValue = config.cidrAuthorizationContext;
    }
    /**
     * @stability stable
     */
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    /**
     * @stability stable
     */
    set cidr(value) {
        this._cidr = value;
    }
    /**
     * @stability stable
     */
    resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cidrInput() {
        return this._cidr;
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
    get ipamPoolId() {
        return this.getStringAttribute('ipam_pool_id');
    }
    /**
     * @stability stable
     */
    set ipamPoolId(value) {
        this._ipamPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipamPoolIdInput() {
        return this._ipamPoolId;
    }
    /**
     * @stability stable
     */
    get cidrAuthorizationContext() {
        return this._cidrAuthorizationContext;
    }
    /**
     * @stability stable
     */
    putCidrAuthorizationContext(value) {
        this._cidrAuthorizationContext.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCidrAuthorizationContext() {
        this._cidrAuthorizationContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cidrAuthorizationContextInput() {
        return this._cidrAuthorizationContext.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            cidr: cdktf.stringToTerraform(this._cidr),
            ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
            cidr_authorization_context: vpcIpamPoolCidrCidrAuthorizationContextToTerraform(this._cidrAuthorizationContext.internalValue),
        };
    }
}
exports.VpcIpamPoolCidr = VpcIpamPoolCidr;
_b = JSII_RTTI_SYMBOL_1;
VpcIpamPoolCidr[_b] = { fqn: "@cdktf/provider-aws.vpc.VpcIpamPoolCidr", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
VpcIpamPoolCidr.tfResourceType = "aws_vpc_ipam_pool_cidr";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLWlwYW0tcG9vbC1jaWRyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZwYy92cGMtaXBhbS1wb29sLWNpZHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFrQi9CLFNBQWdCLGtEQUFrRCxDQUFDLE1BQXlHO0lBQzFLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN0RCxDQUFBO0FBQ0gsQ0FBQztBQVRELGdIQVNDOzs7O0FBRUQsTUFBYSxzREFBdUQsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUk3RixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0Qs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QixPQUFPO1lBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2RCwwQkFBMEIsRUFBRSxrREFBa0QsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO1NBQzdILENBQUM7SUFDSixDQUFDOztBQTVGSCwwQ0E2RkM7OztBQTNGQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDhCQUFjLEdBQVcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFZwY0lwYW1Qb29sQ2lkckNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2lkcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpcGFtUG9vbElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNpZHJBdXRob3JpemF0aW9uQ29udGV4dD86IFZwY0lwYW1Qb29sQ2lkckNpZHJBdXRob3JpemF0aW9uQ29udGV4dDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVnBjSXBhbVBvb2xDaWRyQ2lkckF1dGhvcml6YXRpb25Db250ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2lnbmF0dXJlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdnBjSXBhbVBvb2xDaWRyQ2lkckF1dGhvcml6YXRpb25Db250ZXh0VG9UZXJyYWZvcm0oc3RydWN0PzogVnBjSXBhbVBvb2xDaWRyQ2lkckF1dGhvcml6YXRpb25Db250ZXh0T3V0cHV0UmVmZXJlbmNlIHwgVnBjSXBhbVBvb2xDaWRyQ2lkckF1dGhvcml6YXRpb25Db250ZXh0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlKSxcbiAgICBzaWduYXR1cmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2lnbmF0dXJlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVnBjSXBhbVBvb2xDaWRyQ2lkckF1dGhvcml6YXRpb25Db250ZXh0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFZwY0lwYW1Qb29sQ2lkckNpZHJBdXRob3JpemF0aW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWVzc2FnZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWVzc2FnZSA9IHRoaXMuX21lc3NhZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zaWduYXR1cmUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNpZ25hdHVyZSA9IHRoaXMuX3NpZ25hdHVyZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFZwY0lwYW1Qb29sQ2lkckNpZHJBdXRob3JpemF0aW9uQ29udGV4dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zaWduYXR1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZS5tZXNzYWdlO1xuICAgICAgdGhpcy5fc2lnbmF0dXJlID0gdmFsdWUuc2lnbmF0dXJlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1lc3NhZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWVzc2FnZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXNzYWdlKCkge1xuICAgIHRoaXMuX21lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuXG4gIC8vIHNpZ25hdHVyZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaWduYXR1cmU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNpZ25hdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NpZ25hdHVyZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2lnbmF0dXJlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduYXR1cmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTaWduYXR1cmUoKSB7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaWduYXR1cmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lnbmF0dXJlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgVnBjSXBhbVBvb2xDaWRyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3ZwY19pcGFtX3Bvb2xfY2lkclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFZwY0lwYW1Qb29sQ2lkckNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3ZwY19pcGFtX3Bvb2xfY2lkcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jaWRyID0gY29uZmlnLmNpZHI7XG4gICAgdGhpcy5faXBhbVBvb2xJZCA9IGNvbmZpZy5pcGFtUG9vbElkO1xuICAgIHRoaXMuX2NpZHJBdXRob3JpemF0aW9uQ29udGV4dC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNpZHJBdXRob3JpemF0aW9uQ29udGV4dDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NpZHI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNpZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaWRyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2lkcigpIHtcbiAgICB0aGlzLl9jaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjaWRySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NpZHI7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaXBhbV9wb29sX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lwYW1Qb29sSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlwYW1Qb29sSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcGFtX3Bvb2xfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwYW1Qb29sSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lwYW1Qb29sSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXBhbVBvb2xJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pcGFtUG9vbElkO1xuICB9XG5cbiAgLy8gY2lkcl9hdXRob3JpemF0aW9uX2NvbnRleHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2lkckF1dGhvcml6YXRpb25Db250ZXh0ID0gbmV3IFZwY0lwYW1Qb29sQ2lkckNpZHJBdXRob3JpemF0aW9uQ29udGV4dE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjaWRyX2F1dGhvcml6YXRpb25fY29udGV4dFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjaWRyQXV0aG9yaXphdGlvbkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NpZHJBdXRob3JpemF0aW9uQ29udGV4dDtcbiAgfVxuICBwdWJsaWMgcHV0Q2lkckF1dGhvcml6YXRpb25Db250ZXh0KHZhbHVlOiBWcGNJcGFtUG9vbENpZHJDaWRyQXV0aG9yaXphdGlvbkNvbnRleHQpIHtcbiAgICB0aGlzLl9jaWRyQXV0aG9yaXphdGlvbkNvbnRleHQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENpZHJBdXRob3JpemF0aW9uQ29udGV4dCgpIHtcbiAgICB0aGlzLl9jaWRyQXV0aG9yaXphdGlvbkNvbnRleHQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2lkckF1dGhvcml6YXRpb25Db250ZXh0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NpZHJBdXRob3JpemF0aW9uQ29udGV4dC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jaWRyKSxcbiAgICAgIGlwYW1fcG9vbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faXBhbVBvb2xJZCksXG4gICAgICBjaWRyX2F1dGhvcml6YXRpb25fY29udGV4dDogdnBjSXBhbVBvb2xDaWRyQ2lkckF1dGhvcml6YXRpb25Db250ZXh0VG9UZXJyYWZvcm0odGhpcy5fY2lkckF1dGhvcml6YXRpb25Db250ZXh0LmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==