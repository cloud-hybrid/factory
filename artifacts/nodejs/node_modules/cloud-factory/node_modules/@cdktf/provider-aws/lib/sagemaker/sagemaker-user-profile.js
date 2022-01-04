"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerUserProfile = exports.SagemakerUserProfileUserSettingsOutputReference = exports.sagemakerUserProfileUserSettingsToTerraform = exports.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference = exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform = exports.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform = exports.SagemakerUserProfileUserSettingsSharingSettingsOutputReference = exports.sagemakerUserProfileUserSettingsSharingSettingsToTerraform = exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform = exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform = exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform = exports.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference = exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform = exports.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference = exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct) {
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
exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform = sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform;
/**
 * @stability stable
 */
class SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference = SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference[_a] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference", version: "3.0.1" };
function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        default_resource_spec: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform = sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: false, required: true
        this._defaultResourceSpec = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._lifecycleConfigArns) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        if ((_k = this._defaultResourceSpec) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = (_l = this._defaultResourceSpec) === null || _l === void 0 ? void 0 : _l.internalValue;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference = SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference[_b] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference", version: "3.0.1" };
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct) {
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
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform;
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct) {
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
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform;
/**
 * @stability stable
 */
class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference = SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference[_c] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference", version: "3.0.1" };
function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct.customImage),
        default_resource_spec: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform = sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: false, required: true
        this._defaultResourceSpec = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l;
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
        if ((_k = this._defaultResourceSpec) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = (_l = this._defaultResourceSpec) === null || _l === void 0 ? void 0 : _l.internalValue;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference = SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference[_d] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference", version: "3.0.1" };
function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct) {
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
exports.sagemakerUserProfileUserSettingsSharingSettingsToTerraform = sagemakerUserProfileUserSettingsSharingSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerUserProfileUserSettingsSharingSettingsOutputReference = SagemakerUserProfileUserSettingsSharingSettingsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsSharingSettingsOutputReference[_e] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfileUserSettingsSharingSettingsOutputReference", version: "3.0.1" };
function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct) {
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
exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform = sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform;
/**
 * @stability stable
 */
class SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
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
exports.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference = SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference[_f] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference", version: "3.0.1" };
function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_resource_spec: sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
exports.sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform = sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // default_resource_spec - computed: false, optional: false, required: true
        this._defaultResourceSpec = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_k = this._defaultResourceSpec) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = (_l = this._defaultResourceSpec) === null || _l === void 0 ? void 0 : _l.internalValue;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
exports.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference = SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference[_g] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference", version: "3.0.1" };
function sagemakerUserProfileUserSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        execution_role: cdktf.stringToTerraform(struct.executionRole),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        jupyter_server_app_settings: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct.jupyterServerAppSettings),
        kernel_gateway_app_settings: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct.kernelGatewayAppSettings),
        sharing_settings: sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct.sharingSettings),
        tensor_board_app_settings: sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct.tensorBoardAppSettings),
    };
}
exports.sagemakerUserProfileUserSettingsToTerraform = sagemakerUserProfileUserSettingsToTerraform;
/**
 * @stability stable
 */
class SagemakerUserProfileUserSettingsOutputReference extends cdktf.ComplexObject {
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
        this._jupyterServerAppSettings = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings", true);
        // kernel_gateway_app_settings - computed: false, optional: true, required: false
        this._kernelGatewayAppSettings = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings", true);
        // sharing_settings - computed: false, optional: true, required: false
        this._sharingSettings = new SagemakerUserProfileUserSettingsSharingSettingsOutputReference(this, "sharing_settings", true);
        // tensor_board_app_settings - computed: false, optional: true, required: false
        this._tensorBoardAppSettings = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l, _m, _o, _p, _q, _r, _s;
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
        if ((_k = this._jupyterServerAppSettings) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.jupyterServerAppSettings = (_l = this._jupyterServerAppSettings) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        if ((_m = this._kernelGatewayAppSettings) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.kernelGatewayAppSettings = (_o = this._kernelGatewayAppSettings) === null || _o === void 0 ? void 0 : _o.internalValue;
        }
        if ((_p = this._sharingSettings) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.sharingSettings = (_q = this._sharingSettings) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        if ((_r = this._tensorBoardAppSettings) === null || _r === void 0 ? void 0 : _r.internalValue) {
            hasAnyValues = true;
            internalValueResult.tensorBoardAppSettings = (_s = this._tensorBoardAppSettings) === null || _s === void 0 ? void 0 : _s.internalValue;
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
exports.SagemakerUserProfileUserSettingsOutputReference = SagemakerUserProfileUserSettingsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SagemakerUserProfileUserSettingsOutputReference[_h] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfileUserSettingsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile}.
 *
 * @stability stable
 */
class SagemakerUserProfile extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_user_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // user_settings - computed: false, optional: true, required: false
        this._userSettings = new SagemakerUserProfileUserSettingsOutputReference(this, "user_settings", true);
        this._domainId = config.domainId;
        this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
        this._singleSignOnUserValue = config.singleSignOnUserValue;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._userProfileName = config.userProfileName;
        this._userSettings.internalValue = config.userSettings;
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
    get domainId() {
        return this.getStringAttribute('domain_id');
    }
    /**
     * @stability stable
     */
    set domainId(value) {
        this._domainId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainIdInput() {
        return this._domainId;
    }
    // home_efs_file_system_uid - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get homeEfsFileSystemUid() {
        return this.getStringAttribute('home_efs_file_system_uid');
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
    get singleSignOnUserIdentifier() {
        return this.getStringAttribute('single_sign_on_user_identifier');
    }
    /**
     * @stability stable
     */
    set singleSignOnUserIdentifier(value) {
        this._singleSignOnUserIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetSingleSignOnUserIdentifier() {
        this._singleSignOnUserIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get singleSignOnUserIdentifierInput() {
        return this._singleSignOnUserIdentifier;
    }
    /**
     * @stability stable
     */
    get singleSignOnUserValue() {
        return this.getStringAttribute('single_sign_on_user_value');
    }
    /**
     * @stability stable
     */
    set singleSignOnUserValue(value) {
        this._singleSignOnUserValue = value;
    }
    /**
     * @stability stable
     */
    resetSingleSignOnUserValue() {
        this._singleSignOnUserValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get singleSignOnUserValueInput() {
        return this._singleSignOnUserValue;
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
    get userProfileName() {
        return this.getStringAttribute('user_profile_name');
    }
    /**
     * @stability stable
     */
    set userProfileName(value) {
        this._userProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userProfileNameInput() {
        return this._userProfileName;
    }
    /**
     * @stability stable
     */
    get userSettings() {
        return this._userSettings;
    }
    /**
     * @stability stable
     */
    putUserSettings(value) {
        this._userSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetUserSettings() {
        this._userSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userSettingsInput() {
        return this._userSettings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            domain_id: cdktf.stringToTerraform(this._domainId),
            single_sign_on_user_identifier: cdktf.stringToTerraform(this._singleSignOnUserIdentifier),
            single_sign_on_user_value: cdktf.stringToTerraform(this._singleSignOnUserValue),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_profile_name: cdktf.stringToTerraform(this._userProfileName),
            user_settings: sagemakerUserProfileUserSettingsToTerraform(this._userSettings.internalValue),
        };
    }
}
exports.SagemakerUserProfile = SagemakerUserProfile;
_j = JSII_RTTI_SYMBOL_1;
SagemakerUserProfile[_j] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerUserProfile", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SagemakerUserProfile.tfResourceType = "aws_sagemaker_user_profile";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLXVzZXItcHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdlbWFrZXIvc2FnZW1ha2VyLXVzZXItcHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTBCL0IsU0FBZ0Isc0ZBQXNGLENBQUMsTUFBaUw7SUFDdFIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUN4RSxDQUFBO0FBQ0gsQ0FBQztBQVRELHdMQVNDOzs7O0FBRUQsTUFBYSwwRkFBMkYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlqSSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFB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O0lBQzFDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCw4QkFBOEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1lBQ3pGLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDL0UsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRSxhQUFhLEVBQUUsMkNBQTJDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7U0FDN0YsQ0FBQztJQUNKLENBQUM7O0FBN0tILG9EQThLQzs7O0FBNUtDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csbUNBQWMsR0FBVyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyVXNlclByb2ZpbGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkb21haW5JZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2luZ2xlU2lnbk9uVXNlclZhbHVlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlclByb2ZpbGVOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJTZXR0aW5ncz86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzO1xufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2FnZW1ha2VySW1hZ2VBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgc2FnZW1ha2VyX2ltYWdlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VUeXBlID0gdGhpcy5faW5zdGFuY2VUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhZ2VtYWtlckltYWdlQXJuID0gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWUuaW5zdGFuY2VUeXBlO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZS5zYWdlbWFrZXJJbWFnZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVR5cGUoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gc2FnZW1ha2VyX2ltYWdlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYWdlbWFrZXJJbWFnZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxpZmVjeWNsZUNvbmZpZ0FybnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFJlc291cmNlU3BlYzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGlmZWN5Y2xlX2NvbmZpZ19hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxpZmVjeWNsZUNvbmZpZ0FybnMpLFxuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0UmVzb3VyY2VTcGVjKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZUNvbmZpZ0FybnMgPSB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdFJlc291cmNlU3BlYyA9IHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZS5saWZlY3ljbGVDb25maWdBcm5zO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVmYXVsdFJlc291cmNlU3BlYztcbiAgICB9XG4gIH1cblxuICAvLyBsaWZlY3ljbGVfY29uZmlnX2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlQ29uZmlnQXJucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2xpZmVjeWNsZV9jb25maWdfYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGlmZWN5Y2xlQ29uZmlnQXJucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGlmZWN5Y2xlQ29uZmlnQXJucygpIHtcbiAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVDb25maWdBcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnM7XG4gIH1cblxuICAvLyBkZWZhdWx0X3Jlc291cmNlX3NwZWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmYXVsdFJlc291cmNlU3BlYyA9IG5ldyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZGVmYXVsdF9yZXNvdXJjZV9zcGVjXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRSZXNvdXJjZVNwZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM7XG4gIH1cbiAgcHVibGljIHB1dERlZmF1bHRSZXNvdXJjZVNwZWModmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYykge1xuICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBJbWFnZUNvbmZpZ05hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZVZlcnNpb25OdW1iZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0N1c3RvbUltYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFwcF9pbWFnZV9jb25maWdfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBJbWFnZUNvbmZpZ05hbWUpLFxuICAgIGltYWdlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VOYW1lKSxcbiAgICBpbWFnZV92ZXJzaW9uX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZVZlcnNpb25OdW1iZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNhZ2VtYWtlckltYWdlQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIHNhZ2VtYWtlcl9pbWFnZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FnZW1ha2VySW1hZ2VBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZVR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlVHlwZSA9IHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zYWdlbWFrZXJJbWFnZUFybiA9IHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlLmluc3RhbmNlVHlwZTtcbiAgICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdmFsdWUuc2FnZW1ha2VySW1hZ2VBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgfVxuXG4gIC8vIHNhZ2VtYWtlcl9pbWFnZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FnZW1ha2VySW1hZ2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNhZ2VtYWtlckltYWdlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2FnZW1ha2VyX2ltYWdlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2FnZW1ha2VySW1hZ2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FnZW1ha2VySW1hZ2VBcm4oKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhZ2VtYWtlckltYWdlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhZ2VtYWtlckltYWdlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaWZlY3ljbGVDb25maWdBcm5zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUltYWdlPzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0UmVzb3VyY2VTcGVjOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsaWZlY3ljbGVfY29uZmlnX2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubGlmZWN5Y2xlQ29uZmlnQXJucyksXG4gICAgY3VzdG9tX2ltYWdlOiBjZGt0Zi5saXN0TWFwcGVyKHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VUb1RlcnJhZm9ybSkoc3RydWN0IS5jdXN0b21JbWFnZSksXG4gICAgZGVmYXVsdF9yZXNvdXJjZV9zcGVjOiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXNvdXJjZVNwZWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGlmZWN5Y2xlQ29uZmlnQXJucyA9IHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXN0b21JbWFnZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3VzdG9tSW1hZ2UgPSB0aGlzLl9jdXN0b21JbWFnZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmF1bHRSZXNvdXJjZVNwZWMgPSB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3VzdG9tSW1hZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZUNvbmZpZ0FybnMgPSB2YWx1ZS5saWZlY3ljbGVDb25maWdBcm5zO1xuICAgICAgdGhpcy5fY3VzdG9tSW1hZ2UgPSB2YWx1ZS5jdXN0b21JbWFnZTtcbiAgICAgIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmRlZmF1bHRSZXNvdXJjZVNwZWM7XG4gICAgfVxuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX2NvbmZpZ19hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xpZmVjeWNsZUNvbmZpZ0FybnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbGlmZWN5Y2xlQ29uZmlnQXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsaWZlY3ljbGVfY29uZmlnX2FybnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxpZmVjeWNsZUNvbmZpZ0FybnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExpZmVjeWNsZUNvbmZpZ0FybnMoKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlQ29uZmlnQXJucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGlmZWN5Y2xlQ29uZmlnQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saWZlY3ljbGVDb25maWdBcm5zO1xuICB9XG5cbiAgLy8gY3VzdG9tX2ltYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbUltYWdlPzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NDdXN0b21JbWFnZVtdOyBcbiAgcHVibGljIGdldCBjdXN0b21JbWFnZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3VzdG9tX2ltYWdlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tSW1hZ2UodmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzQ3VzdG9tSW1hZ2VbXSkge1xuICAgIHRoaXMuX2N1c3RvbUltYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tSW1hZ2UoKSB7XG4gICAgdGhpcy5fY3VzdG9tSW1hZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUltYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUltYWdlO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9yZXNvdXJjZV9zcGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RlZmF1bHRSZXNvdXJjZVNwZWMgPSBuZXcgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NLZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImRlZmF1bHRfcmVzb3VyY2Vfc3BlY1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkZWZhdWx0UmVzb3VyY2VTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICB9XG4gIHB1YmxpYyBwdXREZWZhdWx0UmVzb3VyY2VTcGVjKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlc291cmNlU3BlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90ZWJvb2tPdXRwdXRPcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0ttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM091dHB1dFBhdGg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NTaGFyaW5nU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBub3RlYm9va19vdXRwdXRfb3B0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vdGVib29rT3V0cHV0T3B0aW9uKSxcbiAgICBzM19rbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzS21zS2V5SWQpLFxuICAgIHMzX291dHB1dF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzT3V0cHV0UGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90ZWJvb2tPdXRwdXRPcHRpb24gPSB0aGlzLl9ub3RlYm9va091dHB1dE9wdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3MzS21zS2V5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzS21zS2V5SWQgPSB0aGlzLl9zM0ttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNPdXRwdXRQYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM091dHB1dFBhdGggPSB0aGlzLl9zM091dHB1dFBhdGg7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczNLbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbm90ZWJvb2tPdXRwdXRPcHRpb24gPSB2YWx1ZS5ub3RlYm9va091dHB1dE9wdGlvbjtcbiAgICAgIHRoaXMuX3MzS21zS2V5SWQgPSB2YWx1ZS5zM0ttc0tleUlkO1xuICAgICAgdGhpcy5fczNPdXRwdXRQYXRoID0gdmFsdWUuczNPdXRwdXRQYXRoO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5vdGVib29rX291dHB1dF9vcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm90ZWJvb2tPdXRwdXRPcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5vdGVib29rT3V0cHV0T3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm90ZWJvb2tfb3V0cHV0X29wdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbm90ZWJvb2tPdXRwdXRPcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90ZWJvb2tPdXRwdXRPcHRpb24oKSB7XG4gICAgdGhpcy5fbm90ZWJvb2tPdXRwdXRPcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGVib29rT3V0cHV0T3B0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGVib29rT3V0cHV0T3B0aW9uO1xuICB9XG5cbiAgLy8gczNfa21zX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM0ttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfa21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgczNLbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNLbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzS21zS2V5SWQoKSB7XG4gICAgdGhpcy5fczNLbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNLbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0ttc0tleUlkO1xuICB9XG5cbiAgLy8gczNfb3V0cHV0X3BhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNPdXRwdXRQYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM091dHB1dFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19vdXRwdXRfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgczNPdXRwdXRQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zM091dHB1dFBhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM091dHB1dFBhdGgoKSB7XG4gICAgdGhpcy5fczNPdXRwdXRQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM091dHB1dFBhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNPdXRwdXRQYXRoO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2FnZW1ha2VySW1hZ2VBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NEZWZhdWx0UmVzb3VyY2VTcGVjVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgc2FnZW1ha2VyX2ltYWdlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWdlbWFrZXJJbWFnZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZVR5cGUgPSB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zYWdlbWFrZXJJbWFnZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2FnZW1ha2VySW1hZ2VBcm4gPSB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWUuaW5zdGFuY2VUeXBlO1xuICAgICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZS5zYWdlbWFrZXJJbWFnZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVR5cGUoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gc2FnZW1ha2VyX2ltYWdlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYWdlbWFrZXJJbWFnZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYWdlbWFrZXJfaW1hZ2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYWdlbWFrZXJJbWFnZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYWdlbWFrZXJJbWFnZUFybigpIHtcbiAgICB0aGlzLl9zYWdlbWFrZXJJbWFnZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2FnZW1ha2VySW1hZ2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FnZW1ha2VySW1hZ2VBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFJlc291cmNlU3BlYzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYzogc2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzRGVmYXVsdFJlc291cmNlU3BlY1RvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFJlc291cmNlU3BlYyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmF1bHRSZXNvdXJjZVNwZWMgPSB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NUZW5zb3JCb2FyZEFwcFNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVmYXVsdFJlc291cmNlU3BlYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kZWZhdWx0UmVzb3VyY2VTcGVjO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVzb3VyY2Vfc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZWZhdWx0UmVzb3VyY2VTcGVjID0gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZGVmYXVsdF9yZXNvdXJjZV9zcGVjXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRSZXNvdXJjZVNwZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNvdXJjZVNwZWM7XG4gIH1cbiAgcHVibGljIHB1dERlZmF1bHRSZXNvdXJjZVNwZWModmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc0RlZmF1bHRSZXNvdXJjZVNwZWMpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlc291cmNlU3BlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmVzb3VyY2VTcGVjLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGVjdXRpb25Sb2xlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkganVweXRlclNlcnZlckFwcFNldHRpbmdzPzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NKdXB5dGVyU2VydmVyQXBwU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncz86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzaGFyaW5nU2V0dGluZ3M/OiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGVuc29yQm9hcmRBcHBTZXR0aW5ncz86IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5ncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4ZWN1dGlvbl9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4ZWN1dGlvblJvbGUpLFxuICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwcyksXG4gICAganVweXRlcl9zZXJ2ZXJfYXBwX3NldHRpbmdzOiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEuanVweXRlclNlcnZlckFwcFNldHRpbmdzKSxcbiAgICBrZXJuZWxfZ2F0ZXdheV9hcHBfc2V0dGluZ3M6IHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS5rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MpLFxuICAgIHNoYXJpbmdfc2V0dGluZ3M6IHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS5zaGFyaW5nU2V0dGluZ3MpLFxuICAgIHRlbnNvcl9ib2FyZF9hcHBfc2V0dGluZ3M6IHNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzVGVuc29yQm9hcmRBcHBTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEudGVuc29yQm9hcmRBcHBTZXR0aW5ncyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9leGVjdXRpb25Sb2xlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leGVjdXRpb25Sb2xlID0gdGhpcy5fZXhlY3V0aW9uUm9sZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlY3VyaXR5R3JvdXBzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eUdyb3VwcyA9IHRoaXMuX3NlY3VyaXR5R3JvdXBzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MgPSB0aGlzLl9qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3M/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncyA9IHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NoYXJpbmdTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2hhcmluZ1NldHRpbmdzID0gdGhpcy5fc2hhcmluZ1NldHRpbmdzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGVuc29yQm9hcmRBcHBTZXR0aW5ncyA9IHRoaXMuX3RlbnNvckJvYXJkQXBwU2V0dGluZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2V4ZWN1dGlvblJvbGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zaGFyaW5nU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RlbnNvckJvYXJkQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXhlY3V0aW9uUm9sZSA9IHZhbHVlLmV4ZWN1dGlvblJvbGU7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IHZhbHVlLnNlY3VyaXR5R3JvdXBzO1xuICAgICAgdGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5qdXB5dGVyU2VydmVyQXBwU2V0dGluZ3M7XG4gICAgICB0aGlzLl9rZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmtlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncztcbiAgICAgIHRoaXMuX3NoYXJpbmdTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2hhcmluZ1NldHRpbmdzO1xuICAgICAgdGhpcy5fdGVuc29yQm9hcmRBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGVuc29yQm9hcmRBcHBTZXR0aW5ncztcbiAgICB9XG4gIH1cblxuICAvLyBleGVjdXRpb25fcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9leGVjdXRpb25Sb2xlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBleGVjdXRpb25Sb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhlY3V0aW9uX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4ZWN1dGlvblJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Sb2xlO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eUdyb3VwcygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cHM7XG4gIH1cblxuICAvLyBqdXB5dGVyX3NlcnZlcl9hcHBfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfanVweXRlclNlcnZlckFwcFNldHRpbmdzID0gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzSnVweXRlclNlcnZlckFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImp1cHl0ZXJfc2VydmVyX2FwcF9zZXR0aW5nc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBqdXB5dGVyU2VydmVyQXBwU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0SnVweXRlclNlcnZlckFwcFNldHRpbmdzKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncykge1xuICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnVweXRlclNlcnZlckFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX2p1cHl0ZXJTZXJ2ZXJBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqdXB5dGVyU2VydmVyQXBwU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanVweXRlclNlcnZlckFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBrZXJuZWxfZ2F0ZXdheV9hcHBfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzID0gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzS2VybmVsR2F0ZXdheUFwcFNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImtlcm5lbF9nYXRld2F5X2FwcF9zZXR0aW5nc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBrZXJuZWxHYXRld2F5QXBwU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0S2VybmVsR2F0ZXdheUFwcFNldHRpbmdzKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc0tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncykge1xuICAgIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2VybmVsR2F0ZXdheUFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX2tlcm5lbEdhdGV3YXlBcHBTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXJuZWxHYXRld2F5QXBwU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2VybmVsR2F0ZXdheUFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzaGFyaW5nX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NoYXJpbmdTZXR0aW5ncyA9IG5ldyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1NoYXJpbmdTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzaGFyaW5nX3NldHRpbmdzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNoYXJpbmdTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhcmluZ1NldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRTaGFyaW5nU2V0dGluZ3ModmFsdWU6IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzU2hhcmluZ1NldHRpbmdzKSB7XG4gICAgdGhpcy5fc2hhcmluZ1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTaGFyaW5nU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fc2hhcmluZ1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNoYXJpbmdTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaGFyaW5nU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRlbnNvcl9ib2FyZF9hcHBfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVuc29yQm9hcmRBcHBTZXR0aW5ncyA9IG5ldyBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGVuc29yX2JvYXJkX2FwcF9zZXR0aW5nc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0ZW5zb3JCb2FyZEFwcFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRUZW5zb3JCb2FyZEFwcFNldHRpbmdzKHZhbHVlOiBTYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RlbnNvckJvYXJkQXBwU2V0dGluZ3MpIHtcbiAgICB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW5zb3JCb2FyZEFwcFNldHRpbmdzKCkge1xuICAgIHRoaXMuX3RlbnNvckJvYXJkQXBwU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVuc29yQm9hcmRBcHBTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW5zb3JCb2FyZEFwcFNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlclVzZXJQcm9maWxlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3NhZ2VtYWtlcl91c2VyX3Byb2ZpbGVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU2FnZW1ha2VyVXNlclByb2ZpbGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zYWdlbWFrZXJfdXNlcl9wcm9maWxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2RvbWFpbklkID0gY29uZmlnLmRvbWFpbklkO1xuICAgIHRoaXMuX3NpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyID0gY29uZmlnLnNpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyO1xuICAgIHRoaXMuX3NpbmdsZVNpZ25PblVzZXJWYWx1ZSA9IGNvbmZpZy5zaW5nbGVTaWduT25Vc2VyVmFsdWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl91c2VyUHJvZmlsZU5hbWUgPSBjb25maWcudXNlclByb2ZpbGVOYW1lO1xuICAgIHRoaXMuX3VzZXJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnVzZXJTZXR0aW5ncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBkb21haW5faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZG9tYWluSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvbWFpbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW5JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9tYWluSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluSWQ7XG4gIH1cblxuICAvLyBob21lX2Vmc19maWxlX3N5c3RlbV91aWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob21lRWZzRmlsZVN5c3RlbVVpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvbWVfZWZzX2ZpbGVfc3lzdGVtX3VpZCcpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHNpbmdsZV9zaWduX29uX3VzZXJfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2luZ2xlU2lnbk9uVXNlcklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaW5nbGVfc2lnbl9vbl91c2VyX2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyKCkge1xuICAgIHRoaXMuX3NpbmdsZVNpZ25PblVzZXJJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaW5nbGVTaWduT25Vc2VySWRlbnRpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaW5nbGVTaWduT25Vc2VySWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIHNpbmdsZV9zaWduX29uX3VzZXJfdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2luZ2xlU2lnbk9uVXNlclZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzaW5nbGVTaWduT25Vc2VyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaW5nbGVfc2lnbl9vbl91c2VyX3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzaW5nbGVTaWduT25Vc2VyVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpbmdsZVNpZ25PblVzZXJWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpbmdsZVNpZ25PblVzZXJWYWx1ZSgpIHtcbiAgICB0aGlzLl9zaW5nbGVTaWduT25Vc2VyVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpbmdsZVNpZ25PblVzZXJWYWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaW5nbGVTaWduT25Vc2VyVmFsdWU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdXNlcl9wcm9maWxlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdXNlclByb2ZpbGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyUHJvZmlsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX3Byb2ZpbGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlclByb2ZpbGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyUHJvZmlsZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlclByb2ZpbGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQcm9maWxlTmFtZTtcbiAgfVxuXG4gIC8vIHVzZXJfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlclNldHRpbmdzID0gbmV3IFNhZ2VtYWtlclVzZXJQcm9maWxlVXNlclNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInVzZXJfc2V0dGluZ3NcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdXNlclNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dFVzZXJTZXR0aW5ncyh2YWx1ZTogU2FnZW1ha2VyVXNlclByb2ZpbGVVc2VyU2V0dGluZ3MpIHtcbiAgICB0aGlzLl91c2VyU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJTZXR0aW5ncygpIHtcbiAgICB0aGlzLl91c2VyU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlclNldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW5faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RvbWFpbklkKSxcbiAgICAgIHNpbmdsZV9zaWduX29uX3VzZXJfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2luZ2xlU2lnbk9uVXNlcklkZW50aWZpZXIpLFxuICAgICAgc2luZ2xlX3NpZ25fb25fdXNlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2luZ2xlU2lnbk9uVXNlclZhbHVlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdXNlcl9wcm9maWxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VzZXJQcm9maWxlTmFtZSksXG4gICAgICB1c2VyX3NldHRpbmdzOiBzYWdlbWFrZXJVc2VyUHJvZmlsZVVzZXJTZXR0aW5nc1RvVGVycmFmb3JtKHRoaXMuX3VzZXJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=