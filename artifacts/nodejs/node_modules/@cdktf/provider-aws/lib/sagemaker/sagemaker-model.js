"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerModel = exports.SagemakerModelVpcConfigOutputReference = exports.sagemakerModelVpcConfigToTerraform = exports.SagemakerModelPrimaryContainerOutputReference = exports.sagemakerModelPrimaryContainerToTerraform = exports.SagemakerModelPrimaryContainerImageConfigOutputReference = exports.sagemakerModelPrimaryContainerImageConfigToTerraform = exports.SagemakerModelInferenceExecutionConfigOutputReference = exports.sagemakerModelInferenceExecutionConfigToTerraform = exports.sagemakerModelContainerToTerraform = exports.SagemakerModelContainerImageConfigOutputReference = exports.sagemakerModelContainerImageConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerModelContainerImageConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        repository_access_mode: cdktf.stringToTerraform(struct.repositoryAccessMode),
    };
}
exports.sagemakerModelContainerImageConfigToTerraform = sagemakerModelContainerImageConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerModelContainerImageConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._repositoryAccessMode) {
            hasAnyValues = true;
            internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._repositoryAccessMode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._repositoryAccessMode = value.repositoryAccessMode;
        }
    }
    /**
     * @stability stable
     */
    get repositoryAccessMode() {
        return this.getStringAttribute('repository_access_mode');
    }
    /**
     * @stability stable
     */
    set repositoryAccessMode(value) {
        this._repositoryAccessMode = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get repositoryAccessModeInput() {
        return this._repositoryAccessMode;
    }
}
exports.SagemakerModelContainerImageConfigOutputReference = SagemakerModelContainerImageConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerModelContainerImageConfigOutputReference[_a] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerModelContainerImageConfigOutputReference", version: "3.0.1" };
function sagemakerModelContainerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_hostname: cdktf.stringToTerraform(struct.containerHostname),
        environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct.environment),
        image: cdktf.stringToTerraform(struct.image),
        mode: cdktf.stringToTerraform(struct.mode),
        model_data_url: cdktf.stringToTerraform(struct.modelDataUrl),
        image_config: sagemakerModelContainerImageConfigToTerraform(struct.imageConfig),
    };
}
exports.sagemakerModelContainerToTerraform = sagemakerModelContainerToTerraform;
function sagemakerModelInferenceExecutionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
exports.sagemakerModelInferenceExecutionConfigToTerraform = sagemakerModelInferenceExecutionConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerModelInferenceExecutionConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._mode) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._mode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._mode = value.mode;
        }
    }
    /**
     * @stability stable
     */
    get mode() {
        return this.getStringAttribute('mode');
    }
    /**
     * @stability stable
     */
    set mode(value) {
        this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get modeInput() {
        return this._mode;
    }
}
exports.SagemakerModelInferenceExecutionConfigOutputReference = SagemakerModelInferenceExecutionConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerModelInferenceExecutionConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerModelInferenceExecutionConfigOutputReference", version: "3.0.1" };
function sagemakerModelPrimaryContainerImageConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        repository_access_mode: cdktf.stringToTerraform(struct.repositoryAccessMode),
    };
}
exports.sagemakerModelPrimaryContainerImageConfigToTerraform = sagemakerModelPrimaryContainerImageConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerModelPrimaryContainerImageConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._repositoryAccessMode) {
            hasAnyValues = true;
            internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._repositoryAccessMode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._repositoryAccessMode = value.repositoryAccessMode;
        }
    }
    /**
     * @stability stable
     */
    get repositoryAccessMode() {
        return this.getStringAttribute('repository_access_mode');
    }
    /**
     * @stability stable
     */
    set repositoryAccessMode(value) {
        this._repositoryAccessMode = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get repositoryAccessModeInput() {
        return this._repositoryAccessMode;
    }
}
exports.SagemakerModelPrimaryContainerImageConfigOutputReference = SagemakerModelPrimaryContainerImageConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerModelPrimaryContainerImageConfigOutputReference[_c] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerModelPrimaryContainerImageConfigOutputReference", version: "3.0.1" };
function sagemakerModelPrimaryContainerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_hostname: cdktf.stringToTerraform(struct.containerHostname),
        environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct.environment),
        image: cdktf.stringToTerraform(struct.image),
        mode: cdktf.stringToTerraform(struct.mode),
        model_data_url: cdktf.stringToTerraform(struct.modelDataUrl),
        image_config: sagemakerModelPrimaryContainerImageConfigToTerraform(struct.imageConfig),
    };
}
exports.sagemakerModelPrimaryContainerToTerraform = sagemakerModelPrimaryContainerToTerraform;
/**
 * @stability stable
 */
class SagemakerModelPrimaryContainerOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // image_config - computed: false, optional: true, required: false
        this._imageConfig = new SagemakerModelPrimaryContainerImageConfigOutputReference(this, "image_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _g, _h;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._containerHostname) {
            hasAnyValues = true;
            internalValueResult.containerHostname = this._containerHostname;
        }
        if (this._environment) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._image) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._mode) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._modelDataUrl) {
            hasAnyValues = true;
            internalValueResult.modelDataUrl = this._modelDataUrl;
        }
        if ((_g = this._imageConfig) === null || _g === void 0 ? void 0 : _g.internalValue) {
            hasAnyValues = true;
            internalValueResult.imageConfig = (_h = this._imageConfig) === null || _h === void 0 ? void 0 : _h.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._containerHostname = undefined;
            this._environment = undefined;
            this._image = undefined;
            this._mode = undefined;
            this._modelDataUrl = undefined;
            this._imageConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._containerHostname = value.containerHostname;
            this._environment = value.environment;
            this._image = value.image;
            this._mode = value.mode;
            this._modelDataUrl = value.modelDataUrl;
            this._imageConfig.internalValue = value.imageConfig;
        }
    }
    /**
     * @stability stable
     */
    get containerHostname() {
        return this.getStringAttribute('container_hostname');
    }
    /**
     * @stability stable
     */
    set containerHostname(value) {
        this._containerHostname = value;
    }
    /**
     * @stability stable
     */
    resetContainerHostname() {
        this._containerHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get containerHostnameInput() {
        return this._containerHostname;
    }
    /**
     * @stability stable
     */
    get environment() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('environment');
    }
    /**
     * @stability stable
     */
    set environment(value) {
        this._environment = value;
    }
    /**
     * @stability stable
     */
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get environmentInput() {
        return this._environment;
    }
    /**
     * @stability stable
     */
    get image() {
        return this.getStringAttribute('image');
    }
    /**
     * @stability stable
     */
    set image(value) {
        this._image = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageInput() {
        return this._image;
    }
    /**
     * @stability stable
     */
    get mode() {
        return this.getStringAttribute('mode');
    }
    /**
     * @stability stable
     */
    set mode(value) {
        this._mode = value;
    }
    /**
     * @stability stable
     */
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get modeInput() {
        return this._mode;
    }
    /**
     * @stability stable
     */
    get modelDataUrl() {
        return this.getStringAttribute('model_data_url');
    }
    /**
     * @stability stable
     */
    set modelDataUrl(value) {
        this._modelDataUrl = value;
    }
    /**
     * @stability stable
     */
    resetModelDataUrl() {
        this._modelDataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get modelDataUrlInput() {
        return this._modelDataUrl;
    }
    /**
     * @stability stable
     */
    get imageConfig() {
        return this._imageConfig;
    }
    /**
     * @stability stable
     */
    putImageConfig(value) {
        this._imageConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetImageConfig() {
        this._imageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageConfigInput() {
        return this._imageConfig.internalValue;
    }
}
exports.SagemakerModelPrimaryContainerOutputReference = SagemakerModelPrimaryContainerOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SagemakerModelPrimaryContainerOutputReference[_d] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerModelPrimaryContainerOutputReference", version: "3.0.1" };
function sagemakerModelVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
exports.sagemakerModelVpcConfigToTerraform = sagemakerModelVpcConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerModelVpcConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._securityGroupIds) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnets) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._securityGroupIds = undefined;
            this._subnets = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
        }
    }
    /**
     * @stability stable
     */
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    /**
     * @stability stable
     */
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
    /**
     * @stability stable
     */
    get subnets() {
        return this.getListAttribute('subnets');
    }
    /**
     * @stability stable
     */
    set subnets(value) {
        this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetsInput() {
        return this._subnets;
    }
}
exports.SagemakerModelVpcConfigOutputReference = SagemakerModelVpcConfigOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerModelVpcConfigOutputReference[_e] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerModelVpcConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model}.
 *
 * @stability stable
 */
class SagemakerModel extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_model',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // inference_execution_config - computed: false, optional: true, required: false
        this._inferenceExecutionConfig = new SagemakerModelInferenceExecutionConfigOutputReference(this, "inference_execution_config", true);
        // primary_container - computed: false, optional: true, required: false
        this._primaryContainer = new SagemakerModelPrimaryContainerOutputReference(this, "primary_container", true);
        // vpc_config - computed: false, optional: true, required: false
        this._vpcConfig = new SagemakerModelVpcConfigOutputReference(this, "vpc_config", true);
        this._enableNetworkIsolation = config.enableNetworkIsolation;
        this._executionRoleArn = config.executionRoleArn;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._container = config.container;
        this._inferenceExecutionConfig.internalValue = config.inferenceExecutionConfig;
        this._primaryContainer.internalValue = config.primaryContainer;
        this._vpcConfig.internalValue = config.vpcConfig;
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
    get enableNetworkIsolation() {
        return this.getBooleanAttribute('enable_network_isolation');
    }
    /**
     * @stability stable
     */
    set enableNetworkIsolation(value) {
        this._enableNetworkIsolation = value;
    }
    /**
     * @stability stable
     */
    resetEnableNetworkIsolation() {
        this._enableNetworkIsolation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableNetworkIsolationInput() {
        return this._enableNetworkIsolation;
    }
    /**
     * @stability stable
     */
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    /**
     * @stability stable
     */
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get executionRoleArnInput() {
        return this._executionRoleArn;
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
    /**
     * @stability stable
     */
    resetName() {
        this._name = undefined;
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
    get container() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('container');
    }
    /**
     * @stability stable
     */
    set container(value) {
        this._container = value;
    }
    /**
     * @stability stable
     */
    resetContainer() {
        this._container = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get containerInput() {
        return this._container;
    }
    /**
     * @stability stable
     */
    get inferenceExecutionConfig() {
        return this._inferenceExecutionConfig;
    }
    /**
     * @stability stable
     */
    putInferenceExecutionConfig(value) {
        this._inferenceExecutionConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInferenceExecutionConfig() {
        this._inferenceExecutionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inferenceExecutionConfigInput() {
        return this._inferenceExecutionConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get primaryContainer() {
        return this._primaryContainer;
    }
    /**
     * @stability stable
     */
    putPrimaryContainer(value) {
        this._primaryContainer.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPrimaryContainer() {
        this._primaryContainer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get primaryContainerInput() {
        return this._primaryContainer.internalValue;
    }
    /**
     * @stability stable
     */
    get vpcConfig() {
        return this._vpcConfig;
    }
    /**
     * @stability stable
     */
    putVpcConfig(value) {
        this._vpcConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            enable_network_isolation: cdktf.booleanToTerraform(this._enableNetworkIsolation),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            container: cdktf.listMapper(sagemakerModelContainerToTerraform)(this._container),
            inference_execution_config: sagemakerModelInferenceExecutionConfigToTerraform(this._inferenceExecutionConfig.internalValue),
            primary_container: sagemakerModelPrimaryContainerToTerraform(this._primaryContainer.internalValue),
            vpc_config: sagemakerModelVpcConfigToTerraform(this._vpcConfig.internalValue),
        };
    }
}
exports.SagemakerModel = SagemakerModel;
_f = JSII_RTTI_SYMBOL_1;
SagemakerModel[_f] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerModel", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SagemakerModel.tfResourceType = "aws_sagemaker_model";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NhZ2VtYWtlci9zYWdlbWFrZXItbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE0Qi9CLFNBQWdCLDZDQUE2QyxDQUFDLE1BQStGO0lBQzNKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztLQUM5RSxDQUFBO0FBQ0gsQ0FBQztBQVJELHNHQVFDOzs7O0FBRUQsTUFBYSxpREFBa0QsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl4RixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ3ZFO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxT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cEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDZCQUFjLEdBQVcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlck1vZGVsQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVOZXR3b3JrSXNvbGF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhlY3V0aW9uUm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGFpbmVyPzogU2FnZW1ha2VyTW9kZWxDb250YWluZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmZlcmVuY2VFeGVjdXRpb25Db25maWc/OiBTYWdlbWFrZXJNb2RlbEluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmltYXJ5Q29udGFpbmVyPzogU2FnZW1ha2VyTW9kZWxQcmltYXJ5Q29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY0NvbmZpZz86IFNhZ2VtYWtlck1vZGVsVnBjQ29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJNb2RlbENvbnRhaW5lckltYWdlQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwb3NpdG9yeUFjY2Vzc01vZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlck1vZGVsQ29udGFpbmVySW1hZ2VDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJNb2RlbENvbnRhaW5lckltYWdlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyTW9kZWxDb250YWluZXJJbWFnZUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlcG9zaXRvcnlfYWNjZXNzX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVwb3NpdG9yeUFjY2Vzc01vZGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJNb2RlbENvbnRhaW5lckltYWdlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlck1vZGVsQ29udGFpbmVySW1hZ2VDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlcG9zaXRvcnlBY2Nlc3NNb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXBvc2l0b3J5QWNjZXNzTW9kZSA9IHRoaXMuX3JlcG9zaXRvcnlBY2Nlc3NNb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyTW9kZWxDb250YWluZXJJbWFnZUNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlcG9zaXRvcnlBY2Nlc3NNb2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXBvc2l0b3J5QWNjZXNzTW9kZSA9IHZhbHVlLnJlcG9zaXRvcnlBY2Nlc3NNb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlcG9zaXRvcnlfYWNjZXNzX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVwb3NpdG9yeUFjY2Vzc01vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlBY2Nlc3NNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwb3NpdG9yeV9hY2Nlc3NfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwb3NpdG9yeUFjY2Vzc01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlcG9zaXRvcnlBY2Nlc3NNb2RlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlBY2Nlc3NNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnlBY2Nlc3NNb2RlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlck1vZGVsQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRhaW5lckhvc3RuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVudmlyb25tZW50PzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9kZWxEYXRhVXJsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlQ29uZmlnPzogU2FnZW1ha2VyTW9kZWxDb250YWluZXJJbWFnZUNvbmZpZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlck1vZGVsQ29udGFpbmVyVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyTW9kZWxDb250YWluZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfaG9zdG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVySG9zdG5hbWUpLFxuICAgIGVudmlyb25tZW50OiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLmVudmlyb25tZW50KSxcbiAgICBpbWFnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZSksXG4gICAgbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb2RlKSxcbiAgICBtb2RlbF9kYXRhX3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb2RlbERhdGFVcmwpLFxuICAgIGltYWdlX2NvbmZpZzogc2FnZW1ha2VyTW9kZWxDb250YWluZXJJbWFnZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyTW9kZWxJbmZlcmVuY2VFeGVjdXRpb25Db25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtb2RlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJNb2RlbEluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlck1vZGVsSW5mZXJlbmNlRXhlY3V0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyTW9kZWxJbmZlcmVuY2VFeGVjdXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vZGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJNb2RlbEluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJNb2RlbEluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJNb2RlbEluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21vZGUgPSB2YWx1ZS5tb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlck1vZGVsUHJpbWFyeUNvbnRhaW5lckltYWdlQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwb3NpdG9yeUFjY2Vzc01vZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlck1vZGVsUHJpbWFyeUNvbnRhaW5lckltYWdlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyTW9kZWxQcmltYXJ5Q29udGFpbmVySW1hZ2VDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJNb2RlbFByaW1hcnlDb250YWluZXJJbWFnZUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlcG9zaXRvcnlfYWNjZXNzX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVwb3NpdG9yeUFjY2Vzc01vZGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJNb2RlbFByaW1hcnlDb250YWluZXJJbWFnZUNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJNb2RlbFByaW1hcnlDb250YWluZXJJbWFnZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVwb3NpdG9yeUFjY2Vzc01vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcG9zaXRvcnlBY2Nlc3NNb2RlID0gdGhpcy5fcmVwb3NpdG9yeUFjY2Vzc01vZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJNb2RlbFByaW1hcnlDb250YWluZXJJbWFnZUNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlcG9zaXRvcnlBY2Nlc3NNb2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXBvc2l0b3J5QWNjZXNzTW9kZSA9IHZhbHVlLnJlcG9zaXRvcnlBY2Nlc3NNb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlcG9zaXRvcnlfYWNjZXNzX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVwb3NpdG9yeUFjY2Vzc01vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlBY2Nlc3NNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwb3NpdG9yeV9hY2Nlc3NfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwb3NpdG9yeUFjY2Vzc01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlcG9zaXRvcnlBY2Nlc3NNb2RlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlBY2Nlc3NNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnlBY2Nlc3NNb2RlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlck1vZGVsUHJpbWFyeUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250YWluZXJIb3N0bmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbnZpcm9ubWVudD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vZGVsRGF0YVVybD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZUNvbmZpZz86IFNhZ2VtYWtlck1vZGVsUHJpbWFyeUNvbnRhaW5lckltYWdlQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyTW9kZWxQcmltYXJ5Q29udGFpbmVyVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyTW9kZWxQcmltYXJ5Q29udGFpbmVyT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyTW9kZWxQcmltYXJ5Q29udGFpbmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyX2hvc3RuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRhaW5lckhvc3RuYW1lKSxcbiAgICBlbnZpcm9ubWVudDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5lbnZpcm9ubWVudCksXG4gICAgaW1hZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2UpLFxuICAgIG1vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gICAgbW9kZWxfZGF0YV91cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9kZWxEYXRhVXJsKSxcbiAgICBpbWFnZV9jb25maWc6IHNhZ2VtYWtlck1vZGVsUHJpbWFyeUNvbnRhaW5lckltYWdlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZUNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlck1vZGVsUHJpbWFyeUNvbnRhaW5lck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJNb2RlbFByaW1hcnlDb250YWluZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lckhvc3RuYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb250YWluZXJIb3N0bmFtZSA9IHRoaXMuX2NvbnRhaW5lckhvc3RuYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW52aXJvbm1lbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVudmlyb25tZW50ID0gdGhpcy5fZW52aXJvbm1lbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbWFnZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2UgPSB0aGlzLl9pbWFnZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZWxEYXRhVXJsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb2RlbERhdGFVcmwgPSB0aGlzLl9tb2RlbERhdGFVcmw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbWFnZUNvbmZpZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VDb25maWcgPSB0aGlzLl9pbWFnZUNvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlck1vZGVsUHJpbWFyeUNvbnRhaW5lciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckhvc3RuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW52aXJvbm1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbWFnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tb2RlbERhdGFVcmwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbWFnZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb250YWluZXJIb3N0bmFtZSA9IHZhbHVlLmNvbnRhaW5lckhvc3RuYW1lO1xuICAgICAgdGhpcy5fZW52aXJvbm1lbnQgPSB2YWx1ZS5lbnZpcm9ubWVudDtcbiAgICAgIHRoaXMuX2ltYWdlID0gdmFsdWUuaW1hZ2U7XG4gICAgICB0aGlzLl9tb2RlID0gdmFsdWUubW9kZTtcbiAgICAgIHRoaXMuX21vZGVsRGF0YVVybCA9IHZhbHVlLm1vZGVsRGF0YVVybDtcbiAgICAgIHRoaXMuX2ltYWdlQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pbWFnZUNvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBjb250YWluZXJfaG9zdG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGFpbmVySG9zdG5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lckhvc3RuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGFpbmVyX2hvc3RuYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250YWluZXJIb3N0bmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGFpbmVySG9zdG5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250YWluZXJIb3N0bmFtZSgpIHtcbiAgICB0aGlzLl9jb250YWluZXJIb3N0bmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGFpbmVySG9zdG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVySG9zdG5hbWU7XG4gIH1cblxuICAvLyBlbnZpcm9ubWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbnZpcm9ubWVudD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vudmlyb25tZW50JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW52aXJvbm1lbnQodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Vudmlyb25tZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW52aXJvbm1lbnQoKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50O1xuICB9XG5cbiAgLy8gaW1hZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW1hZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGltYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbWFnZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZTtcbiAgfVxuXG4gIC8vIG1vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb2RlKCkge1xuICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8vIG1vZGVsX2RhdGFfdXJsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21vZGVsRGF0YVVybD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbW9kZWxEYXRhVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9kZWxfZGF0YV91cmwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vZGVsRGF0YVVybCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZWxEYXRhVXJsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TW9kZWxEYXRhVXJsKCkge1xuICAgIHRoaXMuX21vZGVsRGF0YVVybCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbW9kZWxEYXRhVXJsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsRGF0YVVybDtcbiAgfVxuXG4gIC8vIGltYWdlX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZUNvbmZpZyA9IG5ldyBTYWdlbWFrZXJNb2RlbFByaW1hcnlDb250YWluZXJJbWFnZUNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbWFnZV9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaW1hZ2VDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRJbWFnZUNvbmZpZyh2YWx1ZTogU2FnZW1ha2VyTW9kZWxQcmltYXJ5Q29udGFpbmVySW1hZ2VDb25maWcpIHtcbiAgICB0aGlzLl9pbWFnZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW1hZ2VDb25maWcoKSB7XG4gICAgdGhpcy5faW1hZ2VDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW1hZ2VDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJNb2RlbFZwY0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJNb2RlbFZwY0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlck1vZGVsVnBjQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyTW9kZWxWcGNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyTW9kZWxWcGNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyTW9kZWxWcGNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NlY3VyaXR5R3JvdXBJZHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3VyaXR5R3JvdXBJZHMgPSB0aGlzLl9zZWN1cml0eUdyb3VwSWRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VibmV0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3VibmV0cyA9IHRoaXMuX3N1Ym5ldHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJNb2RlbFZwY0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBJZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJuZXRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWUuc2VjdXJpdHlHcm91cElkcztcbiAgICAgIHRoaXMuX3N1Ym5ldHMgPSB2YWx1ZS5zdWJuZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUdyb3VwSWRzO1xuICB9XG5cbiAgLy8gc3VibmV0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdWJuZXRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1Ym5ldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJuZXRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VibmV0cztcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlck1vZGVsIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3NhZ2VtYWtlcl9tb2RlbFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU2FnZW1ha2VyTW9kZWxDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zYWdlbWFrZXJfbW9kZWwnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZW5hYmxlTmV0d29ya0lzb2xhdGlvbiA9IGNvbmZpZy5lbmFibGVOZXR3b3JrSXNvbGF0aW9uO1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSBjb25maWcuZXhlY3V0aW9uUm9sZUFybjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyO1xuICAgIHRoaXMuX2luZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZztcbiAgICB0aGlzLl9wcmltYXJ5Q29udGFpbmVyLmludGVybmFsVmFsdWUgPSBjb25maWcucHJpbWFyeUNvbnRhaW5lcjtcbiAgICB0aGlzLl92cGNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy52cGNDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZW5hYmxlX25ldHdvcmtfaXNvbGF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZU5ldHdvcmtJc29sYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZU5ldHdvcmtJc29sYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX25ldHdvcmtfaXNvbGF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlTmV0d29ya0lzb2xhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlTmV0d29ya0lzb2xhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZU5ldHdvcmtJc29sYXRpb24oKSB7XG4gICAgdGhpcy5fZW5hYmxlTmV0d29ya0lzb2xhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlTmV0d29ya0lzb2xhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVOZXR3b3JrSXNvbGF0aW9uO1xuICB9XG5cbiAgLy8gZXhlY3V0aW9uX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2V4ZWN1dGlvblJvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvblJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGVjdXRpb25fcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4ZWN1dGlvblJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Sb2xlQXJuO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGNvbnRhaW5lciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250YWluZXI/OiBTYWdlbWFrZXJNb2RlbENvbnRhaW5lcltdOyBcbiAgcHVibGljIGdldCBjb250YWluZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbnRhaW5lcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRhaW5lcih2YWx1ZTogU2FnZW1ha2VyTW9kZWxDb250YWluZXJbXSkge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRhaW5lcigpIHtcbiAgICB0aGlzLl9jb250YWluZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gIH1cblxuICAvLyBpbmZlcmVuY2VfZXhlY3V0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmZlcmVuY2VFeGVjdXRpb25Db25maWcgPSBuZXcgU2FnZW1ha2VyTW9kZWxJbmZlcmVuY2VFeGVjdXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaW5mZXJlbmNlX2V4ZWN1dGlvbl9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaW5mZXJlbmNlRXhlY3V0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmZlcmVuY2VFeGVjdXRpb25Db25maWc7XG4gIH1cbiAgcHVibGljIHB1dEluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZyh2YWx1ZTogU2FnZW1ha2VyTW9kZWxJbmZlcmVuY2VFeGVjdXRpb25Db25maWcpIHtcbiAgICB0aGlzLl9pbmZlcmVuY2VFeGVjdXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZygpIHtcbiAgICB0aGlzLl9pbmZlcmVuY2VFeGVjdXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5mZXJlbmNlRXhlY3V0aW9uQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcHJpbWFyeV9jb250YWluZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJpbWFyeUNvbnRhaW5lciA9IG5ldyBTYWdlbWFrZXJNb2RlbFByaW1hcnlDb250YWluZXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicHJpbWFyeV9jb250YWluZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcHJpbWFyeUNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpbWFyeUNvbnRhaW5lcjtcbiAgfVxuICBwdWJsaWMgcHV0UHJpbWFyeUNvbnRhaW5lcih2YWx1ZTogU2FnZW1ha2VyTW9kZWxQcmltYXJ5Q29udGFpbmVyKSB7XG4gICAgdGhpcy5fcHJpbWFyeUNvbnRhaW5lci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpbWFyeUNvbnRhaW5lcigpIHtcbiAgICB0aGlzLl9wcmltYXJ5Q29udGFpbmVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaW1hcnlDb250YWluZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpbWFyeUNvbnRhaW5lci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNDb25maWcgPSBuZXcgU2FnZW1ha2VyTW9kZWxWcGNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidnBjX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB2cGNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0VnBjQ29uZmlnKHZhbHVlOiBTYWdlbWFrZXJNb2RlbFZwY0NvbmZpZykge1xuICAgIHRoaXMuX3ZwY0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjQ29uZmlnKCkge1xuICAgIHRoaXMuX3ZwY0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVuYWJsZV9uZXR3b3JrX2lzb2xhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZU5ldHdvcmtJc29sYXRpb24pLFxuICAgICAgZXhlY3V0aW9uX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9leGVjdXRpb25Sb2xlQXJuKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBjb250YWluZXI6IGNka3RmLmxpc3RNYXBwZXIoc2FnZW1ha2VyTW9kZWxDb250YWluZXJUb1RlcnJhZm9ybSkodGhpcy5fY29udGFpbmVyKSxcbiAgICAgIGluZmVyZW5jZV9leGVjdXRpb25fY29uZmlnOiBzYWdlbWFrZXJNb2RlbEluZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2luZmVyZW5jZUV4ZWN1dGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHByaW1hcnlfY29udGFpbmVyOiBzYWdlbWFrZXJNb2RlbFByaW1hcnlDb250YWluZXJUb1RlcnJhZm9ybSh0aGlzLl9wcmltYXJ5Q29udGFpbmVyLmludGVybmFsVmFsdWUpLFxuICAgICAgdnBjX2NvbmZpZzogc2FnZW1ha2VyTW9kZWxWcGNDb25maWdUb1RlcnJhZm9ybSh0aGlzLl92cGNDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19