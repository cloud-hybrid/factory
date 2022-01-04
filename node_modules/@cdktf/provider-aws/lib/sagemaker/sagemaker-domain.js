"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerDomain = exports.SagemakerDomainRetentionPolicyOutputReference = exports.sagemakerDomainRetentionPolicyToTerraform = exports.SagemakerDomainDefaultUserSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform = exports.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform = exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform = exports.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference = exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform = exports.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
    };
}
exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform = sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._instanceType) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._sagemakerImageArn) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._sagemakerImageArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._sagemakerImageArn = value.sagemakerImageArn;
        }
    }
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    /**
     * @stability stable
     */
    set instanceType(value) {
        this._instanceType = value;
    }
    /**
     * @stability stable
     */
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeInput() {
        return this._instanceType;
    }
    /**
     * @stability stable
     */
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    /**
     * @stability stable
     */
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    /**
     * @stability stable
     */
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
}
exports.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference = SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference[_a] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference", version: "3.0.1" };
function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform = sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: true, required: false
        this._defaultResourceSpec = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _l, _m;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._lifecycleConfigArns) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        if ((_l = this._defaultResourceSpec) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = (_m = this._defaultResourceSpec) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lifecycleConfigArns = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    /**
     * @stability stable
     */
    get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    /**
     * @stability stable
     */
    set lifecycleConfigArns(value) {
        this._lifecycleConfigArns = value;
    }
    /**
     * @stability stable
     */
    resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
    /**
     * @stability stable
     */
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    /**
     * @stability stable
     */
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference = SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference[_b] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference", version: "3.0.1" };
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_image_config_name: cdktf.stringToTerraform(struct.appImageConfigName),
        image_name: cdktf.stringToTerraform(struct.imageName),
        image_version_number: cdktf.numberToTerraform(struct.imageVersionNumber),
    };
}
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform;
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
    };
}
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._instanceType) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._sagemakerImageArn) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._sagemakerImageArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._sagemakerImageArn = value.sagemakerImageArn;
        }
    }
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    /**
     * @stability stable
     */
    set instanceType(value) {
        this._instanceType = value;
    }
    /**
     * @stability stable
     */
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeInput() {
        return this._instanceType;
    }
    /**
     * @stability stable
     */
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    /**
     * @stability stable
     */
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    /**
     * @stability stable
     */
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
}
exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference = SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference[_c] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference", version: "3.0.1" };
function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct.customImage),
        default_resource_spec: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform = sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: true, required: false
        this._defaultResourceSpec = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _l, _m;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._lifecycleConfigArns) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        if (this._customImage) {
            hasAnyValues = true;
            internalValueResult.customImage = this._customImage;
        }
        if ((_l = this._defaultResourceSpec) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = (_m = this._defaultResourceSpec) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lifecycleConfigArns = undefined;
            this._customImage = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
            this._customImage = value.customImage;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    /**
     * @stability stable
     */
    get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    /**
     * @stability stable
     */
    set lifecycleConfigArns(value) {
        this._lifecycleConfigArns = value;
    }
    /**
     * @stability stable
     */
    resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
    /**
     * @stability stable
     */
    get customImage() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('custom_image');
    }
    /**
     * @stability stable
     */
    set customImage(value) {
        this._customImage = value;
    }
    /**
     * @stability stable
     */
    resetCustomImage() {
        this._customImage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customImageInput() {
        return this._customImage;
    }
    /**
     * @stability stable
     */
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    /**
     * @stability stable
     */
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference = SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference[_d] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference", version: "3.0.1" };
function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        notebook_output_option: cdktf.stringToTerraform(struct.notebookOutputOption),
        s3_kms_key_id: cdktf.stringToTerraform(struct.s3KmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath),
    };
}
exports.sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform = sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._notebookOutputOption) {
            hasAnyValues = true;
            internalValueResult.notebookOutputOption = this._notebookOutputOption;
        }
        if (this._s3KmsKeyId) {
            hasAnyValues = true;
            internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
        }
        if (this._s3OutputPath) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._notebookOutputOption = undefined;
            this._s3KmsKeyId = undefined;
            this._s3OutputPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._notebookOutputOption = value.notebookOutputOption;
            this._s3KmsKeyId = value.s3KmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
        }
    }
    /**
     * @stability stable
     */
    get notebookOutputOption() {
        return this.getStringAttribute('notebook_output_option');
    }
    /**
     * @stability stable
     */
    set notebookOutputOption(value) {
        this._notebookOutputOption = value;
    }
    /**
     * @stability stable
     */
    resetNotebookOutputOption() {
        this._notebookOutputOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notebookOutputOptionInput() {
        return this._notebookOutputOption;
    }
    /**
     * @stability stable
     */
    get s3KmsKeyId() {
        return this.getStringAttribute('s3_kms_key_id');
    }
    /**
     * @stability stable
     */
    set s3KmsKeyId(value) {
        this._s3KmsKeyId = value;
    }
    /**
     * @stability stable
     */
    resetS3KmsKeyId() {
        this._s3KmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3KmsKeyIdInput() {
        return this._s3KmsKeyId;
    }
    /**
     * @stability stable
     */
    get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    /**
     * @stability stable
     */
    set s3OutputPath(value) {
        this._s3OutputPath = value;
    }
    /**
     * @stability stable
     */
    resetS3OutputPath() {
        this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
exports.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference = SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference[_e] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference", version: "3.0.1" };
function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
    };
}
exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform = sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
        if (this._instanceType) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._sagemakerImageArn) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._sagemakerImageArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._sagemakerImageArn = value.sagemakerImageArn;
        }
    }
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    /**
     * @stability stable
     */
    set instanceType(value) {
        this._instanceType = value;
    }
    /**
     * @stability stable
     */
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeInput() {
        return this._instanceType;
    }
    /**
     * @stability stable
     */
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    /**
     * @stability stable
     */
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    /**
     * @stability stable
     */
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
}
exports.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference = SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference[_f] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference", version: "3.0.1" };
function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_resource_spec: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform = sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: true, required: false
        this._defaultResourceSpec = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _l, _m;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_l = this._defaultResourceSpec) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = (_m = this._defaultResourceSpec) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    /**
     * @stability stable
     */
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    /**
     * @stability stable
     */
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference = SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference[_g] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference", version: "3.0.1" };
function sagemakerDomainDefaultUserSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        execution_role: cdktf.stringToTerraform(struct.executionRole),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        jupyter_server_app_settings: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct.jupyterServerAppSettings),
        kernel_gateway_app_settings: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct.kernelGatewayAppSettings),
        sharing_settings: sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct.sharingSettings),
        tensor_board_app_settings: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct.tensorBoardAppSettings),
    };
}
exports.sagemakerDomainDefaultUserSettingsToTerraform = sagemakerDomainDefaultUserSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // jupyter_server_app_settings - computed: false, optional: true, required: false
        this._jupyterServerAppSettings = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings", true);
        // kernel_gateway_app_settings - computed: false, optional: true, required: false
        this._kernelGatewayAppSettings = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings", true);
        // sharing_settings - computed: false, optional: true, required: false
        this._sharingSettings = new SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(this, "sharing_settings", true);
        // tensor_board_app_settings - computed: false, optional: true, required: false
        this._tensorBoardAppSettings = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _l, _m, _o, _p, _q, _r, _s, _t;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._executionRole) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._securityGroups) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if ((_l = this._jupyterServerAppSettings) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.jupyterServerAppSettings = (_m = this._jupyterServerAppSettings) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        if ((_o = this._kernelGatewayAppSettings) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.kernelGatewayAppSettings = (_p = this._kernelGatewayAppSettings) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        if ((_q = this._sharingSettings) === null || _q === void 0 ? void 0 : _q.internalValue) {
            hasAnyValues = true;
            internalValueResult.sharingSettings = (_r = this._sharingSettings) === null || _r === void 0 ? void 0 : _r.internalValue;
        }
        if ((_s = this._tensorBoardAppSettings) === null || _s === void 0 ? void 0 : _s.internalValue) {
            hasAnyValues = true;
            internalValueResult.tensorBoardAppSettings = (_t = this._tensorBoardAppSettings) === null || _t === void 0 ? void 0 : _t.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._executionRole = undefined;
            this._securityGroups = undefined;
            this._jupyterServerAppSettings.internalValue = undefined;
            this._kernelGatewayAppSettings.internalValue = undefined;
            this._sharingSettings.internalValue = undefined;
            this._tensorBoardAppSettings.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._executionRole = value.executionRole;
            this._securityGroups = value.securityGroups;
            this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
            this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
            this._sharingSettings.internalValue = value.sharingSettings;
            this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
        }
    }
    /**
     * @stability stable
     */
    get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    /**
     * @stability stable
     */
    set executionRole(value) {
        this._executionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get executionRoleInput() {
        return this._executionRole;
    }
    /**
     * @stability stable
     */
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    /**
     * @stability stable
     */
    set securityGroups(value) {
        this._securityGroups = value;
    }
    /**
     * @stability stable
     */
    resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityGroupsInput() {
        return this._securityGroups;
    }
    /**
     * @stability stable
     */
    get jupyterServerAppSettings() {
        return this._jupyterServerAppSettings;
    }
    /**
     * @stability stable
     */
    putJupyterServerAppSettings(value) {
        this._jupyterServerAppSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetJupyterServerAppSettings() {
        this._jupyterServerAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jupyterServerAppSettingsInput() {
        return this._jupyterServerAppSettings.internalValue;
    }
    /**
     * @stability stable
     */
    get kernelGatewayAppSettings() {
        return this._kernelGatewayAppSettings;
    }
    /**
     * @stability stable
     */
    putKernelGatewayAppSettings(value) {
        this._kernelGatewayAppSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKernelGatewayAppSettings() {
        this._kernelGatewayAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kernelGatewayAppSettingsInput() {
        return this._kernelGatewayAppSettings.internalValue;
    }
    /**
     * @stability stable
     */
    get sharingSettings() {
        return this._sharingSettings;
    }
    /**
     * @stability stable
     */
    putSharingSettings(value) {
        this._sharingSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSharingSettings() {
        this._sharingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sharingSettingsInput() {
        return this._sharingSettings.internalValue;
    }
    /**
     * @stability stable
     */
    get tensorBoardAppSettings() {
        return this._tensorBoardAppSettings;
    }
    /**
     * @stability stable
     */
    putTensorBoardAppSettings(value) {
        this._tensorBoardAppSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTensorBoardAppSettings() {
        this._tensorBoardAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tensorBoardAppSettingsInput() {
        return this._tensorBoardAppSettings.internalValue;
    }
}
exports.SagemakerDomainDefaultUserSettingsOutputReference = SagemakerDomainDefaultUserSettingsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SagemakerDomainDefaultUserSettingsOutputReference[_h] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainDefaultUserSettingsOutputReference", version: "3.0.1" };
function sagemakerDomainRetentionPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        home_efs_file_system: cdktf.stringToTerraform(struct.homeEfsFileSystem),
    };
}
exports.sagemakerDomainRetentionPolicyToTerraform = sagemakerDomainRetentionPolicyToTerraform;
/**
 * @stability stable
 */
class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._homeEfsFileSystem) {
            hasAnyValues = true;
            internalValueResult.homeEfsFileSystem = this._homeEfsFileSystem;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._homeEfsFileSystem = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._homeEfsFileSystem = value.homeEfsFileSystem;
        }
    }
    /**
     * @stability stable
     */
    get homeEfsFileSystem() {
        return this.getStringAttribute('home_efs_file_system');
    }
    /**
     * @stability stable
     */
    set homeEfsFileSystem(value) {
        this._homeEfsFileSystem = value;
    }
    /**
     * @stability stable
     */
    resetHomeEfsFileSystem() {
        this._homeEfsFileSystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get homeEfsFileSystemInput() {
        return this._homeEfsFileSystem;
    }
}
exports.SagemakerDomainRetentionPolicyOutputReference = SagemakerDomainRetentionPolicyOutputReference;
_j = JSII_RTTI_SYMBOL_1;
SagemakerDomainRetentionPolicyOutputReference[_j] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomainRetentionPolicyOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain}.
 *
 * @stability stable
 */
class SagemakerDomain extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // default_user_settings - computed: false, optional: false, required: true
        this._defaultUserSettings = new SagemakerDomainDefaultUserSettingsOutputReference(this, "default_user_settings", true);
        // retention_policy - computed: false, optional: true, required: false
        this._retentionPolicy = new SagemakerDomainRetentionPolicyOutputReference(this, "retention_policy", true);
        this._appNetworkAccessType = config.appNetworkAccessType;
        this._authMode = config.authMode;
        this._domainName = config.domainName;
        this._kmsKeyId = config.kmsKeyId;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcId = config.vpcId;
        this._defaultUserSettings.internalValue = config.defaultUserSettings;
        this._retentionPolicy.internalValue = config.retentionPolicy;
    }
    /**
     * @stability stable
     */
    get appNetworkAccessType() {
        return this.getStringAttribute('app_network_access_type');
    }
    /**
     * @stability stable
     */
    set appNetworkAccessType(value) {
        this._appNetworkAccessType = value;
    }
    /**
     * @stability stable
     */
    resetAppNetworkAccessType() {
        this._appNetworkAccessType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get appNetworkAccessTypeInput() {
        return this._appNetworkAccessType;
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
    get authMode() {
        return this.getStringAttribute('auth_mode');
    }
    /**
     * @stability stable
     */
    set authMode(value) {
        this._authMode = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authModeInput() {
        return this._authMode;
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
    // home_efs_file_system_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get homeEfsFileSystemId() {
        return this.getStringAttribute('home_efs_file_system_id');
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
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    /**
     * @stability stable
     */
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    /**
     * @stability stable
     */
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
    // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get singleSignOnManagedApplicationInstanceId() {
        return this.getStringAttribute('single_sign_on_managed_application_instance_id');
    }
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    /**
     * @stability stable
     */
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetIdsInput() {
        return this._subnetIds;
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
    // url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get url() {
        return this.getStringAttribute('url');
    }
    /**
     * @stability stable
     */
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    /**
     * @stability stable
     */
    set vpcId(value) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcIdInput() {
        return this._vpcId;
    }
    /**
     * @stability stable
     */
    get defaultUserSettings() {
        return this._defaultUserSettings;
    }
    /**
     * @stability stable
     */
    putDefaultUserSettings(value) {
        this._defaultUserSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultUserSettingsInput() {
        return this._defaultUserSettings.internalValue;
    }
    /**
     * @stability stable
     */
    get retentionPolicy() {
        return this._retentionPolicy;
    }
    /**
     * @stability stable
     */
    putRetentionPolicy(value) {
        this._retentionPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRetentionPolicy() {
        this._retentionPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retentionPolicyInput() {
        return this._retentionPolicy.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
            auth_mode: cdktf.stringToTerraform(this._authMode),
            domain_name: cdktf.stringToTerraform(this._domainName),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            default_user_settings: sagemakerDomainDefaultUserSettingsToTerraform(this._defaultUserSettings.internalValue),
            retention_policy: sagemakerDomainRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
        };
    }
}
exports.SagemakerDomain = SagemakerDomain;
_k = JSII_RTTI_SYMBOL_1;
SagemakerDomain[_k] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerDomain", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SagemakerDomain.tfResourceType = "aws_sagemaker_domain";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLWRvbWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdlbWFrZXIvc2FnZW1ha2VyLWRvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWdDL0IsU0FBZ0Isd0ZBQXdGLENBQUMsTUFBcUw7SUFDNVIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUN4RSxDQUFBO0FBQ0gsQ0FBQztBQVRELDRMQVNDOzs7O0FBRUQsTUFBYSw0RkFBNkYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUluSSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBZ0c7UUFDdkgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7U0FDckM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOztBQWpFSCxvTUFrRUM7OztBQVFELFNBQWdCLHFFQUFxRSxDQUFDLE1BQStJO0lBQ25PLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDN0YscUJBQXFCLEVBQUUsd0ZBQXdGLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO0tBQzdJLENBQUE7QUFDSCxDQUFDO0FBVEQsc0pBU0M7Ozs7QUFFRCxNQUFhLHlFQUEwRSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWhILFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWtEOUIsMkVBQTJFO1FBQ25FLHlCQUFvQixHQUFHLElBQUksNEZBQTRGLENBQUMsSUFBVyxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBOUM1SyxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhOztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ3JFO1FBQ0QsVUFBSSxJQUFJLENBQUMsb0JBQW9CLDBDQUFFLGFBQWEsRUFBRTtZQUM1QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixTQUFHLElBQUksQ0FBQyxvQkFBb0IsMENBQUUsYUFBYSxDQUFDO1NBQ3BGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTZFO1FBQ3BHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ3JEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNELElBQVcsbUJBQW1CLENBQUMsS0FBZTtRQUM1QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sc0JBQXNCLENBQUMsS0FBb0Y7UUFDaEgsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNNLHdCQUF3QjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztJQUNqRCxDQUFDOztBQWpFSCw4SkFrRUM7OztBQVVELFNBQWdCLGdGQUFnRixDQUFDLE1BQThFO0lBQzdLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUMxRSxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztLQUMxRSxDQUFBO0FBQ0gsQ0FBQztBQVZELDRLQVVDO0FBU0QsU0FBZ0Isd0ZBQXdGLENBQUMsTUFBcUw7SUFDNVIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUN4RSxDQUFBO0FBQ0gsQ0FBQztBQVRELDRMQVNDOzs7O0FBRUQsTUFBYSw0RkFBNkYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUluSSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBZ0c7UUFDdkgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7U0FDckM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOztBQWpFSCxvTUFrRUM7OztBQVVELFNBQWdCLHFFQUFxRSxDQUFDLE1BQStJO0lBQ25PLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDN0YsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3JJLHFCQUFxQixFQUFFLHdGQUF3RixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztLQUM3SSxDQUFBO0FBQ0gsQ0FBQztBQVZELHNKQVVDOzs7O0FBRUQsTUFBYSx5RUFBMEUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUloSCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUF5RTlCLDJFQUEyRTtRQUNuRSx5QkFBb0IsR0FBRyxJQUFJLDRGQUE0RixDQUFDLElBQVcsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQXJFNUssQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUNyRTtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsVUFBSSxJQUFJLENBQUMsb0JBQW9CLDBDQUFFLGFBQWEsRUFBRTtZQUM1QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixTQUFHLElBQUksQ0FBQyxvQkFBb0IsMENBQUUsYUFBYSxDQUFDO1NBQ3BGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTZFO1FBQ3BHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ3JEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWU7UUFDNUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBOEU7UUFDbkcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNNLHNCQUFzQixDQUFDLEtBQW9GO1FBQ2hILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDdEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7SUFDakQsQ0FBQzs7QUF4RkgsOEpBeUZDOzs7QUFVRCxTQUFnQiw0REFBNEQsQ0FBQyxNQUE2SDtJQUN4TSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0UsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQzFELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM5RCxDQUFBO0FBQ0gsQ0FBQztBQVZELG9JQVVDOzs7O0FBRUQsTUFBYSxnRUFBaUUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2RyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFvRTtRQUMzRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUNoQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7O0FBdkZILDRJQXdGQzs7O0FBUUQsU0FBZ0Isc0ZBQXNGLENBQUMsTUFBaUw7SUFDdFIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUN4RSxDQUFBO0FBQ0gsQ0FBQztBQVRELHdMQVNDOzs7O0FBRUQsTUFBYSwwRkFBMkYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlqSSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBOEY7UUFDckgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7U0FDckM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOztBQWpFSCxnTUFrRUM7OztBQU1ELFNBQWdCLG1FQUFtRSxDQUFDLE1BQTJJO0lBQzdOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsc0ZBQXNGLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO0tBQzNJLENBQUE7QUFDSCxDQUFDO0FBUkQsa0pBUUM7Ozs7QUFFRCxNQUFhLHVFQUF3RSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTlHLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQTRCOUIsMkVBQTJFO1FBQ25FLHlCQUFvQixHQUFHLElBQUksMEZBQTBGLENBQUMsSUFBVyxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBeEIxSyxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhOztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLFVBQUksSUFBSSxDQUFDLG9CQUFvQiwwQ0FBRSxhQUFhLEVBQUU7WUFDNUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsU0FBRyxJQUFJLENBQUMsb0JBQW9CLDBDQUFFLGFBQWEsQ0FBQztTQUNwRjtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUEyRTtRQUNsRyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDckQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFDTSxzQkFBc0IsQ0FBQyxLQUFrRjtRQUM5RyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3RELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO0lBQ2pELENBQUM7O0FBM0NILDBKQTRDQzs7O0FBZ0JELFNBQWdCLDZDQUE2QyxDQUFDLE1BQStGO0lBQzNKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDbEYsMkJBQTJCLEVBQUUscUVBQXFFLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ3BJLDJCQUEyQixFQUFFLHFFQUFxRSxDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUNwSSxnQkFBZ0IsRUFBRSw0REFBNEQsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ3ZHLHlCQUF5QixFQUFFLG1FQUFtRSxDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztLQUMvSCxDQUFBO0FBQ0gsQ0FBQztBQWJELHNHQWFDOzs7O0FBRUQsTUFBYSxpREFBa0QsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl4RixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUF1RjlCLGlGQUFpRjtRQUN6RSw4QkFBeUIsR0FBRyxJQUFJLHlFQUF5RSxDQUFDLElBQVcsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVwSyxpRkFBaUY7UUFDekUsOEJBQXlCLEdBQUcsSUFBSSx5RUFBeUUsQ0FBQyxJQUFXLEVBQUUsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlcEssc0VBQXNFO1FBQzlELHFCQUFnQixHQUFHLElBQUksZ0VBQWdFLENBQUMsSUFBVyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZXZJLCtFQUErRTtRQUN2RSw0QkFBdUIsR0FBRyxJQUFJLHVFQUF1RSxDQUFDLElBQVcsRUFBRSwyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQW5JOUosQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzNEO1FBQ0QsVUFBSSxJQUFJLENBQUMseUJBQXlCLDBDQUFFLGFBQWEsRUFBRTtZQUNqRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHdCQUF3QixTQUFHLElBQUksQ0FBQyx5QkFBeUIsMENBQUUsYUFBYSxDQUFDO1NBQzlGO1FBQ0QsVUFBSSxJQUFJLENBQUMseUJBQXlCLDBDQUFFLGFBQWEsRUFBRTtZQUNqRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHdCQUF3QixTQUFHLElBQUksQ0FBQyx5QkFBeUIsMENBQUUsYUFBYSxDQUFDO1NBQzlGO1FBQ0QsVUFBSSxJQUFJLENBQUMsZ0JBQWdCLDBDQUFFLGFBQWEsRUFBRTtZQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGVBQWUsU0FBRyxJQUFJLENBQUMsZ0JBQWdCLDBDQUFFLGFBQWEsQ0FBQztTQUM1RTtRQUNELFVBQUksSUFBSSxDQUFDLHVCQUF1QiwwQ0FBRSxhQUFhLEVBQUU7WUFDL0MsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxzQkFBc0IsU0FBRyxJQUFJLENBQUMsdUJBQXVCLDBDQUFFLGFBQWEsQ0FBQztTQUMxRjtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFxRDtRQUM1RSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDekQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDaEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDeEQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDOUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDOUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQzVELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLHNCQUFzQixDQUFDO1NBQzNFO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBZTtRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7O0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFJRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBQ00sMkJBQTJCLENBQUMsS0FBaUU7UUFDbEcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNNLDZCQUE2QjtRQUNsQyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMzRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztJQUN0RCxDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLDJCQUEyQixDQUFDLEtBQWlFO1FBQ2xHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDM0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7SUFDdEQsQ0FBQzs7OztJQUlELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBQ00sa0JBQWtCLENBQUMsS0FBd0Q7UUFDaEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDOUMsQ0FBQzs7OztJQUNNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDOzs7O0lBSUQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUNNLHlCQUF5QixDQUFDLEtBQStEO1FBQzlGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFDTSwyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDekQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7SUFDcEQsQ0FBQzs7QUF0SkgsOEdBdUpDOzs7QUFNRCxTQUFnQix5Q0FBeUMsQ0FBQyxNQUF1RjtJQUMvSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7S0FDekUsQ0FBQTtBQUNILENBQUM7QUFSRCw4RkFRQzs7OztBQUVELE1BQWEsNkNBQThDLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJcEYsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFpRDtRQUN4RSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztTQUNyQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOztBQTNDSCxzR0E0Q0M7Ozs7Ozs7O0FBR0QsTUFBYSxlQUFnQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPMUQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTZCO1FBQzVFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsc0JBQXNCO1lBQzdDLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFnS0wsMkVBQTJFO1FBQ25FLHlCQUFvQixHQUFHLElBQUksaURBQWlELENBQUMsSUFBVyxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBWWpJLHNFQUFzRTtRQUM5RCxxQkFBZ0IsR0FBRyxJQUFJLDZDQUE2QyxDQUFDLElBQVcsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQTdLbEgsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFRRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFDRCxJQUFXLG9CQUFvQixDQUFDLEtBQWE7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ00seUJBQXlCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQseURBQXlEOzs7O0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCw2RUFBNkU7Ozs7SUFDN0UsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvR0FBb0c7Ozs7SUFDcEcsSUFBVyx3Q0FBd0M7UUFDakQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUNuRixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFlO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFvRDtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQVEsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBb0Q7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx5REFBeUQ7Ozs7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNNLHNCQUFzQixDQUFDLEtBQXlDO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLGtCQUFrQixDQUFDLEtBQXFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDbEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUM1RSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RFLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxxQkFBcUIsRUFBRSw2Q0FBNkMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1lBQzdHLGdCQUFnQixFQUFFLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7U0FDakcsQ0FBQztJQUNKLENBQUM7O0FBcE9ILDBDQXFPQzs7O0FBbk9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csOEJBQWMsR0FBVyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRG9tYWluQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBOZXR3b3JrQWNjZXNzVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aE1vZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2cGNJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFVzZXJTZXR0aW5nczogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJldGVudGlvblBvbGljeT86IFNhZ2VtYWtlckRvbWFpblJldGVudGlvblBvbGljeTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhZ2VtYWtlckltYWdlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VUeXBlID0gdGhpcy5faW5zdGFuY2VUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhZ2VtYWtlckltYWdlQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZS5pbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHZhbHVlLnNhZ2VtYWtlckltYWdlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gIH1cblxuICAvLyBzYWdlbWFrZXJfaW1hZ2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NhZ2VtYWtlckltYWdlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NhZ2VtYWtlcl9pbWFnZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhZ2VtYWtlckltYWdlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNhZ2VtYWtlckltYWdlQXJuKCkge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGlmZWN5Y2xlQ29uZmlnQXJucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFJlc291cmNlU3BlYz86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGlmZWN5Y2xlX2NvbmZpZ19hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxpZmVjeWNsZUNvbmZpZ0FybnMpLFxuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZUNvbmZpZ0FybnMgPSB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdFJlc291cmNlU3BlYyA9IHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucyA9IHZhbHVlLmxpZmVjeWNsZUNvbmZpZ0FybnM7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxpZmVjeWNsZV9jb25maWdfYXJucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9saWZlY3ljbGVDb25maWdBcm5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZUNvbmZpZ0FybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbGlmZWN5Y2xlX2NvbmZpZ19hcm5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBsaWZlY3ljbGVDb25maWdBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVDb25maWdBcm5zKCkge1xuICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZUNvbmZpZ0FybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucztcbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0UmVzb3VyY2VTcGVjID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImRlZmF1bHRfcmVzb3VyY2Vfc3BlY1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICB9XG4gIHB1YmxpYyBwdXREZWZhdWx0UmVzb3VyY2VTcGVjKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYykge1xuICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRSZXNvdXJjZVNwZWMoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBJbWFnZUNvbmZpZ05hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlVmVyc2lvbk51bWJlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZVRvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFwcF9pbWFnZV9jb25maWdfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBJbWFnZUNvbmZpZ05hbWUpLFxuICAgIGltYWdlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VOYW1lKSxcbiAgICBpbWFnZV92ZXJzaW9uX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZVZlcnNpb25OdW1iZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhZ2VtYWtlckltYWdlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VUeXBlID0gdGhpcy5faW5zdGFuY2VUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhZ2VtYWtlckltYWdlQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZS5pbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHZhbHVlLnNhZ2VtYWtlckltYWdlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gIH1cblxuICAvLyBzYWdlbWFrZXJfaW1hZ2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NhZ2VtYWtlckltYWdlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NhZ2VtYWtlcl9pbWFnZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhZ2VtYWtlckltYWdlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNhZ2VtYWtlckltYWdlQXJuKCkge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGlmZWN5Y2xlQ29uZmlnQXJucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tSW1hZ2U/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRSZXNvdXJjZVNwZWM/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxpZmVjeWNsZV9jb25maWdfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5saWZlY3ljbGVDb25maWdBcm5zKSxcbiAgICBjdXN0b21faW1hZ2U6IGNka3RmLmxpc3RNYXBwZXIoc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlVG9UZXJyYWZvcm0pKHN0cnVjdCEuY3VzdG9tSW1hZ2UpLFxuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZUNvbmZpZ0FybnMgPSB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VzdG9tSW1hZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmN1c3RvbUltYWdlID0gdGhpcy5fY3VzdG9tSW1hZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWZhdWx0UmVzb3VyY2VTcGVjID0gdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3VzdG9tSW1hZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZS5saWZlY3ljbGVDb25maWdBcm5zO1xuICAgICAgdGhpcy5fY3VzdG9tSW1hZ2UgPSB2YWx1ZS5jdXN0b21JbWFnZTtcbiAgICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmRlZmF1bHRSZXNvdXJjZVNwZWM7XG4gICAgfVxuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX2NvbmZpZ19hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xpZmVjeWNsZUNvbmZpZ0FybnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbGlmZWN5Y2xlQ29uZmlnQXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxpZmVjeWNsZUNvbmZpZ0FybnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExpZmVjeWNsZUNvbmZpZ0FybnMoKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGlmZWN5Y2xlQ29uZmlnQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zO1xuICB9XG5cbiAgLy8gY3VzdG9tX2ltYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbUltYWdlPzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUltYWdlKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjdXN0b21faW1hZ2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21JbWFnZSh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlW10pIHtcbiAgICB0aGlzLl9jdXN0b21JbWFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbUltYWdlKCkge1xuICAgIHRoaXMuX2N1c3RvbUltYWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21JbWFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21JbWFnZTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0UmVzb3VyY2VTcGVjID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImRlZmF1bHRfcmVzb3VyY2Vfc3BlY1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICB9XG4gIHB1YmxpYyBwdXREZWZhdWx0UmVzb3VyY2VTcGVjKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYykge1xuICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRSZXNvdXJjZVNwZWMoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBub3RlYm9va091dHB1dE9wdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0ttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNPdXRwdXRQYXRoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbm90ZWJvb2tfb3V0cHV0X29wdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub3RlYm9va091dHB1dE9wdGlvbiksXG4gICAgczNfa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0ttc0tleUlkKSxcbiAgICBzM19vdXRwdXRfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM091dHB1dFBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ub3RlYm9va091dHB1dE9wdGlvbiA9IHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNLbXNLZXlJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNLbXNLZXlJZCA9IHRoaXMuX3MzS21zS2V5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM091dHB1dFBhdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzT3V0cHV0UGF0aCA9IHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zM091dHB1dFBhdGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uID0gdmFsdWUubm90ZWJvb2tPdXRwdXRPcHRpb247XG4gICAgICB0aGlzLl9zM0ttc0tleUlkID0gdmFsdWUuczNLbXNLZXlJZDtcbiAgICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHZhbHVlLnMzT3V0cHV0UGF0aDtcbiAgICB9XG4gIH1cblxuICAvLyBub3RlYm9va19vdXRwdXRfb3B0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGVib29rT3V0cHV0T3B0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBub3RlYm9va091dHB1dE9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vdGVib29rX291dHB1dF9vcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGVib29rT3V0cHV0T3B0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGVib29rT3V0cHV0T3B0aW9uKCkge1xuICAgIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RlYm9va091dHB1dE9wdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbjtcbiAgfVxuXG4gIC8vIHMzX2ttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNLbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNLbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzS21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzS21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM0ttc0tleUlkKCkge1xuICAgIHRoaXMuX3MzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzS21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNLbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHMzX291dHB1dF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzT3V0cHV0UGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNPdXRwdXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfb3V0cHV0X3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzT3V0cHV0UGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNPdXRwdXRQYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNPdXRwdXRQYXRoKCkge1xuICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNPdXRwdXRQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBzYWdlbWFrZXJfaW1hZ2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhZ2VtYWtlckltYWdlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZVR5cGUgPSB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zYWdlbWFrZXJJbWFnZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2FnZW1ha2VySW1hZ2VBcm4gPSB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZS5pbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHZhbHVlLnNhZ2VtYWtlckltYWdlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gIH1cblxuICAvLyBzYWdlbWFrZXJfaW1hZ2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NhZ2VtYWtlckltYWdlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NhZ2VtYWtlcl9pbWFnZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhZ2VtYWtlckltYWdlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNhZ2VtYWtlckltYWdlQXJuKCkge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYWdlbWFrZXJJbWFnZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0UmVzb3VyY2VTcGVjPzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdF9yZXNvdXJjZV9zcGVjOiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdFJlc291cmNlU3BlYyA9IHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVmYXVsdFJlc291cmNlU3BlYztcbiAgICB9XG4gIH1cblxuICAvLyBkZWZhdWx0X3Jlc291cmNlX3NwZWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFJlc291cmNlU3BlYyA9IG5ldyBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZGVmYXVsdF9yZXNvdXJjZV9zcGVjXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRSZXNvdXJjZVNwZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM7XG4gIH1cbiAgcHVibGljIHB1dERlZmF1bHRSZXNvdXJjZVNwZWModmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYykge1xuICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRSZXNvdXJjZVNwZWMoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4ZWN1dGlvblJvbGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGp1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncz86IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2hhcmluZ1NldHRpbmdzPzogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlbnNvckJvYXJkQXBwU2V0dGluZ3M/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4ZWN1dGlvbl9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4ZWN1dGlvblJvbGUpLFxuICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwcyksXG4gICAganVweXRlcl9zZXJ2ZXJfYXBwX3NldHRpbmdzOiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS5qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MpLFxuICAgIGtlcm5lbF9nYXRld2F5X2FwcF9zZXR0aW5nczogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEua2VybmVsR2F0ZXdheUFwcFNldHRpbmdzKSxcbiAgICBzaGFyaW5nX3NldHRpbmdzOiBzYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS5zaGFyaW5nU2V0dGluZ3MpLFxuICAgIHRlbnNvcl9ib2FyZF9hcHBfc2V0dGluZ3M6IHNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS50ZW5zb3JCb2FyZEFwcFNldHRpbmdzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9leGVjdXRpb25Sb2xlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leGVjdXRpb25Sb2xlID0gdGhpcy5fZXhlY3V0aW9uUm9sZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlY3VyaXR5R3JvdXBzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eUdyb3VwcyA9IHRoaXMuX3NlY3VyaXR5R3JvdXBzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MgPSB0aGlzLl9qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyA9IHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NoYXJpbmdTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2hhcmluZ1NldHRpbmdzID0gdGhpcy5fc2hhcmluZ1NldHRpbmdzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGVuc29yQm9hcmRBcHBTZXR0aW5ncyA9IHRoaXMuX3RlbnNvckJvYXJkQXBwU2V0dGluZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJEb21haW5EZWZhdWx0VXNlclNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXhlY3V0aW9uUm9sZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NoYXJpbmdTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9leGVjdXRpb25Sb2xlID0gdmFsdWUuZXhlY3V0aW9uUm9sZTtcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdmFsdWUuc2VjdXJpdHlHcm91cHM7XG4gICAgICB0aGlzLl9qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmp1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncztcbiAgICAgIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWUua2VybmVsR2F0ZXdheUFwcFNldHRpbmdzO1xuICAgICAgdGhpcy5fc2hhcmluZ1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zaGFyaW5nU2V0dGluZ3M7XG4gICAgICB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZS50ZW5zb3JCb2FyZEFwcFNldHRpbmdzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4ZWN1dGlvbl9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2V4ZWN1dGlvblJvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvblJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGVjdXRpb25fcm9sZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0aW9uUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGVjdXRpb25Sb2xlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvblJvbGU7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eUdyb3Vwcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3Vwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUdyb3VwcztcbiAgfVxuXG4gIC8vIGp1cHl0ZXJfc2VydmVyX2FwcF9zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MgPSBuZXcgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJqdXB5dGVyX3NlcnZlcl9hcHBfc2V0dGluZ3NcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQganVweXRlclNlcnZlckFwcFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dEp1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncykge1xuICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnVweXRlclNlcnZlckFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBrZXJuZWxfZ2F0ZXdheV9hcHBfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwia2VybmVsX2dhdGV3YXlfYXBwX3NldHRpbmdzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3ModmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MpIHtcbiAgICB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncygpIHtcbiAgICB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2VybmVsR2F0ZXdheUFwcFNldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2hhcmluZ19zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaGFyaW5nU2V0dGluZ3MgPSBuZXcgU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzaGFyaW5nX3NldHRpbmdzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNoYXJpbmdTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmluZ1NldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRTaGFyaW5nU2V0dGluZ3ModmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MpIHtcbiAgICB0aGlzLl9zaGFyaW5nU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNoYXJpbmdTZXR0aW5ncygpIHtcbiAgICB0aGlzLl9zaGFyaW5nU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2hhcmluZ1NldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXJpbmdTZXR0aW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGVuc29yX2JvYXJkX2FwcF9zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZW5zb3JCb2FyZEFwcFNldHRpbmdzID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRlbnNvcl9ib2FyZF9hcHBfc2V0dGluZ3NcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGVuc29yQm9hcmRBcHBTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0VGVuc29yQm9hcmRBcHBTZXR0aW5ncyh2YWx1ZTogU2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3MpIHtcbiAgICB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW5zb3JCb2FyZEFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX3RlbnNvckJvYXJkQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVuc29yQm9hcmRBcHBTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvbWVFZnNGaWxlU3lzdGVtPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaG9tZV9lZnNfZmlsZV9zeXN0ZW06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9tZUVmc0ZpbGVTeXN0ZW0pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRG9tYWluUmV0ZW50aW9uUG9saWN5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ob21lRWZzRmlsZVN5c3RlbSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9tZUVmc0ZpbGVTeXN0ZW0gPSB0aGlzLl9ob21lRWZzRmlsZVN5c3RlbTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckRvbWFpblJldGVudGlvblBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hvbWVFZnNGaWxlU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ob21lRWZzRmlsZVN5c3RlbSA9IHZhbHVlLmhvbWVFZnNGaWxlU3lzdGVtO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhvbWVfZWZzX2ZpbGVfc3lzdGVtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvbWVFZnNGaWxlU3lzdGVtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob21lRWZzRmlsZVN5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvbWVfZWZzX2ZpbGVfc3lzdGVtJyk7XG4gIH1cbiAgcHVibGljIHNldCBob21lRWZzRmlsZVN5c3RlbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9tZUVmc0ZpbGVTeXN0ZW0gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb21lRWZzRmlsZVN5c3RlbSgpIHtcbiAgICB0aGlzLl9ob21lRWZzRmlsZVN5c3RlbSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9tZUVmc0ZpbGVTeXN0ZW1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9tZUVmc0ZpbGVTeXN0ZW07XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckRvbWFpbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zYWdlbWFrZXJfZG9tYWluXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTYWdlbWFrZXJEb21haW5Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zYWdlbWFrZXJfZG9tYWluJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FwcE5ldHdvcmtBY2Nlc3NUeXBlID0gY29uZmlnLmFwcE5ldHdvcmtBY2Nlc3NUeXBlO1xuICAgIHRoaXMuX2F1dGhNb2RlID0gY29uZmlnLmF1dGhNb2RlO1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSBjb25maWcuZG9tYWluTmFtZTtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IGNvbmZpZy5rbXNLZXlJZDtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSBjb25maWcuc3VibmV0SWRzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdnBjSWQgPSBjb25maWcudnBjSWQ7XG4gICAgdGhpcy5fZGVmYXVsdFVzZXJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmRlZmF1bHRVc2VyU2V0dGluZ3M7XG4gICAgdGhpcy5fcmV0ZW50aW9uUG9saWN5LmludGVybmFsVmFsdWUgPSBjb25maWcucmV0ZW50aW9uUG9saWN5O1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcHBfbmV0d29ya19hY2Nlc3NfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBOZXR3b3JrQWNjZXNzVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwTmV0d29ya0FjY2Vzc1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBfbmV0d29ya19hY2Nlc3NfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwTmV0d29ya0FjY2Vzc1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcE5ldHdvcmtBY2Nlc3NUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwTmV0d29ya0FjY2Vzc1R5cGUoKSB7XG4gICAgdGhpcy5fYXBwTmV0d29ya0FjY2Vzc1R5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcE5ldHdvcmtBY2Nlc3NUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcE5ldHdvcmtBY2Nlc3NUeXBlO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdXRoX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXV0aE1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dGhNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aF9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRoTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aE1vZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aE1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aE1vZGU7XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kb21haW5OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5OYW1lO1xuICB9XG5cbiAgLy8gaG9tZV9lZnNfZmlsZV9zeXN0ZW1faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob21lRWZzRmlsZVN5c3RlbUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9tZV9lZnNfZmlsZV9zeXN0ZW1faWQnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHNpbmdsZV9zaWduX29uX21hbmFnZWRfYXBwbGljYXRpb25faW5zdGFuY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaW5nbGVTaWduT25NYW5hZ2VkQXBwbGljYXRpb25JbnN0YW5jZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2luZ2xlX3NpZ25fb25fbWFuYWdlZF9hcHBsaWNhdGlvbl9pbnN0YW5jZV9pZCcpO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdWJuZXRJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldF9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldElkcztcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB1cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIC8vIHZwY19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92cGNJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92cGNJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNJZDtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfdXNlcl9zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZWZhdWx0VXNlclNldHRpbmdzID0gbmV3IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZGVmYXVsdF91c2VyX3NldHRpbmdzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRVc2VyU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRVc2VyU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dERlZmF1bHRVc2VyU2V0dGluZ3ModmFsdWU6IFNhZ2VtYWtlckRvbWFpbkRlZmF1bHRVc2VyU2V0dGluZ3MpIHtcbiAgICB0aGlzLl9kZWZhdWx0VXNlclNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFVzZXJTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VXNlclNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZXRlbnRpb25fcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldGVudGlvblBvbGljeSA9IG5ldyBTYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmV0ZW50aW9uX3BvbGljeVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZXRlbnRpb25Qb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldGVudGlvblBvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0UmV0ZW50aW9uUG9saWN5KHZhbHVlOiBTYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3kpIHtcbiAgICB0aGlzLl9yZXRlbnRpb25Qb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJldGVudGlvblBvbGljeSgpIHtcbiAgICB0aGlzLl9yZXRlbnRpb25Qb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmV0ZW50aW9uUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldGVudGlvblBvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBfbmV0d29ya19hY2Nlc3NfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBwTmV0d29ya0FjY2Vzc1R5cGUpLFxuICAgICAgYXV0aF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRoTW9kZSksXG4gICAgICBkb21haW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZG9tYWluTmFtZSksXG4gICAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXlJZCksXG4gICAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zdWJuZXRJZHMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB2cGNfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZwY0lkKSxcbiAgICAgIGRlZmF1bHRfdXNlcl9zZXR0aW5nczogc2FnZW1ha2VyRG9tYWluRGVmYXVsdFVzZXJTZXR0aW5nc1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRVc2VyU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgICByZXRlbnRpb25fcG9saWN5OiBzYWdlbWFrZXJEb21haW5SZXRlbnRpb25Qb2xpY3lUb1RlcnJhZm9ybSh0aGlzLl9yZXRlbnRpb25Qb2xpY3kuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19