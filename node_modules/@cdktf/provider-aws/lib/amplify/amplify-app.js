"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplifyApp = exports.amplifyAppCustomRuleToTerraform = exports.AmplifyAppAutoBranchCreationConfigOutputReference = exports.amplifyAppAutoBranchCreationConfigToTerraform = exports.AmplifyAppProductionBranch = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class AmplifyAppProductionBranch extends cdktf.ComplexComputedList {
    // branch_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get branchName() {
        return this.getStringAttribute('branch_name');
    }
    // last_deploy_time - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastDeployTime() {
        return this.getStringAttribute('last_deploy_time');
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    // thumbnail_url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get thumbnailUrl() {
        return this.getStringAttribute('thumbnail_url');
    }
}
exports.AmplifyAppProductionBranch = AmplifyAppProductionBranch;
_a = JSII_RTTI_SYMBOL_1;
AmplifyAppProductionBranch[_a] = { fqn: "@cdktf/provider-aws.amplify.AmplifyAppProductionBranch", version: "3.0.1" };
function amplifyAppAutoBranchCreationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        basic_auth_credentials: cdktf.stringToTerraform(struct.basicAuthCredentials),
        build_spec: cdktf.stringToTerraform(struct.buildSpec),
        enable_auto_build: cdktf.booleanToTerraform(struct.enableAutoBuild),
        enable_basic_auth: cdktf.booleanToTerraform(struct.enableBasicAuth),
        enable_performance_mode: cdktf.booleanToTerraform(struct.enablePerformanceMode),
        enable_pull_request_preview: cdktf.booleanToTerraform(struct.enablePullRequestPreview),
        environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.environmentVariables),
        framework: cdktf.stringToTerraform(struct.framework),
        pull_request_environment_name: cdktf.stringToTerraform(struct.pullRequestEnvironmentName),
        stage: cdktf.stringToTerraform(struct.stage),
    };
}
exports.amplifyAppAutoBranchCreationConfigToTerraform = amplifyAppAutoBranchCreationConfigToTerraform;
/**
 * @stability stable
 */
class AmplifyAppAutoBranchCreationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._basicAuthCredentials) {
            hasAnyValues = true;
            internalValueResult.basicAuthCredentials = this._basicAuthCredentials;
        }
        if (this._buildSpec) {
            hasAnyValues = true;
            internalValueResult.buildSpec = this._buildSpec;
        }
        if (this._enableAutoBuild) {
            hasAnyValues = true;
            internalValueResult.enableAutoBuild = this._enableAutoBuild;
        }
        if (this._enableBasicAuth) {
            hasAnyValues = true;
            internalValueResult.enableBasicAuth = this._enableBasicAuth;
        }
        if (this._enablePerformanceMode) {
            hasAnyValues = true;
            internalValueResult.enablePerformanceMode = this._enablePerformanceMode;
        }
        if (this._enablePullRequestPreview) {
            hasAnyValues = true;
            internalValueResult.enablePullRequestPreview = this._enablePullRequestPreview;
        }
        if (this._environmentVariables) {
            hasAnyValues = true;
            internalValueResult.environmentVariables = this._environmentVariables;
        }
        if (this._framework) {
            hasAnyValues = true;
            internalValueResult.framework = this._framework;
        }
        if (this._pullRequestEnvironmentName) {
            hasAnyValues = true;
            internalValueResult.pullRequestEnvironmentName = this._pullRequestEnvironmentName;
        }
        if (this._stage) {
            hasAnyValues = true;
            internalValueResult.stage = this._stage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._basicAuthCredentials = undefined;
            this._buildSpec = undefined;
            this._enableAutoBuild = undefined;
            this._enableBasicAuth = undefined;
            this._enablePerformanceMode = undefined;
            this._enablePullRequestPreview = undefined;
            this._environmentVariables = undefined;
            this._framework = undefined;
            this._pullRequestEnvironmentName = undefined;
            this._stage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._basicAuthCredentials = value.basicAuthCredentials;
            this._buildSpec = value.buildSpec;
            this._enableAutoBuild = value.enableAutoBuild;
            this._enableBasicAuth = value.enableBasicAuth;
            this._enablePerformanceMode = value.enablePerformanceMode;
            this._enablePullRequestPreview = value.enablePullRequestPreview;
            this._environmentVariables = value.environmentVariables;
            this._framework = value.framework;
            this._pullRequestEnvironmentName = value.pullRequestEnvironmentName;
            this._stage = value.stage;
        }
    }
    /**
     * @stability stable
     */
    get basicAuthCredentials() {
        return this.getStringAttribute('basic_auth_credentials');
    }
    /**
     * @stability stable
     */
    set basicAuthCredentials(value) {
        this._basicAuthCredentials = value;
    }
    /**
     * @stability stable
     */
    resetBasicAuthCredentials() {
        this._basicAuthCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get basicAuthCredentialsInput() {
        return this._basicAuthCredentials;
    }
    /**
     * @stability stable
     */
    get buildSpec() {
        return this.getStringAttribute('build_spec');
    }
    /**
     * @stability stable
     */
    set buildSpec(value) {
        this._buildSpec = value;
    }
    /**
     * @stability stable
     */
    resetBuildSpec() {
        this._buildSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get buildSpecInput() {
        return this._buildSpec;
    }
    /**
     * @stability stable
     */
    get enableAutoBuild() {
        return this.getBooleanAttribute('enable_auto_build');
    }
    /**
     * @stability stable
     */
    set enableAutoBuild(value) {
        this._enableAutoBuild = value;
    }
    /**
     * @stability stable
     */
    resetEnableAutoBuild() {
        this._enableAutoBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableAutoBuildInput() {
        return this._enableAutoBuild;
    }
    /**
     * @stability stable
     */
    get enableBasicAuth() {
        return this.getBooleanAttribute('enable_basic_auth');
    }
    /**
     * @stability stable
     */
    set enableBasicAuth(value) {
        this._enableBasicAuth = value;
    }
    /**
     * @stability stable
     */
    resetEnableBasicAuth() {
        this._enableBasicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableBasicAuthInput() {
        return this._enableBasicAuth;
    }
    /**
     * @stability stable
     */
    get enablePerformanceMode() {
        return this.getBooleanAttribute('enable_performance_mode');
    }
    /**
     * @stability stable
     */
    set enablePerformanceMode(value) {
        this._enablePerformanceMode = value;
    }
    /**
     * @stability stable
     */
    resetEnablePerformanceMode() {
        this._enablePerformanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enablePerformanceModeInput() {
        return this._enablePerformanceMode;
    }
    /**
     * @stability stable
     */
    get enablePullRequestPreview() {
        return this.getBooleanAttribute('enable_pull_request_preview');
    }
    /**
     * @stability stable
     */
    set enablePullRequestPreview(value) {
        this._enablePullRequestPreview = value;
    }
    /**
     * @stability stable
     */
    resetEnablePullRequestPreview() {
        this._enablePullRequestPreview = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enablePullRequestPreviewInput() {
        return this._enablePullRequestPreview;
    }
    /**
     * @stability stable
     */
    get environmentVariables() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('environment_variables');
    }
    /**
     * @stability stable
     */
    set environmentVariables(value) {
        this._environmentVariables = value;
    }
    /**
     * @stability stable
     */
    resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get environmentVariablesInput() {
        return this._environmentVariables;
    }
    /**
     * @stability stable
     */
    get framework() {
        return this.getStringAttribute('framework');
    }
    /**
     * @stability stable
     */
    set framework(value) {
        this._framework = value;
    }
    /**
     * @stability stable
     */
    resetFramework() {
        this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get frameworkInput() {
        return this._framework;
    }
    /**
     * @stability stable
     */
    get pullRequestEnvironmentName() {
        return this.getStringAttribute('pull_request_environment_name');
    }
    /**
     * @stability stable
     */
    set pullRequestEnvironmentName(value) {
        this._pullRequestEnvironmentName = value;
    }
    /**
     * @stability stable
     */
    resetPullRequestEnvironmentName() {
        this._pullRequestEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pullRequestEnvironmentNameInput() {
        return this._pullRequestEnvironmentName;
    }
    /**
     * @stability stable
     */
    get stage() {
        return this.getStringAttribute('stage');
    }
    /**
     * @stability stable
     */
    set stage(value) {
        this._stage = value;
    }
    /**
     * @stability stable
     */
    resetStage() {
        this._stage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stageInput() {
        return this._stage;
    }
}
exports.AmplifyAppAutoBranchCreationConfigOutputReference = AmplifyAppAutoBranchCreationConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AmplifyAppAutoBranchCreationConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.amplify.AmplifyAppAutoBranchCreationConfigOutputReference", version: "3.0.1" };
function amplifyAppCustomRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        source: cdktf.stringToTerraform(struct.source),
        status: cdktf.stringToTerraform(struct.status),
        target: cdktf.stringToTerraform(struct.target),
    };
}
exports.amplifyAppCustomRuleToTerraform = amplifyAppCustomRuleToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app}.
 *
 * @stability stable
 */
class AmplifyApp extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_amplify_app',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // auto_branch_creation_config - computed: false, optional: true, required: false
        this._autoBranchCreationConfig = new AmplifyAppAutoBranchCreationConfigOutputReference(this, "auto_branch_creation_config", true);
        this._accessToken = config.accessToken;
        this._autoBranchCreationPatterns = config.autoBranchCreationPatterns;
        this._basicAuthCredentials = config.basicAuthCredentials;
        this._buildSpec = config.buildSpec;
        this._description = config.description;
        this._enableAutoBranchCreation = config.enableAutoBranchCreation;
        this._enableBasicAuth = config.enableBasicAuth;
        this._enableBranchAutoBuild = config.enableBranchAutoBuild;
        this._enableBranchAutoDeletion = config.enableBranchAutoDeletion;
        this._environmentVariables = config.environmentVariables;
        this._iamServiceRoleArn = config.iamServiceRoleArn;
        this._name = config.name;
        this._oauthToken = config.oauthToken;
        this._platform = config.platform;
        this._repository = config.repository;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._autoBranchCreationConfig.internalValue = config.autoBranchCreationConfig;
        this._customRule = config.customRule;
    }
    /**
     * @stability stable
     */
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    /**
     * @stability stable
     */
    set accessToken(value) {
        this._accessToken = value;
    }
    /**
     * @stability stable
     */
    resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessTokenInput() {
        return this._accessToken;
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
    get autoBranchCreationPatterns() {
        return this.getListAttribute('auto_branch_creation_patterns');
    }
    /**
     * @stability stable
     */
    set autoBranchCreationPatterns(value) {
        this._autoBranchCreationPatterns = value;
    }
    /**
     * @stability stable
     */
    resetAutoBranchCreationPatterns() {
        this._autoBranchCreationPatterns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoBranchCreationPatternsInput() {
        return this._autoBranchCreationPatterns;
    }
    /**
     * @stability stable
     */
    get basicAuthCredentials() {
        return this.getStringAttribute('basic_auth_credentials');
    }
    /**
     * @stability stable
     */
    set basicAuthCredentials(value) {
        this._basicAuthCredentials = value;
    }
    /**
     * @stability stable
     */
    resetBasicAuthCredentials() {
        this._basicAuthCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get basicAuthCredentialsInput() {
        return this._basicAuthCredentials;
    }
    /**
     * @stability stable
     */
    get buildSpec() {
        return this.getStringAttribute('build_spec');
    }
    /**
     * @stability stable
     */
    set buildSpec(value) {
        this._buildSpec = value;
    }
    /**
     * @stability stable
     */
    resetBuildSpec() {
        this._buildSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get buildSpecInput() {
        return this._buildSpec;
    }
    // default_domain - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultDomain() {
        return this.getStringAttribute('default_domain');
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
    get enableAutoBranchCreation() {
        return this.getBooleanAttribute('enable_auto_branch_creation');
    }
    /**
     * @stability stable
     */
    set enableAutoBranchCreation(value) {
        this._enableAutoBranchCreation = value;
    }
    /**
     * @stability stable
     */
    resetEnableAutoBranchCreation() {
        this._enableAutoBranchCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableAutoBranchCreationInput() {
        return this._enableAutoBranchCreation;
    }
    /**
     * @stability stable
     */
    get enableBasicAuth() {
        return this.getBooleanAttribute('enable_basic_auth');
    }
    /**
     * @stability stable
     */
    set enableBasicAuth(value) {
        this._enableBasicAuth = value;
    }
    /**
     * @stability stable
     */
    resetEnableBasicAuth() {
        this._enableBasicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableBasicAuthInput() {
        return this._enableBasicAuth;
    }
    /**
     * @stability stable
     */
    get enableBranchAutoBuild() {
        return this.getBooleanAttribute('enable_branch_auto_build');
    }
    /**
     * @stability stable
     */
    set enableBranchAutoBuild(value) {
        this._enableBranchAutoBuild = value;
    }
    /**
     * @stability stable
     */
    resetEnableBranchAutoBuild() {
        this._enableBranchAutoBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableBranchAutoBuildInput() {
        return this._enableBranchAutoBuild;
    }
    /**
     * @stability stable
     */
    get enableBranchAutoDeletion() {
        return this.getBooleanAttribute('enable_branch_auto_deletion');
    }
    /**
     * @stability stable
     */
    set enableBranchAutoDeletion(value) {
        this._enableBranchAutoDeletion = value;
    }
    /**
     * @stability stable
     */
    resetEnableBranchAutoDeletion() {
        this._enableBranchAutoDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableBranchAutoDeletionInput() {
        return this._enableBranchAutoDeletion;
    }
    /**
     * @stability stable
     */
    get environmentVariables() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('environment_variables');
    }
    /**
     * @stability stable
     */
    set environmentVariables(value) {
        this._environmentVariables = value;
    }
    /**
     * @stability stable
     */
    resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get environmentVariablesInput() {
        return this._environmentVariables;
    }
    /**
     * @stability stable
     */
    get iamServiceRoleArn() {
        return this.getStringAttribute('iam_service_role_arn');
    }
    /**
     * @stability stable
     */
    set iamServiceRoleArn(value) {
        this._iamServiceRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetIamServiceRoleArn() {
        this._iamServiceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamServiceRoleArnInput() {
        return this._iamServiceRoleArn;
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
    get oauthToken() {
        return this.getStringAttribute('oauth_token');
    }
    /**
     * @stability stable
     */
    set oauthToken(value) {
        this._oauthToken = value;
    }
    /**
     * @stability stable
     */
    resetOauthToken() {
        this._oauthToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get oauthTokenInput() {
        return this._oauthToken;
    }
    /**
     * @stability stable
     */
    get platform() {
        return this.getStringAttribute('platform');
    }
    /**
     * @stability stable
     */
    set platform(value) {
        this._platform = value;
    }
    /**
     * @stability stable
     */
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get platformInput() {
        return this._platform;
    }
    // production_branch - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    productionBranch(index) {
        return new AmplifyAppProductionBranch(this, 'production_branch', index);
    }
    /**
     * @stability stable
     */
    get repository() {
        return this.getStringAttribute('repository');
    }
    /**
     * @stability stable
     */
    set repository(value) {
        this._repository = value;
    }
    /**
     * @stability stable
     */
    resetRepository() {
        this._repository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get repositoryInput() {
        return this._repository;
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
    get autoBranchCreationConfig() {
        return this._autoBranchCreationConfig;
    }
    /**
     * @stability stable
     */
    putAutoBranchCreationConfig(value) {
        this._autoBranchCreationConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAutoBranchCreationConfig() {
        this._autoBranchCreationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoBranchCreationConfigInput() {
        return this._autoBranchCreationConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get customRule() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('custom_rule');
    }
    /**
     * @stability stable
     */
    set customRule(value) {
        this._customRule = value;
    }
    /**
     * @stability stable
     */
    resetCustomRule() {
        this._customRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customRuleInput() {
        return this._customRule;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            access_token: cdktf.stringToTerraform(this._accessToken),
            auto_branch_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._autoBranchCreationPatterns),
            basic_auth_credentials: cdktf.stringToTerraform(this._basicAuthCredentials),
            build_spec: cdktf.stringToTerraform(this._buildSpec),
            description: cdktf.stringToTerraform(this._description),
            enable_auto_branch_creation: cdktf.booleanToTerraform(this._enableAutoBranchCreation),
            enable_basic_auth: cdktf.booleanToTerraform(this._enableBasicAuth),
            enable_branch_auto_build: cdktf.booleanToTerraform(this._enableBranchAutoBuild),
            enable_branch_auto_deletion: cdktf.booleanToTerraform(this._enableBranchAutoDeletion),
            environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
            iam_service_role_arn: cdktf.stringToTerraform(this._iamServiceRoleArn),
            name: cdktf.stringToTerraform(this._name),
            oauth_token: cdktf.stringToTerraform(this._oauthToken),
            platform: cdktf.stringToTerraform(this._platform),
            repository: cdktf.stringToTerraform(this._repository),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            auto_branch_creation_config: amplifyAppAutoBranchCreationConfigToTerraform(this._autoBranchCreationConfig.internalValue),
            custom_rule: cdktf.listMapper(amplifyAppCustomRuleToTerraform)(this._customRule),
        };
    }
}
exports.AmplifyApp = AmplifyApp;
_c = JSII_RTTI_SYMBOL_1;
AmplifyApp[_c] = { fqn: "@cdktf/provider-aws.amplify.AmplifyApp", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AmplifyApp.tfResourceType = "aws_amplify_app";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbGlmeS1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYW1wbGlmeS9hbXBsaWZ5LWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQTJDL0IsTUFBYSwwQkFBMkIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXZFLGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHNFQUFzRTs7OztJQUN0RSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNERBQTREOzs7O0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxtRUFBbUU7Ozs7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O0FBcEJILGdFQXFCQzs7O0FBd0JELFNBQWdCLDZDQUE2QyxDQUFDLE1BQStGO0lBQzNKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQs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Ii8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEFtcGxpZnlBcHBDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b0JyYW5jaENyZWF0aW9uUGF0dGVybnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhc2ljQXV0aENyZWRlbnRpYWxzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVpbGRTcGVjPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVBdXRvQnJhbmNoQ3JlYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUJhc2ljQXV0aD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVCcmFuY2hBdXRvQnVpbGQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlQnJhbmNoQXV0b0RlbGV0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVudmlyb25tZW50VmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpYW1TZXJ2aWNlUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb2F1dGhUb2tlbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGxhdGZvcm0/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvc2l0b3J5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnPzogQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tUnVsZT86IEFtcGxpZnlBcHBDdXN0b21SdWxlW107XG59XG5leHBvcnQgY2xhc3MgQW1wbGlmeUFwcFByb2R1Y3Rpb25CcmFuY2ggZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBicmFuY2hfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJyYW5jaE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdicmFuY2hfbmFtZScpO1xuICB9XG5cbiAgLy8gbGFzdF9kZXBsb3lfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3REZXBsb3lUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9kZXBsb3lfdGltZScpO1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyB0aHVtYm5haWxfdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGh1bWJuYWlsVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGh1bWJuYWlsX3VybCcpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFtcGxpZnlBcHBBdXRvQnJhbmNoQ3JlYXRpb25Db25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmFzaWNBdXRoQ3JlZGVudGlhbHM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWlsZFNwZWM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUF1dG9CdWlsZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlQmFzaWNBdXRoPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVQZXJmb3JtYW5jZU1vZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVudmlyb25tZW50VmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZyYW1ld29yaz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHVsbFJlcXVlc3RFbnZpcm9ubWVudE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFtcGxpZnlBcHBBdXRvQnJhbmNoQ3JlYXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgfCBBbXBsaWZ5QXBwQXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYmFzaWNfYXV0aF9jcmVkZW50aWFsczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iYXNpY0F1dGhDcmVkZW50aWFscyksXG4gICAgYnVpbGRfc3BlYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWlsZFNwZWMpLFxuICAgIGVuYWJsZV9hdXRvX2J1aWxkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVBdXRvQnVpbGQpLFxuICAgIGVuYWJsZV9iYXNpY19hdXRoOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVCYXNpY0F1dGgpLFxuICAgIGVuYWJsZV9wZXJmb3JtYW5jZV9tb2RlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVQZXJmb3JtYW5jZU1vZGUpLFxuICAgIGVuYWJsZV9wdWxsX3JlcXVlc3RfcHJldmlldzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3KSxcbiAgICBlbnZpcm9ubWVudF92YXJpYWJsZXM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEuZW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgIGZyYW1ld29yazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mcmFtZXdvcmspLFxuICAgIHB1bGxfcmVxdWVzdF9lbnZpcm9ubWVudF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnB1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lKSxcbiAgICBzdGFnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFtcGxpZnlBcHBBdXRvQnJhbmNoQ3JlYXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYmFzaWNBdXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJhc2ljQXV0aENyZWRlbnRpYWxzID0gdGhpcy5fYmFzaWNBdXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWlsZFNwZWMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1aWxkU3BlYyA9IHRoaXMuX2J1aWxkU3BlYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuYWJsZUF1dG9CdWlsZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlQXV0b0J1aWxkID0gdGhpcy5fZW5hYmxlQXV0b0J1aWxkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5hYmxlQmFzaWNBdXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVCYXNpY0F1dGggPSB0aGlzLl9lbmFibGVCYXNpY0F1dGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmFibGVQZXJmb3JtYW5jZU1vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZVBlcmZvcm1hbmNlTW9kZSA9IHRoaXMuX2VuYWJsZVBlcmZvcm1hbmNlTW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuYWJsZVB1bGxSZXF1ZXN0UHJldmlldykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3ID0gdGhpcy5fZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVudmlyb25tZW50VmFyaWFibGVzID0gdGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9mcmFtZXdvcmspIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZyYW1ld29yayA9IHRoaXMuX2ZyYW1ld29yaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3B1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wdWxsUmVxdWVzdEVudmlyb25tZW50TmFtZSA9IHRoaXMuX3B1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YWdlID0gdGhpcy5fc3RhZ2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBbXBsaWZ5QXBwQXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmFzaWNBdXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWlsZFNwZWMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVBdXRvQnVpbGQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVCYXNpY0F1dGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVQZXJmb3JtYW5jZU1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVQdWxsUmVxdWVzdFByZXZpZXcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbnZpcm9ubWVudFZhcmlhYmxlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZyYW1ld29yayA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3B1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Jhc2ljQXV0aENyZWRlbnRpYWxzID0gdmFsdWUuYmFzaWNBdXRoQ3JlZGVudGlhbHM7XG4gICAgICB0aGlzLl9idWlsZFNwZWMgPSB2YWx1ZS5idWlsZFNwZWM7XG4gICAgICB0aGlzLl9lbmFibGVBdXRvQnVpbGQgPSB2YWx1ZS5lbmFibGVBdXRvQnVpbGQ7XG4gICAgICB0aGlzLl9lbmFibGVCYXNpY0F1dGggPSB2YWx1ZS5lbmFibGVCYXNpY0F1dGg7XG4gICAgICB0aGlzLl9lbmFibGVQZXJmb3JtYW5jZU1vZGUgPSB2YWx1ZS5lbmFibGVQZXJmb3JtYW5jZU1vZGU7XG4gICAgICB0aGlzLl9lbmFibGVQdWxsUmVxdWVzdFByZXZpZXcgPSB2YWx1ZS5lbmFibGVQdWxsUmVxdWVzdFByZXZpZXc7XG4gICAgICB0aGlzLl9lbnZpcm9ubWVudFZhcmlhYmxlcyA9IHZhbHVlLmVudmlyb25tZW50VmFyaWFibGVzO1xuICAgICAgdGhpcy5fZnJhbWV3b3JrID0gdmFsdWUuZnJhbWV3b3JrO1xuICAgICAgdGhpcy5fcHVsbFJlcXVlc3RFbnZpcm9ubWVudE5hbWUgPSB2YWx1ZS5wdWxsUmVxdWVzdEVudmlyb25tZW50TmFtZTtcbiAgICAgIHRoaXMuX3N0YWdlID0gdmFsdWUuc3RhZ2U7XG4gICAgfVxuICB9XG5cbiAgLy8gYmFzaWNfYXV0aF9jcmVkZW50aWFscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iYXNpY0F1dGhDcmVkZW50aWFscz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYmFzaWNBdXRoQ3JlZGVudGlhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiYXNpY19hdXRoX2NyZWRlbnRpYWxzJyk7XG4gIH1cbiAgcHVibGljIHNldCBiYXNpY0F1dGhDcmVkZW50aWFscyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmFzaWNBdXRoQ3JlZGVudGlhbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYXNpY0F1dGhDcmVkZW50aWFscygpIHtcbiAgICB0aGlzLl9iYXNpY0F1dGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmFzaWNBdXRoQ3JlZGVudGlhbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzaWNBdXRoQ3JlZGVudGlhbHM7XG4gIH1cblxuICAvLyBidWlsZF9zcGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1aWxkU3BlYz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVpbGRTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVpbGRfc3BlYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRTcGVjKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWlsZFNwZWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZFNwZWMoKSB7XG4gICAgdGhpcy5fYnVpbGRTcGVjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWlsZFNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRTcGVjO1xuICB9XG5cbiAgLy8gZW5hYmxlX2F1dG9fYnVpbGQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlQXV0b0J1aWxkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVBdXRvQnVpbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2F1dG9fYnVpbGQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVBdXRvQnVpbGQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUF1dG9CdWlsZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUF1dG9CdWlsZCgpIHtcbiAgICB0aGlzLl9lbmFibGVBdXRvQnVpbGQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUF1dG9CdWlsZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVBdXRvQnVpbGQ7XG4gIH1cblxuICAvLyBlbmFibGVfYmFzaWNfYXV0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVCYXNpY0F1dGg/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUJhc2ljQXV0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfYmFzaWNfYXV0aCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUJhc2ljQXV0aCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlQmFzaWNBdXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQmFzaWNBdXRoKCkge1xuICAgIHRoaXMuX2VuYWJsZUJhc2ljQXV0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlQmFzaWNBdXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUJhc2ljQXV0aDtcbiAgfVxuXG4gIC8vIGVuYWJsZV9wZXJmb3JtYW5jZV9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZVBlcmZvcm1hbmNlTW9kZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlUGVyZm9ybWFuY2VNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9wZXJmb3JtYW5jZV9tb2RlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlUGVyZm9ybWFuY2VNb2RlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVQZXJmb3JtYW5jZU1vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVQZXJmb3JtYW5jZU1vZGUoKSB7XG4gICAgdGhpcy5fZW5hYmxlUGVyZm9ybWFuY2VNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVQZXJmb3JtYW5jZU1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlUGVyZm9ybWFuY2VNb2RlO1xuICB9XG5cbiAgLy8gZW5hYmxlX3B1bGxfcmVxdWVzdF9wcmV2aWV3IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZVB1bGxSZXF1ZXN0UHJldmlldz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9wdWxsX3JlcXVlc3RfcHJldmlldycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZVB1bGxSZXF1ZXN0UHJldmlldyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3KCkge1xuICAgIHRoaXMuX2VuYWJsZVB1bGxSZXF1ZXN0UHJldmlldyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlUHVsbFJlcXVlc3RQcmV2aWV3SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVB1bGxSZXF1ZXN0UHJldmlldztcbiAgfVxuXG4gIC8vIGVudmlyb25tZW50X3ZhcmlhYmxlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbnZpcm9ubWVudFZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRWYXJpYWJsZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vudmlyb25tZW50X3ZhcmlhYmxlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVudmlyb25tZW50VmFyaWFibGVzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbnZpcm9ubWVudFZhcmlhYmxlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVudmlyb25tZW50VmFyaWFibGVzKCkge1xuICAgIHRoaXMuX2Vudmlyb25tZW50VmFyaWFibGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudFZhcmlhYmxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudFZhcmlhYmxlcztcbiAgfVxuXG4gIC8vIGZyYW1ld29yayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mcmFtZXdvcms/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZyYW1ld29yaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZyYW1ld29yaycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJhbWV3b3JrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mcmFtZXdvcmsgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGcmFtZXdvcmsoKSB7XG4gICAgdGhpcy5fZnJhbWV3b3JrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmcmFtZXdvcmtJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhbWV3b3JrO1xuICB9XG5cbiAgLy8gcHVsbF9yZXF1ZXN0X2Vudmlyb25tZW50X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHVsbFJlcXVlc3RFbnZpcm9ubWVudE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHB1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHVsbF9yZXF1ZXN0X2Vudmlyb25tZW50X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHB1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wdWxsUmVxdWVzdEVudmlyb25tZW50TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFB1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lKCkge1xuICAgIHRoaXMuX3B1bGxSZXF1ZXN0RW52aXJvbm1lbnROYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWxsUmVxdWVzdEVudmlyb25tZW50TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWxsUmVxdWVzdEVudmlyb25tZW50TmFtZTtcbiAgfVxuXG4gIC8vIHN0YWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFnZSgpIHtcbiAgICB0aGlzLl9zdGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQW1wbGlmeUFwcEN1c3RvbVJ1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmRpdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbXBsaWZ5QXBwQ3VzdG9tUnVsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFtcGxpZnlBcHBDdXN0b21SdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29uZGl0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmRpdGlvbiksXG4gICAgc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZSksXG4gICAgc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gICAgdGFyZ2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldCksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBbXBsaWZ5QXBwIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2FtcGxpZnlfYXBwXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBbXBsaWZ5QXBwQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYW1wbGlmeV9hcHAnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XG4gICAgdGhpcy5fYXV0b0JyYW5jaENyZWF0aW9uUGF0dGVybnMgPSBjb25maWcuYXV0b0JyYW5jaENyZWF0aW9uUGF0dGVybnM7XG4gICAgdGhpcy5fYmFzaWNBdXRoQ3JlZGVudGlhbHMgPSBjb25maWcuYmFzaWNBdXRoQ3JlZGVudGlhbHM7XG4gICAgdGhpcy5fYnVpbGRTcGVjID0gY29uZmlnLmJ1aWxkU3BlYztcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9lbmFibGVBdXRvQnJhbmNoQ3JlYXRpb24gPSBjb25maWcuZW5hYmxlQXV0b0JyYW5jaENyZWF0aW9uO1xuICAgIHRoaXMuX2VuYWJsZUJhc2ljQXV0aCA9IGNvbmZpZy5lbmFibGVCYXNpY0F1dGg7XG4gICAgdGhpcy5fZW5hYmxlQnJhbmNoQXV0b0J1aWxkID0gY29uZmlnLmVuYWJsZUJyYW5jaEF1dG9CdWlsZDtcbiAgICB0aGlzLl9lbmFibGVCcmFuY2hBdXRvRGVsZXRpb24gPSBjb25maWcuZW5hYmxlQnJhbmNoQXV0b0RlbGV0aW9uO1xuICAgIHRoaXMuX2Vudmlyb25tZW50VmFyaWFibGVzID0gY29uZmlnLmVudmlyb25tZW50VmFyaWFibGVzO1xuICAgIHRoaXMuX2lhbVNlcnZpY2VSb2xlQXJuID0gY29uZmlnLmlhbVNlcnZpY2VSb2xlQXJuO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9vYXV0aFRva2VuID0gY29uZmlnLm9hdXRoVG9rZW47XG4gICAgdGhpcy5fcGxhdGZvcm0gPSBjb25maWcucGxhdGZvcm07XG4gICAgdGhpcy5fcmVwb3NpdG9yeSA9IGNvbmZpZy5yZXBvc2l0b3J5O1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnO1xuICAgIHRoaXMuX2N1c3RvbVJ1bGUgPSBjb25maWcuY3VzdG9tUnVsZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjZXNzX3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1Rva2VuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2Vzc190b2tlbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXNzVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdXRvX2JyYW5jaF9jcmVhdGlvbl9wYXR0ZXJucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvQnJhbmNoQ3JlYXRpb25QYXR0ZXJucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhdXRvQnJhbmNoQ3JlYXRpb25QYXR0ZXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhdXRvX2JyYW5jaF9jcmVhdGlvbl9wYXR0ZXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b0JyYW5jaENyZWF0aW9uUGF0dGVybnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXV0b0JyYW5jaENyZWF0aW9uUGF0dGVybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvQnJhbmNoQ3JlYXRpb25QYXR0ZXJucygpIHtcbiAgICB0aGlzLl9hdXRvQnJhbmNoQ3JlYXRpb25QYXR0ZXJucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b0JyYW5jaENyZWF0aW9uUGF0dGVybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0JyYW5jaENyZWF0aW9uUGF0dGVybnM7XG4gIH1cblxuICAvLyBiYXNpY19hdXRoX2NyZWRlbnRpYWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jhc2ljQXV0aENyZWRlbnRpYWxzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBiYXNpY0F1dGhDcmVkZW50aWFscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Jhc2ljX2F1dGhfY3JlZGVudGlhbHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJhc2ljQXV0aENyZWRlbnRpYWxzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iYXNpY0F1dGhDcmVkZW50aWFscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJhc2ljQXV0aENyZWRlbnRpYWxzKCkge1xuICAgIHRoaXMuX2Jhc2ljQXV0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXNpY0F1dGhDcmVkZW50aWFsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYXNpY0F1dGhDcmVkZW50aWFscztcbiAgfVxuXG4gIC8vIGJ1aWxkX3NwZWMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWlsZFNwZWM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1aWxkU3BlYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1aWxkX3NwZWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1aWxkU3BlYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVpbGRTcGVjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVpbGRTcGVjKCkge1xuICAgIHRoaXMuX2J1aWxkU3BlYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVpbGRTcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkU3BlYztcbiAgfVxuXG4gIC8vIGRlZmF1bHRfZG9tYWluIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVmYXVsdERvbWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfZG9tYWluJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gZW5hYmxlX2F1dG9fYnJhbmNoX2NyZWF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUF1dG9CcmFuY2hDcmVhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQXV0b0JyYW5jaENyZWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9hdXRvX2JyYW5jaF9jcmVhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUF1dG9CcmFuY2hDcmVhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlQXV0b0JyYW5jaENyZWF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQXV0b0JyYW5jaENyZWF0aW9uKCkge1xuICAgIHRoaXMuX2VuYWJsZUF1dG9CcmFuY2hDcmVhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlQXV0b0JyYW5jaENyZWF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUF1dG9CcmFuY2hDcmVhdGlvbjtcbiAgfVxuXG4gIC8vIGVuYWJsZV9iYXNpY19hdXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUJhc2ljQXV0aD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQmFzaWNBdXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9iYXNpY19hdXRoJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlQmFzaWNBdXRoKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVCYXNpY0F1dGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVCYXNpY0F1dGgoKSB7XG4gICAgdGhpcy5fZW5hYmxlQmFzaWNBdXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVCYXNpY0F1dGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlQmFzaWNBdXRoO1xuICB9XG5cbiAgLy8gZW5hYmxlX2JyYW5jaF9hdXRvX2J1aWxkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUJyYW5jaEF1dG9CdWlsZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQnJhbmNoQXV0b0J1aWxkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9icmFuY2hfYXV0b19idWlsZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUJyYW5jaEF1dG9CdWlsZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlQnJhbmNoQXV0b0J1aWxkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQnJhbmNoQXV0b0J1aWxkKCkge1xuICAgIHRoaXMuX2VuYWJsZUJyYW5jaEF1dG9CdWlsZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlQnJhbmNoQXV0b0J1aWxkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUJyYW5jaEF1dG9CdWlsZDtcbiAgfVxuXG4gIC8vIGVuYWJsZV9icmFuY2hfYXV0b19kZWxldGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVCcmFuY2hBdXRvRGVsZXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUJyYW5jaEF1dG9EZWxldGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfYnJhbmNoX2F1dG9fZGVsZXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVCcmFuY2hBdXRvRGVsZXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUJyYW5jaEF1dG9EZWxldGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUJyYW5jaEF1dG9EZWxldGlvbigpIHtcbiAgICB0aGlzLl9lbmFibGVCcmFuY2hBdXRvRGVsZXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUJyYW5jaEF1dG9EZWxldGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVCcmFuY2hBdXRvRGVsZXRpb247XG4gIH1cblxuICAvLyBlbnZpcm9ubWVudF92YXJpYWJsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW52aXJvbm1lbnRWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50VmFyaWFibGVzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbnZpcm9ubWVudF92YXJpYWJsZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbnZpcm9ubWVudFZhcmlhYmxlcyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbnZpcm9ubWVudFZhcmlhYmxlcygpIHtcbiAgICB0aGlzLl9lbnZpcm9ubWVudFZhcmlhYmxlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRWYXJpYWJsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gIH1cblxuICAvLyBpYW1fc2VydmljZV9yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pYW1TZXJ2aWNlUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWFtU2VydmljZVJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpYW1fc2VydmljZV9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWFtU2VydmljZVJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lhbVNlcnZpY2VSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWFtU2VydmljZVJvbGVBcm4oKSB7XG4gICAgdGhpcy5faWFtU2VydmljZVJvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbVNlcnZpY2VSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbVNlcnZpY2VSb2xlQXJuO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gb2F1dGhfdG9rZW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb2F1dGhUb2tlbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb2F1dGhUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29hdXRoX3Rva2VuJyk7XG4gIH1cbiAgcHVibGljIHNldCBvYXV0aFRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYXV0aFRva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2F1dGhUb2tlbigpIHtcbiAgICB0aGlzLl9vYXV0aFRva2VuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvYXV0aFRva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29hdXRoVG9rZW47XG4gIH1cblxuICAvLyBwbGF0Zm9ybSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGF0Zm9ybT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbGF0Zm9ybScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGxhdGZvcm0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYXRmb3JtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhdGZvcm0oKSB7XG4gICAgdGhpcy5fcGxhdGZvcm0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsYXRmb3JtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtO1xuICB9XG5cbiAgLy8gcHJvZHVjdGlvbl9icmFuY2ggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHByb2R1Y3Rpb25CcmFuY2goaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgQW1wbGlmeUFwcFByb2R1Y3Rpb25CcmFuY2godGhpcywgJ3Byb2R1Y3Rpb25fYnJhbmNoJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gcmVwb3NpdG9yeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBvc2l0b3J5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXBvc2l0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwb3NpdG9yeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwb3NpdG9yeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwb3NpdG9yeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcG9zaXRvcnkoKSB7XG4gICAgdGhpcy5fcmVwb3NpdG9yeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwb3NpdG9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGF1dG9fYnJhbmNoX2NyZWF0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvQnJhbmNoQ3JlYXRpb25Db25maWcgPSBuZXcgQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhdXRvX2JyYW5jaF9jcmVhdGlvbl9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQnJhbmNoQ3JlYXRpb25Db25maWc7XG4gIH1cbiAgcHVibGljIHB1dEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZyh2YWx1ZTogQW1wbGlmeUFwcEF1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZykge1xuICAgIHRoaXMuX2F1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuX2F1dG9CcmFuY2hDcmVhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvQnJhbmNoQ3JlYXRpb25Db25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0JyYW5jaENyZWF0aW9uQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBjdXN0b21fcnVsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21SdWxlPzogQW1wbGlmeUFwcEN1c3RvbVJ1bGVbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tUnVsZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3VzdG9tX3J1bGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21SdWxlKHZhbHVlOiBBbXBsaWZ5QXBwQ3VzdG9tUnVsZVtdKSB7XG4gICAgdGhpcy5fY3VzdG9tUnVsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbVJ1bGUoKSB7XG4gICAgdGhpcy5fY3VzdG9tUnVsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tUnVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21SdWxlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3NfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FjY2Vzc1Rva2VuKSxcbiAgICAgIGF1dG9fYnJhbmNoX2NyZWF0aW9uX3BhdHRlcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9hdXRvQnJhbmNoQ3JlYXRpb25QYXR0ZXJucyksXG4gICAgICBiYXNpY19hdXRoX2NyZWRlbnRpYWxzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9iYXNpY0F1dGhDcmVkZW50aWFscyksXG4gICAgICBidWlsZF9zcGVjOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9idWlsZFNwZWMpLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGVuYWJsZV9hdXRvX2JyYW5jaF9jcmVhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZUF1dG9CcmFuY2hDcmVhdGlvbiksXG4gICAgICBlbmFibGVfYmFzaWNfYXV0aDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZUJhc2ljQXV0aCksXG4gICAgICBlbmFibGVfYnJhbmNoX2F1dG9fYnVpbGQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVCcmFuY2hBdXRvQnVpbGQpLFxuICAgICAgZW5hYmxlX2JyYW5jaF9hdXRvX2RlbGV0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlQnJhbmNoQXV0b0RlbGV0aW9uKSxcbiAgICAgIGVudmlyb25tZW50X3ZhcmlhYmxlczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fZW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgICAgaWFtX3NlcnZpY2Vfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lhbVNlcnZpY2VSb2xlQXJuKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgb2F1dGhfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29hdXRoVG9rZW4pLFxuICAgICAgcGxhdGZvcm06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BsYXRmb3JtKSxcbiAgICAgIHJlcG9zaXRvcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcG9zaXRvcnkpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBhdXRvX2JyYW5jaF9jcmVhdGlvbl9jb25maWc6IGFtcGxpZnlBcHBBdXRvQnJhbmNoQ3JlYXRpb25Db25maWdUb1RlcnJhZm9ybSh0aGlzLl9hdXRvQnJhbmNoQ3JlYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBjdXN0b21fcnVsZTogY2RrdGYubGlzdE1hcHBlcihhbXBsaWZ5QXBwQ3VzdG9tUnVsZVRvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21SdWxlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=