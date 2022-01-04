"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsRdsOrderableDbInstance = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance}.
 *
 * @stability stable
 */
class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_rds_orderable_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._availabilityZoneGroup = config.availabilityZoneGroup;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._instanceClass = config.instanceClass;
        this._licenseModel = config.licenseModel;
        this._preferredEngineVersions = config.preferredEngineVersions;
        this._preferredInstanceClasses = config.preferredInstanceClasses;
        this._storageType = config.storageType;
        this._supportsEnhancedMonitoring = config.supportsEnhancedMonitoring;
        this._supportsGlobalDatabases = config.supportsGlobalDatabases;
        this._supportsIamDatabaseAuthentication = config.supportsIamDatabaseAuthentication;
        this._supportsIops = config.supportsIops;
        this._supportsKerberosAuthentication = config.supportsKerberosAuthentication;
        this._supportsPerformanceInsights = config.supportsPerformanceInsights;
        this._supportsStorageAutoscaling = config.supportsStorageAutoscaling;
        this._supportsStorageEncryption = config.supportsStorageEncryption;
        this._vpc = config.vpc;
    }
    /**
     * @stability stable
     */
    get availabilityZoneGroup() {
        return this.getStringAttribute('availability_zone_group');
    }
    /**
     * @stability stable
     */
    set availabilityZoneGroup(value) {
        this._availabilityZoneGroup = value;
    }
    /**
     * @stability stable
     */
    resetAvailabilityZoneGroup() {
        this._availabilityZoneGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get availabilityZoneGroupInput() {
        return this._availabilityZoneGroup;
    }
    // availability_zones - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    /**
     * @stability stable
     */
    get engine() {
        return this.getStringAttribute('engine');
    }
    /**
     * @stability stable
     */
    set engine(value) {
        this._engine = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineInput() {
        return this._engine;
    }
    /**
     * @stability stable
     */
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    /**
     * @stability stable
     */
    set engineVersion(value) {
        this._engineVersion = value;
    }
    /**
     * @stability stable
     */
    resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineVersionInput() {
        return this._engineVersion;
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
    get instanceClass() {
        return this.getStringAttribute('instance_class');
    }
    /**
     * @stability stable
     */
    set instanceClass(value) {
        this._instanceClass = value;
    }
    /**
     * @stability stable
     */
    resetInstanceClass() {
        this._instanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceClassInput() {
        return this._instanceClass;
    }
    /**
     * @stability stable
     */
    get licenseModel() {
        return this.getStringAttribute('license_model');
    }
    /**
     * @stability stable
     */
    set licenseModel(value) {
        this._licenseModel = value;
    }
    /**
     * @stability stable
     */
    resetLicenseModel() {
        this._licenseModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get licenseModelInput() {
        return this._licenseModel;
    }
    // max_iops_per_db_instance - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get maxIopsPerDbInstance() {
        return this.getNumberAttribute('max_iops_per_db_instance');
    }
    // max_iops_per_gib - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get maxIopsPerGib() {
        return this.getNumberAttribute('max_iops_per_gib');
    }
    // max_storage_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get maxStorageSize() {
        return this.getNumberAttribute('max_storage_size');
    }
    // min_iops_per_db_instance - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get minIopsPerDbInstance() {
        return this.getNumberAttribute('min_iops_per_db_instance');
    }
    // min_iops_per_gib - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get minIopsPerGib() {
        return this.getNumberAttribute('min_iops_per_gib');
    }
    // min_storage_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get minStorageSize() {
        return this.getNumberAttribute('min_storage_size');
    }
    // multi_az_capable - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get multiAzCapable() {
        return this.getBooleanAttribute('multi_az_capable');
    }
    // outpost_capable - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get outpostCapable() {
        return this.getBooleanAttribute('outpost_capable');
    }
    /**
     * @stability stable
     */
    get preferredEngineVersions() {
        return this.getListAttribute('preferred_engine_versions');
    }
    /**
     * @stability stable
     */
    set preferredEngineVersions(value) {
        this._preferredEngineVersions = value;
    }
    /**
     * @stability stable
     */
    resetPreferredEngineVersions() {
        this._preferredEngineVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferredEngineVersionsInput() {
        return this._preferredEngineVersions;
    }
    /**
     * @stability stable
     */
    get preferredInstanceClasses() {
        return this.getListAttribute('preferred_instance_classes');
    }
    /**
     * @stability stable
     */
    set preferredInstanceClasses(value) {
        this._preferredInstanceClasses = value;
    }
    /**
     * @stability stable
     */
    resetPreferredInstanceClasses() {
        this._preferredInstanceClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferredInstanceClassesInput() {
        return this._preferredInstanceClasses;
    }
    // read_replica_capable - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get readReplicaCapable() {
        return this.getBooleanAttribute('read_replica_capable');
    }
    /**
     * @stability stable
     */
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    /**
     * @stability stable
     */
    set storageType(value) {
        this._storageType = value;
    }
    /**
     * @stability stable
     */
    resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageTypeInput() {
        return this._storageType;
    }
    // supported_engine_modes - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedEngineModes() {
        return this.getListAttribute('supported_engine_modes');
    }
    /**
     * @stability stable
     */
    get supportsEnhancedMonitoring() {
        return this.getBooleanAttribute('supports_enhanced_monitoring');
    }
    /**
     * @stability stable
     */
    set supportsEnhancedMonitoring(value) {
        this._supportsEnhancedMonitoring = value;
    }
    /**
     * @stability stable
     */
    resetSupportsEnhancedMonitoring() {
        this._supportsEnhancedMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportsEnhancedMonitoringInput() {
        return this._supportsEnhancedMonitoring;
    }
    /**
     * @stability stable
     */
    get supportsGlobalDatabases() {
        return this.getBooleanAttribute('supports_global_databases');
    }
    /**
     * @stability stable
     */
    set supportsGlobalDatabases(value) {
        this._supportsGlobalDatabases = value;
    }
    /**
     * @stability stable
     */
    resetSupportsGlobalDatabases() {
        this._supportsGlobalDatabases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportsGlobalDatabasesInput() {
        return this._supportsGlobalDatabases;
    }
    /**
     * @stability stable
     */
    get supportsIamDatabaseAuthentication() {
        return this.getBooleanAttribute('supports_iam_database_authentication');
    }
    /**
     * @stability stable
     */
    set supportsIamDatabaseAuthentication(value) {
        this._supportsIamDatabaseAuthentication = value;
    }
    /**
     * @stability stable
     */
    resetSupportsIamDatabaseAuthentication() {
        this._supportsIamDatabaseAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportsIamDatabaseAuthenticationInput() {
        return this._supportsIamDatabaseAuthentication;
    }
    /**
     * @stability stable
     */
    get supportsIops() {
        return this.getBooleanAttribute('supports_iops');
    }
    /**
     * @stability stable
     */
    set supportsIops(value) {
        this._supportsIops = value;
    }
    /**
     * @stability stable
     */
    resetSupportsIops() {
        this._supportsIops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportsIopsInput() {
        return this._supportsIops;
    }
    /**
     * @stability stable
     */
    get supportsKerberosAuthentication() {
        return this.getBooleanAttribute('supports_kerberos_authentication');
    }
    /**
     * @stability stable
     */
    set supportsKerberosAuthentication(value) {
        this._supportsKerberosAuthentication = value;
    }
    /**
     * @stability stable
     */
    resetSupportsKerberosAuthentication() {
        this._supportsKerberosAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportsKerberosAuthenticationInput() {
        return this._supportsKerberosAuthentication;
    }
    /**
     * @stability stable
     */
    get supportsPerformanceInsights() {
        return this.getBooleanAttribute('supports_performance_insights');
    }
    /**
     * @stability stable
     */
    set supportsPerformanceInsights(value) {
        this._supportsPerformanceInsights = value;
    }
    /**
     * @stability stable
     */
    resetSupportsPerformanceInsights() {
        this._supportsPerformanceInsights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportsPerformanceInsightsInput() {
        return this._supportsPerformanceInsights;
    }
    /**
     * @stability stable
     */
    get supportsStorageAutoscaling() {
        return this.getBooleanAttribute('supports_storage_autoscaling');
    }
    /**
     * @stability stable
     */
    set supportsStorageAutoscaling(value) {
        this._supportsStorageAutoscaling = value;
    }
    /**
     * @stability stable
     */
    resetSupportsStorageAutoscaling() {
        this._supportsStorageAutoscaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportsStorageAutoscalingInput() {
        return this._supportsStorageAutoscaling;
    }
    /**
     * @stability stable
     */
    get supportsStorageEncryption() {
        return this.getBooleanAttribute('supports_storage_encryption');
    }
    /**
     * @stability stable
     */
    set supportsStorageEncryption(value) {
        this._supportsStorageEncryption = value;
    }
    /**
     * @stability stable
     */
    resetSupportsStorageEncryption() {
        this._supportsStorageEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportsStorageEncryptionInput() {
        return this._supportsStorageEncryption;
    }
    /**
     * @stability stable
     */
    get vpc() {
        return this.getBooleanAttribute('vpc');
    }
    /**
     * @stability stable
     */
    set vpc(value) {
        this._vpc = value;
    }
    /**
     * @stability stable
     */
    resetVpc() {
        this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcInput() {
        return this._vpc;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            availability_zone_group: cdktf.stringToTerraform(this._availabilityZoneGroup),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            preferred_engine_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredEngineVersions),
            preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
            storage_type: cdktf.stringToTerraform(this._storageType),
            supports_enhanced_monitoring: cdktf.booleanToTerraform(this._supportsEnhancedMonitoring),
            supports_global_databases: cdktf.booleanToTerraform(this._supportsGlobalDatabases),
            supports_iam_database_authentication: cdktf.booleanToTerraform(this._supportsIamDatabaseAuthentication),
            supports_iops: cdktf.booleanToTerraform(this._supportsIops),
            supports_kerberos_authentication: cdktf.booleanToTerraform(this._supportsKerberosAuthentication),
            supports_performance_insights: cdktf.booleanToTerraform(this._supportsPerformanceInsights),
            supports_storage_autoscaling: cdktf.booleanToTerraform(this._supportsStorageAutoscaling),
            supports_storage_encryption: cdktf.booleanToTerraform(this._supportsStorageEncryption),
            vpc: cdktf.booleanToTerraform(this._vpc),
        };
    }
}
exports.DataAwsRdsOrderableDbInstance = DataAwsRdsOrderableDbInstance;
_a = JSII_RTTI_SYMBOL_1;
DataAwsRdsOrderableDbInstance[_a] = { fqn: "@cdktf/provider-aws.rds.DataAwsRdsOrderableDbInstance", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsRdsOrderableDbInstance.tfResourceType = "aws_rds_orderable_db_instance";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcmRzLW9yZGVyYWJsZS1kYi1pbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZHMvZGF0YS1hd3MtcmRzLW9yZGVyYWJsZS1kYi1pbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBeUMvQixNQUFhLDZCQUE4QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFPMUUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTJDO1FBQzFGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsK0JBQStCO1lBQ3RELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQy9ELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7UUFDakUsSUFBSSxDQUFDLFlB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QUEyQixDQUFDO1lBQ3hGLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDbEYsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztZQUN2RyxhQUFhLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0QsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztZQUNoRyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDO1lBQzFGLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7WUFDeEYsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUN0RixHQUFHLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDekMsQ0FBQztJQUNKLENBQUM7O0FBL1lILHNFQWdaQzs7O0FBOVlDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNENBQWMsR0FBVywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2VDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZUdyb3VwPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZ2luZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmdpbmVWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZUNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGljZW5zZU1vZGVsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZmVycmVkRW5naW5lVmVyc2lvbnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdXBwb3J0c0VuaGFuY2VkTW9uaXRvcmluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1cHBvcnRzR2xvYmFsRGF0YWJhc2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1cHBvcnRzSW9wcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdXBwb3J0c1BlcmZvcm1hbmNlSW5zaWdodHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwYz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzUmRzT3JkZXJhYmxlRGJJbnN0YW5jZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3Jkc19vcmRlcmFibGVfZGJfaW5zdGFuY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZUdyb3VwID0gY29uZmlnLmF2YWlsYWJpbGl0eVpvbmVHcm91cDtcbiAgICB0aGlzLl9lbmdpbmUgPSBjb25maWcuZW5naW5lO1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSBjb25maWcuZW5naW5lVmVyc2lvbjtcbiAgICB0aGlzLl9pbnN0YW5jZUNsYXNzID0gY29uZmlnLmluc3RhbmNlQ2xhc3M7XG4gICAgdGhpcy5fbGljZW5zZU1vZGVsID0gY29uZmlnLmxpY2Vuc2VNb2RlbDtcbiAgICB0aGlzLl9wcmVmZXJyZWRFbmdpbmVWZXJzaW9ucyA9IGNvbmZpZy5wcmVmZXJyZWRFbmdpbmVWZXJzaW9ucztcbiAgICB0aGlzLl9wcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXMgPSBjb25maWcucHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzO1xuICAgIHRoaXMuX3N0b3JhZ2VUeXBlID0gY29uZmlnLnN0b3JhZ2VUeXBlO1xuICAgIHRoaXMuX3N1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nID0gY29uZmlnLnN1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nO1xuICAgIHRoaXMuX3N1cHBvcnRzR2xvYmFsRGF0YWJhc2VzID0gY29uZmlnLnN1cHBvcnRzR2xvYmFsRGF0YWJhc2VzO1xuICAgIHRoaXMuX3N1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbiA9IGNvbmZpZy5zdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb247XG4gICAgdGhpcy5fc3VwcG9ydHNJb3BzID0gY29uZmlnLnN1cHBvcnRzSW9wcztcbiAgICB0aGlzLl9zdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb24gPSBjb25maWcuc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uO1xuICAgIHRoaXMuX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cyA9IGNvbmZpZy5zdXBwb3J0c1BlcmZvcm1hbmNlSW5zaWdodHM7XG4gICAgdGhpcy5fc3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmcgPSBjb25maWcuc3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmc7XG4gICAgdGhpcy5fc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbiA9IGNvbmZpZy5zdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uO1xuICAgIHRoaXMuX3ZwYyA9IGNvbmZpZy52cGM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lX2dyb3VwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZhaWxhYmlsaXR5Wm9uZUdyb3VwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZV9ncm91cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZUdyb3VwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lR3JvdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lR3JvdXAoKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZUdyb3VwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lR3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZUdyb3VwO1xuICB9XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmVzJyk7XG4gIH1cblxuICAvLyBlbmdpbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5naW5lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZ2luZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmU7XG4gIH1cblxuICAvLyBlbmdpbmVfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuZ2luZVZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5naW5lVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZ2luZVZlcnNpb24oKSB7XG4gICAgdGhpcy5fZW5naW5lVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmVWZXJzaW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2NsYXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VDbGFzcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2NsYXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZUNsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUNsYXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VDbGFzcygpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUNsYXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUNsYXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlQ2xhc3M7XG4gIH1cblxuICAvLyBsaWNlbnNlX21vZGVsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGljZW5zZU1vZGVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsaWNlbnNlTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsaWNlbnNlX21vZGVsJyk7XG4gIH1cbiAgcHVibGljIHNldCBsaWNlbnNlTW9kZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xpY2Vuc2VNb2RlbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExpY2Vuc2VNb2RlbCgpIHtcbiAgICB0aGlzLl9saWNlbnNlTW9kZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpY2Vuc2VNb2RlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saWNlbnNlTW9kZWw7XG4gIH1cblxuICAvLyBtYXhfaW9wc19wZXJfZGJfaW5zdGFuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhJb3BzUGVyRGJJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9pb3BzX3Blcl9kYl9pbnN0YW5jZScpO1xuICB9XG5cbiAgLy8gbWF4X2lvcHNfcGVyX2dpYiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heElvcHNQZXJHaWIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfaW9wc19wZXJfZ2liJyk7XG4gIH1cblxuICAvLyBtYXhfc3RvcmFnZV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4U3RvcmFnZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfc3RvcmFnZV9zaXplJyk7XG4gIH1cblxuICAvLyBtaW5faW9wc19wZXJfZGJfaW5zdGFuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5Jb3BzUGVyRGJJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9pb3BzX3Blcl9kYl9pbnN0YW5jZScpO1xuICB9XG5cbiAgLy8gbWluX2lvcHNfcGVyX2dpYiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pbklvcHNQZXJHaWIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5faW9wc19wZXJfZ2liJyk7XG4gIH1cblxuICAvLyBtaW5fc3RvcmFnZV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWluU3RvcmFnZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fc3RvcmFnZV9zaXplJyk7XG4gIH1cblxuICAvLyBtdWx0aV9hel9jYXBhYmxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbXVsdGlBekNhcGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbXVsdGlfYXpfY2FwYWJsZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG91dHBvc3RfY2FwYWJsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG91dHBvc3RDYXBhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ291dHBvc3RfY2FwYWJsZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHByZWZlcnJlZF9lbmdpbmVfdmVyc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZmVycmVkRW5naW5lVmVyc2lvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkRW5naW5lVmVyc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncHJlZmVycmVkX2VuZ2luZV92ZXJzaW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZmVycmVkRW5naW5lVmVyc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkRW5naW5lVmVyc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmZXJyZWRFbmdpbmVWZXJzaW9ucygpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRFbmdpbmVWZXJzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkRW5naW5lVmVyc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmVycmVkRW5naW5lVmVyc2lvbnM7XG4gIH1cblxuICAvLyBwcmVmZXJyZWRfaW5zdGFuY2VfY2xhc3NlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ByZWZlcnJlZF9pbnN0YW5jZV9jbGFzc2VzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzKCkge1xuICAgIHRoaXMuX3ByZWZlcnJlZEluc3RhbmNlQ2xhc3NlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcnJlZEluc3RhbmNlQ2xhc3NlcztcbiAgfVxuXG4gIC8vIHJlYWRfcmVwbGljYV9jYXBhYmxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhZFJlcGxpY2FDYXBhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlYWRfcmVwbGljYV9jYXBhYmxlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RvcmFnZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RvcmFnZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RvcmFnZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9yYWdlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdG9yYWdlVHlwZSgpIHtcbiAgICB0aGlzLl9zdG9yYWdlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZVR5cGU7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfZW5naW5lX21vZGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkRW5naW5lTW9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX2VuZ2luZV9tb2RlcycpO1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfZW5oYW5jZWRfbW9uaXRvcmluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzdXBwb3J0c0VuaGFuY2VkTW9uaXRvcmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19lbmhhbmNlZF9tb25pdG9yaW5nJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcoKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nO1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfZ2xvYmFsX2RhdGFiYXNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzR2xvYmFsRGF0YWJhc2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzdXBwb3J0c0dsb2JhbERhdGFiYXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19nbG9iYWxfZGF0YWJhc2VzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N1cHBvcnRzR2xvYmFsRGF0YWJhc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNHbG9iYWxEYXRhYmFzZXMoKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzR2xvYmFsRGF0YWJhc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzR2xvYmFsRGF0YWJhc2VzO1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uO1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfaW9wcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzSW9wcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNJb3BzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHBvcnRzX2lvcHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0c0lvcHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N1cHBvcnRzSW9wcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRzSW9wcygpIHtcbiAgICB0aGlzLl9zdXBwb3J0c0lvcHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzSW9wc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c0lvcHM7XG4gIH1cblxuICAvLyBzdXBwb3J0c19rZXJiZXJvc19hdXRoZW50aWNhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHBvcnRzX2tlcmJlcm9zX2F1dGhlbnRpY2F0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uO1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfcGVyZm9ybWFuY2VfaW5zaWdodHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c1BlcmZvcm1hbmNlSW5zaWdodHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19wZXJmb3JtYW5jZV9pbnNpZ2h0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cztcbiAgfVxuXG4gIC8vIHN1cHBvcnRzX3N0b3JhZ2VfYXV0b3NjYWxpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfc3RvcmFnZV9hdXRvc2NhbGluZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZztcbiAgfVxuXG4gIC8vIHN1cHBvcnRzX3N0b3JhZ2VfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfc3RvcmFnZV9lbmNyeXB0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb24oKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uO1xuICB9XG5cbiAgLy8gdnBjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB2cGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndnBjJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl92cGMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGMoKSB7XG4gICAgdGhpcy5fdnBjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhdmFpbGFiaWxpdHlfem9uZV9ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXZhaWxhYmlsaXR5Wm9uZUdyb3VwKSxcbiAgICAgIGVuZ2luZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5naW5lKSxcbiAgICAgIGVuZ2luZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVWZXJzaW9uKSxcbiAgICAgIGluc3RhbmNlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZUNsYXNzKSxcbiAgICAgIGxpY2Vuc2VfbW9kZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xpY2Vuc2VNb2RlbCksXG4gICAgICBwcmVmZXJyZWRfZW5naW5lX3ZlcnNpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9wcmVmZXJyZWRFbmdpbmVWZXJzaW9ucyksXG4gICAgICBwcmVmZXJyZWRfaW5zdGFuY2VfY2xhc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzKSxcbiAgICAgIHN0b3JhZ2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RvcmFnZVR5cGUpLFxuICAgICAgc3VwcG9ydHNfZW5oYW5jZWRfbW9uaXRvcmluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nKSxcbiAgICAgIHN1cHBvcnRzX2dsb2JhbF9kYXRhYmFzZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c0dsb2JhbERhdGFiYXNlcyksXG4gICAgICBzdXBwb3J0c19pYW1fZGF0YWJhc2VfYXV0aGVudGljYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24pLFxuICAgICAgc3VwcG9ydHNfaW9wczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzSW9wcyksXG4gICAgICBzdXBwb3J0c19rZXJiZXJvc19hdXRoZW50aWNhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbiksXG4gICAgICBzdXBwb3J0c19wZXJmb3JtYW5jZV9pbnNpZ2h0czogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cyksXG4gICAgICBzdXBwb3J0c19zdG9yYWdlX2F1dG9zY2FsaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmcpLFxuICAgICAgc3VwcG9ydHNfc3RvcmFnZV9lbmNyeXB0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbiksXG4gICAgICB2cGM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl92cGMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==