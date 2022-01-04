"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppmeshVirtualService = exports.AppmeshVirtualServiceSpecOutputReference = exports.appmeshVirtualServiceSpecToTerraform = exports.AppmeshVirtualServiceSpecProviderOutputReference = exports.appmeshVirtualServiceSpecProviderToTerraform = exports.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference = exports.appmeshVirtualServiceSpecProviderVirtualRouterToTerraform = exports.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference = exports.appmeshVirtualServiceSpecProviderVirtualNodeToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_node_name: cdktf.stringToTerraform(struct.virtualNodeName),
    };
}
exports.appmeshVirtualServiceSpecProviderVirtualNodeToTerraform = appmeshVirtualServiceSpecProviderVirtualNodeToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference extends cdktf.ComplexObject {
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
        if (this._virtualNodeName) {
            hasAnyValues = true;
            internalValueResult.virtualNodeName = this._virtualNodeName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._virtualNodeName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._virtualNodeName = value.virtualNodeName;
        }
    }
    /**
     * @stability stable
     */
    get virtualNodeName() {
        return this.getStringAttribute('virtual_node_name');
    }
    /**
     * @stability stable
     */
    set virtualNodeName(value) {
        this._virtualNodeName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get virtualNodeNameInput() {
        return this._virtualNodeName;
    }
}
exports.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference = AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference[_a] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference", version: "3.0.1" };
function appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_router_name: cdktf.stringToTerraform(struct.virtualRouterName),
    };
}
exports.appmeshVirtualServiceSpecProviderVirtualRouterToTerraform = appmeshVirtualServiceSpecProviderVirtualRouterToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference extends cdktf.ComplexObject {
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
        if (this._virtualRouterName) {
            hasAnyValues = true;
            internalValueResult.virtualRouterName = this._virtualRouterName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._virtualRouterName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._virtualRouterName = value.virtualRouterName;
        }
    }
    /**
     * @stability stable
     */
    get virtualRouterName() {
        return this.getStringAttribute('virtual_router_name');
    }
    /**
     * @stability stable
     */
    set virtualRouterName(value) {
        this._virtualRouterName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get virtualRouterNameInput() {
        return this._virtualRouterName;
    }
}
exports.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference = AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference[_b] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference", version: "3.0.1" };
function appmeshVirtualServiceSpecProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_node: appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct.virtualNode),
        virtual_router: appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct.virtualRouter),
    };
}
exports.appmeshVirtualServiceSpecProviderToTerraform = appmeshVirtualServiceSpecProviderToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualServiceSpecProviderOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // virtual_node - computed: false, optional: true, required: false
        this._virtualNode = new AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference(this, "virtual_node", true);
        // virtual_router - computed: false, optional: true, required: false
        this._virtualRouter = new AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference(this, "virtual_router", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g, _h, _j;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_f = this._virtualNode) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.virtualNode = (_g = this._virtualNode) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        if ((_h = this._virtualRouter) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.virtualRouter = (_j = this._virtualRouter) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._virtualNode.internalValue = undefined;
            this._virtualRouter.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._virtualNode.internalValue = value.virtualNode;
            this._virtualRouter.internalValue = value.virtualRouter;
        }
    }
    /**
     * @stability stable
     */
    get virtualNode() {
        return this._virtualNode;
    }
    /**
     * @stability stable
     */
    putVirtualNode(value) {
        this._virtualNode.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetVirtualNode() {
        this._virtualNode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get virtualNodeInput() {
        return this._virtualNode.internalValue;
    }
    /**
     * @stability stable
     */
    get virtualRouter() {
        return this._virtualRouter;
    }
    /**
     * @stability stable
     */
    putVirtualRouter(value) {
        this._virtualRouter.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetVirtualRouter() {
        this._virtualRouter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get virtualRouterInput() {
        return this._virtualRouter.internalValue;
    }
}
exports.AppmeshVirtualServiceSpecProviderOutputReference = AppmeshVirtualServiceSpecProviderOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AppmeshVirtualServiceSpecProviderOutputReference[_c] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualServiceSpecProviderOutputReference", version: "3.0.1" };
function appmeshVirtualServiceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        provider: appmeshVirtualServiceSpecProviderToTerraform(struct.provider),
    };
}
exports.appmeshVirtualServiceSpecToTerraform = appmeshVirtualServiceSpecToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualServiceSpecOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // provider - computed: false, optional: true, required: false
        this._provider = new AppmeshVirtualServiceSpecProviderOutputReference(this, "provider", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_f = this._provider) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.provider = (_g = this._provider) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._provider.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._provider.internalValue = value.provider;
        }
    }
    /**
     * @stability stable
     */
    get provider() {
        return this._provider;
    }
    /**
     * @stability stable
     */
    putProvider(value) {
        this._provider.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetProvider() {
        this._provider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get providerInput() {
        return this._provider.internalValue;
    }
}
exports.AppmeshVirtualServiceSpecOutputReference = AppmeshVirtualServiceSpecOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AppmeshVirtualServiceSpecOutputReference[_d] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualServiceSpecOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service}.
 *
 * @stability stable
 */
class AppmeshVirtualService extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // spec - computed: false, optional: false, required: true
        this._spec = new AppmeshVirtualServiceSpecOutputReference(this, "spec", true);
        this._meshName = config.meshName;
        this._meshOwner = config.meshOwner;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._spec.internalValue = config.spec;
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
    // created_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get createdDate() {
        return this.getStringAttribute('created_date');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastUpdatedDate() {
        return this.getStringAttribute('last_updated_date');
    }
    /**
     * @stability stable
     */
    get meshName() {
        return this.getStringAttribute('mesh_name');
    }
    /**
     * @stability stable
     */
    set meshName(value) {
        this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get meshNameInput() {
        return this._meshName;
    }
    /**
     * @stability stable
     */
    get meshOwner() {
        return this.getStringAttribute('mesh_owner');
    }
    /**
     * @stability stable
     */
    set meshOwner(value) {
        this._meshOwner = value;
    }
    /**
     * @stability stable
     */
    resetMeshOwner() {
        this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get meshOwnerInput() {
        return this._meshOwner;
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
    // resource_owner - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get resourceOwner() {
        return this.getStringAttribute('resource_owner');
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
    get spec() {
        return this._spec;
    }
    /**
     * @stability stable
     */
    putSpec(value) {
        this._spec.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get specInput() {
        return this._spec.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            spec: appmeshVirtualServiceSpecToTerraform(this._spec.internalValue),
        };
    }
}
exports.AppmeshVirtualService = AppmeshVirtualService;
_e = JSII_RTTI_SYMBOL_1;
AppmeshVirtualService[_e] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualService", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppmeshVirtualService.tfResourceType = "aws_appmesh_virtual_service";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbWVzaC12aXJ0dWFsLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbWVzaC9hcHBtZXNoLXZpcnR1YWwtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXNCL0IsU0FBZ0IsdURBQXVELENBQUMsTUFBbUg7SUFDekwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUNwRSxDQUFBO0FBQ0gsQ0FBQztBQVJELDBIQVFDOzs7O0FBRUQsTUFBYSwyREFBNEQsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlsRyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxD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QUFDOzs7O0lBQ00sT0FBTyxDQUFDLEtBQWdDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELElBQUksRUFBRSxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUNyRSxDQUFDO0lBQ0osQ0FBQzs7QUFsS0gsc0RBbUtDOzs7QUFqS0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxvQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxTZXJ2aWNlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNoTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNoT3duZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwZWM6IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWM7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclZpcnR1YWxOb2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXJ0dWFsTm9kZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclZpcnR1YWxOb2RlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyVmlydHVhbE5vZGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXJWaXJ0dWFsTm9kZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZpcnR1YWxfbm9kZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZpcnR1YWxOb2RlTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclZpcnR1YWxOb2RlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclZpcnR1YWxOb2RlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl92aXJ0dWFsTm9kZU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZpcnR1YWxOb2RlTmFtZSA9IHRoaXMuX3ZpcnR1YWxOb2RlTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclZpcnR1YWxOb2RlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdmlydHVhbE5vZGVOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl92aXJ0dWFsTm9kZU5hbWUgPSB2YWx1ZS52aXJ0dWFsTm9kZU5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdmlydHVhbF9ub2RlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmlydHVhbE5vZGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2aXJ0dWFsTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2aXJ0dWFsX25vZGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlydHVhbE5vZGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aXJ0dWFsTm9kZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmlydHVhbE5vZGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxOb2RlTmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXJWaXJ0dWFsUm91dGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbFJvdXRlck5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclZpcnR1YWxSb3V0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXJWaXJ0dWFsUm91dGVyT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyVmlydHVhbFJvdXRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZpcnR1YWxfcm91dGVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbFJvdXRlck5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXJWaXJ0dWFsUm91dGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclZpcnR1YWxSb3V0ZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52aXJ0dWFsUm91dGVyTmFtZSA9IHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyVmlydHVhbFJvdXRlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl92aXJ0dWFsUm91dGVyTmFtZSA9IHZhbHVlLnZpcnR1YWxSb3V0ZXJOYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHZpcnR1YWxfcm91dGVyX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmlydHVhbFJvdXRlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZpcnR1YWxSb3V0ZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlydHVhbF9yb3V0ZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlydHVhbFJvdXRlck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpcnR1YWxSb3V0ZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5vZGU/OiBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXJWaXJ0dWFsTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXJ0dWFsUm91dGVyPzogQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyVmlydHVhbFJvdXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlck91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZpcnR1YWxfbm9kZTogYXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyVmlydHVhbE5vZGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnZpcnR1YWxOb2RlKSxcbiAgICB2aXJ0dWFsX3JvdXRlcjogYXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyVmlydHVhbFJvdXRlclRvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbFJvdXRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3ZpcnR1YWxOb2RlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52aXJ0dWFsTm9kZSA9IHRoaXMuX3ZpcnR1YWxOb2RlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmlydHVhbFJvdXRlcj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmlydHVhbFJvdXRlciA9IHRoaXMuX3ZpcnR1YWxSb3V0ZXI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl92aXJ0dWFsTm9kZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmlydHVhbFJvdXRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl92aXJ0dWFsTm9kZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUudmlydHVhbE5vZGU7XG4gICAgICB0aGlzLl92aXJ0dWFsUm91dGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS52aXJ0dWFsUm91dGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIHZpcnR1YWxfbm9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92aXJ0dWFsTm9kZSA9IG5ldyBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXJWaXJ0dWFsTm9kZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ2aXJ0dWFsX25vZGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdmlydHVhbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxOb2RlO1xuICB9XG4gIHB1YmxpYyBwdXRWaXJ0dWFsTm9kZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyVmlydHVhbE5vZGUpIHtcbiAgICB0aGlzLl92aXJ0dWFsTm9kZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmlydHVhbE5vZGUoKSB7XG4gICAgdGhpcy5fdmlydHVhbE5vZGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmlydHVhbE5vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbE5vZGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZpcnR1YWxfcm91dGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZpcnR1YWxSb3V0ZXIgPSBuZXcgQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyVmlydHVhbFJvdXRlck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ2aXJ0dWFsX3JvdXRlclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB2aXJ0dWFsUm91dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsUm91dGVyO1xuICB9XG4gIHB1YmxpYyBwdXRWaXJ0dWFsUm91dGVyKHZhbHVlOiBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXJWaXJ0dWFsUm91dGVyKSB7XG4gICAgdGhpcy5fdmlydHVhbFJvdXRlci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmlydHVhbFJvdXRlcigpIHtcbiAgICB0aGlzLl92aXJ0dWFsUm91dGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpcnR1YWxSb3V0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbFJvdXRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3ZpZGVyPzogQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZXI6IGFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNQcm92aWRlclRvVGVycmFmb3JtKHN0cnVjdCEucHJvdmlkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Byb3ZpZGVyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm92aWRlciA9IHRoaXMuX3Byb3ZpZGVyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Byb3ZpZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Byb3ZpZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcm92aWRlcjtcbiAgICB9XG4gIH1cblxuICAvLyBwcm92aWRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm92aWRlciA9IG5ldyBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjUHJvdmlkZXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicHJvdmlkZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3ZpZGVyO1xuICB9XG4gIHB1YmxpYyBwdXRQcm92aWRlcih2YWx1ZTogQXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5fcHJvdmlkZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3ZpZGVyKCkge1xuICAgIHRoaXMuX3Byb3ZpZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3ZpZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3ZpZGVyLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxTZXJ2aWNlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2FwcG1lc2hfdmlydHVhbF9zZXJ2aWNlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFwcG1lc2hWaXJ0dWFsU2VydmljZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwcG1lc2hfdmlydHVhbF9zZXJ2aWNlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX21lc2hOYW1lID0gY29uZmlnLm1lc2hOYW1lO1xuICAgIHRoaXMuX21lc2hPd25lciA9IGNvbmZpZy5tZXNoT3duZXI7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fc3BlYy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNwZWM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY3JlYXRlZF9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX2RhdGUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfdXBkYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBtZXNoX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWVzaE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1lc2hOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzaF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNoTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzaE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVzaE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzaE5hbWU7XG4gIH1cblxuICAvLyBtZXNoX293bmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWVzaE93bmVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXNoT3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNoX293bmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNoT3duZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc2hPd25lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lc2hPd25lcigpIHtcbiAgICB0aGlzLl9tZXNoT3duZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc2hPd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNoT3duZXI7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX293bmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VPd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX293bmVyJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zcGVjID0gbmV3IEFwcG1lc2hWaXJ0dWFsU2VydmljZVNwZWNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3BlY1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzcGVjKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVjO1xuICB9XG4gIHB1YmxpYyBwdXRTcGVjKHZhbHVlOiBBcHBtZXNoVmlydHVhbFNlcnZpY2VTcGVjKSB7XG4gICAgdGhpcy5fc3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNoX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21lc2hOYW1lKSxcbiAgICAgIG1lc2hfb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21lc2hPd25lciksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgc3BlYzogYXBwbWVzaFZpcnR1YWxTZXJ2aWNlU3BlY1RvVGVycmFmb3JtKHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19