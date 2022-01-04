"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicecatalogProvisionedProduct = exports.ServicecatalogProvisionedProductTimeoutsOutputReference = exports.servicecatalogProvisionedProductTimeoutsToTerraform = exports.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference = exports.servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform = exports.servicecatalogProvisionedProductProvisioningParametersToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function servicecatalogProvisionedProductProvisioningParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        use_previous_value: cdktf.booleanToTerraform(struct.usePreviousValue),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.servicecatalogProvisionedProductProvisioningParametersToTerraform = servicecatalogProvisionedProductProvisioningParametersToTerraform;
function servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct.accounts),
        failure_tolerance_count: cdktf.numberToTerraform(struct.failureToleranceCount),
        failure_tolerance_percentage: cdktf.numberToTerraform(struct.failureTolerancePercentage),
        max_concurrency_count: cdktf.numberToTerraform(struct.maxConcurrencyCount),
        max_concurrency_percentage: cdktf.numberToTerraform(struct.maxConcurrencyPercentage),
        regions: cdktf.listMapper(cdktf.stringToTerraform)(struct.regions),
    };
}
exports.servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform = servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform;
/**
 * @stability stable
 */
class ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference extends cdktf.ComplexObject {
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
        if (this._accounts) {
            hasAnyValues = true;
            internalValueResult.accounts = this._accounts;
        }
        if (this._failureToleranceCount) {
            hasAnyValues = true;
            internalValueResult.failureToleranceCount = this._failureToleranceCount;
        }
        if (this._failureTolerancePercentage) {
            hasAnyValues = true;
            internalValueResult.failureTolerancePercentage = this._failureTolerancePercentage;
        }
        if (this._maxConcurrencyCount) {
            hasAnyValues = true;
            internalValueResult.maxConcurrencyCount = this._maxConcurrencyCount;
        }
        if (this._maxConcurrencyPercentage) {
            hasAnyValues = true;
            internalValueResult.maxConcurrencyPercentage = this._maxConcurrencyPercentage;
        }
        if (this._regions) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accounts = undefined;
            this._failureToleranceCount = undefined;
            this._failureTolerancePercentage = undefined;
            this._maxConcurrencyCount = undefined;
            this._maxConcurrencyPercentage = undefined;
            this._regions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accounts = value.accounts;
            this._failureToleranceCount = value.failureToleranceCount;
            this._failureTolerancePercentage = value.failureTolerancePercentage;
            this._maxConcurrencyCount = value.maxConcurrencyCount;
            this._maxConcurrencyPercentage = value.maxConcurrencyPercentage;
            this._regions = value.regions;
        }
    }
    /**
     * @stability stable
     */
    get accounts() {
        return this.getListAttribute('accounts');
    }
    /**
     * @stability stable
     */
    set accounts(value) {
        this._accounts = value;
    }
    /**
     * @stability stable
     */
    resetAccounts() {
        this._accounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accountsInput() {
        return this._accounts;
    }
    /**
     * @stability stable
     */
    get failureToleranceCount() {
        return this.getNumberAttribute('failure_tolerance_count');
    }
    /**
     * @stability stable
     */
    set failureToleranceCount(value) {
        this._failureToleranceCount = value;
    }
    /**
     * @stability stable
     */
    resetFailureToleranceCount() {
        this._failureToleranceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get failureToleranceCountInput() {
        return this._failureToleranceCount;
    }
    /**
     * @stability stable
     */
    get failureTolerancePercentage() {
        return this.getNumberAttribute('failure_tolerance_percentage');
    }
    /**
     * @stability stable
     */
    set failureTolerancePercentage(value) {
        this._failureTolerancePercentage = value;
    }
    /**
     * @stability stable
     */
    resetFailureTolerancePercentage() {
        this._failureTolerancePercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get failureTolerancePercentageInput() {
        return this._failureTolerancePercentage;
    }
    /**
     * @stability stable
     */
    get maxConcurrencyCount() {
        return this.getNumberAttribute('max_concurrency_count');
    }
    /**
     * @stability stable
     */
    set maxConcurrencyCount(value) {
        this._maxConcurrencyCount = value;
    }
    /**
     * @stability stable
     */
    resetMaxConcurrencyCount() {
        this._maxConcurrencyCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxConcurrencyCountInput() {
        return this._maxConcurrencyCount;
    }
    /**
     * @stability stable
     */
    get maxConcurrencyPercentage() {
        return this.getNumberAttribute('max_concurrency_percentage');
    }
    /**
     * @stability stable
     */
    set maxConcurrencyPercentage(value) {
        this._maxConcurrencyPercentage = value;
    }
    /**
     * @stability stable
     */
    resetMaxConcurrencyPercentage() {
        this._maxConcurrencyPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxConcurrencyPercentageInput() {
        return this._maxConcurrencyPercentage;
    }
    /**
     * @stability stable
     */
    get regions() {
        return this.getListAttribute('regions');
    }
    /**
     * @stability stable
     */
    set regions(value) {
        this._regions = value;
    }
    /**
     * @stability stable
     */
    resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regionsInput() {
        return this._regions;
    }
}
exports.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference = ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference[_a] = { fqn: "@cdktf/provider-aws.servicecatalog.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference", version: "3.0.1" };
function servicecatalogProvisionedProductTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
exports.servicecatalogProvisionedProductTimeoutsToTerraform = servicecatalogProvisionedProductTimeoutsToTerraform;
/**
 * @stability stable
 */
class ServicecatalogProvisionedProductTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._create) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    /**
     * @stability stable
     */
    get create() {
        return this.getStringAttribute('create');
    }
    /**
     * @stability stable
     */
    set create(value) {
        this._create = value;
    }
    /**
     * @stability stable
     */
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createInput() {
        return this._create;
    }
    /**
     * @stability stable
     */
    get delete() {
        return this.getStringAttribute('delete');
    }
    /**
     * @stability stable
     */
    set delete(value) {
        this._delete = value;
    }
    /**
     * @stability stable
     */
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deleteInput() {
        return this._delete;
    }
    /**
     * @stability stable
     */
    get update() {
        return this.getStringAttribute('update');
    }
    /**
     * @stability stable
     */
    set update(value) {
        this._update = value;
    }
    /**
     * @stability stable
     */
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get updateInput() {
        return this._update;
    }
}
exports.ServicecatalogProvisionedProductTimeoutsOutputReference = ServicecatalogProvisionedProductTimeoutsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ServicecatalogProvisionedProductTimeoutsOutputReference[_b] = { fqn: "@cdktf/provider-aws.servicecatalog.ServicecatalogProvisionedProductTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product}.
 *
 * @stability stable
 */
class ServicecatalogProvisionedProduct extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_servicecatalog_provisioned_product',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // stack_set_provisioning_preferences - computed: false, optional: true, required: false
        this._stackSetProvisioningPreferences = new ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference(this, "stack_set_provisioning_preferences", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new ServicecatalogProvisionedProductTimeoutsOutputReference(this, "timeouts", true);
        this._acceptLanguage = config.acceptLanguage;
        this._ignoreErrors = config.ignoreErrors;
        this._name = config.name;
        this._notificationArns = config.notificationArns;
        this._pathId = config.pathId;
        this._pathName = config.pathName;
        this._productId = config.productId;
        this._productName = config.productName;
        this._provisioningArtifactId = config.provisioningArtifactId;
        this._provisioningArtifactName = config.provisioningArtifactName;
        this._retainPhysicalResources = config.retainPhysicalResources;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._provisioningParameters = config.provisioningParameters;
        this._stackSetProvisioningPreferences.internalValue = config.stackSetProvisioningPreferences;
        this._timeouts.internalValue = config.timeouts;
    }
    /**
     * @stability stable
     */
    get acceptLanguage() {
        return this.getStringAttribute('accept_language');
    }
    /**
     * @stability stable
     */
    set acceptLanguage(value) {
        this._acceptLanguage = value;
    }
    /**
     * @stability stable
     */
    resetAcceptLanguage() {
        this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get acceptLanguageInput() {
        return this._acceptLanguage;
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // cloudwatch_dashboard_names - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cloudwatchDashboardNames() {
        return this.getListAttribute('cloudwatch_dashboard_names');
    }
    // created_time - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get createdTime() {
        return this.getStringAttribute('created_time');
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
    get ignoreErrors() {
        return this.getBooleanAttribute('ignore_errors');
    }
    /**
     * @stability stable
     */
    set ignoreErrors(value) {
        this._ignoreErrors = value;
    }
    /**
     * @stability stable
     */
    resetIgnoreErrors() {
        this._ignoreErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ignoreErrorsInput() {
        return this._ignoreErrors;
    }
    // last_provisioning_record_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastProvisioningRecordId() {
        return this.getStringAttribute('last_provisioning_record_id');
    }
    // last_record_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastRecordId() {
        return this.getStringAttribute('last_record_id');
    }
    // last_successful_provisioning_record_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastSuccessfulProvisioningRecordId() {
        return this.getStringAttribute('last_successful_provisioning_record_id');
    }
    // launch_role_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get launchRoleArn() {
        return this.getStringAttribute('launch_role_arn');
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
    get notificationArns() {
        return this.getListAttribute('notification_arns');
    }
    /**
     * @stability stable
     */
    set notificationArns(value) {
        this._notificationArns = value;
    }
    /**
     * @stability stable
     */
    resetNotificationArns() {
        this._notificationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationArnsInput() {
        return this._notificationArns;
    }
    /**
     * @stability stable
     */
    get pathId() {
        return this.getStringAttribute('path_id');
    }
    /**
     * @stability stable
     */
    set pathId(value) {
        this._pathId = value;
    }
    /**
     * @stability stable
     */
    resetPathId() {
        this._pathId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pathIdInput() {
        return this._pathId;
    }
    /**
     * @stability stable
     */
    get pathName() {
        return this.getStringAttribute('path_name');
    }
    /**
     * @stability stable
     */
    set pathName(value) {
        this._pathName = value;
    }
    /**
     * @stability stable
     */
    resetPathName() {
        this._pathName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pathNameInput() {
        return this._pathName;
    }
    /**
     * @stability stable
     */
    get productId() {
        return this.getStringAttribute('product_id');
    }
    /**
     * @stability stable
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     * @stability stable
     */
    resetProductId() {
        this._productId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get productIdInput() {
        return this._productId;
    }
    /**
     * @stability stable
     */
    get productName() {
        return this.getStringAttribute('product_name');
    }
    /**
     * @stability stable
     */
    set productName(value) {
        this._productName = value;
    }
    /**
     * @stability stable
     */
    resetProductName() {
        this._productName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get productNameInput() {
        return this._productName;
    }
    /**
     * @stability stable
     */
    get provisioningArtifactId() {
        return this.getStringAttribute('provisioning_artifact_id');
    }
    /**
     * @stability stable
     */
    set provisioningArtifactId(value) {
        this._provisioningArtifactId = value;
    }
    /**
     * @stability stable
     */
    resetProvisioningArtifactId() {
        this._provisioningArtifactId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get provisioningArtifactIdInput() {
        return this._provisioningArtifactId;
    }
    /**
     * @stability stable
     */
    get provisioningArtifactName() {
        return this.getStringAttribute('provisioning_artifact_name');
    }
    /**
     * @stability stable
     */
    set provisioningArtifactName(value) {
        this._provisioningArtifactName = value;
    }
    /**
     * @stability stable
     */
    resetProvisioningArtifactName() {
        this._provisioningArtifactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get provisioningArtifactNameInput() {
        return this._provisioningArtifactName;
    }
    /**
     * @stability stable
     */
    get retainPhysicalResources() {
        return this.getBooleanAttribute('retain_physical_resources');
    }
    /**
     * @stability stable
     */
    set retainPhysicalResources(value) {
        this._retainPhysicalResources = value;
    }
    /**
     * @stability stable
     */
    resetRetainPhysicalResources() {
        this._retainPhysicalResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retainPhysicalResourcesInput() {
        return this._retainPhysicalResources;
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    // status_message - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get statusMessage() {
        return this.getStringAttribute('status_message');
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
    // type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
    /**
     * @stability stable
     */
    get provisioningParameters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('provisioning_parameters');
    }
    /**
     * @stability stable
     */
    set provisioningParameters(value) {
        this._provisioningParameters = value;
    }
    /**
     * @stability stable
     */
    resetProvisioningParameters() {
        this._provisioningParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get provisioningParametersInput() {
        return this._provisioningParameters;
    }
    /**
     * @stability stable
     */
    get stackSetProvisioningPreferences() {
        return this._stackSetProvisioningPreferences;
    }
    /**
     * @stability stable
     */
    putStackSetProvisioningPreferences(value) {
        this._stackSetProvisioningPreferences.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetStackSetProvisioningPreferences() {
        this._stackSetProvisioningPreferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stackSetProvisioningPreferencesInput() {
        return this._stackSetProvisioningPreferences.internalValue;
    }
    /**
     * @stability stable
     */
    get timeouts() {
        return this._timeouts;
    }
    /**
     * @stability stable
     */
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
            name: cdktf.stringToTerraform(this._name),
            notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
            path_id: cdktf.stringToTerraform(this._pathId),
            path_name: cdktf.stringToTerraform(this._pathName),
            product_id: cdktf.stringToTerraform(this._productId),
            product_name: cdktf.stringToTerraform(this._productName),
            provisioning_artifact_id: cdktf.stringToTerraform(this._provisioningArtifactId),
            provisioning_artifact_name: cdktf.stringToTerraform(this._provisioningArtifactName),
            retain_physical_resources: cdktf.booleanToTerraform(this._retainPhysicalResources),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            provisioning_parameters: cdktf.listMapper(servicecatalogProvisionedProductProvisioningParametersToTerraform)(this._provisioningParameters),
            stack_set_provisioning_preferences: servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(this._stackSetProvisioningPreferences.internalValue),
            timeouts: servicecatalogProvisionedProductTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.ServicecatalogProvisionedProduct = ServicecatalogProvisionedProduct;
_c = JSII_RTTI_SYMBOL_1;
ServicecatalogProvisionedProduct[_c] = { fqn: "@cdktf/provider-aws.servicecatalog.ServicecatalogProvisionedProduct", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ServicecatalogProvisionedProduct.tfResourceType = "aws_servicecatalog_provisioned_product";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWNhdGFsb2ctcHJvdmlzaW9uZWQtcHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlY2F0YWxvZy9zZXJ2aWNlY2F0YWxvZy1wcm92aXNpb25lZC1wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBOEMvQixTQUFnQixpRUFBaUUsQ0FBQyxNQUErRDtJQUMvSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RFLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVZELDhJQVVDO0FBaUJELFNBQWdCLDBFQUEwRSxDQUFDLE1BQXlKO0lBQ2xQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNyRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQy9FLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDekYscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRSwwQkFBMEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ3JGLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFiRCxnS0FhQzs7OztBQUVELE1BQWEsOEVBQStFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJckgsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDcEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUM7U0FDbkY7UUFDRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUNyRTtRQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1NBQy9FO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBa0Y7UUFDekcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7WUFDeEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztZQUM3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1lBQ3RDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7WUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDM0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1lBQzFELElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7WUFDcEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztZQUN0RCxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1lBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWU7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFDRCxJQUFXLHFCQUFxQixDQUFDLEtBQWE7UUFDNUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBQ0QsSUFBVywwQkFBMEIsQ0FBQyxLQUFhO1FBQ2pELElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNNLCtCQUErQjtRQUNwQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUlELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUNELElBQVcsbUJBQW1CLENBQUMsS0FBYTtRQUMxQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFJRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFDRCxJQUFXLHdCQUF3QixDQUFDLEtBQWE7UUFDL0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFlO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOztBQXpKSCx3S0EwSkM7OztBQVVELFNBQWdCLG1EQUFtRCxDQUFDLE1BQTJHO0lBQzdLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDaEQsQ0FBQTtBQUNILENBQUM7QUFWRCxrSEFVQzs7OztBQUVELE1BQWEsdURBQXdELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJOUYsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMkQ7UUFDbEYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7O0FBdkZILDBIQXdGQzs7Ozs7Ozs7QUFHRCxNQUFhLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPM0UsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQThDO1FBQzdGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsd0NBQXdDO1lBQy9ELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUE4U0wsd0ZBQXdGO1FBQ2hGLHFDQUFnQyxHQUFHLElBQUksOEVBQThFLENBQUMsSUFBVyxFQUFFLG9DQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZXZMLDhEQUE4RDtRQUN0RCxjQUFTLEdBQUcsSUFBSSx1REFBdUQsQ0FBQyxJQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBOVQ3RyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1FBQzdELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7UUFDakUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsK0JBQStCLENBQUM7UUFDN0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxDQUFDOzs7O0lBUUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQseURBQXlEOzs7O0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnRkFBZ0Y7Ozs7SUFDaEYsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsa0VBQWtFOzs7O0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFRLENBQUM7SUFDMUQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWtDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELGlGQUFpRjs7OztJQUNqRixJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxvRUFBb0U7Ozs7SUFDcEUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDRGQUE0Rjs7OztJQUM1RixJQUFXLGtDQUFrQztRQUMzQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxxRUFBcUU7Ozs7SUFDckUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFlO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUNELElBQVcsc0JBQXNCLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSwyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFJRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFDRCxJQUFXLHdCQUF3QixDQUFDLEtBQWE7UUFDL0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsMkJBQTJCLENBQVEsQ0FBQztJQUN0RSxDQUFDOzs7O0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFrQztRQUNuRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSw0QkFBNEI7UUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7SUFFRCw0REFBNEQ7Ozs7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG9FQUFvRTs7OztJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFvRDtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQVEsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBb0Q7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwREFBMEQ7Ozs7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUlELElBQVcsc0JBQXNCO1FBQy9CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx5QkFBeUIsQ0FBUSxDQUFDO0lBQzFFLENBQUM7Ozs7SUFDRCxJQUFXLHNCQUFzQixDQUFDLEtBQStEO1FBQy9GLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLDJCQUEyQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUlELElBQVcsK0JBQStCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDTSxrQ0FBa0MsQ0FBQyxLQUFzRTtRQUM5RyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ00sb0NBQW9DO1FBQ3pDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxvQ0FBb0M7UUFDN0MsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsYUFBYSxDQUFDO0lBQzdELENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxXQUFXLENBQUMsS0FBK0M7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM5RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3BGLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QyxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQy9FLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDbkYseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztZQUNsRixJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGlFQUFpRSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQzFJLGtDQUFrQyxFQUFFLDBFQUEwRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUM7WUFDbkssUUFBUSxFQUFFLG1EQUFtRCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQzVGLENBQUM7SUFDSixDQUFDOztBQTNYSCw0RUE0WEM7OztBQTFYQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLCtDQUFjLEdBQVcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXB0TGFuZ3VhZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZ25vcmVFcnJvcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbkFybnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhdGhJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXRoTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2R1Y3RJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9kdWN0TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm92aXNpb25pbmdBcnRpZmFjdElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm92aXNpb25pbmdBcnRpZmFjdE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRhaW5QaHlzaWNhbFJlc291cmNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3Zpc2lvbmluZ1BhcmFtZXRlcnM/OiBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFByb3Zpc2lvbmluZ1BhcmFtZXRlcnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhY2tTZXRQcm92aXNpb25pbmdQcmVmZXJlbmNlcz86IFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0U3RhY2tTZXRQcm92aXNpb25pbmdQcmVmZXJlbmNlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFByb3Zpc2lvbmluZ1BhcmFtZXRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZVByZXZpb3VzVmFsdWU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZWNhdGFsb2dQcm92aXNpb25lZFByb2R1Y3RQcm92aXNpb25pbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogU2VydmljZWNhdGFsb2dQcm92aXNpb25lZFByb2R1Y3RQcm92aXNpb25pbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdXNlX3ByZXZpb3VzX3ZhbHVlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS51c2VQcmV2aW91c1ZhbHVlKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmYWlsdXJlVG9sZXJhbmNlQ291bnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmYWlsdXJlVG9sZXJhbmNlUGVyY2VudGFnZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhDb25jdXJyZW5jeUNvdW50PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhDb25jdXJyZW5jeVBlcmNlbnRhZ2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWdpb25zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXNPdXRwdXRSZWZlcmVuY2UgfCBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY2NvdW50cyksXG4gICAgZmFpbHVyZV90b2xlcmFuY2VfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZmFpbHVyZVRvbGVyYW5jZUNvdW50KSxcbiAgICBmYWlsdXJlX3RvbGVyYW5jZV9wZXJjZW50YWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZhaWx1cmVUb2xlcmFuY2VQZXJjZW50YWdlKSxcbiAgICBtYXhfY29uY3VycmVuY3lfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q29uY3VycmVuY3lDb3VudCksXG4gICAgbWF4X2NvbmN1cnJlbmN5X3BlcmNlbnRhZ2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q29uY3VycmVuY3lQZXJjZW50YWdlKSxcbiAgICByZWdpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnJlZ2lvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2VydmljZWNhdGFsb2dQcm92aXNpb25lZFByb2R1Y3RTdGFja1NldFByb3Zpc2lvbmluZ1ByZWZlcmVuY2VzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2NvdW50cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjb3VudHMgPSB0aGlzLl9hY2NvdW50cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZhaWx1cmVUb2xlcmFuY2VDb3VudCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmFpbHVyZVRvbGVyYW5jZUNvdW50ID0gdGhpcy5fZmFpbHVyZVRvbGVyYW5jZUNvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmFpbHVyZVRvbGVyYW5jZVBlcmNlbnRhZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZhaWx1cmVUb2xlcmFuY2VQZXJjZW50YWdlID0gdGhpcy5fZmFpbHVyZVRvbGVyYW5jZVBlcmNlbnRhZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhDb25jdXJyZW5jeUNvdW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhDb25jdXJyZW5jeUNvdW50ID0gdGhpcy5fbWF4Q29uY3VycmVuY3lDb3VudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heENvbmN1cnJlbmN5UGVyY2VudGFnZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4Q29uY3VycmVuY3lQZXJjZW50YWdlID0gdGhpcy5fbWF4Q29uY3VycmVuY3lQZXJjZW50YWdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVnaW9ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVnaW9ucyA9IHRoaXMuX3JlZ2lvbnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY2NvdW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZhaWx1cmVUb2xlcmFuY2VDb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZhaWx1cmVUb2xlcmFuY2VQZXJjZW50YWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWF4Q29uY3VycmVuY3lDb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heENvbmN1cnJlbmN5UGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlZ2lvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY291bnRzID0gdmFsdWUuYWNjb3VudHM7XG4gICAgICB0aGlzLl9mYWlsdXJlVG9sZXJhbmNlQ291bnQgPSB2YWx1ZS5mYWlsdXJlVG9sZXJhbmNlQ291bnQ7XG4gICAgICB0aGlzLl9mYWlsdXJlVG9sZXJhbmNlUGVyY2VudGFnZSA9IHZhbHVlLmZhaWx1cmVUb2xlcmFuY2VQZXJjZW50YWdlO1xuICAgICAgdGhpcy5fbWF4Q29uY3VycmVuY3lDb3VudCA9IHZhbHVlLm1heENvbmN1cnJlbmN5Q291bnQ7XG4gICAgICB0aGlzLl9tYXhDb25jdXJyZW5jeVBlcmNlbnRhZ2UgPSB2YWx1ZS5tYXhDb25jdXJyZW5jeVBlcmNlbnRhZ2U7XG4gICAgICB0aGlzLl9yZWdpb25zID0gdmFsdWUucmVnaW9ucztcbiAgICB9XG4gIH1cblxuICAvLyBhY2NvdW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhY2NvdW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhY2NvdW50cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjb3VudHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYWNjb3VudHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2NvdW50cygpIHtcbiAgICB0aGlzLl9hY2NvdW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjb3VudHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3VudHM7XG4gIH1cblxuICAvLyBmYWlsdXJlX3RvbGVyYW5jZV9jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mYWlsdXJlVG9sZXJhbmNlQ291bnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGZhaWx1cmVUb2xlcmFuY2VDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ZhaWx1cmVfdG9sZXJhbmNlX2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmYWlsdXJlVG9sZXJhbmNlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2ZhaWx1cmVUb2xlcmFuY2VDb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZhaWx1cmVUb2xlcmFuY2VDb3VudCgpIHtcbiAgICB0aGlzLl9mYWlsdXJlVG9sZXJhbmNlQ291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZhaWx1cmVUb2xlcmFuY2VDb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mYWlsdXJlVG9sZXJhbmNlQ291bnQ7XG4gIH1cblxuICAvLyBmYWlsdXJlX3RvbGVyYW5jZV9wZXJjZW50YWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZhaWx1cmVUb2xlcmFuY2VQZXJjZW50YWdlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBmYWlsdXJlVG9sZXJhbmNlUGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ZhaWx1cmVfdG9sZXJhbmNlX3BlcmNlbnRhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZhaWx1cmVUb2xlcmFuY2VQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9mYWlsdXJlVG9sZXJhbmNlUGVyY2VudGFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZhaWx1cmVUb2xlcmFuY2VQZXJjZW50YWdlKCkge1xuICAgIHRoaXMuX2ZhaWx1cmVUb2xlcmFuY2VQZXJjZW50YWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmYWlsdXJlVG9sZXJhbmNlUGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mYWlsdXJlVG9sZXJhbmNlUGVyY2VudGFnZTtcbiAgfVxuXG4gIC8vIG1heF9jb25jdXJyZW5jeV9jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhDb25jdXJyZW5jeUNvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhDb25jdXJyZW5jeUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2NvbmN1cnJlbmN5X2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhDb25jdXJyZW5jeUNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhDb25jdXJyZW5jeUNvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4Q29uY3VycmVuY3lDb3VudCgpIHtcbiAgICB0aGlzLl9tYXhDb25jdXJyZW5jeUNvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDb25jdXJyZW5jeUNvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENvbmN1cnJlbmN5Q291bnQ7XG4gIH1cblxuICAvLyBtYXhfY29uY3VycmVuY3lfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhDb25jdXJyZW5jeVBlcmNlbnRhZ2U/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heENvbmN1cnJlbmN5UGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jb25jdXJyZW5jeV9wZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhDb25jdXJyZW5jeVBlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heENvbmN1cnJlbmN5UGVyY2VudGFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heENvbmN1cnJlbmN5UGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl9tYXhDb25jdXJyZW5jeVBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heENvbmN1cnJlbmN5UGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhDb25jdXJyZW5jeVBlcmNlbnRhZ2U7XG4gIH1cblxuICAvLyByZWdpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZ2lvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcmVnaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdyZWdpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWdpb25zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3JlZ2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWdpb25zKCkge1xuICAgIHRoaXMuX3JlZ2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZ2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaW9ucztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVwZGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0VGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIHwgU2VydmljZWNhdGFsb2dQcm92aXNpb25lZFByb2R1Y3RUaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0VGltZW91dHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NyZWF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlYXRlID0gdGhpcy5fY3JlYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVsZXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0VGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3NlcnZpY2VjYXRhbG9nX3Byb3Zpc2lvbmVkX3Byb2R1Y3RcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU2VydmljZWNhdGFsb2dQcm92aXNpb25lZFByb2R1Y3RDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zZXJ2aWNlY2F0YWxvZ19wcm92aXNpb25lZF9wcm9kdWN0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FjY2VwdExhbmd1YWdlID0gY29uZmlnLmFjY2VwdExhbmd1YWdlO1xuICAgIHRoaXMuX2lnbm9yZUVycm9ycyA9IGNvbmZpZy5pZ25vcmVFcnJvcnM7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkFybnMgPSBjb25maWcubm90aWZpY2F0aW9uQXJucztcbiAgICB0aGlzLl9wYXRoSWQgPSBjb25maWcucGF0aElkO1xuICAgIHRoaXMuX3BhdGhOYW1lID0gY29uZmlnLnBhdGhOYW1lO1xuICAgIHRoaXMuX3Byb2R1Y3RJZCA9IGNvbmZpZy5wcm9kdWN0SWQ7XG4gICAgdGhpcy5fcHJvZHVjdE5hbWUgPSBjb25maWcucHJvZHVjdE5hbWU7XG4gICAgdGhpcy5fcHJvdmlzaW9uaW5nQXJ0aWZhY3RJZCA9IGNvbmZpZy5wcm92aXNpb25pbmdBcnRpZmFjdElkO1xuICAgIHRoaXMuX3Byb3Zpc2lvbmluZ0FydGlmYWN0TmFtZSA9IGNvbmZpZy5wcm92aXNpb25pbmdBcnRpZmFjdE5hbWU7XG4gICAgdGhpcy5fcmV0YWluUGh5c2ljYWxSZXNvdXJjZXMgPSBjb25maWcucmV0YWluUGh5c2ljYWxSZXNvdXJjZXM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9wcm92aXNpb25pbmdQYXJhbWV0ZXJzID0gY29uZmlnLnByb3Zpc2lvbmluZ1BhcmFtZXRlcnM7XG4gICAgdGhpcy5fc3RhY2tTZXRQcm92aXNpb25pbmdQcmVmZXJlbmNlcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXM7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50aW1lb3V0cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjZXB0X2xhbmd1YWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2VwdExhbmd1YWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2NlcHRMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2VwdF9sYW5ndWFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXB0TGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2VwdExhbmd1YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXB0TGFuZ3VhZ2UoKSB7XG4gICAgdGhpcy5fYWNjZXB0TGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2VwdExhbmd1YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2VwdExhbmd1YWdlO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2Rhc2hib2FyZF9uYW1lcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hEYXNoYm9hcmROYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjbG91ZHdhdGNoX2Rhc2hib2FyZF9uYW1lcycpO1xuICB9XG5cbiAgLy8gY3JlYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpZ25vcmVfZXJyb3JzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lnbm9yZUVycm9ycz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaWdub3JlRXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2lnbm9yZV9lcnJvcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpZ25vcmVFcnJvcnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2lnbm9yZUVycm9ycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElnbm9yZUVycm9ycygpIHtcbiAgICB0aGlzLl9pZ25vcmVFcnJvcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlnbm9yZUVycm9yc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZ25vcmVFcnJvcnM7XG4gIH1cblxuICAvLyBsYXN0X3Byb3Zpc2lvbmluZ19yZWNvcmRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0UHJvdmlzaW9uaW5nUmVjb3JkSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3Byb3Zpc2lvbmluZ19yZWNvcmRfaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfcmVjb3JkX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFJlY29yZElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9yZWNvcmRfaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3Rfc3VjY2Vzc2Z1bF9wcm92aXNpb25pbmdfcmVjb3JkX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFN1Y2Nlc3NmdWxQcm92aXNpb25pbmdSZWNvcmRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3Rfc3VjY2Vzc2Z1bF9wcm92aXNpb25pbmdfcmVjb3JkX2lkJyk7XG4gIH1cblxuICAvLyBsYXVuY2hfcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXVuY2hSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGF1bmNoX3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG5vdGlmaWNhdGlvbl9hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkFybnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uQXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdub3RpZmljYXRpb25fYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbm90aWZpY2F0aW9uQXJucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25Bcm5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90aWZpY2F0aW9uQXJucygpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25Bcm5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RpZmljYXRpb25Bcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkFybnM7XG4gIH1cblxuICAvLyBwYXRoX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGF0aElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXRoSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGhJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhdGhJZCgpIHtcbiAgICB0aGlzLl9wYXRoSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhdGhJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXRoSWQ7XG4gIH1cblxuICAvLyBwYXRoX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGF0aE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhdGhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGF0aF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXRoTmFtZSgpIHtcbiAgICB0aGlzLl9wYXRoTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGF0aE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aE5hbWU7XG4gIH1cblxuICAvLyBwcm9kdWN0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvZHVjdElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm9kdWN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9kdWN0X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9kdWN0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2R1Y3RJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2R1Y3RJZCgpIHtcbiAgICB0aGlzLl9wcm9kdWN0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2R1Y3RJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9kdWN0SWQ7XG4gIH1cblxuICAvLyBwcm9kdWN0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvZHVjdE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByb2R1Y3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvZHVjdF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9kdWN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvZHVjdE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm9kdWN0TmFtZSgpIHtcbiAgICB0aGlzLl9wcm9kdWN0TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvZHVjdE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZHVjdE5hbWU7XG4gIH1cblxuICAvLyBwcm92aXNpb25pbmdfYXJ0aWZhY3RfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm92aXNpb25pbmdBcnRpZmFjdElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm92aXNpb25pbmdBcnRpZmFjdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdmlzaW9uaW5nX2FydGlmYWN0X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm92aXNpb25pbmdBcnRpZmFjdElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm92aXNpb25pbmdBcnRpZmFjdElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvdmlzaW9uaW5nQXJ0aWZhY3RJZCgpIHtcbiAgICB0aGlzLl9wcm92aXNpb25pbmdBcnRpZmFjdElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm92aXNpb25pbmdBcnRpZmFjdElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3Zpc2lvbmluZ0FydGlmYWN0SWQ7XG4gIH1cblxuICAvLyBwcm92aXNpb25pbmdfYXJ0aWZhY3RfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm92aXNpb25pbmdBcnRpZmFjdE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByb3Zpc2lvbmluZ0FydGlmYWN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3Zpc2lvbmluZ19hcnRpZmFjdF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm92aXNpb25pbmdBcnRpZmFjdE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3Zpc2lvbmluZ0FydGlmYWN0TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3Zpc2lvbmluZ0FydGlmYWN0TmFtZSgpIHtcbiAgICB0aGlzLl9wcm92aXNpb25pbmdBcnRpZmFjdE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3Zpc2lvbmluZ0FydGlmYWN0TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm92aXNpb25pbmdBcnRpZmFjdE5hbWU7XG4gIH1cblxuICAvLyByZXRhaW5fcGh5c2ljYWxfcmVzb3VyY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldGFpblBoeXNpY2FsUmVzb3VyY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXRhaW5QaHlzaWNhbFJlc291cmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXRhaW5fcGh5c2ljYWxfcmVzb3VyY2VzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmV0YWluUGh5c2ljYWxSZXNvdXJjZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JldGFpblBoeXNpY2FsUmVzb3VyY2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV0YWluUGh5c2ljYWxSZXNvdXJjZXMoKSB7XG4gICAgdGhpcy5fcmV0YWluUGh5c2ljYWxSZXNvdXJjZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldGFpblBoeXNpY2FsUmVzb3VyY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldGFpblBoeXNpY2FsUmVzb3VyY2VzO1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyBzdGF0dXNfbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1c01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXNfbWVzc2FnZScpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG5cbiAgLy8gcHJvdmlzaW9uaW5nX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvdmlzaW9uaW5nUGFyYW1ldGVycz86IFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0UHJvdmlzaW9uaW5nUGFyYW1ldGVyc1tdOyBcbiAgcHVibGljIGdldCBwcm92aXNpb25pbmdQYXJhbWV0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm92aXNpb25pbmdfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb3Zpc2lvbmluZ1BhcmFtZXRlcnModmFsdWU6IFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0UHJvdmlzaW9uaW5nUGFyYW1ldGVyc1tdKSB7XG4gICAgdGhpcy5fcHJvdmlzaW9uaW5nUGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3Zpc2lvbmluZ1BhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fcHJvdmlzaW9uaW5nUGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdmlzaW9uaW5nUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm92aXNpb25pbmdQYXJhbWV0ZXJzO1xuICB9XG5cbiAgLy8gc3RhY2tfc2V0X3Byb3Zpc2lvbmluZ19wcmVmZXJlbmNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGFja1NldFByb3Zpc2lvbmluZ1ByZWZlcmVuY2VzID0gbmV3IFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0U3RhY2tTZXRQcm92aXNpb25pbmdQcmVmZXJlbmNlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzdGFja19zZXRfcHJvdmlzaW9uaW5nX3ByZWZlcmVuY2VzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXM7XG4gIH1cbiAgcHVibGljIHB1dFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXModmFsdWU6IFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0U3RhY2tTZXRQcm92aXNpb25pbmdQcmVmZXJlbmNlcykge1xuICAgIHRoaXMuX3N0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXMoKSB7XG4gICAgdGhpcy5fc3RhY2tTZXRQcm92aXNpb25pbmdQcmVmZXJlbmNlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFja1NldFByb3Zpc2lvbmluZ1ByZWZlcmVuY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IFNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0VGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0cyh2YWx1ZTogU2VydmljZWNhdGFsb2dQcm92aXNpb25lZFByb2R1Y3RUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhY2NlcHRfbGFuZ3VhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FjY2VwdExhbmd1YWdlKSxcbiAgICAgIGlnbm9yZV9lcnJvcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9pZ25vcmVFcnJvcnMpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBub3RpZmljYXRpb25fYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbm90aWZpY2F0aW9uQXJucyksXG4gICAgICBwYXRoX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wYXRoSWQpLFxuICAgICAgcGF0aF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wYXRoTmFtZSksXG4gICAgICBwcm9kdWN0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcm9kdWN0SWQpLFxuICAgICAgcHJvZHVjdF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcm9kdWN0TmFtZSksXG4gICAgICBwcm92aXNpb25pbmdfYXJ0aWZhY3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Byb3Zpc2lvbmluZ0FydGlmYWN0SWQpLFxuICAgICAgcHJvdmlzaW9uaW5nX2FydGlmYWN0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Byb3Zpc2lvbmluZ0FydGlmYWN0TmFtZSksXG4gICAgICByZXRhaW5fcGh5c2ljYWxfcmVzb3VyY2VzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcmV0YWluUGh5c2ljYWxSZXNvdXJjZXMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBwcm92aXNpb25pbmdfcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihzZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFByb3Zpc2lvbmluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybSkodGhpcy5fcHJvdmlzaW9uaW5nUGFyYW1ldGVycyksXG4gICAgICBzdGFja19zZXRfcHJvdmlzaW9uaW5nX3ByZWZlcmVuY2VzOiBzZXJ2aWNlY2F0YWxvZ1Byb3Zpc2lvbmVkUHJvZHVjdFN0YWNrU2V0UHJvdmlzaW9uaW5nUHJlZmVyZW5jZXNUb1RlcnJhZm9ybSh0aGlzLl9zdGFja1NldFByb3Zpc2lvbmluZ1ByZWZlcmVuY2VzLmludGVybmFsVmFsdWUpLFxuICAgICAgdGltZW91dHM6IHNlcnZpY2VjYXRhbG9nUHJvdmlzaW9uZWRQcm9kdWN0VGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=