"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodebuildProject = exports.CodebuildProjectVpcConfigOutputReference = exports.codebuildProjectVpcConfigToTerraform = exports.CodebuildProjectSourceOutputReference = exports.codebuildProjectSourceToTerraform = exports.CodebuildProjectSourceGitSubmodulesConfigOutputReference = exports.codebuildProjectSourceGitSubmodulesConfigToTerraform = exports.CodebuildProjectSourceBuildStatusConfigOutputReference = exports.codebuildProjectSourceBuildStatusConfigToTerraform = exports.CodebuildProjectSourceAuthOutputReference = exports.codebuildProjectSourceAuthToTerraform = exports.codebuildProjectSecondarySourcesToTerraform = exports.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference = exports.codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform = exports.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference = exports.codebuildProjectSecondarySourcesBuildStatusConfigToTerraform = exports.CodebuildProjectSecondarySourcesAuthOutputReference = exports.codebuildProjectSecondarySourcesAuthToTerraform = exports.codebuildProjectSecondaryArtifactsToTerraform = exports.CodebuildProjectLogsConfigOutputReference = exports.codebuildProjectLogsConfigToTerraform = exports.CodebuildProjectLogsConfigS3LogsOutputReference = exports.codebuildProjectLogsConfigS3LogsToTerraform = exports.CodebuildProjectLogsConfigCloudwatchLogsOutputReference = exports.codebuildProjectLogsConfigCloudwatchLogsToTerraform = exports.codebuildProjectFileSystemLocationsToTerraform = exports.CodebuildProjectEnvironmentOutputReference = exports.codebuildProjectEnvironmentToTerraform = exports.CodebuildProjectEnvironmentRegistryCredentialOutputReference = exports.codebuildProjectEnvironmentRegistryCredentialToTerraform = exports.codebuildProjectEnvironmentEnvironmentVariableToTerraform = exports.CodebuildProjectCacheOutputReference = exports.codebuildProjectCacheToTerraform = exports.CodebuildProjectBuildBatchConfigOutputReference = exports.codebuildProjectBuildBatchConfigToTerraform = exports.CodebuildProjectBuildBatchConfigRestrictionsOutputReference = exports.codebuildProjectBuildBatchConfigRestrictionsToTerraform = exports.CodebuildProjectArtifactsOutputReference = exports.codebuildProjectArtifactsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function codebuildProjectArtifactsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        artifact_identifier: cdktf.stringToTerraform(struct.artifactIdentifier),
        encryption_disabled: cdktf.booleanToTerraform(struct.encryptionDisabled),
        location: cdktf.stringToTerraform(struct.location),
        name: cdktf.stringToTerraform(struct.name),
        namespace_type: cdktf.stringToTerraform(struct.namespaceType),
        override_artifact_name: cdktf.booleanToTerraform(struct.overrideArtifactName),
        packaging: cdktf.stringToTerraform(struct.packaging),
        path: cdktf.stringToTerraform(struct.path),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.codebuildProjectArtifactsToTerraform = codebuildProjectArtifactsToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectArtifactsOutputReference extends cdktf.ComplexObject {
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
        if (this._artifactIdentifier) {
            hasAnyValues = true;
            internalValueResult.artifactIdentifier = this._artifactIdentifier;
        }
        if (this._encryptionDisabled) {
            hasAnyValues = true;
            internalValueResult.encryptionDisabled = this._encryptionDisabled;
        }
        if (this._location) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespaceType) {
            hasAnyValues = true;
            internalValueResult.namespaceType = this._namespaceType;
        }
        if (this._overrideArtifactName) {
            hasAnyValues = true;
            internalValueResult.overrideArtifactName = this._overrideArtifactName;
        }
        if (this._packaging) {
            hasAnyValues = true;
            internalValueResult.packaging = this._packaging;
        }
        if (this._path) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._artifactIdentifier = undefined;
            this._encryptionDisabled = undefined;
            this._location = undefined;
            this._name = undefined;
            this._namespaceType = undefined;
            this._overrideArtifactName = undefined;
            this._packaging = undefined;
            this._path = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._artifactIdentifier = value.artifactIdentifier;
            this._encryptionDisabled = value.encryptionDisabled;
            this._location = value.location;
            this._name = value.name;
            this._namespaceType = value.namespaceType;
            this._overrideArtifactName = value.overrideArtifactName;
            this._packaging = value.packaging;
            this._path = value.path;
            this._type = value.type;
        }
    }
    /**
     * @stability stable
     */
    get artifactIdentifier() {
        return this.getStringAttribute('artifact_identifier');
    }
    /**
     * @stability stable
     */
    set artifactIdentifier(value) {
        this._artifactIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetArtifactIdentifier() {
        this._artifactIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get artifactIdentifierInput() {
        return this._artifactIdentifier;
    }
    /**
     * @stability stable
     */
    get encryptionDisabled() {
        return this.getBooleanAttribute('encryption_disabled');
    }
    /**
     * @stability stable
     */
    set encryptionDisabled(value) {
        this._encryptionDisabled = value;
    }
    /**
     * @stability stable
     */
    resetEncryptionDisabled() {
        this._encryptionDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionDisabledInput() {
        return this._encryptionDisabled;
    }
    /**
     * @stability stable
     */
    get location() {
        return this.getStringAttribute('location');
    }
    /**
     * @stability stable
     */
    set location(value) {
        this._location = value;
    }
    /**
     * @stability stable
     */
    resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get locationInput() {
        return this._location;
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
    get namespaceType() {
        return this.getStringAttribute('namespace_type');
    }
    /**
     * @stability stable
     */
    set namespaceType(value) {
        this._namespaceType = value;
    }
    /**
     * @stability stable
     */
    resetNamespaceType() {
        this._namespaceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get namespaceTypeInput() {
        return this._namespaceType;
    }
    /**
     * @stability stable
     */
    get overrideArtifactName() {
        return this.getBooleanAttribute('override_artifact_name');
    }
    /**
     * @stability stable
     */
    set overrideArtifactName(value) {
        this._overrideArtifactName = value;
    }
    /**
     * @stability stable
     */
    resetOverrideArtifactName() {
        this._overrideArtifactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get overrideArtifactNameInput() {
        return this._overrideArtifactName;
    }
    /**
     * @stability stable
     */
    get packaging() {
        return this.getStringAttribute('packaging');
    }
    /**
     * @stability stable
     */
    set packaging(value) {
        this._packaging = value;
    }
    /**
     * @stability stable
     */
    resetPackaging() {
        this._packaging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get packagingInput() {
        return this._packaging;
    }
    /**
     * @stability stable
     */
    get path() {
        return this.getStringAttribute('path');
    }
    /**
     * @stability stable
     */
    set path(value) {
        this._path = value;
    }
    /**
     * @stability stable
     */
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pathInput() {
        return this._path;
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
}
exports.CodebuildProjectArtifactsOutputReference = CodebuildProjectArtifactsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CodebuildProjectArtifactsOutputReference[_a] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectArtifactsOutputReference", version: "3.0.1" };
function codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compute_types_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct.computeTypesAllowed),
        maximum_builds_allowed: cdktf.numberToTerraform(struct.maximumBuildsAllowed),
    };
}
exports.codebuildProjectBuildBatchConfigRestrictionsToTerraform = codebuildProjectBuildBatchConfigRestrictionsToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectBuildBatchConfigRestrictionsOutputReference extends cdktf.ComplexObject {
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
        if (this._computeTypesAllowed) {
            hasAnyValues = true;
            internalValueResult.computeTypesAllowed = this._computeTypesAllowed;
        }
        if (this._maximumBuildsAllowed) {
            hasAnyValues = true;
            internalValueResult.maximumBuildsAllowed = this._maximumBuildsAllowed;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._computeTypesAllowed = undefined;
            this._maximumBuildsAllowed = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._computeTypesAllowed = value.computeTypesAllowed;
            this._maximumBuildsAllowed = value.maximumBuildsAllowed;
        }
    }
    /**
     * @stability stable
     */
    get computeTypesAllowed() {
        return this.getListAttribute('compute_types_allowed');
    }
    /**
     * @stability stable
     */
    set computeTypesAllowed(value) {
        this._computeTypesAllowed = value;
    }
    /**
     * @stability stable
     */
    resetComputeTypesAllowed() {
        this._computeTypesAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get computeTypesAllowedInput() {
        return this._computeTypesAllowed;
    }
    /**
     * @stability stable
     */
    get maximumBuildsAllowed() {
        return this.getNumberAttribute('maximum_builds_allowed');
    }
    /**
     * @stability stable
     */
    set maximumBuildsAllowed(value) {
        this._maximumBuildsAllowed = value;
    }
    /**
     * @stability stable
     */
    resetMaximumBuildsAllowed() {
        this._maximumBuildsAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumBuildsAllowedInput() {
        return this._maximumBuildsAllowed;
    }
}
exports.CodebuildProjectBuildBatchConfigRestrictionsOutputReference = CodebuildProjectBuildBatchConfigRestrictionsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CodebuildProjectBuildBatchConfigRestrictionsOutputReference[_b] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectBuildBatchConfigRestrictionsOutputReference", version: "3.0.1" };
function codebuildProjectBuildBatchConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        combine_artifacts: cdktf.booleanToTerraform(struct.combineArtifacts),
        service_role: cdktf.stringToTerraform(struct.serviceRole),
        timeout_in_mins: cdktf.numberToTerraform(struct.timeoutInMins),
        restrictions: codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct.restrictions),
    };
}
exports.codebuildProjectBuildBatchConfigToTerraform = codebuildProjectBuildBatchConfigToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectBuildBatchConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // restrictions - computed: false, optional: true, required: false
        this._restrictions = new CodebuildProjectBuildBatchConfigRestrictionsOutputReference(this, "restrictions", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _u, _v;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._combineArtifacts) {
            hasAnyValues = true;
            internalValueResult.combineArtifacts = this._combineArtifacts;
        }
        if (this._serviceRole) {
            hasAnyValues = true;
            internalValueResult.serviceRole = this._serviceRole;
        }
        if (this._timeoutInMins) {
            hasAnyValues = true;
            internalValueResult.timeoutInMins = this._timeoutInMins;
        }
        if ((_u = this._restrictions) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.restrictions = (_v = this._restrictions) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._combineArtifacts = undefined;
            this._serviceRole = undefined;
            this._timeoutInMins = undefined;
            this._restrictions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._combineArtifacts = value.combineArtifacts;
            this._serviceRole = value.serviceRole;
            this._timeoutInMins = value.timeoutInMins;
            this._restrictions.internalValue = value.restrictions;
        }
    }
    /**
     * @stability stable
     */
    get combineArtifacts() {
        return this.getBooleanAttribute('combine_artifacts');
    }
    /**
     * @stability stable
     */
    set combineArtifacts(value) {
        this._combineArtifacts = value;
    }
    /**
     * @stability stable
     */
    resetCombineArtifacts() {
        this._combineArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get combineArtifactsInput() {
        return this._combineArtifacts;
    }
    /**
     * @stability stable
     */
    get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    /**
     * @stability stable
     */
    set serviceRole(value) {
        this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceRoleInput() {
        return this._serviceRole;
    }
    /**
     * @stability stable
     */
    get timeoutInMins() {
        return this.getNumberAttribute('timeout_in_mins');
    }
    /**
     * @stability stable
     */
    set timeoutInMins(value) {
        this._timeoutInMins = value;
    }
    /**
     * @stability stable
     */
    resetTimeoutInMins() {
        this._timeoutInMins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInMinsInput() {
        return this._timeoutInMins;
    }
    /**
     * @stability stable
     */
    get restrictions() {
        return this._restrictions;
    }
    /**
     * @stability stable
     */
    putRestrictions(value) {
        this._restrictions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRestrictions() {
        this._restrictions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restrictionsInput() {
        return this._restrictions.internalValue;
    }
}
exports.CodebuildProjectBuildBatchConfigOutputReference = CodebuildProjectBuildBatchConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CodebuildProjectBuildBatchConfigOutputReference[_c] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectBuildBatchConfigOutputReference", version: "3.0.1" };
function codebuildProjectCacheToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        location: cdktf.stringToTerraform(struct.location),
        modes: cdktf.listMapper(cdktf.stringToTerraform)(struct.modes),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.codebuildProjectCacheToTerraform = codebuildProjectCacheToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectCacheOutputReference extends cdktf.ComplexObject {
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
        if (this._location) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._modes) {
            hasAnyValues = true;
            internalValueResult.modes = this._modes;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._location = undefined;
            this._modes = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._location = value.location;
            this._modes = value.modes;
            this._type = value.type;
        }
    }
    /**
     * @stability stable
     */
    get location() {
        return this.getStringAttribute('location');
    }
    /**
     * @stability stable
     */
    set location(value) {
        this._location = value;
    }
    /**
     * @stability stable
     */
    resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get locationInput() {
        return this._location;
    }
    /**
     * @stability stable
     */
    get modes() {
        return this.getListAttribute('modes');
    }
    /**
     * @stability stable
     */
    set modes(value) {
        this._modes = value;
    }
    /**
     * @stability stable
     */
    resetModes() {
        this._modes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get modesInput() {
        return this._modes;
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
    /**
     * @stability stable
     */
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeInput() {
        return this._type;
    }
}
exports.CodebuildProjectCacheOutputReference = CodebuildProjectCacheOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CodebuildProjectCacheOutputReference[_d] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectCacheOutputReference", version: "3.0.1" };
function codebuildProjectEnvironmentEnvironmentVariableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.codebuildProjectEnvironmentEnvironmentVariableToTerraform = codebuildProjectEnvironmentEnvironmentVariableToTerraform;
function codebuildProjectEnvironmentRegistryCredentialToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        credential: cdktf.stringToTerraform(struct.credential),
        credential_provider: cdktf.stringToTerraform(struct.credentialProvider),
    };
}
exports.codebuildProjectEnvironmentRegistryCredentialToTerraform = codebuildProjectEnvironmentRegistryCredentialToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectEnvironmentRegistryCredentialOutputReference extends cdktf.ComplexObject {
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
        if (this._credential) {
            hasAnyValues = true;
            internalValueResult.credential = this._credential;
        }
        if (this._credentialProvider) {
            hasAnyValues = true;
            internalValueResult.credentialProvider = this._credentialProvider;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._credential = undefined;
            this._credentialProvider = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._credential = value.credential;
            this._credentialProvider = value.credentialProvider;
        }
    }
    /**
     * @stability stable
     */
    get credential() {
        return this.getStringAttribute('credential');
    }
    /**
     * @stability stable
     */
    set credential(value) {
        this._credential = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get credentialInput() {
        return this._credential;
    }
    /**
     * @stability stable
     */
    get credentialProvider() {
        return this.getStringAttribute('credential_provider');
    }
    /**
     * @stability stable
     */
    set credentialProvider(value) {
        this._credentialProvider = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get credentialProviderInput() {
        return this._credentialProvider;
    }
}
exports.CodebuildProjectEnvironmentRegistryCredentialOutputReference = CodebuildProjectEnvironmentRegistryCredentialOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CodebuildProjectEnvironmentRegistryCredentialOutputReference[_e] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectEnvironmentRegistryCredentialOutputReference", version: "3.0.1" };
function codebuildProjectEnvironmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate: cdktf.stringToTerraform(struct.certificate),
        compute_type: cdktf.stringToTerraform(struct.computeType),
        image: cdktf.stringToTerraform(struct.image),
        image_pull_credentials_type: cdktf.stringToTerraform(struct.imagePullCredentialsType),
        privileged_mode: cdktf.booleanToTerraform(struct.privilegedMode),
        type: cdktf.stringToTerraform(struct.type),
        environment_variable: cdktf.listMapper(codebuildProjectEnvironmentEnvironmentVariableToTerraform)(struct.environmentVariable),
        registry_credential: codebuildProjectEnvironmentRegistryCredentialToTerraform(struct.registryCredential),
    };
}
exports.codebuildProjectEnvironmentToTerraform = codebuildProjectEnvironmentToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectEnvironmentOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // registry_credential - computed: false, optional: true, required: false
        this._registryCredential = new CodebuildProjectEnvironmentRegistryCredentialOutputReference(this, "registry_credential", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _u, _v;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._certificate) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate;
        }
        if (this._computeType) {
            hasAnyValues = true;
            internalValueResult.computeType = this._computeType;
        }
        if (this._image) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._imagePullCredentialsType) {
            hasAnyValues = true;
            internalValueResult.imagePullCredentialsType = this._imagePullCredentialsType;
        }
        if (this._privilegedMode) {
            hasAnyValues = true;
            internalValueResult.privilegedMode = this._privilegedMode;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._environmentVariable) {
            hasAnyValues = true;
            internalValueResult.environmentVariable = this._environmentVariable;
        }
        if ((_u = this._registryCredential) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.registryCredential = (_v = this._registryCredential) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificate = undefined;
            this._computeType = undefined;
            this._image = undefined;
            this._imagePullCredentialsType = undefined;
            this._privilegedMode = undefined;
            this._type = undefined;
            this._environmentVariable = undefined;
            this._registryCredential.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificate = value.certificate;
            this._computeType = value.computeType;
            this._image = value.image;
            this._imagePullCredentialsType = value.imagePullCredentialsType;
            this._privilegedMode = value.privilegedMode;
            this._type = value.type;
            this._environmentVariable = value.environmentVariable;
            this._registryCredential.internalValue = value.registryCredential;
        }
    }
    /**
     * @stability stable
     */
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    /**
     * @stability stable
     */
    set certificate(value) {
        this._certificate = value;
    }
    /**
     * @stability stable
     */
    resetCertificate() {
        this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateInput() {
        return this._certificate;
    }
    /**
     * @stability stable
     */
    get computeType() {
        return this.getStringAttribute('compute_type');
    }
    /**
     * @stability stable
     */
    set computeType(value) {
        this._computeType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get computeTypeInput() {
        return this._computeType;
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
    get imagePullCredentialsType() {
        return this.getStringAttribute('image_pull_credentials_type');
    }
    /**
     * @stability stable
     */
    set imagePullCredentialsType(value) {
        this._imagePullCredentialsType = value;
    }
    /**
     * @stability stable
     */
    resetImagePullCredentialsType() {
        this._imagePullCredentialsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imagePullCredentialsTypeInput() {
        return this._imagePullCredentialsType;
    }
    /**
     * @stability stable
     */
    get privilegedMode() {
        return this.getBooleanAttribute('privileged_mode');
    }
    /**
     * @stability stable
     */
    set privilegedMode(value) {
        this._privilegedMode = value;
    }
    /**
     * @stability stable
     */
    resetPrivilegedMode() {
        this._privilegedMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get privilegedModeInput() {
        return this._privilegedMode;
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
    get environmentVariable() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('environment_variable');
    }
    /**
     * @stability stable
     */
    set environmentVariable(value) {
        this._environmentVariable = value;
    }
    /**
     * @stability stable
     */
    resetEnvironmentVariable() {
        this._environmentVariable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get environmentVariableInput() {
        return this._environmentVariable;
    }
    /**
     * @stability stable
     */
    get registryCredential() {
        return this._registryCredential;
    }
    /**
     * @stability stable
     */
    putRegistryCredential(value) {
        this._registryCredential.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRegistryCredential() {
        this._registryCredential.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get registryCredentialInput() {
        return this._registryCredential.internalValue;
    }
}
exports.CodebuildProjectEnvironmentOutputReference = CodebuildProjectEnvironmentOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CodebuildProjectEnvironmentOutputReference[_f] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectEnvironmentOutputReference", version: "3.0.1" };
function codebuildProjectFileSystemLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identifier: cdktf.stringToTerraform(struct.identifier),
        location: cdktf.stringToTerraform(struct.location),
        mount_options: cdktf.stringToTerraform(struct.mountOptions),
        mount_point: cdktf.stringToTerraform(struct.mountPoint),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.codebuildProjectFileSystemLocationsToTerraform = codebuildProjectFileSystemLocationsToTerraform;
function codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        group_name: cdktf.stringToTerraform(struct.groupName),
        status: cdktf.stringToTerraform(struct.status),
        stream_name: cdktf.stringToTerraform(struct.streamName),
    };
}
exports.codebuildProjectLogsConfigCloudwatchLogsToTerraform = codebuildProjectLogsConfigCloudwatchLogsToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectLogsConfigCloudwatchLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._groupName) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._status) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._streamName) {
            hasAnyValues = true;
            internalValueResult.streamName = this._streamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._groupName = undefined;
            this._status = undefined;
            this._streamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._groupName = value.groupName;
            this._status = value.status;
            this._streamName = value.streamName;
        }
    }
    /**
     * @stability stable
     */
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    /**
     * @stability stable
     */
    set groupName(value) {
        this._groupName = value;
    }
    /**
     * @stability stable
     */
    resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get groupNameInput() {
        return this._groupName;
    }
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    /**
     * @stability stable
     */
    set status(value) {
        this._status = value;
    }
    /**
     * @stability stable
     */
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusInput() {
        return this._status;
    }
    /**
     * @stability stable
     */
    get streamName() {
        return this.getStringAttribute('stream_name');
    }
    /**
     * @stability stable
     */
    set streamName(value) {
        this._streamName = value;
    }
    /**
     * @stability stable
     */
    resetStreamName() {
        this._streamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get streamNameInput() {
        return this._streamName;
    }
}
exports.CodebuildProjectLogsConfigCloudwatchLogsOutputReference = CodebuildProjectLogsConfigCloudwatchLogsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CodebuildProjectLogsConfigCloudwatchLogsOutputReference[_g] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectLogsConfigCloudwatchLogsOutputReference", version: "3.0.1" };
function codebuildProjectLogsConfigS3LogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        encryption_disabled: cdktf.booleanToTerraform(struct.encryptionDisabled),
        location: cdktf.stringToTerraform(struct.location),
        status: cdktf.stringToTerraform(struct.status),
    };
}
exports.codebuildProjectLogsConfigS3LogsToTerraform = codebuildProjectLogsConfigS3LogsToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectLogsConfigS3LogsOutputReference extends cdktf.ComplexObject {
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
        if (this._encryptionDisabled) {
            hasAnyValues = true;
            internalValueResult.encryptionDisabled = this._encryptionDisabled;
        }
        if (this._location) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._status) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._encryptionDisabled = undefined;
            this._location = undefined;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._encryptionDisabled = value.encryptionDisabled;
            this._location = value.location;
            this._status = value.status;
        }
    }
    /**
     * @stability stable
     */
    get encryptionDisabled() {
        return this.getBooleanAttribute('encryption_disabled');
    }
    /**
     * @stability stable
     */
    set encryptionDisabled(value) {
        this._encryptionDisabled = value;
    }
    /**
     * @stability stable
     */
    resetEncryptionDisabled() {
        this._encryptionDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionDisabledInput() {
        return this._encryptionDisabled;
    }
    /**
     * @stability stable
     */
    get location() {
        return this.getStringAttribute('location');
    }
    /**
     * @stability stable
     */
    set location(value) {
        this._location = value;
    }
    /**
     * @stability stable
     */
    resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get locationInput() {
        return this._location;
    }
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    /**
     * @stability stable
     */
    set status(value) {
        this._status = value;
    }
    /**
     * @stability stable
     */
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusInput() {
        return this._status;
    }
}
exports.CodebuildProjectLogsConfigS3LogsOutputReference = CodebuildProjectLogsConfigS3LogsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CodebuildProjectLogsConfigS3LogsOutputReference[_h] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectLogsConfigS3LogsOutputReference", version: "3.0.1" };
function codebuildProjectLogsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_logs: codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct.cloudwatchLogs),
        s3_logs: codebuildProjectLogsConfigS3LogsToTerraform(struct.s3Logs),
    };
}
exports.codebuildProjectLogsConfigToTerraform = codebuildProjectLogsConfigToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectLogsConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logs - computed: false, optional: true, required: false
        this._cloudwatchLogs = new CodebuildProjectLogsConfigCloudwatchLogsOutputReference(this, "cloudwatch_logs", true);
        // s3_logs - computed: false, optional: true, required: false
        this._s3Logs = new CodebuildProjectLogsConfigS3LogsOutputReference(this, "s3_logs", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _u, _v, _w, _x;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_u = this._cloudwatchLogs) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = (_v = this._cloudwatchLogs) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        if ((_w = this._s3Logs) === null || _w === void 0 ? void 0 : _w.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3Logs = (_x = this._s3Logs) === null || _x === void 0 ? void 0 : _x.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchLogs.internalValue = undefined;
            this._s3Logs.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
            this._s3Logs.internalValue = value.s3Logs;
        }
    }
    /**
     * @stability stable
     */
    get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    /**
     * @stability stable
     */
    putCloudwatchLogs(value) {
        this._cloudwatchLogs.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLogs() {
        this._cloudwatchLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }
    /**
     * @stability stable
     */
    get s3Logs() {
        return this._s3Logs;
    }
    /**
     * @stability stable
     */
    putS3Logs(value) {
        this._s3Logs.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3Logs() {
        this._s3Logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3LogsInput() {
        return this._s3Logs.internalValue;
    }
}
exports.CodebuildProjectLogsConfigOutputReference = CodebuildProjectLogsConfigOutputReference;
_j = JSII_RTTI_SYMBOL_1;
CodebuildProjectLogsConfigOutputReference[_j] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectLogsConfigOutputReference", version: "3.0.1" };
function codebuildProjectSecondaryArtifactsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        artifact_identifier: cdktf.stringToTerraform(struct.artifactIdentifier),
        encryption_disabled: cdktf.booleanToTerraform(struct.encryptionDisabled),
        location: cdktf.stringToTerraform(struct.location),
        name: cdktf.stringToTerraform(struct.name),
        namespace_type: cdktf.stringToTerraform(struct.namespaceType),
        override_artifact_name: cdktf.booleanToTerraform(struct.overrideArtifactName),
        packaging: cdktf.stringToTerraform(struct.packaging),
        path: cdktf.stringToTerraform(struct.path),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.codebuildProjectSecondaryArtifactsToTerraform = codebuildProjectSecondaryArtifactsToTerraform;
function codebuildProjectSecondarySourcesAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource: cdktf.stringToTerraform(struct.resource),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.codebuildProjectSecondarySourcesAuthToTerraform = codebuildProjectSecondarySourcesAuthToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectSecondarySourcesAuthOutputReference extends cdktf.ComplexObject {
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
        if (this._resource) {
            hasAnyValues = true;
            internalValueResult.resource = this._resource;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resource = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resource = value.resource;
            this._type = value.type;
        }
    }
    /**
     * @stability stable
     */
    get resource() {
        return this.getStringAttribute('resource');
    }
    /**
     * @stability stable
     */
    set resource(value) {
        this._resource = value;
    }
    /**
     * @stability stable
     */
    resetResource() {
        this._resource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceInput() {
        return this._resource;
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
}
exports.CodebuildProjectSecondarySourcesAuthOutputReference = CodebuildProjectSecondarySourcesAuthOutputReference;
_k = JSII_RTTI_SYMBOL_1;
CodebuildProjectSecondarySourcesAuthOutputReference[_k] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectSecondarySourcesAuthOutputReference", version: "3.0.1" };
function codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        context: cdktf.stringToTerraform(struct.context),
        target_url: cdktf.stringToTerraform(struct.targetUrl),
    };
}
exports.codebuildProjectSecondarySourcesBuildStatusConfigToTerraform = codebuildProjectSecondarySourcesBuildStatusConfigToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._context) {
            hasAnyValues = true;
            internalValueResult.context = this._context;
        }
        if (this._targetUrl) {
            hasAnyValues = true;
            internalValueResult.targetUrl = this._targetUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._context = undefined;
            this._targetUrl = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._context = value.context;
            this._targetUrl = value.targetUrl;
        }
    }
    /**
     * @stability stable
     */
    get context() {
        return this.getStringAttribute('context');
    }
    /**
     * @stability stable
     */
    set context(value) {
        this._context = value;
    }
    /**
     * @stability stable
     */
    resetContext() {
        this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contextInput() {
        return this._context;
    }
    /**
     * @stability stable
     */
    get targetUrl() {
        return this.getStringAttribute('target_url');
    }
    /**
     * @stability stable
     */
    set targetUrl(value) {
        this._targetUrl = value;
    }
    /**
     * @stability stable
     */
    resetTargetUrl() {
        this._targetUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetUrlInput() {
        return this._targetUrl;
    }
}
exports.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference = CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference;
_l = JSII_RTTI_SYMBOL_1;
CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference[_l] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference", version: "3.0.1" };
function codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fetch_submodules: cdktf.booleanToTerraform(struct.fetchSubmodules),
    };
}
exports.codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform = codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fetchSubmodules) {
            hasAnyValues = true;
            internalValueResult.fetchSubmodules = this._fetchSubmodules;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fetchSubmodules = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fetchSubmodules = value.fetchSubmodules;
        }
    }
    /**
     * @stability stable
     */
    get fetchSubmodules() {
        return this.getBooleanAttribute('fetch_submodules');
    }
    /**
     * @stability stable
     */
    set fetchSubmodules(value) {
        this._fetchSubmodules = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fetchSubmodulesInput() {
        return this._fetchSubmodules;
    }
}
exports.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference = CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference;
_m = JSII_RTTI_SYMBOL_1;
CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference[_m] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference", version: "3.0.1" };
function codebuildProjectSecondarySourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        buildspec: cdktf.stringToTerraform(struct.buildspec),
        git_clone_depth: cdktf.numberToTerraform(struct.gitCloneDepth),
        insecure_ssl: cdktf.booleanToTerraform(struct.insecureSsl),
        location: cdktf.stringToTerraform(struct.location),
        report_build_status: cdktf.booleanToTerraform(struct.reportBuildStatus),
        source_identifier: cdktf.stringToTerraform(struct.sourceIdentifier),
        type: cdktf.stringToTerraform(struct.type),
        auth: codebuildProjectSecondarySourcesAuthToTerraform(struct.auth),
        build_status_config: codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct.buildStatusConfig),
        git_submodules_config: codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct.gitSubmodulesConfig),
    };
}
exports.codebuildProjectSecondarySourcesToTerraform = codebuildProjectSecondarySourcesToTerraform;
function codebuildProjectSourceAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource: cdktf.stringToTerraform(struct.resource),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.codebuildProjectSourceAuthToTerraform = codebuildProjectSourceAuthToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectSourceAuthOutputReference extends cdktf.ComplexObject {
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
        if (this._resource) {
            hasAnyValues = true;
            internalValueResult.resource = this._resource;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resource = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resource = value.resource;
            this._type = value.type;
        }
    }
    /**
     * @stability stable
     */
    get resource() {
        return this.getStringAttribute('resource');
    }
    /**
     * @stability stable
     */
    set resource(value) {
        this._resource = value;
    }
    /**
     * @stability stable
     */
    resetResource() {
        this._resource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceInput() {
        return this._resource;
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
}
exports.CodebuildProjectSourceAuthOutputReference = CodebuildProjectSourceAuthOutputReference;
_o = JSII_RTTI_SYMBOL_1;
CodebuildProjectSourceAuthOutputReference[_o] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectSourceAuthOutputReference", version: "3.0.1" };
function codebuildProjectSourceBuildStatusConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        context: cdktf.stringToTerraform(struct.context),
        target_url: cdktf.stringToTerraform(struct.targetUrl),
    };
}
exports.codebuildProjectSourceBuildStatusConfigToTerraform = codebuildProjectSourceBuildStatusConfigToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectSourceBuildStatusConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._context) {
            hasAnyValues = true;
            internalValueResult.context = this._context;
        }
        if (this._targetUrl) {
            hasAnyValues = true;
            internalValueResult.targetUrl = this._targetUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._context = undefined;
            this._targetUrl = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._context = value.context;
            this._targetUrl = value.targetUrl;
        }
    }
    /**
     * @stability stable
     */
    get context() {
        return this.getStringAttribute('context');
    }
    /**
     * @stability stable
     */
    set context(value) {
        this._context = value;
    }
    /**
     * @stability stable
     */
    resetContext() {
        this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contextInput() {
        return this._context;
    }
    /**
     * @stability stable
     */
    get targetUrl() {
        return this.getStringAttribute('target_url');
    }
    /**
     * @stability stable
     */
    set targetUrl(value) {
        this._targetUrl = value;
    }
    /**
     * @stability stable
     */
    resetTargetUrl() {
        this._targetUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetUrlInput() {
        return this._targetUrl;
    }
}
exports.CodebuildProjectSourceBuildStatusConfigOutputReference = CodebuildProjectSourceBuildStatusConfigOutputReference;
_p = JSII_RTTI_SYMBOL_1;
CodebuildProjectSourceBuildStatusConfigOutputReference[_p] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectSourceBuildStatusConfigOutputReference", version: "3.0.1" };
function codebuildProjectSourceGitSubmodulesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fetch_submodules: cdktf.booleanToTerraform(struct.fetchSubmodules),
    };
}
exports.codebuildProjectSourceGitSubmodulesConfigToTerraform = codebuildProjectSourceGitSubmodulesConfigToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectSourceGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fetchSubmodules) {
            hasAnyValues = true;
            internalValueResult.fetchSubmodules = this._fetchSubmodules;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fetchSubmodules = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fetchSubmodules = value.fetchSubmodules;
        }
    }
    /**
     * @stability stable
     */
    get fetchSubmodules() {
        return this.getBooleanAttribute('fetch_submodules');
    }
    /**
     * @stability stable
     */
    set fetchSubmodules(value) {
        this._fetchSubmodules = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fetchSubmodulesInput() {
        return this._fetchSubmodules;
    }
}
exports.CodebuildProjectSourceGitSubmodulesConfigOutputReference = CodebuildProjectSourceGitSubmodulesConfigOutputReference;
_q = JSII_RTTI_SYMBOL_1;
CodebuildProjectSourceGitSubmodulesConfigOutputReference[_q] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectSourceGitSubmodulesConfigOutputReference", version: "3.0.1" };
function codebuildProjectSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        buildspec: cdktf.stringToTerraform(struct.buildspec),
        git_clone_depth: cdktf.numberToTerraform(struct.gitCloneDepth),
        insecure_ssl: cdktf.booleanToTerraform(struct.insecureSsl),
        location: cdktf.stringToTerraform(struct.location),
        report_build_status: cdktf.booleanToTerraform(struct.reportBuildStatus),
        type: cdktf.stringToTerraform(struct.type),
        auth: codebuildProjectSourceAuthToTerraform(struct.auth),
        build_status_config: codebuildProjectSourceBuildStatusConfigToTerraform(struct.buildStatusConfig),
        git_submodules_config: codebuildProjectSourceGitSubmodulesConfigToTerraform(struct.gitSubmodulesConfig),
    };
}
exports.codebuildProjectSourceToTerraform = codebuildProjectSourceToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectSourceOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // auth - computed: false, optional: true, required: false
        this._auth = new CodebuildProjectSourceAuthOutputReference(this, "auth", true);
        // build_status_config - computed: false, optional: true, required: false
        this._buildStatusConfig = new CodebuildProjectSourceBuildStatusConfigOutputReference(this, "build_status_config", true);
        // git_submodules_config - computed: false, optional: true, required: false
        this._gitSubmodulesConfig = new CodebuildProjectSourceGitSubmodulesConfigOutputReference(this, "git_submodules_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _u, _v, _w, _x, _y, _z;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._buildspec) {
            hasAnyValues = true;
            internalValueResult.buildspec = this._buildspec;
        }
        if (this._gitCloneDepth) {
            hasAnyValues = true;
            internalValueResult.gitCloneDepth = this._gitCloneDepth;
        }
        if (this._insecureSsl) {
            hasAnyValues = true;
            internalValueResult.insecureSsl = this._insecureSsl;
        }
        if (this._location) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._reportBuildStatus) {
            hasAnyValues = true;
            internalValueResult.reportBuildStatus = this._reportBuildStatus;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if ((_u = this._auth) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.auth = (_v = this._auth) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        if ((_w = this._buildStatusConfig) === null || _w === void 0 ? void 0 : _w.internalValue) {
            hasAnyValues = true;
            internalValueResult.buildStatusConfig = (_x = this._buildStatusConfig) === null || _x === void 0 ? void 0 : _x.internalValue;
        }
        if ((_y = this._gitSubmodulesConfig) === null || _y === void 0 ? void 0 : _y.internalValue) {
            hasAnyValues = true;
            internalValueResult.gitSubmodulesConfig = (_z = this._gitSubmodulesConfig) === null || _z === void 0 ? void 0 : _z.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._buildspec = undefined;
            this._gitCloneDepth = undefined;
            this._insecureSsl = undefined;
            this._location = undefined;
            this._reportBuildStatus = undefined;
            this._type = undefined;
            this._auth.internalValue = undefined;
            this._buildStatusConfig.internalValue = undefined;
            this._gitSubmodulesConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._buildspec = value.buildspec;
            this._gitCloneDepth = value.gitCloneDepth;
            this._insecureSsl = value.insecureSsl;
            this._location = value.location;
            this._reportBuildStatus = value.reportBuildStatus;
            this._type = value.type;
            this._auth.internalValue = value.auth;
            this._buildStatusConfig.internalValue = value.buildStatusConfig;
            this._gitSubmodulesConfig.internalValue = value.gitSubmodulesConfig;
        }
    }
    /**
     * @stability stable
     */
    get buildspec() {
        return this.getStringAttribute('buildspec');
    }
    /**
     * @stability stable
     */
    set buildspec(value) {
        this._buildspec = value;
    }
    /**
     * @stability stable
     */
    resetBuildspec() {
        this._buildspec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get buildspecInput() {
        return this._buildspec;
    }
    /**
     * @stability stable
     */
    get gitCloneDepth() {
        return this.getNumberAttribute('git_clone_depth');
    }
    /**
     * @stability stable
     */
    set gitCloneDepth(value) {
        this._gitCloneDepth = value;
    }
    /**
     * @stability stable
     */
    resetGitCloneDepth() {
        this._gitCloneDepth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gitCloneDepthInput() {
        return this._gitCloneDepth;
    }
    /**
     * @stability stable
     */
    get insecureSsl() {
        return this.getBooleanAttribute('insecure_ssl');
    }
    /**
     * @stability stable
     */
    set insecureSsl(value) {
        this._insecureSsl = value;
    }
    /**
     * @stability stable
     */
    resetInsecureSsl() {
        this._insecureSsl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get insecureSslInput() {
        return this._insecureSsl;
    }
    /**
     * @stability stable
     */
    get location() {
        return this.getStringAttribute('location');
    }
    /**
     * @stability stable
     */
    set location(value) {
        this._location = value;
    }
    /**
     * @stability stable
     */
    resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get locationInput() {
        return this._location;
    }
    /**
     * @stability stable
     */
    get reportBuildStatus() {
        return this.getBooleanAttribute('report_build_status');
    }
    /**
     * @stability stable
     */
    set reportBuildStatus(value) {
        this._reportBuildStatus = value;
    }
    /**
     * @stability stable
     */
    resetReportBuildStatus() {
        this._reportBuildStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get reportBuildStatusInput() {
        return this._reportBuildStatus;
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
    get auth() {
        return this._auth;
    }
    /**
     * @stability stable
     */
    putAuth(value) {
        this._auth.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAuth() {
        this._auth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authInput() {
        return this._auth.internalValue;
    }
    /**
     * @stability stable
     */
    get buildStatusConfig() {
        return this._buildStatusConfig;
    }
    /**
     * @stability stable
     */
    putBuildStatusConfig(value) {
        this._buildStatusConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetBuildStatusConfig() {
        this._buildStatusConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get buildStatusConfigInput() {
        return this._buildStatusConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get gitSubmodulesConfig() {
        return this._gitSubmodulesConfig;
    }
    /**
     * @stability stable
     */
    putGitSubmodulesConfig(value) {
        this._gitSubmodulesConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetGitSubmodulesConfig() {
        this._gitSubmodulesConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gitSubmodulesConfigInput() {
        return this._gitSubmodulesConfig.internalValue;
    }
}
exports.CodebuildProjectSourceOutputReference = CodebuildProjectSourceOutputReference;
_r = JSII_RTTI_SYMBOL_1;
CodebuildProjectSourceOutputReference[_r] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectSourceOutputReference", version: "3.0.1" };
function codebuildProjectVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
        vpc_id: cdktf.stringToTerraform(struct.vpcId),
    };
}
exports.codebuildProjectVpcConfigToTerraform = codebuildProjectVpcConfigToTerraform;
/**
 * @stability stable
 */
class CodebuildProjectVpcConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._vpcId) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
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
            this._vpcId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
            this._vpcId = value.vpcId;
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
}
exports.CodebuildProjectVpcConfigOutputReference = CodebuildProjectVpcConfigOutputReference;
_s = JSII_RTTI_SYMBOL_1;
CodebuildProjectVpcConfigOutputReference[_s] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProjectVpcConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project}.
 *
 * @stability stable
 */
class CodebuildProject extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codebuild_project',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // artifacts - computed: false, optional: false, required: true
        this._artifacts = new CodebuildProjectArtifactsOutputReference(this, "artifacts", true);
        // build_batch_config - computed: false, optional: true, required: false
        this._buildBatchConfig = new CodebuildProjectBuildBatchConfigOutputReference(this, "build_batch_config", true);
        // cache - computed: false, optional: true, required: false
        this._cache = new CodebuildProjectCacheOutputReference(this, "cache", true);
        // environment - computed: false, optional: false, required: true
        this._environment = new CodebuildProjectEnvironmentOutputReference(this, "environment", true);
        // logs_config - computed: false, optional: true, required: false
        this._logsConfig = new CodebuildProjectLogsConfigOutputReference(this, "logs_config", true);
        // source - computed: false, optional: false, required: true
        this._source = new CodebuildProjectSourceOutputReference(this, "source", true);
        // vpc_config - computed: false, optional: true, required: false
        this._vpcConfig = new CodebuildProjectVpcConfigOutputReference(this, "vpc_config", true);
        this._badgeEnabled = config.badgeEnabled;
        this._buildTimeout = config.buildTimeout;
        this._concurrentBuildLimit = config.concurrentBuildLimit;
        this._description = config.description;
        this._encryptionKey = config.encryptionKey;
        this._name = config.name;
        this._queuedTimeout = config.queuedTimeout;
        this._serviceRole = config.serviceRole;
        this._sourceVersion = config.sourceVersion;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._artifacts.internalValue = config.artifacts;
        this._buildBatchConfig.internalValue = config.buildBatchConfig;
        this._cache.internalValue = config.cache;
        this._environment.internalValue = config.environment;
        this._fileSystemLocations = config.fileSystemLocations;
        this._logsConfig.internalValue = config.logsConfig;
        this._secondaryArtifacts = config.secondaryArtifacts;
        this._secondarySources = config.secondarySources;
        this._source.internalValue = config.source;
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
    get badgeEnabled() {
        return this.getBooleanAttribute('badge_enabled');
    }
    /**
     * @stability stable
     */
    set badgeEnabled(value) {
        this._badgeEnabled = value;
    }
    /**
     * @stability stable
     */
    resetBadgeEnabled() {
        this._badgeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get badgeEnabledInput() {
        return this._badgeEnabled;
    }
    // badge_url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get badgeUrl() {
        return this.getStringAttribute('badge_url');
    }
    /**
     * @stability stable
     */
    get buildTimeout() {
        return this.getNumberAttribute('build_timeout');
    }
    /**
     * @stability stable
     */
    set buildTimeout(value) {
        this._buildTimeout = value;
    }
    /**
     * @stability stable
     */
    resetBuildTimeout() {
        this._buildTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get buildTimeoutInput() {
        return this._buildTimeout;
    }
    /**
     * @stability stable
     */
    get concurrentBuildLimit() {
        return this.getNumberAttribute('concurrent_build_limit');
    }
    /**
     * @stability stable
     */
    set concurrentBuildLimit(value) {
        this._concurrentBuildLimit = value;
    }
    /**
     * @stability stable
     */
    resetConcurrentBuildLimit() {
        this._concurrentBuildLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get concurrentBuildLimitInput() {
        return this._concurrentBuildLimit;
    }
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    /**
     * @stability stable
     */
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
    }
    /**
     * @stability stable
     */
    get encryptionKey() {
        return this.getStringAttribute('encryption_key');
    }
    /**
     * @stability stable
     */
    set encryptionKey(value) {
        this._encryptionKey = value;
    }
    /**
     * @stability stable
     */
    resetEncryptionKey() {
        this._encryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionKeyInput() {
        return this._encryptionKey;
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
    get queuedTimeout() {
        return this.getNumberAttribute('queued_timeout');
    }
    /**
     * @stability stable
     */
    set queuedTimeout(value) {
        this._queuedTimeout = value;
    }
    /**
     * @stability stable
     */
    resetQueuedTimeout() {
        this._queuedTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queuedTimeoutInput() {
        return this._queuedTimeout;
    }
    /**
     * @stability stable
     */
    get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    /**
     * @stability stable
     */
    set serviceRole(value) {
        this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceRoleInput() {
        return this._serviceRole;
    }
    /**
     * @stability stable
     */
    get sourceVersion() {
        return this.getStringAttribute('source_version');
    }
    /**
     * @stability stable
     */
    set sourceVersion(value) {
        this._sourceVersion = value;
    }
    /**
     * @stability stable
     */
    resetSourceVersion() {
        this._sourceVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceVersionInput() {
        return this._sourceVersion;
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
    get artifacts() {
        return this._artifacts;
    }
    /**
     * @stability stable
     */
    putArtifacts(value) {
        this._artifacts.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get artifactsInput() {
        return this._artifacts.internalValue;
    }
    /**
     * @stability stable
     */
    get buildBatchConfig() {
        return this._buildBatchConfig;
    }
    /**
     * @stability stable
     */
    putBuildBatchConfig(value) {
        this._buildBatchConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetBuildBatchConfig() {
        this._buildBatchConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get buildBatchConfigInput() {
        return this._buildBatchConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get cache() {
        return this._cache;
    }
    /**
     * @stability stable
     */
    putCache(value) {
        this._cache.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCache() {
        this._cache.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cacheInput() {
        return this._cache.internalValue;
    }
    /**
     * @stability stable
     */
    get environment() {
        return this._environment;
    }
    /**
     * @stability stable
     */
    putEnvironment(value) {
        this._environment.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get environmentInput() {
        return this._environment.internalValue;
    }
    /**
     * @stability stable
     */
    get fileSystemLocations() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('file_system_locations');
    }
    /**
     * @stability stable
     */
    set fileSystemLocations(value) {
        this._fileSystemLocations = value;
    }
    /**
     * @stability stable
     */
    resetFileSystemLocations() {
        this._fileSystemLocations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileSystemLocationsInput() {
        return this._fileSystemLocations;
    }
    /**
     * @stability stable
     */
    get logsConfig() {
        return this._logsConfig;
    }
    /**
     * @stability stable
     */
    putLogsConfig(value) {
        this._logsConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLogsConfig() {
        this._logsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logsConfigInput() {
        return this._logsConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get secondaryArtifacts() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('secondary_artifacts');
    }
    /**
     * @stability stable
     */
    set secondaryArtifacts(value) {
        this._secondaryArtifacts = value;
    }
    /**
     * @stability stable
     */
    resetSecondaryArtifacts() {
        this._secondaryArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secondaryArtifactsInput() {
        return this._secondaryArtifacts;
    }
    /**
     * @stability stable
     */
    get secondarySources() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('secondary_sources');
    }
    /**
     * @stability stable
     */
    set secondarySources(value) {
        this._secondarySources = value;
    }
    /**
     * @stability stable
     */
    resetSecondarySources() {
        this._secondarySources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secondarySourcesInput() {
        return this._secondarySources;
    }
    /**
     * @stability stable
     */
    get source() {
        return this._source;
    }
    /**
     * @stability stable
     */
    putSource(value) {
        this._source.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceInput() {
        return this._source.internalValue;
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
            badge_enabled: cdktf.booleanToTerraform(this._badgeEnabled),
            build_timeout: cdktf.numberToTerraform(this._buildTimeout),
            concurrent_build_limit: cdktf.numberToTerraform(this._concurrentBuildLimit),
            description: cdktf.stringToTerraform(this._description),
            encryption_key: cdktf.stringToTerraform(this._encryptionKey),
            name: cdktf.stringToTerraform(this._name),
            queued_timeout: cdktf.numberToTerraform(this._queuedTimeout),
            service_role: cdktf.stringToTerraform(this._serviceRole),
            source_version: cdktf.stringToTerraform(this._sourceVersion),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            artifacts: codebuildProjectArtifactsToTerraform(this._artifacts.internalValue),
            build_batch_config: codebuildProjectBuildBatchConfigToTerraform(this._buildBatchConfig.internalValue),
            cache: codebuildProjectCacheToTerraform(this._cache.internalValue),
            environment: codebuildProjectEnvironmentToTerraform(this._environment.internalValue),
            file_system_locations: cdktf.listMapper(codebuildProjectFileSystemLocationsToTerraform)(this._fileSystemLocations),
            logs_config: codebuildProjectLogsConfigToTerraform(this._logsConfig.internalValue),
            secondary_artifacts: cdktf.listMapper(codebuildProjectSecondaryArtifactsToTerraform)(this._secondaryArtifacts),
            secondary_sources: cdktf.listMapper(codebuildProjectSecondarySourcesToTerraform)(this._secondarySources),
            source: codebuildProjectSourceToTerraform(this._source.internalValue),
            vpc_config: codebuildProjectVpcConfigToTerraform(this._vpcConfig.internalValue),
        };
    }
}
exports.CodebuildProject = CodebuildProject;
_t = JSII_RTTI_SYMBOL_1;
CodebuildProject[_t] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildProject", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CodebuildProject.tfResourceType = "aws_codebuild_project";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWJ1aWxkLXByb2plY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29kZWJ1aWxkL2NvZGVidWlsZC1wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBb0UvQixTQUFnQixvQ0FBb0MsQ0FBQyxNQUE2RTtJQUNoSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDeEUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUN6RSxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQzlFLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUNyRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFD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O1lBQ3hHLE1BQU0sRUFBRSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNyRSxVQUFVLEVBQUUsb0NBQW9DLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7U0FDaEYsQ0FBQztJQUNKLENBQUM7O0FBbmFILDRDQW9hQzs7O0FBbGFDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csK0JBQWMsR0FBVyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkUHJvamVjdENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmFkZ2VFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVpbGRUaW1lb3V0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uY3VycmVudEJ1aWxkTGltaXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmNyeXB0aW9uS2V5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdWV1ZWRUaW1lb3V0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VSb2xlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZVZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcnRpZmFjdHM6IENvZGVidWlsZFByb2plY3RBcnRpZmFjdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1aWxkQmF0Y2hDb25maWc/OiBDb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGU/OiBDb2RlYnVpbGRQcm9qZWN0Q2FjaGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVudmlyb25tZW50OiBDb2RlYnVpbGRQcm9qZWN0RW52aXJvbm1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGVTeXN0ZW1Mb2NhdGlvbnM/OiBDb2RlYnVpbGRQcm9qZWN0RmlsZVN5c3RlbUxvY2F0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dzQ29uZmlnPzogQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY29uZGFyeUFydGlmYWN0cz86IENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlBcnRpZmFjdHNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2Vjb25kYXJ5U291cmNlcz86IENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZTogQ29kZWJ1aWxkUHJvamVjdFNvdXJjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjQ29uZmlnPzogQ29kZWJ1aWxkUHJvamVjdFZwY0NvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkUHJvamVjdEFydGlmYWN0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcnRpZmFjdElkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmNyeXB0aW9uRGlzYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvY2F0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZXNwYWNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG92ZXJyaWRlQXJ0aWZhY3ROYW1lPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhY2thZ2luZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0QXJ0aWZhY3RzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkUHJvamVjdEFydGlmYWN0c091dHB1dFJlZmVyZW5jZSB8IENvZGVidWlsZFByb2plY3RBcnRpZmFjdHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcnRpZmFjdF9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFydGlmYWN0SWRlbnRpZmllciksXG4gICAgZW5jcnlwdGlvbl9kaXNhYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbkRpc2FibGVkKSxcbiAgICBsb2NhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhdGlvbiksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBuYW1lc3BhY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lc3BhY2VUeXBlKSxcbiAgICBvdmVycmlkZV9hcnRpZmFjdF9uYW1lOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5vdmVycmlkZUFydGlmYWN0TmFtZSksXG4gICAgcGFja2FnaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhY2thZ2luZyksXG4gICAgcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXRoKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0QXJ0aWZhY3RzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVidWlsZFByb2plY3RBcnRpZmFjdHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FydGlmYWN0SWRlbnRpZmllcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXJ0aWZhY3RJZGVudGlmaWVyID0gdGhpcy5fYXJ0aWZhY3RJZGVudGlmaWVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5jcnlwdGlvbkRpc2FibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmNyeXB0aW9uRGlzYWJsZWQgPSB0aGlzLl9lbmNyeXB0aW9uRGlzYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2NhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9jYXRpb24gPSB0aGlzLl9sb2NhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZXNwYWNlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZXNwYWNlVHlwZSA9IHRoaXMuX25hbWVzcGFjZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdmVycmlkZUFydGlmYWN0TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3ZlcnJpZGVBcnRpZmFjdE5hbWUgPSB0aGlzLl9vdmVycmlkZUFydGlmYWN0TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhY2thZ2luZykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFja2FnaW5nID0gdGhpcy5fcGFja2FnaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGF0aCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGF0aCA9IHRoaXMuX3BhdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl90eXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZGVidWlsZFByb2plY3RBcnRpZmFjdHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hcnRpZmFjdElkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uRGlzYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2NhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2VUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3ZlcnJpZGVBcnRpZmFjdE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYWNrYWdpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXJ0aWZhY3RJZGVudGlmaWVyID0gdmFsdWUuYXJ0aWZhY3RJZGVudGlmaWVyO1xuICAgICAgdGhpcy5fZW5jcnlwdGlvbkRpc2FibGVkID0gdmFsdWUuZW5jcnlwdGlvbkRpc2FibGVkO1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZS5sb2NhdGlvbjtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlVHlwZSA9IHZhbHVlLm5hbWVzcGFjZVR5cGU7XG4gICAgICB0aGlzLl9vdmVycmlkZUFydGlmYWN0TmFtZSA9IHZhbHVlLm92ZXJyaWRlQXJ0aWZhY3ROYW1lO1xuICAgICAgdGhpcy5fcGFja2FnaW5nID0gdmFsdWUucGFja2FnaW5nO1xuICAgICAgdGhpcy5fcGF0aCA9IHZhbHVlLnBhdGg7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBhcnRpZmFjdF9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FydGlmYWN0SWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXJ0aWZhY3RJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJ0aWZhY3RfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXJ0aWZhY3RJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcnRpZmFjdElkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcnRpZmFjdElkZW50aWZpZXIoKSB7XG4gICAgdGhpcy5fYXJ0aWZhY3RJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcnRpZmFjdElkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJ0aWZhY3RJZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9kaXNhYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmNyeXB0aW9uRGlzYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25EaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmNyeXB0aW9uX2Rpc2FibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5jcnlwdGlvbkRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uRGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNyeXB0aW9uRGlzYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5jcnlwdGlvbkRpc2FibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uRGlzYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGlvbkRpc2FibGVkO1xuICB9XG5cbiAgLy8gbG9jYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9jYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvY2F0aW9uKCkge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2NhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVzcGFjZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWVzcGFjZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lc3BhY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZXNwYWNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWVzcGFjZVR5cGUoKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2VUeXBlO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVfYXJ0aWZhY3RfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdmVycmlkZUFydGlmYWN0TmFtZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVBcnRpZmFjdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGVfYXJ0aWZhY3RfbmFtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG92ZXJyaWRlQXJ0aWZhY3ROYW1lKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9vdmVycmlkZUFydGlmYWN0TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE92ZXJyaWRlQXJ0aWZhY3ROYW1lKCkge1xuICAgIHRoaXMuX292ZXJyaWRlQXJ0aWZhY3ROYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdmVycmlkZUFydGlmYWN0TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdmVycmlkZUFydGlmYWN0TmFtZTtcbiAgfVxuXG4gIC8vIHBhY2thZ2luZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYWNrYWdpbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhY2thZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhY2thZ2luZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFja2FnaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYWNrYWdpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYWNrYWdpbmcoKSB7XG4gICAgdGhpcy5fcGFja2FnaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYWNrYWdpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFja2FnaW5nO1xuICB9XG5cbiAgLy8gcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhdGgoKSB7XG4gICAgdGhpcy5fcGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWdSZXN0cmljdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXB1dGVUeXBlc0FsbG93ZWQ/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heGltdW1CdWlsZHNBbGxvd2VkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWdSZXN0cmljdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZ1Jlc3RyaWN0aW9uc091dHB1dFJlZmVyZW5jZSB8IENvZGVidWlsZFByb2plY3RCdWlsZEJhdGNoQ29uZmlnUmVzdHJpY3Rpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcHV0ZV90eXBlc19hbGxvd2VkOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbXB1dGVUeXBlc0FsbG93ZWQpLFxuICAgIG1heGltdW1fYnVpbGRzX2FsbG93ZWQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4aW11bUJ1aWxkc0FsbG93ZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZ1Jlc3RyaWN0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZ1Jlc3RyaWN0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29tcHV0ZVR5cGVzQWxsb3dlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcHV0ZVR5cGVzQWxsb3dlZCA9IHRoaXMuX2NvbXB1dGVUeXBlc0FsbG93ZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhpbXVtQnVpbGRzQWxsb3dlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4aW11bUJ1aWxkc0FsbG93ZWQgPSB0aGlzLl9tYXhpbXVtQnVpbGRzQWxsb3dlZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZGVidWlsZFByb2plY3RCdWlsZEJhdGNoQ29uZmlnUmVzdHJpY3Rpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29tcHV0ZVR5cGVzQWxsb3dlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heGltdW1CdWlsZHNBbGxvd2VkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb21wdXRlVHlwZXNBbGxvd2VkID0gdmFsdWUuY29tcHV0ZVR5cGVzQWxsb3dlZDtcbiAgICAgIHRoaXMuX21heGltdW1CdWlsZHNBbGxvd2VkID0gdmFsdWUubWF4aW11bUJ1aWxkc0FsbG93ZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcHV0ZV90eXBlc19hbGxvd2VkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXB1dGVUeXBlc0FsbG93ZWQ/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY29tcHV0ZVR5cGVzQWxsb3dlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjb21wdXRlX3R5cGVzX2FsbG93ZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXB1dGVUeXBlc0FsbG93ZWQodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY29tcHV0ZVR5cGVzQWxsb3dlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXB1dGVUeXBlc0FsbG93ZWQoKSB7XG4gICAgdGhpcy5fY29tcHV0ZVR5cGVzQWxsb3dlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcHV0ZVR5cGVzQWxsb3dlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wdXRlVHlwZXNBbGxvd2VkO1xuICB9XG5cbiAgLy8gbWF4aW11bV9idWlsZHNfYWxsb3dlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhpbXVtQnVpbGRzQWxsb3dlZD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4aW11bUJ1aWxkc0FsbG93ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX2J1aWxkc19hbGxvd2VkJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhpbXVtQnVpbGRzQWxsb3dlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4aW11bUJ1aWxkc0FsbG93ZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhpbXVtQnVpbGRzQWxsb3dlZCgpIHtcbiAgICB0aGlzLl9tYXhpbXVtQnVpbGRzQWxsb3dlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4aW11bUJ1aWxkc0FsbG93ZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4aW11bUJ1aWxkc0FsbG93ZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21iaW5lQXJ0aWZhY3RzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VSb2xlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dEluTWlucz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzdHJpY3Rpb25zPzogQ29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWdSZXN0cmljdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFByb2plY3RCdWlsZEJhdGNoQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21iaW5lX2FydGlmYWN0czogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY29tYmluZUFydGlmYWN0cyksXG4gICAgc2VydmljZV9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VSb2xlKSxcbiAgICB0aW1lb3V0X2luX21pbnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dEluTWlucyksXG4gICAgcmVzdHJpY3Rpb25zOiBjb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZ1Jlc3RyaWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEucmVzdHJpY3Rpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbWJpbmVBcnRpZmFjdHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbWJpbmVBcnRpZmFjdHMgPSB0aGlzLl9jb21iaW5lQXJ0aWZhY3RzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VydmljZVJvbGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZpY2VSb2xlID0gdGhpcy5fc2VydmljZVJvbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0SW5NaW5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0SW5NaW5zID0gdGhpcy5fdGltZW91dEluTWlucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc3RyaWN0aW9ucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzdHJpY3Rpb25zID0gdGhpcy5fcmVzdHJpY3Rpb25zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb21iaW5lQXJ0aWZhY3RzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VydmljZVJvbGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0SW5NaW5zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzdHJpY3Rpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbWJpbmVBcnRpZmFjdHMgPSB2YWx1ZS5jb21iaW5lQXJ0aWZhY3RzO1xuICAgICAgdGhpcy5fc2VydmljZVJvbGUgPSB2YWx1ZS5zZXJ2aWNlUm9sZTtcbiAgICAgIHRoaXMuX3RpbWVvdXRJbk1pbnMgPSB2YWx1ZS50aW1lb3V0SW5NaW5zO1xuICAgICAgdGhpcy5fcmVzdHJpY3Rpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZXN0cmljdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tYmluZV9hcnRpZmFjdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tYmluZUFydGlmYWN0cz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY29tYmluZUFydGlmYWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb21iaW5lX2FydGlmYWN0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbWJpbmVBcnRpZmFjdHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NvbWJpbmVBcnRpZmFjdHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21iaW5lQXJ0aWZhY3RzKCkge1xuICAgIHRoaXMuX2NvbWJpbmVBcnRpZmFjdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbWJpbmVBcnRpZmFjdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tYmluZUFydGlmYWN0cztcbiAgfVxuXG4gIC8vIHNlcnZpY2Vfcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlUm9sZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VSb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlUm9sZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRfaW5fbWlucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0SW5NaW5zPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0SW5NaW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dF9pbl9taW5zJyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0SW5NaW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90aW1lb3V0SW5NaW5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dEluTWlucygpIHtcbiAgICB0aGlzLl90aW1lb3V0SW5NaW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0SW5NaW5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRJbk1pbnM7XG4gIH1cblxuICAvLyByZXN0cmljdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzdHJpY3Rpb25zID0gbmV3IENvZGVidWlsZFByb2plY3RCdWlsZEJhdGNoQ29uZmlnUmVzdHJpY3Rpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlc3RyaWN0aW9uc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZXN0cmljdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RyaWN0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0UmVzdHJpY3Rpb25zKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZ1Jlc3RyaWN0aW9ucykge1xuICAgIHRoaXMuX3Jlc3RyaWN0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzdHJpY3Rpb25zKCkge1xuICAgIHRoaXMuX3Jlc3RyaWN0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXN0cmljdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdHJpY3Rpb25zLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkUHJvamVjdENhY2hlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9jYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vZGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWJ1aWxkUHJvamVjdENhY2hlVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkUHJvamVjdENhY2hlT3V0cHV0UmVmZXJlbmNlIHwgQ29kZWJ1aWxkUHJvamVjdENhY2hlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbG9jYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYXRpb24pLFxuICAgIG1vZGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1vZGVzKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0Q2FjaGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdENhY2hlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9sb2NhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9jYXRpb24gPSB0aGlzLl9sb2NhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb2RlcyA9IHRoaXMuX21vZGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0Q2FjaGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9sb2NhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21vZGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZS5sb2NhdGlvbjtcbiAgICAgIHRoaXMuX21vZGVzID0gdmFsdWUubW9kZXM7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBsb2NhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2NhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2NhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9jYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9jYXRpb24oKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG5cbiAgLy8gbW9kZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9kZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbW9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbW9kZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vZGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX21vZGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TW9kZXMoKSB7XG4gICAgdGhpcy5fbW9kZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vZGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVzO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR5cGUoKSB7XG4gICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudEVudmlyb25tZW50VmFyaWFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudEVudmlyb25tZW50VmFyaWFibGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlYnVpbGRQcm9qZWN0RW52aXJvbm1lbnRFbnZpcm9ubWVudFZhcmlhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudFJlZ2lzdHJ5Q3JlZGVudGlhbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVkZW50aWFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVkZW50aWFsUHJvdmlkZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudFJlZ2lzdHJ5Q3JlZGVudGlhbFRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudFJlZ2lzdHJ5Q3JlZGVudGlhbE91dHB1dFJlZmVyZW5jZSB8IENvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudFJlZ2lzdHJ5Q3JlZGVudGlhbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWRlbnRpYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlZGVudGlhbCksXG4gICAgY3JlZGVudGlhbF9wcm92aWRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVkZW50aWFsUHJvdmlkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0RW52aXJvbm1lbnRSZWdpc3RyeUNyZWRlbnRpYWxPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50UmVnaXN0cnlDcmVkZW50aWFsIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcmVkZW50aWFsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVkZW50aWFsID0gdGhpcy5fY3JlZGVudGlhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NyZWRlbnRpYWxQcm92aWRlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlZGVudGlhbFByb3ZpZGVyID0gdGhpcy5fY3JlZGVudGlhbFByb3ZpZGVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50UmVnaXN0cnlDcmVkZW50aWFsIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3JlZGVudGlhbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NyZWRlbnRpYWxQcm92aWRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY3JlZGVudGlhbCA9IHZhbHVlLmNyZWRlbnRpYWw7XG4gICAgICB0aGlzLl9jcmVkZW50aWFsUHJvdmlkZXIgPSB2YWx1ZS5jcmVkZW50aWFsUHJvdmlkZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlZGVudGlhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jcmVkZW50aWFsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVkZW50aWFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlZGVudGlhbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3JlZGVudGlhbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlZGVudGlhbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVkZW50aWFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWRlbnRpYWw7XG4gIH1cblxuICAvLyBjcmVkZW50aWFsX3Byb3ZpZGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NyZWRlbnRpYWxQcm92aWRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlZGVudGlhbFByb3ZpZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlZGVudGlhbF9wcm92aWRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3JlZGVudGlhbFByb3ZpZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVkZW50aWFsUHJvdmlkZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlZGVudGlhbFByb3ZpZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWRlbnRpYWxQcm92aWRlcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0RW52aXJvbm1lbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wdXRlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlUHVsbENyZWRlbnRpYWxzVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcml2aWxlZ2VkTW9kZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW52aXJvbm1lbnRWYXJpYWJsZT86IENvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudEVudmlyb25tZW50VmFyaWFibGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVnaXN0cnlDcmVkZW50aWFsPzogQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50UmVnaXN0cnlDcmVkZW50aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50VG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50T3V0cHV0UmVmZXJlbmNlIHwgQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIGNvbXB1dGVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wdXRlVHlwZSksXG4gICAgaW1hZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2UpLFxuICAgIGltYWdlX3B1bGxfY3JlZGVudGlhbHNfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZVB1bGxDcmVkZW50aWFsc1R5cGUpLFxuICAgIHByaXZpbGVnZWRfbW9kZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucHJpdmlsZWdlZE1vZGUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgZW52aXJvbm1lbnRfdmFyaWFibGU6IGNka3RmLmxpc3RNYXBwZXIoY29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50RW52aXJvbm1lbnRWYXJpYWJsZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmVudmlyb25tZW50VmFyaWFibGUpLFxuICAgIHJlZ2lzdHJ5X2NyZWRlbnRpYWw6IGNvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudFJlZ2lzdHJ5Q3JlZGVudGlhbFRvVGVycmFmb3JtKHN0cnVjdCEucmVnaXN0cnlDcmVkZW50aWFsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlID0gdGhpcy5fY2VydGlmaWNhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcHV0ZVR5cGUgPSB0aGlzLl9jb21wdXRlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ltYWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbWFnZSA9IHRoaXMuX2ltYWdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW1hZ2VQdWxsQ3JlZGVudGlhbHNUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbWFnZVB1bGxDcmVkZW50aWFsc1R5cGUgPSB0aGlzLl9pbWFnZVB1bGxDcmVkZW50aWFsc1R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcml2aWxlZ2VkTW9kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJpdmlsZWdlZE1vZGUgPSB0aGlzLl9wcml2aWxlZ2VkTW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR5cGUgPSB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW52aXJvbm1lbnRWYXJpYWJsZSA9IHRoaXMuX2Vudmlyb25tZW50VmFyaWFibGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWdpc3RyeUNyZWRlbnRpYWw/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZ2lzdHJ5Q3JlZGVudGlhbCA9IHRoaXMuX3JlZ2lzdHJ5Q3JlZGVudGlhbD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZGVidWlsZFByb2plY3RFbnZpcm9ubWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29tcHV0ZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbWFnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ltYWdlUHVsbENyZWRlbnRpYWxzVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByaXZpbGVnZWRNb2RlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Vudmlyb25tZW50VmFyaWFibGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWdpc3RyeUNyZWRlbnRpYWwuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGUgPSB2YWx1ZS5jZXJ0aWZpY2F0ZTtcbiAgICAgIHRoaXMuX2NvbXB1dGVUeXBlID0gdmFsdWUuY29tcHV0ZVR5cGU7XG4gICAgICB0aGlzLl9pbWFnZSA9IHZhbHVlLmltYWdlO1xuICAgICAgdGhpcy5faW1hZ2VQdWxsQ3JlZGVudGlhbHNUeXBlID0gdmFsdWUuaW1hZ2VQdWxsQ3JlZGVudGlhbHNUeXBlO1xuICAgICAgdGhpcy5fcHJpdmlsZWdlZE1vZGUgPSB2YWx1ZS5wcml2aWxlZ2VkTW9kZTtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZS50eXBlO1xuICAgICAgdGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZSA9IHZhbHVlLmVudmlyb25tZW50VmFyaWFibGU7XG4gICAgICB0aGlzLl9yZWdpc3RyeUNyZWRlbnRpYWwuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJlZ2lzdHJ5Q3JlZGVudGlhbDtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGUoKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlO1xuICB9XG5cbiAgLy8gY29tcHV0ZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbXB1dGVUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wdXRlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXB1dGVfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcHV0ZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXB1dGVUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXB1dGVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXB1dGVUeXBlO1xuICB9XG5cbiAgLy8gaW1hZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW1hZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGltYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbWFnZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZTtcbiAgfVxuXG4gIC8vIGltYWdlX3B1bGxfY3JlZGVudGlhbHNfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZVB1bGxDcmVkZW50aWFsc1R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGltYWdlUHVsbENyZWRlbnRpYWxzVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltYWdlX3B1bGxfY3JlZGVudGlhbHNfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW1hZ2VQdWxsQ3JlZGVudGlhbHNUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbWFnZVB1bGxDcmVkZW50aWFsc1R5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbWFnZVB1bGxDcmVkZW50aWFsc1R5cGUoKSB7XG4gICAgdGhpcy5faW1hZ2VQdWxsQ3JlZGVudGlhbHNUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZVB1bGxDcmVkZW50aWFsc1R5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VQdWxsQ3JlZGVudGlhbHNUeXBlO1xuICB9XG5cbiAgLy8gcHJpdmlsZWdlZF9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByaXZpbGVnZWRNb2RlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwcml2aWxlZ2VkTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdwcml2aWxlZ2VkX21vZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2aWxlZ2VkTW9kZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcHJpdmlsZWdlZE1vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcml2aWxlZ2VkTW9kZSgpIHtcbiAgICB0aGlzLl9wcml2aWxlZ2VkTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpdmlsZWdlZE1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpdmlsZWdlZE1vZGU7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8vIGVudmlyb25tZW50X3ZhcmlhYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vudmlyb25tZW50VmFyaWFibGU/OiBDb2RlYnVpbGRQcm9qZWN0RW52aXJvbm1lbnRFbnZpcm9ubWVudFZhcmlhYmxlW107IFxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50VmFyaWFibGUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vudmlyb25tZW50X3ZhcmlhYmxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW52aXJvbm1lbnRWYXJpYWJsZSh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50RW52aXJvbm1lbnRWYXJpYWJsZVtdKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVudmlyb25tZW50VmFyaWFibGUoKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRWYXJpYWJsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudFZhcmlhYmxlO1xuICB9XG5cbiAgLy8gcmVnaXN0cnlfY3JlZGVudGlhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWdpc3RyeUNyZWRlbnRpYWwgPSBuZXcgQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50UmVnaXN0cnlDcmVkZW50aWFsT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlZ2lzdHJ5X2NyZWRlbnRpYWxcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVnaXN0cnlDcmVkZW50aWFsKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeUNyZWRlbnRpYWw7XG4gIH1cbiAgcHVibGljIHB1dFJlZ2lzdHJ5Q3JlZGVudGlhbCh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50UmVnaXN0cnlDcmVkZW50aWFsKSB7XG4gICAgdGhpcy5fcmVnaXN0cnlDcmVkZW50aWFsLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWdpc3RyeUNyZWRlbnRpYWwoKSB7XG4gICAgdGhpcy5fcmVnaXN0cnlDcmVkZW50aWFsLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZ2lzdHJ5Q3JlZGVudGlhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeUNyZWRlbnRpYWwuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0RmlsZVN5c3RlbUxvY2F0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGVudGlmaWVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2NhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vdW50T3B0aW9ucz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW91bnRQb2ludD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0RmlsZVN5c3RlbUxvY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFByb2plY3RGaWxlU3lzdGVtTG9jYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZGVudGlmaWVyKSxcbiAgICBsb2NhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhdGlvbiksXG4gICAgbW91bnRfb3B0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb3VudE9wdGlvbnMpLFxuICAgIG1vdW50X3BvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vdW50UG9pbnQpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZ0Nsb3Vkd2F0Y2hMb2dzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0cmVhbU5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZ0Nsb3Vkd2F0Y2hMb2dzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdDbG91ZHdhdGNoTG9nc091dHB1dFJlZmVyZW5jZSB8IENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnQ2xvdWR3YXRjaExvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwTmFtZSksXG4gICAgc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gICAgc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnQ2xvdWR3YXRjaExvZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdDbG91ZHdhdGNoTG9ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZ3JvdXBOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ncm91cE5hbWUgPSB0aGlzLl9ncm91cE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0dXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1cyA9IHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0cmVhbU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0cmVhbU5hbWUgPSB0aGlzLl9zdHJlYW1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdDbG91ZHdhdGNoTG9ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0cmVhbU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2dyb3VwTmFtZSA9IHZhbHVlLmdyb3VwTmFtZTtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlLnN0YXR1cztcbiAgICAgIHRoaXMuX3N0cmVhbU5hbWUgPSB2YWx1ZS5zdHJlYW1OYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBncm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBncm91cE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dyb3VwTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9ncm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdyb3VwTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ncm91cE5hbWU7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdHVzKCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuXG4gIC8vIHN0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0cmVhbU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0cmVhbU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdHJlYW1fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RyZWFtTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RyZWFtTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0cmVhbU5hbWUoKSB7XG4gICAgdGhpcy5fc3RyZWFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RyZWFtTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW1OYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnUzNMb2dzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRpb25EaXNhYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9jYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdTM0xvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZ1MzTG9nc091dHB1dFJlZmVyZW5jZSB8IENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnUzNMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5jcnlwdGlvbl9kaXNhYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbkRpc2FibGVkKSxcbiAgICBsb2NhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhdGlvbiksXG4gICAgc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnUzNMb2dzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnUzNMb2dzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmNyeXB0aW9uRGlzYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuY3J5cHRpb25EaXNhYmxlZCA9IHRoaXMuX2VuY3J5cHRpb25EaXNhYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvY2F0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2NhdGlvbiA9IHRoaXMuX2xvY2F0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdHVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGF0dXMgPSB0aGlzLl9zdGF0dXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZ1MzTG9ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuY3J5cHRpb25EaXNhYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uRGlzYWJsZWQgPSB2YWx1ZS5lbmNyeXB0aW9uRGlzYWJsZWQ7XG4gICAgICB0aGlzLl9sb2NhdGlvbiA9IHZhbHVlLmxvY2F0aW9uO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWUuc3RhdHVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fZGlzYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdGlvbkRpc2FibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5jcnlwdGlvbl9kaXNhYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY3J5cHRpb25EaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5jcnlwdGlvbkRpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5jcnlwdGlvbkRpc2FibGVkKCkge1xuICAgIHRoaXMuX2VuY3J5cHRpb25EaXNhYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkRpc2FibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25EaXNhYmxlZDtcbiAgfVxuXG4gIC8vIGxvY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvY2F0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2NhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2NhdGlvbigpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9jYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdHVzKCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dzPzogQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdDbG91ZHdhdGNoTG9ncztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNMb2dzPzogQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdTM0xvZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2xvZ3M6IGNvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnQ2xvdWR3YXRjaExvZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dzKSxcbiAgICBzM19sb2dzOiBjb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZ1MzTG9nc1RvVGVycmFmb3JtKHN0cnVjdCEuczNMb2dzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZHdhdGNoTG9ncyA9IHRoaXMuX2Nsb3Vkd2F0Y2hMb2dzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNMb2dzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM0xvZ3MgPSB0aGlzLl9zM0xvZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zM0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNsb3Vkd2F0Y2hMb2dzO1xuICAgICAgdGhpcy5fczNMb2dzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zM0xvZ3M7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hMb2dzID0gbmV3IENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnQ2xvdWR3YXRjaExvZ3NPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xvdWR3YXRjaF9sb2dzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dzKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9ncztcbiAgfVxuICBwdWJsaWMgcHV0Q2xvdWR3YXRjaExvZ3ModmFsdWU6IENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnQ2xvdWR3YXRjaExvZ3MpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWR3YXRjaExvZ3MoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHMzX2xvZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNMb2dzID0gbmV3IENvZGVidWlsZFByb2plY3RMb2dzQ29uZmlnUzNMb2dzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInMzX2xvZ3NcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgczNMb2dzKCkge1xuICAgIHJldHVybiB0aGlzLl9zM0xvZ3M7XG4gIH1cbiAgcHVibGljIHB1dFMzTG9ncyh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdTM0xvZ3MpIHtcbiAgICB0aGlzLl9zM0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzTG9ncygpIHtcbiAgICB0aGlzLl9zM0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNMb2dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzTG9ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlBcnRpZmFjdHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXJ0aWZhY3RJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmNyeXB0aW9uRGlzYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvY2F0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZXNwYWNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG92ZXJyaWRlQXJ0aWZhY3ROYW1lPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhY2thZ2luZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5QXJ0aWZhY3RzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeUFydGlmYWN0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFydGlmYWN0X2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJ0aWZhY3RJZGVudGlmaWVyKSxcbiAgICBlbmNyeXB0aW9uX2Rpc2FibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uRGlzYWJsZWQpLFxuICAgIGxvY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2F0aW9uKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIG5hbWVzcGFjZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWVzcGFjZVR5cGUpLFxuICAgIG92ZXJyaWRlX2FydGlmYWN0X25hbWU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm92ZXJyaWRlQXJ0aWZhY3ROYW1lKSxcbiAgICBwYWNrYWdpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFja2FnaW5nKSxcbiAgICBwYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGgpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0F1dGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzQXV0aFRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzQXV0aE91dHB1dFJlZmVyZW5jZSB8IENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzQXV0aCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0F1dGhPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXNBdXRoIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2UgPSB0aGlzLl9yZXNvdXJjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR5cGUgPSB0aGlzLl90eXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXNBdXRoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXNvdXJjZSA9IHZhbHVlLnJlc291cmNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlKCkge1xuICAgIHRoaXMuX3Jlc291cmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzQnVpbGRTdGF0dXNDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGV4dD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldFVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzQnVpbGRTdGF0dXNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0J1aWxkU3RhdHVzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXNCdWlsZFN0YXR1c0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRleHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGV4dCksXG4gICAgdGFyZ2V0X3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRVcmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0J1aWxkU3RhdHVzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzQnVpbGRTdGF0dXNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbnRleHQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0VXJsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRVcmwgPSB0aGlzLl90YXJnZXRVcmw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0J1aWxkU3RhdHVzQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldFVybCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29udGV4dCA9IHZhbHVlLmNvbnRleHQ7XG4gICAgICB0aGlzLl90YXJnZXRVcmwgPSB2YWx1ZS50YXJnZXRVcmw7XG4gICAgfVxuICB9XG5cbiAgLy8gY29udGV4dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZXh0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGV4dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRleHQoKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGV4dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICB9XG5cbiAgLy8gdGFyZ2V0X3VybCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRVcmw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcmdldFVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldF91cmwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFVybCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFyZ2V0VXJsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0VXJsKCkge1xuICAgIHRoaXMuX3RhcmdldFVybCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VXJsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFVybDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0dpdFN1Ym1vZHVsZXNDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmV0Y2hTdWJtb2R1bGVzOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0dpdFN1Ym1vZHVsZXNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0dpdFN1Ym1vZHVsZXNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0dpdFN1Ym1vZHVsZXNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmZXRjaF9zdWJtb2R1bGVzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5mZXRjaFN1Ym1vZHVsZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0dpdFN1Ym1vZHVsZXNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXNHaXRTdWJtb2R1bGVzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9mZXRjaFN1Ym1vZHVsZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZldGNoU3VibW9kdWxlcyA9IHRoaXMuX2ZldGNoU3VibW9kdWxlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzR2l0U3VibW9kdWxlc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZldGNoU3VibW9kdWxlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZmV0Y2hTdWJtb2R1bGVzID0gdmFsdWUuZmV0Y2hTdWJtb2R1bGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZldGNoX3N1Ym1vZHVsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmV0Y2hTdWJtb2R1bGVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBmZXRjaFN1Ym1vZHVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZmV0Y2hfc3VibW9kdWxlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZldGNoU3VibW9kdWxlcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZmV0Y2hTdWJtb2R1bGVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZldGNoU3VibW9kdWxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mZXRjaFN1Ym1vZHVsZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1aWxkc3BlYz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnaXRDbG9uZURlcHRoPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc2VjdXJlU3NsPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2NhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcG9ydEJ1aWxkU3RhdHVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGg/OiBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc0F1dGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1aWxkU3RhdHVzQ29uZmlnPzogQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXNCdWlsZFN0YXR1c0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ2l0U3VibW9kdWxlc0NvbmZpZz86IENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzR2l0U3VibW9kdWxlc0NvbmZpZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWlsZHNwZWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVpbGRzcGVjKSxcbiAgICBnaXRfY2xvbmVfZGVwdGg6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZ2l0Q2xvbmVEZXB0aCksXG4gICAgaW5zZWN1cmVfc3NsOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbnNlY3VyZVNzbCksXG4gICAgbG9jYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYXRpb24pLFxuICAgIHJlcG9ydF9idWlsZF9zdGF0dXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcG9ydEJ1aWxkU3RhdHVzKSxcbiAgICBzb3VyY2VfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VJZGVudGlmaWVyKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIGF1dGg6IGNvZGVidWlsZFByb2plY3RTZWNvbmRhcnlTb3VyY2VzQXV0aFRvVGVycmFmb3JtKHN0cnVjdCEuYXV0aCksXG4gICAgYnVpbGRfc3RhdHVzX2NvbmZpZzogY29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXNCdWlsZFN0YXR1c0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVpbGRTdGF0dXNDb25maWcpLFxuICAgIGdpdF9zdWJtb2R1bGVzX2NvbmZpZzogY29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXNHaXRTdWJtb2R1bGVzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5naXRTdWJtb2R1bGVzQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVidWlsZFByb2plY3RTb3VyY2VBdXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0U291cmNlQXV0aFRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFByb2plY3RTb3VyY2VBdXRoT3V0cHV0UmVmZXJlbmNlIHwgQ29kZWJ1aWxkUHJvamVjdFNvdXJjZUF1dGgpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWJ1aWxkUHJvamVjdFNvdXJjZUF1dGhPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdFNvdXJjZUF1dGggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZSA9IHRoaXMuX3Jlc291cmNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0U291cmNlQXV0aCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2UgPSB2YWx1ZS5yZXNvdXJjZTtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZS50eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZSgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2U7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0U291cmNlQnVpbGRTdGF0dXNDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGV4dD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldFVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVidWlsZFByb2plY3RTb3VyY2VCdWlsZFN0YXR1c0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFByb2plY3RTb3VyY2VCdWlsZFN0YXR1c0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENvZGVidWlsZFByb2plY3RTb3VyY2VCdWlsZFN0YXR1c0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRleHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGV4dCksXG4gICAgdGFyZ2V0X3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRVcmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0U291cmNlQnVpbGRTdGF0dXNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdFNvdXJjZUJ1aWxkU3RhdHVzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb250ZXh0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb250ZXh0ID0gdGhpcy5fY29udGV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldFVybCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0VXJsID0gdGhpcy5fdGFyZ2V0VXJsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdFNvdXJjZUJ1aWxkU3RhdHVzQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldFVybCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29udGV4dCA9IHZhbHVlLmNvbnRleHQ7XG4gICAgICB0aGlzLl90YXJnZXRVcmwgPSB2YWx1ZS50YXJnZXRVcmw7XG4gICAgfVxuICB9XG5cbiAgLy8gY29udGV4dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZXh0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGV4dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRleHQoKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGV4dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICB9XG5cbiAgLy8gdGFyZ2V0X3VybCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRVcmw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcmdldFVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldF91cmwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFVybCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFyZ2V0VXJsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0VXJsKCkge1xuICAgIHRoaXMuX3RhcmdldFVybCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VXJsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFVybDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0U291cmNlR2l0U3VibW9kdWxlc0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmZXRjaFN1Ym1vZHVsZXM6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVidWlsZFByb2plY3RTb3VyY2VHaXRTdWJtb2R1bGVzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkUHJvamVjdFNvdXJjZUdpdFN1Ym1vZHVsZXNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDb2RlYnVpbGRQcm9qZWN0U291cmNlR2l0U3VibW9kdWxlc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZldGNoX3N1Ym1vZHVsZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmZldGNoU3VibW9kdWxlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVidWlsZFByb2plY3RTb3VyY2VHaXRTdWJtb2R1bGVzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVidWlsZFByb2plY3RTb3VyY2VHaXRTdWJtb2R1bGVzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9mZXRjaFN1Ym1vZHVsZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZldGNoU3VibW9kdWxlcyA9IHRoaXMuX2ZldGNoU3VibW9kdWxlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZGVidWlsZFByb2plY3RTb3VyY2VHaXRTdWJtb2R1bGVzQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZmV0Y2hTdWJtb2R1bGVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9mZXRjaFN1Ym1vZHVsZXMgPSB2YWx1ZS5mZXRjaFN1Ym1vZHVsZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZmV0Y2hfc3VibW9kdWxlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9mZXRjaFN1Ym1vZHVsZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGZldGNoU3VibW9kdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmZXRjaF9zdWJtb2R1bGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZmV0Y2hTdWJtb2R1bGVzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9mZXRjaFN1Ym1vZHVsZXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmV0Y2hTdWJtb2R1bGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoU3VibW9kdWxlcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0U291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWlsZHNwZWM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ2l0Q2xvbmVEZXB0aD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnNlY3VyZVNzbD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9jYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnRCdWlsZFN0YXR1cz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aD86IENvZGVidWlsZFByb2plY3RTb3VyY2VBdXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWlsZFN0YXR1c0NvbmZpZz86IENvZGVidWlsZFByb2plY3RTb3VyY2VCdWlsZFN0YXR1c0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ2l0U3VibW9kdWxlc0NvbmZpZz86IENvZGVidWlsZFByb2plY3RTb3VyY2VHaXRTdWJtb2R1bGVzQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWJ1aWxkUHJvamVjdFNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFByb2plY3RTb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBDb2RlYnVpbGRQcm9qZWN0U291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVpbGRzcGVjOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1aWxkc3BlYyksXG4gICAgZ2l0X2Nsb25lX2RlcHRoOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmdpdENsb25lRGVwdGgpLFxuICAgIGluc2VjdXJlX3NzbDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5zZWN1cmVTc2wpLFxuICAgIGxvY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2F0aW9uKSxcbiAgICByZXBvcnRfYnVpbGRfc3RhdHVzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBvcnRCdWlsZFN0YXR1cyksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICBhdXRoOiBjb2RlYnVpbGRQcm9qZWN0U291cmNlQXV0aFRvVGVycmFmb3JtKHN0cnVjdCEuYXV0aCksXG4gICAgYnVpbGRfc3RhdHVzX2NvbmZpZzogY29kZWJ1aWxkUHJvamVjdFNvdXJjZUJ1aWxkU3RhdHVzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5idWlsZFN0YXR1c0NvbmZpZyksXG4gICAgZ2l0X3N1Ym1vZHVsZXNfY29uZmlnOiBjb2RlYnVpbGRQcm9qZWN0U291cmNlR2l0U3VibW9kdWxlc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2l0U3VibW9kdWxlc0NvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVidWlsZFByb2plY3RTb3VyY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWJ1aWxkUHJvamVjdFNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVpbGRzcGVjKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWlsZHNwZWMgPSB0aGlzLl9idWlsZHNwZWM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9naXRDbG9uZURlcHRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5naXRDbG9uZURlcHRoID0gdGhpcy5fZ2l0Q2xvbmVEZXB0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luc2VjdXJlU3NsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnNlY3VyZVNzbCA9IHRoaXMuX2luc2VjdXJlU3NsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9jYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvY2F0aW9uID0gdGhpcy5fbG9jYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXBvcnRCdWlsZFN0YXR1cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVwb3J0QnVpbGRTdGF0dXMgPSB0aGlzLl9yZXBvcnRCdWlsZFN0YXR1cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR5cGUgPSB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0aD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aCA9IHRoaXMuX2F1dGg/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWlsZFN0YXR1c0NvbmZpZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVpbGRTdGF0dXNDb25maWcgPSB0aGlzLl9idWlsZFN0YXR1c0NvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2dpdFN1Ym1vZHVsZXNDb25maWc/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmdpdFN1Ym1vZHVsZXNDb25maWcgPSB0aGlzLl9naXRTdWJtb2R1bGVzQ29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdFNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1aWxkc3BlYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dpdENsb25lRGVwdGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnNlY3VyZVNzbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVwb3J0QnVpbGRTdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXV0aC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYnVpbGRTdGF0dXNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dpdFN1Ym1vZHVsZXNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnVpbGRzcGVjID0gdmFsdWUuYnVpbGRzcGVjO1xuICAgICAgdGhpcy5fZ2l0Q2xvbmVEZXB0aCA9IHZhbHVlLmdpdENsb25lRGVwdGg7XG4gICAgICB0aGlzLl9pbnNlY3VyZVNzbCA9IHZhbHVlLmluc2VjdXJlU3NsO1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZS5sb2NhdGlvbjtcbiAgICAgIHRoaXMuX3JlcG9ydEJ1aWxkU3RhdHVzID0gdmFsdWUucmVwb3J0QnVpbGRTdGF0dXM7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMuX2F1dGguaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmF1dGg7XG4gICAgICB0aGlzLl9idWlsZFN0YXR1c0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYnVpbGRTdGF0dXNDb25maWc7XG4gICAgICB0aGlzLl9naXRTdWJtb2R1bGVzQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5naXRTdWJtb2R1bGVzQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1aWxkc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWlsZHNwZWM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1aWxkc3BlYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1aWxkc3BlYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRzcGVjKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWlsZHNwZWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZHNwZWMoKSB7XG4gICAgdGhpcy5fYnVpbGRzcGVjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWlsZHNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRzcGVjO1xuICB9XG5cbiAgLy8gZ2l0X2Nsb25lX2RlcHRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dpdENsb25lRGVwdGg/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGdpdENsb25lRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdnaXRfY2xvbmVfZGVwdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdpdENsb25lRGVwdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2dpdENsb25lRGVwdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHaXRDbG9uZURlcHRoKCkge1xuICAgIHRoaXMuX2dpdENsb25lRGVwdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdpdENsb25lRGVwdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2l0Q2xvbmVEZXB0aDtcbiAgfVxuXG4gIC8vIGluc2VjdXJlX3NzbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnNlY3VyZVNzbD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5zZWN1cmVTc2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5zZWN1cmVfc3NsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zZWN1cmVTc2wodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luc2VjdXJlU3NsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zZWN1cmVTc2woKSB7XG4gICAgdGhpcy5faW5zZWN1cmVTc2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc2VjdXJlU3NsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc2VjdXJlU3NsO1xuICB9XG5cbiAgLy8gbG9jYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9jYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvY2F0aW9uKCkge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2NhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxuXG4gIC8vIHJlcG9ydF9idWlsZF9zdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwb3J0QnVpbGRTdGF0dXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJlcG9ydEJ1aWxkU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcG9ydF9idWlsZF9zdGF0dXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvcnRCdWlsZFN0YXR1cyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVwb3J0QnVpbGRTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXBvcnRCdWlsZFN0YXR1cygpIHtcbiAgICB0aGlzLl9yZXBvcnRCdWlsZFN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwb3J0QnVpbGRTdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3J0QnVpbGRTdGF0dXM7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8vIGF1dGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aCA9IG5ldyBDb2RlYnVpbGRQcm9qZWN0U291cmNlQXV0aE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhdXRoXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1dGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGg7XG4gIH1cbiAgcHVibGljIHB1dEF1dGgodmFsdWU6IENvZGVidWlsZFByb2plY3RTb3VyY2VBdXRoKSB7XG4gICAgdGhpcy5fYXV0aC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0aCgpIHtcbiAgICB0aGlzLl9hdXRoLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gYnVpbGRfc3RhdHVzX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWlsZFN0YXR1c0NvbmZpZyA9IG5ldyBDb2RlYnVpbGRQcm9qZWN0U291cmNlQnVpbGRTdGF0dXNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYnVpbGRfc3RhdHVzX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBidWlsZFN0YXR1c0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRTdGF0dXNDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dEJ1aWxkU3RhdHVzQ29uZmlnKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0U291cmNlQnVpbGRTdGF0dXNDb25maWcpIHtcbiAgICB0aGlzLl9idWlsZFN0YXR1c0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVpbGRTdGF0dXNDb25maWcoKSB7XG4gICAgdGhpcy5fYnVpbGRTdGF0dXNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVpbGRTdGF0dXNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRTdGF0dXNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGdpdF9zdWJtb2R1bGVzX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9naXRTdWJtb2R1bGVzQ29uZmlnID0gbmV3IENvZGVidWlsZFByb2plY3RTb3VyY2VHaXRTdWJtb2R1bGVzQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImdpdF9zdWJtb2R1bGVzX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBnaXRTdWJtb2R1bGVzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9naXRTdWJtb2R1bGVzQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRHaXRTdWJtb2R1bGVzQ29uZmlnKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0U291cmNlR2l0U3VibW9kdWxlc0NvbmZpZykge1xuICAgIHRoaXMuX2dpdFN1Ym1vZHVsZXNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdpdFN1Ym1vZHVsZXNDb25maWcoKSB7XG4gICAgdGhpcy5fZ2l0U3VibW9kdWxlc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnaXRTdWJtb2R1bGVzQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dpdFN1Ym1vZHVsZXNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRQcm9qZWN0VnBjQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1Ym5ldHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRQcm9qZWN0VnBjQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkUHJvamVjdFZwY0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENvZGVidWlsZFByb2plY3RWcGNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRzKSxcbiAgICB2cGNfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudnBjSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlYnVpbGRQcm9qZWN0VnBjQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVidWlsZFByb2plY3RWcGNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NlY3VyaXR5R3JvdXBJZHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3VyaXR5R3JvdXBJZHMgPSB0aGlzLl9zZWN1cml0eUdyb3VwSWRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VibmV0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3VibmV0cyA9IHRoaXMuX3N1Ym5ldHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl92cGNJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudnBjSWQgPSB0aGlzLl92cGNJZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZGVidWlsZFByb2plY3RWcGNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VibmV0cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZwY0lkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWUuc2VjdXJpdHlHcm91cElkcztcbiAgICAgIHRoaXMuX3N1Ym5ldHMgPSB2YWx1ZS5zdWJuZXRzO1xuICAgICAgdGhpcy5fdnBjSWQgPSB2YWx1ZS52cGNJZDtcbiAgICB9XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIHN1Ym5ldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3VibmV0cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdWJuZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3VibmV0cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldHM7XG4gIH1cblxuICAvLyB2cGNfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdnBjSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZwY0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdnBjSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjSWQ7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29kZWJ1aWxkUHJvamVjdCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19jb2RlYnVpbGRfcHJvamVjdFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29kZWJ1aWxkUHJvamVjdENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvZGVidWlsZF9wcm9qZWN0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2JhZGdlRW5hYmxlZCA9IGNvbmZpZy5iYWRnZUVuYWJsZWQ7XG4gICAgdGhpcy5fYnVpbGRUaW1lb3V0ID0gY29uZmlnLmJ1aWxkVGltZW91dDtcbiAgICB0aGlzLl9jb25jdXJyZW50QnVpbGRMaW1pdCA9IGNvbmZpZy5jb25jdXJyZW50QnVpbGRMaW1pdDtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9lbmNyeXB0aW9uS2V5ID0gY29uZmlnLmVuY3J5cHRpb25LZXk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3F1ZXVlZFRpbWVvdXQgPSBjb25maWcucXVldWVkVGltZW91dDtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZSA9IGNvbmZpZy5zZXJ2aWNlUm9sZTtcbiAgICB0aGlzLl9zb3VyY2VWZXJzaW9uID0gY29uZmlnLnNvdXJjZVZlcnNpb247XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9hcnRpZmFjdHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hcnRpZmFjdHM7XG4gICAgdGhpcy5fYnVpbGRCYXRjaENvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmJ1aWxkQmF0Y2hDb25maWc7XG4gICAgdGhpcy5fY2FjaGUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jYWNoZTtcbiAgICB0aGlzLl9lbnZpcm9ubWVudC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmVudmlyb25tZW50O1xuICAgIHRoaXMuX2ZpbGVTeXN0ZW1Mb2NhdGlvbnMgPSBjb25maWcuZmlsZVN5c3RlbUxvY2F0aW9ucztcbiAgICB0aGlzLl9sb2dzQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcubG9nc0NvbmZpZztcbiAgICB0aGlzLl9zZWNvbmRhcnlBcnRpZmFjdHMgPSBjb25maWcuc2Vjb25kYXJ5QXJ0aWZhY3RzO1xuICAgIHRoaXMuX3NlY29uZGFyeVNvdXJjZXMgPSBjb25maWcuc2Vjb25kYXJ5U291cmNlcztcbiAgICB0aGlzLl9zb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zb3VyY2U7XG4gICAgdGhpcy5fdnBjQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcudnBjQ29uZmlnO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGJhZGdlX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmFkZ2VFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBiYWRnZUVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYmFkZ2VfZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJhZGdlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYmFkZ2VFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmFkZ2VFbmFibGVkKCkge1xuICAgIHRoaXMuX2JhZGdlRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmFkZ2VFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhZGdlRW5hYmxlZDtcbiAgfVxuXG4gIC8vIGJhZGdlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJhZGdlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYmFkZ2VfdXJsJyk7XG4gIH1cblxuICAvLyBidWlsZF90aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1aWxkVGltZW91dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYnVpbGRUaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYnVpbGRfdGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9idWlsZFRpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZFRpbWVvdXQoKSB7XG4gICAgdGhpcy5fYnVpbGRUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWlsZFRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRUaW1lb3V0O1xuICB9XG5cbiAgLy8gY29uY3VycmVudF9idWlsZF9saW1pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25jdXJyZW50QnVpbGRMaW1pdD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY29uY3VycmVudEJ1aWxkTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjb25jdXJyZW50X2J1aWxkX2xpbWl0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25jdXJyZW50QnVpbGRMaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY29uY3VycmVudEJ1aWxkTGltaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25jdXJyZW50QnVpbGRMaW1pdCgpIHtcbiAgICB0aGlzLl9jb25jdXJyZW50QnVpbGRMaW1pdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uY3VycmVudEJ1aWxkTGltaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uY3VycmVudEJ1aWxkTGltaXQ7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY3J5cHRpb25LZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25LZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmNyeXB0aW9uX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5jcnlwdGlvbktleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5jcnlwdGlvbktleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY3J5cHRpb25LZXkoKSB7XG4gICAgdGhpcy5fZW5jcnlwdGlvbktleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbktleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uS2V5O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcXVldWVkX3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcXVldWVkVGltZW91dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcXVldWVkVGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3F1ZXVlZF90aW1lb3V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBxdWV1ZWRUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9xdWV1ZWRUaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVldWVkVGltZW91dCgpIHtcbiAgICB0aGlzLl9xdWV1ZWRUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWV1ZWRUaW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlZFRpbWVvdXQ7XG4gIH1cblxuICAvLyBzZXJ2aWNlX3JvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VydmljZVJvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZpY2VSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZVJvbGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVJvbGU7XG4gIH1cblxuICAvLyBzb3VyY2VfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZVZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VWZXJzaW9uKCkge1xuICAgIHRoaXMuX3NvdXJjZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlVmVyc2lvbjtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBhcnRpZmFjdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXJ0aWZhY3RzID0gbmV3IENvZGVidWlsZFByb2plY3RBcnRpZmFjdHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYXJ0aWZhY3RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFydGlmYWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJ0aWZhY3RzO1xuICB9XG4gIHB1YmxpYyBwdXRBcnRpZmFjdHModmFsdWU6IENvZGVidWlsZFByb2plY3RBcnRpZmFjdHMpIHtcbiAgICB0aGlzLl9hcnRpZmFjdHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcnRpZmFjdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJ0aWZhY3RzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBidWlsZF9iYXRjaF9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVpbGRCYXRjaENvbmZpZyA9IG5ldyBDb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJidWlsZF9iYXRjaF9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYnVpbGRCYXRjaENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRCYXRjaENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0QnVpbGRCYXRjaENvbmZpZyh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdEJ1aWxkQmF0Y2hDb25maWcpIHtcbiAgICB0aGlzLl9idWlsZEJhdGNoQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZEJhdGNoQ29uZmlnKCkge1xuICAgIHRoaXMuX2J1aWxkQmF0Y2hDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVpbGRCYXRjaENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEJhdGNoQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBjYWNoZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoZSA9IG5ldyBDb2RlYnVpbGRQcm9qZWN0Q2FjaGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2FjaGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlO1xuICB9XG4gIHB1YmxpYyBwdXRDYWNoZSh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdENhY2hlKSB7XG4gICAgdGhpcy5fY2FjaGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhY2hlKCkge1xuICAgIHRoaXMuX2NhY2hlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhY2hlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBlbnZpcm9ubWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbnZpcm9ubWVudCA9IG5ldyBDb2RlYnVpbGRQcm9qZWN0RW52aXJvbm1lbnRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZW52aXJvbm1lbnRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50O1xuICB9XG4gIHB1YmxpYyBwdXRFbnZpcm9ubWVudCh2YWx1ZTogQ29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50KSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZmlsZV9zeXN0ZW1fbG9jYXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbGVTeXN0ZW1Mb2NhdGlvbnM/OiBDb2RlYnVpbGRQcm9qZWN0RmlsZVN5c3RlbUxvY2F0aW9uc1tdOyBcbiAgcHVibGljIGdldCBmaWxlU3lzdGVtTG9jYXRpb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWxlX3N5c3RlbV9sb2NhdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmaWxlU3lzdGVtTG9jYXRpb25zKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0RmlsZVN5c3RlbUxvY2F0aW9uc1tdKSB7XG4gICAgdGhpcy5fZmlsZVN5c3RlbUxvY2F0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbGVTeXN0ZW1Mb2NhdGlvbnMoKSB7XG4gICAgdGhpcy5fZmlsZVN5c3RlbUxvY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZVN5c3RlbUxvY2F0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlU3lzdGVtTG9jYXRpb25zO1xuICB9XG5cbiAgLy8gbG9nc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nc0NvbmZpZyA9IG5ldyBDb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsb2dzX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsb2dzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dzQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRMb2dzQ29uZmlnKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0TG9nc0NvbmZpZykge1xuICAgIHRoaXMuX2xvZ3NDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ3NDb25maWcoKSB7XG4gICAgdGhpcy5fbG9nc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dzQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ3NDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNlY29uZGFyeV9hcnRpZmFjdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2Vjb25kYXJ5QXJ0aWZhY3RzPzogQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeUFydGlmYWN0c1tdOyBcbiAgcHVibGljIGdldCBzZWNvbmRhcnlBcnRpZmFjdHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlY29uZGFyeV9hcnRpZmFjdHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzZWNvbmRhcnlBcnRpZmFjdHModmFsdWU6IENvZGVidWlsZFByb2plY3RTZWNvbmRhcnlBcnRpZmFjdHNbXSkge1xuICAgIHRoaXMuX3NlY29uZGFyeUFydGlmYWN0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY29uZGFyeUFydGlmYWN0cygpIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlBcnRpZmFjdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY29uZGFyeUFydGlmYWN0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNvbmRhcnlBcnRpZmFjdHM7XG4gIH1cblxuICAvLyBzZWNvbmRhcnlfc291cmNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWNvbmRhcnlTb3VyY2VzPzogQ29kZWJ1aWxkUHJvamVjdFNlY29uZGFyeVNvdXJjZXNbXTsgXG4gIHB1YmxpYyBnZXQgc2Vjb25kYXJ5U291cmNlcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2Vjb25kYXJ5X3NvdXJjZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzZWNvbmRhcnlTb3VyY2VzKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc1tdKSB7XG4gICAgdGhpcy5fc2Vjb25kYXJ5U291cmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY29uZGFyeVNvdXJjZXMoKSB7XG4gICAgdGhpcy5fc2Vjb25kYXJ5U291cmNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2Vjb25kYXJ5U291cmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNvbmRhcnlTb3VyY2VzO1xuICB9XG5cbiAgLy8gc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZSA9IG5ldyBDb2RlYnVpbGRQcm9qZWN0U291cmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNvdXJjZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0U291cmNlKHZhbHVlOiBDb2RlYnVpbGRQcm9qZWN0U291cmNlKSB7XG4gICAgdGhpcy5fc291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNDb25maWcgPSBuZXcgQ29kZWJ1aWxkUHJvamVjdFZwY0NvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ2cGNfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHZwY0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRWcGNDb25maWcodmFsdWU6IENvZGVidWlsZFByb2plY3RWcGNDb25maWcpIHtcbiAgICB0aGlzLl92cGNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY0NvbmZpZygpIHtcbiAgICB0aGlzLl92cGNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWRnZV9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYmFkZ2VFbmFibGVkKSxcbiAgICAgIGJ1aWxkX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2J1aWxkVGltZW91dCksXG4gICAgICBjb25jdXJyZW50X2J1aWxkX2xpbWl0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9jb25jdXJyZW50QnVpbGRMaW1pdCksXG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZW5jcnlwdGlvbl9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuY3J5cHRpb25LZXkpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBxdWV1ZWRfdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcXVldWVkVGltZW91dCksXG4gICAgICBzZXJ2aWNlX3JvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZpY2VSb2xlKSxcbiAgICAgIHNvdXJjZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VWZXJzaW9uKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgYXJ0aWZhY3RzOiBjb2RlYnVpbGRQcm9qZWN0QXJ0aWZhY3RzVG9UZXJyYWZvcm0odGhpcy5fYXJ0aWZhY3RzLmludGVybmFsVmFsdWUpLFxuICAgICAgYnVpbGRfYmF0Y2hfY29uZmlnOiBjb2RlYnVpbGRQcm9qZWN0QnVpbGRCYXRjaENvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2J1aWxkQmF0Y2hDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBjYWNoZTogY29kZWJ1aWxkUHJvamVjdENhY2hlVG9UZXJyYWZvcm0odGhpcy5fY2FjaGUuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBlbnZpcm9ubWVudDogY29kZWJ1aWxkUHJvamVjdEVudmlyb25tZW50VG9UZXJyYWZvcm0odGhpcy5fZW52aXJvbm1lbnQuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBmaWxlX3N5c3RlbV9sb2NhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY29kZWJ1aWxkUHJvamVjdEZpbGVTeXN0ZW1Mb2NhdGlvbnNUb1RlcnJhZm9ybSkodGhpcy5fZmlsZVN5c3RlbUxvY2F0aW9ucyksXG4gICAgICBsb2dzX2NvbmZpZzogY29kZWJ1aWxkUHJvamVjdExvZ3NDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9sb2dzQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgc2Vjb25kYXJ5X2FydGlmYWN0czogY2RrdGYubGlzdE1hcHBlcihjb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5QXJ0aWZhY3RzVG9UZXJyYWZvcm0pKHRoaXMuX3NlY29uZGFyeUFydGlmYWN0cyksXG4gICAgICBzZWNvbmRhcnlfc291cmNlczogY2RrdGYubGlzdE1hcHBlcihjb2RlYnVpbGRQcm9qZWN0U2Vjb25kYXJ5U291cmNlc1RvVGVycmFmb3JtKSh0aGlzLl9zZWNvbmRhcnlTb3VyY2VzKSxcbiAgICAgIHNvdXJjZTogY29kZWJ1aWxkUHJvamVjdFNvdXJjZVRvVGVycmFmb3JtKHRoaXMuX3NvdXJjZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHZwY19jb25maWc6IGNvZGVidWlsZFByb2plY3RWcGNDb25maWdUb1RlcnJhZm9ybSh0aGlzLl92cGNDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19