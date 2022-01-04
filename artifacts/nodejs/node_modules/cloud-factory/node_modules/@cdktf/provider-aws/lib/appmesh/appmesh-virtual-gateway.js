"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppmeshVirtualGateway = exports.AppmeshVirtualGatewaySpecOutputReference = exports.appmeshVirtualGatewaySpecToTerraform = exports.AppmeshVirtualGatewaySpecLoggingOutputReference = exports.appmeshVirtualGatewaySpecLoggingToTerraform = exports.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference = exports.appmeshVirtualGatewaySpecLoggingAccessLogToTerraform = exports.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference = exports.appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform = exports.AppmeshVirtualGatewaySpecListenerOutputReference = exports.appmeshVirtualGatewaySpecListenerToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform = exports.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference = exports.appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform = exports.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference = exports.appmeshVirtualGatewaySpecListenerPortMappingToTerraform = exports.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference = exports.appmeshVirtualGatewaySpecListenerHealthCheckToTerraform = exports.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference = exports.appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform = exports.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference = exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform = exports.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference = exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform = exports.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference = exports.appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform = exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference = exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference[_a] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference[_b] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct.file),
        sds: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
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
        this._file = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._file) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_13 = this._file) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._sds) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_15 = this._sds) === null || _15 === void 0 ? void 0 : _15.internalValue;
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference[_c] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference[_d] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        match: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct.match),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
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
        this._match = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._match) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.match = (_13 = this._match) === null || _13 === void 0 ? void 0 : _13.internalValue;
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference[_e] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference[_f] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference[_g] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference[_h] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct.acm),
        file: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct.file),
        sds: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
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
        this._acm = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this, "acm", true);
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._acm) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.acm = (_13 = this._acm) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._file) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_15 = this._file) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._sds) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_17 = this._sds) === null || _17 === void 0 ? void 0 : _17.internalValue;
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference;
_j = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference[_j] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        subject_alternative_names: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct.subjectAlternativeNames),
        trust: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct.trust),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
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
        this._subjectAlternativeNames = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names", true);
        // trust - computed: false, optional: false, required: true
        this._trust = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this, "trust", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._subjectAlternativeNames) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = (_13 = this._subjectAlternativeNames) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._trust) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.trust = (_15 = this._trust) === null || _15 === void 0 ? void 0 : _15.internalValue;
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference;
_k = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference[_k] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct.certificate),
        validation: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct.validation),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
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
        this._certificate = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this, "certificate", true);
        // validation - computed: false, optional: false, required: true
        this._validation = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(this, "validation", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
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
        if ((_12 = this._certificate) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.certificate = (_13 = this._certificate) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._validation) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.validation = (_15 = this._validation) === null || _15 === void 0 ? void 0 : _15.internalValue;
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference[_l] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tls: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct.tls),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform = appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
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
        this._tls = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(this, "tls", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._tls) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.tls = (_13 = this._tls) === null || _13 === void 0 ? void 0 : _13.internalValue;
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference;
_m = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference[_m] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_policy: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct.clientPolicy),
    };
}
exports.appmeshVirtualGatewaySpecBackendDefaultsToTerraform = appmeshVirtualGatewaySpecBackendDefaultsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
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
        this._clientPolicy = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(this, "client_policy", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._clientPolicy) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.clientPolicy = (_13 = this._clientPolicy) === null || _13 === void 0 ? void 0 : _13.internalValue;
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
exports.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference = AppmeshVirtualGatewaySpecBackendDefaultsOutputReference;
_o = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecBackendDefaultsOutputReference[_o] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference = AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference;
_p = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference[_p] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference = AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference;
_q = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference[_q] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference = AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference;
_r = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference[_r] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        grpc: appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct.grpc),
        http: appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct.http),
        http2: appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct.http2),
    };
}
exports.appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform = appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
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
        this._grpc = new AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(this, "grpc", true);
        // http - computed: false, optional: true, required: false
        this._http = new AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(this, "http", true);
        // http2 - computed: false, optional: true, required: false
        this._http2 = new AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(this, "http2", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._grpc) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.grpc = (_13 = this._grpc) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._http) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.http = (_15 = this._http) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._http2) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.http2 = (_17 = this._http2) === null || _17 === void 0 ? void 0 : _17.internalValue;
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
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._grpc.internalValue = value.grpc;
            this._http.internalValue = value.http;
            this._http2.internalValue = value.http2;
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
}
exports.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference = AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference;
_s = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference[_s] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerHealthCheckToTerraform = appmeshVirtualGatewaySpecListenerHealthCheckToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference = AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference;
_t = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference[_t] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerPortMappingToTerraform = appmeshVirtualGatewaySpecListenerPortMappingToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference = AppmeshVirtualGatewaySpecListenerPortMappingOutputReference;
_u = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerPortMappingOutputReference[_u] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference = AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference;
_v = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference[_v] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference = AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference;
_w = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference[_w] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference = AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference;
_x = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference[_x] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm: appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct.acm),
        file: appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct.file),
        sds: appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform = appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
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
        this._acm = new AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(this, "acm", true);
        // file - computed: false, optional: true, required: false
        this._file = new AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._acm) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.acm = (_13 = this._acm) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._file) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_15 = this._file) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._sds) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_17 = this._sds) === null || _17 === void 0 ? void 0 : _17.internalValue;
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
exports.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference = AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference;
_y = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference[_y] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference;
_z = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference[_z] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        match: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct.match),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
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
        this._match = new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._match) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.match = (_13 = this._match) === null || _13 === void 0 ? void 0 : _13.internalValue;
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
exports.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference[_0] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference;
_1 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference[_1] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference;
_2 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference[_2] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct.file),
        sds: appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct.sds),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
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
        this._file = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(this, "file", true);
        // sds - computed: false, optional: true, required: false
        this._sds = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(this, "sds", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._file) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_13 = this._file) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._sds) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.sds = (_15 = this._sds) === null || _15 === void 0 ? void 0 : _15.internalValue;
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
exports.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference;
_3 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference[_3] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        subject_alternative_names: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct.subjectAlternativeNames),
        trust: appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct.trust),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsValidationToTerraform = appmeshVirtualGatewaySpecListenerTlsValidationToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
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
        this._subjectAlternativeNames = new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names", true);
        // trust - computed: false, optional: false, required: true
        this._trust = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(this, "trust", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._subjectAlternativeNames) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = (_13 = this._subjectAlternativeNames) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._trust) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.trust = (_15 = this._trust) === null || _15 === void 0 ? void 0 : _15.internalValue;
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
exports.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference = AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference;
_4 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference[_4] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        certificate: appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct.certificate),
        validation: appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct.validation),
    };
}
exports.appmeshVirtualGatewaySpecListenerTlsToTerraform = appmeshVirtualGatewaySpecListenerTlsToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerTlsOutputReference extends cdktf.ComplexObject {
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
        this._certificate = new AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(this, "certificate", true);
        // validation - computed: false, optional: true, required: false
        this._validation = new AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(this, "validation", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if ((_12 = this._certificate) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.certificate = (_13 = this._certificate) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._validation) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.validation = (_15 = this._validation) === null || _15 === void 0 ? void 0 : _15.internalValue;
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
exports.AppmeshVirtualGatewaySpecListenerTlsOutputReference = AppmeshVirtualGatewaySpecListenerTlsOutputReference;
_5 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerTlsOutputReference[_5] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerTlsOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_pool: appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct.connectionPool),
        health_check: appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct.healthCheck),
        port_mapping: appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct.portMapping),
        tls: appmeshVirtualGatewaySpecListenerTlsToTerraform(struct.tls),
    };
}
exports.appmeshVirtualGatewaySpecListenerToTerraform = appmeshVirtualGatewaySpecListenerToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecListenerOutputReference extends cdktf.ComplexObject {
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
        this._connectionPool = new AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(this, "connection_pool", true);
        // health_check - computed: false, optional: true, required: false
        this._healthCheck = new AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(this, "health_check", true);
        // port_mapping - computed: false, optional: false, required: true
        this._portMapping = new AppmeshVirtualGatewaySpecListenerPortMappingOutputReference(this, "port_mapping", true);
        // tls - computed: false, optional: true, required: false
        this._tls = new AppmeshVirtualGatewaySpecListenerTlsOutputReference(this, "tls", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17, _18, _19;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._connectionPool) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.connectionPool = (_13 = this._connectionPool) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._healthCheck) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.healthCheck = (_15 = this._healthCheck) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._portMapping) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.portMapping = (_17 = this._portMapping) === null || _17 === void 0 ? void 0 : _17.internalValue;
        }
        if ((_18 = this._tls) === null || _18 === void 0 ? void 0 : _18.internalValue) {
            hasAnyValues = true;
            internalValueResult.tls = (_19 = this._tls) === null || _19 === void 0 ? void 0 : _19.internalValue;
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
            this._portMapping.internalValue = undefined;
            this._tls.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._connectionPool.internalValue = value.connectionPool;
            this._healthCheck.internalValue = value.healthCheck;
            this._portMapping.internalValue = value.portMapping;
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
exports.AppmeshVirtualGatewaySpecListenerOutputReference = AppmeshVirtualGatewaySpecListenerOutputReference;
_6 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecListenerOutputReference[_6] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecListenerOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct) {
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
exports.appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform = appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
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
exports.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference = AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference;
_7 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference[_7] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file: appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct.file),
    };
}
exports.appmeshVirtualGatewaySpecLoggingAccessLogToTerraform = appmeshVirtualGatewaySpecLoggingAccessLogToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
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
        this._file = new AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(this, "file", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._file) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.file = (_13 = this._file) === null || _13 === void 0 ? void 0 : _13.internalValue;
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
exports.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference = AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference;
_8 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference[_8] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_log: appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct.accessLog),
    };
}
exports.appmeshVirtualGatewaySpecLoggingToTerraform = appmeshVirtualGatewaySpecLoggingToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecLoggingOutputReference extends cdktf.ComplexObject {
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
        this._accessLog = new AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(this, "access_log", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._accessLog) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.accessLog = (_13 = this._accessLog) === null || _13 === void 0 ? void 0 : _13.internalValue;
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
exports.AppmeshVirtualGatewaySpecLoggingOutputReference = AppmeshVirtualGatewaySpecLoggingOutputReference;
_9 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecLoggingOutputReference[_9] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecLoggingOutputReference", version: "3.0.1" };
function appmeshVirtualGatewaySpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        backend_defaults: appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct.backendDefaults),
        listener: appmeshVirtualGatewaySpecListenerToTerraform(struct.listener),
        logging: appmeshVirtualGatewaySpecLoggingToTerraform(struct.logging),
    };
}
exports.appmeshVirtualGatewaySpecToTerraform = appmeshVirtualGatewaySpecToTerraform;
/**
 * @stability stable
 */
class AppmeshVirtualGatewaySpecOutputReference extends cdktf.ComplexObject {
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
        this._backendDefaults = new AppmeshVirtualGatewaySpecBackendDefaultsOutputReference(this, "backend_defaults", true);
        // listener - computed: false, optional: false, required: true
        this._listener = new AppmeshVirtualGatewaySpecListenerOutputReference(this, "listener", true);
        // logging - computed: false, optional: true, required: false
        this._logging = new AppmeshVirtualGatewaySpecLoggingOutputReference(this, "logging", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _12, _13, _14, _15, _16, _17;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_12 = this._backendDefaults) === null || _12 === void 0 ? void 0 : _12.internalValue) {
            hasAnyValues = true;
            internalValueResult.backendDefaults = (_13 = this._backendDefaults) === null || _13 === void 0 ? void 0 : _13.internalValue;
        }
        if ((_14 = this._listener) === null || _14 === void 0 ? void 0 : _14.internalValue) {
            hasAnyValues = true;
            internalValueResult.listener = (_15 = this._listener) === null || _15 === void 0 ? void 0 : _15.internalValue;
        }
        if ((_16 = this._logging) === null || _16 === void 0 ? void 0 : _16.internalValue) {
            hasAnyValues = true;
            internalValueResult.logging = (_17 = this._logging) === null || _17 === void 0 ? void 0 : _17.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._backendDefaults.internalValue = undefined;
            this._listener.internalValue = undefined;
            this._logging.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._backendDefaults.internalValue = value.backendDefaults;
            this._listener.internalValue = value.listener;
            this._logging.internalValue = value.logging;
        }
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
}
exports.AppmeshVirtualGatewaySpecOutputReference = AppmeshVirtualGatewaySpecOutputReference;
_10 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGatewaySpecOutputReference[_10] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGatewaySpecOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}.
 *
 * @stability stable
 */
class AppmeshVirtualGateway extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // spec - computed: false, optional: false, required: true
        this._spec = new AppmeshVirtualGatewaySpecOutputReference(this, "spec", true);
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
            spec: appmeshVirtualGatewaySpecToTerraform(this._spec.internalValue),
        };
    }
}
exports.AppmeshVirtualGateway = AppmeshVirtualGateway;
_11 = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGateway[_11] = { fqn: "@cdktf/provider-aws.appmesh.AppmeshVirtualGateway", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AppmeshVirtualGateway.tfResourceType = "aws_appmesh_virtual_gateway";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbWVzaC12aXJ0dWFsLWdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbWVzaC9hcHBtZXNoLXZpcnR1YWwtZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXdCL0IsU0FBZ0IsaUZBQWlGLENBQUMsTUFBdUs7SUFDdlEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQVRELDhLQVNDOzs7O0FBRUQsTUFBYSxxRkFBc0YsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUk1SCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFD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QU8sQ0FBQyxLQUFnQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxJQUFJLEVBQUUsb0NBQW9DLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FDckUsQ0FBQztJQUNKLENBQUM7O0FBbEtILHNEQW1LQzs7O0FBaktDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csb0NBQWMsR0FBVyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzaE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzaE93bmVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcGVjOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgcHJpdmF0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUtleSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVDaGFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcml2YXRlS2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcml2YXRlS2V5ID0gdGhpcy5fcHJpdmF0ZUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJpdmF0ZUtleSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlLmNlcnRpZmljYXRlQ2hhaW47XG4gICAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWUucHJpdmF0ZUtleTtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG5cbiAgLy8gcHJpdmF0ZV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJpdmF0ZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlS2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaXZhdGVLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpdmF0ZUtleTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWNyZXROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNyZXROYW1lID0gdGhpcy5fc2VjcmV0TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICBzZHM6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5maWxlO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZHM7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmlsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZSgpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NkcyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzO1xuICB9XG4gIHB1YmxpYyBwdXRTZHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcykge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2RzKCkge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGFjdDogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleGFjdDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGFjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2ggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2V4YWN0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leGFjdCA9IHRoaXMuX2V4YWN0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXhhY3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2V4YWN0ID0gdmFsdWUuZXhhY3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhhY3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXhhY3Q/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZXhhY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhhY3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4YWN0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2V4YWN0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4YWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4YWN0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hdGNoOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9UZXJyYWZvcm0oc3RydWN0IS5tYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hdGNoID0gdGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF0Y2guaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm1hdGNoO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hdGNoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21hdGNoID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtYXRjaFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2g7XG4gIH1cbiAgcHVibGljIHB1dE1hdGNoKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpIHtcbiAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hdGNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNlcnRpZmljYXRlX2F1dGhvcml0eV9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNlcnRpZmljYXRlQXV0aG9yaXR5QXJucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMgPSB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMgPSB2YWx1ZS5jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnM7XG4gICAgfVxuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfYXV0aG9yaXR5X2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXV0aG9yaXR5QXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXV0aG9yaXR5QXJucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWUuY2VydGlmaWNhdGVDaGFpbjtcbiAgICB9XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9jaGFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUNoYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfY2hhaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQ2hhaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NlY3JldE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3JldE5hbWUgPSB0aGlzLl9zZWNyZXROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNtPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2RzPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjbTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVRvVGVycmFmb3JtKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzVG9UZXJyYWZvcm0oc3RydWN0IS5zZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3QgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjbT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNtID0gdGhpcy5fYWNtPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjbTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmZpbGU7XG4gICAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNkcztcbiAgICB9XG4gIH1cblxuICAvLyBhY20gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNtID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNtXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNtO1xuICB9XG4gIHB1YmxpYyBwdXRBY20odmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY20pIHtcbiAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjbSgpIHtcbiAgICB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImZpbGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZTtcbiAgfVxuICBwdWJsaWMgcHV0RmlsZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlKCkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2RzID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzO1xuICB9XG4gIHB1YmxpYyBwdXRTZHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNkcygpIHtcbiAgICB0aGlzLl9zZHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3Q6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyksXG4gICAgdHJ1c3Q6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnRydXN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHJ1c3Q/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRydXN0ID0gdGhpcy5fdHJ1c3Q/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudHJ1c3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3ViamVjdEFsdGVybmF0aXZlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzO1xuICB9XG4gIHB1YmxpYyBwdXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcykge1xuICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcygpIHtcbiAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdHJ1c3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHJ1c3QgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0cnVzdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0cnVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJ1c3Q7XG4gIH1cbiAgcHVibGljIHB1dFRydXN0KHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0KSB7XG4gICAgdGhpcy5fdHJ1c3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cnVzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmZvcmNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnRzPzogbnVtYmVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGU/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRhdGlvbjogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmZvcmNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmZvcmNlKSxcbiAgICBwb3J0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5wb3J0cyksXG4gICAgY2VydGlmaWNhdGU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVRvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIHZhbGlkYXRpb246IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS52YWxpZGF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmZvcmNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmZvcmNlID0gdGhpcy5fZW5mb3JjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0cyA9IHRoaXMuX3BvcnRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlID0gdGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWxpZGF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWxpZGF0aW9uID0gdGhpcy5fdmFsaWRhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmZvcmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmZvcmNlID0gdmFsdWUuZW5mb3JjZTtcbiAgICAgIHRoaXMuX3BvcnRzID0gdmFsdWUucG9ydHM7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2VydGlmaWNhdGU7XG4gICAgICB0aGlzLl92YWxpZGF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS52YWxpZGF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuZm9yY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5mb3JjZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5mb3JjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmZvcmNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5mb3JjZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5mb3JjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZm9yY2UoKSB7XG4gICAgdGhpcy5fZW5mb3JjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5mb3JjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmZvcmNlO1xuICB9XG5cbiAgLy8gcG9ydHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydHM/OiBudW1iZXJbXTsgXG4gIHB1YmxpYyBnZXQgcG9ydHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BvcnRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydHModmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fcG9ydHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0cygpIHtcbiAgICB0aGlzLl9wb3J0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydHM7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2VydGlmaWNhdGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlO1xuICB9XG4gIHB1YmxpYyBwdXRDZXJ0aWZpY2F0ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRpZmljYXRlKCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB2YWxpZGF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbGlkYXRpb24gPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidmFsaWRhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB2YWxpZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRWYWxpZGF0aW9uKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbikge1xuICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZGF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0bHM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGxzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0oc3RydWN0IS50bHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Rscz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGxzID0gdGhpcy5fdGxzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRscztcbiAgICB9XG4gIH1cblxuICAvLyB0bHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGxzID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGxzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRscygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGxzO1xuICB9XG4gIHB1YmxpYyBwdXRUbHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMpIHtcbiAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRscygpIHtcbiAgICB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudFBvbGljeT86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3k7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbGllbnRfcG9saWN5OiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VG9UZXJyYWZvcm0oc3RydWN0IS5jbGllbnRQb2xpY3kpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NsaWVudFBvbGljeT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xpZW50UG9saWN5ID0gdGhpcy5fY2xpZW50UG9saWN5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NsaWVudFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbGllbnRQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNsaWVudFBvbGljeTtcbiAgICB9XG4gIH1cblxuICAvLyBjbGllbnRfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsaWVudFBvbGljeSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNsaWVudF9wb2xpY3lcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2xpZW50UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRQb2xpY3k7XG4gIH1cbiAgcHVibGljIHB1dENsaWVudFBvbGljeSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSkge1xuICAgIHRoaXMuX2NsaWVudFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xpZW50UG9saWN5KCkge1xuICAgIHRoaXMuX2NsaWVudFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50UG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFJlcXVlc3RzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfcmVxdWVzdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UmVxdWVzdHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhSZXF1ZXN0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4UmVxdWVzdHMgPSB0aGlzLl9tYXhSZXF1ZXN0cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sR3JwYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heFJlcXVlc3RzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHZhbHVlLm1heFJlcXVlc3RzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9yZXF1ZXN0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhSZXF1ZXN0cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4UmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcmVxdWVzdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFJlcXVlc3RzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhSZXF1ZXN0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhSZXF1ZXN0cztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q29ubmVjdGlvbnM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhQZW5kaW5nUmVxdWVzdHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfY29ubmVjdGlvbnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q29ubmVjdGlvbnMpLFxuICAgIG1heF9wZW5kaW5nX3JlcXVlc3RzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFBlbmRpbmdSZXF1ZXN0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21heENvbm5lY3Rpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhDb25uZWN0aW9ucyA9IHRoaXMuX21heENvbm5lY3Rpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4UGVuZGluZ1JlcXVlc3RzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhQZW5kaW5nUmVxdWVzdHMgPSB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhDb25uZWN0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFBlbmRpbmdSZXF1ZXN0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4Q29ubmVjdGlvbnMgPSB2YWx1ZS5tYXhDb25uZWN0aW9ucztcbiAgICAgIHRoaXMuX21heFBlbmRpbmdSZXF1ZXN0cyA9IHZhbHVlLm1heFBlbmRpbmdSZXF1ZXN0cztcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfY29ubmVjdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4Q29ubmVjdGlvbnM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heENvbm5lY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2Nvbm5lY3Rpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhDb25uZWN0aW9ucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4Q29ubmVjdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4Q29ubmVjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q29ubmVjdGlvbnM7XG4gIH1cblxuICAvLyBtYXhfcGVuZGluZ19yZXF1ZXN0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhQZW5kaW5nUmVxdWVzdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFBlbmRpbmdSZXF1ZXN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9wZW5kaW5nX3JlcXVlc3RzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhQZW5kaW5nUmVxdWVzdHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heFBlbmRpbmdSZXF1ZXN0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFBlbmRpbmdSZXF1ZXN0cygpIHtcbiAgICB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFBlbmRpbmdSZXF1ZXN0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhQZW5kaW5nUmVxdWVzdHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhSZXF1ZXN0czogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMlRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4X3JlcXVlc3RzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFJlcXVlc3RzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhSZXF1ZXN0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4UmVxdWVzdHMgPSB0aGlzLl9tYXhSZXF1ZXN0cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhSZXF1ZXN0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4UmVxdWVzdHMgPSB2YWx1ZS5tYXhSZXF1ZXN0cztcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfcmVxdWVzdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4UmVxdWVzdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFJlcXVlc3RzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3JlcXVlc3RzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhSZXF1ZXN0cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4UmVxdWVzdHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4UmVxdWVzdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UmVxdWVzdHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdycGM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwMj86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2wpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBncnBjOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNUb1RlcnJhZm9ybShzdHJ1Y3QhLmdycGMpLFxuICAgIGh0dHA6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cFRvVGVycmFmb3JtKHN0cnVjdCEuaHR0cCksXG4gICAgaHR0cDI6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHAyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2wgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2dycGM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmdycGMgPSB0aGlzLl9ncnBjPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faHR0cD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cCA9IHRoaXMuX2h0dHA/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwMj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cDIgPSB0aGlzLl9odHRwMj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZ3JwYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faHR0cC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faHR0cDIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZ3JwYy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZ3JwYztcbiAgICAgIHRoaXMuX2h0dHAuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmh0dHA7XG4gICAgICB0aGlzLl9odHRwMi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaHR0cDI7XG4gICAgfVxuICB9XG5cbiAgLy8gZ3JwYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncnBjID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sR3JwY091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJncnBjXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGdycGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGM7XG4gIH1cbiAgcHVibGljIHB1dEdycGModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sR3JwYykge1xuICAgIHRoaXMuX2dycGMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdycGMoKSB7XG4gICAgdGhpcy5fZ3JwYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncnBjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dycGMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGh0dHAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cCA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHR0cFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBodHRwKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwO1xuICB9XG4gIHB1YmxpYyBwdXRIdHRwKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHApIHtcbiAgICB0aGlzLl9odHRwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwKCkge1xuICAgIHRoaXMuX2h0dHAuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodHRwMiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwMiA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImh0dHAyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGh0dHAyKCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwMjtcbiAgfVxuICBwdWJsaWMgcHV0SHR0cDIodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDIpIHtcbiAgICB0aGlzLl9odHRwMi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cDIoKSB7XG4gICAgdGhpcy5faHR0cDIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cDJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cDIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoeVRocmVzaG9sZDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZXJ2YWxNaWxsaXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGF0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm90b2NvbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRNaWxsaXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5oZWFsdGh5VGhyZXNob2xkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVja1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFsdGh5VGhyZXNob2xkKSxcbiAgICBpbnRlcnZhbF9taWxsaXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxNaWxsaXMpLFxuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgdGltZW91dF9taWxsaXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dE1pbGxpcyksXG4gICAgdW5oZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS51bmhlYWx0aHlUaHJlc2hvbGQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVja091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faGVhbHRoeVRocmVzaG9sZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhbHRoeVRocmVzaG9sZCA9IHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnRlcnZhbE1pbGxpcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW50ZXJ2YWxNaWxsaXMgPSB0aGlzLl9pbnRlcnZhbE1pbGxpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhdGggPSB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm90b2NvbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2wgPSB0aGlzLl9wcm90b2NvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVvdXRNaWxsaXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRpbWVvdXRNaWxsaXMgPSB0aGlzLl90aW1lb3V0TWlsbGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bmhlYWx0aHlUaHJlc2hvbGQgPSB0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnRlcnZhbE1pbGxpcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhdGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0TWlsbGlzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9oZWFsdGh5VGhyZXNob2xkID0gdmFsdWUuaGVhbHRoeVRocmVzaG9sZDtcbiAgICAgIHRoaXMuX2ludGVydmFsTWlsbGlzID0gdmFsdWUuaW50ZXJ2YWxNaWxsaXM7XG4gICAgICB0aGlzLl9wYXRoID0gdmFsdWUucGF0aDtcbiAgICAgIHRoaXMuX3BvcnQgPSB2YWx1ZS5wb3J0O1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZS5wcm90b2NvbDtcbiAgICAgIHRoaXMuX3RpbWVvdXRNaWxsaXMgPSB2YWx1ZS50aW1lb3V0TWlsbGlzO1xuICAgICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdmFsdWUudW5oZWFsdGh5VGhyZXNob2xkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhlYWx0aHlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGhlYWx0aHlUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGh5X3RocmVzaG9sZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhbHRoeVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faGVhbHRoeVRocmVzaG9sZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFsdGh5VGhyZXNob2xkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQ7XG4gIH1cblxuICAvLyBpbnRlcnZhbF9taWxsaXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxNaWxsaXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGludGVydmFsTWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW50ZXJ2YWxfbWlsbGlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbE1pbGxpcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWxNaWxsaXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxNaWxsaXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxNaWxsaXM7XG4gIH1cblxuICAvLyBwYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGF0aCgpIHtcbiAgICB0aGlzLl9wYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Byb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cblxuICAvLyB0aW1lb3V0X21pbGxpcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90aW1lb3V0TWlsbGlzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0TWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dF9taWxsaXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRNaWxsaXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RpbWVvdXRNaWxsaXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dE1pbGxpc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0TWlsbGlzO1xuICB9XG5cbiAgLy8gdW5oZWFsdGh5X3RocmVzaG9sZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91bmhlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHVuaGVhbHRoeVRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3VuaGVhbHRoeV90aHJlc2hvbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaGVhbHRoeVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaGVhbHRoeVRocmVzaG9sZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvdG9jb2w6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmdPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm90b2NvbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2wgPSB0aGlzLl9wcm90b2NvbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wb3J0ID0gdmFsdWUucG9ydDtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWUucHJvdG9jb2w7XG4gICAgfVxuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY20pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlQXJuID0gdGhpcy5fY2VydGlmaWNhdGVBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlLmNlcnRpZmljYXRlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQ2hhaW46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcml2YXRlS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgICBwcml2YXRlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcml2YXRlS2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVDaGFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcml2YXRlS2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcml2YXRlS2V5ID0gdGhpcy5fcHJpdmF0ZUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcml2YXRlS2V5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWUuY2VydGlmaWNhdGVDaGFpbjtcbiAgICAgIHRoaXMuX3ByaXZhdGVLZXkgPSB2YWx1ZS5wcml2YXRlS2V5O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2NoYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQ2hhaW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9jaGFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVDaGFpbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUNoYWluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gIH1cblxuICAvLyBwcml2YXRlX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcml2YXRlS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcml2YXRlS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpdmF0ZV9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaXZhdGVLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByaXZhdGVLZXkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcml2YXRlS2V5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWNyZXROYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWNyZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NlY3JldE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3JldE5hbWUgPSB0aGlzLl9zZWNyZXROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZWNyZXROYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zZWNyZXROYW1lID0gdmFsdWUuc2VjcmV0TmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBzZWNyZXRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZWNyZXROYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWNyZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3JldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjcmV0TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNyZXROYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY20/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZU91dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNtOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbVRvVGVycmFmb3JtKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGUpLFxuICAgIHNkczogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVTZHNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNkcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY20/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjbSA9IHRoaXMuX2FjbT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGUgPSB0aGlzLl9maWxlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2RzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZHMgPSB0aGlzLl9zZHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjbS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYWNtO1xuICAgICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZmlsZTtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2RzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY20gPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY21PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNtXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNtO1xuICB9XG4gIHB1YmxpYyBwdXRBY20odmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtKSB7XG4gICAgdGhpcy5fYWNtLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY20oKSB7XG4gICAgdGhpcy5fYWNtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY20uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsZSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmlsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlKCkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2RzID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNkc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NkcztcbiAgfVxuICBwdWJsaWMgcHV0U2RzKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkcykge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2RzKCkge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4YWN0OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4YWN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV4YWN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2ggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2V4YWN0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leGFjdCA9IHRoaXMuX2V4YWN0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2ggfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9leGFjdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXhhY3QgPSB2YWx1ZS5leGFjdDtcbiAgICB9XG4gIH1cblxuICAvLyBleGFjdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9leGFjdD86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBleGFjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleGFjdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhhY3QodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZXhhY3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhhY3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhhY3Q7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXRjaDogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hdGNoID0gdGhpcy5fbWF0Y2g/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWF0Y2g7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF0Y2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF0Y2ggPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWF0Y2hcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbWF0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoO1xuICB9XG4gIHB1YmxpYyBwdXRNYXRjaCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpIHtcbiAgICB0aGlzLl9tYXRjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hdGNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVDaGFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGVDaGFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IHRoaXMuX2NlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlLmNlcnRpZmljYXRlQ2hhaW47XG4gICAgfVxuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfY2hhaW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2VydGlmaWNhdGVDaGFpbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2NoYWluJyk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZUNoYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVDaGFpbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWNyZXROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNyZXROYW1lID0gdGhpcy5fc2VjcmV0TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlY3JldE5hbWUgPSB2YWx1ZS5zZWNyZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlY3JldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3JldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3JldE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgICBzZHM6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmlsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZSA9IHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNkcyA9IHRoaXMuX3Nkcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5maWxlO1xuICAgICAgdGhpcy5fc2RzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZHM7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmlsZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRGaWxlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZSgpIHtcbiAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NkcyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzO1xuICB9XG4gIHB1YmxpYyBwdXRTZHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkcykge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2RzKCkge1xuICAgIHRoaXMuX3Nkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2RzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3ViamVjdEFsdGVybmF0aXZlTmFtZXM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3Q6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXM6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvVGVycmFmb3JtKHN0cnVjdCEuc3ViamVjdEFsdGVybmF0aXZlTmFtZXMpLFxuICAgIHRydXN0OiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnRydXN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3ViamVjdEFsdGVybmF0aXZlTmFtZXMgPSB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RydXN0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cnVzdCA9IHRoaXMuX3RydXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N1YmplY3RBbHRlcm5hdGl2ZU5hbWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gICAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudHJ1c3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXM7XG4gIH1cbiAgcHVibGljIHB1dFN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpIHtcbiAgICB0aGlzLl9zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3ViamVjdEFsdGVybmF0aXZlTmFtZXMoKSB7XG4gICAgdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3ViamVjdEFsdGVybmF0aXZlTmFtZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3ViamVjdEFsdGVybmF0aXZlTmFtZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRydXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RydXN0ID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0cnVzdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0cnVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJ1c3Q7XG4gIH1cbiAgcHVibGljIHB1dFRydXN0KHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3QpIHtcbiAgICB0aGlzLl90cnVzdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRydXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RydXN0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9kZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWxpZGF0aW9uPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gICAgY2VydGlmaWNhdGU6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZSksXG4gICAgdmFsaWRhdGlvbjogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEudmFsaWRhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlcnRpZmljYXRlID0gdGhpcy5fY2VydGlmaWNhdGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWxpZGF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWxpZGF0aW9uID0gdGhpcy5fdmFsaWRhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRscyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tb2RlID0gdmFsdWUubW9kZTtcbiAgICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jZXJ0aWZpY2F0ZTtcbiAgICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnZhbGlkYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZSA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjZXJ0aWZpY2F0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGU7XG4gIH1cbiAgcHVibGljIHB1dENlcnRpZmljYXRlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZSkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZhbGlkYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsaWRhdGlvbiA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInZhbGlkYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdmFsaWRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0VmFsaWRhdGlvbih2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvbikge1xuICAgIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZGF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25Qb29sPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2w7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2s/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0TWFwcGluZzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGxzPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29ubmVjdGlvbl9wb29sOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdGlvblBvb2wpLFxuICAgIGhlYWx0aF9jaGVjazogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWx0aENoZWNrKSxcbiAgICBwb3J0X21hcHBpbmc6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0TWFwcGluZyksXG4gICAgdGxzOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNUb1RlcnJhZm9ybShzdHJ1Y3QhLnRscyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25Qb29sPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25uZWN0aW9uUG9vbCA9IHRoaXMuX2Nvbm5lY3Rpb25Qb29sPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faGVhbHRoQ2hlY2s/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmhlYWx0aENoZWNrID0gdGhpcy5faGVhbHRoQ2hlY2s/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0TWFwcGluZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydE1hcHBpbmcgPSB0aGlzLl9wb3J0TWFwcGluZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rscz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGxzID0gdGhpcy5fdGxzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29ubmVjdGlvblBvb2wuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hlYWx0aENoZWNrLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0TWFwcGluZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGxzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb25Qb29sLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jb25uZWN0aW9uUG9vbDtcbiAgICAgIHRoaXMuX2hlYWx0aENoZWNrLmludGVybmFsVmFsdWUgPSB2YWx1ZS5oZWFsdGhDaGVjaztcbiAgICAgIHRoaXMuX3BvcnRNYXBwaW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wb3J0TWFwcGluZztcbiAgICAgIHRoaXMuX3Rscy5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGxzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbm5lY3Rpb25fcG9vbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25uZWN0aW9uUG9vbCA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb25uZWN0aW9uX3Bvb2xcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvblBvb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25Qb29sO1xuICB9XG4gIHB1YmxpYyBwdXRDb25uZWN0aW9uUG9vbCh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2wpIHtcbiAgICB0aGlzLl9jb25uZWN0aW9uUG9vbC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29ubmVjdGlvblBvb2woKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvblBvb2wuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvblBvb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblBvb2wuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGhlYWx0aF9jaGVjayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFsdGhDaGVjayA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVja091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJoZWFsdGhfY2hlY2tcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrO1xuICB9XG4gIHB1YmxpYyBwdXRIZWFsdGhDaGVjayh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2spIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVjay5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhbHRoQ2hlY2soKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoQ2hlY2suaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBvcnRfbWFwcGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0TWFwcGluZyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwb3J0X21hcHBpbmdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcG9ydE1hcHBpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRNYXBwaW5nO1xuICB9XG4gIHB1YmxpYyBwdXRQb3J0TWFwcGluZyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcpIHtcbiAgICB0aGlzLl9wb3J0TWFwcGluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRNYXBwaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRNYXBwaW5nLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0bHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGxzID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0bHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGxzKCkge1xuICAgIHJldHVybiB0aGlzLl90bHM7XG4gIH1cbiAgcHVibGljIHB1dFRscyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzKSB7XG4gICAgdGhpcy5fdGxzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUbHMoKSB7XG4gICAgdGhpcy5fdGxzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90bHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGVPdXRwdXRSZWZlcmVuY2UgfCBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXRoID0gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3BhdGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3BhdGggPSB2YWx1ZS5wYXRoO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ091dHB1dFJlZmVyZW5jZSB8IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZmlsZTogYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2cgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ZpbGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGUgPSB0aGlzLl9maWxlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2cgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmZpbGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlID0gbmV3IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJmaWxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cbiAgcHVibGljIHB1dEZpbGUodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZSkge1xuICAgIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbGUoKSB7XG4gICAgdGhpcy5fZmlsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXNzTG9nPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfbG9nOiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzTG9nKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjY2Vzc0xvZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzTG9nID0gdGhpcy5fYWNjZXNzTG9nPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY2Nlc3NMb2cuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWNjZXNzTG9nLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hY2Nlc3NMb2c7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX2xvZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NMb2cgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNjZXNzX2xvZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhY2Nlc3NMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0xvZztcbiAgfVxuICBwdWJsaWMgcHV0QWNjZXNzTG9nKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZykge1xuICAgIHRoaXMuX2FjY2Vzc0xvZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzTG9nKCkge1xuICAgIHRoaXMuX2FjY2Vzc0xvZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2Nlc3NMb2dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzTG9nLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlYyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmFja2VuZERlZmF1bHRzPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaXN0ZW5lcjogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ2dpbmc/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjT3V0cHV0UmVmZXJlbmNlIHwgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJhY2tlbmRfZGVmYXVsdHM6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNUb1RlcnJhZm9ybShzdHJ1Y3QhLmJhY2tlbmREZWZhdWx0cyksXG4gICAgbGlzdGVuZXI6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRvVGVycmFmb3JtKHN0cnVjdCEubGlzdGVuZXIpLFxuICAgIGxvZ2dpbmc6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dnaW5nKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9iYWNrZW5kRGVmYXVsdHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJhY2tlbmREZWZhdWx0cyA9IHRoaXMuX2JhY2tlbmREZWZhdWx0cz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5saXN0ZW5lciA9IHRoaXMuX2xpc3RlbmVyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nZ2luZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nZ2luZyA9IHRoaXMuX2xvZ2dpbmc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmFja2VuZERlZmF1bHRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9saXN0ZW5lci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nZ2luZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9iYWNrZW5kRGVmYXVsdHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmJhY2tlbmREZWZhdWx0cztcbiAgICAgIHRoaXMuX2xpc3RlbmVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5saXN0ZW5lcjtcbiAgICAgIHRoaXMuX2xvZ2dpbmcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmxvZ2dpbmc7XG4gICAgfVxuICB9XG5cbiAgLy8gYmFja2VuZF9kZWZhdWx0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iYWNrZW5kRGVmYXVsdHMgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJiYWNrZW5kX2RlZmF1bHRzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGJhY2tlbmREZWZhdWx0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2VuZERlZmF1bHRzO1xuICB9XG4gIHB1YmxpYyBwdXRCYWNrZW5kRGVmYXVsdHModmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHMpIHtcbiAgICB0aGlzLl9iYWNrZW5kRGVmYXVsdHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJhY2tlbmREZWZhdWx0cygpIHtcbiAgICB0aGlzLl9iYWNrZW5kRGVmYXVsdHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmFja2VuZERlZmF1bHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tlbmREZWZhdWx0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGlzdGVuZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGlzdGVuZXIgPSBuZXcgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImxpc3RlbmVyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcjtcbiAgfVxuICBwdWJsaWMgcHV0TGlzdGVuZXIodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lcikge1xuICAgIHRoaXMuX2xpc3RlbmVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGlzdGVuZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxvZ2dpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nZ2luZyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsb2dnaW5nXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxvZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmc7XG4gIH1cbiAgcHVibGljIHB1dExvZ2dpbmcodmFsdWU6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nKSB7XG4gICAgdGhpcy5fbG9nZ2luZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZygpIHtcbiAgICB0aGlzLl9sb2dnaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hcHBtZXNoX3ZpcnR1YWxfZ2F0ZXdheScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9tZXNoTmFtZSA9IGNvbmZpZy5tZXNoTmFtZTtcbiAgICB0aGlzLl9tZXNoT3duZXIgPSBjb25maWcubWVzaE93bmVyO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zcGVjO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfZGF0ZScpO1xuICB9XG5cbiAgLy8gbWVzaF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc2hOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXNoTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc2hfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzaE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc2hOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc2hOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc2hOYW1lO1xuICB9XG5cbiAgLy8gbWVzaF9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc2hPd25lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzaE93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzaF9vd25lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzaE93bmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNoT3duZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXNoT3duZXIoKSB7XG4gICAgdGhpcy5fbWVzaE93bmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNoT3duZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzaE93bmVyO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlT3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9vd25lcicpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHNwZWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3BlYyA9IG5ldyBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNwZWNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3BlYygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlYztcbiAgfVxuICBwdWJsaWMgcHV0U3BlYyh2YWx1ZTogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlYykge1xuICAgIHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzaF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZXNoTmFtZSksXG4gICAgICBtZXNoX293bmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZXNoT3duZXIpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHNwZWM6IGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNUb1RlcnJhZm9ybSh0aGlzLl9zcGVjLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==