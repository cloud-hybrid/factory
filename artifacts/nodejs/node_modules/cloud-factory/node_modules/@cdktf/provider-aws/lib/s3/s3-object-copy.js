"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ObjectCopy = exports.s3ObjectCopyGrantToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3ObjectCopyGrantToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        id: cdktf.stringToTerraform(struct.id),
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
exports.s3ObjectCopyGrantToTerraform = s3ObjectCopyGrantToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy}.
 *
 * @stability stable
 */
class S3ObjectCopy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_object_copy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._acl = config.acl;
        this._bucket = config.bucket;
        this._bucketKeyEnabled = config.bucketKeyEnabled;
        this._cacheControl = config.cacheControl;
        this._contentDisposition = config.contentDisposition;
        this._contentEncoding = config.contentEncoding;
        this._contentLanguage = config.contentLanguage;
        this._contentType = config.contentType;
        this._copyIfMatch = config.copyIfMatch;
        this._copyIfModifiedSince = config.copyIfModifiedSince;
        this._copyIfNoneMatch = config.copyIfNoneMatch;
        this._copyIfUnmodifiedSince = config.copyIfUnmodifiedSince;
        this._customerAlgorithm = config.customerAlgorithm;
        this._customerKey = config.customerKey;
        this._customerKeyMd5 = config.customerKeyMd5;
        this._expectedBucketOwner = config.expectedBucketOwner;
        this._expectedSourceBucketOwner = config.expectedSourceBucketOwner;
        this._expires = config.expires;
        this._forceDestroy = config.forceDestroy;
        this._key = config.key;
        this._kmsEncryptionContext = config.kmsEncryptionContext;
        this._kmsKeyId = config.kmsKeyId;
        this._metadata = config.metadata;
        this._metadataDirective = config.metadataDirective;
        this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
        this._objectLockMode = config.objectLockMode;
        this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
        this._requestPayer = config.requestPayer;
        this._serverSideEncryption = config.serverSideEncryption;
        this._source = config.source;
        this._sourceCustomerAlgorithm = config.sourceCustomerAlgorithm;
        this._sourceCustomerKey = config.sourceCustomerKey;
        this._sourceCustomerKeyMd5 = config.sourceCustomerKeyMd5;
        this._storageClass = config.storageClass;
        this._taggingDirective = config.taggingDirective;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._websiteRedirect = config.websiteRedirect;
        this._grant = config.grant;
    }
    /**
     * @stability stable
     */
    get acl() {
        return this.getStringAttribute('acl');
    }
    /**
     * @stability stable
     */
    set acl(value) {
        this._acl = value;
    }
    /**
     * @stability stable
     */
    resetAcl() {
        this._acl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get aclInput() {
        return this._acl;
    }
    /**
     * @stability stable
     */
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    /**
     * @stability stable
     */
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketInput() {
        return this._bucket;
    }
    /**
     * @stability stable
     */
    get bucketKeyEnabled() {
        return this.getBooleanAttribute('bucket_key_enabled');
    }
    /**
     * @stability stable
     */
    set bucketKeyEnabled(value) {
        this._bucketKeyEnabled = value;
    }
    /**
     * @stability stable
     */
    resetBucketKeyEnabled() {
        this._bucketKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketKeyEnabledInput() {
        return this._bucketKeyEnabled;
    }
    /**
     * @stability stable
     */
    get cacheControl() {
        return this.getStringAttribute('cache_control');
    }
    /**
     * @stability stable
     */
    set cacheControl(value) {
        this._cacheControl = value;
    }
    /**
     * @stability stable
     */
    resetCacheControl() {
        this._cacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cacheControlInput() {
        return this._cacheControl;
    }
    /**
     * @stability stable
     */
    get contentDisposition() {
        return this.getStringAttribute('content_disposition');
    }
    /**
     * @stability stable
     */
    set contentDisposition(value) {
        this._contentDisposition = value;
    }
    /**
     * @stability stable
     */
    resetContentDisposition() {
        this._contentDisposition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentDispositionInput() {
        return this._contentDisposition;
    }
    /**
     * @stability stable
     */
    get contentEncoding() {
        return this.getStringAttribute('content_encoding');
    }
    /**
     * @stability stable
     */
    set contentEncoding(value) {
        this._contentEncoding = value;
    }
    /**
     * @stability stable
     */
    resetContentEncoding() {
        this._contentEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentEncodingInput() {
        return this._contentEncoding;
    }
    /**
     * @stability stable
     */
    get contentLanguage() {
        return this.getStringAttribute('content_language');
    }
    /**
     * @stability stable
     */
    set contentLanguage(value) {
        this._contentLanguage = value;
    }
    /**
     * @stability stable
     */
    resetContentLanguage() {
        this._contentLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentLanguageInput() {
        return this._contentLanguage;
    }
    /**
     * @stability stable
     */
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    /**
     * @stability stable
     */
    set contentType(value) {
        this._contentType = value;
    }
    /**
     * @stability stable
     */
    resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentTypeInput() {
        return this._contentType;
    }
    /**
     * @stability stable
     */
    get copyIfMatch() {
        return this.getStringAttribute('copy_if_match');
    }
    /**
     * @stability stable
     */
    set copyIfMatch(value) {
        this._copyIfMatch = value;
    }
    /**
     * @stability stable
     */
    resetCopyIfMatch() {
        this._copyIfMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get copyIfMatchInput() {
        return this._copyIfMatch;
    }
    /**
     * @stability stable
     */
    get copyIfModifiedSince() {
        return this.getStringAttribute('copy_if_modified_since');
    }
    /**
     * @stability stable
     */
    set copyIfModifiedSince(value) {
        this._copyIfModifiedSince = value;
    }
    /**
     * @stability stable
     */
    resetCopyIfModifiedSince() {
        this._copyIfModifiedSince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get copyIfModifiedSinceInput() {
        return this._copyIfModifiedSince;
    }
    /**
     * @stability stable
     */
    get copyIfNoneMatch() {
        return this.getStringAttribute('copy_if_none_match');
    }
    /**
     * @stability stable
     */
    set copyIfNoneMatch(value) {
        this._copyIfNoneMatch = value;
    }
    /**
     * @stability stable
     */
    resetCopyIfNoneMatch() {
        this._copyIfNoneMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get copyIfNoneMatchInput() {
        return this._copyIfNoneMatch;
    }
    /**
     * @stability stable
     */
    get copyIfUnmodifiedSince() {
        return this.getStringAttribute('copy_if_unmodified_since');
    }
    /**
     * @stability stable
     */
    set copyIfUnmodifiedSince(value) {
        this._copyIfUnmodifiedSince = value;
    }
    /**
     * @stability stable
     */
    resetCopyIfUnmodifiedSince() {
        this._copyIfUnmodifiedSince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get copyIfUnmodifiedSinceInput() {
        return this._copyIfUnmodifiedSince;
    }
    /**
     * @stability stable
     */
    get customerAlgorithm() {
        return this.getStringAttribute('customer_algorithm');
    }
    /**
     * @stability stable
     */
    set customerAlgorithm(value) {
        this._customerAlgorithm = value;
    }
    /**
     * @stability stable
     */
    resetCustomerAlgorithm() {
        this._customerAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customerAlgorithmInput() {
        return this._customerAlgorithm;
    }
    /**
     * @stability stable
     */
    get customerKey() {
        return this.getStringAttribute('customer_key');
    }
    /**
     * @stability stable
     */
    set customerKey(value) {
        this._customerKey = value;
    }
    /**
     * @stability stable
     */
    resetCustomerKey() {
        this._customerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customerKeyInput() {
        return this._customerKey;
    }
    /**
     * @stability stable
     */
    get customerKeyMd5() {
        return this.getStringAttribute('customer_key_md5');
    }
    /**
     * @stability stable
     */
    set customerKeyMd5(value) {
        this._customerKeyMd5 = value;
    }
    /**
     * @stability stable
     */
    resetCustomerKeyMd5() {
        this._customerKeyMd5 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customerKeyMd5Input() {
        return this._customerKeyMd5;
    }
    // etag - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get etag() {
        return this.getStringAttribute('etag');
    }
    /**
     * @stability stable
     */
    get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    /**
     * @stability stable
     */
    set expectedBucketOwner(value) {
        this._expectedBucketOwner = value;
    }
    /**
     * @stability stable
     */
    resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }
    /**
     * @stability stable
     */
    get expectedSourceBucketOwner() {
        return this.getStringAttribute('expected_source_bucket_owner');
    }
    /**
     * @stability stable
     */
    set expectedSourceBucketOwner(value) {
        this._expectedSourceBucketOwner = value;
    }
    /**
     * @stability stable
     */
    resetExpectedSourceBucketOwner() {
        this._expectedSourceBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get expectedSourceBucketOwnerInput() {
        return this._expectedSourceBucketOwner;
    }
    // expiration - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get expiration() {
        return this.getStringAttribute('expiration');
    }
    /**
     * @stability stable
     */
    get expires() {
        return this.getStringAttribute('expires');
    }
    /**
     * @stability stable
     */
    set expires(value) {
        this._expires = value;
    }
    /**
     * @stability stable
     */
    resetExpires() {
        this._expires = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get expiresInput() {
        return this._expires;
    }
    /**
     * @stability stable
     */
    get forceDestroy() {
        return this.getBooleanAttribute('force_destroy');
    }
    /**
     * @stability stable
     */
    set forceDestroy(value) {
        this._forceDestroy = value;
    }
    /**
     * @stability stable
     */
    resetForceDestroy() {
        this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forceDestroyInput() {
        return this._forceDestroy;
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
    get key() {
        return this.getStringAttribute('key');
    }
    /**
     * @stability stable
     */
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyInput() {
        return this._key;
    }
    /**
     * @stability stable
     */
    get kmsEncryptionContext() {
        return this.getStringAttribute('kms_encryption_context');
    }
    /**
     * @stability stable
     */
    set kmsEncryptionContext(value) {
        this._kmsEncryptionContext = value;
    }
    /**
     * @stability stable
     */
    resetKmsEncryptionContext() {
        this._kmsEncryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsEncryptionContextInput() {
        return this._kmsEncryptionContext;
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
    // last_modified - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    /**
     * @stability stable
     */
    get metadata() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('metadata');
    }
    /**
     * @stability stable
     */
    set metadata(value) {
        this._metadata = value;
    }
    /**
     * @stability stable
     */
    resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metadataInput() {
        return this._metadata;
    }
    /**
     * @stability stable
     */
    get metadataDirective() {
        return this.getStringAttribute('metadata_directive');
    }
    /**
     * @stability stable
     */
    set metadataDirective(value) {
        this._metadataDirective = value;
    }
    /**
     * @stability stable
     */
    resetMetadataDirective() {
        this._metadataDirective = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metadataDirectiveInput() {
        return this._metadataDirective;
    }
    /**
     * @stability stable
     */
    get objectLockLegalHoldStatus() {
        return this.getStringAttribute('object_lock_legal_hold_status');
    }
    /**
     * @stability stable
     */
    set objectLockLegalHoldStatus(value) {
        this._objectLockLegalHoldStatus = value;
    }
    /**
     * @stability stable
     */
    resetObjectLockLegalHoldStatus() {
        this._objectLockLegalHoldStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get objectLockLegalHoldStatusInput() {
        return this._objectLockLegalHoldStatus;
    }
    /**
     * @stability stable
     */
    get objectLockMode() {
        return this.getStringAttribute('object_lock_mode');
    }
    /**
     * @stability stable
     */
    set objectLockMode(value) {
        this._objectLockMode = value;
    }
    /**
     * @stability stable
     */
    resetObjectLockMode() {
        this._objectLockMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get objectLockModeInput() {
        return this._objectLockMode;
    }
    /**
     * @stability stable
     */
    get objectLockRetainUntilDate() {
        return this.getStringAttribute('object_lock_retain_until_date');
    }
    /**
     * @stability stable
     */
    set objectLockRetainUntilDate(value) {
        this._objectLockRetainUntilDate = value;
    }
    /**
     * @stability stable
     */
    resetObjectLockRetainUntilDate() {
        this._objectLockRetainUntilDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get objectLockRetainUntilDateInput() {
        return this._objectLockRetainUntilDate;
    }
    // request_charged - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get requestCharged() {
        return this.getBooleanAttribute('request_charged');
    }
    /**
     * @stability stable
     */
    get requestPayer() {
        return this.getStringAttribute('request_payer');
    }
    /**
     * @stability stable
     */
    set requestPayer(value) {
        this._requestPayer = value;
    }
    /**
     * @stability stable
     */
    resetRequestPayer() {
        this._requestPayer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requestPayerInput() {
        return this._requestPayer;
    }
    /**
     * @stability stable
     */
    get serverSideEncryption() {
        return this.getStringAttribute('server_side_encryption');
    }
    /**
     * @stability stable
     */
    set serverSideEncryption(value) {
        this._serverSideEncryption = value;
    }
    /**
     * @stability stable
     */
    resetServerSideEncryption() {
        this._serverSideEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serverSideEncryptionInput() {
        return this._serverSideEncryption;
    }
    /**
     * @stability stable
     */
    get source() {
        return this.getStringAttribute('source');
    }
    /**
     * @stability stable
     */
    set source(value) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceInput() {
        return this._source;
    }
    /**
     * @stability stable
     */
    get sourceCustomerAlgorithm() {
        return this.getStringAttribute('source_customer_algorithm');
    }
    /**
     * @stability stable
     */
    set sourceCustomerAlgorithm(value) {
        this._sourceCustomerAlgorithm = value;
    }
    /**
     * @stability stable
     */
    resetSourceCustomerAlgorithm() {
        this._sourceCustomerAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceCustomerAlgorithmInput() {
        return this._sourceCustomerAlgorithm;
    }
    /**
     * @stability stable
     */
    get sourceCustomerKey() {
        return this.getStringAttribute('source_customer_key');
    }
    /**
     * @stability stable
     */
    set sourceCustomerKey(value) {
        this._sourceCustomerKey = value;
    }
    /**
     * @stability stable
     */
    resetSourceCustomerKey() {
        this._sourceCustomerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceCustomerKeyInput() {
        return this._sourceCustomerKey;
    }
    /**
     * @stability stable
     */
    get sourceCustomerKeyMd5() {
        return this.getStringAttribute('source_customer_key_md5');
    }
    /**
     * @stability stable
     */
    set sourceCustomerKeyMd5(value) {
        this._sourceCustomerKeyMd5 = value;
    }
    /**
     * @stability stable
     */
    resetSourceCustomerKeyMd5() {
        this._sourceCustomerKeyMd5 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceCustomerKeyMd5Input() {
        return this._sourceCustomerKeyMd5;
    }
    // source_version_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sourceVersionId() {
        return this.getStringAttribute('source_version_id');
    }
    /**
     * @stability stable
     */
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    /**
     * @stability stable
     */
    set storageClass(value) {
        this._storageClass = value;
    }
    /**
     * @stability stable
     */
    resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageClassInput() {
        return this._storageClass;
    }
    /**
     * @stability stable
     */
    get taggingDirective() {
        return this.getStringAttribute('tagging_directive');
    }
    /**
     * @stability stable
     */
    set taggingDirective(value) {
        this._taggingDirective = value;
    }
    /**
     * @stability stable
     */
    resetTaggingDirective() {
        this._taggingDirective = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taggingDirectiveInput() {
        return this._taggingDirective;
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
    // version_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    /**
     * @stability stable
     */
    get websiteRedirect() {
        return this.getStringAttribute('website_redirect');
    }
    /**
     * @stability stable
     */
    set websiteRedirect(value) {
        this._websiteRedirect = value;
    }
    /**
     * @stability stable
     */
    resetWebsiteRedirect() {
        this._websiteRedirect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get websiteRedirectInput() {
        return this._websiteRedirect;
    }
    /**
     * @stability stable
     */
    get grant() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('grant');
    }
    /**
     * @stability stable
     */
    set grant(value) {
        this._grant = value;
    }
    /**
     * @stability stable
     */
    resetGrant() {
        this._grant = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get grantInput() {
        return this._grant;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            acl: cdktf.stringToTerraform(this._acl),
            bucket: cdktf.stringToTerraform(this._bucket),
            bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
            cache_control: cdktf.stringToTerraform(this._cacheControl),
            content_disposition: cdktf.stringToTerraform(this._contentDisposition),
            content_encoding: cdktf.stringToTerraform(this._contentEncoding),
            content_language: cdktf.stringToTerraform(this._contentLanguage),
            content_type: cdktf.stringToTerraform(this._contentType),
            copy_if_match: cdktf.stringToTerraform(this._copyIfMatch),
            copy_if_modified_since: cdktf.stringToTerraform(this._copyIfModifiedSince),
            copy_if_none_match: cdktf.stringToTerraform(this._copyIfNoneMatch),
            copy_if_unmodified_since: cdktf.stringToTerraform(this._copyIfUnmodifiedSince),
            customer_algorithm: cdktf.stringToTerraform(this._customerAlgorithm),
            customer_key: cdktf.stringToTerraform(this._customerKey),
            customer_key_md5: cdktf.stringToTerraform(this._customerKeyMd5),
            expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
            expected_source_bucket_owner: cdktf.stringToTerraform(this._expectedSourceBucketOwner),
            expires: cdktf.stringToTerraform(this._expires),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            key: cdktf.stringToTerraform(this._key),
            kms_encryption_context: cdktf.stringToTerraform(this._kmsEncryptionContext),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
            metadata_directive: cdktf.stringToTerraform(this._metadataDirective),
            object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
            object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
            object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
            request_payer: cdktf.stringToTerraform(this._requestPayer),
            server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
            source: cdktf.stringToTerraform(this._source),
            source_customer_algorithm: cdktf.stringToTerraform(this._sourceCustomerAlgorithm),
            source_customer_key: cdktf.stringToTerraform(this._sourceCustomerKey),
            source_customer_key_md5: cdktf.stringToTerraform(this._sourceCustomerKeyMd5),
            storage_class: cdktf.stringToTerraform(this._storageClass),
            tagging_directive: cdktf.stringToTerraform(this._taggingDirective),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
            grant: cdktf.listMapper(s3ObjectCopyGrantToTerraform)(this._grant),
        };
    }
}
exports.S3ObjectCopy = S3ObjectCopy;
_a = JSII_RTTI_SYMBOL_1;
S3ObjectCopy[_a] = { fqn: "@cdktf/provider-aws.s3.S3ObjectCopy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
S3ObjectCopy.tfResourceType = "aws_s3_object_copy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtb2JqZWN0LWNvcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvczMvczMtb2JqZWN0LWNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFnRy9CLFNBQWdCLDRCQUE0QixDQUFDLE1BQTBCO0lBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzNFLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFaRCxvRUFZQzs7Ozs7O0FBSUQsTUFBYSxZQUFhLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU92RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBMEI7UUFDekUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxvQkFBb0I7WUFDM0MsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDbkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFRRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBQ0QsSUFBVyxHQUFHLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBQ00sUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWtDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzs7O0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsSUFBVyxxQkFBcUIsQ0FBQyxLQUFhO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7OztJQUNNLDBCQUEwQjtRQUMvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsMERBQTBEOzs7O0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBSUQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBQ0QsSUFBVyx5QkFBeUIsQ0FBQyxLQUFhO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNNLDhCQUE4QjtRQUNuQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDekMsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQVEsQ0FBQztJQUMxRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBa0M7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBQ0QsSUFBVyxHQUFHLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxtRUFBbUU7Ozs7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBUSxDQUFDO0lBQzNELENBQUM7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFvRDtRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFDRCxJQUFXLHlCQUF5QixDQUFDLEtBQWE7UUFDaEQsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDOzs7O0lBQ00sOEJBQThCO1FBQ25DLElBQUksQ0FBQywwQkFBMEIsR0FBRyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDhCQUE4QjtRQUN2QyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUN6QyxDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBSUQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBQ0QsSUFBVyx5QkFBeUIsQ0FBQyxLQUFhO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNNLDhCQUE4QjtRQUNuQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDekMsQ0FBQztJQUVELHFFQUFxRTs7OztJQUNyRSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQVEsQ0FBQztJQUM1RCxDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUNELElBQVcsdUJBQXVCLENBQUMsS0FBYTtRQUM5QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSw0QkFBNEI7UUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7OztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELHVFQUF1RTs7OztJQUN2RSxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQW9EO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBUSxDQUFDO0lBQzNELENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFvRDtRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUlELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFDRCxJQUFXLGVBQWUsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7OztJQUNNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQVEsQ0FBQztJQUN4RCxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBMEI7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNNLFVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3BFLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDaEUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRSxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEQsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pELHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDMUUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsRSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzlFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDcEUsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQy9ELHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDekUsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUN0RixPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0MsYUFBYSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzNELEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuRCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BFLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7WUFDdkYsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDL0QsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUN2RixhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzRSxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztZQUNqRixtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3JFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDNUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbkUsQ0FBQztJQUNKLENBQUM7O0FBaHdCSCxvQ0Fpd0JDOzs7QUEvdkJDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csMkJBQWMsR0FBVyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFMzT2JqZWN0Q29weUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXRLZXlFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYWNoZUNvbnRyb2w/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnREaXNwb3NpdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudEVuY29kaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50TGFuZ3VhZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50VHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29weUlmTWF0Y2g/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvcHlJZk1vZGlmaWVkU2luY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3B5SWZOb25lTWF0Y2g/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3B5SWZVbm1vZGlmaWVkU2luY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21lckFsZ29yaXRobT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbWVyS2V5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21lcktleU1kNT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4cGVjdGVkQnVja2V0T3duZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4cGVjdGVkU291cmNlQnVja2V0T3duZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4cGlyZXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZvcmNlRGVzdHJveT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNFbmNyeXB0aW9uQ29udGV4dD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWV0YWRhdGE/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRhZGF0YURpcmVjdGl2ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RMb2NrTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RMb2NrUmV0YWluVW50aWxEYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1ZXN0UGF5ZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZlclNpZGVFbmNyeXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VDdXN0b21lcktleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VDdXN0b21lcktleU1kNT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ2dpbmdEaXJlY3RpdmU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2Vic2l0ZVJlZGlyZWN0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyYW50PzogUzNPYmplY3RDb3B5R3JhbnRbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNPYmplY3RDb3B5R3JhbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVtYWlsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXJpPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNPYmplY3RDb3B5R3JhbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM09iamVjdENvcHlHcmFudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVtYWlsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgcGVybWlzc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucGVybWlzc2lvbnMpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVyaSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTM09iamVjdENvcHkgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfczNfb2JqZWN0X2NvcHlcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUzNPYmplY3RDb3B5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfczNfb2JqZWN0X2NvcHknLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWNsID0gY29uZmlnLmFjbDtcbiAgICB0aGlzLl9idWNrZXQgPSBjb25maWcuYnVja2V0O1xuICAgIHRoaXMuX2J1Y2tldEtleUVuYWJsZWQgPSBjb25maWcuYnVja2V0S2V5RW5hYmxlZDtcbiAgICB0aGlzLl9jYWNoZUNvbnRyb2wgPSBjb25maWcuY2FjaGVDb250cm9sO1xuICAgIHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiA9IGNvbmZpZy5jb250ZW50RGlzcG9zaXRpb247XG4gICAgdGhpcy5fY29udGVudEVuY29kaW5nID0gY29uZmlnLmNvbnRlbnRFbmNvZGluZztcbiAgICB0aGlzLl9jb250ZW50TGFuZ3VhZ2UgPSBjb25maWcuY29udGVudExhbmd1YWdlO1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gY29uZmlnLmNvbnRlbnRUeXBlO1xuICAgIHRoaXMuX2NvcHlJZk1hdGNoID0gY29uZmlnLmNvcHlJZk1hdGNoO1xuICAgIHRoaXMuX2NvcHlJZk1vZGlmaWVkU2luY2UgPSBjb25maWcuY29weUlmTW9kaWZpZWRTaW5jZTtcbiAgICB0aGlzLl9jb3B5SWZOb25lTWF0Y2ggPSBjb25maWcuY29weUlmTm9uZU1hdGNoO1xuICAgIHRoaXMuX2NvcHlJZlVubW9kaWZpZWRTaW5jZSA9IGNvbmZpZy5jb3B5SWZVbm1vZGlmaWVkU2luY2U7XG4gICAgdGhpcy5fY3VzdG9tZXJBbGdvcml0aG0gPSBjb25maWcuY3VzdG9tZXJBbGdvcml0aG07XG4gICAgdGhpcy5fY3VzdG9tZXJLZXkgPSBjb25maWcuY3VzdG9tZXJLZXk7XG4gICAgdGhpcy5fY3VzdG9tZXJLZXlNZDUgPSBjb25maWcuY3VzdG9tZXJLZXlNZDU7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IGNvbmZpZy5leHBlY3RlZEJ1Y2tldE93bmVyO1xuICAgIHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXIgPSBjb25maWcuZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcjtcbiAgICB0aGlzLl9leHBpcmVzID0gY29uZmlnLmV4cGlyZXM7XG4gICAgdGhpcy5fZm9yY2VEZXN0cm95ID0gY29uZmlnLmZvcmNlRGVzdHJveTtcbiAgICB0aGlzLl9rZXkgPSBjb25maWcua2V5O1xuICAgIHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0ID0gY29uZmlnLmttc0VuY3J5cHRpb25Db250ZXh0O1xuICAgIHRoaXMuX2ttc0tleUlkID0gY29uZmlnLmttc0tleUlkO1xuICAgIHRoaXMuX21ldGFkYXRhID0gY29uZmlnLm1ldGFkYXRhO1xuICAgIHRoaXMuX21ldGFkYXRhRGlyZWN0aXZlID0gY29uZmlnLm1ldGFkYXRhRGlyZWN0aXZlO1xuICAgIHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMgPSBjb25maWcub2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cztcbiAgICB0aGlzLl9vYmplY3RMb2NrTW9kZSA9IGNvbmZpZy5vYmplY3RMb2NrTW9kZTtcbiAgICB0aGlzLl9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlID0gY29uZmlnLm9iamVjdExvY2tSZXRhaW5VbnRpbERhdGU7XG4gICAgdGhpcy5fcmVxdWVzdFBheWVyID0gY29uZmlnLnJlcXVlc3RQYXllcjtcbiAgICB0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbiA9IGNvbmZpZy5zZXJ2ZXJTaWRlRW5jcnlwdGlvbjtcbiAgICB0aGlzLl9zb3VyY2UgPSBjb25maWcuc291cmNlO1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtO1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5ID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyS2V5O1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5TWQ1ID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyS2V5TWQ1O1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IGNvbmZpZy5zdG9yYWdlQ2xhc3M7XG4gICAgdGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSA9IGNvbmZpZy50YWdnaW5nRGlyZWN0aXZlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fd2Vic2l0ZVJlZGlyZWN0ID0gY29uZmlnLndlYnNpdGVSZWRpcmVjdDtcbiAgICB0aGlzLl9ncmFudCA9IGNvbmZpZy5ncmFudDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWNsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNsJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjbCgpIHtcbiAgICB0aGlzLl9hY2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2w7XG4gIH1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXQ7XG4gIH1cblxuICAvLyBidWNrZXRfa2V5X2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXRLZXlFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBidWNrZXRLZXlFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2J1Y2tldF9rZXlfZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldEtleUVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2J1Y2tldEtleUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXRLZXlFbmFibGVkKCkge1xuICAgIHRoaXMuX2J1Y2tldEtleUVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldEtleUVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0S2V5RW5hYmxlZDtcbiAgfVxuXG4gIC8vIGNhY2hlX2NvbnRyb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoZUNvbnRyb2w/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhY2hlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhY2hlX2NvbnRyb2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhY2hlQ29udHJvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FjaGVDb250cm9sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FjaGVDb250cm9sKCkge1xuICAgIHRoaXMuX2NhY2hlQ29udHJvbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FjaGVDb250cm9sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlQ29udHJvbDtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfZGlzcG9zaXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZW50RGlzcG9zaXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbnRlbnREaXNwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRlbnRfZGlzcG9zaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnREaXNwb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudERpc3Bvc2l0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudERpc3Bvc2l0aW9uKCkge1xuICAgIHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudERpc3Bvc2l0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbjtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfZW5jb2RpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZW50RW5jb2Rpbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbnRlbnRFbmNvZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRlbnRfZW5jb2RpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRFbmNvZGluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudEVuY29kaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudEVuY29kaW5nKCkge1xuICAgIHRoaXMuX2NvbnRlbnRFbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudEVuY29kaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRFbmNvZGluZztcbiAgfVxuXG4gIC8vIGNvbnRlbnRfbGFuZ3VhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZW50TGFuZ3VhZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbnRlbnRMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRlbnRfbGFuZ3VhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRMYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudExhbmd1YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudExhbmd1YWdlKCkge1xuICAgIHRoaXMuX2NvbnRlbnRMYW5ndWFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudExhbmd1YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRMYW5ndWFnZTtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRlbnRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGVudFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudFR5cGUoKSB7XG4gICAgdGhpcy5fY29udGVudFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO1xuICB9XG5cbiAgLy8gY29weV9pZl9tYXRjaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3B5SWZNYXRjaD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29weUlmTWF0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3B5X2lmX21hdGNoJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb3B5SWZNYXRjaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29weUlmTWF0Y2ggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3B5SWZNYXRjaCgpIHtcbiAgICB0aGlzLl9jb3B5SWZNYXRjaCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29weUlmTWF0Y2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29weUlmTWF0Y2g7XG4gIH1cblxuICAvLyBjb3B5X2lmX21vZGlmaWVkX3NpbmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcHlJZk1vZGlmaWVkU2luY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvcHlJZk1vZGlmaWVkU2luY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3B5X2lmX21vZGlmaWVkX3NpbmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb3B5SWZNb2RpZmllZFNpbmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb3B5SWZNb2RpZmllZFNpbmNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29weUlmTW9kaWZpZWRTaW5jZSgpIHtcbiAgICB0aGlzLl9jb3B5SWZNb2RpZmllZFNpbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3B5SWZNb2RpZmllZFNpbmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcHlJZk1vZGlmaWVkU2luY2U7XG4gIH1cblxuICAvLyBjb3B5X2lmX25vbmVfbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29weUlmTm9uZU1hdGNoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb3B5SWZOb25lTWF0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3B5X2lmX25vbmVfbWF0Y2gnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcHlJZk5vbmVNYXRjaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29weUlmTm9uZU1hdGNoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29weUlmTm9uZU1hdGNoKCkge1xuICAgIHRoaXMuX2NvcHlJZk5vbmVNYXRjaCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29weUlmTm9uZU1hdGNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcHlJZk5vbmVNYXRjaDtcbiAgfVxuXG4gIC8vIGNvcHlfaWZfdW5tb2RpZmllZF9zaW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3B5SWZVbm1vZGlmaWVkU2luY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvcHlJZlVubW9kaWZpZWRTaW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvcHlfaWZfdW5tb2RpZmllZF9zaW5jZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29weUlmVW5tb2RpZmllZFNpbmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb3B5SWZVbm1vZGlmaWVkU2luY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3B5SWZVbm1vZGlmaWVkU2luY2UoKSB7XG4gICAgdGhpcy5fY29weUlmVW5tb2RpZmllZFNpbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3B5SWZVbm1vZGlmaWVkU2luY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29weUlmVW5tb2RpZmllZFNpbmNlO1xuICB9XG5cbiAgLy8gY3VzdG9tZXJfYWxnb3JpdGhtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tZXJBbGdvcml0aG0/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyQWxnb3JpdGhtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfYWxnb3JpdGhtJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21lckFsZ29yaXRobSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJBbGdvcml0aG0gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21lckFsZ29yaXRobSgpIHtcbiAgICB0aGlzLl9jdXN0b21lckFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJBbGdvcml0aG1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJBbGdvcml0aG07XG4gIH1cblxuICAvLyBjdXN0b21lcl9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tZXJLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21lcktleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJLZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21lcktleSgpIHtcbiAgICB0aGlzLl9jdXN0b21lcktleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJLZXk7XG4gIH1cblxuICAvLyBjdXN0b21lcl9rZXlfbWQ1IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tZXJLZXlNZDU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyS2V5TWQ1KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfa2V5X21kNScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tZXJLZXlNZDUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbWVyS2V5TWQ1ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tZXJLZXlNZDUoKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJLZXlNZDUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyS2V5TWQ1SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWVyS2V5TWQ1O1xuICB9XG5cbiAgLy8gZXRhZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV0YWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldGFnJyk7XG4gIH1cblxuICAvLyBleHBlY3RlZF9idWNrZXRfb3duZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhwZWN0ZWRCdWNrZXRPd25lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhwZWN0ZWRCdWNrZXRPd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cGVjdGVkX2J1Y2tldF9vd25lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhwZWN0ZWRCdWNrZXRPd25lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4cGVjdGVkQnVja2V0T3duZXIoKSB7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhwZWN0ZWRCdWNrZXRPd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHBlY3RlZEJ1Y2tldE93bmVyO1xuICB9XG5cbiAgLy8gZXhwZWN0ZWRfc291cmNlX2J1Y2tldF9vd25lciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leHBlY3RlZFNvdXJjZUJ1Y2tldE93bmVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBleHBlY3RlZFNvdXJjZUJ1Y2tldE93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwZWN0ZWRfc291cmNlX2J1Y2tldF9vd25lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4cGVjdGVkU291cmNlQnVja2V0T3duZXIoKSB7XG4gICAgdGhpcy5fZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHBlY3RlZFNvdXJjZUJ1Y2tldE93bmVyO1xuICB9XG5cbiAgLy8gZXhwaXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4cGlyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHBpcmF0aW9uJyk7XG4gIH1cblxuICAvLyBleHBpcmVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4cGlyZXM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4cGlyZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHBpcmVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHBpcmVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leHBpcmVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhwaXJlcygpIHtcbiAgICB0aGlzLl9leHBpcmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHBpcmVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGlyZXM7XG4gIH1cblxuICAvLyBmb3JjZV9kZXN0cm95IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZvcmNlRGVzdHJveT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZm9yY2VEZXN0cm95KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZvcmNlX2Rlc3Ryb3knKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmb3JjZURlc3Ryb3kodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2ZvcmNlRGVzdHJveSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZvcmNlRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb3JjZURlc3Ryb3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcmNlRGVzdHJveUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZURlc3Ryb3k7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLy8ga21zX2VuY3J5cHRpb25fY29udGV4dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0VuY3J5cHRpb25Db250ZXh0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNFbmNyeXB0aW9uQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19lbmNyeXB0aW9uX2NvbnRleHQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0VuY3J5cHRpb25Db250ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNFbmNyeXB0aW9uQ29udGV4dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0VuY3J5cHRpb25Db250ZXh0KCkge1xuICAgIHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNFbmNyeXB0aW9uQ29udGV4dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNFbmNyeXB0aW9uQ29udGV4dDtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBsYXN0X21vZGlmaWVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdE1vZGlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9tb2RpZmllZCcpO1xuICB9XG5cbiAgLy8gbWV0YWRhdGEgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRhZGF0YT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgbWV0YWRhdGEoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21ldGFkYXRhJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0YWRhdGEodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0YWRhdGEoKSB7XG4gICAgdGhpcy5fbWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhO1xuICB9XG5cbiAgLy8gbWV0YWRhdGFfZGlyZWN0aXZlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldGFkYXRhRGlyZWN0aXZlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXRhZGF0YURpcmVjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldGFkYXRhX2RpcmVjdGl2ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0YWRhdGFEaXJlY3RpdmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21ldGFkYXRhRGlyZWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0YWRhdGFEaXJlY3RpdmUoKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFEaXJlY3RpdmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhRGlyZWN0aXZlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhRGlyZWN0aXZlO1xuICB9XG5cbiAgLy8gb2JqZWN0X2xvY2tfbGVnYWxfaG9sZF9zdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0X2xvY2tfbGVnYWxfaG9sZF9zdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9iamVjdExvY2tMZWdhbEhvbGRTdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzKCkge1xuICAgIHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9iamVjdExvY2tMZWdhbEhvbGRTdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cztcbiAgfVxuXG4gIC8vIG9iamVjdF9sb2NrX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vYmplY3RMb2NrTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb2JqZWN0TG9ja01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3RfbG9ja19tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBvYmplY3RMb2NrTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JqZWN0TG9ja01vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPYmplY3RMb2NrTW9kZSgpIHtcbiAgICB0aGlzLl9vYmplY3RMb2NrTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb2JqZWN0TG9ja01vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0TG9ja01vZGU7XG4gIH1cblxuICAvLyBvYmplY3RfbG9ja19yZXRhaW5fdW50aWxfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29iamVjdExvY2tSZXRhaW5VbnRpbERhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9iamVjdExvY2tSZXRhaW5VbnRpbERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3RfbG9ja19yZXRhaW5fdW50aWxfZGF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb2JqZWN0TG9ja1JldGFpblVudGlsRGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JqZWN0TG9ja1JldGFpblVudGlsRGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9iamVjdExvY2tSZXRhaW5VbnRpbERhdGUoKSB7XG4gICAgdGhpcy5fb2JqZWN0TG9ja1JldGFpblVudGlsRGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb2JqZWN0TG9ja1JldGFpblVudGlsRGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlO1xuICB9XG5cbiAgLy8gcmVxdWVzdF9jaGFyZ2VkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVxdWVzdENoYXJnZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVxdWVzdF9jaGFyZ2VkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVxdWVzdF9wYXllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1ZXN0UGF5ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcXVlc3RQYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcXVlc3RfcGF5ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVlc3RQYXllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVxdWVzdFBheWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdFBheWVyKCkge1xuICAgIHRoaXMuX3JlcXVlc3RQYXllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWVzdFBheWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RQYXllcjtcbiAgfVxuXG4gIC8vIHNlcnZlcl9zaWRlX2VuY3J5cHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2ZXJTaWRlRW5jcnlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmVyU2lkZUVuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2ZXJTaWRlRW5jcnlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2ZXJTaWRlRW5jcnlwdGlvbigpIHtcbiAgICB0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmVyU2lkZUVuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb247XG4gIH1cblxuICAvLyBzb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc291cmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gIH1cblxuICAvLyBzb3VyY2VfY3VzdG9tZXJfYWxnb3JpdGhtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VDdXN0b21lckFsZ29yaXRobSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9jdXN0b21lcl9hbGdvcml0aG0nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VDdXN0b21lckFsZ29yaXRobSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtKCkge1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VDdXN0b21lckFsZ29yaXRobUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDdXN0b21lckFsZ29yaXRobTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9jdXN0b21lcl9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlQ3VzdG9tZXJLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNvdXJjZUN1c3RvbWVyS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2N1c3RvbWVyX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlQ3VzdG9tZXJLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlQ3VzdG9tZXJLZXkoKSB7XG4gICAgdGhpcy5fc291cmNlQ3VzdG9tZXJLZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUN1c3RvbWVyS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5O1xuICB9XG5cbiAgLy8gc291cmNlX2N1c3RvbWVyX2tleV9tZDUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlQ3VzdG9tZXJLZXlNZDU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNvdXJjZUN1c3RvbWVyS2V5TWQ1KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2N1c3RvbWVyX2tleV9tZDUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUN1c3RvbWVyS2V5TWQ1KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VDdXN0b21lcktleU1kNSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZUN1c3RvbWVyS2V5TWQ1KCkge1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5TWQ1ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VDdXN0b21lcktleU1kNUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDdXN0b21lcktleU1kNTtcbiAgfVxuXG4gIC8vIHNvdXJjZV92ZXJzaW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlVmVyc2lvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX3ZlcnNpb25faWQnKTtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfY2xhc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlQ2xhc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUNsYXNzKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgfVxuXG4gIC8vIHRhZ2dpbmdfZGlyZWN0aXZlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ2dpbmdEaXJlY3RpdmU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhZ2dpbmdEaXJlY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWdnaW5nX2RpcmVjdGl2ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnZ2luZ0RpcmVjdGl2ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ2dpbmdEaXJlY3RpdmUoKSB7XG4gICAgdGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnZ2luZ0RpcmVjdGl2ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdnaW5nRGlyZWN0aXZlO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHZlcnNpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uX2lkJyk7XG4gIH1cblxuICAvLyB3ZWJzaXRlX3JlZGlyZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2Vic2l0ZVJlZGlyZWN0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB3ZWJzaXRlUmVkaXJlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWJzaXRlX3JlZGlyZWN0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWJzaXRlUmVkaXJlY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dlYnNpdGVSZWRpcmVjdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdlYnNpdGVSZWRpcmVjdCgpIHtcbiAgICB0aGlzLl93ZWJzaXRlUmVkaXJlY3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlYnNpdGVSZWRpcmVjdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93ZWJzaXRlUmVkaXJlY3Q7XG4gIH1cblxuICAvLyBncmFudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncmFudD86IFMzT2JqZWN0Q29weUdyYW50W107IFxuICBwdWJsaWMgZ2V0IGdyYW50KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdncmFudCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGdyYW50KHZhbHVlOiBTM09iamVjdENvcHlHcmFudFtdKSB7XG4gICAgdGhpcy5fZ3JhbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcmFudCgpIHtcbiAgICB0aGlzLl9ncmFudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3JhbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhbnQ7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWNsKSxcbiAgICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVja2V0KSxcbiAgICAgIGJ1Y2tldF9rZXlfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2J1Y2tldEtleUVuYWJsZWQpLFxuICAgICAgY2FjaGVfY29udHJvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2FjaGVDb250cm9sKSxcbiAgICAgIGNvbnRlbnRfZGlzcG9zaXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiksXG4gICAgICBjb250ZW50X2VuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb250ZW50RW5jb2RpbmcpLFxuICAgICAgY29udGVudF9sYW5ndWFnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29udGVudExhbmd1YWdlKSxcbiAgICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29udGVudFR5cGUpLFxuICAgICAgY29weV9pZl9tYXRjaDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29weUlmTWF0Y2gpLFxuICAgICAgY29weV9pZl9tb2RpZmllZF9zaW5jZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29weUlmTW9kaWZpZWRTaW5jZSksXG4gICAgICBjb3B5X2lmX25vbmVfbWF0Y2g6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvcHlJZk5vbmVNYXRjaCksXG4gICAgICBjb3B5X2lmX3VubW9kaWZpZWRfc2luY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvcHlJZlVubW9kaWZpZWRTaW5jZSksXG4gICAgICBjdXN0b21lcl9hbGdvcml0aG06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbWVyQWxnb3JpdGhtKSxcbiAgICAgIGN1c3RvbWVyX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tZXJLZXkpLFxuICAgICAgY3VzdG9tZXJfa2V5X21kNTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tZXJLZXlNZDUpLFxuICAgICAgZXhwZWN0ZWRfYnVja2V0X293bmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9leHBlY3RlZEJ1Y2tldE93bmVyKSxcbiAgICAgIGV4cGVjdGVkX3NvdXJjZV9idWNrZXRfb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXIpLFxuICAgICAgZXhwaXJlczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXhwaXJlcyksXG4gICAgICBmb3JjZV9kZXN0cm95OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZm9yY2VEZXN0cm95KSxcbiAgICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa2V5KSxcbiAgICAgIGttc19lbmNyeXB0aW9uX2NvbnRleHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0KSxcbiAgICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ttc0tleUlkKSxcbiAgICAgIG1ldGFkYXRhOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl9tZXRhZGF0YSksXG4gICAgICBtZXRhZGF0YV9kaXJlY3RpdmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21ldGFkYXRhRGlyZWN0aXZlKSxcbiAgICAgIG9iamVjdF9sb2NrX2xlZ2FsX2hvbGRfc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9vYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzKSxcbiAgICAgIG9iamVjdF9sb2NrX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29iamVjdExvY2tNb2RlKSxcbiAgICAgIG9iamVjdF9sb2NrX3JldGFpbl91bnRpbF9kYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlKSxcbiAgICAgIHJlcXVlc3RfcGF5ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcXVlc3RQYXllciksXG4gICAgICBzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbiksXG4gICAgICBzb3VyY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NvdXJjZSksXG4gICAgICBzb3VyY2VfY3VzdG9tZXJfYWxnb3JpdGhtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VDdXN0b21lckFsZ29yaXRobSksXG4gICAgICBzb3VyY2VfY3VzdG9tZXJfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VDdXN0b21lcktleSksXG4gICAgICBzb3VyY2VfY3VzdG9tZXJfa2V5X21kNTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc291cmNlQ3VzdG9tZXJLZXlNZDUpLFxuICAgICAgc3RvcmFnZV9jbGFzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RvcmFnZUNsYXNzKSxcbiAgICAgIHRhZ2dpbmdfZGlyZWN0aXZlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YWdnaW5nRGlyZWN0aXZlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgd2Vic2l0ZV9yZWRpcmVjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fd2Vic2l0ZVJlZGlyZWN0KSxcbiAgICAgIGdyYW50OiBjZGt0Zi5saXN0TWFwcGVyKHMzT2JqZWN0Q29weUdyYW50VG9UZXJyYWZvcm0pKHRoaXMuX2dyYW50KSxcbiAgICB9O1xuICB9XG59XG4iXX0=