"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpnConnection = exports.VpnConnectionVgwTelemetry = exports.VpnConnectionRoutes = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class VpnConnectionRoutes extends cdktf.ComplexComputedList {
    // destination_cidr_block - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    // source - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get source() {
        return this.getStringAttribute('source');
    }
    // state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get state() {
        return this.getStringAttribute('state');
    }
}
exports.VpnConnectionRoutes = VpnConnectionRoutes;
_a = JSII_RTTI_SYMBOL_1;
VpnConnectionRoutes[_a] = { fqn: "@cdktf/provider-aws.vpc.VpnConnectionRoutes", version: "3.0.1" };
/**
 * @stability stable
 */
class VpnConnectionVgwTelemetry extends cdktf.ComplexComputedList {
    // accepted_route_count - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get acceptedRouteCount() {
        return this.getNumberAttribute('accepted_route_count');
    }
    // last_status_change - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastStatusChange() {
        return this.getStringAttribute('last_status_change');
    }
    // outside_ip_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get outsideIpAddress() {
        return this.getStringAttribute('outside_ip_address');
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
}
exports.VpnConnectionVgwTelemetry = VpnConnectionVgwTelemetry;
_b = JSII_RTTI_SYMBOL_1;
VpnConnectionVgwTelemetry[_b] = { fqn: "@cdktf/provider-aws.vpc.VpnConnectionVgwTelemetry", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection}.
 *
 * @stability stable
 */
class VpnConnection extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpn_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._customerGatewayId = config.customerGatewayId;
        this._enableAcceleration = config.enableAcceleration;
        this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
        this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
        this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
        this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
        this._staticRoutesOnly = config.staticRoutesOnly;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._transitGatewayId = config.transitGatewayId;
        this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
        this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
        this._tunnel1IkeVersions = config.tunnel1IkeVersions;
        this._tunnel1InsideCidr = config.tunnel1InsideCidr;
        this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
        this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
        this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
        this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
        this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
        this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
        this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
        this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
        this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
        this._tunnel1PresharedKey = config.tunnel1PresharedKey;
        this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
        this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
        this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
        this._tunnel1StartupAction = config.tunnel1StartupAction;
        this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
        this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
        this._tunnel2IkeVersions = config.tunnel2IkeVersions;
        this._tunnel2InsideCidr = config.tunnel2InsideCidr;
        this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
        this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
        this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
        this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
        this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
        this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
        this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
        this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
        this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
        this._tunnel2PresharedKey = config.tunnel2PresharedKey;
        this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
        this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
        this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
        this._tunnel2StartupAction = config.tunnel2StartupAction;
        this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
        this._type = config.type;
        this._vpnGatewayId = config.vpnGatewayId;
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
    // customer_gateway_configuration - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get customerGatewayConfiguration() {
        return this.getStringAttribute('customer_gateway_configuration');
    }
    /**
     * @stability stable
     */
    get customerGatewayId() {
        return this.getStringAttribute('customer_gateway_id');
    }
    /**
     * @stability stable
     */
    set customerGatewayId(value) {
        this._customerGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customerGatewayIdInput() {
        return this._customerGatewayId;
    }
    /**
     * @stability stable
     */
    get enableAcceleration() {
        return this.getBooleanAttribute('enable_acceleration');
    }
    /**
     * @stability stable
     */
    set enableAcceleration(value) {
        this._enableAcceleration = value;
    }
    /**
     * @stability stable
     */
    resetEnableAcceleration() {
        this._enableAcceleration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableAccelerationInput() {
        return this._enableAcceleration;
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
    get localIpv4NetworkCidr() {
        return this.getStringAttribute('local_ipv4_network_cidr');
    }
    /**
     * @stability stable
     */
    set localIpv4NetworkCidr(value) {
        this._localIpv4NetworkCidr = value;
    }
    /**
     * @stability stable
     */
    resetLocalIpv4NetworkCidr() {
        this._localIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get localIpv4NetworkCidrInput() {
        return this._localIpv4NetworkCidr;
    }
    /**
     * @stability stable
     */
    get localIpv6NetworkCidr() {
        return this.getStringAttribute('local_ipv6_network_cidr');
    }
    /**
     * @stability stable
     */
    set localIpv6NetworkCidr(value) {
        this._localIpv6NetworkCidr = value;
    }
    /**
     * @stability stable
     */
    resetLocalIpv6NetworkCidr() {
        this._localIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get localIpv6NetworkCidrInput() {
        return this._localIpv6NetworkCidr;
    }
    /**
     * @stability stable
     */
    get remoteIpv4NetworkCidr() {
        return this.getStringAttribute('remote_ipv4_network_cidr');
    }
    /**
     * @stability stable
     */
    set remoteIpv4NetworkCidr(value) {
        this._remoteIpv4NetworkCidr = value;
    }
    /**
     * @stability stable
     */
    resetRemoteIpv4NetworkCidr() {
        this._remoteIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get remoteIpv4NetworkCidrInput() {
        return this._remoteIpv4NetworkCidr;
    }
    /**
     * @stability stable
     */
    get remoteIpv6NetworkCidr() {
        return this.getStringAttribute('remote_ipv6_network_cidr');
    }
    /**
     * @stability stable
     */
    set remoteIpv6NetworkCidr(value) {
        this._remoteIpv6NetworkCidr = value;
    }
    /**
     * @stability stable
     */
    resetRemoteIpv6NetworkCidr() {
        this._remoteIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get remoteIpv6NetworkCidrInput() {
        return this._remoteIpv6NetworkCidr;
    }
    // routes - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    routes(index) {
        return new VpnConnectionRoutes(this, 'routes', index);
    }
    /**
     * @stability stable
     */
    get staticRoutesOnly() {
        return this.getBooleanAttribute('static_routes_only');
    }
    /**
     * @stability stable
     */
    set staticRoutesOnly(value) {
        this._staticRoutesOnly = value;
    }
    /**
     * @stability stable
     */
    resetStaticRoutesOnly() {
        this._staticRoutesOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get staticRoutesOnlyInput() {
        return this._staticRoutesOnly;
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
    // transit_gateway_attachment_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    /**
     * @stability stable
     */
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    /**
     * @stability stable
     */
    set transitGatewayId(value) {
        this._transitGatewayId = value;
    }
    /**
     * @stability stable
     */
    resetTransitGatewayId() {
        this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get transitGatewayIdInput() {
        return this._transitGatewayId;
    }
    // tunnel1_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel1Address() {
        return this.getStringAttribute('tunnel1_address');
    }
    // tunnel1_bgp_asn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel1BgpAsn() {
        return this.getStringAttribute('tunnel1_bgp_asn');
    }
    // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel1BgpHoldtime() {
        return this.getNumberAttribute('tunnel1_bgp_holdtime');
    }
    // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel1CgwInsideAddress() {
        return this.getStringAttribute('tunnel1_cgw_inside_address');
    }
    /**
     * @stability stable
     */
    get tunnel1DpdTimeoutAction() {
        return this.getStringAttribute('tunnel1_dpd_timeout_action');
    }
    /**
     * @stability stable
     */
    set tunnel1DpdTimeoutAction(value) {
        this._tunnel1DpdTimeoutAction = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1DpdTimeoutAction() {
        this._tunnel1DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1DpdTimeoutActionInput() {
        return this._tunnel1DpdTimeoutAction;
    }
    /**
     * @stability stable
     */
    get tunnel1DpdTimeoutSeconds() {
        return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
    }
    /**
     * @stability stable
     */
    set tunnel1DpdTimeoutSeconds(value) {
        this._tunnel1DpdTimeoutSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1DpdTimeoutSeconds() {
        this._tunnel1DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1DpdTimeoutSecondsInput() {
        return this._tunnel1DpdTimeoutSeconds;
    }
    /**
     * @stability stable
     */
    get tunnel1IkeVersions() {
        return this.getListAttribute('tunnel1_ike_versions');
    }
    /**
     * @stability stable
     */
    set tunnel1IkeVersions(value) {
        this._tunnel1IkeVersions = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1IkeVersions() {
        this._tunnel1IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1IkeVersionsInput() {
        return this._tunnel1IkeVersions;
    }
    /**
     * @stability stable
     */
    get tunnel1InsideCidr() {
        return this.getStringAttribute('tunnel1_inside_cidr');
    }
    /**
     * @stability stable
     */
    set tunnel1InsideCidr(value) {
        this._tunnel1InsideCidr = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1InsideCidr() {
        this._tunnel1InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1InsideCidrInput() {
        return this._tunnel1InsideCidr;
    }
    /**
     * @stability stable
     */
    get tunnel1InsideIpv6Cidr() {
        return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
    }
    /**
     * @stability stable
     */
    set tunnel1InsideIpv6Cidr(value) {
        this._tunnel1InsideIpv6Cidr = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1InsideIpv6Cidr() {
        this._tunnel1InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1InsideIpv6CidrInput() {
        return this._tunnel1InsideIpv6Cidr;
    }
    /**
     * @stability stable
     */
    get tunnel1Phase1DhGroupNumbers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tunnel1_phase1_dh_group_numbers');
    }
    /**
     * @stability stable
     */
    set tunnel1Phase1DhGroupNumbers(value) {
        this._tunnel1Phase1DhGroupNumbers = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1Phase1DhGroupNumbers() {
        this._tunnel1Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1Phase1DhGroupNumbersInput() {
        return this._tunnel1Phase1DhGroupNumbers;
    }
    /**
     * @stability stable
     */
    get tunnel1Phase1EncryptionAlgorithms() {
        return this.getListAttribute('tunnel1_phase1_encryption_algorithms');
    }
    /**
     * @stability stable
     */
    set tunnel1Phase1EncryptionAlgorithms(value) {
        this._tunnel1Phase1EncryptionAlgorithms = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1Phase1EncryptionAlgorithms() {
        this._tunnel1Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1Phase1EncryptionAlgorithmsInput() {
        return this._tunnel1Phase1EncryptionAlgorithms;
    }
    /**
     * @stability stable
     */
    get tunnel1Phase1IntegrityAlgorithms() {
        return this.getListAttribute('tunnel1_phase1_integrity_algorithms');
    }
    /**
     * @stability stable
     */
    set tunnel1Phase1IntegrityAlgorithms(value) {
        this._tunnel1Phase1IntegrityAlgorithms = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1Phase1IntegrityAlgorithms() {
        this._tunnel1Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1Phase1IntegrityAlgorithmsInput() {
        return this._tunnel1Phase1IntegrityAlgorithms;
    }
    /**
     * @stability stable
     */
    get tunnel1Phase1LifetimeSeconds() {
        return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
    }
    /**
     * @stability stable
     */
    set tunnel1Phase1LifetimeSeconds(value) {
        this._tunnel1Phase1LifetimeSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1Phase1LifetimeSeconds() {
        this._tunnel1Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1Phase1LifetimeSecondsInput() {
        return this._tunnel1Phase1LifetimeSeconds;
    }
    /**
     * @stability stable
     */
    get tunnel1Phase2DhGroupNumbers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tunnel1_phase2_dh_group_numbers');
    }
    /**
     * @stability stable
     */
    set tunnel1Phase2DhGroupNumbers(value) {
        this._tunnel1Phase2DhGroupNumbers = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1Phase2DhGroupNumbers() {
        this._tunnel1Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1Phase2DhGroupNumbersInput() {
        return this._tunnel1Phase2DhGroupNumbers;
    }
    /**
     * @stability stable
     */
    get tunnel1Phase2EncryptionAlgorithms() {
        return this.getListAttribute('tunnel1_phase2_encryption_algorithms');
    }
    /**
     * @stability stable
     */
    set tunnel1Phase2EncryptionAlgorithms(value) {
        this._tunnel1Phase2EncryptionAlgorithms = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1Phase2EncryptionAlgorithms() {
        this._tunnel1Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1Phase2EncryptionAlgorithmsInput() {
        return this._tunnel1Phase2EncryptionAlgorithms;
    }
    /**
     * @stability stable
     */
    get tunnel1Phase2IntegrityAlgorithms() {
        return this.getListAttribute('tunnel1_phase2_integrity_algorithms');
    }
    /**
     * @stability stable
     */
    set tunnel1Phase2IntegrityAlgorithms(value) {
        this._tunnel1Phase2IntegrityAlgorithms = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1Phase2IntegrityAlgorithms() {
        this._tunnel1Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1Phase2IntegrityAlgorithmsInput() {
        return this._tunnel1Phase2IntegrityAlgorithms;
    }
    /**
     * @stability stable
     */
    get tunnel1Phase2LifetimeSeconds() {
        return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
    }
    /**
     * @stability stable
     */
    set tunnel1Phase2LifetimeSeconds(value) {
        this._tunnel1Phase2LifetimeSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1Phase2LifetimeSeconds() {
        this._tunnel1Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1Phase2LifetimeSecondsInput() {
        return this._tunnel1Phase2LifetimeSeconds;
    }
    /**
     * @stability stable
     */
    get tunnel1PresharedKey() {
        return this.getStringAttribute('tunnel1_preshared_key');
    }
    /**
     * @stability stable
     */
    set tunnel1PresharedKey(value) {
        this._tunnel1PresharedKey = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1PresharedKey() {
        this._tunnel1PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1PresharedKeyInput() {
        return this._tunnel1PresharedKey;
    }
    /**
     * @stability stable
     */
    get tunnel1RekeyFuzzPercentage() {
        return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
    }
    /**
     * @stability stable
     */
    set tunnel1RekeyFuzzPercentage(value) {
        this._tunnel1RekeyFuzzPercentage = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1RekeyFuzzPercentage() {
        this._tunnel1RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1RekeyFuzzPercentageInput() {
        return this._tunnel1RekeyFuzzPercentage;
    }
    /**
     * @stability stable
     */
    get tunnel1RekeyMarginTimeSeconds() {
        return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
    }
    /**
     * @stability stable
     */
    set tunnel1RekeyMarginTimeSeconds(value) {
        this._tunnel1RekeyMarginTimeSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1RekeyMarginTimeSeconds() {
        this._tunnel1RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1RekeyMarginTimeSecondsInput() {
        return this._tunnel1RekeyMarginTimeSeconds;
    }
    /**
     * @stability stable
     */
    get tunnel1ReplayWindowSize() {
        return this.getNumberAttribute('tunnel1_replay_window_size');
    }
    /**
     * @stability stable
     */
    set tunnel1ReplayWindowSize(value) {
        this._tunnel1ReplayWindowSize = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1ReplayWindowSize() {
        this._tunnel1ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1ReplayWindowSizeInput() {
        return this._tunnel1ReplayWindowSize;
    }
    /**
     * @stability stable
     */
    get tunnel1StartupAction() {
        return this.getStringAttribute('tunnel1_startup_action');
    }
    /**
     * @stability stable
     */
    set tunnel1StartupAction(value) {
        this._tunnel1StartupAction = value;
    }
    /**
     * @stability stable
     */
    resetTunnel1StartupAction() {
        this._tunnel1StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel1StartupActionInput() {
        return this._tunnel1StartupAction;
    }
    // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel1VgwInsideAddress() {
        return this.getStringAttribute('tunnel1_vgw_inside_address');
    }
    // tunnel2_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel2Address() {
        return this.getStringAttribute('tunnel2_address');
    }
    // tunnel2_bgp_asn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel2BgpAsn() {
        return this.getStringAttribute('tunnel2_bgp_asn');
    }
    // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel2BgpHoldtime() {
        return this.getNumberAttribute('tunnel2_bgp_holdtime');
    }
    // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel2CgwInsideAddress() {
        return this.getStringAttribute('tunnel2_cgw_inside_address');
    }
    /**
     * @stability stable
     */
    get tunnel2DpdTimeoutAction() {
        return this.getStringAttribute('tunnel2_dpd_timeout_action');
    }
    /**
     * @stability stable
     */
    set tunnel2DpdTimeoutAction(value) {
        this._tunnel2DpdTimeoutAction = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2DpdTimeoutAction() {
        this._tunnel2DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2DpdTimeoutActionInput() {
        return this._tunnel2DpdTimeoutAction;
    }
    /**
     * @stability stable
     */
    get tunnel2DpdTimeoutSeconds() {
        return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
    }
    /**
     * @stability stable
     */
    set tunnel2DpdTimeoutSeconds(value) {
        this._tunnel2DpdTimeoutSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2DpdTimeoutSeconds() {
        this._tunnel2DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2DpdTimeoutSecondsInput() {
        return this._tunnel2DpdTimeoutSeconds;
    }
    /**
     * @stability stable
     */
    get tunnel2IkeVersions() {
        return this.getListAttribute('tunnel2_ike_versions');
    }
    /**
     * @stability stable
     */
    set tunnel2IkeVersions(value) {
        this._tunnel2IkeVersions = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2IkeVersions() {
        this._tunnel2IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2IkeVersionsInput() {
        return this._tunnel2IkeVersions;
    }
    /**
     * @stability stable
     */
    get tunnel2InsideCidr() {
        return this.getStringAttribute('tunnel2_inside_cidr');
    }
    /**
     * @stability stable
     */
    set tunnel2InsideCidr(value) {
        this._tunnel2InsideCidr = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2InsideCidr() {
        this._tunnel2InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2InsideCidrInput() {
        return this._tunnel2InsideCidr;
    }
    /**
     * @stability stable
     */
    get tunnel2InsideIpv6Cidr() {
        return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
    }
    /**
     * @stability stable
     */
    set tunnel2InsideIpv6Cidr(value) {
        this._tunnel2InsideIpv6Cidr = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2InsideIpv6Cidr() {
        this._tunnel2InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2InsideIpv6CidrInput() {
        return this._tunnel2InsideIpv6Cidr;
    }
    /**
     * @stability stable
     */
    get tunnel2Phase1DhGroupNumbers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tunnel2_phase1_dh_group_numbers');
    }
    /**
     * @stability stable
     */
    set tunnel2Phase1DhGroupNumbers(value) {
        this._tunnel2Phase1DhGroupNumbers = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2Phase1DhGroupNumbers() {
        this._tunnel2Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2Phase1DhGroupNumbersInput() {
        return this._tunnel2Phase1DhGroupNumbers;
    }
    /**
     * @stability stable
     */
    get tunnel2Phase1EncryptionAlgorithms() {
        return this.getListAttribute('tunnel2_phase1_encryption_algorithms');
    }
    /**
     * @stability stable
     */
    set tunnel2Phase1EncryptionAlgorithms(value) {
        this._tunnel2Phase1EncryptionAlgorithms = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2Phase1EncryptionAlgorithms() {
        this._tunnel2Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2Phase1EncryptionAlgorithmsInput() {
        return this._tunnel2Phase1EncryptionAlgorithms;
    }
    /**
     * @stability stable
     */
    get tunnel2Phase1IntegrityAlgorithms() {
        return this.getListAttribute('tunnel2_phase1_integrity_algorithms');
    }
    /**
     * @stability stable
     */
    set tunnel2Phase1IntegrityAlgorithms(value) {
        this._tunnel2Phase1IntegrityAlgorithms = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2Phase1IntegrityAlgorithms() {
        this._tunnel2Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2Phase1IntegrityAlgorithmsInput() {
        return this._tunnel2Phase1IntegrityAlgorithms;
    }
    /**
     * @stability stable
     */
    get tunnel2Phase1LifetimeSeconds() {
        return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
    }
    /**
     * @stability stable
     */
    set tunnel2Phase1LifetimeSeconds(value) {
        this._tunnel2Phase1LifetimeSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2Phase1LifetimeSeconds() {
        this._tunnel2Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2Phase1LifetimeSecondsInput() {
        return this._tunnel2Phase1LifetimeSeconds;
    }
    /**
     * @stability stable
     */
    get tunnel2Phase2DhGroupNumbers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tunnel2_phase2_dh_group_numbers');
    }
    /**
     * @stability stable
     */
    set tunnel2Phase2DhGroupNumbers(value) {
        this._tunnel2Phase2DhGroupNumbers = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2Phase2DhGroupNumbers() {
        this._tunnel2Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2Phase2DhGroupNumbersInput() {
        return this._tunnel2Phase2DhGroupNumbers;
    }
    /**
     * @stability stable
     */
    get tunnel2Phase2EncryptionAlgorithms() {
        return this.getListAttribute('tunnel2_phase2_encryption_algorithms');
    }
    /**
     * @stability stable
     */
    set tunnel2Phase2EncryptionAlgorithms(value) {
        this._tunnel2Phase2EncryptionAlgorithms = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2Phase2EncryptionAlgorithms() {
        this._tunnel2Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2Phase2EncryptionAlgorithmsInput() {
        return this._tunnel2Phase2EncryptionAlgorithms;
    }
    /**
     * @stability stable
     */
    get tunnel2Phase2IntegrityAlgorithms() {
        return this.getListAttribute('tunnel2_phase2_integrity_algorithms');
    }
    /**
     * @stability stable
     */
    set tunnel2Phase2IntegrityAlgorithms(value) {
        this._tunnel2Phase2IntegrityAlgorithms = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2Phase2IntegrityAlgorithms() {
        this._tunnel2Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2Phase2IntegrityAlgorithmsInput() {
        return this._tunnel2Phase2IntegrityAlgorithms;
    }
    /**
     * @stability stable
     */
    get tunnel2Phase2LifetimeSeconds() {
        return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
    }
    /**
     * @stability stable
     */
    set tunnel2Phase2LifetimeSeconds(value) {
        this._tunnel2Phase2LifetimeSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2Phase2LifetimeSeconds() {
        this._tunnel2Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2Phase2LifetimeSecondsInput() {
        return this._tunnel2Phase2LifetimeSeconds;
    }
    /**
     * @stability stable
     */
    get tunnel2PresharedKey() {
        return this.getStringAttribute('tunnel2_preshared_key');
    }
    /**
     * @stability stable
     */
    set tunnel2PresharedKey(value) {
        this._tunnel2PresharedKey = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2PresharedKey() {
        this._tunnel2PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2PresharedKeyInput() {
        return this._tunnel2PresharedKey;
    }
    /**
     * @stability stable
     */
    get tunnel2RekeyFuzzPercentage() {
        return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
    }
    /**
     * @stability stable
     */
    set tunnel2RekeyFuzzPercentage(value) {
        this._tunnel2RekeyFuzzPercentage = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2RekeyFuzzPercentage() {
        this._tunnel2RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2RekeyFuzzPercentageInput() {
        return this._tunnel2RekeyFuzzPercentage;
    }
    /**
     * @stability stable
     */
    get tunnel2RekeyMarginTimeSeconds() {
        return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
    }
    /**
     * @stability stable
     */
    set tunnel2RekeyMarginTimeSeconds(value) {
        this._tunnel2RekeyMarginTimeSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2RekeyMarginTimeSeconds() {
        this._tunnel2RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2RekeyMarginTimeSecondsInput() {
        return this._tunnel2RekeyMarginTimeSeconds;
    }
    /**
     * @stability stable
     */
    get tunnel2ReplayWindowSize() {
        return this.getNumberAttribute('tunnel2_replay_window_size');
    }
    /**
     * @stability stable
     */
    set tunnel2ReplayWindowSize(value) {
        this._tunnel2ReplayWindowSize = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2ReplayWindowSize() {
        this._tunnel2ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2ReplayWindowSizeInput() {
        return this._tunnel2ReplayWindowSize;
    }
    /**
     * @stability stable
     */
    get tunnel2StartupAction() {
        return this.getStringAttribute('tunnel2_startup_action');
    }
    /**
     * @stability stable
     */
    set tunnel2StartupAction(value) {
        this._tunnel2StartupAction = value;
    }
    /**
     * @stability stable
     */
    resetTunnel2StartupAction() {
        this._tunnel2StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnel2StartupActionInput() {
        return this._tunnel2StartupAction;
    }
    // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tunnel2VgwInsideAddress() {
        return this.getStringAttribute('tunnel2_vgw_inside_address');
    }
    /**
     * @stability stable
     */
    get tunnelInsideIpVersion() {
        return this.getStringAttribute('tunnel_inside_ip_version');
    }
    /**
     * @stability stable
     */
    set tunnelInsideIpVersion(value) {
        this._tunnelInsideIpVersion = value;
    }
    /**
     * @stability stable
     */
    resetTunnelInsideIpVersion() {
        this._tunnelInsideIpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tunnelInsideIpVersionInput() {
        return this._tunnelInsideIpVersion;
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
    // vgw_telemetry - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    vgwTelemetry(index) {
        return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
    }
    /**
     * @stability stable
     */
    get vpnGatewayId() {
        return this.getStringAttribute('vpn_gateway_id');
    }
    /**
     * @stability stable
     */
    set vpnGatewayId(value) {
        this._vpnGatewayId = value;
    }
    /**
     * @stability stable
     */
    resetVpnGatewayId() {
        this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpnGatewayIdInput() {
        return this._vpnGatewayId;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
            enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
            local_ipv4_network_cidr: cdktf.stringToTerraform(this._localIpv4NetworkCidr),
            local_ipv6_network_cidr: cdktf.stringToTerraform(this._localIpv6NetworkCidr),
            remote_ipv4_network_cidr: cdktf.stringToTerraform(this._remoteIpv4NetworkCidr),
            remote_ipv6_network_cidr: cdktf.stringToTerraform(this._remoteIpv6NetworkCidr),
            static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            tunnel1_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel1DpdTimeoutAction),
            tunnel1_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
            tunnel1_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1IkeVersions),
            tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
            tunnel1_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel1InsideIpv6Cidr),
            tunnel1_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase1DhGroupNumbers),
            tunnel1_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1EncryptionAlgorithms),
            tunnel1_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1IntegrityAlgorithms),
            tunnel1_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
            tunnel1_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase2DhGroupNumbers),
            tunnel1_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2EncryptionAlgorithms),
            tunnel1_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2IntegrityAlgorithms),
            tunnel1_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
            tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
            tunnel1_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
            tunnel1_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
            tunnel1_replay_window_size: cdktf.numberToTerraform(this._tunnel1ReplayWindowSize),
            tunnel1_startup_action: cdktf.stringToTerraform(this._tunnel1StartupAction),
            tunnel2_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel2DpdTimeoutAction),
            tunnel2_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
            tunnel2_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2IkeVersions),
            tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
            tunnel2_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel2InsideIpv6Cidr),
            tunnel2_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase1DhGroupNumbers),
            tunnel2_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1EncryptionAlgorithms),
            tunnel2_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1IntegrityAlgorithms),
            tunnel2_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
            tunnel2_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase2DhGroupNumbers),
            tunnel2_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2EncryptionAlgorithms),
            tunnel2_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2IntegrityAlgorithms),
            tunnel2_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
            tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
            tunnel2_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
            tunnel2_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
            tunnel2_replay_window_size: cdktf.numberToTerraform(this._tunnel2ReplayWindowSize),
            tunnel2_startup_action: cdktf.stringToTerraform(this._tunnel2StartupAction),
            tunnel_inside_ip_version: cdktf.stringToTerraform(this._tunnelInsideIpVersion),
            type: cdktf.stringToTerraform(this._type),
            vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
        };
    }
}
exports.VpnConnection = VpnConnection;
_c = JSII_RTTI_SYMBOL_1;
VpnConnection[_c] = { fqn: "@cdktf/provider-aws.vpc.VpnConnection", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
VpnConnection.tfResourceType = "aws_vpn_connection";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBuLWNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdnBjL3Zwbi1jb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7O0FBdUcvQixNQUFhLG1CQUFvQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFaEUsNEVBQTRFOzs7O0lBQzVFLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDREQUE0RDs7OztJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMkRBQTJEOzs7O0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0FBZkgsa0RBZ0JDOzs7Ozs7QUFDRCxNQUFhLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdEUsMEVBQTBFOzs7O0lBQzFFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHdFQUF3RTs7OztJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCx3RUFBd0U7Ozs7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsNERBQTREOzs7O0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxvRUFBb0U7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QyxLQUFLLENBQUM7WUFDekMsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzVELENBQUM7SUFDSixDQUFDOztBQXQrQkgsc0NBdStCQzs7O0FBcitCQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDRCQUFjLEdBQVcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFZwbkNvbm5lY3Rpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbWVyR2F0ZXdheUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVBY2NlbGVyYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvY2FsSXB2NE5ldHdvcmtDaWRyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2NhbElwdjZOZXR3b3JrQ2lkcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZW1vdGVJcHY0TmV0d29ya0NpZHI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVtb3RlSXB2Nk5ldHdvcmtDaWRyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRpY1JvdXRlc09ubHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRyYW5zaXRHYXRld2F5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFEcGRUaW1lb3V0QWN0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMUlrZVZlcnNpb25zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxSW5zaWRlQ2lkcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxSW5zaWRlSXB2NkNpZHI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnM/OiBudW1iZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnM/OiBudW1iZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVByZXNoYXJlZEtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFSZXBsYXlXaW5kb3dTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVN0YXJ0dXBBY3Rpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJEcGRUaW1lb3V0QWN0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMklrZVZlcnNpb25zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwySW5zaWRlQ2lkcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwySW5zaWRlSXB2NkNpZHI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnM/OiBudW1iZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnM/OiBudW1iZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlByZXNoYXJlZEtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlJla2V5TWFyZ2luVGltZVNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJSZXBsYXlXaW5kb3dTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlN0YXJ0dXBBY3Rpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsSW5zaWRlSXBWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2cG5HYXRld2F5SWQ/OiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgVnBuQ29ubmVjdGlvblJvdXRlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlc3RpbmF0aW9uX2NpZHJfYmxvY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkNpZHJCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX2NpZHJfYmxvY2snKTtcbiAgfVxuXG4gIC8vIHNvdXJjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZScpO1xuICB9XG5cbiAgLy8gc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBWcG5Db25uZWN0aW9uVmd3VGVsZW1ldHJ5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNjZXB0ZWRfcm91dGVfY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2NlcHRlZFJvdXRlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhY2NlcHRlZF9yb3V0ZV9jb3VudCcpO1xuICB9XG5cbiAgLy8gbGFzdF9zdGF0dXNfY2hhbmdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFN0YXR1c0NoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3Rfc3RhdHVzX2NoYW5nZScpO1xuICB9XG5cbiAgLy8gb3V0c2lkZV9pcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3V0c2lkZUlwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ291dHNpZGVfaXBfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyBzdGF0dXNfbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1c01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXNfbWVzc2FnZScpO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFZwbkNvbm5lY3Rpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfdnBuX2Nvbm5lY3Rpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFZwbkNvbm5lY3Rpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c192cG5fY29ubmVjdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jdXN0b21lckdhdGV3YXlJZCA9IGNvbmZpZy5jdXN0b21lckdhdGV3YXlJZDtcbiAgICB0aGlzLl9lbmFibGVBY2NlbGVyYXRpb24gPSBjb25maWcuZW5hYmxlQWNjZWxlcmF0aW9uO1xuICAgIHRoaXMuX2xvY2FsSXB2NE5ldHdvcmtDaWRyID0gY29uZmlnLmxvY2FsSXB2NE5ldHdvcmtDaWRyO1xuICAgIHRoaXMuX2xvY2FsSXB2Nk5ldHdvcmtDaWRyID0gY29uZmlnLmxvY2FsSXB2Nk5ldHdvcmtDaWRyO1xuICAgIHRoaXMuX3JlbW90ZUlwdjROZXR3b3JrQ2lkciA9IGNvbmZpZy5yZW1vdGVJcHY0TmV0d29ya0NpZHI7XG4gICAgdGhpcy5fcmVtb3RlSXB2Nk5ldHdvcmtDaWRyID0gY29uZmlnLnJlbW90ZUlwdjZOZXR3b3JrQ2lkcjtcbiAgICB0aGlzLl9zdGF0aWNSb3V0ZXNPbmx5ID0gY29uZmlnLnN0YXRpY1JvdXRlc09ubHk7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheUlkID0gY29uZmlnLnRyYW5zaXRHYXRld2F5SWQ7XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRBY3Rpb24gPSBjb25maWcudHVubmVsMURwZFRpbWVvdXRBY3Rpb247XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzID0gY29uZmlnLnR1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcztcbiAgICB0aGlzLl90dW5uZWwxSWtlVmVyc2lvbnMgPSBjb25maWcudHVubmVsMUlrZVZlcnNpb25zO1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVDaWRyID0gY29uZmlnLnR1bm5lbDFJbnNpZGVDaWRyO1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVJcHY2Q2lkciA9IGNvbmZpZy50dW5uZWwxSW5zaWRlSXB2NkNpZHI7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzID0gY29uZmlnLnR1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycztcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMgPSBjb25maWcudHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zO1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zID0gY29uZmlnLnR1bm5lbDFQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zO1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHMgPSBjb25maWcudHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcztcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMgPSBjb25maWcudHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzO1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXMgPSBjb25maWcudHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkxpZmV0aW1lU2Vjb25kcyA9IGNvbmZpZy50dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDFQcmVzaGFyZWRLZXkgPSBjb25maWcudHVubmVsMVByZXNoYXJlZEtleTtcbiAgICB0aGlzLl90dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZSA9IGNvbmZpZy50dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZTtcbiAgICB0aGlzLl90dW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcyA9IGNvbmZpZy50dW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcztcbiAgICB0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZSA9IGNvbmZpZy50dW5uZWwxUmVwbGF5V2luZG93U2l6ZTtcbiAgICB0aGlzLl90dW5uZWwxU3RhcnR1cEFjdGlvbiA9IGNvbmZpZy50dW5uZWwxU3RhcnR1cEFjdGlvbjtcbiAgICB0aGlzLl90dW5uZWwyRHBkVGltZW91dEFjdGlvbiA9IGNvbmZpZy50dW5uZWwyRHBkVGltZW91dEFjdGlvbjtcbiAgICB0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHMgPSBjb25maWcudHVubmVsMkRwZFRpbWVvdXRTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9ucyA9IGNvbmZpZy50dW5uZWwySWtlVmVyc2lvbnM7XG4gICAgdGhpcy5fdHVubmVsMkluc2lkZUNpZHIgPSBjb25maWcudHVubmVsMkluc2lkZUNpZHI7XG4gICAgdGhpcy5fdHVubmVsMkluc2lkZUlwdjZDaWRyID0gY29uZmlnLnR1bm5lbDJJbnNpZGVJcHY2Q2lkcjtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMgPSBjb25maWcudHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzO1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXMgPSBjb25maWcudHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcyA9IGNvbmZpZy50dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycyA9IGNvbmZpZy50dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnM7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zID0gY29uZmlnLnR1bm5lbDJQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcztcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcztcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gY29uZmlnLnR1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHM7XG4gICAgdGhpcy5fdHVubmVsMlByZXNoYXJlZEtleSA9IGNvbmZpZy50dW5uZWwyUHJlc2hhcmVkS2V5O1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlID0gY29uZmlnLnR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlO1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzID0gY29uZmlnLnR1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDJSZXBsYXlXaW5kb3dTaXplID0gY29uZmlnLnR1bm5lbDJSZXBsYXlXaW5kb3dTaXplO1xuICAgIHRoaXMuX3R1bm5lbDJTdGFydHVwQWN0aW9uID0gY29uZmlnLnR1bm5lbDJTdGFydHVwQWN0aW9uO1xuICAgIHRoaXMuX3R1bm5lbEluc2lkZUlwVmVyc2lvbiA9IGNvbmZpZy50dW5uZWxJbnNpZGVJcFZlcnNpb247XG4gICAgdGhpcy5fdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuX3ZwbkdhdGV3YXlJZCA9IGNvbmZpZy52cG5HYXRld2F5SWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY3VzdG9tZXJfZ2F0ZXdheV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJHYXRld2F5Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbWVyX2dhdGV3YXlfY29uZmlndXJhdGlvbicpO1xuICB9XG5cbiAgLy8gY3VzdG9tZXJfZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jdXN0b21lckdhdGV3YXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJHYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21lcl9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21lckdhdGV3YXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJHYXRld2F5SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJHYXRld2F5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJHYXRld2F5SWQ7XG4gIH1cblxuICAvLyBlbmFibGVfYWNjZWxlcmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlQWNjZWxlcmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVBY2NlbGVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2FjY2VsZXJhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUFjY2VsZXJhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlQWNjZWxlcmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQWNjZWxlcmF0aW9uKCkge1xuICAgIHRoaXMuX2VuYWJsZUFjY2VsZXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlQWNjZWxlcmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUFjY2VsZXJhdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsb2NhbF9pcHY0X25ldHdvcmtfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvY2FsSXB2NE5ldHdvcmtDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2NhbElwdjROZXR3b3JrQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsX2lwdjRfbmV0d29ya19jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2NhbElwdjROZXR3b3JrQ2lkcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9jYWxJcHY0TmV0d29ya0NpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2NhbElwdjROZXR3b3JrQ2lkcigpIHtcbiAgICB0aGlzLl9sb2NhbElwdjROZXR3b3JrQ2lkciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9jYWxJcHY0TmV0d29ya0NpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxJcHY0TmV0d29ya0NpZHI7XG4gIH1cblxuICAvLyBsb2NhbF9pcHY2X25ldHdvcmtfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvY2FsSXB2Nk5ldHdvcmtDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2NhbElwdjZOZXR3b3JrQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsX2lwdjZfbmV0d29ya19jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2NhbElwdjZOZXR3b3JrQ2lkcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9jYWxJcHY2TmV0d29ya0NpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2NhbElwdjZOZXR3b3JrQ2lkcigpIHtcbiAgICB0aGlzLl9sb2NhbElwdjZOZXR3b3JrQ2lkciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9jYWxJcHY2TmV0d29ya0NpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxJcHY2TmV0d29ya0NpZHI7XG4gIH1cblxuICAvLyByZW1vdGVfaXB2NF9uZXR3b3JrX2NpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZW1vdGVJcHY0TmV0d29ya0NpZHI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlbW90ZUlwdjROZXR3b3JrQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlbW90ZV9pcHY0X25ldHdvcmtfY2lkcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVtb3RlSXB2NE5ldHdvcmtDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdGVJcHY0TmV0d29ya0NpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZW1vdGVJcHY0TmV0d29ya0NpZHIoKSB7XG4gICAgdGhpcy5fcmVtb3RlSXB2NE5ldHdvcmtDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZW1vdGVJcHY0TmV0d29ya0NpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3RlSXB2NE5ldHdvcmtDaWRyO1xuICB9XG5cbiAgLy8gcmVtb3RlX2lwdjZfbmV0d29ya19jaWRyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVtb3RlSXB2Nk5ldHdvcmtDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZW1vdGVJcHY2TmV0d29ya0NpZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZW1vdGVfaXB2Nl9uZXR3b3JrX2NpZHInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlbW90ZUlwdjZOZXR3b3JrQ2lkcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVtb3RlSXB2Nk5ldHdvcmtDaWRyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVtb3RlSXB2Nk5ldHdvcmtDaWRyKCkge1xuICAgIHRoaXMuX3JlbW90ZUlwdjZOZXR3b3JrQ2lkciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVtb3RlSXB2Nk5ldHdvcmtDaWRySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW90ZUlwdjZOZXR3b3JrQ2lkcjtcbiAgfVxuXG4gIC8vIHJvdXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgcm91dGVzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFZwbkNvbm5lY3Rpb25Sb3V0ZXModGhpcywgJ3JvdXRlcycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHN0YXRpY19yb3V0ZXNfb25seSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRpY1JvdXRlc09ubHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN0YXRpY1JvdXRlc09ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3RhdGljX3JvdXRlc19vbmx5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGljUm91dGVzT25seSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3RhdGljUm91dGVzT25seSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRpY1JvdXRlc09ubHkoKSB7XG4gICAgdGhpcy5fc3RhdGljUm91dGVzT25seSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGljUm91dGVzT25seUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0aWNSb3V0ZXNPbmx5O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHRyYW5zaXRfZ2F0ZXdheV9hdHRhY2htZW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEdhdGV3YXlBdHRhY2htZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmFuc2l0X2dhdGV3YXlfYXR0YWNobWVudF9pZCcpO1xuICB9XG5cbiAgLy8gdHJhbnNpdF9nYXRld2F5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RyYW5zaXRHYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmFuc2l0X2dhdGV3YXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYW5zaXRHYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcmFuc2l0R2F0ZXdheUlkKCkge1xuICAgIHRoaXMuX3RyYW5zaXRHYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyYW5zaXRHYXRld2F5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdEdhdGV3YXlJZDtcbiAgfVxuXG4gIC8vIHR1bm5lbDFfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bm5lbDFBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWwxX2JncF9hc24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxQmdwQXNuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9iZ3BfYXNuJyk7XG4gIH1cblxuICAvLyB0dW5uZWwxX2JncF9ob2xkdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bm5lbDFCZ3BIb2xkdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDFfYmdwX2hvbGR0aW1lJyk7XG4gIH1cblxuICAvLyB0dW5uZWwxX2Nnd19pbnNpZGVfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bm5lbDFDZ3dJbnNpZGVBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9jZ3dfaW5zaWRlX2FkZHJlc3MnKTtcbiAgfVxuXG4gIC8vIHR1bm5lbDFfZHBkX3RpbWVvdXRfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFEcGRUaW1lb3V0QWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWwxRHBkVGltZW91dEFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfZHBkX3RpbWVvdXRfYWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxRHBkVGltZW91dEFjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRBY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxRHBkVGltZW91dEFjdGlvbigpIHtcbiAgICB0aGlzLl90dW5uZWwxRHBkVGltZW91dEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMURwZFRpbWVvdXRBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMURwZFRpbWVvdXRBY3Rpb247XG4gIH1cblxuICAvLyB0dW5uZWwxX2RwZF90aW1lb3V0X3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dW5uZWwxRHBkVGltZW91dFNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX2RwZF90aW1lb3V0X3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMURwZFRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcztcbiAgfVxuXG4gIC8vIHR1bm5lbDFfaWtlX3ZlcnNpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFJa2VWZXJzaW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxSWtlVmVyc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHVubmVsMV9pa2VfdmVyc2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFJa2VWZXJzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwxSWtlVmVyc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxSWtlVmVyc2lvbnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMUlrZVZlcnNpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxSWtlVmVyc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMUlrZVZlcnNpb25zO1xuICB9XG5cbiAgLy8gdHVubmVsMV9pbnNpZGVfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFJbnNpZGVDaWRyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWwxSW5zaWRlQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfaW5zaWRlX2NpZHInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFJbnNpZGVDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwxSW5zaWRlQ2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFJbnNpZGVDaWRyKCkge1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxSW5zaWRlQ2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxSW5zaWRlQ2lkcjtcbiAgfVxuXG4gIC8vIHR1bm5lbDFfaW5zaWRlX2lwdjZfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFJbnNpZGVJcHY2Q2lkcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMUluc2lkZUlwdjZDaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9pbnNpZGVfaXB2Nl9jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxSW5zaWRlSXB2NkNpZHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVJcHY2Q2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFJbnNpZGVJcHY2Q2lkcigpIHtcbiAgICB0aGlzLl90dW5uZWwxSW5zaWRlSXB2NkNpZHIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFJbnNpZGVJcHY2Q2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxSW5zaWRlSXB2NkNpZHI7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycz86IG51bWJlcltdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UxX2RoX2dyb3VwX251bWJlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnModmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzKCkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycztcbiAgfVxuXG4gIC8vIHR1bm5lbDFfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMV9pbnRlZ3JpdHlfYWxnb3JpdGhtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMV9pbnRlZ3JpdHlfYWxnb3JpdGhtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMV9saWZldGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMV9saWZldGltZV9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycz86IG51bWJlcltdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UyX2RoX2dyb3VwX251bWJlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnModmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzKCkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycztcbiAgfVxuXG4gIC8vIHR1bm5lbDFfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMl9pbnRlZ3JpdHlfYWxnb3JpdGhtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMl9pbnRlZ3JpdHlfYWxnb3JpdGhtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMl9saWZldGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMl9saWZldGltZV9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMkxpZmV0aW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwxX3ByZXNoYXJlZF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUHJlc2hhcmVkS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUHJlc2hhcmVkS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9wcmVzaGFyZWRfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUHJlc2hhcmVkS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwxUHJlc2hhcmVkS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVByZXNoYXJlZEtleSgpIHtcbiAgICB0aGlzLl90dW5uZWwxUHJlc2hhcmVkS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUHJlc2hhcmVkS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQcmVzaGFyZWRLZXk7XG4gIH1cblxuICAvLyB0dW5uZWwxX3Jla2V5X2Z1enpfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX3Jla2V5X2Z1enpfcGVyY2VudGFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlO1xuICB9XG5cbiAgLy8gdHVubmVsMV9yZWtleV9tYXJnaW5fdGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDFfcmVrZXlfbWFyZ2luX3RpbWVfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzO1xuICB9XG5cbiAgLy8gdHVubmVsMV9yZXBsYXlfd2luZG93X3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVJlcGxheVdpbmRvd1NpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDFSZXBsYXlXaW5kb3dTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMV9yZXBsYXlfd2luZG93X3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFSZXBsYXlXaW5kb3dTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFSZXBsYXlXaW5kb3dTaXplKCkge1xuICAgIHRoaXMuX3R1bm5lbDFSZXBsYXlXaW5kb3dTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUmVwbGF5V2luZG93U2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZTtcbiAgfVxuXG4gIC8vIHR1bm5lbDFfc3RhcnR1cF9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVN0YXJ0dXBBY3Rpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDFTdGFydHVwQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV9zdGFydHVwX2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVN0YXJ0dXBBY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDFTdGFydHVwQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVN0YXJ0dXBBY3Rpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsMVN0YXJ0dXBBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFTdGFydHVwQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFTdGFydHVwQWN0aW9uO1xuICB9XG5cbiAgLy8gdHVubmVsMV92Z3dfaW5zaWRlX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxVmd3SW5zaWRlQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfdmd3X2luc2lkZV9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWwyX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwyQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gdHVubmVsMl9iZ3BfYXNuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHVubmVsMkJncEFzbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfYmdwX2FzbicpO1xuICB9XG5cbiAgLy8gdHVubmVsMl9iZ3BfaG9sZHRpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwyQmdwSG9sZHRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwyX2JncF9ob2xkdGltZScpO1xuICB9XG5cbiAgLy8gdHVubmVsMl9jZ3dfaW5zaWRlX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwyQ2d3SW5zaWRlQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfY2d3X2luc2lkZV9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWwyX2RwZF90aW1lb3V0X2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyRHBkVGltZW91dEFjdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0dW5uZWwyX2RwZF90aW1lb3V0X2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0QWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMkRwZFRpbWVvdXRBY3Rpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJEcGRUaW1lb3V0QWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0QWN0aW9uO1xuICB9XG5cbiAgLy8gdHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMkRwZFRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyRHBkVGltZW91dFNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3R1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJEcGRUaW1lb3V0U2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJEcGRUaW1lb3V0U2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHM7XG4gIH1cblxuICAvLyB0dW5uZWwyX2lrZV92ZXJzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwySWtlVmVyc2lvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMklrZVZlcnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDJfaWtlX3ZlcnNpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwySWtlVmVyc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHVubmVsMklrZVZlcnNpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMklrZVZlcnNpb25zKCkge1xuICAgIHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMklrZVZlcnNpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9ucztcbiAgfVxuXG4gIC8vIHR1bm5lbDJfaW5zaWRlX2NpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwySW5zaWRlQ2lkcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMkluc2lkZUNpZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0dW5uZWwyX2luc2lkZV9jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwySW5zaWRlQ2lkcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHVubmVsMkluc2lkZUNpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwySW5zaWRlQ2lkcigpIHtcbiAgICB0aGlzLl90dW5uZWwySW5zaWRlQ2lkciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMkluc2lkZUNpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMkluc2lkZUNpZHI7XG4gIH1cblxuICAvLyB0dW5uZWwyX2luc2lkZV9pcHY2X2NpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwySW5zaWRlSXB2NkNpZHI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDJJbnNpZGVJcHY2Q2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfaW5zaWRlX2lwdjZfY2lkcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMkluc2lkZUlwdjZDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwySW5zaWRlSXB2NkNpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwySW5zaWRlSXB2NkNpZHIoKSB7XG4gICAgdGhpcy5fdHVubmVsMkluc2lkZUlwdjZDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwySW5zaWRlSXB2NkNpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMkluc2lkZUlwdjZDaWRyO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTFfZGhfZ3JvdXBfbnVtYmVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnM/OiBudW1iZXJbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVycygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnM7XG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMV9lbmNyeXB0aW9uX2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMV9lbmNyeXB0aW9uX2FsZ29yaXRobXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHVubmVsMl9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTFfbGlmZXRpbWVfc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9waGFzZTFfbGlmZXRpbWVfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTJfZGhfZ3JvdXBfbnVtYmVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnM/OiBudW1iZXJbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnM7XG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMl9lbmNyeXB0aW9uX2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMl9lbmNyeXB0aW9uX2FsZ29yaXRobXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHVubmVsMl9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zO1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTJfbGlmZXRpbWVfc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9waGFzZTJfbGlmZXRpbWVfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzO1xuICB9XG5cbiAgLy8gdHVubmVsMl9wcmVzaGFyZWRfa2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlByZXNoYXJlZEtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlByZXNoYXJlZEtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfcHJlc2hhcmVkX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlByZXNoYXJlZEtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHVubmVsMlByZXNoYXJlZEtleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQcmVzaGFyZWRLZXkoKSB7XG4gICAgdGhpcy5fdHVubmVsMlByZXNoYXJlZEtleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlByZXNoYXJlZEtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUHJlc2hhcmVkS2V5O1xuICB9XG5cbiAgLy8gdHVubmVsMl9yZWtleV9mdXp6X3BlcmNlbnRhZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2U/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9yZWtleV9mdXp6X3BlcmNlbnRhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwyUmVrZXlGdXp6UGVyY2VudGFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlKCkge1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUmVrZXlGdXp6UGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUmVrZXlGdXp6UGVyY2VudGFnZTtcbiAgfVxuXG4gIC8vIHR1bm5lbDJfcmVrZXlfbWFyZ2luX3RpbWVfc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdHVubmVsMlJla2V5TWFyZ2luVGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwyX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzKCkge1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcztcbiAgfVxuXG4gIC8vIHR1bm5lbDJfcmVwbGF5X3dpbmRvd19zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJSZXBsYXlXaW5kb3dTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dW5uZWwyUmVwbGF5V2luZG93U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDJfcmVwbGF5X3dpbmRvd19zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUmVwbGF5V2luZG93U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdHVubmVsMlJlcGxheVdpbmRvd1NpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUmVwbGF5V2luZG93U2l6ZSgpIHtcbiAgICB0aGlzLl90dW5uZWwyUmVwbGF5V2luZG93U2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlJlcGxheVdpbmRvd1NpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlJlcGxheVdpbmRvd1NpemU7XG4gIH1cblxuICAvLyB0dW5uZWwyX3N0YXJ0dXBfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJTdGFydHVwQWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWwyU3RhcnR1cEFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfc3RhcnR1cF9hY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJTdGFydHVwQWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwyU3RhcnR1cEFjdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJTdGFydHVwQWN0aW9uKCkge1xuICAgIHRoaXMuX3R1bm5lbDJTdGFydHVwQWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyU3RhcnR1cEFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyU3RhcnR1cEFjdGlvbjtcbiAgfVxuXG4gIC8vIHR1bm5lbDJfdmd3X2luc2lkZV9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHVubmVsMlZnd0luc2lkZUFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0dW5uZWwyX3Znd19pbnNpZGVfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gdHVubmVsX2luc2lkZV9pcF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsSW5zaWRlSXBWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0dW5uZWxJbnNpZGVJcFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0dW5uZWxfaW5zaWRlX2lwX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbEluc2lkZUlwVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHVubmVsSW5zaWRlSXBWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsSW5zaWRlSXBWZXJzaW9uKCkge1xuICAgIHRoaXMuX3R1bm5lbEluc2lkZUlwVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsSW5zaWRlSXBWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbEluc2lkZUlwVmVyc2lvbjtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gdmd3X3RlbGVtZXRyeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgdmd3VGVsZW1ldHJ5KGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFZwbkNvbm5lY3Rpb25WZ3dUZWxlbWV0cnkodGhpcywgJ3Znd190ZWxlbWV0cnknLCBpbmRleCk7XG4gIH1cblxuICAvLyB2cG5fZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cG5HYXRld2F5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZwbkdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Zwbl9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cG5HYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwbkdhdGV3YXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwbkdhdGV3YXlJZCgpIHtcbiAgICB0aGlzLl92cG5HYXRld2F5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwbkdhdGV3YXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cG5HYXRld2F5SWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1c3RvbWVyX2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbWVyR2F0ZXdheUlkKSxcbiAgICAgIGVuYWJsZV9hY2NlbGVyYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVBY2NlbGVyYXRpb24pLFxuICAgICAgbG9jYWxfaXB2NF9uZXR3b3JrX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xvY2FsSXB2NE5ldHdvcmtDaWRyKSxcbiAgICAgIGxvY2FsX2lwdjZfbmV0d29ya19jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sb2NhbElwdjZOZXR3b3JrQ2lkciksXG4gICAgICByZW1vdGVfaXB2NF9uZXR3b3JrX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlbW90ZUlwdjROZXR3b3JrQ2lkciksXG4gICAgICByZW1vdGVfaXB2Nl9uZXR3b3JrX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlbW90ZUlwdjZOZXR3b3JrQ2lkciksXG4gICAgICBzdGF0aWNfcm91dGVzX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdGF0aWNSb3V0ZXNPbmx5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdHJhbnNpdF9nYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90cmFuc2l0R2F0ZXdheUlkKSxcbiAgICAgIHR1bm5lbDFfZHBkX3RpbWVvdXRfYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxRHBkVGltZW91dEFjdGlvbiksXG4gICAgICB0dW5uZWwxX2RwZF90aW1lb3V0X3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcyksXG4gICAgICB0dW5uZWwxX2lrZV92ZXJzaW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdHVubmVsMUlrZVZlcnNpb25zKSxcbiAgICAgIHR1bm5lbDFfaW5zaWRlX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFJbnNpZGVDaWRyKSxcbiAgICAgIHR1bm5lbDFfaW5zaWRlX2lwdjZfY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMUluc2lkZUlwdjZDaWRyKSxcbiAgICAgIHR1bm5lbDFfcGhhc2UxX2RoX2dyb3VwX251bWJlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycyksXG4gICAgICB0dW5uZWwxX3BoYXNlMV9lbmNyeXB0aW9uX2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyksXG4gICAgICB0dW5uZWwxX3BoYXNlMV9pbnRlZ3JpdHlfYWxnb3JpdGhtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMV9waGFzZTFfbGlmZXRpbWVfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcyksXG4gICAgICB0dW5uZWwxX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMpLFxuICAgICAgdHVubmVsMV9waGFzZTJfZW5jcnlwdGlvbl9hbGdvcml0aG1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMV9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDFQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgIHR1bm5lbDFfcGhhc2UyX2xpZmV0aW1lX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHMpLFxuICAgICAgdHVubmVsMV9wcmVzaGFyZWRfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxUHJlc2hhcmVkS2V5KSxcbiAgICAgIHR1bm5lbDFfcmVrZXlfZnV6el9wZXJjZW50YWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZSksXG4gICAgICB0dW5uZWwxX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzKSxcbiAgICAgIHR1bm5lbDFfcmVwbGF5X3dpbmRvd19zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZSksXG4gICAgICB0dW5uZWwxX3N0YXJ0dXBfYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxU3RhcnR1cEFjdGlvbiksXG4gICAgICB0dW5uZWwyX2RwZF90aW1lb3V0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24pLFxuICAgICAgdHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHMpLFxuICAgICAgdHVubmVsMl9pa2VfdmVyc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9ucyksXG4gICAgICB0dW5uZWwyX2luc2lkZV9jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwySW5zaWRlQ2lkciksXG4gICAgICB0dW5uZWwyX2luc2lkZV9pcHY2X2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJJbnNpZGVJcHY2Q2lkciksXG4gICAgICB0dW5uZWwyX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMpLFxuICAgICAgdHVubmVsMl9waGFzZTFfZW5jcnlwdGlvbl9hbGdvcml0aG1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMl9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgIHR1bm5lbDJfcGhhc2UxX2xpZmV0aW1lX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHMpLFxuICAgICAgdHVubmVsMl9waGFzZTJfZGhfZ3JvdXBfbnVtYmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSkodGhpcy5fdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzKSxcbiAgICAgIHR1bm5lbDJfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zKSxcbiAgICAgIHR1bm5lbDJfcGhhc2UyX2ludGVncml0eV9hbGdvcml0aG1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyksXG4gICAgICB0dW5uZWwyX3BoYXNlMl9saWZldGltZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzKSxcbiAgICAgIHR1bm5lbDJfcHJlc2hhcmVkX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlByZXNoYXJlZEtleSksXG4gICAgICB0dW5uZWwyX3Jla2V5X2Z1enpfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UpLFxuICAgICAgdHVubmVsMl9yZWtleV9tYXJnaW5fdGltZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcyksXG4gICAgICB0dW5uZWwyX3JlcGxheV93aW5kb3dfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlJlcGxheVdpbmRvd1NpemUpLFxuICAgICAgdHVubmVsMl9zdGFydHVwX2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlN0YXJ0dXBBY3Rpb24pLFxuICAgICAgdHVubmVsX2luc2lkZV9pcF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWxJbnNpZGVJcFZlcnNpb24pLFxuICAgICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHlwZSksXG4gICAgICB2cG5fZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdnBuR2F0ZXdheUlkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=