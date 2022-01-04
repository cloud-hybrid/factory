"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppmeshVirtualNode = exports.AppmeshVirtualNodeSpecOutputReference = exports.appmeshVirtualNodeSpecToTerraform = exports.AppmeshVirtualNodeSpecServiceDiscoveryOutputReference = exports.appmeshVirtualNodeSpecServiceDiscoveryToTerraform = exports.AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference = exports.appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform = exports.AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference = exports.appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform = exports.AppmeshVirtualNodeSpecLoggingOutputReference = exports.appmeshVirtualNodeSpecLoggingToTerraform = exports.AppmeshVirtualNodeSpecLoggingAccessLogOutputReference = exports.appmeshVirtualNodeSpecLoggingAccessLogToTerraform = exports.AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference = exports.appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform = exports.AppmeshVirtualNodeSpecListenerOutputReference = exports.appmeshVirtualNodeSpecListenerToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsOutputReference = exports.appmeshVirtualNodeSpecListenerTlsToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsValidationOutputReference = exports.appmeshVirtualNodeSpecListenerTlsValidationToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference = exports.appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference = exports.appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference = exports.appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference = exports.appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference = exports.appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference = exports.appmeshVirtualNodeSpecListenerTlsCertificateToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference = exports.appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference = exports.appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform = exports.AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference = exports.appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform = exports.AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference = exports.appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform = exports.AppmeshVirtualNodeSpecListenerPortMappingOutputReference = exports.appmeshVirtualNodeSpecListenerPortMappingToTerraform = exports.AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference = exports.appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform = exports.AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference = exports.appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform = exports.AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference = exports.appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform = exports.AppmeshVirtualNodeSpecListenerHealthCheckOutputReference = exports.appmeshVirtualNodeSpecListenerHealthCheckToTerraform = exports.AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference = exports.appmeshVirtualNodeSpecListenerConnectionPoolToTerraform = exports.AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference = exports.appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform = exports.AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference = exports.appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform = exports.AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference = exports.appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform = exports.AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference = exports.appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform = exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference = exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform = exports.appmeshVirtualNodeSpecBackendToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform = exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference = exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        if (this._privateKey) {
            hasAnyValues = true;
            internalValueResult.privateKey = this._privateKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
            this._privateKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
            this._privateKey = value.privateKey;
        }
    }
    /**
     * @stability stable
     */
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    /**
     * @stability stable
     */
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateChainInput() {
        return this._certificateChain;
    }
    /**
     * @stability stable
     */
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    /**
     * @stability stable
     */
    set privateKey(value) {
        this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get privateKeyInput() {
        return this._privateKey;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference[_a] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    /**
     * @stability stable
     */
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    /**
     * @stability stable
     */
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference[_b] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct.file),
        sds: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._file) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_45 = this._file) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._sds) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_47 = this._sds) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    /**
     * @stability stable
     */
    get file() {
        return this._file;
    }
    /**
     * @stability stable
     */
    putFile(value) {
        this._file.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileInput() {
        return this._file.internalValue;
    }
    /**
     * @stability stable
     */
    get sds() {
        return this._sds;
    }
    /**
     * @stability stable
     */
    putSds(value) {
        this._sds.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference[_c] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._exact) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exact = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exact = value.exact;
        }
    }
    /**
     * @stability stable
     */
    get exact() {
        return this.getListAttribute('exact');
    }
    /**
     * @stability stable
     */
    set exact(value) {
        this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get exactInput() {
        return this._exact;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference[_d] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        match: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct.match),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // match - computed: false, optional: false, required: true
        this._match = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._match) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.match = (_45 = this._match) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._match.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._match.internalValue = value.match;
        }
    }
    /**
     * @stability stable
     */
    get match() {
        return this._match;
    }
    /**
     * @stability stable
     */
    putMatch(value) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get matchInput() {
        return this._match.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference[_e] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateAuthorityArns) {
            hasAnyValues = true;
            internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateAuthorityArns = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateAuthorityArns = value.certificateAuthorityArns;
        }
    }
    /**
     * @stability stable
     */
    get certificateAuthorityArns() {
        return this.getListAttribute('certificate_authority_arns');
    }
    /**
     * @stability stable
     */
    set certificateAuthorityArns(value) {
        this._certificateAuthorityArns = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateAuthorityArnsInput() {
        return this._certificateAuthorityArns;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference[_f] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
        }
    }
    /**
     * @stability stable
     */
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    /**
     * @stability stable
     */
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateChainInput() {
        return this._certificateChain;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference[_g] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    /**
     * @stability stable
     */
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    /**
     * @stability stable
     */
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference[_h] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct.acm),
        file: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct.file),
        sds: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // acm - computed: false, optional: true, required: false
        this._acm = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference(this, "acm", true);
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47, _48, _49;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._acm) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.acm = (_45 = this._acm) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._file) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_47 = this._file) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        if ((_48 = this._sds) === null || _48 === void 0 ? void 0 : _48.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_49 = this._sds) === null || _49 === void 0 ? void 0 : _49.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._acm.internalValue = undefined;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._acm.internalValue = value.acm;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    /**
     * @stability stable
     */
    get acm() {
        return this._acm;
    }
    /**
     * @stability stable
     */
    putAcm(value) {
        this._acm.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAcm() {
        this._acm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get acmInput() {
        return this._acm.internalValue;
    }
    /**
     * @stability stable
     */
    get file() {
        return this._file;
    }
    /**
     * @stability stable
     */
    putFile(value) {
        this._file.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileInput() {
        return this._file.internalValue;
    }
    /**
     * @stability stable
     */
    get sds() {
        return this._sds;
    }
    /**
     * @stability stable
     */
    putSds(value) {
        this._sds.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference;
_j = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference[_j] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        subject_alternative_names: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct.subjectAlternativeNames),
        trust: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct.trust),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // subject_alternative_names - computed: false, optional: true, required: false
        this._subjectAlternativeNames = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names", true);
        // trust - computed: false, optional: false, required: true
        this._trust = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference(this, "trust", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._subjectAlternativeNames) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = (_45 = this._subjectAlternativeNames) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._trust) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.trust = (_47 = this._trust) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._subjectAlternativeNames.internalValue = undefined;
            this._trust.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
            this._trust.internalValue = value.trust;
        }
    }
    /**
     * @stability stable
     */
    get subjectAlternativeNames() {
        return this._subjectAlternativeNames;
    }
    /**
     * @stability stable
     */
    putSubjectAlternativeNames(value) {
        this._subjectAlternativeNames.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSubjectAlternativeNames() {
        this._subjectAlternativeNames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames.internalValue;
    }
    /**
     * @stability stable
     */
    get trust() {
        return this._trust;
    }
    /**
     * @stability stable
     */
    putTrust(value) {
        this._trust.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get trustInput() {
        return this._trust.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference;
_k = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference[_k] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct.certificate),
        validation: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct.validation),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // certificate - computed: false, optional: true, required: false
        this._certificate = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference(this, "certificate", true);
        // validation - computed: false, optional: false, required: true
        this._validation = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference(this, "validation", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enforce) {
            hasAnyValues = true;
            internalValueResult.enforce = this._enforce;
        }
        if (this._ports) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports;
        }
        if ((_44 = this._certificate) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.certificate = (_45 = this._certificate) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._validation) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.validation = (_47 = this._validation) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enforce = undefined;
            this._ports = undefined;
            this._certificate.internalValue = undefined;
            this._validation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enforce = value.enforce;
            this._ports = value.ports;
            this._certificate.internalValue = value.certificate;
            this._validation.internalValue = value.validation;
        }
    }
    /**
     * @stability stable
     */
    get enforce() {
        return this.getBooleanAttribute('enforce');
    }
    /**
     * @stability stable
     */
    set enforce(value) {
        this._enforce = value;
    }
    /**
     * @stability stable
     */
    resetEnforce() {
        this._enforce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enforceInput() {
        return this._enforce;
    }
    /**
     * @stability stable
     */
    get ports() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ports');
    }
    /**
     * @stability stable
     */
    set ports(value) {
        this._ports = value;
    }
    /**
     * @stability stable
     */
    resetPorts() {
        this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portsInput() {
        return this._ports;
    }
    /**
     * @stability stable
     */
    get certificate() {
        return this._certificate;
    }
    /**
     * @stability stable
     */
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateInput() {
        return this._certificate.internalValue;
    }
    /**
     * @stability stable
     */
    get validation() {
        return this._validation;
    }
    /**
     * @stability stable
     */
    putValidation(value) {
        this._validation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validationInput() {
        return this._validation.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference[_l] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tls: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct.tls),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // tls - computed: false, optional: true, required: false
        this._tls = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference(this, "tls", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._tls) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.tls = (_45 = this._tls) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._tls.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._tls.internalValue = value.tls;
        }
    }
    /**
     * @stability stable
     */
    get tls() {
        return this._tls;
    }
    /**
     * @stability stable
     */
    putTls(value) {
        this._tls.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTls() {
        this._tls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tlsInput() {
        return this._tls.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference;
_m = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference[_m] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_service_name: cdktf.stringToTerraform(struct.virtualServiceName),
        client_policy: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct.clientPolicy),
    };
}
exports.appmeshVirtualNodeSpecBackendVirtualServiceToTerraform = appmeshVirtualNodeSpecBackendVirtualServiceToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // client_policy - computed: false, optional: true, required: false
        this._clientPolicy = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference(this, "client_policy", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._virtualServiceName) {
            hasAnyValues = true;
            internalValueResult.virtualServiceName = this._virtualServiceName;
        }
        if ((_44 = this._clientPolicy) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.clientPolicy = (_45 = this._clientPolicy) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._virtualServiceName = undefined;
            this._clientPolicy.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._virtualServiceName = value.virtualServiceName;
            this._clientPolicy.internalValue = value.clientPolicy;
        }
    }
    /**
     * @stability stable
     */
    get virtualServiceName() {
        return this.getStringAttribute('virtual_service_name');
    }
    /**
     * @stability stable
     */
    set virtualServiceName(value) {
        this._virtualServiceName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get virtualServiceNameInput() {
        return this._virtualServiceName;
    }
    /**
     * @stability stable
     */
    get clientPolicy() {
        return this._clientPolicy;
    }
    /**
     * @stability stable
     */
    putClientPolicy(value) {
        this._clientPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetClientPolicy() {
        this._clientPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clientPolicyInput() {
        return this._clientPolicy.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference = AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference;
_o = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference[_o] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        virtual_service: appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct.virtualService),
    };
}
exports.appmeshVirtualNodeSpecBackendToTerraform = appmeshVirtualNodeSpecBackendToTerraform;
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        if (this._privateKey) {
            hasAnyValues = true;
            internalValueResult.privateKey = this._privateKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
            this._privateKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
            this._privateKey = value.privateKey;
        }
    }
    /**
     * @stability stable
     */
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    /**
     * @stability stable
     */
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateChainInput() {
        return this._certificateChain;
    }
    /**
     * @stability stable
     */
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    /**
     * @stability stable
     */
    set privateKey(value) {
        this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get privateKeyInput() {
        return this._privateKey;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
_p = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference[_p] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    /**
     * @stability stable
     */
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    /**
     * @stability stable
     */
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
_q = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference[_q] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct.file),
        sds: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._file) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_45 = this._file) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._sds) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_47 = this._sds) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    /**
     * @stability stable
     */
    get file() {
        return this._file;
    }
    /**
     * @stability stable
     */
    putFile(value) {
        this._file.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileInput() {
        return this._file.internalValue;
    }
    /**
     * @stability stable
     */
    get sds() {
        return this._sds;
    }
    /**
     * @stability stable
     */
    putSds(value) {
        this._sds.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
_r = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference[_r] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._exact) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exact = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exact = value.exact;
        }
    }
    /**
     * @stability stable
     */
    get exact() {
        return this.getListAttribute('exact');
    }
    /**
     * @stability stable
     */
    set exact(value) {
        this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get exactInput() {
        return this._exact;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
_s = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference[_s] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        match: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct.match),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // match - computed: false, optional: false, required: true
        this._match = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._match) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.match = (_45 = this._match) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._match.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._match.internalValue = value.match;
        }
    }
    /**
     * @stability stable
     */
    get match() {
        return this._match;
    }
    /**
     * @stability stable
     */
    putMatch(value) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get matchInput() {
        return this._match.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
_t = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference[_t] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateAuthorityArns) {
            hasAnyValues = true;
            internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateAuthorityArns = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateAuthorityArns = value.certificateAuthorityArns;
        }
    }
    /**
     * @stability stable
     */
    get certificateAuthorityArns() {
        return this.getListAttribute('certificate_authority_arns');
    }
    /**
     * @stability stable
     */
    set certificateAuthorityArns(value) {
        this._certificateAuthorityArns = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateAuthorityArnsInput() {
        return this._certificateAuthorityArns;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
_u = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference[_u] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
        }
    }
    /**
     * @stability stable
     */
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    /**
     * @stability stable
     */
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateChainInput() {
        return this._certificateChain;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
_v = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference[_v] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    /**
     * @stability stable
     */
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    /**
     * @stability stable
     */
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
_w = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference[_w] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct.acm),
        file: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct.file),
        sds: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // acm - computed: false, optional: true, required: false
        this._acm = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this, "acm", true);
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47, _48, _49;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._acm) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.acm = (_45 = this._acm) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._file) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_47 = this._file) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        if ((_48 = this._sds) === null || _48 === void 0 ? void 0 : _48.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_49 = this._sds) === null || _49 === void 0 ? void 0 : _49.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._acm.internalValue = undefined;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._acm.internalValue = value.acm;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    /**
     * @stability stable
     */
    get acm() {
        return this._acm;
    }
    /**
     * @stability stable
     */
    putAcm(value) {
        this._acm.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAcm() {
        this._acm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get acmInput() {
        return this._acm.internalValue;
    }
    /**
     * @stability stable
     */
    get file() {
        return this._file;
    }
    /**
     * @stability stable
     */
    putFile(value) {
        this._file.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileInput() {
        return this._file.internalValue;
    }
    /**
     * @stability stable
     */
    get sds() {
        return this._sds;
    }
    /**
     * @stability stable
     */
    putSds(value) {
        this._sds.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
_x = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference[_x] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        subject_alternative_names: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct.subjectAlternativeNames),
        trust: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct.trust),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // subject_alternative_names - computed: false, optional: true, required: false
        this._subjectAlternativeNames = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names", true);
        // trust - computed: false, optional: false, required: true
        this._trust = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this, "trust", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._subjectAlternativeNames) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = (_45 = this._subjectAlternativeNames) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._trust) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.trust = (_47 = this._trust) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._subjectAlternativeNames.internalValue = undefined;
            this._trust.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
            this._trust.internalValue = value.trust;
        }
    }
    /**
     * @stability stable
     */
    get subjectAlternativeNames() {
        return this._subjectAlternativeNames;
    }
    /**
     * @stability stable
     */
    putSubjectAlternativeNames(value) {
        this._subjectAlternativeNames.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSubjectAlternativeNames() {
        this._subjectAlternativeNames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames.internalValue;
    }
    /**
     * @stability stable
     */
    get trust() {
        return this._trust;
    }
    /**
     * @stability stable
     */
    putTrust(value) {
        this._trust.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get trustInput() {
        return this._trust.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference;
_y = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference[_y] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct.certificate),
        validation: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct.validation),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // certificate - computed: false, optional: true, required: false
        this._certificate = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this, "certificate", true);
        // validation - computed: false, optional: false, required: true
        this._validation = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference(this, "validation", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enforce) {
            hasAnyValues = true;
            internalValueResult.enforce = this._enforce;
        }
        if (this._ports) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports;
        }
        if ((_44 = this._certificate) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.certificate = (_45 = this._certificate) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._validation) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.validation = (_47 = this._validation) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enforce = undefined;
            this._ports = undefined;
            this._certificate.internalValue = undefined;
            this._validation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enforce = value.enforce;
            this._ports = value.ports;
            this._certificate.internalValue = value.certificate;
            this._validation.internalValue = value.validation;
        }
    }
    /**
     * @stability stable
     */
    get enforce() {
        return this.getBooleanAttribute('enforce');
    }
    /**
     * @stability stable
     */
    set enforce(value) {
        this._enforce = value;
    }
    /**
     * @stability stable
     */
    resetEnforce() {
        this._enforce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enforceInput() {
        return this._enforce;
    }
    /**
     * @stability stable
     */
    get ports() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ports');
    }
    /**
     * @stability stable
     */
    set ports(value) {
        this._ports = value;
    }
    /**
     * @stability stable
     */
    resetPorts() {
        this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portsInput() {
        return this._ports;
    }
    /**
     * @stability stable
     */
    get certificate() {
        return this._certificate;
    }
    /**
     * @stability stable
     */
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateInput() {
        return this._certificate.internalValue;
    }
    /**
     * @stability stable
     */
    get validation() {
        return this._validation;
    }
    /**
     * @stability stable
     */
    putValidation(value) {
        this._validation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validationInput() {
        return this._validation.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference;
_z = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference[_z] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tls: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct.tls),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform = appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // tls - computed: false, optional: true, required: false
        this._tls = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference(this, "tls", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._tls) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.tls = (_45 = this._tls) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._tls.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._tls.internalValue = value.tls;
        }
    }
    /**
     * @stability stable
     */
    get tls() {
        return this._tls;
    }
    /**
     * @stability stable
     */
    putTls(value) {
        this._tls.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTls() {
        this._tls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tlsInput() {
        return this._tls.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference = AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference[_0] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_policy: appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct.clientPolicy),
    };
}
exports.appmeshVirtualNodeSpecBackendDefaultsToTerraform = appmeshVirtualNodeSpecBackendDefaultsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // client_policy - computed: false, optional: true, required: false
        this._clientPolicy = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference(this, "client_policy", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._clientPolicy) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.clientPolicy = (_45 = this._clientPolicy) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientPolicy.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientPolicy.internalValue = value.clientPolicy;
        }
    }
    /**
     * @stability stable
     */
    get clientPolicy() {
        return this._clientPolicy;
    }
    /**
     * @stability stable
     */
    putClientPolicy(value) {
        this._clientPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetClientPolicy() {
        this._clientPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clientPolicyInput() {
        return this._clientPolicy.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecBackendDefaultsOutputReference = AppmeshVirtualNodeSpecBackendDefaultsOutputReference;
_1 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecBackendDefaultsOutputReference[_1] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecBackendDefaultsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests),
    };
}
exports.appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform = appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
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
        if (this._maxRequests) {
            hasAnyValues = true;
            internalValueResult.maxRequests = this._maxRequests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxRequests = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxRequests = value.maxRequests;
        }
    }
    /**
     * @stability stable
     */
    get maxRequests() {
        return this.getNumberAttribute('max_requests');
    }
    /**
     * @stability stable
     */
    set maxRequests(value) {
        this._maxRequests = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxRequestsInput() {
        return this._maxRequests;
    }
}
exports.AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference = AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference;
_2 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference[_2] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections),
        max_pending_requests: cdktf.numberToTerraform(struct.maxPendingRequests),
    };
}
exports.appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform = appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
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
        if (this._maxConnections) {
            hasAnyValues = true;
            internalValueResult.maxConnections = this._maxConnections;
        }
        if (this._maxPendingRequests) {
            hasAnyValues = true;
            internalValueResult.maxPendingRequests = this._maxPendingRequests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxConnections = undefined;
            this._maxPendingRequests = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxConnections = value.maxConnections;
            this._maxPendingRequests = value.maxPendingRequests;
        }
    }
    /**
     * @stability stable
     */
    get maxConnections() {
        return this.getNumberAttribute('max_connections');
    }
    /**
     * @stability stable
     */
    set maxConnections(value) {
        this._maxConnections = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxConnectionsInput() {
        return this._maxConnections;
    }
    /**
     * @stability stable
     */
    get maxPendingRequests() {
        return this.getNumberAttribute('max_pending_requests');
    }
    /**
     * @stability stable
     */
    set maxPendingRequests(value) {
        this._maxPendingRequests = value;
    }
    /**
     * @stability stable
     */
    resetMaxPendingRequests() {
        this._maxPendingRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxPendingRequestsInput() {
        return this._maxPendingRequests;
    }
}
exports.AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference = AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference;
_3 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference[_3] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests),
    };
}
exports.appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform = appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
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
        if (this._maxRequests) {
            hasAnyValues = true;
            internalValueResult.maxRequests = this._maxRequests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxRequests = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxRequests = value.maxRequests;
        }
    }
    /**
     * @stability stable
     */
    get maxRequests() {
        return this.getNumberAttribute('max_requests');
    }
    /**
     * @stability stable
     */
    set maxRequests(value) {
        this._maxRequests = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxRequestsInput() {
        return this._maxRequests;
    }
}
exports.AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference = AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference;
_4 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference[_4] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections),
    };
}
exports.appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform = appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
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
        if (this._maxConnections) {
            hasAnyValues = true;
            internalValueResult.maxConnections = this._maxConnections;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxConnections = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxConnections = value.maxConnections;
        }
    }
    /**
     * @stability stable
     */
    get maxConnections() {
        return this.getNumberAttribute('max_connections');
    }
    /**
     * @stability stable
     */
    set maxConnections(value) {
        this._maxConnections = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxConnectionsInput() {
        return this._maxConnections;
    }
}
exports.AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference = AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference;
_5 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference[_5] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        grpc: appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct.grpc),
        http: appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct.http),
        http2: appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct.http2),
        tcp: appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct.tcp),
    };
}
exports.appmeshVirtualNodeSpecListenerConnectionPoolToTerraform = appmeshVirtualNodeSpecListenerConnectionPoolToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // grpc - computed: false, optional: true, required: false
        this._grpc = new AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference(this, "grpc", true);
        // http - computed: false, optional: true, required: false
        this._http = new AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference(this, "http", true);
        // http2 - computed: false, optional: true, required: false
        this._http2 = new AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference(this, "http2", true);
        // tcp - computed: false, optional: true, required: false
        this._tcp = new AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference(this, "tcp", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47, _48, _49, _50, _51;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._grpc) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.grpc = (_45 = this._grpc) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._http) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.http = (_47 = this._http) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        if ((_48 = this._http2) === null || _48 === void 0 ? void 0 : _48.internalValue) {
            hasAnyValues = true;
            internalValueResult.http2 = (_49 = this._http2) === null || _49 === void 0 ? void 0 : _49.internalValue;
        }
        if ((_50 = this._tcp) === null || _50 === void 0 ? void 0 : _50.internalValue) {
            hasAnyValues = true;
            internalValueResult.tcp = (_51 = this._tcp) === null || _51 === void 0 ? void 0 : _51.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._grpc.internalValue = undefined;
            this._http.internalValue = undefined;
            this._http2.internalValue = undefined;
            this._tcp.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._grpc.internalValue = value.grpc;
            this._http.internalValue = value.http;
            this._http2.internalValue = value.http2;
            this._tcp.internalValue = value.tcp;
        }
    }
    /**
     * @stability stable
     */
    get grpc() {
        return this._grpc;
    }
    /**
     * @stability stable
     */
    putGrpc(value) {
        this._grpc.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetGrpc() {
        this._grpc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get grpcInput() {
        return this._grpc.internalValue;
    }
    /**
     * @stability stable
     */
    get http() {
        return this._http;
    }
    /**
     * @stability stable
     */
    putHttp(value) {
        this._http.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHttp() {
        this._http.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpInput() {
        return this._http.internalValue;
    }
    /**
     * @stability stable
     */
    get http2() {
        return this._http2;
    }
    /**
     * @stability stable
     */
    putHttp2(value) {
        this._http2.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHttp2() {
        this._http2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get http2Input() {
        return this._http2.internalValue;
    }
    /**
     * @stability stable
     */
    get tcp() {
        return this._tcp;
    }
    /**
     * @stability stable
     */
    putTcp(value) {
        this._tcp.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTcp() {
        this._tcp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tcpInput() {
        return this._tcp.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference = AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference;
_6 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference[_6] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval_millis: cdktf.numberToTerraform(struct.intervalMillis),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout_millis: cdktf.numberToTerraform(struct.timeoutMillis),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold),
    };
}
exports.appmeshVirtualNodeSpecListenerHealthCheckToTerraform = appmeshVirtualNodeSpecListenerHealthCheckToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
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
        if (this._healthyThreshold) {
            hasAnyValues = true;
            internalValueResult.healthyThreshold = this._healthyThreshold;
        }
        if (this._intervalMillis) {
            hasAnyValues = true;
            internalValueResult.intervalMillis = this._intervalMillis;
        }
        if (this._path) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._timeoutMillis) {
            hasAnyValues = true;
            internalValueResult.timeoutMillis = this._timeoutMillis;
        }
        if (this._unhealthyThreshold) {
            hasAnyValues = true;
            internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._healthyThreshold = undefined;
            this._intervalMillis = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._timeoutMillis = undefined;
            this._unhealthyThreshold = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._healthyThreshold = value.healthyThreshold;
            this._intervalMillis = value.intervalMillis;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._timeoutMillis = value.timeoutMillis;
            this._unhealthyThreshold = value.unhealthyThreshold;
        }
    }
    /**
     * @stability stable
     */
    get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    /**
     * @stability stable
     */
    set healthyThreshold(value) {
        this._healthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get healthyThresholdInput() {
        return this._healthyThreshold;
    }
    /**
     * @stability stable
     */
    get intervalMillis() {
        return this.getNumberAttribute('interval_millis');
    }
    /**
     * @stability stable
     */
    set intervalMillis(value) {
        this._intervalMillis = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalMillisInput() {
        return this._intervalMillis;
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
    get port() {
        return this.getNumberAttribute('port');
    }
    /**
     * @stability stable
     */
    set port(value) {
        this._port = value;
    }
    /**
     * @stability stable
     */
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portInput() {
        return this._port;
    }
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    /**
     * @stability stable
     */
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protocolInput() {
        return this._protocol;
    }
    /**
     * @stability stable
     */
    get timeoutMillis() {
        return this.getNumberAttribute('timeout_millis');
    }
    /**
     * @stability stable
     */
    set timeoutMillis(value) {
        this._timeoutMillis = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutMillisInput() {
        return this._timeoutMillis;
    }
    /**
     * @stability stable
     */
    get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
    /**
     * @stability stable
     */
    set unhealthyThreshold(value) {
        this._unhealthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unhealthyThresholdInput() {
        return this._unhealthyThreshold;
    }
}
exports.AppmeshVirtualNodeSpecListenerHealthCheckOutputReference = AppmeshVirtualNodeSpecListenerHealthCheckOutputReference;
_7 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerHealthCheckOutputReference[_7] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerHealthCheckOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform = appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference = AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference;
_8 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference[_8] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform = appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference = AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference;
_9 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference[_9] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_ejection_percent: cdktf.numberToTerraform(struct.maxEjectionPercent),
        max_server_errors: cdktf.numberToTerraform(struct.maxServerErrors),
        base_ejection_duration: appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct.baseEjectionDuration),
        interval: appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct.interval),
    };
}
exports.appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform = appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // base_ejection_duration - computed: false, optional: false, required: true
        this._baseEjectionDuration = new AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference(this, "base_ejection_duration", true);
        // interval - computed: false, optional: false, required: true
        this._interval = new AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference(this, "interval", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._maxEjectionPercent) {
            hasAnyValues = true;
            internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
        }
        if (this._maxServerErrors) {
            hasAnyValues = true;
            internalValueResult.maxServerErrors = this._maxServerErrors;
        }
        if ((_44 = this._baseEjectionDuration) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.baseEjectionDuration = (_45 = this._baseEjectionDuration) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._interval) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.interval = (_47 = this._interval) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxEjectionPercent = undefined;
            this._maxServerErrors = undefined;
            this._baseEjectionDuration.internalValue = undefined;
            this._interval.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxEjectionPercent = value.maxEjectionPercent;
            this._maxServerErrors = value.maxServerErrors;
            this._baseEjectionDuration.internalValue = value.baseEjectionDuration;
            this._interval.internalValue = value.interval;
        }
    }
    /**
     * @stability stable
     */
    get maxEjectionPercent() {
        return this.getNumberAttribute('max_ejection_percent');
    }
    /**
     * @stability stable
     */
    set maxEjectionPercent(value) {
        this._maxEjectionPercent = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxEjectionPercentInput() {
        return this._maxEjectionPercent;
    }
    /**
     * @stability stable
     */
    get maxServerErrors() {
        return this.getNumberAttribute('max_server_errors');
    }
    /**
     * @stability stable
     */
    set maxServerErrors(value) {
        this._maxServerErrors = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxServerErrorsInput() {
        return this._maxServerErrors;
    }
    /**
     * @stability stable
     */
    get baseEjectionDuration() {
        return this._baseEjectionDuration;
    }
    /**
     * @stability stable
     */
    putBaseEjectionDuration(value) {
        this._baseEjectionDuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get baseEjectionDurationInput() {
        return this._baseEjectionDuration.internalValue;
    }
    /**
     * @stability stable
     */
    get interval() {
        return this._interval;
    }
    /**
     * @stability stable
     */
    putInterval(value) {
        this._interval.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalInput() {
        return this._interval.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference = AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference;
_10 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference[_10] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
    };
}
exports.appmeshVirtualNodeSpecListenerPortMappingToTerraform = appmeshVirtualNodeSpecListenerPortMappingToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
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
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._port = undefined;
            this._protocol = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._port = value.port;
            this._protocol = value.protocol;
        }
    }
    /**
     * @stability stable
     */
    get port() {
        return this.getNumberAttribute('port');
    }
    /**
     * @stability stable
     */
    set port(value) {
        this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portInput() {
        return this._port;
    }
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    /**
     * @stability stable
     */
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protocolInput() {
        return this._protocol;
    }
}
exports.AppmeshVirtualNodeSpecListenerPortMappingOutputReference = AppmeshVirtualNodeSpecListenerPortMappingOutputReference;
_11 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerPortMappingOutputReference[_11] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerPortMappingOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform = appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference = AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference;
_12 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference[_12] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform = appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference = AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference;
_13 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference[_13] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle: appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct.idle),
        per_request: appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct.perRequest),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform = appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idle - computed: false, optional: true, required: false
        this._idle = new AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference(this, "idle", true);
        // per_request - computed: false, optional: true, required: false
        this._perRequest = new AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference(this, "per_request", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._idle) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.idle = (_45 = this._idle) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._perRequest) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRequest = (_47 = this._perRequest) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idle.internalValue = undefined;
            this._perRequest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idle.internalValue = value.idle;
            this._perRequest.internalValue = value.perRequest;
        }
    }
    /**
     * @stability stable
     */
    get idle() {
        return this._idle;
    }
    /**
     * @stability stable
     */
    putIdle(value) {
        this._idle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdle() {
        this._idle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleInput() {
        return this._idle.internalValue;
    }
    /**
     * @stability stable
     */
    get perRequest() {
        return this._perRequest;
    }
    /**
     * @stability stable
     */
    putPerRequest(value) {
        this._perRequest.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPerRequest() {
        this._perRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRequestInput() {
        return this._perRequest.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference = AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference;
_14 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference[_14] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform = appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference = AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference;
_15 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference[_15] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform = appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference = AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference;
_16 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference[_16] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle: appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct.idle),
        per_request: appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct.perRequest),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform = appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idle - computed: false, optional: true, required: false
        this._idle = new AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference(this, "idle", true);
        // per_request - computed: false, optional: true, required: false
        this._perRequest = new AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference(this, "per_request", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._idle) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.idle = (_45 = this._idle) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._perRequest) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRequest = (_47 = this._perRequest) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idle.internalValue = undefined;
            this._perRequest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idle.internalValue = value.idle;
            this._perRequest.internalValue = value.perRequest;
        }
    }
    /**
     * @stability stable
     */
    get idle() {
        return this._idle;
    }
    /**
     * @stability stable
     */
    putIdle(value) {
        this._idle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdle() {
        this._idle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleInput() {
        return this._idle.internalValue;
    }
    /**
     * @stability stable
     */
    get perRequest() {
        return this._perRequest;
    }
    /**
     * @stability stable
     */
    putPerRequest(value) {
        this._perRequest.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPerRequest() {
        this._perRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRequestInput() {
        return this._perRequest.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference = AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference;
_17 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference[_17] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform = appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference = AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference;
_18 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference[_18] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform = appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference = AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference;
_19 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference[_19] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle: appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct.idle),
        per_request: appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct.perRequest),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform = appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idle - computed: false, optional: true, required: false
        this._idle = new AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference(this, "idle", true);
        // per_request - computed: false, optional: true, required: false
        this._perRequest = new AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference(this, "per_request", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._idle) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.idle = (_45 = this._idle) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._perRequest) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.perRequest = (_47 = this._perRequest) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idle.internalValue = undefined;
            this._perRequest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idle.internalValue = value.idle;
            this._perRequest.internalValue = value.perRequest;
        }
    }
    /**
     * @stability stable
     */
    get idle() {
        return this._idle;
    }
    /**
     * @stability stable
     */
    putIdle(value) {
        this._idle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdle() {
        this._idle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleInput() {
        return this._idle.internalValue;
    }
    /**
     * @stability stable
     */
    get perRequest() {
        return this._perRequest;
    }
    /**
     * @stability stable
     */
    putPerRequest(value) {
        this._perRequest.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPerRequest() {
        this._perRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get perRequestInput() {
        return this._perRequest.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference = AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference;
_20 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference[_20] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform = appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference extends cdktf.ComplexObject {
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
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get unit() {
        return this.getStringAttribute('unit');
    }
    /**
     * @stability stable
     */
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unitInput() {
        return this._unit;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getNumberAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference = AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference;
_21 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference[_21] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle: appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct.idle),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform = appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // idle - computed: false, optional: true, required: false
        this._idle = new AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference(this, "idle", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._idle) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.idle = (_45 = this._idle) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idle.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idle.internalValue = value.idle;
        }
    }
    /**
     * @stability stable
     */
    get idle() {
        return this._idle;
    }
    /**
     * @stability stable
     */
    putIdle(value) {
        this._idle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIdle() {
        this._idle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleInput() {
        return this._idle.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference = AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference;
_22 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference[_22] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        grpc: appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct.grpc),
        http: appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct.http),
        http2: appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct.http2),
        tcp: appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct.tcp),
    };
}
exports.appmeshVirtualNodeSpecListenerTimeoutToTerraform = appmeshVirtualNodeSpecListenerTimeoutToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTimeoutOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // grpc - computed: false, optional: true, required: false
        this._grpc = new AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference(this, "grpc", true);
        // http - computed: false, optional: true, required: false
        this._http = new AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference(this, "http", true);
        // http2 - computed: false, optional: true, required: false
        this._http2 = new AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference(this, "http2", true);
        // tcp - computed: false, optional: true, required: false
        this._tcp = new AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference(this, "tcp", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47, _48, _49, _50, _51;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._grpc) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.grpc = (_45 = this._grpc) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._http) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.http = (_47 = this._http) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        if ((_48 = this._http2) === null || _48 === void 0 ? void 0 : _48.internalValue) {
            hasAnyValues = true;
            internalValueResult.http2 = (_49 = this._http2) === null || _49 === void 0 ? void 0 : _49.internalValue;
        }
        if ((_50 = this._tcp) === null || _50 === void 0 ? void 0 : _50.internalValue) {
            hasAnyValues = true;
            internalValueResult.tcp = (_51 = this._tcp) === null || _51 === void 0 ? void 0 : _51.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._grpc.internalValue = undefined;
            this._http.internalValue = undefined;
            this._http2.internalValue = undefined;
            this._tcp.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._grpc.internalValue = value.grpc;
            this._http.internalValue = value.http;
            this._http2.internalValue = value.http2;
            this._tcp.internalValue = value.tcp;
        }
    }
    /**
     * @stability stable
     */
    get grpc() {
        return this._grpc;
    }
    /**
     * @stability stable
     */
    putGrpc(value) {
        this._grpc.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetGrpc() {
        this._grpc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get grpcInput() {
        return this._grpc.internalValue;
    }
    /**
     * @stability stable
     */
    get http() {
        return this._http;
    }
    /**
     * @stability stable
     */
    putHttp(value) {
        this._http.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHttp() {
        this._http.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpInput() {
        return this._http.internalValue;
    }
    /**
     * @stability stable
     */
    get http2() {
        return this._http2;
    }
    /**
     * @stability stable
     */
    putHttp2(value) {
        this._http2.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHttp2() {
        this._http2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get http2Input() {
        return this._http2.internalValue;
    }
    /**
     * @stability stable
     */
    get tcp() {
        return this._tcp;
    }
    /**
     * @stability stable
     */
    putTcp(value) {
        this._tcp.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTcp() {
        this._tcp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tcpInput() {
        return this._tcp.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTimeoutOutputReference = AppmeshVirtualNodeSpecListenerTimeoutOutputReference;
_23 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTimeoutOutputReference[_23] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTimeoutOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform = appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateArn) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateArn = value.certificateArn;
        }
    }
    /**
     * @stability stable
     */
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    /**
     * @stability stable
     */
    set certificateArn(value) {
        this._certificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateArnInput() {
        return this._certificateArn;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference = AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference;
_24 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference[_24] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform = appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        if (this._privateKey) {
            hasAnyValues = true;
            internalValueResult.privateKey = this._privateKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
            this._privateKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
            this._privateKey = value.privateKey;
        }
    }
    /**
     * @stability stable
     */
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    /**
     * @stability stable
     */
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateChainInput() {
        return this._certificateChain;
    }
    /**
     * @stability stable
     */
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    /**
     * @stability stable
     */
    set privateKey(value) {
        this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get privateKeyInput() {
        return this._privateKey;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference = AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference;
_25 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference[_25] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform = appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    /**
     * @stability stable
     */
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    /**
     * @stability stable
     */
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference = AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference;
_26 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference[_26] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm: appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct.acm),
        file: appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct.file),
        sds: appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsCertificateToTerraform = appmeshVirtualNodeSpecListenerTlsCertificateToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // acm - computed: false, optional: true, required: false
        this._acm = new AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference(this, "acm", true);
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47, _48, _49;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._acm) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.acm = (_45 = this._acm) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._file) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_47 = this._file) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        if ((_48 = this._sds) === null || _48 === void 0 ? void 0 : _48.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_49 = this._sds) === null || _49 === void 0 ? void 0 : _49.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._acm.internalValue = undefined;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._acm.internalValue = value.acm;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    /**
     * @stability stable
     */
    get acm() {
        return this._acm;
    }
    /**
     * @stability stable
     */
    putAcm(value) {
        this._acm.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAcm() {
        this._acm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get acmInput() {
        return this._acm.internalValue;
    }
    /**
     * @stability stable
     */
    get file() {
        return this._file;
    }
    /**
     * @stability stable
     */
    putFile(value) {
        this._file.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileInput() {
        return this._file.internalValue;
    }
    /**
     * @stability stable
     */
    get sds() {
        return this._sds;
    }
    /**
     * @stability stable
     */
    putSds(value) {
        this._sds.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference = AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference;
_27 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference[_27] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform = appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._exact) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._exact = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._exact = value.exact;
        }
    }
    /**
     * @stability stable
     */
    get exact() {
        return this.getListAttribute('exact');
    }
    /**
     * @stability stable
     */
    set exact(value) {
        this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get exactInput() {
        return this._exact;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference = AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
_28 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference[_28] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        match: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct.match),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform = appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // match - computed: false, optional: false, required: true
        this._match = new AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._match) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.match = (_45 = this._match) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._match.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._match.internalValue = value.match;
        }
    }
    /**
     * @stability stable
     */
    get match() {
        return this._match;
    }
    /**
     * @stability stable
     */
    putMatch(value) {
        this._match.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get matchInput() {
        return this._match.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference = AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
_29 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference[_29] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform = appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
        if (this._certificateChain) {
            hasAnyValues = true;
            internalValueResult.certificateChain = this._certificateChain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._certificateChain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._certificateChain = value.certificateChain;
        }
    }
    /**
     * @stability stable
     */
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    /**
     * @stability stable
     */
    set certificateChain(value) {
        this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateChainInput() {
        return this._certificateChain;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference = AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference;
_30 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference[_30] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform = appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretName) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._secretName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._secretName = value.secretName;
        }
    }
    /**
     * @stability stable
     */
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    /**
     * @stability stable
     */
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretNameInput() {
        return this._secretName;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference = AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference;
_31 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference[_31] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct.file),
        sds: appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform = appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._file) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_45 = this._file) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._sds) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_47 = this._sds) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._file.internalValue = undefined;
            this._sds.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._file.internalValue = value.file;
            this._sds.internalValue = value.sds;
        }
    }
    /**
     * @stability stable
     */
    get file() {
        return this._file;
    }
    /**
     * @stability stable
     */
    putFile(value) {
        this._file.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileInput() {
        return this._file.internalValue;
    }
    /**
     * @stability stable
     */
    get sds() {
        return this._sds;
    }
    /**
     * @stability stable
     */
    putSds(value) {
        this._sds.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSds() {
        this._sds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sdsInput() {
        return this._sds.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference = AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference;
_32 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference[_32] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        subject_alternative_names: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct.subjectAlternativeNames),
        trust: appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct.trust),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsValidationToTerraform = appmeshVirtualNodeSpecListenerTlsValidationToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // subject_alternative_names - computed: false, optional: true, required: false
        this._subjectAlternativeNames = new AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names", true);
        // trust - computed: false, optional: false, required: true
        this._trust = new AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference(this, "trust", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._subjectAlternativeNames) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = (_45 = this._subjectAlternativeNames) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._trust) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.trust = (_47 = this._trust) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._subjectAlternativeNames.internalValue = undefined;
            this._trust.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
            this._trust.internalValue = value.trust;
        }
    }
    /**
     * @stability stable
     */
    get subjectAlternativeNames() {
        return this._subjectAlternativeNames;
    }
    /**
     * @stability stable
     */
    putSubjectAlternativeNames(value) {
        this._subjectAlternativeNames.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSubjectAlternativeNames() {
        this._subjectAlternativeNames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames.internalValue;
    }
    /**
     * @stability stable
     */
    get trust() {
        return this._trust;
    }
    /**
     * @stability stable
     */
    putTrust(value) {
        this._trust.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get trustInput() {
        return this._trust.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsValidationOutputReference = AppmeshVirtualNodeSpecListenerTlsValidationOutputReference;
_33 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsValidationOutputReference[_33] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsValidationOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        certificate: appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct.certificate),
        validation: appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct.validation),
    };
}
exports.appmeshVirtualNodeSpecListenerTlsToTerraform = appmeshVirtualNodeSpecListenerTlsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerTlsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // certificate - computed: false, optional: false, required: true
        this._certificate = new AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference(this, "certificate", true);
        // validation - computed: false, optional: true, required: false
        this._validation = new AppmeshVirtualNodeSpecListenerTlsValidationOutputReference(this, "validation", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if ((_44 = this._certificate) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.certificate = (_45 = this._certificate) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._validation) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.validation = (_47 = this._validation) === null || _47 === void 0 ? void 0 : _47.internalValue;
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
            this._certificate.internalValue = undefined;
            this._validation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._mode = value.mode;
            this._certificate.internalValue = value.certificate;
            this._validation.internalValue = value.validation;
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
    /**
     * @stability stable
     */
    get certificate() {
        return this._certificate;
    }
    /**
     * @stability stable
     */
    putCertificate(value) {
        this._certificate.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateInput() {
        return this._certificate.internalValue;
    }
    /**
     * @stability stable
     */
    get validation() {
        return this._validation;
    }
    /**
     * @stability stable
     */
    putValidation(value) {
        this._validation.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validationInput() {
        return this._validation.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerTlsOutputReference = AppmeshVirtualNodeSpecListenerTlsOutputReference;
_34 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerTlsOutputReference[_34] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerTlsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_pool: appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct.connectionPool),
        health_check: appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct.healthCheck),
        outlier_detection: appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct.outlierDetection),
        port_mapping: appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct.portMapping),
        timeout: appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct.timeout),
        tls: appmeshVirtualNodeSpecListenerTlsToTerraform(struct.tls),
    };
}
exports.appmeshVirtualNodeSpecListenerToTerraform = appmeshVirtualNodeSpecListenerToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecListenerOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // connection_pool - computed: false, optional: true, required: false
        this._connectionPool = new AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference(this, "connection_pool", true);
        // health_check - computed: false, optional: true, required: false
        this._healthCheck = new AppmeshVirtualNodeSpecListenerHealthCheckOutputReference(this, "health_check", true);
        // outlier_detection - computed: false, optional: true, required: false
        this._outlierDetection = new AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference(this, "outlier_detection", true);
        // port_mapping - computed: false, optional: false, required: true
        this._portMapping = new AppmeshVirtualNodeSpecListenerPortMappingOutputReference(this, "port_mapping", true);
        // timeout - computed: false, optional: true, required: false
        this._timeout = new AppmeshVirtualNodeSpecListenerTimeoutOutputReference(this, "timeout", true);
        // tls - computed: false, optional: true, required: false
        this._tls = new AppmeshVirtualNodeSpecListenerTlsOutputReference(this, "tls", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._connectionPool) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.connectionPool = (_45 = this._connectionPool) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._healthCheck) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.healthCheck = (_47 = this._healthCheck) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        if ((_48 = this._outlierDetection) === null || _48 === void 0 ? void 0 : _48.internalValue) {
            hasAnyValues = true;
            internalValueResult.outlierDetection = (_49 = this._outlierDetection) === null || _49 === void 0 ? void 0 : _49.internalValue;
        }
        if ((_50 = this._portMapping) === null || _50 === void 0 ? void 0 : _50.internalValue) {
            hasAnyValues = true;
            internalValueResult.portMapping = (_51 = this._portMapping) === null || _51 === void 0 ? void 0 : _51.internalValue;
        }
        if ((_52 = this._timeout) === null || _52 === void 0 ? void 0 : _52.internalValue) {
            hasAnyValues = true;
            internalValueResult.timeout = (_53 = this._timeout) === null || _53 === void 0 ? void 0 : _53.internalValue;
        }
        if ((_54 = this._tls) === null || _54 === void 0 ? void 0 : _54.internalValue) {
            hasAnyValues = true;
            internalValueResult.tls = (_55 = this._tls) === null || _55 === void 0 ? void 0 : _55.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._connectionPool.internalValue = undefined;
            this._healthCheck.internalValue = undefined;
            this._outlierDetection.internalValue = undefined;
            this._portMapping.internalValue = undefined;
            this._timeout.internalValue = undefined;
            this._tls.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._connectionPool.internalValue = value.connectionPool;
            this._healthCheck.internalValue = value.healthCheck;
            this._outlierDetection.internalValue = value.outlierDetection;
            this._portMapping.internalValue = value.portMapping;
            this._timeout.internalValue = value.timeout;
            this._tls.internalValue = value.tls;
        }
    }
    /**
     * @stability stable
     */
    get connectionPool() {
        return this._connectionPool;
    }
    /**
     * @stability stable
     */
    putConnectionPool(value) {
        this._connectionPool.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetConnectionPool() {
        this._connectionPool.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get connectionPoolInput() {
        return this._connectionPool.internalValue;
    }
    /**
     * @stability stable
     */
    get healthCheck() {
        return this._healthCheck;
    }
    /**
     * @stability stable
     */
    putHealthCheck(value) {
        this._healthCheck.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHealthCheck() {
        this._healthCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get healthCheckInput() {
        return this._healthCheck.internalValue;
    }
    /**
     * @stability stable
     */
    get outlierDetection() {
        return this._outlierDetection;
    }
    /**
     * @stability stable
     */
    putOutlierDetection(value) {
        this._outlierDetection.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetOutlierDetection() {
        this._outlierDetection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outlierDetectionInput() {
        return this._outlierDetection.internalValue;
    }
    /**
     * @stability stable
     */
    get portMapping() {
        return this._portMapping;
    }
    /**
     * @stability stable
     */
    putPortMapping(value) {
        this._portMapping.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portMappingInput() {
        return this._portMapping.internalValue;
    }
    /**
     * @stability stable
     */
    get timeout() {
        return this._timeout;
    }
    /**
     * @stability stable
     */
    putTimeout(value) {
        this._timeout.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeout() {
        this._timeout.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInput() {
        return this._timeout.internalValue;
    }
    /**
     * @stability stable
     */
    get tls() {
        return this._tls;
    }
    /**
     * @stability stable
     */
    putTls(value) {
        this._tls.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTls() {
        this._tls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tlsInput() {
        return this._tls.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecListenerOutputReference = AppmeshVirtualNodeSpecListenerOutputReference;
_35 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecListenerOutputReference[_35] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecListenerOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
    };
}
exports.appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform = appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
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
        if (this._path) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._path = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._path = value.path;
        }
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pathInput() {
        return this._path;
    }
}
exports.AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference = AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference;
_36 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference[_36] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct.file),
    };
}
exports.appmeshVirtualNodeSpecLoggingAccessLogToTerraform = appmeshVirtualNodeSpecLoggingAccessLogToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference(this, "file", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._file) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_45 = this._file) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._file.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._file.internalValue = value.file;
        }
    }
    /**
     * @stability stable
     */
    get file() {
        return this._file;
    }
    /**
     * @stability stable
     */
    putFile(value) {
        this._file.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFile() {
        this._file.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileInput() {
        return this._file.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecLoggingAccessLogOutputReference = AppmeshVirtualNodeSpecLoggingAccessLogOutputReference;
_37 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecLoggingAccessLogOutputReference[_37] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecLoggingAccessLogOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_log: appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct.accessLog),
    };
}
exports.appmeshVirtualNodeSpecLoggingToTerraform = appmeshVirtualNodeSpecLoggingToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecLoggingOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // access_log - computed: false, optional: true, required: false
        this._accessLog = new AppmeshVirtualNodeSpecLoggingAccessLogOutputReference(this, "access_log", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._accessLog) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.accessLog = (_45 = this._accessLog) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessLog.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessLog.internalValue = value.accessLog;
        }
    }
    /**
     * @stability stable
     */
    get accessLog() {
        return this._accessLog;
    }
    /**
     * @stability stable
     */
    putAccessLog(value) {
        this._accessLog.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAccessLog() {
        this._accessLog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessLogInput() {
        return this._accessLog.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecLoggingOutputReference = AppmeshVirtualNodeSpecLoggingOutputReference;
_38 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecLoggingOutputReference[_38] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecLoggingOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct.attributes),
        namespace_name: cdktf.stringToTerraform(struct.namespaceName),
        service_name: cdktf.stringToTerraform(struct.serviceName),
    };
}
exports.appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform = appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference extends cdktf.ComplexObject {
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
        if (this._attributes) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes;
        }
        if (this._namespaceName) {
            hasAnyValues = true;
            internalValueResult.namespaceName = this._namespaceName;
        }
        if (this._serviceName) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._attributes = undefined;
            this._namespaceName = undefined;
            this._serviceName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._attributes = value.attributes;
            this._namespaceName = value.namespaceName;
            this._serviceName = value.serviceName;
        }
    }
    /**
     * @stability stable
     */
    get attributes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('attributes');
    }
    /**
     * @stability stable
     */
    set attributes(value) {
        this._attributes = value;
    }
    /**
     * @stability stable
     */
    resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get attributesInput() {
        return this._attributes;
    }
    /**
     * @stability stable
     */
    get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }
    /**
     * @stability stable
     */
    set namespaceName(value) {
        this._namespaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get namespaceNameInput() {
        return this._namespaceName;
    }
    /**
     * @stability stable
     */
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    /**
     * @stability stable
     */
    set serviceName(value) {
        this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceNameInput() {
        return this._serviceName;
    }
}
exports.AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference = AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference;
_39 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference[_39] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hostname: cdktf.stringToTerraform(struct.hostname),
    };
}
exports.appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform = appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference extends cdktf.ComplexObject {
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
        if (this._hostname) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._hostname = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._hostname = value.hostname;
        }
    }
    /**
     * @stability stable
     */
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    /**
     * @stability stable
     */
    set hostname(value) {
        this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostnameInput() {
        return this._hostname;
    }
}
exports.AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference = AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference;
_40 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference[_40] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_cloud_map: appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct.awsCloudMap),
        dns: appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct.dns),
    };
}
exports.appmeshVirtualNodeSpecServiceDiscoveryToTerraform = appmeshVirtualNodeSpecServiceDiscoveryToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // aws_cloud_map - computed: false, optional: true, required: false
        this._awsCloudMap = new AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference(this, "aws_cloud_map", true);
        // dns - computed: false, optional: true, required: false
        this._dns = new AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference(this, "dns", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_44 = this._awsCloudMap) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.awsCloudMap = (_45 = this._awsCloudMap) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._dns) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.dns = (_47 = this._dns) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsCloudMap.internalValue = undefined;
            this._dns.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsCloudMap.internalValue = value.awsCloudMap;
            this._dns.internalValue = value.dns;
        }
    }
    /**
     * @stability stable
     */
    get awsCloudMap() {
        return this._awsCloudMap;
    }
    /**
     * @stability stable
     */
    putAwsCloudMap(value) {
        this._awsCloudMap.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAwsCloudMap() {
        this._awsCloudMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsCloudMapInput() {
        return this._awsCloudMap.internalValue;
    }
    /**
     * @stability stable
     */
    get dns() {
        return this._dns;
    }
    /**
     * @stability stable
     */
    putDns(value) {
        this._dns.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDns() {
        this._dns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dnsInput() {
        return this._dns.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecServiceDiscoveryOutputReference = AppmeshVirtualNodeSpecServiceDiscoveryOutputReference;
_41 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecServiceDiscoveryOutputReference[_41] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecServiceDiscoveryOutputReference", version: "3.0.1" };
function appmeshVirtualNodeSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct.backend),
        backend_defaults: appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct.backendDefaults),
        listener: appmeshVirtualNodeSpecListenerToTerraform(struct.listener),
        logging: appmeshVirtualNodeSpecLoggingToTerraform(struct.logging),
        service_discovery: appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct.serviceDiscovery),
    };
}
exports.appmeshVirtualNodeSpecToTerraform = appmeshVirtualNodeSpecToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualNodeSpecOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // backend_defaults - computed: false, optional: true, required: false
        this._backendDefaults = new AppmeshVirtualNodeSpecBackendDefaultsOutputReference(this, "backend_defaults", true);
        // listener - computed: false, optional: true, required: false
        this._listener = new AppmeshVirtualNodeSpecListenerOutputReference(this, "listener", true);
        // logging - computed: false, optional: true, required: false
        this._logging = new AppmeshVirtualNodeSpecLoggingOutputReference(this, "logging", true);
        // service_discovery - computed: false, optional: true, required: false
        this._serviceDiscovery = new AppmeshVirtualNodeSpecServiceDiscoveryOutputReference(this, "service_discovery", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _44, _45, _46, _47, _48, _49, _50, _51;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._backend) {
            hasAnyValues = true;
            internalValueResult.backend = this._backend;
        }
        if ((_44 = this._backendDefaults) === null || _44 === void 0 ? void 0 : _44.internalValue) {
            hasAnyValues = true;
            internalValueResult.backendDefaults = (_45 = this._backendDefaults) === null || _45 === void 0 ? void 0 : _45.internalValue;
        }
        if ((_46 = this._listener) === null || _46 === void 0 ? void 0 : _46.internalValue) {
            hasAnyValues = true;
            internalValueResult.listener = (_47 = this._listener) === null || _47 === void 0 ? void 0 : _47.internalValue;
        }
        if ((_48 = this._logging) === null || _48 === void 0 ? void 0 : _48.internalValue) {
            hasAnyValues = true;
            internalValueResult.logging = (_49 = this._logging) === null || _49 === void 0 ? void 0 : _49.internalValue;
        }
        if ((_50 = this._serviceDiscovery) === null || _50 === void 0 ? void 0 : _50.internalValue) {
            hasAnyValues = true;
            internalValueResult.serviceDiscovery = (_51 = this._serviceDiscovery) === null || _51 === void 0 ? void 0 : _51.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._backend = undefined;
            this._backendDefaults.internalValue = undefined;
            this._listener.internalValue = undefined;
            this._logging.internalValue = undefined;
            this._serviceDiscovery.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._backend = value.backend;
            this._backendDefaults.internalValue = value.backendDefaults;
            this._listener.internalValue = value.listener;
            this._logging.internalValue = value.logging;
            this._serviceDiscovery.internalValue = value.serviceDiscovery;
        }
    }
    /**
     * @stability stable
     */
    get backend() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('backend');
    }
    /**
     * @stability stable
     */
    set backend(value) {
        this._backend = value;
    }
    /**
     * @stability stable
     */
    resetBackend() {
        this._backend = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get backendInput() {
        return this._backend;
    }
    /**
     * @stability stable
     */
    get backendDefaults() {
        return this._backendDefaults;
    }
    /**
     * @stability stable
     */
    putBackendDefaults(value) {
        this._backendDefaults.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetBackendDefaults() {
        this._backendDefaults.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get backendDefaultsInput() {
        return this._backendDefaults.internalValue;
    }
    /**
     * @stability stable
     */
    get listener() {
        return this._listener;
    }
    /**
     * @stability stable
     */
    putListener(value) {
        this._listener.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetListener() {
        this._listener.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get listenerInput() {
        return this._listener.internalValue;
    }
    /**
     * @stability stable
     */
    get logging() {
        return this._logging;
    }
    /**
     * @stability stable
     */
    putLogging(value) {
        this._logging.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLogging() {
        this._logging.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get loggingInput() {
        return this._logging.internalValue;
    }
    /**
     * @stability stable
     */
    get serviceDiscovery() {
        return this._serviceDiscovery;
    }
    /**
     * @stability stable
     */
    putServiceDiscovery(value) {
        this._serviceDiscovery.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetServiceDiscovery() {
        this._serviceDiscovery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceDiscoveryInput() {
        return this._serviceDiscovery.internalValue;
    }
}
exports.AppmeshVirtualNodeSpecOutputReference = AppmeshVirtualNodeSpecOutputReference;
_42 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNodeSpecOutputReference[_42] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNodeSpecOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}.
 *
 * @stability stable
 */
class AppmeshVirtualNode extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_node',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // spec - computed: false, optional: false, required: true
        this._spec = new AppmeshVirtualNodeSpecOutputReference(this, "spec", true);
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
            spec: appmeshVirtualNodeSpecToTerraform(this._spec.internalValue),
        };
    }
}
exports.AppmeshVirtualNode = AppmeshVirtualNode;
_43 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNode[_43] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualNode", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppmeshVirtualNode.tfResourceType = "aws_appmesh_virtual_node";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbWVzaC12aXJ0dWFsLW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbWVzaC9hcHBtZXNoLXZpcnR1YWwtbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXdCL0IsU0FBZ0Isb0ZBQW9GLENBQUMsTUFBNks7SUFDaFIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQVRELG9MQVNDOzs7O0FBRUQsTUFBYSx3RkFBeUYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkvSCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFp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cnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzaE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzaE93bmVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcGVjOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgcHJpdmF0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUtleSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVDaGFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcml2YXRlS2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcml2YXRlS2V5ID0gdGhpcy5fcHJpdmF0ZUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJpdmF0ZUtleSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlLmNlcnRpZmljYXRlQ2hhaW47XG4gICAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWUucHJpdmF0ZUtleTtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG5cbiAgLy8gcHJpdmF0ZV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJpdmF0ZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaXZhdGVLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpdmF0ZUtleTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWNyZXROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNyZXROYW1lID0gdGhpcy5fc2VjcmV0TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICBzZHM6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5maWxlO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZHM7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmlsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZSgpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NkcyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzO1xuICB9XG4gIHB1YmxpYyBwdXRTZHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcykge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2RzKCkge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGFjdDogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleGFjdDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGFjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2ggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2V4YWN0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leGFjdCA9IHRoaXMuX2V4YWN0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXhhY3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2V4YWN0ID0gdmFsdWUuZXhhY3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhhY3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXhhY3Q/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZXhhY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhhY3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4YWN0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2V4YWN0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4YWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4YWN0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hdGNoOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9UZXJyYWZvcm0oc3RydWN0IS5tYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hdGNoID0gdGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm1hdGNoO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hdGNoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21hdGNoID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtYXRjaFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2g7XG4gIH1cbiAgcHVibGljIHB1dE1hdGNoKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpIHtcbiAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hdGNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNlcnRpZmljYXRlX2F1dGhvcml0eV9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNlcnRpZmljYXRlQXV0aG9yaXR5QXJucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMgPSB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMgPSB2YWx1ZS5jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnM7XG4gICAgfVxuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfYXV0aG9yaXR5X2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXV0aG9yaXR5QXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXV0aG9yaXR5QXJucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWUuY2VydGlmaWNhdGVDaGFpbjtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NlY3JldE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3JldE5hbWUgPSB0aGlzLl9zZWNyZXROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNtPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2RzPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjbTogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVRvVGVycmFmb3JtKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzVG9UZXJyYWZvcm0oc3RydWN0IS5zZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3QgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjbT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNtID0gdGhpcy5fYWNtPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjbTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmZpbGU7XG4gICAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNkcztcbiAgICB9XG4gIH1cblxuICAvLyBhY20gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNtID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNtXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNtO1xuICB9XG4gIHB1YmxpYyBwdXRBY20odmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY20pIHtcbiAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjbSgpIHtcbiAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImZpbGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZTtcbiAgfVxuICBwdWJsaWMgcHV0RmlsZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlKCkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2RzID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzO1xuICB9XG4gIHB1YmxpYyBwdXRTZHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNkcygpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3Q6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyksXG4gICAgdHJ1c3Q6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnRydXN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHJ1c3Q/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRydXN0ID0gdGhpcy5fdHJ1c3Q/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudHJ1c3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3ViamVjdEFsdGVybmF0aXZlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzO1xuICB9XG4gIHB1YmxpYyBwdXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcykge1xuICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcygpIHtcbiAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdHJ1c3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHJ1c3QgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0cnVzdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0cnVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJ1c3Q7XG4gIH1cbiAgcHVibGljIHB1dFRydXN0KHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0KSB7XG4gICAgdGhpcy5fdHJ1c3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cnVzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmZvcmNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnRzPzogbnVtYmVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGU/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRhdGlvbjogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmZvcmNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmZvcmNlKSxcbiAgICBwb3J0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5wb3J0cyksXG4gICAgY2VydGlmaWNhdGU6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVRvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIHZhbGlkYXRpb246IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS52YWxpZGF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmZvcmNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmZvcmNlID0gdGhpcy5fZW5mb3JjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0cyA9IHRoaXMuX3BvcnRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlID0gdGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWxpZGF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWxpZGF0aW9uID0gdGhpcy5fdmFsaWRhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmZvcmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmZvcmNlID0gdmFsdWUuZW5mb3JjZTtcbiAgICAgIHRoaXMuX3BvcnRzID0gdmFsdWUucG9ydHM7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2VydGlmaWNhdGU7XG4gICAgICB0aGlzLl92YWxpZGF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS52YWxpZGF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuZm9yY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5mb3JjZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5mb3JjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmZvcmNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5mb3JjZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5mb3JjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZm9yY2UoKSB7XG4gICAgdGhpcy5fZW5mb3JjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5mb3JjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmZvcmNlO1xuICB9XG5cbiAgLy8gcG9ydHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydHM/OiBudW1iZXJbXTsgXG4gIHB1YmxpYyBnZXQgcG9ydHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BvcnRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydHModmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fcG9ydHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0cygpIHtcbiAgICB0aGlzLl9wb3J0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydHM7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZSA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2VydGlmaWNhdGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlO1xuICB9XG4gIHB1YmxpYyBwdXRDZXJ0aWZpY2F0ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRpZmljYXRlKCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB2YWxpZGF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbGlkYXRpb24gPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidmFsaWRhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB2YWxpZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRWYWxpZGF0aW9uKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbikge1xuICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZGF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0bHM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGxzOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0oc3RydWN0IS50bHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Rscz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGxzID0gdGhpcy5fdGxzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRscztcbiAgICB9XG4gIH1cblxuICAvLyB0bHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGxzID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGxzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRscygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGxzO1xuICB9XG4gIHB1YmxpYyBwdXRUbHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHMpIHtcbiAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRscygpIHtcbiAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZpcnR1YWxTZXJ2aWNlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudFBvbGljeT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3k7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsX3NlcnZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsU2VydmljZU5hbWUpLFxuICAgIGNsaWVudF9wb2xpY3k6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudFBvbGljeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdmlydHVhbFNlcnZpY2VOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52aXJ0dWFsU2VydmljZU5hbWUgPSB0aGlzLl92aXJ0dWFsU2VydmljZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbGllbnRQb2xpY3k/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsaWVudFBvbGljeSA9IHRoaXMuX2NsaWVudFBvbGljeT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl92aXJ0dWFsU2VydmljZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jbGllbnRQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdmlydHVhbFNlcnZpY2VOYW1lID0gdmFsdWUudmlydHVhbFNlcnZpY2VOYW1lO1xuICAgICAgdGhpcy5fY2xpZW50UG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbGllbnRQb2xpY3k7XG4gICAgfVxuICB9XG5cbiAgLy8gdmlydHVhbF9zZXJ2aWNlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmlydHVhbFNlcnZpY2VOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2aXJ0dWFsU2VydmljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2aXJ0dWFsX3NlcnZpY2VfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlydHVhbFNlcnZpY2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aXJ0dWFsU2VydmljZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmlydHVhbFNlcnZpY2VOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTZXJ2aWNlTmFtZTtcbiAgfVxuXG4gIC8vIGNsaWVudF9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xpZW50UG9saWN5ID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xpZW50X3BvbGljeVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjbGllbnRQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudFBvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0Q2xpZW50UG9saWN5KHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5KSB7XG4gICAgdGhpcy5fY2xpZW50UG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbGllbnRQb2xpY3koKSB7XG4gICAgdGhpcy5fY2xpZW50UG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsaWVudFBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRQb2xpY3kuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbFNlcnZpY2U6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmlydHVhbF9zZXJ2aWNlOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsU2VydmljZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgcHJpdmF0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUtleSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVDaGFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcml2YXRlS2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcml2YXRlS2V5ID0gdGhpcy5fcHJpdmF0ZUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJpdmF0ZUtleSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlLmNlcnRpZmljYXRlQ2hhaW47XG4gICAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWUucHJpdmF0ZUtleTtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG5cbiAgLy8gcHJpdmF0ZV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJpdmF0ZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaXZhdGVLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpdmF0ZUtleTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWNyZXROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNyZXROYW1lID0gdGhpcy5fc2VjcmV0TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICBzZHM6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5maWxlO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZHM7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmlsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZSgpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NkcyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzO1xuICB9XG4gIHB1YmxpYyBwdXRTZHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcykge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2RzKCkge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGFjdDogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleGFjdDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGFjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2ggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2V4YWN0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leGFjdCA9IHRoaXMuX2V4YWN0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXhhY3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2V4YWN0ID0gdmFsdWUuZXhhY3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhhY3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXhhY3Q/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZXhhY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhhY3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4YWN0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2V4YWN0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4YWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4YWN0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hdGNoOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9UZXJyYWZvcm0oc3RydWN0IS5tYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hdGNoID0gdGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm1hdGNoO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hdGNoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21hdGNoID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtYXRjaFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2g7XG4gIH1cbiAgcHVibGljIHB1dE1hdGNoKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpIHtcbiAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hdGNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNlcnRpZmljYXRlX2F1dGhvcml0eV9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNlcnRpZmljYXRlQXV0aG9yaXR5QXJucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMgPSB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMgPSB2YWx1ZS5jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnM7XG4gICAgfVxuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfYXV0aG9yaXR5X2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXV0aG9yaXR5QXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXV0aG9yaXR5QXJucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWUuY2VydGlmaWNhdGVDaGFpbjtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NlY3JldE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3JldE5hbWUgPSB0aGlzLl9zZWNyZXROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNtPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2RzPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjbTogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVRvVGVycmFmb3JtKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzVG9UZXJyYWZvcm0oc3RydWN0IS5zZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3QgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjbT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNtID0gdGhpcy5fYWNtPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjbTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmZpbGU7XG4gICAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNkcztcbiAgICB9XG4gIH1cblxuICAvLyBhY20gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNtID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNtXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNtO1xuICB9XG4gIHB1YmxpYyBwdXRBY20odmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY20pIHtcbiAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjbSgpIHtcbiAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImZpbGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZTtcbiAgfVxuICBwdWJsaWMgcHV0RmlsZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlKCkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2RzID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzO1xuICB9XG4gIHB1YmxpYyBwdXRTZHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNkcygpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3Q6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyksXG4gICAgdHJ1c3Q6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnRydXN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHJ1c3Q/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRydXN0ID0gdGhpcy5fdHJ1c3Q/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudHJ1c3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3ViamVjdEFsdGVybmF0aXZlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzO1xuICB9XG4gIHB1YmxpYyBwdXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcykge1xuICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcygpIHtcbiAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdHJ1c3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHJ1c3QgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0cnVzdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0cnVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJ1c3Q7XG4gIH1cbiAgcHVibGljIHB1dFRydXN0KHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0KSB7XG4gICAgdGhpcy5fdHJ1c3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cnVzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmZvcmNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnRzPzogbnVtYmVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGU/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRhdGlvbjogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmZvcmNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmZvcmNlKSxcbiAgICBwb3J0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5wb3J0cyksXG4gICAgY2VydGlmaWNhdGU6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVRvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIHZhbGlkYXRpb246IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS52YWxpZGF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmZvcmNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmZvcmNlID0gdGhpcy5fZW5mb3JjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0cyA9IHRoaXMuX3BvcnRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlID0gdGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWxpZGF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWxpZGF0aW9uID0gdGhpcy5fdmFsaWRhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmZvcmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmZvcmNlID0gdmFsdWUuZW5mb3JjZTtcbiAgICAgIHRoaXMuX3BvcnRzID0gdmFsdWUucG9ydHM7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2VydGlmaWNhdGU7XG4gICAgICB0aGlzLl92YWxpZGF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS52YWxpZGF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuZm9yY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5mb3JjZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5mb3JjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmZvcmNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5mb3JjZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5mb3JjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZm9yY2UoKSB7XG4gICAgdGhpcy5fZW5mb3JjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5mb3JjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmZvcmNlO1xuICB9XG5cbiAgLy8gcG9ydHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydHM/OiBudW1iZXJbXTsgXG4gIHB1YmxpYyBnZXQgcG9ydHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BvcnRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydHModmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fcG9ydHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0cygpIHtcbiAgICB0aGlzLl9wb3J0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydHM7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZSA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2VydGlmaWNhdGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlO1xuICB9XG4gIHB1YmxpYyBwdXRDZXJ0aWZpY2F0ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRpZmljYXRlKCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB2YWxpZGF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbGlkYXRpb24gPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidmFsaWRhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB2YWxpZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRWYWxpZGF0aW9uKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbikge1xuICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZGF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0bHM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGxzOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0oc3RydWN0IS50bHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Rscz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGxzID0gdGhpcy5fdGxzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRscztcbiAgICB9XG4gIH1cblxuICAvLyB0bHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGxzID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGxzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRscygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGxzO1xuICB9XG4gIHB1YmxpYyBwdXRUbHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMpIHtcbiAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRscygpIHtcbiAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudFBvbGljeT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3k7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbGllbnRfcG9saWN5OiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VG9UZXJyYWZvcm0oc3RydWN0IS5jbGllbnRQb2xpY3kpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NsaWVudFBvbGljeT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xpZW50UG9saWN5ID0gdGhpcy5fY2xpZW50UG9saWN5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NsaWVudFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbGllbnRQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNsaWVudFBvbGljeTtcbiAgICB9XG4gIH1cblxuICAvLyBjbGllbnRfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsaWVudFBvbGljeSA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNsaWVudF9wb2xpY3lcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2xpZW50UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRQb2xpY3k7XG4gIH1cbiAgcHVibGljIHB1dENsaWVudFBvbGljeSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSkge1xuICAgIHRoaXMuX2NsaWVudFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xpZW50UG9saWN5KCkge1xuICAgIHRoaXMuX2NsaWVudFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50UG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFJlcXVlc3RzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfcmVxdWVzdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UmVxdWVzdHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhSZXF1ZXN0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4UmVxdWVzdHMgPSB0aGlzLl9tYXhSZXF1ZXN0cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sR3JwYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heFJlcXVlc3RzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHZhbHVlLm1heFJlcXVlc3RzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9yZXF1ZXN0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhSZXF1ZXN0cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4UmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcmVxdWVzdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFJlcXVlc3RzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhSZXF1ZXN0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhSZXF1ZXN0cztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q29ubmVjdGlvbnM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhQZW5kaW5nUmVxdWVzdHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfY29ubmVjdGlvbnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q29ubmVjdGlvbnMpLFxuICAgIG1heF9wZW5kaW5nX3JlcXVlc3RzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFBlbmRpbmdSZXF1ZXN0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21heENvbm5lY3Rpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhDb25uZWN0aW9ucyA9IHRoaXMuX21heENvbm5lY3Rpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4UGVuZGluZ1JlcXVlc3RzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhQZW5kaW5nUmVxdWVzdHMgPSB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhDb25uZWN0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFBlbmRpbmdSZXF1ZXN0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4Q29ubmVjdGlvbnMgPSB2YWx1ZS5tYXhDb25uZWN0aW9ucztcbiAgICAgIHRoaXMuX21heFBlbmRpbmdSZXF1ZXN0cyA9IHZhbHVlLm1heFBlbmRpbmdSZXF1ZXN0cztcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfY29ubmVjdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4Q29ubmVjdGlvbnM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heENvbm5lY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2Nvbm5lY3Rpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhDb25uZWN0aW9ucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4Q29ubmVjdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4Q29ubmVjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q29ubmVjdGlvbnM7XG4gIH1cblxuICAvLyBtYXhfcGVuZGluZ19yZXF1ZXN0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhQZW5kaW5nUmVxdWVzdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFBlbmRpbmdSZXF1ZXN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9wZW5kaW5nX3JlcXVlc3RzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhQZW5kaW5nUmVxdWVzdHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heFBlbmRpbmdSZXF1ZXN0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFBlbmRpbmdSZXF1ZXN0cygpIHtcbiAgICB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFBlbmRpbmdSZXF1ZXN0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhSZXF1ZXN0czogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMlRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4X3JlcXVlc3RzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFJlcXVlc3RzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhSZXF1ZXN0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4UmVxdWVzdHMgPSB0aGlzLl9tYXhSZXF1ZXN0cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4UmVxdWVzdHMgPSB2YWx1ZS5tYXhSZXF1ZXN0cztcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfcmVxdWVzdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4UmVxdWVzdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFJlcXVlc3RzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3JlcXVlc3RzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhSZXF1ZXN0cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4UmVxdWVzdHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4UmVxdWVzdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UmVxdWVzdHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xUY3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q29ubmVjdGlvbnM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVGNwVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xUY3BPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRjcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1heF9jb25uZWN0aW9uczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDb25uZWN0aW9ucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVGNwT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVGNwIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhDb25uZWN0aW9ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4Q29ubmVjdGlvbnMgPSB0aGlzLl9tYXhDb25uZWN0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVGNwIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4Q29ubmVjdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21heENvbm5lY3Rpb25zID0gdmFsdWUubWF4Q29ubmVjdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4X2Nvbm5lY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heENvbm5lY3Rpb25zPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhDb25uZWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jb25uZWN0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4Q29ubmVjdGlvbnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heENvbm5lY3Rpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heENvbm5lY3Rpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENvbm5lY3Rpb25zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncnBjPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHA/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cDI/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRjcD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVGNwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZ3JwYzogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjVG9UZXJyYWZvcm0oc3RydWN0IS5ncnBjKSxcbiAgICBodHRwOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHApLFxuICAgIGh0dHAyOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyVG9UZXJyYWZvcm0oc3RydWN0IS5odHRwMiksXG4gICAgdGNwOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRjcFRvVGVycmFmb3JtKHN0cnVjdCEudGNwKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2wgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2dycGM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmdycGMgPSB0aGlzLl9ncnBjPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faHR0cD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cCA9IHRoaXMuX2h0dHA/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwMj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cDIgPSB0aGlzLl9odHRwMj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RjcD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGNwID0gdGhpcy5fdGNwPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2wgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ncnBjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwMi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGNwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2dycGMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmdycGM7XG4gICAgICB0aGlzLl9odHRwLmludGVybmFsVmFsdWUgPSB2YWx1ZS5odHRwO1xuICAgICAgdGhpcy5faHR0cDIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmh0dHAyO1xuICAgICAgdGhpcy5fdGNwLmludGVybmFsVmFsdWUgPSB2YWx1ZS50Y3A7XG4gICAgfVxuICB9XG5cbiAgLy8gZ3JwYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncnBjID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sR3JwY091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJncnBjXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGdycGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGM7XG4gIH1cbiAgcHVibGljIHB1dEdycGModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sR3JwYykge1xuICAgIHRoaXMuX2dycGMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdycGMoKSB7XG4gICAgdGhpcy5fZ3JwYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncnBjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGh0dHAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cCA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHR0cFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBodHRwKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwO1xuICB9XG4gIHB1YmxpYyBwdXRIdHRwKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHApIHtcbiAgICB0aGlzLl9odHRwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwKCkge1xuICAgIHRoaXMuX2h0dHAuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodHRwMiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwMiA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImh0dHAyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGh0dHAyKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwMjtcbiAgfVxuICBwdWJsaWMgcHV0SHR0cDIodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDIpIHtcbiAgICB0aGlzLl9odHRwMi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cDIoKSB7XG4gICAgdGhpcy5faHR0cDIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cDJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cDIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRjcCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90Y3AgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xUY3BPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGNwXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRjcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGNwO1xuICB9XG4gIHB1YmxpYyBwdXRUY3AodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVGNwKSB7XG4gICAgdGhpcy5fdGNwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUY3AoKSB7XG4gICAgdGhpcy5fdGNwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRjcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90Y3AuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoeVRocmVzaG9sZDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZXJ2YWxNaWxsaXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGF0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm90b2NvbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRNaWxsaXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5oZWFsdGh5VGhyZXNob2xkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJIZWFsdGhDaGVja1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVySGVhbHRoQ2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFsdGh5VGhyZXNob2xkKSxcbiAgICBpbnRlcnZhbF9taWxsaXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxNaWxsaXMpLFxuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgdGltZW91dF9taWxsaXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dE1pbGxpcyksXG4gICAgdW5oZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS51bmhlYWx0aHlUaHJlc2hvbGQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJIZWFsdGhDaGVja091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faGVhbHRoeVRocmVzaG9sZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhbHRoeVRocmVzaG9sZCA9IHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnRlcnZhbE1pbGxpcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW50ZXJ2YWxNaWxsaXMgPSB0aGlzLl9pbnRlcnZhbE1pbGxpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhdGggPSB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm90b2NvbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2wgPSB0aGlzLl9wcm90b2NvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVvdXRNaWxsaXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRpbWVvdXRNaWxsaXMgPSB0aGlzLl90aW1lb3V0TWlsbGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bmhlYWx0aHlUaHJlc2hvbGQgPSB0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnRlcnZhbE1pbGxpcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhdGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0TWlsbGlzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9oZWFsdGh5VGhyZXNob2xkID0gdmFsdWUuaGVhbHRoeVRocmVzaG9sZDtcbiAgICAgIHRoaXMuX2ludGVydmFsTWlsbGlzID0gdmFsdWUuaW50ZXJ2YWxNaWxsaXM7XG4gICAgICB0aGlzLl9wYXRoID0gdmFsdWUucGF0aDtcbiAgICAgIHRoaXMuX3BvcnQgPSB2YWx1ZS5wb3J0O1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZS5wcm90b2NvbDtcbiAgICAgIHRoaXMuX3RpbWVvdXRNaWxsaXMgPSB2YWx1ZS50aW1lb3V0TWlsbGlzO1xuICAgICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdmFsdWUudW5oZWFsdGh5VGhyZXNob2xkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhlYWx0aHlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGhlYWx0aHlUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGh5X3RocmVzaG9sZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhbHRoeVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faGVhbHRoeVRocmVzaG9sZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFsdGh5VGhyZXNob2xkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQ7XG4gIH1cblxuICAvLyBpbnRlcnZhbF9taWxsaXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxNaWxsaXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGludGVydmFsTWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW50ZXJ2YWxfbWlsbGlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbE1pbGxpcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWxNaWxsaXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxNaWxsaXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxNaWxsaXM7XG4gIH1cblxuICAvLyBwYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGF0aCgpIHtcbiAgICB0aGlzLl9wYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Byb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cblxuICAvLyB0aW1lb3V0X21pbGxpcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90aW1lb3V0TWlsbGlzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0TWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dF9taWxsaXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRNaWxsaXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RpbWVvdXRNaWxsaXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dE1pbGxpc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0TWlsbGlzO1xuICB9XG5cbiAgLy8gdW5oZWFsdGh5X3RocmVzaG9sZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bmhlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHVuaGVhbHRoeVRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3VuaGVhbHRoeV90aHJlc2hvbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaGVhbHRoeVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaGVhbHRoeVRocmVzaG9sZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkJhc2VFamVjdGlvbkR1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uQmFzZUVqZWN0aW9uRHVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uQmFzZUVqZWN0aW9uRHVyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uQmFzZUVqZWN0aW9uRHVyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkJhc2VFamVjdGlvbkR1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25CYXNlRWplY3Rpb25EdXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25CYXNlRWplY3Rpb25EdXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uSW50ZXJ2YWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25JbnRlcnZhbFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25JbnRlcnZhbE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25JbnRlcnZhbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uSW50ZXJ2YWxPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkludGVydmFsIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkludGVydmFsIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heEVqZWN0aW9uUGVyY2VudDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFNlcnZlckVycm9yczogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhc2VFamVjdGlvbkR1cmF0aW9uOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uQmFzZUVqZWN0aW9uRHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZXJ2YWw6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25JbnRlcnZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1heF9lamVjdGlvbl9wZXJjZW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heEVqZWN0aW9uUGVyY2VudCksXG4gICAgbWF4X3NlcnZlcl9lcnJvcnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4U2VydmVyRXJyb3JzKSxcbiAgICBiYXNlX2VqZWN0aW9uX2R1cmF0aW9uOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uQmFzZUVqZWN0aW9uRHVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmJhc2VFamVjdGlvbkR1cmF0aW9uKSxcbiAgICBpbnRlcnZhbDogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkludGVydmFsVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF4RWplY3Rpb25QZXJjZW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhFamVjdGlvblBlcmNlbnQgPSB0aGlzLl9tYXhFamVjdGlvblBlcmNlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhTZXJ2ZXJFcnJvcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFNlcnZlckVycm9ycyA9IHRoaXMuX21heFNlcnZlckVycm9ycztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Jhc2VFamVjdGlvbkR1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5iYXNlRWplY3Rpb25EdXJhdGlvbiA9IHRoaXMuX2Jhc2VFamVjdGlvbkR1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW50ZXJ2YWw/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsID0gdGhpcy5faW50ZXJ2YWw/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4RWplY3Rpb25QZXJjZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWF4U2VydmVyRXJyb3JzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYmFzZUVqZWN0aW9uRHVyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ludGVydmFsLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21heEVqZWN0aW9uUGVyY2VudCA9IHZhbHVlLm1heEVqZWN0aW9uUGVyY2VudDtcbiAgICAgIHRoaXMuX21heFNlcnZlckVycm9ycyA9IHZhbHVlLm1heFNlcnZlckVycm9ycztcbiAgICAgIHRoaXMuX2Jhc2VFamVjdGlvbkR1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5iYXNlRWplY3Rpb25EdXJhdGlvbjtcbiAgICAgIHRoaXMuX2ludGVydmFsLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pbnRlcnZhbDtcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfZWplY3Rpb25fcGVyY2VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhFamVjdGlvblBlcmNlbnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heEVqZWN0aW9uUGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9lamVjdGlvbl9wZXJjZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhFamVjdGlvblBlcmNlbnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heEVqZWN0aW9uUGVyY2VudCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhFamVjdGlvblBlcmNlbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RWplY3Rpb25QZXJjZW50O1xuICB9XG5cbiAgLy8gbWF4X3NlcnZlcl9lcnJvcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4U2VydmVyRXJyb3JzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhTZXJ2ZXJFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfc2VydmVyX2Vycm9ycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4U2VydmVyRXJyb3JzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhTZXJ2ZXJFcnJvcnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4U2VydmVyRXJyb3JzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFNlcnZlckVycm9ycztcbiAgfVxuXG4gIC8vIGJhc2VfZWplY3Rpb25fZHVyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYmFzZUVqZWN0aW9uRHVyYXRpb24gPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkJhc2VFamVjdGlvbkR1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImJhc2VfZWplY3Rpb25fZHVyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYmFzZUVqZWN0aW9uRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VFamVjdGlvbkR1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRCYXNlRWplY3Rpb25EdXJhdGlvbih2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkJhc2VFamVjdGlvbkR1cmF0aW9uKSB7XG4gICAgdGhpcy5fYmFzZUVqZWN0aW9uRHVyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXNlRWplY3Rpb25EdXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYXNlRWplY3Rpb25EdXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW50ZXJ2YWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW50ZXJ2YWwgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkludGVydmFsT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImludGVydmFsXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgfVxuICBwdWJsaWMgcHV0SW50ZXJ2YWwodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25JbnRlcnZhbCkge1xuICAgIHRoaXMuX2ludGVydmFsLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWwuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJQb3J0TWFwcGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm90b2NvbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyUG9ydE1hcHBpbmdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wb3J0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0ID0gdGhpcy5fcG9ydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb3RvY29sKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm90b2NvbCA9IHRoaXMuX3Byb3RvY29sO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3BvcnQgPSB2YWx1ZS5wb3J0O1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZS5wcm90b2NvbDtcbiAgICB9XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Byb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY0lkbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY0lkbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY0lkbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjSWRsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjSWRsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1BlclJlcXVlc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjUGVyUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjUGVyUmVxdWVzdE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjUGVyUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1BlclJlcXVlc3RPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNQZXJSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNQZXJSZXF1ZXN0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlclJlcXVlc3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1BlclJlcXVlc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpZGxlOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY0lkbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkbGUpLFxuICAgIHBlcl9yZXF1ZXN0OiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1BlclJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnBlclJlcXVlc3QpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwYyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faWRsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWRsZSA9IHRoaXMuX2lkbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZXJSZXF1ZXN0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wZXJSZXF1ZXN0ID0gdGhpcy5fcGVyUmVxdWVzdD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pZGxlO1xuICAgICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGVyUmVxdWVzdDtcbiAgICB9XG4gIH1cblxuICAvLyBpZGxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkbGUgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImlkbGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaWRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRsZTtcbiAgfVxuICBwdWJsaWMgcHV0SWRsZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlKSB7XG4gICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWRsZSgpIHtcbiAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcGVyX3JlcXVlc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGVyUmVxdWVzdCA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1BlclJlcXVlc3RPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicGVyX3JlcXVlc3RcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGVyUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyUmVxdWVzdDtcbiAgfVxuICBwdWJsaWMgcHV0UGVyUmVxdWVzdCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNQZXJSZXF1ZXN0KSB7XG4gICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVyUmVxdWVzdCgpIHtcbiAgICB0aGlzLl9wZXJSZXF1ZXN0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlclJlcXVlc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwSWRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBJZGxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBJZGxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBJZGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwSWRsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cElkbGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3VuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cElkbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBQZXJSZXF1ZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cFBlclJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cFBlclJlcXVlc3RPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cFBlclJlcXVlc3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBQZXJSZXF1ZXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwUGVyUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwUGVyUmVxdWVzdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWRsZT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwSWRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwZXJSZXF1ZXN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBQZXJSZXF1ZXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaWRsZTogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBJZGxlVG9UZXJyYWZvcm0oc3RydWN0IS5pZGxlKSxcbiAgICBwZXJfcmVxdWVzdDogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBQZXJSZXF1ZXN0VG9UZXJyYWZvcm0oc3RydWN0IS5wZXJSZXF1ZXN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lkbGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlkbGUgPSB0aGlzLl9pZGxlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVyUmVxdWVzdD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGVyUmVxdWVzdCA9IHRoaXMuX3BlclJlcXVlc3Q/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaWRsZTtcbiAgICAgIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnBlclJlcXVlc3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gaWRsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZGxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwSWRsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpZGxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlkbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkbGU7XG4gIH1cbiAgcHVibGljIHB1dElkbGUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwSWRsZSkge1xuICAgIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkbGUoKSB7XG4gICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZGxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBlcl9yZXF1ZXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BlclJlcXVlc3QgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBQZXJSZXF1ZXN0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInBlcl9yZXF1ZXN0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHBlclJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlclJlcXVlc3Q7XG4gIH1cbiAgcHVibGljIHB1dFBlclJlcXVlc3QodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwUGVyUmVxdWVzdCkge1xuICAgIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlclJlcXVlc3QoKSB7XG4gICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZXJSZXF1ZXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJJZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJJZGxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAySWRsZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMklkbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAySWRsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJJZGxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAySWRsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJQZXJSZXF1ZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJQZXJSZXF1ZXN0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyUGVyUmVxdWVzdE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMlBlclJlcXVlc3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyUGVyUmVxdWVzdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJQZXJSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyUGVyUmVxdWVzdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkbGU/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJJZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlclJlcXVlc3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJQZXJSZXF1ZXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaWRsZTogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAySWRsZVRvVGVycmFmb3JtKHN0cnVjdCEuaWRsZSksXG4gICAgcGVyX3JlcXVlc3Q6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMlBlclJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnBlclJlcXVlc3QpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pZGxlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pZGxlID0gdGhpcy5faWRsZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlclJlcXVlc3Q/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBlclJlcXVlc3QgPSB0aGlzLl9wZXJSZXF1ZXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pZGxlO1xuICAgICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGVyUmVxdWVzdDtcbiAgICB9XG4gIH1cblxuICAvLyBpZGxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkbGUgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAySWRsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpZGxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlkbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkbGU7XG4gIH1cbiAgcHVibGljIHB1dElkbGUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMklkbGUpIHtcbiAgICB0aGlzLl9pZGxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZGxlKCkge1xuICAgIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZGxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwZXJfcmVxdWVzdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZXJSZXF1ZXN0ID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMlBlclJlcXVlc3RPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicGVyX3JlcXVlc3RcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGVyUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyUmVxdWVzdDtcbiAgfVxuICBwdWJsaWMgcHV0UGVyUmVxdWVzdCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyUGVyUmVxdWVzdCkge1xuICAgIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlclJlcXVlc3QoKSB7XG4gICAgdGhpcy5fcGVyUmVxdWVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZXJSZXF1ZXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlclJlcXVlc3QuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VGNwSWRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcElkbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VGNwSWRsZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BJZGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BJZGxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BJZGxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl91bml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcElkbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWRsZT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BJZGxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VGNwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaWRsZTogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcElkbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkbGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VGNwT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3AgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lkbGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlkbGUgPSB0aGlzLl9pZGxlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaWRsZTtcbiAgICB9XG4gIH1cblxuICAvLyBpZGxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkbGUgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcElkbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaWRsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpZGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9pZGxlO1xuICB9XG4gIHB1YmxpYyBwdXRJZGxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VGNwSWRsZSkge1xuICAgIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkbGUoKSB7XG4gICAgdGhpcy5faWRsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZGxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncnBjPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHAyPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRjcD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dE91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBncnBjOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JwYyksXG4gICAgaHR0cDogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHApLFxuICAgIGh0dHAyOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHAyKSxcbiAgICB0Y3A6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BUb1RlcnJhZm9ybShzdHJ1Y3QhLnRjcCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZ3JwYz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ3JwYyA9IHRoaXMuX2dycGM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwID0gdGhpcy5faHR0cD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2h0dHAyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwMiA9IHRoaXMuX2h0dHAyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGNwPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50Y3AgPSB0aGlzLl90Y3A/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZ3JwYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faHR0cC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faHR0cDIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RjcC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ncnBjLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ncnBjO1xuICAgICAgdGhpcy5faHR0cC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaHR0cDtcbiAgICAgIHRoaXMuX2h0dHAyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5odHRwMjtcbiAgICAgIHRoaXMuX3RjcC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGNwO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdycGMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3JwYyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJncnBjXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGdycGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGM7XG4gIH1cbiAgcHVibGljIHB1dEdycGModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjKSB7XG4gICAgdGhpcy5fZ3JwYy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R3JwYygpIHtcbiAgICB0aGlzLl9ncnBjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdycGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JwYy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaHR0cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImh0dHBcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaHR0cCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cDtcbiAgfVxuICBwdWJsaWMgcHV0SHR0cCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHApIHtcbiAgICB0aGlzLl9odHRwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwKCkge1xuICAgIHRoaXMuX2h0dHAuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodHRwMiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwMiA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHR0cDJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaHR0cDIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAyO1xuICB9XG4gIHB1YmxpYyBwdXRIdHRwMih2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyKSB7XG4gICAgdGhpcy5faHR0cDIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHAyKCkge1xuICAgIHRoaXMuX2h0dHAyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh0dHAySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0Y3AgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGNwID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGNwXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRjcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGNwO1xuICB9XG4gIHB1YmxpYyBwdXRUY3AodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3ApIHtcbiAgICB0aGlzLl90Y3AuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRjcCgpIHtcbiAgICB0aGlzLl90Y3AuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGNwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RjcC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY20pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQXJuID0gdGhpcy5fY2VydGlmaWNhdGVBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlLmNlcnRpZmljYXRlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQ2hhaW46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcml2YXRlS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgICBwcml2YXRlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcml2YXRlS2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVDaGFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcml2YXRlS2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcml2YXRlS2V5ID0gdGhpcy5fcHJpdmF0ZUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcml2YXRlS2V5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWUuY2VydGlmaWNhdGVDaGFpbjtcbiAgICAgIHRoaXMuX3ByaXZhdGVLZXkgPSB2YWx1ZS5wcml2YXRlS2V5O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2NoYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQ2hhaW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9jaGFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVDaGFpbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gIH1cblxuICAvLyBwcml2YXRlX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcml2YXRlS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcml2YXRlS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpdmF0ZV9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaXZhdGVLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByaXZhdGVLZXkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcml2YXRlS2V5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWNyZXROYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWNyZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NlY3JldE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3JldE5hbWUgPSB0aGlzLl9zZWNyZXROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZWNyZXROYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zZWNyZXROYW1lID0gdmFsdWUuc2VjcmV0TmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBzZWNyZXRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZWNyZXROYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWNyZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3JldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjcmV0TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNyZXROYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY20/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNtOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbVRvVGVycmFmb3JtKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGUpLFxuICAgIHNkczogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNkcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY20/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjbSA9IHRoaXMuX2FjbT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGUgPSB0aGlzLl9maWxlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2RzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZHMgPSB0aGlzLl9zZHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYWNtO1xuICAgICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZmlsZTtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2RzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY20gPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY21PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNtXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNtO1xuICB9XG4gIHB1YmxpYyBwdXRBY20odmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtKSB7XG4gICAgdGhpcy5fYWNtLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY20oKSB7XG4gICAgdGhpcy5fYWNtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsZSA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmlsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlKCkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2RzID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNkc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NkcztcbiAgfVxuICBwdWJsaWMgcHV0U2RzKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkcykge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2RzKCkge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4YWN0OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4YWN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV4YWN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2ggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2V4YWN0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leGFjdCA9IHRoaXMuX2V4YWN0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2ggfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9leGFjdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXhhY3QgPSB2YWx1ZS5leGFjdDtcbiAgICB9XG4gIH1cblxuICAvLyBleGFjdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9leGFjdD86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBleGFjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleGFjdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhhY3QodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZXhhY3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhhY3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhhY3Q7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXRjaDogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hdGNoID0gdGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWF0Y2g7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF0Y2ggPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWF0Y2hcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbWF0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoO1xuICB9XG4gIHB1YmxpYyBwdXRNYXRjaCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpIHtcbiAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hdGNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVDaGFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVDaGFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlLmNlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfY2hhaW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2VydGlmaWNhdGVDaGFpbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2NoYWluJyk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZUNoYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVDaGFpbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWNyZXROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNyZXROYW1lID0gdGhpcy5fc2VjcmV0TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICBzZHM6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5maWxlO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZHM7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmlsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZSgpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NkcyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzO1xuICB9XG4gIHB1YmxpYyBwdXRTZHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcykge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2RzKCkge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3ViamVjdEFsdGVybmF0aXZlTmFtZXM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3Q6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXM6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvVGVycmFmb3JtKHN0cnVjdCEuc3ViamVjdEFsdGVybmF0aXZlTmFtZXMpLFxuICAgIHRydXN0OiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnRydXN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3ViamVjdEFsdGVybmF0aXZlTmFtZXMgPSB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RydXN0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cnVzdCA9IHRoaXMuX3RydXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudHJ1c3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gIH1cbiAgcHVibGljIHB1dFN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpIHtcbiAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3ViamVjdEFsdGVybmF0aXZlTmFtZXMoKSB7XG4gICAgdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3ViamVjdEFsdGVybmF0aXZlTmFtZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRydXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RydXN0ID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0cnVzdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0cnVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJ1c3Q7XG4gIH1cbiAgcHVibGljIHB1dFRydXN0KHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3QpIHtcbiAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRydXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RydXN0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9kZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWxpZGF0aW9uPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gICAgY2VydGlmaWNhdGU6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZSksXG4gICAgdmFsaWRhdGlvbjogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEudmFsaWRhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlID0gdGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWxpZGF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWxpZGF0aW9uID0gdGhpcy5fdmFsaWRhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRscyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tb2RlID0gdmFsdWUubW9kZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jZXJ0aWZpY2F0ZTtcbiAgICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnZhbGlkYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZSA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjZXJ0aWZpY2F0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGU7XG4gIH1cbiAgcHVibGljIHB1dENlcnRpZmljYXRlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZSkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZhbGlkYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsaWRhdGlvbiA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInZhbGlkYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdmFsaWRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0VmFsaWRhdGlvbih2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbikge1xuICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZGF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25Qb29sPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2w7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2s/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJIZWFsdGhDaGVjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdXRsaWVyRGV0ZWN0aW9uPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0TWFwcGluZzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyUG9ydE1hcHBpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGxzPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29ubmVjdGlvbl9wb29sOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdGlvblBvb2wpLFxuICAgIGhlYWx0aF9jaGVjazogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVySGVhbHRoQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWx0aENoZWNrKSxcbiAgICBvdXRsaWVyX2RldGVjdGlvbjogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEub3V0bGllckRldGVjdGlvbiksXG4gICAgcG9ydF9tYXBwaW5nOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9ydE1hcHBpbmcpLFxuICAgIHRpbWVvdXQ6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXQpLFxuICAgIHRsczogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVG9UZXJyYWZvcm0oc3RydWN0IS50bHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb25uZWN0aW9uUG9vbD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29ubmVjdGlvblBvb2wgPSB0aGlzLl9jb25uZWN0aW9uUG9vbD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hlYWx0aENoZWNrPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFsdGhDaGVjayA9IHRoaXMuX2hlYWx0aENoZWNrPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3V0bGllckRldGVjdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3V0bGllckRldGVjdGlvbiA9IHRoaXMuX291dGxpZXJEZXRlY3Rpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0TWFwcGluZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydE1hcHBpbmcgPSB0aGlzLl9wb3J0TWFwcGluZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVvdXQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRpbWVvdXQgPSB0aGlzLl90aW1lb3V0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGxzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50bHMgPSB0aGlzLl90bHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25uZWN0aW9uUG9vbC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX291dGxpZXJEZXRlY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvcnRNYXBwaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29ubmVjdGlvblBvb2wuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNvbm5lY3Rpb25Qb29sO1xuICAgICAgdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmhlYWx0aENoZWNrO1xuICAgICAgdGhpcy5fb3V0bGllckRldGVjdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUub3V0bGllckRldGVjdGlvbjtcbiAgICAgIHRoaXMuX3BvcnRNYXBwaW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wb3J0TWFwcGluZztcbiAgICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRpbWVvdXQ7XG4gICAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRscztcbiAgICB9XG4gIH1cblxuICAvLyBjb25uZWN0aW9uX3Bvb2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29ubmVjdGlvblBvb2wgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29ubmVjdGlvbl9wb29sXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25Qb29sKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uUG9vbDtcbiAgfVxuICBwdWJsaWMgcHV0Q29ubmVjdGlvblBvb2wodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvblBvb2wuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbm5lY3Rpb25Qb29sKCkge1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25Qb29sLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25Qb29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25Qb29sLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2sgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhbHRoQ2hlY2sgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVySGVhbHRoQ2hlY2tPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaGVhbHRoX2NoZWNrXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGhDaGVjaztcbiAgfVxuICBwdWJsaWMgcHV0SGVhbHRoQ2hlY2sodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhlYWx0aENoZWNrKCkge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBvdXRsaWVyX2RldGVjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRsaWVyRGV0ZWN0aW9uID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwib3V0bGllcl9kZXRlY3Rpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgb3V0bGllckRldGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0bGllckRldGVjdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0T3V0bGllckRldGVjdGlvbih2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbikge1xuICAgIHRoaXMuX291dGxpZXJEZXRlY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE91dGxpZXJEZXRlY3Rpb24oKSB7XG4gICAgdGhpcy5fb3V0bGllckRldGVjdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdXRsaWVyRGV0ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dGxpZXJEZXRlY3Rpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBvcnRfbWFwcGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0TWFwcGluZyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwb3J0X21hcHBpbmdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcG9ydE1hcHBpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRNYXBwaW5nO1xuICB9XG4gIHB1YmxpYyBwdXRQb3J0TWFwcGluZyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcpIHtcbiAgICB0aGlzLl9wb3J0TWFwcGluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRNYXBwaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRNYXBwaW5nLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXQgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXQodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXQpIHtcbiAgICB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0KCkge1xuICAgIHRoaXMuX3RpbWVvdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0bHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGxzID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0bHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGxzKCkge1xuICAgIHJldHVybiB0aGlzLl90bHM7XG4gIH1cbiAgcHVibGljIHB1dFRscyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzKSB7XG4gICAgdGhpcy5fdGxzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUbHMoKSB7XG4gICAgdGhpcy5fdGxzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXRoID0gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3BhdGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3BhdGggPSB2YWx1ZS5wYXRoO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZ091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZmlsZTogYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2cgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGUgPSB0aGlzLl9maWxlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2cgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmZpbGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJmaWxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cbiAgcHVibGljIHB1dEZpbGUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZSkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbGUoKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXNzTG9nPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfbG9nOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzTG9nKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjY2Vzc0xvZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzTG9nID0gdGhpcy5fYWNjZXNzTG9nPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY2Nlc3NMb2cuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWNjZXNzTG9nLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hY2Nlc3NMb2c7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX2xvZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NMb2cgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNjZXNzX2xvZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhY2Nlc3NMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0xvZztcbiAgfVxuICBwdWJsaWMgcHV0QWNjZXNzTG9nKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZykge1xuICAgIHRoaXMuX2FjY2Vzc0xvZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzTG9nKCkge1xuICAgIHRoaXMuX2FjY2Vzc0xvZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2Nlc3NMb2dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzTG9nLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlBd3NDbG91ZE1hcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZXNwYWNlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5QXdzQ2xvdWRNYXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeUF3c0Nsb3VkTWFwT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlBd3NDbG91ZE1hcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF0dHJpYnV0ZXM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEuYXR0cmlidXRlcyksXG4gICAgbmFtZXNwYWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlTmFtZSksXG4gICAgc2VydmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlBd3NDbG91ZE1hcE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeUF3c0Nsb3VkTWFwIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdHRyaWJ1dGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdHRyaWJ1dGVzID0gdGhpcy5fYXR0cmlidXRlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWVzcGFjZU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWVzcGFjZU5hbWUgPSB0aGlzLl9uYW1lc3BhY2VOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VydmljZU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZpY2VOYW1lID0gdGhpcy5fc2VydmljZU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeUF3c0Nsb3VkTWFwIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWVzcGFjZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJ2aWNlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXR0cmlidXRlcyA9IHZhbHVlLmF0dHJpYnV0ZXM7XG4gICAgICB0aGlzLl9uYW1lc3BhY2VOYW1lID0gdmFsdWUubmFtZXNwYWNlTmFtZTtcbiAgICAgIHRoaXMuX3NlcnZpY2VOYW1lID0gdmFsdWUuc2VydmljZU5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gYXR0cmlidXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdHRyaWJ1dGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXR0cmlidXRlcyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzO1xuICB9XG5cbiAgLy8gbmFtZXNwYWNlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZXNwYWNlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVzcGFjZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lc3BhY2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lc3BhY2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlTmFtZTtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlTmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeURucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5RG5zVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlEbnNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeURucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhvc3RuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RuYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlEbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlEbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hvc3RuYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0bmFtZSA9IHRoaXMuX2hvc3RuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlEbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ob3N0bmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faG9zdG5hbWUgPSB2YWx1ZS5ob3N0bmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBob3N0bmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ob3N0bmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0bmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3RuYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvc3RuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RuYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhd3NDbG91ZE1hcD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5QXdzQ2xvdWRNYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG5zPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlEbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhd3NfY2xvdWRfbWFwOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeUF3c0Nsb3VkTWFwVG9UZXJyYWZvcm0oc3RydWN0IS5hd3NDbG91ZE1hcCksXG4gICAgZG5zOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeURuc1RvVGVycmFmb3JtKHN0cnVjdCEuZG5zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnkgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F3c0Nsb3VkTWFwPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hd3NDbG91ZE1hcCA9IHRoaXMuX2F3c0Nsb3VkTWFwPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZG5zPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kbnMgPSB0aGlzLl9kbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F3c0Nsb3VkTWFwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXdzQ2xvdWRNYXAuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmF3c0Nsb3VkTWFwO1xuICAgICAgdGhpcy5fZG5zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gYXdzX2Nsb3VkX21hcCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hd3NDbG91ZE1hcCA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeUF3c0Nsb3VkTWFwT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF3c19jbG91ZF9tYXBcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXdzQ2xvdWRNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F3c0Nsb3VkTWFwO1xuICB9XG4gIHB1YmxpYyBwdXRBd3NDbG91ZE1hcCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlBd3NDbG91ZE1hcCkge1xuICAgIHRoaXMuX2F3c0Nsb3VkTWFwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBd3NDbG91ZE1hcCgpIHtcbiAgICB0aGlzLl9hd3NDbG91ZE1hcC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NDbG91ZE1hcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NDbG91ZE1hcC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZG5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RucyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeURuc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZG5zKCkge1xuICAgIHJldHVybiB0aGlzLl9kbnM7XG4gIH1cbiAgcHVibGljIHB1dERucyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlEbnMpIHtcbiAgICB0aGlzLl9kbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERucygpIHtcbiAgICB0aGlzLl9kbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rucy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhY2tlbmQ/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhY2tlbmREZWZhdWx0cz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGlzdGVuZXI/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nZ2luZz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VEaXNjb3Zlcnk/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxOb2RlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJhY2tlbmQ6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRUb1RlcnJhZm9ybSkoc3RydWN0IS5iYWNrZW5kKSxcbiAgICBiYWNrZW5kX2RlZmF1bHRzOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzVG9UZXJyYWZvcm0oc3RydWN0IS5iYWNrZW5kRGVmYXVsdHMpLFxuICAgIGxpc3RlbmVyOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmxpc3RlbmVyKSxcbiAgICBsb2dnaW5nOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nZ2luZyksXG4gICAgc2VydmljZV9kaXNjb3Zlcnk6IGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5VG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlRGlzY292ZXJ5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9iYWNrZW5kKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5iYWNrZW5kID0gdGhpcy5fYmFja2VuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2JhY2tlbmREZWZhdWx0cz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmFja2VuZERlZmF1bHRzID0gdGhpcy5fYmFja2VuZERlZmF1bHRzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGlzdGVuZXI/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmxpc3RlbmVyID0gdGhpcy5fbGlzdGVuZXI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dnaW5nPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dnaW5nID0gdGhpcy5fbG9nZ2luZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlcnZpY2VEaXNjb3Zlcnk/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZpY2VEaXNjb3ZlcnkgPSB0aGlzLl9zZXJ2aWNlRGlzY292ZXJ5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JhY2tlbmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9iYWNrZW5kRGVmYXVsdHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xpc3RlbmVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dnaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJ2aWNlRGlzY292ZXJ5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2JhY2tlbmQgPSB2YWx1ZS5iYWNrZW5kO1xuICAgICAgdGhpcy5fYmFja2VuZERlZmF1bHRzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5iYWNrZW5kRGVmYXVsdHM7XG4gICAgICB0aGlzLl9saXN0ZW5lci5pbnRlcm5hbFZhbHVlID0gdmFsdWUubGlzdGVuZXI7XG4gICAgICB0aGlzLl9sb2dnaW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sb2dnaW5nO1xuICAgICAgdGhpcy5fc2VydmljZURpc2NvdmVyeS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2VydmljZURpc2NvdmVyeTtcbiAgICB9XG4gIH1cblxuICAvLyBiYWNrZW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JhY2tlbmQ/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFtdOyBcbiAgcHVibGljIGdldCBiYWNrZW5kKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdiYWNrZW5kJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYmFja2VuZCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRbXSkge1xuICAgIHRoaXMuX2JhY2tlbmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYWNrZW5kKCkge1xuICAgIHRoaXMuX2JhY2tlbmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJhY2tlbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2VuZDtcbiAgfVxuXG4gIC8vIGJhY2tlbmRfZGVmYXVsdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmFja2VuZERlZmF1bHRzID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYmFja2VuZF9kZWZhdWx0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBiYWNrZW5kRGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tlbmREZWZhdWx0cztcbiAgfVxuICBwdWJsaWMgcHV0QmFja2VuZERlZmF1bHRzKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzKSB7XG4gICAgdGhpcy5fYmFja2VuZERlZmF1bHRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYWNrZW5kRGVmYXVsdHMoKSB7XG4gICAgdGhpcy5fYmFja2VuZERlZmF1bHRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJhY2tlbmREZWZhdWx0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZW5kRGVmYXVsdHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxpc3RlbmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xpc3RlbmVyID0gbmV3IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsaXN0ZW5lclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXI7XG4gIH1cbiAgcHVibGljIHB1dExpc3RlbmVyKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXIpIHtcbiAgICB0aGlzLl9saXN0ZW5lci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5fbGlzdGVuZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGlzdGVuZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxvZ2dpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nZ2luZyA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsb2dnaW5nXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxvZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmc7XG4gIH1cbiAgcHVibGljIHB1dExvZ2dpbmcodmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nKSB7XG4gICAgdGhpcy5fbG9nZ2luZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZygpIHtcbiAgICB0aGlzLl9sb2dnaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2VydmljZV9kaXNjb3ZlcnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmljZURpc2NvdmVyeSA9IG5ldyBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzZXJ2aWNlX2Rpc2NvdmVyeVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZXJ2aWNlRGlzY292ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlRGlzY292ZXJ5O1xuICB9XG4gIHB1YmxpYyBwdXRTZXJ2aWNlRGlzY292ZXJ5KHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeSkge1xuICAgIHRoaXMuX3NlcnZpY2VEaXNjb3ZlcnkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZpY2VEaXNjb3ZlcnkoKSB7XG4gICAgdGhpcy5fc2VydmljZURpc2NvdmVyeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlRGlzY292ZXJ5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VEaXNjb3ZlcnkuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXBwbWVzaF92aXJ0dWFsX25vZGVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBwbWVzaFZpcnR1YWxOb2RlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBwbWVzaF92aXJ0dWFsX25vZGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbWVzaE5hbWUgPSBjb25maWcubWVzaE5hbWU7XG4gICAgdGhpcy5fbWVzaE93bmVyID0gY29uZmlnLm1lc2hPd25lcjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9zcGVjLmludGVybmFsVmFsdWUgPSBjb25maWcuc3BlYztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjcmVhdGVkX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfZGF0ZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlZF9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFVwZGF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF91cGRhdGVkX2RhdGUnKTtcbiAgfVxuXG4gIC8vIG1lc2hfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tZXNoTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzaE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNoX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc2hOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNoTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNoTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNoTmFtZTtcbiAgfVxuXG4gIC8vIG1lc2hfb3duZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXNoT3duZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1lc2hPd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc2hfb3duZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc2hPd25lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzaE93bmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWVzaE93bmVyKCkge1xuICAgIHRoaXMuX21lc2hPd25lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVzaE93bmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc2hPd25lcjtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcmVzb3VyY2Vfb3duZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXNvdXJjZU93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2Vfb3duZXInKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBzcGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NwZWMgPSBuZXcgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzcGVjXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNwZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWM7XG4gIH1cbiAgcHVibGljIHB1dFNwZWModmFsdWU6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWMpIHtcbiAgICB0aGlzLl9zcGVjLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVjLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc2hfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWVzaE5hbWUpLFxuICAgICAgbWVzaF9vd25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWVzaE93bmVyKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBzcGVjOiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjVG9UZXJyYWZvcm0odGhpcy5fc3BlYy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=