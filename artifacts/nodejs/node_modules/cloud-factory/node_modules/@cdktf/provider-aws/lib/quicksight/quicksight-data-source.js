"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuicksightDataSource = exports.QuicksightDataSourceVpcConnectionPropertiesOutputReference = exports.quicksightDataSourceVpcConnectionPropertiesToTerraform = exports.QuicksightDataSourceSslPropertiesOutputReference = exports.quicksightDataSourceSslPropertiesToTerraform = exports.quicksightDataSourcePermissionToTerraform = exports.QuicksightDataSourceParametersOutputReference = exports.quicksightDataSourceParametersToTerraform = exports.QuicksightDataSourceParametersTwitterOutputReference = exports.quicksightDataSourceParametersTwitterToTerraform = exports.QuicksightDataSourceParametersTeradataOutputReference = exports.quicksightDataSourceParametersTeradataToTerraform = exports.QuicksightDataSourceParametersSqlServerOutputReference = exports.quicksightDataSourceParametersSqlServerToTerraform = exports.QuicksightDataSourceParametersSparkOutputReference = exports.quicksightDataSourceParametersSparkToTerraform = exports.QuicksightDataSourceParametersSnowflakeOutputReference = exports.quicksightDataSourceParametersSnowflakeToTerraform = exports.QuicksightDataSourceParametersServiceNowOutputReference = exports.quicksightDataSourceParametersServiceNowToTerraform = exports.QuicksightDataSourceParametersS3OutputReference = exports.quicksightDataSourceParametersS3ToTerraform = exports.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference = exports.quicksightDataSourceParametersS3ManifestFileLocationToTerraform = exports.QuicksightDataSourceParametersRedshiftOutputReference = exports.quicksightDataSourceParametersRedshiftToTerraform = exports.QuicksightDataSourceParametersRdsOutputReference = exports.quicksightDataSourceParametersRdsToTerraform = exports.QuicksightDataSourceParametersPrestoOutputReference = exports.quicksightDataSourceParametersPrestoToTerraform = exports.QuicksightDataSourceParametersPostgresqlOutputReference = exports.quicksightDataSourceParametersPostgresqlToTerraform = exports.QuicksightDataSourceParametersOracleOutputReference = exports.quicksightDataSourceParametersOracleToTerraform = exports.QuicksightDataSourceParametersMysqlOutputReference = exports.quicksightDataSourceParametersMysqlToTerraform = exports.QuicksightDataSourceParametersMariaDbOutputReference = exports.quicksightDataSourceParametersMariaDbToTerraform = exports.QuicksightDataSourceParametersJiraOutputReference = exports.quicksightDataSourceParametersJiraToTerraform = exports.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference = exports.quicksightDataSourceParametersAwsIotAnalyticsToTerraform = exports.QuicksightDataSourceParametersAuroraPostgresqlOutputReference = exports.quicksightDataSourceParametersAuroraPostgresqlToTerraform = exports.QuicksightDataSourceParametersAuroraOutputReference = exports.quicksightDataSourceParametersAuroraToTerraform = exports.QuicksightDataSourceParametersAthenaOutputReference = exports.quicksightDataSourceParametersAthenaToTerraform = exports.QuicksightDataSourceParametersAmazonElasticsearchOutputReference = exports.quicksightDataSourceParametersAmazonElasticsearchToTerraform = exports.QuicksightDataSourceCredentialsOutputReference = exports.quicksightDataSourceCredentialsToTerraform = exports.QuicksightDataSourceCredentialsCredentialPairOutputReference = exports.quicksightDataSourceCredentialsCredentialPairToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function quicksightDataSourceCredentialsCredentialPairToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.quicksightDataSourceCredentialsCredentialPairToTerraform = quicksightDataSourceCredentialsCredentialPairToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceCredentialsCredentialPairOutputReference extends cdktf.ComplexObject {
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
        if (this._password) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._password = undefined;
            this._username = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._password = value.password;
            this._username = value.username;
        }
    }
    /**
     * @stability stable
     */
    get password() {
        return this.getStringAttribute('password');
    }
    /**
     * @stability stable
     */
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passwordInput() {
        return this._password;
    }
    /**
     * @stability stable
     */
    get username() {
        return this.getStringAttribute('username');
    }
    /**
     * @stability stable
     */
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usernameInput() {
        return this._username;
    }
}
exports.QuicksightDataSourceCredentialsCredentialPairOutputReference = QuicksightDataSourceCredentialsCredentialPairOutputReference;
_a = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceCredentialsCredentialPairOutputReference[_a] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceCredentialsCredentialPairOutputReference", version: "3.0.1" };
function quicksightDataSourceCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        copy_source_arn: cdktf.stringToTerraform(struct.copySourceArn),
        credential_pair: quicksightDataSourceCredentialsCredentialPairToTerraform(struct.credentialPair),
    };
}
exports.quicksightDataSourceCredentialsToTerraform = quicksightDataSourceCredentialsToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceCredentialsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // credential_pair - computed: false, optional: true, required: false
        this._credentialPair = new QuicksightDataSourceCredentialsCredentialPairOutputReference(this, "credential_pair", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _3, _4;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._copySourceArn) {
            hasAnyValues = true;
            internalValueResult.copySourceArn = this._copySourceArn;
        }
        if ((_3 = this._credentialPair) === null || _3 === void 0 ? void 0 : _3.internalValue) {
            hasAnyValues = true;
            internalValueResult.credentialPair = (_4 = this._credentialPair) === null || _4 === void 0 ? void 0 : _4.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._copySourceArn = undefined;
            this._credentialPair.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._copySourceArn = value.copySourceArn;
            this._credentialPair.internalValue = value.credentialPair;
        }
    }
    /**
     * @stability stable
     */
    get copySourceArn() {
        return this.getStringAttribute('copy_source_arn');
    }
    /**
     * @stability stable
     */
    set copySourceArn(value) {
        this._copySourceArn = value;
    }
    /**
     * @stability stable
     */
    resetCopySourceArn() {
        this._copySourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get copySourceArnInput() {
        return this._copySourceArn;
    }
    /**
     * @stability stable
     */
    get credentialPair() {
        return this._credentialPair;
    }
    /**
     * @stability stable
     */
    putCredentialPair(value) {
        this._credentialPair.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCredentialPair() {
        this._credentialPair.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get credentialPairInput() {
        return this._credentialPair.internalValue;
    }
}
exports.QuicksightDataSourceCredentialsOutputReference = QuicksightDataSourceCredentialsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceCredentialsOutputReference[_b] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceCredentialsOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
exports.quicksightDataSourceParametersAmazonElasticsearchToTerraform = quicksightDataSourceParametersAmazonElasticsearchToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersAmazonElasticsearchOutputReference extends cdktf.ComplexObject {
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
        if (this._domain) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._domain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._domain = value.domain;
        }
    }
    /**
     * @stability stable
     */
    get domain() {
        return this.getStringAttribute('domain');
    }
    /**
     * @stability stable
     */
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainInput() {
        return this._domain;
    }
}
exports.QuicksightDataSourceParametersAmazonElasticsearchOutputReference = QuicksightDataSourceParametersAmazonElasticsearchOutputReference;
_c = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersAmazonElasticsearchOutputReference[_c] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersAmazonElasticsearchOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersAthenaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        work_group: cdktf.stringToTerraform(struct.workGroup),
    };
}
exports.quicksightDataSourceParametersAthenaToTerraform = quicksightDataSourceParametersAthenaToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersAthenaOutputReference extends cdktf.ComplexObject {
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
        if (this._workGroup) {
            hasAnyValues = true;
            internalValueResult.workGroup = this._workGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._workGroup = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._workGroup = value.workGroup;
        }
    }
    /**
     * @stability stable
     */
    get workGroup() {
        return this.getStringAttribute('work_group');
    }
    /**
     * @stability stable
     */
    set workGroup(value) {
        this._workGroup = value;
    }
    /**
     * @stability stable
     */
    resetWorkGroup() {
        this._workGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get workGroupInput() {
        return this._workGroup;
    }
}
exports.QuicksightDataSourceParametersAthenaOutputReference = QuicksightDataSourceParametersAthenaOutputReference;
_d = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersAthenaOutputReference[_d] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersAthenaOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersAuroraToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersAuroraToTerraform = quicksightDataSourceParametersAuroraToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersAuroraOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersAuroraOutputReference = QuicksightDataSourceParametersAuroraOutputReference;
_e = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersAuroraOutputReference[_e] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersAuroraOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersAuroraPostgresqlToTerraform = quicksightDataSourceParametersAuroraPostgresqlToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersAuroraPostgresqlOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersAuroraPostgresqlOutputReference = QuicksightDataSourceParametersAuroraPostgresqlOutputReference;
_f = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersAuroraPostgresqlOutputReference[_f] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersAuroraPostgresqlOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        data_set_name: cdktf.stringToTerraform(struct.dataSetName),
    };
}
exports.quicksightDataSourceParametersAwsIotAnalyticsToTerraform = quicksightDataSourceParametersAwsIotAnalyticsToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersAwsIotAnalyticsOutputReference extends cdktf.ComplexObject {
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
        if (this._dataSetName) {
            hasAnyValues = true;
            internalValueResult.dataSetName = this._dataSetName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dataSetName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dataSetName = value.dataSetName;
        }
    }
    /**
     * @stability stable
     */
    get dataSetName() {
        return this.getStringAttribute('data_set_name');
    }
    /**
     * @stability stable
     */
    set dataSetName(value) {
        this._dataSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataSetNameInput() {
        return this._dataSetName;
    }
}
exports.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference = QuicksightDataSourceParametersAwsIotAnalyticsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersAwsIotAnalyticsOutputReference[_g] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersJiraToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        site_base_url: cdktf.stringToTerraform(struct.siteBaseUrl),
    };
}
exports.quicksightDataSourceParametersJiraToTerraform = quicksightDataSourceParametersJiraToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersJiraOutputReference extends cdktf.ComplexObject {
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
        if (this._siteBaseUrl) {
            hasAnyValues = true;
            internalValueResult.siteBaseUrl = this._siteBaseUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._siteBaseUrl = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._siteBaseUrl = value.siteBaseUrl;
        }
    }
    /**
     * @stability stable
     */
    get siteBaseUrl() {
        return this.getStringAttribute('site_base_url');
    }
    /**
     * @stability stable
     */
    set siteBaseUrl(value) {
        this._siteBaseUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get siteBaseUrlInput() {
        return this._siteBaseUrl;
    }
}
exports.QuicksightDataSourceParametersJiraOutputReference = QuicksightDataSourceParametersJiraOutputReference;
_h = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersJiraOutputReference[_h] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersJiraOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersMariaDbToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersMariaDbToTerraform = quicksightDataSourceParametersMariaDbToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersMariaDbOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersMariaDbOutputReference = QuicksightDataSourceParametersMariaDbOutputReference;
_j = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersMariaDbOutputReference[_j] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersMariaDbOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersMysqlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersMysqlToTerraform = quicksightDataSourceParametersMysqlToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersMysqlOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersMysqlOutputReference = QuicksightDataSourceParametersMysqlOutputReference;
_k = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersMysqlOutputReference[_k] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersMysqlOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersOracleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersOracleToTerraform = quicksightDataSourceParametersOracleToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersOracleOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersOracleOutputReference = QuicksightDataSourceParametersOracleOutputReference;
_l = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersOracleOutputReference[_l] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersOracleOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersPostgresqlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersPostgresqlToTerraform = quicksightDataSourceParametersPostgresqlToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersPostgresqlOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersPostgresqlOutputReference = QuicksightDataSourceParametersPostgresqlOutputReference;
_m = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersPostgresqlOutputReference[_m] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersPostgresqlOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersPrestoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        catalog: cdktf.stringToTerraform(struct.catalog),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersPrestoToTerraform = quicksightDataSourceParametersPrestoToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersPrestoOutputReference extends cdktf.ComplexObject {
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
        if (this._catalog) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._catalog = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._catalog = value.catalog;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get catalog() {
        return this.getStringAttribute('catalog');
    }
    /**
     * @stability stable
     */
    set catalog(value) {
        this._catalog = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get catalogInput() {
        return this._catalog;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersPrestoOutputReference = QuicksightDataSourceParametersPrestoOutputReference;
_o = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersPrestoOutputReference[_o] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersPrestoOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersRdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        instance_id: cdktf.stringToTerraform(struct.instanceId),
    };
}
exports.quicksightDataSourceParametersRdsToTerraform = quicksightDataSourceParametersRdsToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersRdsOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._instanceId) {
            hasAnyValues = true;
            internalValueResult.instanceId = this._instanceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._instanceId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._instanceId = value.instanceId;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    /**
     * @stability stable
     */
    set instanceId(value) {
        this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceIdInput() {
        return this._instanceId;
    }
}
exports.QuicksightDataSourceParametersRdsOutputReference = QuicksightDataSourceParametersRdsOutputReference;
_p = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersRdsOutputReference[_p] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersRdsOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersRedshiftToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cluster_id: cdktf.stringToTerraform(struct.clusterId),
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersRedshiftToTerraform = quicksightDataSourceParametersRedshiftToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersRedshiftOutputReference extends cdktf.ComplexObject {
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
        if (this._clusterId) {
            hasAnyValues = true;
            internalValueResult.clusterId = this._clusterId;
        }
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clusterId = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clusterId = value.clusterId;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    /**
     * @stability stable
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    /**
     * @stability stable
     */
    resetClusterId() {
        this._clusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterIdInput() {
        return this._clusterId;
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    /**
     * @stability stable
     */
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersRedshiftOutputReference = QuicksightDataSourceParametersRedshiftOutputReference;
_q = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersRedshiftOutputReference[_q] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersRedshiftOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.quicksightDataSourceParametersS3ManifestFileLocationToTerraform = quicksightDataSourceParametersS3ManifestFileLocationToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersS3ManifestFileLocationOutputReference extends cdktf.ComplexObject {
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
        if (this._bucket) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucket = undefined;
            this._key = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucket = value.bucket;
            this._key = value.key;
        }
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
}
exports.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference = QuicksightDataSourceParametersS3ManifestFileLocationOutputReference;
_r = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersS3ManifestFileLocationOutputReference[_r] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        manifest_file_location: quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct.manifestFileLocation),
    };
}
exports.quicksightDataSourceParametersS3ToTerraform = quicksightDataSourceParametersS3ToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersS3OutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // manifest_file_location - computed: false, optional: false, required: true
        this._manifestFileLocation = new QuicksightDataSourceParametersS3ManifestFileLocationOutputReference(this, "manifest_file_location", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _3, _4;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_3 = this._manifestFileLocation) === null || _3 === void 0 ? void 0 : _3.internalValue) {
            hasAnyValues = true;
            internalValueResult.manifestFileLocation = (_4 = this._manifestFileLocation) === null || _4 === void 0 ? void 0 : _4.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._manifestFileLocation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._manifestFileLocation.internalValue = value.manifestFileLocation;
        }
    }
    /**
     * @stability stable
     */
    get manifestFileLocation() {
        return this._manifestFileLocation;
    }
    /**
     * @stability stable
     */
    putManifestFileLocation(value) {
        this._manifestFileLocation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get manifestFileLocationInput() {
        return this._manifestFileLocation.internalValue;
    }
}
exports.QuicksightDataSourceParametersS3OutputReference = QuicksightDataSourceParametersS3OutputReference;
_s = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersS3OutputReference[_s] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersS3OutputReference", version: "3.0.1" };
function quicksightDataSourceParametersServiceNowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        site_base_url: cdktf.stringToTerraform(struct.siteBaseUrl),
    };
}
exports.quicksightDataSourceParametersServiceNowToTerraform = quicksightDataSourceParametersServiceNowToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersServiceNowOutputReference extends cdktf.ComplexObject {
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
        if (this._siteBaseUrl) {
            hasAnyValues = true;
            internalValueResult.siteBaseUrl = this._siteBaseUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._siteBaseUrl = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._siteBaseUrl = value.siteBaseUrl;
        }
    }
    /**
     * @stability stable
     */
    get siteBaseUrl() {
        return this.getStringAttribute('site_base_url');
    }
    /**
     * @stability stable
     */
    set siteBaseUrl(value) {
        this._siteBaseUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get siteBaseUrlInput() {
        return this._siteBaseUrl;
    }
}
exports.QuicksightDataSourceParametersServiceNowOutputReference = QuicksightDataSourceParametersServiceNowOutputReference;
_t = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersServiceNowOutputReference[_t] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersServiceNowOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersSnowflakeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        warehouse: cdktf.stringToTerraform(struct.warehouse),
    };
}
exports.quicksightDataSourceParametersSnowflakeToTerraform = quicksightDataSourceParametersSnowflakeToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersSnowflakeOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._warehouse) {
            hasAnyValues = true;
            internalValueResult.warehouse = this._warehouse;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._warehouse = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._warehouse = value.warehouse;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
    }
    /**
     * @stability stable
     */
    get warehouse() {
        return this.getStringAttribute('warehouse');
    }
    /**
     * @stability stable
     */
    set warehouse(value) {
        this._warehouse = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get warehouseInput() {
        return this._warehouse;
    }
}
exports.QuicksightDataSourceParametersSnowflakeOutputReference = QuicksightDataSourceParametersSnowflakeOutputReference;
_u = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersSnowflakeOutputReference[_u] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersSnowflakeOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersSparkToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersSparkToTerraform = quicksightDataSourceParametersSparkToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersSparkOutputReference extends cdktf.ComplexObject {
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
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersSparkOutputReference = QuicksightDataSourceParametersSparkOutputReference;
_v = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersSparkOutputReference[_v] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersSparkOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersSqlServerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersSqlServerToTerraform = quicksightDataSourceParametersSqlServerToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersSqlServerOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersSqlServerOutputReference = QuicksightDataSourceParametersSqlServerOutputReference;
_w = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersSqlServerOutputReference[_w] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersSqlServerOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersTeradataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.quicksightDataSourceParametersTeradataToTerraform = quicksightDataSourceParametersTeradataToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersTeradataOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
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
}
exports.QuicksightDataSourceParametersTeradataOutputReference = QuicksightDataSourceParametersTeradataOutputReference;
_x = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersTeradataOutputReference[_x] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersTeradataOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersTwitterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_rows: cdktf.numberToTerraform(struct.maxRows),
        query: cdktf.stringToTerraform(struct.query),
    };
}
exports.quicksightDataSourceParametersTwitterToTerraform = quicksightDataSourceParametersTwitterToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersTwitterOutputReference extends cdktf.ComplexObject {
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
        if (this._maxRows) {
            hasAnyValues = true;
            internalValueResult.maxRows = this._maxRows;
        }
        if (this._query) {
            hasAnyValues = true;
            internalValueResult.query = this._query;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxRows = undefined;
            this._query = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxRows = value.maxRows;
            this._query = value.query;
        }
    }
    /**
     * @stability stable
     */
    get maxRows() {
        return this.getNumberAttribute('max_rows');
    }
    /**
     * @stability stable
     */
    set maxRows(value) {
        this._maxRows = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxRowsInput() {
        return this._maxRows;
    }
    /**
     * @stability stable
     */
    get query() {
        return this.getStringAttribute('query');
    }
    /**
     * @stability stable
     */
    set query(value) {
        this._query = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryInput() {
        return this._query;
    }
}
exports.QuicksightDataSourceParametersTwitterOutputReference = QuicksightDataSourceParametersTwitterOutputReference;
_y = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersTwitterOutputReference[_y] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersTwitterOutputReference", version: "3.0.1" };
function quicksightDataSourceParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        amazon_elasticsearch: quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct.amazonElasticsearch),
        athena: quicksightDataSourceParametersAthenaToTerraform(struct.athena),
        aurora: quicksightDataSourceParametersAuroraToTerraform(struct.aurora),
        aurora_postgresql: quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct.auroraPostgresql),
        aws_iot_analytics: quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct.awsIotAnalytics),
        jira: quicksightDataSourceParametersJiraToTerraform(struct.jira),
        maria_db: quicksightDataSourceParametersMariaDbToTerraform(struct.mariaDb),
        mysql: quicksightDataSourceParametersMysqlToTerraform(struct.mysql),
        oracle: quicksightDataSourceParametersOracleToTerraform(struct.oracle),
        postgresql: quicksightDataSourceParametersPostgresqlToTerraform(struct.postgresql),
        presto: quicksightDataSourceParametersPrestoToTerraform(struct.presto),
        rds: quicksightDataSourceParametersRdsToTerraform(struct.rds),
        redshift: quicksightDataSourceParametersRedshiftToTerraform(struct.redshift),
        s3: quicksightDataSourceParametersS3ToTerraform(struct.s3),
        service_now: quicksightDataSourceParametersServiceNowToTerraform(struct.serviceNow),
        snowflake: quicksightDataSourceParametersSnowflakeToTerraform(struct.snowflake),
        spark: quicksightDataSourceParametersSparkToTerraform(struct.spark),
        sql_server: quicksightDataSourceParametersSqlServerToTerraform(struct.sqlServer),
        teradata: quicksightDataSourceParametersTeradataToTerraform(struct.teradata),
        twitter: quicksightDataSourceParametersTwitterToTerraform(struct.twitter),
    };
}
exports.quicksightDataSourceParametersToTerraform = quicksightDataSourceParametersToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceParametersOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // amazon_elasticsearch - computed: false, optional: true, required: false
        this._amazonElasticsearch = new QuicksightDataSourceParametersAmazonElasticsearchOutputReference(this, "amazon_elasticsearch", true);
        // athena - computed: false, optional: true, required: false
        this._athena = new QuicksightDataSourceParametersAthenaOutputReference(this, "athena", true);
        // aurora - computed: false, optional: true, required: false
        this._aurora = new QuicksightDataSourceParametersAuroraOutputReference(this, "aurora", true);
        // aurora_postgresql - computed: false, optional: true, required: false
        this._auroraPostgresql = new QuicksightDataSourceParametersAuroraPostgresqlOutputReference(this, "aurora_postgresql", true);
        // aws_iot_analytics - computed: false, optional: true, required: false
        this._awsIotAnalytics = new QuicksightDataSourceParametersAwsIotAnalyticsOutputReference(this, "aws_iot_analytics", true);
        // jira - computed: false, optional: true, required: false
        this._jira = new QuicksightDataSourceParametersJiraOutputReference(this, "jira", true);
        // maria_db - computed: false, optional: true, required: false
        this._mariaDb = new QuicksightDataSourceParametersMariaDbOutputReference(this, "maria_db", true);
        // mysql - computed: false, optional: true, required: false
        this._mysql = new QuicksightDataSourceParametersMysqlOutputReference(this, "mysql", true);
        // oracle - computed: false, optional: true, required: false
        this._oracle = new QuicksightDataSourceParametersOracleOutputReference(this, "oracle", true);
        // postgresql - computed: false, optional: true, required: false
        this._postgresql = new QuicksightDataSourceParametersPostgresqlOutputReference(this, "postgresql", true);
        // presto - computed: false, optional: true, required: false
        this._presto = new QuicksightDataSourceParametersPrestoOutputReference(this, "presto", true);
        // rds - computed: false, optional: true, required: false
        this._rds = new QuicksightDataSourceParametersRdsOutputReference(this, "rds", true);
        // redshift - computed: false, optional: true, required: false
        this._redshift = new QuicksightDataSourceParametersRedshiftOutputReference(this, "redshift", true);
        // s3 - computed: false, optional: true, required: false
        this._s3 = new QuicksightDataSourceParametersS3OutputReference(this, "s3", true);
        // service_now - computed: false, optional: true, required: false
        this._serviceNow = new QuicksightDataSourceParametersServiceNowOutputReference(this, "service_now", true);
        // snowflake - computed: false, optional: true, required: false
        this._snowflake = new QuicksightDataSourceParametersSnowflakeOutputReference(this, "snowflake", true);
        // spark - computed: false, optional: true, required: false
        this._spark = new QuicksightDataSourceParametersSparkOutputReference(this, "spark", true);
        // sql_server - computed: false, optional: true, required: false
        this._sqlServer = new QuicksightDataSourceParametersSqlServerOutputReference(this, "sql_server", true);
        // teradata - computed: false, optional: true, required: false
        this._teradata = new QuicksightDataSourceParametersTeradataOutputReference(this, "teradata", true);
        // twitter - computed: false, optional: true, required: false
        this._twitter = new QuicksightDataSourceParametersTwitterOutputReference(this, "twitter", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_3 = this._amazonElasticsearch) === null || _3 === void 0 ? void 0 : _3.internalValue) {
            hasAnyValues = true;
            internalValueResult.amazonElasticsearch = (_4 = this._amazonElasticsearch) === null || _4 === void 0 ? void 0 : _4.internalValue;
        }
        if ((_5 = this._athena) === null || _5 === void 0 ? void 0 : _5.internalValue) {
            hasAnyValues = true;
            internalValueResult.athena = (_6 = this._athena) === null || _6 === void 0 ? void 0 : _6.internalValue;
        }
        if ((_7 = this._aurora) === null || _7 === void 0 ? void 0 : _7.internalValue) {
            hasAnyValues = true;
            internalValueResult.aurora = (_8 = this._aurora) === null || _8 === void 0 ? void 0 : _8.internalValue;
        }
        if ((_9 = this._auroraPostgresql) === null || _9 === void 0 ? void 0 : _9.internalValue) {
            hasAnyValues = true;
            internalValueResult.auroraPostgresql = (_10 = this._auroraPostgresql) === null || _10 === void 0 ? void 0 : _10.internalValue;
        }
        if ((_11 = this._awsIotAnalytics) === null || _11 === void 0 ? void 0 : _11.internalValue) {
            hasAnyValues = true;
            internalValueResult.awsIotAnalytics = (_12 = this._awsIotAnalytics) === null || _12 === void 0 ? void 0 : _12.internalValue;
        }
        if ((_13 = this._jira) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.jira = (_14 = this._jira) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._mariaDb) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.mariaDb = (_16 = this._mariaDb) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._mysql) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.mysql = (_18 = this._mysql) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        if ((_19 = this._oracle) === null || _19 === void 0 ? void 0 : _19.internalValue) {
            hasAnyValues = true;
            internalValueResult.oracle = (_20 = this._oracle) === null || _20 === void 0 ? void 0 : _20.internalValue;
        }
        if ((_21 = this._postgresql) === null || _21 === void 0 ? void 0 : _21.internalValue) {
            hasAnyValues = true;
            internalValueResult.postgresql = (_22 = this._postgresql) === null || _22 === void 0 ? void 0 : _22.internalValue;
        }
        if ((_23 = this._presto) === null || _23 === void 0 ? void 0 : _23.internalValue) {
            hasAnyValues = true;
            internalValueResult.presto = (_24 = this._presto) === null || _24 === void 0 ? void 0 : _24.internalValue;
        }
        if ((_25 = this._rds) === null || _25 === void 0 ? void 0 : _25.internalValue) {
            hasAnyValues = true;
            internalValueResult.rds = (_26 = this._rds) === null || _26 === void 0 ? void 0 : _26.internalValue;
        }
        if ((_27 = this._redshift) === null || _27 === void 0 ? void 0 : _27.internalValue) {
            hasAnyValues = true;
            internalValueResult.redshift = (_28 = this._redshift) === null || _28 === void 0 ? void 0 : _28.internalValue;
        }
        if ((_29 = this._s3) === null || _29 === void 0 ? void 0 : _29.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3 = (_30 = this._s3) === null || _30 === void 0 ? void 0 : _30.internalValue;
        }
        if ((_31 = this._serviceNow) === null || _31 === void 0 ? void 0 : _31.internalValue) {
            hasAnyValues = true;
            internalValueResult.serviceNow = (_32 = this._serviceNow) === null || _32 === void 0 ? void 0 : _32.internalValue;
        }
        if ((_33 = this._snowflake) === null || _33 === void 0 ? void 0 : _33.internalValue) {
            hasAnyValues = true;
            internalValueResult.snowflake = (_34 = this._snowflake) === null || _34 === void 0 ? void 0 : _34.internalValue;
        }
        if ((_35 = this._spark) === null || _35 === void 0 ? void 0 : _35.internalValue) {
            hasAnyValues = true;
            internalValueResult.spark = (_36 = this._spark) === null || _36 === void 0 ? void 0 : _36.internalValue;
        }
        if ((_37 = this._sqlServer) === null || _37 === void 0 ? void 0 : _37.internalValue) {
            hasAnyValues = true;
            internalValueResult.sqlServer = (_38 = this._sqlServer) === null || _38 === void 0 ? void 0 : _38.internalValue;
        }
        if ((_39 = this._teradata) === null || _39 === void 0 ? void 0 : _39.internalValue) {
            hasAnyValues = true;
            internalValueResult.teradata = (_40 = this._teradata) === null || _40 === void 0 ? void 0 : _40.internalValue;
        }
        if ((_41 = this._twitter) === null || _41 === void 0 ? void 0 : _41.internalValue) {
            hasAnyValues = true;
            internalValueResult.twitter = (_42 = this._twitter) === null || _42 === void 0 ? void 0 : _42.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._amazonElasticsearch.internalValue = undefined;
            this._athena.internalValue = undefined;
            this._aurora.internalValue = undefined;
            this._auroraPostgresql.internalValue = undefined;
            this._awsIotAnalytics.internalValue = undefined;
            this._jira.internalValue = undefined;
            this._mariaDb.internalValue = undefined;
            this._mysql.internalValue = undefined;
            this._oracle.internalValue = undefined;
            this._postgresql.internalValue = undefined;
            this._presto.internalValue = undefined;
            this._rds.internalValue = undefined;
            this._redshift.internalValue = undefined;
            this._s3.internalValue = undefined;
            this._serviceNow.internalValue = undefined;
            this._snowflake.internalValue = undefined;
            this._spark.internalValue = undefined;
            this._sqlServer.internalValue = undefined;
            this._teradata.internalValue = undefined;
            this._twitter.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._amazonElasticsearch.internalValue = value.amazonElasticsearch;
            this._athena.internalValue = value.athena;
            this._aurora.internalValue = value.aurora;
            this._auroraPostgresql.internalValue = value.auroraPostgresql;
            this._awsIotAnalytics.internalValue = value.awsIotAnalytics;
            this._jira.internalValue = value.jira;
            this._mariaDb.internalValue = value.mariaDb;
            this._mysql.internalValue = value.mysql;
            this._oracle.internalValue = value.oracle;
            this._postgresql.internalValue = value.postgresql;
            this._presto.internalValue = value.presto;
            this._rds.internalValue = value.rds;
            this._redshift.internalValue = value.redshift;
            this._s3.internalValue = value.s3;
            this._serviceNow.internalValue = value.serviceNow;
            this._snowflake.internalValue = value.snowflake;
            this._spark.internalValue = value.spark;
            this._sqlServer.internalValue = value.sqlServer;
            this._teradata.internalValue = value.teradata;
            this._twitter.internalValue = value.twitter;
        }
    }
    /**
     * @stability stable
     */
    get amazonElasticsearch() {
        return this._amazonElasticsearch;
    }
    /**
     * @stability stable
     */
    putAmazonElasticsearch(value) {
        this._amazonElasticsearch.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAmazonElasticsearch() {
        this._amazonElasticsearch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get amazonElasticsearchInput() {
        return this._amazonElasticsearch.internalValue;
    }
    /**
     * @stability stable
     */
    get athena() {
        return this._athena;
    }
    /**
     * @stability stable
     */
    putAthena(value) {
        this._athena.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAthena() {
        this._athena.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get athenaInput() {
        return this._athena.internalValue;
    }
    /**
     * @stability stable
     */
    get aurora() {
        return this._aurora;
    }
    /**
     * @stability stable
     */
    putAurora(value) {
        this._aurora.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAurora() {
        this._aurora.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get auroraInput() {
        return this._aurora.internalValue;
    }
    /**
     * @stability stable
     */
    get auroraPostgresql() {
        return this._auroraPostgresql;
    }
    /**
     * @stability stable
     */
    putAuroraPostgresql(value) {
        this._auroraPostgresql.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAuroraPostgresql() {
        this._auroraPostgresql.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get auroraPostgresqlInput() {
        return this._auroraPostgresql.internalValue;
    }
    /**
     * @stability stable
     */
    get awsIotAnalytics() {
        return this._awsIotAnalytics;
    }
    /**
     * @stability stable
     */
    putAwsIotAnalytics(value) {
        this._awsIotAnalytics.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAwsIotAnalytics() {
        this._awsIotAnalytics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsIotAnalyticsInput() {
        return this._awsIotAnalytics.internalValue;
    }
    /**
     * @stability stable
     */
    get jira() {
        return this._jira;
    }
    /**
     * @stability stable
     */
    putJira(value) {
        this._jira.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetJira() {
        this._jira.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jiraInput() {
        return this._jira.internalValue;
    }
    /**
     * @stability stable
     */
    get mariaDb() {
        return this._mariaDb;
    }
    /**
     * @stability stable
     */
    putMariaDb(value) {
        this._mariaDb.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMariaDb() {
        this._mariaDb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mariaDbInput() {
        return this._mariaDb.internalValue;
    }
    /**
     * @stability stable
     */
    get mysql() {
        return this._mysql;
    }
    /**
     * @stability stable
     */
    putMysql(value) {
        this._mysql.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMysql() {
        this._mysql.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mysqlInput() {
        return this._mysql.internalValue;
    }
    /**
     * @stability stable
     */
    get oracle() {
        return this._oracle;
    }
    /**
     * @stability stable
     */
    putOracle(value) {
        this._oracle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetOracle() {
        this._oracle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get oracleInput() {
        return this._oracle.internalValue;
    }
    /**
     * @stability stable
     */
    get postgresql() {
        return this._postgresql;
    }
    /**
     * @stability stable
     */
    putPostgresql(value) {
        this._postgresql.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPostgresql() {
        this._postgresql.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get postgresqlInput() {
        return this._postgresql.internalValue;
    }
    /**
     * @stability stable
     */
    get presto() {
        return this._presto;
    }
    /**
     * @stability stable
     */
    putPresto(value) {
        this._presto.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPresto() {
        this._presto.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prestoInput() {
        return this._presto.internalValue;
    }
    /**
     * @stability stable
     */
    get rds() {
        return this._rds;
    }
    /**
     * @stability stable
     */
    putRds(value) {
        this._rds.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRds() {
        this._rds.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rdsInput() {
        return this._rds.internalValue;
    }
    /**
     * @stability stable
     */
    get redshift() {
        return this._redshift;
    }
    /**
     * @stability stable
     */
    putRedshift(value) {
        this._redshift.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRedshift() {
        this._redshift.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get redshiftInput() {
        return this._redshift.internalValue;
    }
    /**
     * @stability stable
     */
    get s3() {
        return this._s3;
    }
    /**
     * @stability stable
     */
    putS3(value) {
        this._s3.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3Input() {
        return this._s3.internalValue;
    }
    /**
     * @stability stable
     */
    get serviceNow() {
        return this._serviceNow;
    }
    /**
     * @stability stable
     */
    putServiceNow(value) {
        this._serviceNow.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetServiceNow() {
        this._serviceNow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceNowInput() {
        return this._serviceNow.internalValue;
    }
    /**
     * @stability stable
     */
    get snowflake() {
        return this._snowflake;
    }
    /**
     * @stability stable
     */
    putSnowflake(value) {
        this._snowflake.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSnowflake() {
        this._snowflake.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snowflakeInput() {
        return this._snowflake.internalValue;
    }
    /**
     * @stability stable
     */
    get spark() {
        return this._spark;
    }
    /**
     * @stability stable
     */
    putSpark(value) {
        this._spark.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSpark() {
        this._spark.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sparkInput() {
        return this._spark.internalValue;
    }
    /**
     * @stability stable
     */
    get sqlServer() {
        return this._sqlServer;
    }
    /**
     * @stability stable
     */
    putSqlServer(value) {
        this._sqlServer.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSqlServer() {
        this._sqlServer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sqlServerInput() {
        return this._sqlServer.internalValue;
    }
    /**
     * @stability stable
     */
    get teradata() {
        return this._teradata;
    }
    /**
     * @stability stable
     */
    putTeradata(value) {
        this._teradata.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTeradata() {
        this._teradata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get teradataInput() {
        return this._teradata.internalValue;
    }
    /**
     * @stability stable
     */
    get twitter() {
        return this._twitter;
    }
    /**
     * @stability stable
     */
    putTwitter(value) {
        this._twitter.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTwitter() {
        this._twitter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get twitterInput() {
        return this._twitter.internalValue;
    }
}
exports.QuicksightDataSourceParametersOutputReference = QuicksightDataSourceParametersOutputReference;
_z = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceParametersOutputReference[_z] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceParametersOutputReference", version: "3.0.1" };
function quicksightDataSourcePermissionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.quicksightDataSourcePermissionToTerraform = quicksightDataSourcePermissionToTerraform;
function quicksightDataSourceSslPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_ssl: cdktf.booleanToTerraform(struct.disableSsl),
    };
}
exports.quicksightDataSourceSslPropertiesToTerraform = quicksightDataSourceSslPropertiesToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceSslPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._disableSsl) {
            hasAnyValues = true;
            internalValueResult.disableSsl = this._disableSsl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._disableSsl = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._disableSsl = value.disableSsl;
        }
    }
    /**
     * @stability stable
     */
    get disableSsl() {
        return this.getBooleanAttribute('disable_ssl');
    }
    /**
     * @stability stable
     */
    set disableSsl(value) {
        this._disableSsl = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get disableSslInput() {
        return this._disableSsl;
    }
}
exports.QuicksightDataSourceSslPropertiesOutputReference = QuicksightDataSourceSslPropertiesOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceSslPropertiesOutputReference[_0] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceSslPropertiesOutputReference", version: "3.0.1" };
function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        vpc_connection_arn: cdktf.stringToTerraform(struct.vpcConnectionArn),
    };
}
exports.quicksightDataSourceVpcConnectionPropertiesToTerraform = quicksightDataSourceVpcConnectionPropertiesToTerraform;
/**
 * @stability stable
 */
class QuicksightDataSourceVpcConnectionPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._vpcConnectionArn) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._vpcConnectionArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }
    /**
     * @stability stable
     */
    get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    /**
     * @stability stable
     */
    set vpcConnectionArn(value) {
        this._vpcConnectionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
exports.QuicksightDataSourceVpcConnectionPropertiesOutputReference = QuicksightDataSourceVpcConnectionPropertiesOutputReference;
_1 = JSII_RTTI_SYMBOL_1;
QuicksightDataSourceVpcConnectionPropertiesOutputReference[_1] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSourceVpcConnectionPropertiesOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source}.
 *
 * @stability stable
 */
class QuicksightDataSource extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_quicksight_data_source',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // credentials - computed: false, optional: true, required: false
        this._credentials = new QuicksightDataSourceCredentialsOutputReference(this, "credentials", true);
        // parameters - computed: false, optional: false, required: true
        this._parameters = new QuicksightDataSourceParametersOutputReference(this, "parameters", true);
        // ssl_properties - computed: false, optional: true, required: false
        this._sslProperties = new QuicksightDataSourceSslPropertiesOutputReference(this, "ssl_properties", true);
        // vpc_connection_properties - computed: false, optional: true, required: false
        this._vpcConnectionProperties = new QuicksightDataSourceVpcConnectionPropertiesOutputReference(this, "vpc_connection_properties", true);
        this._awsAccountId = config.awsAccountId;
        this._dataSourceId = config.dataSourceId;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._type = config.type;
        this._credentials.internalValue = config.credentials;
        this._parameters.internalValue = config.parameters;
        this._permission = config.permission;
        this._sslProperties.internalValue = config.sslProperties;
        this._vpcConnectionProperties.internalValue = config.vpcConnectionProperties;
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
    get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    /**
     * @stability stable
     */
    set awsAccountId(value) {
        this._awsAccountId = value;
    }
    /**
     * @stability stable
     */
    resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsAccountIdInput() {
        return this._awsAccountId;
    }
    /**
     * @stability stable
     */
    get dataSourceId() {
        return this.getStringAttribute('data_source_id');
    }
    /**
     * @stability stable
     */
    set dataSourceId(value) {
        this._dataSourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataSourceIdInput() {
        return this._dataSourceId;
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
    get credentials() {
        return this._credentials;
    }
    /**
     * @stability stable
     */
    putCredentials(value) {
        this._credentials.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get credentialsInput() {
        return this._credentials.internalValue;
    }
    /**
     * @stability stable
     */
    get parameters() {
        return this._parameters;
    }
    /**
     * @stability stable
     */
    putParameters(value) {
        this._parameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parametersInput() {
        return this._parameters.internalValue;
    }
    /**
     * @stability stable
     */
    get permission() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('permission');
    }
    /**
     * @stability stable
     */
    set permission(value) {
        this._permission = value;
    }
    /**
     * @stability stable
     */
    resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get permissionInput() {
        return this._permission;
    }
    /**
     * @stability stable
     */
    get sslProperties() {
        return this._sslProperties;
    }
    /**
     * @stability stable
     */
    putSslProperties(value) {
        this._sslProperties.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSslProperties() {
        this._sslProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sslPropertiesInput() {
        return this._sslProperties.internalValue;
    }
    /**
     * @stability stable
     */
    get vpcConnectionProperties() {
        return this._vpcConnectionProperties;
    }
    /**
     * @stability stable
     */
    putVpcConnectionProperties(value) {
        this._vpcConnectionProperties.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetVpcConnectionProperties() {
        this._vpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcConnectionPropertiesInput() {
        return this._vpcConnectionProperties.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
            data_source_id: cdktf.stringToTerraform(this._dataSourceId),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            credentials: quicksightDataSourceCredentialsToTerraform(this._credentials.internalValue),
            parameters: quicksightDataSourceParametersToTerraform(this._parameters.internalValue),
            permission: cdktf.listMapper(quicksightDataSourcePermissionToTerraform)(this._permission),
            ssl_properties: quicksightDataSourceSslPropertiesToTerraform(this._sslProperties.internalValue),
            vpc_connection_properties: quicksightDataSourceVpcConnectionPropertiesToTerraform(this._vpcConnectionProperties.internalValue),
        };
    }
}
exports.QuicksightDataSource = QuicksightDataSource;
_2 = JSII_RTTI_SYMBOL_1;
QuicksightDataSource[_2] = { fqn: "@cdktf/provider-aws.quicksight.QuicksightDataSource", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
QuicksightDataSource.tfResourceType = "aws_quicksight_data_source";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaWdodC1kYXRhLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWlja3NpZ2h0L3F1aWNrc2lnaHQtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFrQy9CLFNBQWdCLHdEQUF3RCxDQUFDLE1BQXFIO0lBQzVMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25ELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztLQUNwRCxDQUFBO0FBQ0gsQ0FBQztBQVRELDRIQVNDOzs7O0FBRUQsTUFBYSw0REFBNkQsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUluRyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxD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aUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMzRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFdBQVcsRUFBRSwwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUN4RixVQUFVLEVBQUUseUNBQXlDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDckYsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMseUNBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3pGLGNBQWMsRUFBRSw0Q0FBNEMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUMvRix5QkFBeUIsRUFBRSxzREFBc0QsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO1NBQy9ILENBQUM7SUFDSixDQUFDOztBQTNPSCxvREE0T0M7OztBQTFPQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLG1DQUFjLEdBQVcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNvdXJjZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhd3NBY2NvdW50SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGFTb3VyY2VJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlZGVudGlhbHM/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJzOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlcm1pc3Npb24/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBlcm1pc3Npb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NsUHJvcGVydGllcz86IFF1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjQ29ubmVjdGlvblByb3BlcnRpZXM/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXNzd29yZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyT3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFzc3dvcmQpLFxuICAgIHVzZXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJuYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcGFzc3dvcmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhc3N3b3JkID0gdGhpcy5fcGFzc3dvcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VybmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlcm5hbWUgPSB0aGlzLl91c2VybmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlcm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdmFsdWUucGFzc3dvcmQ7XG4gICAgICB0aGlzLl91c2VybmFtZSA9IHZhbHVlLnVzZXJuYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Bhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VybmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJuYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvcHlTb3VyY2VBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWRlbnRpYWxQYWlyPzogUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNPdXRwdXRSZWZlcmVuY2UgfCBRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29weV9zb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvcHlTb3VyY2VBcm4pLFxuICAgIGNyZWRlbnRpYWxfcGFpcjogcXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc0NyZWRlbnRpYWxQYWlyVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVkZW50aWFsUGFpciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFscyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29weVNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29weVNvdXJjZUFybiA9IHRoaXMuX2NvcHlTb3VyY2VBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9jcmVkZW50aWFsUGFpcj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlZGVudGlhbFBhaXIgPSB0aGlzLl9jcmVkZW50aWFsUGFpcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb3B5U291cmNlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3JlZGVudGlhbFBhaXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29weVNvdXJjZUFybiA9IHZhbHVlLmNvcHlTb3VyY2VBcm47XG4gICAgICB0aGlzLl9jcmVkZW50aWFsUGFpci5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY3JlZGVudGlhbFBhaXI7XG4gICAgfVxuICB9XG5cbiAgLy8gY29weV9zb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcHlTb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvcHlTb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3B5X3NvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcHlTb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvcHlTb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3B5U291cmNlQXJuKCkge1xuICAgIHRoaXMuX2NvcHlTb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcHlTb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29weVNvdXJjZUFybjtcbiAgfVxuXG4gIC8vIGNyZWRlbnRpYWxfcGFpciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVkZW50aWFsUGFpciA9IG5ldyBRdWlja3NpZ2h0RGF0YVNvdXJjZUNyZWRlbnRpYWxzQ3JlZGVudGlhbFBhaXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3JlZGVudGlhbF9wYWlyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNyZWRlbnRpYWxQYWlyKCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVkZW50aWFsUGFpcjtcbiAgfVxuICBwdWJsaWMgcHV0Q3JlZGVudGlhbFBhaXIodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNDcmVkZW50aWFsUGFpcikge1xuICAgIHRoaXMuX2NyZWRlbnRpYWxQYWlyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVkZW50aWFsUGFpcigpIHtcbiAgICB0aGlzLl9jcmVkZW50aWFsUGFpci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVkZW50aWFsUGFpcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVkZW50aWFsUGFpci5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQW1hem9uRWxhc3RpY3NlYXJjaFRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2hPdXRwdXRSZWZlcmVuY2UgfCBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBbWF6b25FbGFzdGljc2VhcmNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZG9tYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvbWFpbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2hPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQW1hem9uRWxhc3RpY3NlYXJjaCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZG9tYWluKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kb21haW4gPSB0aGlzLl9kb21haW47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBbWF6b25FbGFzdGljc2VhcmNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZG9tYWluID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kb21haW4gPSB2YWx1ZS5kb21haW47XG4gICAgfVxuICB9XG5cbiAgLy8gZG9tYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9tYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F0aGVuYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3b3JrR3JvdXA/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmFPdXRwdXRSZWZlcmVuY2UgfCBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3b3JrX2dyb3VwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndvcmtHcm91cCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F0aGVuYU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3dvcmtHcm91cCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud29ya0dyb3VwID0gdGhpcy5fd29ya0dyb3VwO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXRoZW5hIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fd29ya0dyb3VwID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl93b3JrR3JvdXAgPSB2YWx1ZS53b3JrR3JvdXA7XG4gICAgfVxuICB9XG5cbiAgLy8gd29ya19ncm91cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93b3JrR3JvdXA/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHdvcmtHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dvcmtfZ3JvdXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdvcmtHcm91cCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd29ya0dyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V29ya0dyb3VwKCkge1xuICAgIHRoaXMuX3dvcmtHcm91cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd29ya0dyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtHcm91cDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhT3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGF0YWJhc2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGFiYXNlID0gdGhpcy5fZGF0YWJhc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3N0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0ID0gdGhpcy5faG9zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvcnQgPSB0aGlzLl9wb3J0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB2YWx1ZS5kYXRhYmFzZTtcbiAgICAgIHRoaXMuX2hvc3QgPSB2YWx1ZS5ob3N0O1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZXNxbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGFiYXNlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQb3N0Z3Jlc3FsVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZXNxbE91dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBvc3RncmVzcWwpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZSksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQb3N0Z3Jlc3FsT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBvc3RncmVzcWwgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RhdGFiYXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhYmFzZSA9IHRoaXMuX2RhdGFiYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9zdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9zdCA9IHRoaXMuX2hvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0ID0gdGhpcy5fcG9ydDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBvc3RncmVzcWwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kYXRhYmFzZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlLmRhdGFiYXNlO1xuICAgICAgdGhpcy5faG9zdCA9IHZhbHVlLmhvc3Q7XG4gICAgICB0aGlzLl9wb3J0ID0gdmFsdWUucG9ydDtcbiAgICB9XG4gIH1cblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXRhYmFzZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YWJhc2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFiYXNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFiYXNlO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ob3N0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBd3NJb3RBbmFseXRpY3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YVNldE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F3c0lvdEFuYWx5dGljc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F3c0lvdEFuYWx5dGljc091dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F3c0lvdEFuYWx5dGljcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBd3NJb3RBbmFseXRpY3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXdzSW90QW5hbHl0aWNzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kYXRhU2V0TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF0YVNldE5hbWUgPSB0aGlzLl9kYXRhU2V0TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F3c0lvdEFuYWx5dGljcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RhdGFTZXROYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kYXRhU2V0TmFtZSA9IHZhbHVlLmRhdGFTZXROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRhdGFfc2V0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YVNldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFTZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV9zZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YVNldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFTZXROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFTZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTZXROYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0ppcmEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l0ZUJhc2VVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0ppcmFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNKaXJhT3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzSmlyYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNpdGVfYmFzZV91cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2l0ZUJhc2VVcmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNKaXJhT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0ppcmEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NpdGVCYXNlVXJsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zaXRlQmFzZVVybCA9IHRoaXMuX3NpdGVCYXNlVXJsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzSmlyYSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NpdGVCYXNlVXJsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zaXRlQmFzZVVybCA9IHZhbHVlLnNpdGVCYXNlVXJsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNpdGVfYmFzZV91cmwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2l0ZUJhc2VVcmw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNpdGVCYXNlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2l0ZV9iYXNlX3VybCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2l0ZUJhc2VVcmwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpdGVCYXNlVXJsID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpdGVCYXNlVXJsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpdGVCYXNlVXJsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc01hcmlhRGIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYlRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc01hcmlhRGJPdXRwdXRSZWZlcmVuY2UgfCBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kYXRhYmFzZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF0YWJhc2UgPSB0aGlzLl9kYXRhYmFzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3QpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3QgPSB0aGlzLl9ob3N0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB2YWx1ZS5kYXRhYmFzZTtcbiAgICAgIHRoaXMuX2hvc3QgPSB2YWx1ZS5ob3N0O1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzTXlzcWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzTXlzcWxUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNNeXNxbE91dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc015c3FsKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzTXlzcWxPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzTXlzcWwgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RhdGFiYXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhYmFzZSA9IHRoaXMuX2RhdGFiYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9zdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9zdCA9IHRoaXMuX2hvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0ID0gdGhpcy5fcG9ydDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc015c3FsIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB2YWx1ZS5kYXRhYmFzZTtcbiAgICAgIHRoaXMuX2hvc3QgPSB2YWx1ZS5ob3N0O1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzT3JhY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YWJhc2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvc3Q6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZVRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZU91dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNPcmFjbGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RhdGFiYXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhYmFzZSA9IHRoaXMuX2RhdGFiYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9zdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9zdCA9IHRoaXMuX2hvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0ID0gdGhpcy5fcG9ydDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RhdGFiYXNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RhdGFiYXNlID0gdmFsdWUuZGF0YWJhc2U7XG4gICAgICB0aGlzLl9ob3N0ID0gdmFsdWUuaG9zdDtcbiAgICAgIHRoaXMuX3BvcnQgPSB2YWx1ZS5wb3J0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGRhdGFiYXNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RhdGFiYXNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhYmFzZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2UgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YWJhc2U7XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hvc3Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBob3N0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1Bvc3RncmVzcWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUG9zdGdyZXNxbFRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1Bvc3RncmVzcWxPdXRwdXRSZWZlcmVuY2UgfCBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3Jlc3FsKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUG9zdGdyZXNxbE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3Jlc3FsIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kYXRhYmFzZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF0YWJhc2UgPSB0aGlzLl9kYXRhYmFzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3QpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3QgPSB0aGlzLl9ob3N0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3Jlc3FsIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB2YWx1ZS5kYXRhYmFzZTtcbiAgICAgIHRoaXMuX2hvc3QgPSB2YWx1ZS5ob3N0O1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhdGFsb2c6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvc3Q6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1ByZXN0b1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1ByZXN0b091dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1ByZXN0byk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNhdGFsb2c6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2F0YWxvZyksXG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQcmVzdG9PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXRhbG9nKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYXRhbG9nID0gdGhpcy5fY2F0YWxvZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3QpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3QgPSB0aGlzLl9ob3N0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQcmVzdG8gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jYXRhbG9nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhdGFsb2cgPSB2YWx1ZS5jYXRhbG9nO1xuICAgICAgdGhpcy5faG9zdCA9IHZhbHVlLmhvc3Q7XG4gICAgICB0aGlzLl9wb3J0ID0gdmFsdWUucG9ydDtcbiAgICB9XG4gIH1cblxuICAvLyBjYXRhbG9nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NhdGFsb2c/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhdGFsb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYXRhbG9nJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXRhbG9nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXRhbG9nID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhdGFsb2dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0YWxvZztcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YWJhc2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzT3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGluc3RhbmNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNSZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kYXRhYmFzZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF0YWJhc2UgPSB0aGlzLl9kYXRhYmFzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlSWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlSWQgPSB0aGlzLl9pbnN0YW5jZUlkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZUlkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlLmRhdGFiYXNlO1xuICAgICAgdGhpcy5faW5zdGFuY2VJZCA9IHZhbHVlLmluc3RhbmNlSWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2luc3RhbmNlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlSWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2x1c3RlcklkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNSZWRzaGlmdFRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1JlZHNoaWZ0T3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbHVzdGVyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsdXN0ZXJJZCksXG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NsdXN0ZXJJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2x1c3RlcklkID0gdGhpcy5fY2x1c3RlcklkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGF0YWJhc2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGFiYXNlID0gdGhpcy5fZGF0YWJhc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3N0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0ID0gdGhpcy5faG9zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvcnQgPSB0aGlzLl9wb3J0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUmVkc2hpZnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jbHVzdGVySWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kYXRhYmFzZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbHVzdGVySWQgPSB2YWx1ZS5jbHVzdGVySWQ7XG4gICAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlLmRhdGFiYXNlO1xuICAgICAgdGhpcy5faG9zdCA9IHZhbHVlLmhvc3Q7XG4gICAgICB0aGlzLl9wb3J0ID0gdmFsdWUucG9ydDtcbiAgICB9XG4gIH1cblxuICAvLyBjbHVzdGVyX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsdXN0ZXJJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlcklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbHVzdGVySWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbHVzdGVySWQoKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbHVzdGVySWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlcklkO1xuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb3N0KCkge1xuICAgIHRoaXMuX2hvc3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTM01hbmlmZXN0RmlsZUxvY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzTWFuaWZlc3RGaWxlTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTM01hbmlmZXN0RmlsZUxvY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUzNNYW5pZmVzdEZpbGVMb2NhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTM01hbmlmZXN0RmlsZUxvY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzTWFuaWZlc3RGaWxlTG9jYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2J1Y2tldCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0ID0gdGhpcy5fYnVja2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXkgPSB0aGlzLl9rZXk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTM01hbmlmZXN0RmlsZUxvY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnVja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZS5idWNrZXQ7XG4gICAgICB0aGlzLl9rZXkgPSB2YWx1ZS5rZXk7XG4gICAgfVxuICB9XG5cbiAgLy8gYnVja2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2J1Y2tldD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVja2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0O1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFuaWZlc3RGaWxlTG9jYXRpb246IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzTWFuaWZlc3RGaWxlTG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTM1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzT3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUzMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYW5pZmVzdF9maWxlX2xvY2F0aW9uOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTM01hbmlmZXN0RmlsZUxvY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5tYW5pZmVzdEZpbGVMb2NhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYW5pZmVzdEZpbGVMb2NhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFuaWZlc3RGaWxlTG9jYXRpb24gPSB0aGlzLl9tYW5pZmVzdEZpbGVMb2NhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWFuaWZlc3RGaWxlTG9jYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWFuaWZlc3RGaWxlTG9jYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm1hbmlmZXN0RmlsZUxvY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hbmlmZXN0X2ZpbGVfbG9jYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWFuaWZlc3RGaWxlTG9jYXRpb24gPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUzNNYW5pZmVzdEZpbGVMb2NhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtYW5pZmVzdF9maWxlX2xvY2F0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1hbmlmZXN0RmlsZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tYW5pZmVzdEZpbGVMb2NhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0TWFuaWZlc3RGaWxlTG9jYXRpb24odmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzTWFuaWZlc3RGaWxlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9tYW5pZmVzdEZpbGVMb2NhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hbmlmZXN0RmlsZUxvY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmlmZXN0RmlsZUxvY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU2VydmljZU5vdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzaXRlQmFzZVVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU2VydmljZU5vd1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1NlcnZpY2VOb3dPdXRwdXRSZWZlcmVuY2UgfCBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTZXJ2aWNlTm93KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2l0ZV9iYXNlX3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zaXRlQmFzZVVybCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1NlcnZpY2VOb3dPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU2VydmljZU5vdyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc2l0ZUJhc2VVcmwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNpdGVCYXNlVXJsID0gdGhpcy5fc2l0ZUJhc2VVcmw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTZXJ2aWNlTm93IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2l0ZUJhc2VVcmwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NpdGVCYXNlVXJsID0gdmFsdWUuc2l0ZUJhc2VVcmw7XG4gICAgfVxuICB9XG5cbiAgLy8gc2l0ZV9iYXNlX3VybCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zaXRlQmFzZVVybD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2l0ZUJhc2VVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaXRlX2Jhc2VfdXJsJyk7XG4gIH1cbiAgcHVibGljIHNldCBzaXRlQmFzZVVybCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l0ZUJhc2VVcmwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2l0ZUJhc2VVcmxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l0ZUJhc2VVcmw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU25vd2ZsYWtlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YWJhc2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvc3Q6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3YXJlaG91c2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZVRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZU91dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHdhcmVob3VzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53YXJlaG91c2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTbm93Zmxha2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU25vd2ZsYWtlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kYXRhYmFzZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF0YWJhc2UgPSB0aGlzLl9kYXRhYmFzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3QpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3QgPSB0aGlzLl9ob3N0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fd2FyZWhvdXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC53YXJlaG91c2UgPSB0aGlzLl93YXJlaG91c2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTbm93Zmxha2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kYXRhYmFzZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93YXJlaG91c2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RhdGFiYXNlID0gdmFsdWUuZGF0YWJhc2U7XG4gICAgICB0aGlzLl9ob3N0ID0gdmFsdWUuaG9zdDtcbiAgICAgIHRoaXMuX3dhcmVob3VzZSA9IHZhbHVlLndhcmVob3VzZTtcbiAgICB9XG4gIH1cblxuICAvLyBkYXRhYmFzZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXRhYmFzZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YWJhc2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFiYXNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFiYXNlO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ob3N0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gIH1cblxuICAvLyB3YXJlaG91c2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfd2FyZWhvdXNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB3YXJlaG91c2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3YXJlaG91c2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhcmVob3VzZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2FyZWhvdXNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdhcmVob3VzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93YXJlaG91c2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3Bhcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3BhcmtUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFya091dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1NwYXJrKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFya091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFyayB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faG9zdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9zdCA9IHRoaXMuX2hvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0ID0gdGhpcy5fcG9ydDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1NwYXJrIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2hvc3QgPSB2YWx1ZS5ob3N0O1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ob3N0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTcWxTZXJ2ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyT3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1NxbFNlcnZlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGF0YWJhc2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGFiYXNlID0gdGhpcy5fZGF0YWJhc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3N0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0ID0gdGhpcy5faG9zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvcnQgPSB0aGlzLl9wb3J0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB2YWx1ZS5kYXRhYmFzZTtcbiAgICAgIHRoaXMuX2hvc3QgPSB2YWx1ZS5ob3N0O1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNUZXJhZGF0YU91dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1RlcmFkYXRhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2UpLFxuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGFPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RhdGFiYXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhYmFzZSA9IHRoaXMuX2RhdGFiYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9zdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9zdCA9IHRoaXMuX2hvc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3J0ID0gdGhpcy5fcG9ydDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1RlcmFkYXRhIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB2YWx1ZS5kYXRhYmFzZTtcbiAgICAgIHRoaXMuX2hvc3QgPSB2YWx1ZS5ob3N0O1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVHdpdHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFJvd3M6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1R3aXR0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNUd2l0dGVyT3V0cHV0UmVmZXJlbmNlIHwgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVHdpdHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1heF9yb3dzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFJvd3MpLFxuICAgIHF1ZXJ5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVHdpdHRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNUd2l0dGVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhSb3dzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhSb3dzID0gdGhpcy5fbWF4Um93cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3F1ZXJ5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5xdWVyeSA9IHRoaXMuX3F1ZXJ5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVHdpdHRlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heFJvd3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVyeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4Um93cyA9IHZhbHVlLm1heFJvd3M7XG4gICAgICB0aGlzLl9xdWVyeSA9IHZhbHVlLnF1ZXJ5O1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9yb3dzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heFJvd3M/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcm93cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4Um93cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4Um93cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhSb3dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFJvd3M7XG4gIH1cblxuICAvLyBxdWVyeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9xdWVyeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdWVyeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcXVlcnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1ZXJ5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXJ5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFtYXpvbkVsYXN0aWNzZWFyY2g/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBbWF6b25FbGFzdGljc2VhcmNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdGhlbmE/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdGhlbmE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1cm9yYT86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXVyb3JhUG9zdGdyZXNxbD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBvc3RncmVzcWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF3c0lvdEFuYWx5dGljcz86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F3c0lvdEFuYWx5dGljcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgamlyYT86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0ppcmE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hcmlhRGI/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNNYXJpYURiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBteXNxbD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc015c3FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmFjbGU/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNPcmFjbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvc3RncmVzcWw/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3Jlc3FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVzdG8/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQcmVzdG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJkcz86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1JkcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVkc2hpZnQ/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNSZWRzaGlmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczM/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZU5vdz86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1NlcnZpY2VOb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNub3dmbGFrZT86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3Bhcms/OiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3FsU2VydmVyPzogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZXJhZGF0YT86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1RlcmFkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0d2l0dGVyPzogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVHdpdHRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFtYXpvbl9lbGFzdGljc2VhcmNoOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBbWF6b25FbGFzdGljc2VhcmNoVG9UZXJyYWZvcm0oc3RydWN0IS5hbWF6b25FbGFzdGljc2VhcmNoKSxcbiAgICBhdGhlbmE6IHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F0aGVuYVRvVGVycmFmb3JtKHN0cnVjdCEuYXRoZW5hKSxcbiAgICBhdXJvcmE6IHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVRvVGVycmFmb3JtKHN0cnVjdCEuYXVyb3JhKSxcbiAgICBhdXJvcmFfcG9zdGdyZXNxbDogcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhUG9zdGdyZXNxbFRvVGVycmFmb3JtKHN0cnVjdCEuYXVyb3JhUG9zdGdyZXNxbCksXG4gICAgYXdzX2lvdF9hbmFseXRpY3M6IHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F3c0lvdEFuYWx5dGljc1RvVGVycmFmb3JtKHN0cnVjdCEuYXdzSW90QW5hbHl0aWNzKSxcbiAgICBqaXJhOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNKaXJhVG9UZXJyYWZvcm0oc3RydWN0IS5qaXJhKSxcbiAgICBtYXJpYV9kYjogcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYlRvVGVycmFmb3JtKHN0cnVjdCEubWFyaWFEYiksXG4gICAgbXlzcWw6IHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc015c3FsVG9UZXJyYWZvcm0oc3RydWN0IS5teXNxbCksXG4gICAgb3JhY2xlOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNPcmFjbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yYWNsZSksXG4gICAgcG9zdGdyZXNxbDogcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUG9zdGdyZXNxbFRvVGVycmFmb3JtKHN0cnVjdCEucG9zdGdyZXNxbCksXG4gICAgcHJlc3RvOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQcmVzdG9Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZXN0byksXG4gICAgcmRzOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNSZHNUb1RlcnJhZm9ybShzdHJ1Y3QhLnJkcyksXG4gICAgcmVkc2hpZnQ6IHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1JlZHNoaWZ0VG9UZXJyYWZvcm0oc3RydWN0IS5yZWRzaGlmdCksXG4gICAgczM6IHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1MzVG9UZXJyYWZvcm0oc3RydWN0IS5zMyksXG4gICAgc2VydmljZV9ub3c6IHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1NlcnZpY2VOb3dUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VOb3cpLFxuICAgIHNub3dmbGFrZTogcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU25vd2ZsYWtlVG9UZXJyYWZvcm0oc3RydWN0IS5zbm93Zmxha2UpLFxuICAgIHNwYXJrOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFya1RvVGVycmFmb3JtKHN0cnVjdCEuc3BhcmspLFxuICAgIHNxbF9zZXJ2ZXI6IHF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1NxbFNlcnZlclRvVGVycmFmb3JtKHN0cnVjdCEuc3FsU2VydmVyKSxcbiAgICB0ZXJhZGF0YTogcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVGVyYWRhdGFUb1RlcnJhZm9ybShzdHJ1Y3QhLnRlcmFkYXRhKSxcbiAgICB0d2l0dGVyOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNUd2l0dGVyVG9UZXJyYWZvcm0oc3RydWN0IS50d2l0dGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYW1hem9uRWxhc3RpY3NlYXJjaD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYW1hem9uRWxhc3RpY3NlYXJjaCA9IHRoaXMuX2FtYXpvbkVsYXN0aWNzZWFyY2g/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdGhlbmE/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF0aGVuYSA9IHRoaXMuX2F0aGVuYT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F1cm9yYT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXVyb3JhID0gdGhpcy5fYXVyb3JhPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXVyb3JhUG9zdGdyZXNxbD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXVyb3JhUG9zdGdyZXNxbCA9IHRoaXMuX2F1cm9yYVBvc3RncmVzcWw/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hd3NJb3RBbmFseXRpY3M/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF3c0lvdEFuYWx5dGljcyA9IHRoaXMuX2F3c0lvdEFuYWx5dGljcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ppcmE/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmppcmEgPSB0aGlzLl9qaXJhPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWFyaWFEYj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFyaWFEYiA9IHRoaXMuX21hcmlhRGI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9teXNxbD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubXlzcWwgPSB0aGlzLl9teXNxbD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29yYWNsZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JhY2xlID0gdGhpcy5fb3JhY2xlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9zdGdyZXNxbD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9zdGdyZXNxbCA9IHRoaXMuX3Bvc3RncmVzcWw/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVzdG8/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZXN0byA9IHRoaXMuX3ByZXN0bz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jkcz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmRzID0gdGhpcy5fcmRzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVkc2hpZnQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZHNoaWZ0ID0gdGhpcy5fcmVkc2hpZnQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zMz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczMgPSB0aGlzLl9zMz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlcnZpY2VOb3c/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZpY2VOb3cgPSB0aGlzLl9zZXJ2aWNlTm93Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc25vd2ZsYWtlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zbm93Zmxha2UgPSB0aGlzLl9zbm93Zmxha2U/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcGFyaz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3BhcmsgPSB0aGlzLl9zcGFyaz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NxbFNlcnZlcj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3FsU2VydmVyID0gdGhpcy5fc3FsU2VydmVyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVyYWRhdGE/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRlcmFkYXRhID0gdGhpcy5fdGVyYWRhdGE/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90d2l0dGVyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50d2l0dGVyID0gdGhpcy5fdHdpdHRlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FtYXpvbkVsYXN0aWNzZWFyY2guaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F0aGVuYS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXVyb3JhLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXJvcmFQb3N0Z3Jlc3FsLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hd3NJb3RBbmFseXRpY3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ppcmEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hcmlhRGIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX215c3FsLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcmFjbGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Bvc3RncmVzcWwuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZXN0by5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWRzaGlmdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlcnZpY2VOb3cuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nub3dmbGFrZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3BhcmsuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NxbFNlcnZlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGVyYWRhdGEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R3aXR0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYW1hem9uRWxhc3RpY3NlYXJjaC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYW1hem9uRWxhc3RpY3NlYXJjaDtcbiAgICAgIHRoaXMuX2F0aGVuYS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYXRoZW5hO1xuICAgICAgdGhpcy5fYXVyb3JhLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hdXJvcmE7XG4gICAgICB0aGlzLl9hdXJvcmFQb3N0Z3Jlc3FsLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hdXJvcmFQb3N0Z3Jlc3FsO1xuICAgICAgdGhpcy5fYXdzSW90QW5hbHl0aWNzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hd3NJb3RBbmFseXRpY3M7XG4gICAgICB0aGlzLl9qaXJhLmludGVybmFsVmFsdWUgPSB2YWx1ZS5qaXJhO1xuICAgICAgdGhpcy5fbWFyaWFEYi5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWFyaWFEYjtcbiAgICAgIHRoaXMuX215c3FsLmludGVybmFsVmFsdWUgPSB2YWx1ZS5teXNxbDtcbiAgICAgIHRoaXMuX29yYWNsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUub3JhY2xlO1xuICAgICAgdGhpcy5fcG9zdGdyZXNxbC5pbnRlcm5hbFZhbHVlID0gdmFsdWUucG9zdGdyZXNxbDtcbiAgICAgIHRoaXMuX3ByZXN0by5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJlc3RvO1xuICAgICAgdGhpcy5fcmRzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZHM7XG4gICAgICB0aGlzLl9yZWRzaGlmdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVkc2hpZnQ7XG4gICAgICB0aGlzLl9zMy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuczM7XG4gICAgICB0aGlzLl9zZXJ2aWNlTm93LmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZXJ2aWNlTm93O1xuICAgICAgdGhpcy5fc25vd2ZsYWtlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zbm93Zmxha2U7XG4gICAgICB0aGlzLl9zcGFyay5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3Bhcms7XG4gICAgICB0aGlzLl9zcWxTZXJ2ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNxbFNlcnZlcjtcbiAgICAgIHRoaXMuX3RlcmFkYXRhLmludGVybmFsVmFsdWUgPSB2YWx1ZS50ZXJhZGF0YTtcbiAgICAgIHRoaXMuX3R3aXR0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnR3aXR0ZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gYW1hem9uX2VsYXN0aWNzZWFyY2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYW1hem9uRWxhc3RpY3NlYXJjaCA9IG5ldyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBbWF6b25FbGFzdGljc2VhcmNoT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFtYXpvbl9lbGFzdGljc2VhcmNoXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFtYXpvbkVsYXN0aWNzZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FtYXpvbkVsYXN0aWNzZWFyY2g7XG4gIH1cbiAgcHVibGljIHB1dEFtYXpvbkVsYXN0aWNzZWFyY2godmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0FtYXpvbkVsYXN0aWNzZWFyY2gpIHtcbiAgICB0aGlzLl9hbWF6b25FbGFzdGljc2VhcmNoLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbWF6b25FbGFzdGljc2VhcmNoKCkge1xuICAgIHRoaXMuX2FtYXpvbkVsYXN0aWNzZWFyY2guaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYW1hem9uRWxhc3RpY3NlYXJjaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbWF6b25FbGFzdGljc2VhcmNoLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhdGhlbmEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXRoZW5hID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F0aGVuYU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhdGhlbmFcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXRoZW5hKCkge1xuICAgIHJldHVybiB0aGlzLl9hdGhlbmE7XG4gIH1cbiAgcHVibGljIHB1dEF0aGVuYSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXRoZW5hKSB7XG4gICAgdGhpcy5fYXRoZW5hLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdGhlbmEoKSB7XG4gICAgdGhpcy5fYXRoZW5hLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF0aGVuYUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdGhlbmEuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGF1cm9yYSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXJvcmEgPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXVyb3JhT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF1cm9yYVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhdXJvcmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1cm9yYTtcbiAgfVxuICBwdWJsaWMgcHV0QXVyb3JhKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmEpIHtcbiAgICB0aGlzLl9hdXJvcmEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1cm9yYSgpIHtcbiAgICB0aGlzLl9hdXJvcmEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXVyb3JhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1cm9yYS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gYXVyb3JhX3Bvc3RncmVzcWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXVyb3JhUG9zdGdyZXNxbCA9IG5ldyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNBdXJvcmFQb3N0Z3Jlc3FsT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF1cm9yYV9wb3N0Z3Jlc3FsXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1cm9yYVBvc3RncmVzcWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1cm9yYVBvc3RncmVzcWw7XG4gIH1cbiAgcHVibGljIHB1dEF1cm9yYVBvc3RncmVzcWwodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F1cm9yYVBvc3RncmVzcWwpIHtcbiAgICB0aGlzLl9hdXJvcmFQb3N0Z3Jlc3FsLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXJvcmFQb3N0Z3Jlc3FsKCkge1xuICAgIHRoaXMuX2F1cm9yYVBvc3RncmVzcWwuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXVyb3JhUG9zdGdyZXNxbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXJvcmFQb3N0Z3Jlc3FsLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhd3NfaW90X2FuYWx5dGljcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hd3NJb3RBbmFseXRpY3MgPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzQXdzSW90QW5hbHl0aWNzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF3c19pb3RfYW5hbHl0aWNzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF3c0lvdEFuYWx5dGljcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXdzSW90QW5hbHl0aWNzO1xuICB9XG4gIHB1YmxpYyBwdXRBd3NJb3RBbmFseXRpY3ModmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0F3c0lvdEFuYWx5dGljcykge1xuICAgIHRoaXMuX2F3c0lvdEFuYWx5dGljcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXdzSW90QW5hbHl0aWNzKCkge1xuICAgIHRoaXMuX2F3c0lvdEFuYWx5dGljcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NJb3RBbmFseXRpY3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXdzSW90QW5hbHl0aWNzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBqaXJhIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ppcmEgPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzSmlyYU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJqaXJhXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGppcmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ppcmE7XG4gIH1cbiAgcHVibGljIHB1dEppcmEodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc0ppcmEpIHtcbiAgICB0aGlzLl9qaXJhLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRKaXJhKCkge1xuICAgIHRoaXMuX2ppcmEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgamlyYUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qaXJhLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBtYXJpYV9kYiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXJpYURiID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc01hcmlhRGJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWFyaWFfZGJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbWFyaWFEYigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFyaWFEYjtcbiAgfVxuICBwdWJsaWMgcHV0TWFyaWFEYih2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzTWFyaWFEYikge1xuICAgIHRoaXMuX21hcmlhRGIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hcmlhRGIoKSB7XG4gICAgdGhpcy5fbWFyaWFEYi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXJpYURiSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmlhRGIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG15c3FsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX215c3FsID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc015c3FsT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm15c3FsXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG15c3FsKCkge1xuICAgIHJldHVybiB0aGlzLl9teXNxbDtcbiAgfVxuICBwdWJsaWMgcHV0TXlzcWwodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc015c3FsKSB7XG4gICAgdGhpcy5fbXlzcWwuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE15c3FsKCkge1xuICAgIHRoaXMuX215c3FsLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG15c3FsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX215c3FsLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBvcmFjbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3JhY2xlID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc09yYWNsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJvcmFjbGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgb3JhY2xlKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmFjbGU7XG4gIH1cbiAgcHVibGljIHB1dE9yYWNsZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzT3JhY2xlKSB7XG4gICAgdGhpcy5fb3JhY2xlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmFjbGUoKSB7XG4gICAgdGhpcy5fb3JhY2xlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yYWNsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmFjbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBvc3RncmVzcWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9zdGdyZXNxbCA9IG5ldyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQb3N0Z3Jlc3FsT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInBvc3RncmVzcWxcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcG9zdGdyZXNxbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdGdyZXNxbDtcbiAgfVxuICBwdWJsaWMgcHV0UG9zdGdyZXNxbCh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUG9zdGdyZXNxbCkge1xuICAgIHRoaXMuX3Bvc3RncmVzcWwuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvc3RncmVzcWwoKSB7XG4gICAgdGhpcy5fcG9zdGdyZXNxbC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3N0Z3Jlc3FsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3RncmVzcWwuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHByZXN0byAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVzdG8gPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUHJlc3RvT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByZXN0b1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwcmVzdG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXN0bztcbiAgfVxuICBwdWJsaWMgcHV0UHJlc3RvKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNQcmVzdG8pIHtcbiAgICB0aGlzLl9wcmVzdG8uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZXN0bygpIHtcbiAgICB0aGlzLl9wcmVzdG8uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlc3RvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXN0by5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JkcyA9IG5ldyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNSZHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmRzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmRzO1xuICB9XG4gIHB1YmxpYyBwdXRSZHModmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1Jkcykge1xuICAgIHRoaXMuX3Jkcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmRzKCkge1xuICAgIHRoaXMuX3Jkcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZWRzaGlmdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWRzaGlmdCA9IG5ldyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNSZWRzaGlmdE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyZWRzaGlmdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZWRzaGlmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkc2hpZnQ7XG4gIH1cbiAgcHVibGljIHB1dFJlZHNoaWZ0KHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNSZWRzaGlmdCkge1xuICAgIHRoaXMuX3JlZHNoaWZ0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWRzaGlmdCgpIHtcbiAgICB0aGlzLl9yZWRzaGlmdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWRzaGlmdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRzaGlmdC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gczMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczMgPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUzNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiczNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgczMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzO1xuICB9XG4gIHB1YmxpYyBwdXRTMyh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzUzMpIHtcbiAgICB0aGlzLl9zMy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzMoKSB7XG4gICAgdGhpcy5fczMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNlcnZpY2Vfbm93IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZpY2VOb3cgPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU2VydmljZU5vd091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzZXJ2aWNlX25vd1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZXJ2aWNlTm93KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlTm93O1xuICB9XG4gIHB1YmxpYyBwdXRTZXJ2aWNlTm93KHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTZXJ2aWNlTm93KSB7XG4gICAgdGhpcy5fc2VydmljZU5vdy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmljZU5vdygpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTm93LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VOb3dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZU5vdy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc25vd2ZsYWtlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nub3dmbGFrZSA9IG5ldyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTbm93Zmxha2VPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic25vd2ZsYWtlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNub3dmbGFrZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc25vd2ZsYWtlO1xuICB9XG4gIHB1YmxpYyBwdXRTbm93Zmxha2UodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1Nub3dmbGFrZSkge1xuICAgIHRoaXMuX3Nub3dmbGFrZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U25vd2ZsYWtlKCkge1xuICAgIHRoaXMuX3Nub3dmbGFrZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbm93Zmxha2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc25vd2ZsYWtlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzcGFyayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcGFyayA9IG5ldyBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFya091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzcGFya1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzcGFyaygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3Bhcms7XG4gIH1cbiAgcHVibGljIHB1dFNwYXJrKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVBhcmFtZXRlcnNTcGFyaykge1xuICAgIHRoaXMuX3NwYXJrLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcGFyaygpIHtcbiAgICB0aGlzLl9zcGFyay5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcGFya0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcGFyay5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc3FsX3NlcnZlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcWxTZXJ2ZXIgPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNxbF9zZXJ2ZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3FsU2VydmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9zcWxTZXJ2ZXI7XG4gIH1cbiAgcHVibGljIHB1dFNxbFNlcnZlcih2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzU3FsU2VydmVyKSB7XG4gICAgdGhpcy5fc3FsU2VydmVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcWxTZXJ2ZXIoKSB7XG4gICAgdGhpcy5fc3FsU2VydmVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNxbFNlcnZlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcWxTZXJ2ZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRlcmFkYXRhIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RlcmFkYXRhID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1RlcmFkYXRhT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRlcmFkYXRhXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRlcmFkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXJhZGF0YTtcbiAgfVxuICBwdWJsaWMgcHV0VGVyYWRhdGEodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1RlcmFkYXRhKSB7XG4gICAgdGhpcy5fdGVyYWRhdGEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlcmFkYXRhKCkge1xuICAgIHRoaXMuX3RlcmFkYXRhLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlcmFkYXRhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlcmFkYXRhLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0d2l0dGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R3aXR0ZXIgPSBuZXcgUXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVHdpdHRlck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0d2l0dGVyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHR3aXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R3aXR0ZXI7XG4gIH1cbiAgcHVibGljIHB1dFR3aXR0ZXIodmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc1R3aXR0ZXIpIHtcbiAgICB0aGlzLl90d2l0dGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUd2l0dGVyKCkge1xuICAgIHRoaXMuX3R3aXR0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHdpdHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90d2l0dGVyLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VQZXJtaXNzaW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvbnM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaW5jaXBhbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VQZXJtaXNzaW9uVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTb3VyY2VQZXJtaXNzaW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBwcmluY2lwYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpbmNpcGFsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc2FibGVTc2w6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSB8IFF1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc2FibGVfc3NsOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kaXNhYmxlU3NsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2VTc2xQcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZVNzbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGlzYWJsZVNzbCA9IHRoaXMuX2Rpc2FibGVTc2w7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVNzbFByb3BlcnRpZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaXNhYmxlU3NsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kaXNhYmxlU3NsID0gdmFsdWUuZGlzYWJsZVNzbDtcbiAgICB9XG4gIH1cblxuICAvLyBkaXNhYmxlX3NzbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kaXNhYmxlU3NsPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkaXNhYmxlU3NsKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfc3NsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGlzYWJsZVNzbCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGlzYWJsZVNzbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXNhYmxlU3NsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVTc2w7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTb3VyY2VWcGNDb25uZWN0aW9uUHJvcGVydGllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjQ29ubmVjdGlvbkFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTb3VyY2VWcGNDb25uZWN0aW9uUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU291cmNlVnBjQ29ubmVjdGlvblByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgfCBRdWlja3NpZ2h0RGF0YVNvdXJjZVZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdnBjX2Nvbm5lY3Rpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwY0Nvbm5lY3Rpb25Bcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNvdXJjZVZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFF1aWNrc2lnaHREYXRhU291cmNlVnBjQ29ubmVjdGlvblByb3BlcnRpZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3ZwY0Nvbm5lY3Rpb25Bcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZwY0Nvbm5lY3Rpb25Bcm4gPSB0aGlzLl92cGNDb25uZWN0aW9uQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VWcGNDb25uZWN0aW9uUHJvcGVydGllcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ZwY0Nvbm5lY3Rpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3ZwY0Nvbm5lY3Rpb25Bcm4gPSB2YWx1ZS52cGNDb25uZWN0aW9uQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIHZwY19jb25uZWN0aW9uX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92cGNDb25uZWN0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2cGNDb25uZWN0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndnBjX2Nvbm5lY3Rpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNDb25uZWN0aW9uQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92cGNDb25uZWN0aW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0Nvbm5lY3Rpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjQ29ubmVjdGlvbkFybjtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTb3VyY2UgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfcXVpY2tzaWdodF9kYXRhX3NvdXJjZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBRdWlja3NpZ2h0RGF0YVNvdXJjZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3F1aWNrc2lnaHRfZGF0YV9zb3VyY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXdzQWNjb3VudElkID0gY29uZmlnLmF3c0FjY291bnRJZDtcbiAgICB0aGlzLl9kYXRhU291cmNlSWQgPSBjb25maWcuZGF0YVNvdXJjZUlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3R5cGUgPSBjb25maWcudHlwZTtcbiAgICB0aGlzLl9jcmVkZW50aWFscy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNyZWRlbnRpYWxzO1xuICAgIHRoaXMuX3BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wYXJhbWV0ZXJzO1xuICAgIHRoaXMuX3Blcm1pc3Npb24gPSBjb25maWcucGVybWlzc2lvbjtcbiAgICB0aGlzLl9zc2xQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSBjb25maWcuc3NsUHJvcGVydGllcztcbiAgICB0aGlzLl92cGNDb25uZWN0aW9uUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF3c19hY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXdzQWNjb3VudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfYWNjb3VudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXdzQWNjb3VudElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hd3NBY2NvdW50SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBd3NBY2NvdW50SWQoKSB7XG4gICAgdGhpcy5fYXdzQWNjb3VudElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXdzQWNjb3VudElkO1xuICB9XG5cbiAgLy8gZGF0YV9zb3VyY2VfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYXRhU291cmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NvdXJjZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YVNvdXJjZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhU291cmNlSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8vIGNyZWRlbnRpYWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWRlbnRpYWxzID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlQ3JlZGVudGlhbHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3JlZGVudGlhbHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY3JlZGVudGlhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWRlbnRpYWxzO1xuICB9XG4gIHB1YmxpYyBwdXRDcmVkZW50aWFscyh2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFscykge1xuICAgIHRoaXMuX2NyZWRlbnRpYWxzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVkZW50aWFscygpIHtcbiAgICB0aGlzLl9jcmVkZW50aWFscy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVkZW50aWFsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVkZW50aWFscy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wYXJhbWV0ZXJzID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwYXJhbWV0ZXJzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dFBhcmFtZXRlcnModmFsdWU6IFF1aWNrc2lnaHREYXRhU291cmNlUGFyYW1ldGVycykge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBlcm1pc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGVybWlzc2lvbj86IFF1aWNrc2lnaHREYXRhU291cmNlUGVybWlzc2lvbltdOyBcbiAgcHVibGljIGdldCBwZXJtaXNzaW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwZXJtaXNzaW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGVybWlzc2lvbih2YWx1ZTogUXVpY2tzaWdodERhdGFTb3VyY2VQZXJtaXNzaW9uW10pIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVybWlzc2lvbigpIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZXJtaXNzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb247XG4gIH1cblxuICAvLyBzc2xfcHJvcGVydGllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zc2xQcm9wZXJ0aWVzID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzc2xfcHJvcGVydGllc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzc2xQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9zc2xQcm9wZXJ0aWVzO1xuICB9XG4gIHB1YmxpYyBwdXRTc2xQcm9wZXJ0aWVzKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVNzbFByb3BlcnRpZXMpIHtcbiAgICB0aGlzLl9zc2xQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc2xQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX3NzbFByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NsUHJvcGVydGllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2xQcm9wZXJ0aWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB2cGNfY29ubmVjdGlvbl9wcm9wZXJ0aWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzID0gbmV3IFF1aWNrc2lnaHREYXRhU291cmNlVnBjQ29ubmVjdGlvblByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidnBjX2Nvbm5lY3Rpb25fcHJvcGVydGllc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB2cGNDb25uZWN0aW9uUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjQ29ubmVjdGlvblByb3BlcnRpZXM7XG4gIH1cbiAgcHVibGljIHB1dFZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNvdXJjZVZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5fdnBjQ29ubmVjdGlvblByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX3ZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF3c19hY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hd3NBY2NvdW50SWQpLFxuICAgICAgZGF0YV9zb3VyY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RhdGFTb3VyY2VJZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHlwZSksXG4gICAgICBjcmVkZW50aWFsczogcXVpY2tzaWdodERhdGFTb3VyY2VDcmVkZW50aWFsc1RvVGVycmFmb3JtKHRoaXMuX2NyZWRlbnRpYWxzLmludGVybmFsVmFsdWUpLFxuICAgICAgcGFyYW1ldGVyczogcXVpY2tzaWdodERhdGFTb3VyY2VQYXJhbWV0ZXJzVG9UZXJyYWZvcm0odGhpcy5fcGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHBlcm1pc3Npb246IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodERhdGFTb3VyY2VQZXJtaXNzaW9uVG9UZXJyYWZvcm0pKHRoaXMuX3Blcm1pc3Npb24pLFxuICAgICAgc3NsX3Byb3BlcnRpZXM6IHF1aWNrc2lnaHREYXRhU291cmNlU3NsUHJvcGVydGllc1RvVGVycmFmb3JtKHRoaXMuX3NzbFByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB2cGNfY29ubmVjdGlvbl9wcm9wZXJ0aWVzOiBxdWlja3NpZ2h0RGF0YVNvdXJjZVZwY0Nvbm5lY3Rpb25Qcm9wZXJ0aWVzVG9UZXJyYWZvcm0odGhpcy5fdnBjQ29ubmVjdGlvblByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19