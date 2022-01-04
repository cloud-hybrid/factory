"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragegatewayNfsFileShare = exports.StoragegatewayNfsFileShareTimeoutsOutputReference = exports.storagegatewayNfsFileShareTimeoutsToTerraform = exports.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference = exports.storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform = exports.StoragegatewayNfsFileShareCacheAttributesOutputReference = exports.storagegatewayNfsFileShareCacheAttributesToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function storagegatewayNfsFileShareCacheAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct.cacheStaleTimeoutInSeconds),
    };
}
exports.storagegatewayNfsFileShareCacheAttributesToTerraform = storagegatewayNfsFileShareCacheAttributesToTerraform;
/**
 * @stability stable
 */
class StoragegatewayNfsFileShareCacheAttributesOutputReference extends cdktf.ComplexObject {
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
        if (this._cacheStaleTimeoutInSeconds) {
            hasAnyValues = true;
            internalValueResult.cacheStaleTimeoutInSeconds = this._cacheStaleTimeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cacheStaleTimeoutInSeconds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cacheStaleTimeoutInSeconds = value.cacheStaleTimeoutInSeconds;
        }
    }
    /**
     * @stability stable
     */
    get cacheStaleTimeoutInSeconds() {
        return this.getNumberAttribute('cache_stale_timeout_in_seconds');
    }
    /**
     * @stability stable
     */
    set cacheStaleTimeoutInSeconds(value) {
        this._cacheStaleTimeoutInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetCacheStaleTimeoutInSeconds() {
        this._cacheStaleTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cacheStaleTimeoutInSecondsInput() {
        return this._cacheStaleTimeoutInSeconds;
    }
}
exports.StoragegatewayNfsFileShareCacheAttributesOutputReference = StoragegatewayNfsFileShareCacheAttributesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
StoragegatewayNfsFileShareCacheAttributesOutputReference[_a] = { fqn: "@cdktf/provider-aws.storagegateway.StoragegatewayNfsFileShareCacheAttributesOutputReference", version: "3.0.1" };
function storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        directory_mode: cdktf.stringToTerraform(struct.directoryMode),
        file_mode: cdktf.stringToTerraform(struct.fileMode),
        group_id: cdktf.stringToTerraform(struct.groupId),
        owner_id: cdktf.stringToTerraform(struct.ownerId),
    };
}
exports.storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform = storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform;
/**
 * @stability stable
 */
class StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference extends cdktf.ComplexObject {
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
        if (this._directoryMode) {
            hasAnyValues = true;
            internalValueResult.directoryMode = this._directoryMode;
        }
        if (this._fileMode) {
            hasAnyValues = true;
            internalValueResult.fileMode = this._fileMode;
        }
        if (this._groupId) {
            hasAnyValues = true;
            internalValueResult.groupId = this._groupId;
        }
        if (this._ownerId) {
            hasAnyValues = true;
            internalValueResult.ownerId = this._ownerId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._directoryMode = undefined;
            this._fileMode = undefined;
            this._groupId = undefined;
            this._ownerId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._directoryMode = value.directoryMode;
            this._fileMode = value.fileMode;
            this._groupId = value.groupId;
            this._ownerId = value.ownerId;
        }
    }
    /**
     * @stability stable
     */
    get directoryMode() {
        return this.getStringAttribute('directory_mode');
    }
    /**
     * @stability stable
     */
    set directoryMode(value) {
        this._directoryMode = value;
    }
    /**
     * @stability stable
     */
    resetDirectoryMode() {
        this._directoryMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get directoryModeInput() {
        return this._directoryMode;
    }
    /**
     * @stability stable
     */
    get fileMode() {
        return this.getStringAttribute('file_mode');
    }
    /**
     * @stability stable
     */
    set fileMode(value) {
        this._fileMode = value;
    }
    /**
     * @stability stable
     */
    resetFileMode() {
        this._fileMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileModeInput() {
        return this._fileMode;
    }
    /**
     * @stability stable
     */
    get groupId() {
        return this.getStringAttribute('group_id');
    }
    /**
     * @stability stable
     */
    set groupId(value) {
        this._groupId = value;
    }
    /**
     * @stability stable
     */
    resetGroupId() {
        this._groupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get groupIdInput() {
        return this._groupId;
    }
    /**
     * @stability stable
     */
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    /**
     * @stability stable
     */
    set ownerId(value) {
        this._ownerId = value;
    }
    /**
     * @stability stable
     */
    resetOwnerId() {
        this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ownerIdInput() {
        return this._ownerId;
    }
}
exports.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference = StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference[_b] = { fqn: "@cdktf/provider-aws.storagegateway.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference", version: "3.0.1" };
function storagegatewayNfsFileShareTimeoutsToTerraform(struct) {
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
exports.storagegatewayNfsFileShareTimeoutsToTerraform = storagegatewayNfsFileShareTimeoutsToTerraform;
/**
 * @stability stable
 */
class StoragegatewayNfsFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.StoragegatewayNfsFileShareTimeoutsOutputReference = StoragegatewayNfsFileShareTimeoutsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
StoragegatewayNfsFileShareTimeoutsOutputReference[_c] = { fqn: "@cdktf/provider-aws.storagegateway.StoragegatewayNfsFileShareTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share}.
 *
 * @stability stable
 */
class StoragegatewayNfsFileShare extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_storagegateway_nfs_file_share',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // cache_attributes - computed: false, optional: true, required: false
        this._cacheAttributes = new StoragegatewayNfsFileShareCacheAttributesOutputReference(this, "cache_attributes", true);
        // nfs_file_share_defaults - computed: false, optional: true, required: false
        this._nfsFileShareDefaults = new StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(this, "nfs_file_share_defaults", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new StoragegatewayNfsFileShareTimeoutsOutputReference(this, "timeouts", true);
        this._auditDestinationArn = config.auditDestinationArn;
        this._clientList = config.clientList;
        this._defaultStorageClass = config.defaultStorageClass;
        this._fileShareName = config.fileShareName;
        this._gatewayArn = config.gatewayArn;
        this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
        this._kmsEncrypted = config.kmsEncrypted;
        this._kmsKeyArn = config.kmsKeyArn;
        this._locationArn = config.locationArn;
        this._notificationPolicy = config.notificationPolicy;
        this._objectAcl = config.objectAcl;
        this._readOnly = config.readOnly;
        this._requesterPays = config.requesterPays;
        this._roleArn = config.roleArn;
        this._squash = config.squash;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._cacheAttributes.internalValue = config.cacheAttributes;
        this._nfsFileShareDefaults.internalValue = config.nfsFileShareDefaults;
        this._timeouts.internalValue = config.timeouts;
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
    get auditDestinationArn() {
        return this.getStringAttribute('audit_destination_arn');
    }
    /**
     * @stability stable
     */
    set auditDestinationArn(value) {
        this._auditDestinationArn = value;
    }
    /**
     * @stability stable
     */
    resetAuditDestinationArn() {
        this._auditDestinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get auditDestinationArnInput() {
        return this._auditDestinationArn;
    }
    /**
     * @stability stable
     */
    get clientList() {
        return this.getListAttribute('client_list');
    }
    /**
     * @stability stable
     */
    set clientList(value) {
        this._clientList = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clientListInput() {
        return this._clientList;
    }
    /**
     * @stability stable
     */
    get defaultStorageClass() {
        return this.getStringAttribute('default_storage_class');
    }
    /**
     * @stability stable
     */
    set defaultStorageClass(value) {
        this._defaultStorageClass = value;
    }
    /**
     * @stability stable
     */
    resetDefaultStorageClass() {
        this._defaultStorageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultStorageClassInput() {
        return this._defaultStorageClass;
    }
    /**
     * @stability stable
     */
    get fileShareName() {
        return this.getStringAttribute('file_share_name');
    }
    /**
     * @stability stable
     */
    set fileShareName(value) {
        this._fileShareName = value;
    }
    /**
     * @stability stable
     */
    resetFileShareName() {
        this._fileShareName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileShareNameInput() {
        return this._fileShareName;
    }
    // fileshare_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get fileshareId() {
        return this.getStringAttribute('fileshare_id');
    }
    /**
     * @stability stable
     */
    get gatewayArn() {
        return this.getStringAttribute('gateway_arn');
    }
    /**
     * @stability stable
     */
    set gatewayArn(value) {
        this._gatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gatewayArnInput() {
        return this._gatewayArn;
    }
    /**
     * @stability stable
     */
    get guessMimeTypeEnabled() {
        return this.getBooleanAttribute('guess_mime_type_enabled');
    }
    /**
     * @stability stable
     */
    set guessMimeTypeEnabled(value) {
        this._guessMimeTypeEnabled = value;
    }
    /**
     * @stability stable
     */
    resetGuessMimeTypeEnabled() {
        this._guessMimeTypeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get guessMimeTypeEnabledInput() {
        return this._guessMimeTypeEnabled;
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
    get kmsEncrypted() {
        return this.getBooleanAttribute('kms_encrypted');
    }
    /**
     * @stability stable
     */
    set kmsEncrypted(value) {
        this._kmsEncrypted = value;
    }
    /**
     * @stability stable
     */
    resetKmsEncrypted() {
        this._kmsEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsEncryptedInput() {
        return this._kmsEncrypted;
    }
    /**
     * @stability stable
     */
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    /**
     * @stability stable
     */
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    /**
     * @stability stable
     */
    get locationArn() {
        return this.getStringAttribute('location_arn');
    }
    /**
     * @stability stable
     */
    set locationArn(value) {
        this._locationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get locationArnInput() {
        return this._locationArn;
    }
    /**
     * @stability stable
     */
    get notificationPolicy() {
        return this.getStringAttribute('notification_policy');
    }
    /**
     * @stability stable
     */
    set notificationPolicy(value) {
        this._notificationPolicy = value;
    }
    /**
     * @stability stable
     */
    resetNotificationPolicy() {
        this._notificationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationPolicyInput() {
        return this._notificationPolicy;
    }
    /**
     * @stability stable
     */
    get objectAcl() {
        return this.getStringAttribute('object_acl');
    }
    /**
     * @stability stable
     */
    set objectAcl(value) {
        this._objectAcl = value;
    }
    /**
     * @stability stable
     */
    resetObjectAcl() {
        this._objectAcl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get objectAclInput() {
        return this._objectAcl;
    }
    // path - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get path() {
        return this.getStringAttribute('path');
    }
    /**
     * @stability stable
     */
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    /**
     * @stability stable
     */
    set readOnly(value) {
        this._readOnly = value;
    }
    /**
     * @stability stable
     */
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get readOnlyInput() {
        return this._readOnly;
    }
    /**
     * @stability stable
     */
    get requesterPays() {
        return this.getBooleanAttribute('requester_pays');
    }
    /**
     * @stability stable
     */
    set requesterPays(value) {
        this._requesterPays = value;
    }
    /**
     * @stability stable
     */
    resetRequesterPays() {
        this._requesterPays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requesterPaysInput() {
        return this._requesterPays;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get squash() {
        return this.getStringAttribute('squash');
    }
    /**
     * @stability stable
     */
    set squash(value) {
        this._squash = value;
    }
    /**
     * @stability stable
     */
    resetSquash() {
        this._squash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get squashInput() {
        return this._squash;
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
    get cacheAttributes() {
        return this._cacheAttributes;
    }
    /**
     * @stability stable
     */
    putCacheAttributes(value) {
        this._cacheAttributes.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCacheAttributes() {
        this._cacheAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cacheAttributesInput() {
        return this._cacheAttributes.internalValue;
    }
    /**
     * @stability stable
     */
    get nfsFileShareDefaults() {
        return this._nfsFileShareDefaults;
    }
    /**
     * @stability stable
     */
    putNfsFileShareDefaults(value) {
        this._nfsFileShareDefaults.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetNfsFileShareDefaults() {
        this._nfsFileShareDefaults.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nfsFileShareDefaultsInput() {
        return this._nfsFileShareDefaults.internalValue;
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
            audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
            client_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientList),
            default_storage_class: cdktf.stringToTerraform(this._defaultStorageClass),
            file_share_name: cdktf.stringToTerraform(this._fileShareName),
            gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
            guess_mime_type_enabled: cdktf.booleanToTerraform(this._guessMimeTypeEnabled),
            kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            location_arn: cdktf.stringToTerraform(this._locationArn),
            notification_policy: cdktf.stringToTerraform(this._notificationPolicy),
            object_acl: cdktf.stringToTerraform(this._objectAcl),
            read_only: cdktf.booleanToTerraform(this._readOnly),
            requester_pays: cdktf.booleanToTerraform(this._requesterPays),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            squash: cdktf.stringToTerraform(this._squash),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cache_attributes: storagegatewayNfsFileShareCacheAttributesToTerraform(this._cacheAttributes.internalValue),
            nfs_file_share_defaults: storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(this._nfsFileShareDefaults.internalValue),
            timeouts: storagegatewayNfsFileShareTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.StoragegatewayNfsFileShare = StoragegatewayNfsFileShare;
_d = JSII_RTTI_SYMBOL_1;
StoragegatewayNfsFileShare[_d] = { fqn: "@cdktf/provider-aws.storagegateway.StoragegatewayNfsFileShare", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
StoragegatewayNfsFileShare.tfResourceType = "aws_storagegateway_nfs_file_share";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZWdhdGV3YXktbmZzLWZpbGUtc2hhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RvcmFnZWdhdGV3YXkvc3RvcmFnZWdhdGV3YXktbmZzLWZpbGUtc2hhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFrRC9CLFNBQWdCLG9EQUFvRCxDQUFDLE1BQTZHO0lBQ2hMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsOEJBQThCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQywwQkFBMEIsQ0FBQztLQUM1RixDQUFBO0FBQ0gsQ0FBQztBQVJELG9IQVFDOzs7O0FBRUQsTUFBYSx3REFBeUQsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkvRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1NBQ25GO1FBQ0QsT0FBTyxZQUFZLENBQUMs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QyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ25ELGNBQWMsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM3RCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELGdCQUFnQixFQUFFLG9EQUFvRCxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7WUFDM0csdUJBQXVCLEVBQUUseURBQXlELENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztZQUM1SCxRQUFRLEVBQUUsNkNBQTZDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDdEYsQ0FBQztJQUNKLENBQUM7O0FBdFpILGdFQXVaQzs7O0FBclpDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0cseUNBQWMsR0FBVyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXVkaXREZXN0aW5hdGlvbkFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudExpc3Q6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0U3RvcmFnZUNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlU2hhcmVOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ2F0ZXdheUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3Vlc3NNaW1lVHlwZUVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zRW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2NhdGlvbkFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvblBvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RBY2w/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlYWRPbmx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWVzdGVyUGF5cz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3F1YXNoPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGVBdHRyaWJ1dGVzPzogU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVDYWNoZUF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZnNGaWxlU2hhcmVEZWZhdWx0cz86IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlTmZzRmlsZVNoYXJlRGVmYXVsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0cz86IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlVGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlQ2FjaGVBdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGVTdGFsZVRpbWVvdXRJblNlY29uZHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZUNhY2hlQXR0cmlidXRlc1RvVGVycmFmb3JtKHN0cnVjdD86IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlQ2FjaGVBdHRyaWJ1dGVzT3V0cHV0UmVmZXJlbmNlIHwgU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVDYWNoZUF0dHJpYnV0ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYWNoZV9zdGFsZV90aW1lb3V0X2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY2FjaGVTdGFsZVRpbWVvdXRJblNlY29uZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZUNhY2hlQXR0cmlidXRlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZUNhY2hlQXR0cmlidXRlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2FjaGVTdGFsZVRpbWVvdXRJblNlY29uZHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhY2hlU3RhbGVUaW1lb3V0SW5TZWNvbmRzID0gdGhpcy5fY2FjaGVTdGFsZVRpbWVvdXRJblNlY29uZHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZUNhY2hlQXR0cmlidXRlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NhY2hlU3RhbGVUaW1lb3V0SW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jYWNoZVN0YWxlVGltZW91dEluU2Vjb25kcyA9IHZhbHVlLmNhY2hlU3RhbGVUaW1lb3V0SW5TZWNvbmRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhY2hlX3N0YWxlX3RpbWVvdXRfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoZVN0YWxlVGltZW91dEluU2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY2FjaGVTdGFsZVRpbWVvdXRJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjYWNoZV9zdGFsZV90aW1lb3V0X2luX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhY2hlU3RhbGVUaW1lb3V0SW5TZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jYWNoZVN0YWxlVGltZW91dEluU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhY2hlU3RhbGVUaW1lb3V0SW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX2NhY2hlU3RhbGVUaW1lb3V0SW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWNoZVN0YWxlVGltZW91dEluU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZVN0YWxlVGltZW91dEluU2Vjb25kcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZU5mc0ZpbGVTaGFyZURlZmF1bHRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpcmVjdG9yeU1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGVNb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JvdXBJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG93bmVySWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZU5mc0ZpbGVTaGFyZURlZmF1bHRzVG9UZXJyYWZvcm0oc3RydWN0PzogU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVOZnNGaWxlU2hhcmVEZWZhdWx0c091dHB1dFJlZmVyZW5jZSB8IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlTmZzRmlsZVNoYXJlRGVmYXVsdHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXJlY3RvcnlfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kaXJlY3RvcnlNb2RlKSxcbiAgICBmaWxlX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlsZU1vZGUpLFxuICAgIGdyb3VwX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwSWQpLFxuICAgIG93bmVyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm93bmVySWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZU5mc0ZpbGVTaGFyZURlZmF1bHRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlTmZzRmlsZVNoYXJlRGVmYXVsdHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RpcmVjdG9yeU1vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRpcmVjdG9yeU1vZGUgPSB0aGlzLl9kaXJlY3RvcnlNb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsZU1vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGVNb2RlID0gdGhpcy5fZmlsZU1vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ncm91cElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ncm91cElkID0gdGhpcy5fZ3JvdXBJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX293bmVySWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm93bmVySWQgPSB0aGlzLl9vd25lcklkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVOZnNGaWxlU2hhcmVEZWZhdWx0cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RpcmVjdG9yeU1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maWxlTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dyb3VwSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vd25lcklkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kaXJlY3RvcnlNb2RlID0gdmFsdWUuZGlyZWN0b3J5TW9kZTtcbiAgICAgIHRoaXMuX2ZpbGVNb2RlID0gdmFsdWUuZmlsZU1vZGU7XG4gICAgICB0aGlzLl9ncm91cElkID0gdmFsdWUuZ3JvdXBJZDtcbiAgICAgIHRoaXMuX293bmVySWQgPSB2YWx1ZS5vd25lcklkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRpcmVjdG9yeV9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RpcmVjdG9yeU1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeU1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3RvcnlfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGlyZWN0b3J5TW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlyZWN0b3J5TW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpcmVjdG9yeU1vZGUoKSB7XG4gICAgdGhpcy5fZGlyZWN0b3J5TW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5TW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3RvcnlNb2RlO1xuICB9XG5cbiAgLy8gZmlsZV9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbGVNb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaWxlTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsZU1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZU1vZGUoKSB7XG4gICAgdGhpcy5fZmlsZU1vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVNb2RlO1xuICB9XG5cbiAgLy8gZ3JvdXBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3JvdXBJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dyb3VwX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBncm91cElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ncm91cElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R3JvdXBJZCgpIHtcbiAgICB0aGlzLl9ncm91cElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyb3VwSWQ7XG4gIH1cblxuICAvLyBvd25lcl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vd25lcklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvd25lcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3duZXJfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG93bmVySWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX293bmVySWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPd25lcklkKCkge1xuICAgIHRoaXMuX293bmVySWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG93bmVySWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3duZXJJZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZVRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVwZGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZVRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIHwgU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVUaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZVRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlVGltZW91dHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NyZWF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlYXRlID0gdGhpcy5fY3JlYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVsZXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlVGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfc3RvcmFnZWdhdGV3YXlfbmZzX2ZpbGVfc2hhcmVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3N0b3JhZ2VnYXRld2F5X25mc19maWxlX3NoYXJlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2F1ZGl0RGVzdGluYXRpb25Bcm4gPSBjb25maWcuYXVkaXREZXN0aW5hdGlvbkFybjtcbiAgICB0aGlzLl9jbGllbnRMaXN0ID0gY29uZmlnLmNsaWVudExpc3Q7XG4gICAgdGhpcy5fZGVmYXVsdFN0b3JhZ2VDbGFzcyA9IGNvbmZpZy5kZWZhdWx0U3RvcmFnZUNsYXNzO1xuICAgIHRoaXMuX2ZpbGVTaGFyZU5hbWUgPSBjb25maWcuZmlsZVNoYXJlTmFtZTtcbiAgICB0aGlzLl9nYXRld2F5QXJuID0gY29uZmlnLmdhdGV3YXlBcm47XG4gICAgdGhpcy5fZ3Vlc3NNaW1lVHlwZUVuYWJsZWQgPSBjb25maWcuZ3Vlc3NNaW1lVHlwZUVuYWJsZWQ7XG4gICAgdGhpcy5fa21zRW5jcnlwdGVkID0gY29uZmlnLmttc0VuY3J5cHRlZDtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSBjb25maWcua21zS2V5QXJuO1xuICAgIHRoaXMuX2xvY2F0aW9uQXJuID0gY29uZmlnLmxvY2F0aW9uQXJuO1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblBvbGljeSA9IGNvbmZpZy5ub3RpZmljYXRpb25Qb2xpY3k7XG4gICAgdGhpcy5fb2JqZWN0QWNsID0gY29uZmlnLm9iamVjdEFjbDtcbiAgICB0aGlzLl9yZWFkT25seSA9IGNvbmZpZy5yZWFkT25seTtcbiAgICB0aGlzLl9yZXF1ZXN0ZXJQYXlzID0gY29uZmlnLnJlcXVlc3RlclBheXM7XG4gICAgdGhpcy5fcm9sZUFybiA9IGNvbmZpZy5yb2xlQXJuO1xuICAgIHRoaXMuX3NxdWFzaCA9IGNvbmZpZy5zcXVhc2g7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9jYWNoZUF0dHJpYnV0ZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jYWNoZUF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fbmZzRmlsZVNoYXJlRGVmYXVsdHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5uZnNGaWxlU2hhcmVEZWZhdWx0cztcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1ZGl0X2Rlc3RpbmF0aW9uX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdWRpdERlc3RpbmF0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdWRpdERlc3RpbmF0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXVkaXRfZGVzdGluYXRpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdWRpdERlc3RpbmF0aW9uQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdWRpdERlc3RpbmF0aW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXVkaXREZXN0aW5hdGlvbkFybigpIHtcbiAgICB0aGlzLl9hdWRpdERlc3RpbmF0aW9uQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdWRpdERlc3RpbmF0aW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGl0RGVzdGluYXRpb25Bcm47XG4gIH1cblxuICAvLyBjbGllbnRfbGlzdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbGllbnRMaXN0Pzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGNsaWVudExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY2xpZW50X2xpc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsaWVudExpc3QodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY2xpZW50TGlzdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRMaXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudExpc3Q7XG4gIH1cblxuICAvLyBkZWZhdWx0X3N0b3JhZ2VfY2xhc3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFN0b3JhZ2VDbGFzcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFN0b3JhZ2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfc3RvcmFnZV9jbGFzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN0b3JhZ2VDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0b3JhZ2VDbGFzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRTdG9yYWdlQ2xhc3MoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0b3JhZ2VDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFN0b3JhZ2VDbGFzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3RvcmFnZUNsYXNzO1xuICB9XG5cbiAgLy8gZmlsZV9zaGFyZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsZVNoYXJlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlsZVNoYXJlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfc2hhcmVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsZVNoYXJlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsZVNoYXJlTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbGVTaGFyZU5hbWUoKSB7XG4gICAgdGhpcy5fZmlsZVNoYXJlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZVNoYXJlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlU2hhcmVOYW1lO1xuICB9XG5cbiAgLy8gZmlsZXNoYXJlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmlsZXNoYXJlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWxlc2hhcmVfaWQnKTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2dhdGV3YXlBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdhdGV3YXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnYXRld2F5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2F0ZXdheUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnYXRld2F5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlBcm47XG4gIH1cblxuICAvLyBndWVzc19taW1lX3R5cGVfZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ndWVzc01pbWVUeXBlRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZ3Vlc3NNaW1lVHlwZUVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZ3Vlc3NfbWltZV90eXBlX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBndWVzc01pbWVUeXBlRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZ3Vlc3NNaW1lVHlwZUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHdWVzc01pbWVUeXBlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9ndWVzc01pbWVUeXBlRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3Vlc3NNaW1lVHlwZUVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3Vlc3NNaW1lVHlwZUVuYWJsZWQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8ga21zX2VuY3J5cHRlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGttc0VuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdrbXNfZW5jcnlwdGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQga21zRW5jcnlwdGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9rbXNFbmNyeXB0ZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNFbmNyeXB0ZWQoKSB7XG4gICAgdGhpcy5fa21zRW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNFbmNyeXB0ZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zRW5jcnlwdGVkO1xuICB9XG5cbiAgLy8ga21zX2tleV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5QXJuO1xuICB9XG5cbiAgLy8gbG9jYXRpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xvY2F0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2NhdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2F0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9jYXRpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvY2F0aW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvY2F0aW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uQXJuO1xuICB9XG5cbiAgLy8gbm90aWZpY2F0aW9uX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ub3RpZmljYXRpb25Qb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvblBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vdGlmaWNhdGlvbl9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGlmaWNhdGlvblBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90aWZpY2F0aW9uUG9saWN5KCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblBvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblBvbGljeTtcbiAgfVxuXG4gIC8vIG9iamVjdF9hY2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb2JqZWN0QWNsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvYmplY3RBY2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3RfYWNsJyk7XG4gIH1cbiAgcHVibGljIHNldCBvYmplY3RBY2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29iamVjdEFjbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9iamVjdEFjbCgpIHtcbiAgICB0aGlzLl9vYmplY3RBY2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9iamVjdEFjbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vYmplY3RBY2w7XG4gIH1cblxuICAvLyBwYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdGgnKTtcbiAgfVxuXG4gIC8vIHJlYWRfb25seSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWFkT25seT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVhZE9ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVhZF9vbmx5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVhZE9ubHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlYWRPbmx5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVhZE9ubHkoKSB7XG4gICAgdGhpcy5fcmVhZE9ubHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlYWRPbmx5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5O1xuICB9XG5cbiAgLy8gcmVxdWVzdGVyX3BheXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWVzdGVyUGF5cz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWVzdGVyUGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1ZXN0ZXJfcGF5cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVlc3RlclBheXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlcXVlc3RlclBheXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1ZXN0ZXJQYXlzKCkge1xuICAgIHRoaXMuX3JlcXVlc3RlclBheXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVlc3RlclBheXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyUGF5cztcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cblxuICAvLyBzcXVhc2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3F1YXNoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcXVhc2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcXVhc2gnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNxdWFzaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3F1YXNoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3F1YXNoKCkge1xuICAgIHRoaXMuX3NxdWFzaCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3F1YXNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NxdWFzaDtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBjYWNoZV9hdHRyaWJ1dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhY2hlQXR0cmlidXRlcyA9IG5ldyBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZUNhY2hlQXR0cmlidXRlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjYWNoZV9hdHRyaWJ1dGVzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNhY2hlQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVBdHRyaWJ1dGVzO1xuICB9XG4gIHB1YmxpYyBwdXRDYWNoZUF0dHJpYnV0ZXModmFsdWU6IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlQ2FjaGVBdHRyaWJ1dGVzKSB7XG4gICAgdGhpcy5fY2FjaGVBdHRyaWJ1dGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYWNoZUF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fY2FjaGVBdHRyaWJ1dGVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhY2hlQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZUF0dHJpYnV0ZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG5mc19maWxlX3NoYXJlX2RlZmF1bHRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25mc0ZpbGVTaGFyZURlZmF1bHRzID0gbmV3IFN0b3JhZ2VnYXRld2F5TmZzRmlsZVNoYXJlTmZzRmlsZVNoYXJlRGVmYXVsdHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibmZzX2ZpbGVfc2hhcmVfZGVmYXVsdHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbmZzRmlsZVNoYXJlRGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25mc0ZpbGVTaGFyZURlZmF1bHRzO1xuICB9XG4gIHB1YmxpYyBwdXROZnNGaWxlU2hhcmVEZWZhdWx0cyh2YWx1ZTogU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVOZnNGaWxlU2hhcmVEZWZhdWx0cykge1xuICAgIHRoaXMuX25mc0ZpbGVTaGFyZURlZmF1bHRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZnNGaWxlU2hhcmVEZWZhdWx0cygpIHtcbiAgICB0aGlzLl9uZnNGaWxlU2hhcmVEZWZhdWx0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZnNGaWxlU2hhcmVEZWZhdWx0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZnNGaWxlU2hhcmVEZWZhdWx0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgU3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBTdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZVRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1ZGl0X2Rlc3RpbmF0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXVkaXREZXN0aW5hdGlvbkFybiksXG4gICAgICBjbGllbnRfbGlzdDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fY2xpZW50TGlzdCksXG4gICAgICBkZWZhdWx0X3N0b3JhZ2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRTdG9yYWdlQ2xhc3MpLFxuICAgICAgZmlsZV9zaGFyZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maWxlU2hhcmVOYW1lKSxcbiAgICAgIGdhdGV3YXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nYXRld2F5QXJuKSxcbiAgICAgIGd1ZXNzX21pbWVfdHlwZV9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZ3Vlc3NNaW1lVHlwZUVuYWJsZWQpLFxuICAgICAga21zX2VuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ttc0VuY3J5cHRlZCksXG4gICAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zS2V5QXJuKSxcbiAgICAgIGxvY2F0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbG9jYXRpb25Bcm4pLFxuICAgICAgbm90aWZpY2F0aW9uX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbm90aWZpY2F0aW9uUG9saWN5KSxcbiAgICAgIG9iamVjdF9hY2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29iamVjdEFjbCksXG4gICAgICByZWFkX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZWFkT25seSksXG4gICAgICByZXF1ZXN0ZXJfcGF5czogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3JlcXVlc3RlclBheXMpLFxuICAgICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvbGVBcm4pLFxuICAgICAgc3F1YXNoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zcXVhc2gpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBjYWNoZV9hdHRyaWJ1dGVzOiBzdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZUNhY2hlQXR0cmlidXRlc1RvVGVycmFmb3JtKHRoaXMuX2NhY2hlQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG5mc19maWxlX3NoYXJlX2RlZmF1bHRzOiBzdG9yYWdlZ2F0ZXdheU5mc0ZpbGVTaGFyZU5mc0ZpbGVTaGFyZURlZmF1bHRzVG9UZXJyYWZvcm0odGhpcy5fbmZzRmlsZVNoYXJlRGVmYXVsdHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogc3RvcmFnZWdhdGV3YXlOZnNGaWxlU2hhcmVUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==