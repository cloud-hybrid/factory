"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsxOntapStorageVirtualMachine = exports.FsxOntapStorageVirtualMachineTimeoutsOutputReference = exports.fsxOntapStorageVirtualMachineTimeoutsToTerraform = exports.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference = exports.fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform = exports.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference = exports.fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform = exports.FsxOntapStorageVirtualMachineEndpoints = exports.FsxOntapStorageVirtualMachineEndpointsSmb = exports.FsxOntapStorageVirtualMachineEndpointsNfs = exports.FsxOntapStorageVirtualMachineEndpointsManagement = exports.FsxOntapStorageVirtualMachineEndpointsIscsi = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class FsxOntapStorageVirtualMachineEndpointsIscsi extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // ip_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipAddresses() {
        return this.getListAttribute('ip_addresses');
    }
}
exports.FsxOntapStorageVirtualMachineEndpointsIscsi = FsxOntapStorageVirtualMachineEndpointsIscsi;
_a = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachineEndpointsIscsi[_a] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachineEndpointsIscsi", version: "3.0.1" };
/**
 * @stability stable
 */
class FsxOntapStorageVirtualMachineEndpointsManagement extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // ip_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipAddresses() {
        return this.getListAttribute('ip_addresses');
    }
}
exports.FsxOntapStorageVirtualMachineEndpointsManagement = FsxOntapStorageVirtualMachineEndpointsManagement;
_b = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachineEndpointsManagement[_b] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachineEndpointsManagement", version: "3.0.1" };
/**
 * @stability stable
 */
class FsxOntapStorageVirtualMachineEndpointsNfs extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // ip_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipAddresses() {
        return this.getListAttribute('ip_addresses');
    }
}
exports.FsxOntapStorageVirtualMachineEndpointsNfs = FsxOntapStorageVirtualMachineEndpointsNfs;
_c = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachineEndpointsNfs[_c] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachineEndpointsNfs", version: "3.0.1" };
/**
 * @stability stable
 */
class FsxOntapStorageVirtualMachineEndpointsSmb extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // ip_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipAddresses() {
        return this.getListAttribute('ip_addresses');
    }
}
exports.FsxOntapStorageVirtualMachineEndpointsSmb = FsxOntapStorageVirtualMachineEndpointsSmb;
_d = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachineEndpointsSmb[_d] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachineEndpointsSmb", version: "3.0.1" };
/**
 * @stability stable
 */
class FsxOntapStorageVirtualMachineEndpoints extends cdktf.ComplexComputedList {
    // iscsi - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get iscsi() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('iscsi');
    }
    // management - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get management() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('management');
    }
    // nfs - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get nfs() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('nfs');
    }
    // smb - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get smb() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('smb');
    }
}
exports.FsxOntapStorageVirtualMachineEndpoints = FsxOntapStorageVirtualMachineEndpoints;
_e = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachineEndpoints[_e] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachineEndpoints", version: "3.0.1" };
function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct.dnsIps),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        file_system_administrators_group: cdktf.stringToTerraform(struct.fileSystemAdministratorsGroup),
        organizational_unit_distinguidshed_name: cdktf.stringToTerraform(struct.organizationalUnitDistinguidshedName),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform = fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform;
/**
 * @stability stable
 */
class FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._dnsIps) {
            hasAnyValues = true;
            internalValueResult.dnsIps = this._dnsIps;
        }
        if (this._domainName) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._fileSystemAdministratorsGroup) {
            hasAnyValues = true;
            internalValueResult.fileSystemAdministratorsGroup = this._fileSystemAdministratorsGroup;
        }
        if (this._organizationalUnitDistinguidshedName) {
            hasAnyValues = true;
            internalValueResult.organizationalUnitDistinguidshedName = this._organizationalUnitDistinguidshedName;
        }
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
            this._dnsIps = undefined;
            this._domainName = undefined;
            this._fileSystemAdministratorsGroup = undefined;
            this._organizationalUnitDistinguidshedName = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dnsIps = value.dnsIps;
            this._domainName = value.domainName;
            this._fileSystemAdministratorsGroup = value.fileSystemAdministratorsGroup;
            this._organizationalUnitDistinguidshedName = value.organizationalUnitDistinguidshedName;
            this._password = value.password;
            this._username = value.username;
        }
    }
    /**
     * @stability stable
     */
    get dnsIps() {
        return this.getListAttribute('dns_ips');
    }
    /**
     * @stability stable
     */
    set dnsIps(value) {
        this._dnsIps = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dnsIpsInput() {
        return this._dnsIps;
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
    /**
     * @stability stable
     */
    get fileSystemAdministratorsGroup() {
        return this.getStringAttribute('file_system_administrators_group');
    }
    /**
     * @stability stable
     */
    set fileSystemAdministratorsGroup(value) {
        this._fileSystemAdministratorsGroup = value;
    }
    /**
     * @stability stable
     */
    resetFileSystemAdministratorsGroup() {
        this._fileSystemAdministratorsGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileSystemAdministratorsGroupInput() {
        return this._fileSystemAdministratorsGroup;
    }
    /**
     * @stability stable
     */
    get organizationalUnitDistinguidshedName() {
        return this.getStringAttribute('organizational_unit_distinguidshed_name');
    }
    /**
     * @stability stable
     */
    set organizationalUnitDistinguidshedName(value) {
        this._organizationalUnitDistinguidshedName = value;
    }
    /**
     * @stability stable
     */
    resetOrganizationalUnitDistinguidshedName() {
        this._organizationalUnitDistinguidshedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get organizationalUnitDistinguidshedNameInput() {
        return this._organizationalUnitDistinguidshedName;
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
exports.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference = FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference[_f] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference", version: "3.0.1" };
function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        netbios_name: cdktf.stringToTerraform(struct.netbiosName),
        self_managed_active_directory_configuration: fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform(struct.selfManagedActiveDirectoryConfiguration),
    };
}
exports.fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform = fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform;
/**
 * @stability stable
 */
class FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // self_managed_active_directory_configuration - computed: false, optional: true, required: false
        this._selfManagedActiveDirectoryConfiguration = new FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(this, "self_managed_active_directory_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._netbiosName) {
            hasAnyValues = true;
            internalValueResult.netbiosName = this._netbiosName;
        }
        if ((_k = this._selfManagedActiveDirectoryConfiguration) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.selfManagedActiveDirectoryConfiguration = (_l = this._selfManagedActiveDirectoryConfiguration) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._netbiosName = undefined;
            this._selfManagedActiveDirectoryConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._netbiosName = value.netbiosName;
            this._selfManagedActiveDirectoryConfiguration.internalValue = value.selfManagedActiveDirectoryConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get netbiosName() {
        return this.getStringAttribute('netbios_name');
    }
    /**
     * @stability stable
     */
    set netbiosName(value) {
        this._netbiosName = value;
    }
    /**
     * @stability stable
     */
    resetNetbiosName() {
        this._netbiosName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get netbiosNameInput() {
        return this._netbiosName;
    }
    /**
     * @stability stable
     */
    get selfManagedActiveDirectoryConfiguration() {
        return this._selfManagedActiveDirectoryConfiguration;
    }
    /**
     * @stability stable
     */
    putSelfManagedActiveDirectoryConfiguration(value) {
        this._selfManagedActiveDirectoryConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSelfManagedActiveDirectoryConfiguration() {
        this._selfManagedActiveDirectoryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get selfManagedActiveDirectoryConfigurationInput() {
        return this._selfManagedActiveDirectoryConfiguration.internalValue;
    }
}
exports.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference = FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference[_g] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference", version: "3.0.1" };
function fsxOntapStorageVirtualMachineTimeoutsToTerraform(struct) {
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
exports.fsxOntapStorageVirtualMachineTimeoutsToTerraform = fsxOntapStorageVirtualMachineTimeoutsToTerraform;
/**
 * @stability stable
 */
class FsxOntapStorageVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.FsxOntapStorageVirtualMachineTimeoutsOutputReference = FsxOntapStorageVirtualMachineTimeoutsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachineTimeoutsOutputReference[_h] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachineTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html aws_fsx_ontap_storage_virtual_machine}.
 *
 * @stability stable
 */
class FsxOntapStorageVirtualMachine extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html aws_fsx_ontap_storage_virtual_machine} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_fsx_ontap_storage_virtual_machine',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // active_directory_configuration - computed: false, optional: true, required: false
        this._activeDirectoryConfiguration = new FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference(this, "active_directory_configuration", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new FsxOntapStorageVirtualMachineTimeoutsOutputReference(this, "timeouts", true);
        this._fileSystemId = config.fileSystemId;
        this._name = config.name;
        this._rootVolumeSecurityStyle = config.rootVolumeSecurityStyle;
        this._svmAdminPassword = config.svmAdminPassword;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._activeDirectoryConfiguration.internalValue = config.activeDirectoryConfiguration;
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
    // endpoints - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    endpoints(index) {
        return new FsxOntapStorageVirtualMachineEndpoints(this, 'endpoints', index);
    }
    /**
     * @stability stable
     */
    get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    /**
     * @stability stable
     */
    set fileSystemId(value) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileSystemIdInput() {
        return this._fileSystemId;
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
    get rootVolumeSecurityStyle() {
        return this.getStringAttribute('root_volume_security_style');
    }
    /**
     * @stability stable
     */
    set rootVolumeSecurityStyle(value) {
        this._rootVolumeSecurityStyle = value;
    }
    /**
     * @stability stable
     */
    resetRootVolumeSecurityStyle() {
        this._rootVolumeSecurityStyle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rootVolumeSecurityStyleInput() {
        return this._rootVolumeSecurityStyle;
    }
    // subtype - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get subtype() {
        return this.getStringAttribute('subtype');
    }
    /**
     * @stability stable
     */
    get svmAdminPassword() {
        return this.getStringAttribute('svm_admin_password');
    }
    /**
     * @stability stable
     */
    set svmAdminPassword(value) {
        this._svmAdminPassword = value;
    }
    /**
     * @stability stable
     */
    resetSvmAdminPassword() {
        this._svmAdminPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get svmAdminPasswordInput() {
        return this._svmAdminPassword;
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
    // uuid - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get uuid() {
        return this.getStringAttribute('uuid');
    }
    /**
     * @stability stable
     */
    get activeDirectoryConfiguration() {
        return this._activeDirectoryConfiguration;
    }
    /**
     * @stability stable
     */
    putActiveDirectoryConfiguration(value) {
        this._activeDirectoryConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetActiveDirectoryConfiguration() {
        this._activeDirectoryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get activeDirectoryConfigurationInput() {
        return this._activeDirectoryConfiguration.internalValue;
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
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            name: cdktf.stringToTerraform(this._name),
            root_volume_security_style: cdktf.stringToTerraform(this._rootVolumeSecurityStyle),
            svm_admin_password: cdktf.stringToTerraform(this._svmAdminPassword),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            active_directory_configuration: fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform(this._activeDirectoryConfiguration.internalValue),
            timeouts: fsxOntapStorageVirtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.FsxOntapStorageVirtualMachine = FsxOntapStorageVirtualMachine;
_j = JSII_RTTI_SYMBOL_1;
FsxOntapStorageVirtualMachine[_j] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapStorageVirtualMachine", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
FsxOntapStorageVirtualMachine.tfResourceType = "aws_fsx_ontap_storage_virtual_machine";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnN4LW9udGFwLXN0b3JhZ2UtdmlydHVhbC1tYWNoaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZzeC9mc3gtb250YXAtc3RvcmFnZS12aXJ0dWFsLW1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUFxQi9CLE1BQWEsMkNBQTRDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV4Riw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O0FBVkgsa0dBV0M7Ozs7OztBQUNELE1BQWEsZ0RBQWlELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3Riw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O0FBVkgsNEdBV0M7Ozs7OztBQUNELE1BQWEseUNBQTBDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV0Riw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O0FBVkgsOEZBV0M7Ozs7OztBQUNE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QyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzNELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QywwQkFBMEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1lBQ2xGLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsOEJBQThCLEVBQUUsb0VBQW9FLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLGFBQWEsQ0FBQztZQUN0SixRQUFRLEVBQUUsZ0RBQWdELENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDekYsQ0FBQztJQUNKLENBQUM7O0FBek1ILHNFQTBNQzs7O0FBeE1DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNENBQWMsR0FBVyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlU3lzdGVtSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvb3RWb2x1bWVTZWN1cml0eVN0eWxlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3ZtQWRtaW5QYXNzd29yZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb24/OiBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZVRpbWVvdXRzO1xufVxuZXhwb3J0IGNsYXNzIEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lRW5kcG9pbnRzSXNjc2kgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkbnNfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRuc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkbnNfbmFtZScpO1xuICB9XG5cbiAgLy8gaXBfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBBZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXBfYWRkcmVzc2VzJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUVuZHBvaW50c01hbmFnZW1lbnQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkbnNfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRuc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkbnNfbmFtZScpO1xuICB9XG5cbiAgLy8gaXBfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBBZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXBfYWRkcmVzc2VzJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUVuZHBvaW50c05mcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRuc19uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG5zTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Ruc19uYW1lJyk7XG4gIH1cblxuICAvLyBpcF9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcEFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpcF9hZGRyZXNzZXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lRW5kcG9pbnRzU21iIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZG5zX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkbnNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG5zX25hbWUnKTtcbiAgfVxuXG4gIC8vIGlwX2FkZHJlc3NlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwQWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2lwX2FkZHJlc3NlcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVFbmRwb2ludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpc2NzaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlzY3NpKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpc2NzaScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1hbmFnZW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYW5hZ2VtZW50KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYW5hZ2VtZW50JykgYXMgYW55O1xuICB9XG5cbiAgLy8gbmZzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmZzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzbWIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzbWIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NtYicpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkbnNJcHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aWRzaGVkTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXNzd29yZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkbnNfaXBzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRuc0lwcyksXG4gICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluTmFtZSksXG4gICAgZmlsZV9zeXN0ZW1fYWRtaW5pc3RyYXRvcnNfZ3JvdXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXApLFxuICAgIG9yZ2FuaXphdGlvbmFsX3VuaXRfZGlzdGluZ3VpZHNoZWRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlkc2hlZE5hbWUpLFxuICAgIHBhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhc3N3b3JkKSxcbiAgICB1c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VybmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvblNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Ruc0lwcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG5zSXBzID0gdGhpcy5fZG5zSXBzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZG9tYWluTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG9tYWluTmFtZSA9IHRoaXMuX2RvbWFpbk5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9maWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXAgPSB0aGlzLl9maWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aWRzaGVkTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3VpZHNoZWROYW1lID0gdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3VpZHNoZWROYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFzc3dvcmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhc3N3b3JkID0gdGhpcy5fcGFzc3dvcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VybmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlcm5hbWUgPSB0aGlzLl91c2VybmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvblNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Ruc0lwcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aWRzaGVkTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlcm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Ruc0lwcyA9IHZhbHVlLmRuc0lwcztcbiAgICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZS5kb21haW5OYW1lO1xuICAgICAgdGhpcy5fZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXAgPSB2YWx1ZS5maWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cDtcbiAgICAgIHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aWRzaGVkTmFtZSA9IHZhbHVlLm9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aWRzaGVkTmFtZTtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdmFsdWUucGFzc3dvcmQ7XG4gICAgICB0aGlzLl91c2VybmFtZSA9IHZhbHVlLnVzZXJuYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRuc19pcHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZG5zSXBzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGRuc0lwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkbnNfaXBzJyk7XG4gIH1cbiAgcHVibGljIHNldCBkbnNJcHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZG5zSXBzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRuc0lwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kbnNJcHM7XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kb21haW5OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5OYW1lO1xuICB9XG5cbiAgLy8gZmlsZV9zeXN0ZW1fYWRtaW5pc3RyYXRvcnNfZ3JvdXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXA/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlsZV9zeXN0ZW1fYWRtaW5pc3RyYXRvcnNfZ3JvdXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwKCkge1xuICAgIHRoaXMuX2ZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cDtcbiAgfVxuXG4gIC8vIG9yZ2FuaXphdGlvbmFsX3VuaXRfZGlzdGluZ3VpZHNoZWRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlkc2hlZE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aWRzaGVkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yZ2FuaXphdGlvbmFsX3VuaXRfZGlzdGluZ3VpZHNoZWRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3VpZHNoZWROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlkc2hlZE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlkc2hlZE5hbWUoKSB7XG4gICAgdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3VpZHNoZWROYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlkc2hlZE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3VpZHNoZWROYW1lO1xuICB9XG5cbiAgLy8gcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXNzd29yZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZDtcbiAgfVxuXG4gIC8vIHVzZXJuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VzZXJuYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VybmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJuYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VybmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcm5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5ldGJpb3NOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbj86IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvblNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5ldGJpb3NfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uZXRiaW9zTmFtZSksXG4gICAgc2VsZl9tYW5hZ2VkX2FjdGl2ZV9kaXJlY3RvcnlfY29uZmlndXJhdGlvbjogZnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uU2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9uZXRiaW9zTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0Ymlvc05hbWUgPSB0aGlzLl9uZXRiaW9zTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uID0gdGhpcy5fc2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbmV0Ymlvc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbmV0Ymlvc05hbWUgPSB2YWx1ZS5uZXRiaW9zTmFtZTtcbiAgICAgIHRoaXMuX3NlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5ldGJpb3NfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXRiaW9zTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmV0Ymlvc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXRiaW9zX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldGJpb3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uZXRiaW9zTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldGJpb3NOYW1lKCkge1xuICAgIHRoaXMuX25ldGJpb3NOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXRiaW9zTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXRiaW9zTmFtZTtcbiAgfVxuXG4gIC8vIHNlbGZfbWFuYWdlZF9hY3RpdmVfZGlyZWN0b3J5X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uID0gbmV3IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvblNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzZWxmX21hbmFnZWRfYWN0aXZlX2RpcmVjdG9yeV9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb24odmFsdWU6IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvblNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3NlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3NlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVUaW1lb3V0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1cGRhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZVRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVUaW1lb3V0c091dHB1dFJlZmVyZW5jZSB8IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lVGltZW91dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgICB1cGRhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVUaW1lb3V0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZVRpbWVvdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcmVhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVsZXRlID0gdGhpcy5fZGVsZXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXBkYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51cGRhdGUgPSB0aGlzLl91cGRhdGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZVRpbWVvdXRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZS5jcmVhdGU7XG4gICAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZS5kZWxldGU7XG4gICAgICB0aGlzLl91cGRhdGUgPSB2YWx1ZS51cGRhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGU7XG4gIH1cblxuICAvLyBkZWxldGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxldGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlKCkge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91cGRhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VwZGF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXBkYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVcGRhdGUoKSB7XG4gICAgdGhpcy5fdXBkYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1cGRhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZnN4X29udGFwX3N0b3JhZ2VfdmlydHVhbF9tYWNoaW5lXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2ZzeF9vbnRhcF9zdG9yYWdlX3ZpcnR1YWxfbWFjaGluZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9maWxlU3lzdGVtSWQgPSBjb25maWcuZmlsZVN5c3RlbUlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9yb290Vm9sdW1lU2VjdXJpdHlTdHlsZSA9IGNvbmZpZy5yb290Vm9sdW1lU2VjdXJpdHlTdHlsZTtcbiAgICB0aGlzLl9zdm1BZG1pblBhc3N3b3JkID0gY29uZmlnLnN2bUFkbWluUGFzc3dvcmQ7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9hY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuYWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGVuZHBvaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZW5kcG9pbnRzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lRW5kcG9pbnRzKHRoaXMsICdlbmRwb2ludHMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBmaWxlX3N5c3RlbV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9maWxlU3lzdGVtSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbGVTeXN0ZW1JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfc3lzdGVtX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaWxlU3lzdGVtSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVTeXN0ZW1JZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlU3lzdGVtSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZVN5c3RlbUlkO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcm9vdF92b2x1bWVfc2VjdXJpdHlfc3R5bGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9vdFZvbHVtZVNlY3VyaXR5U3R5bGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvb3RWb2x1bWVTZWN1cml0eVN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9vdF92b2x1bWVfc2VjdXJpdHlfc3R5bGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvb3RWb2x1bWVTZWN1cml0eVN0eWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb290Vm9sdW1lU2VjdXJpdHlTdHlsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvb3RWb2x1bWVTZWN1cml0eVN0eWxlKCkge1xuICAgIHRoaXMuX3Jvb3RWb2x1bWVTZWN1cml0eVN0eWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb290Vm9sdW1lU2VjdXJpdHlTdHlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290Vm9sdW1lU2VjdXJpdHlTdHlsZTtcbiAgfVxuXG4gIC8vIHN1YnR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJ0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VidHlwZScpO1xuICB9XG5cbiAgLy8gc3ZtX2FkbWluX3Bhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N2bUFkbWluUGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN2bUFkbWluUGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdm1fYWRtaW5fcGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN2bUFkbWluUGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N2bUFkbWluUGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdm1BZG1pblBhc3N3b3JkKCkge1xuICAgIHRoaXMuX3N2bUFkbWluUGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN2bUFkbWluUGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3ZtQWRtaW5QYXNzd29yZDtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB1dWlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXVpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3V1aWQnKTtcbiAgfVxuXG4gIC8vIGFjdGl2ZV9kaXJlY3RvcnlfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uID0gbmV3IEZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lQWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhY3RpdmVfZGlyZWN0b3J5X2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbih2YWx1ZTogRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVBY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fYWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9hY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGlyZWN0b3J5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgRnN4T250YXBTdG9yYWdlVmlydHVhbE1hY2hpbmVUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBGc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZVRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVfc3lzdGVtX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maWxlU3lzdGVtSWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICByb290X3ZvbHVtZV9zZWN1cml0eV9zdHlsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcm9vdFZvbHVtZVNlY3VyaXR5U3R5bGUpLFxuICAgICAgc3ZtX2FkbWluX3Bhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdm1BZG1pblBhc3N3b3JkKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgYWN0aXZlX2RpcmVjdG9yeV9jb25maWd1cmF0aW9uOiBmc3hPbnRhcFN0b3JhZ2VWaXJ0dWFsTWFjaGluZUFjdGl2ZURpcmVjdG9yeUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9hY3RpdmVEaXJlY3RvcnlDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgdGltZW91dHM6IGZzeE9udGFwU3RvcmFnZVZpcnR1YWxNYWNoaW5lVGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=