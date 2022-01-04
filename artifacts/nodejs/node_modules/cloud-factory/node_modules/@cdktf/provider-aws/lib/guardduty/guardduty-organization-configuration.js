"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuarddutyOrganizationConfiguration = exports.GuarddutyOrganizationConfigurationDatasourcesOutputReference = exports.guarddutyOrganizationConfigurationDatasourcesToTerraform = exports.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference = exports.guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_enable: cdktf.booleanToTerraform(struct.autoEnable),
    };
}
exports.guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform = guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform;
/**
 * @stability stable
 */
class GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
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
        if (this._autoEnable) {
            hasAnyValues = true;
            internalValueResult.autoEnable = this._autoEnable;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoEnable = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoEnable = value.autoEnable;
        }
    }
    /**
     * @stability stable
     */
    get autoEnable() {
        return this.getBooleanAttribute('auto_enable');
    }
    /**
     * @stability stable
     */
    set autoEnable(value) {
        this._autoEnable = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoEnableInput() {
        return this._autoEnable;
    }
}
exports.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference = GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference[_a] = { fqn: "@cdktf/provider-aws.guardduty.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference", version: "3.0.1" };
function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        s3_logs: guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct.s3Logs),
    };
}
exports.guarddutyOrganizationConfigurationDatasourcesToTerraform = guarddutyOrganizationConfigurationDatasourcesToTerraform;
/**
 * @stability stable
 */
class GuarddutyOrganizationConfigurationDatasourcesOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // s3_logs - computed: false, optional: true, required: false
        this._s3Logs = new GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference(this, "s3_logs", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _d, _e;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_d = this._s3Logs) === null || _d === void 0 ? void 0 : _d.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3Logs = (_e = this._s3Logs) === null || _e === void 0 ? void 0 : _e.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._s3Logs.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._s3Logs.internalValue = value.s3Logs;
        }
    }
    /**
     * @stability stable
     */
    get s3Logs() {
        return this._s3Logs;
    }
    /**
     * @stability stable
     */
    putS3Logs(value) {
        this._s3Logs.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3Logs() {
        this._s3Logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3LogsInput() {
        return this._s3Logs.internalValue;
    }
}
exports.GuarddutyOrganizationConfigurationDatasourcesOutputReference = GuarddutyOrganizationConfigurationDatasourcesOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GuarddutyOrganizationConfigurationDatasourcesOutputReference[_b] = { fqn: "@cdktf/provider-aws.guardduty.GuarddutyOrganizationConfigurationDatasourcesOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration}.
 *
 * @stability stable
 */
class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_guardduty_organization_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // datasources - computed: false, optional: true, required: false
        this._datasources = new GuarddutyOrganizationConfigurationDatasourcesOutputReference(this, "datasources", true);
        this._autoEnable = config.autoEnable;
        this._detectorId = config.detectorId;
        this._datasources.internalValue = config.datasources;
    }
    /**
     * @stability stable
     */
    get autoEnable() {
        return this.getBooleanAttribute('auto_enable');
    }
    /**
     * @stability stable
     */
    set autoEnable(value) {
        this._autoEnable = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoEnableInput() {
        return this._autoEnable;
    }
    /**
     * @stability stable
     */
    get detectorId() {
        return this.getStringAttribute('detector_id');
    }
    /**
     * @stability stable
     */
    set detectorId(value) {
        this._detectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get detectorIdInput() {
        return this._detectorId;
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
    get datasources() {
        return this._datasources;
    }
    /**
     * @stability stable
     */
    putDatasources(value) {
        this._datasources.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDatasources() {
        this._datasources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get datasourcesInput() {
        return this._datasources.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            auto_enable: cdktf.booleanToTerraform(this._autoEnable),
            detector_id: cdktf.stringToTerraform(this._detectorId),
            datasources: guarddutyOrganizationConfigurationDatasourcesToTerraform(this._datasources.internalValue),
        };
    }
}
exports.GuarddutyOrganizationConfiguration = GuarddutyOrganizationConfiguration;
_c = JSII_RTTI_SYMBOL_1;
GuarddutyOrganizationConfiguration[_c] = { fqn: "@cdktf/provider-aws.guardduty.GuarddutyOrganizationConfiguration", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
GuarddutyOrganizationConfiguration.tfResourceType = "aws_guardduty_organization_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VhcmRkdXR5LW9yZ2FuaXphdGlvbi1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2d1YXJkZHV0eS9ndWFyZGR1dHktb3JnYW5pemF0aW9uLWNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFnQi9CLFNBQWdCLDhEQUE4RCxDQUFDLE1BQWlJO0lBQzlNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQzFELENBQUE7QUFDSCxDQUFDO0FBUkQsd0lBUUM7Ozs7QUFFRCxNQUFhLGtFQUFtRSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXpHLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBc0U7UUFDN0YsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBUSxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFrQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7QUF4Q0gsZ0pBeUNDOzs7QUFNRCxTQUFnQix3REFBd0QsQ0FBQyxNQUFxSDtJQUM1TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSw4REFBOEQsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ3hGLENBQUE7QUFDSCxDQUFDO0FBUkQsNEhBUUM7Ozs7QUFFRCxNQUFhLDREQUE2RCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSW5HLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQTRCOUIsNkRBQTZEO1FBQ3JELFlBQU8sR0FBRyxJQUFJLGtFQUFrRSxDQUFDLElBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUF4QnZILENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsVUFBSSxJQUFJLENBQUMsT0FBTywwQ0FBRSxhQUFhLEVBQUU7WUFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLFNBQUcsSUFBSSxDQUFDLE9BQU8sMENBQUUsYUFBYSxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWdFO1FBQ3ZGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDeEM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDTSxTQUFTLENBQUMsS0FBMEQ7UUFDekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3BDLENBQUM7O0FBM0NILG9JQTRDQzs7Ozs7Ozs7QUFHRCxNQUFhLGtDQUFtQyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPN0UsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWdEO1FBQy9GLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMENBQTBDO1lBQ2pFLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUF5Q0wsaUVBQWlFO1FBQ3pELGlCQUFZLEdBQUcsSUFBSSw0REFBNEQsQ0FBQyxJQUFXLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBekN4SCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQzs7OztJQVFELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQVEsQ0FBQztJQUN4RCxDQUFDOzs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBa0M7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGNBQWMsQ0FBQyxLQUFvRDtRQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsV0FBVyxFQUFFLHdEQUF3RCxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1NBQ3ZHLENBQUM7SUFDSixDQUFDOztBQXpGSCxnRkEwRkM7OztBQXhGQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGlEQUFjLEdBQVcsMENBQTBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEd1YXJkZHV0eU9yZ2FuaXphdGlvbkNvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9FbmFibGU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldGVjdG9ySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGFzb3VyY2VzPzogR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzO1xufVxuZXhwb3J0IGludGVyZmFjZSBHdWFyZGR1dHlPcmdhbml6YXRpb25Db25maWd1cmF0aW9uRGF0YXNvdXJjZXNTM0xvZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b0VuYWJsZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzUzNMb2dzVG9UZXJyYWZvcm0oc3RydWN0PzogR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzUzNMb2dzT3V0cHV0UmVmZXJlbmNlIHwgR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzUzNMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXV0b19lbmFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmF1dG9FbmFibGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHdWFyZGR1dHlPcmdhbml6YXRpb25Db25maWd1cmF0aW9uRGF0YXNvdXJjZXNTM0xvZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzUzNMb2dzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRvRW5hYmxlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRvRW5hYmxlID0gdGhpcy5fYXV0b0VuYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEd1YXJkZHV0eU9yZ2FuaXphdGlvbkNvbmZpZ3VyYXRpb25EYXRhc291cmNlc1MzTG9ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F1dG9FbmFibGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dG9FbmFibGUgPSB2YWx1ZS5hdXRvRW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF1dG9fZW5hYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dG9FbmFibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9FbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19lbmFibGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvRW5hYmxlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvRW5hYmxlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9FbmFibGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0VuYWJsZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHdWFyZGR1dHlPcmdhbml6YXRpb25Db25maWd1cmF0aW9uRGF0YXNvdXJjZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNMb2dzPzogR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzUzNMb2dzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzT3V0cHV0UmVmZXJlbmNlIHwgR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgczNfbG9nczogZ3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzUzNMb2dzVG9UZXJyYWZvcm0oc3RydWN0IS5zM0xvZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHdWFyZGR1dHlPcmdhbml6YXRpb25Db25maWd1cmF0aW9uRGF0YXNvdXJjZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zM0xvZ3M/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzTG9ncyA9IHRoaXMuX3MzTG9ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEd1YXJkZHV0eU9yZ2FuaXphdGlvbkNvbmZpZ3VyYXRpb25EYXRhc291cmNlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3MzTG9ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zM0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnMzTG9ncztcbiAgICB9XG4gIH1cblxuICAvLyBzM19sb2dzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzTG9ncyA9IG5ldyBHdWFyZGR1dHlPcmdhbml6YXRpb25Db25maWd1cmF0aW9uRGF0YXNvdXJjZXNTM0xvZ3NPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiczNfbG9nc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzM0xvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzTG9ncztcbiAgfVxuICBwdWJsaWMgcHV0UzNMb2dzKHZhbHVlOiBHdWFyZGR1dHlPcmdhbml6YXRpb25Db25maWd1cmF0aW9uRGF0YXNvdXJjZXNTM0xvZ3MpIHtcbiAgICB0aGlzLl9zM0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzTG9ncygpIHtcbiAgICB0aGlzLl9zM0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNMb2dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzTG9ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19ndWFyZGR1dHlfb3JnYW5pemF0aW9uX2NvbmZpZ3VyYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2d1YXJkZHV0eV9vcmdhbml6YXRpb25fY29uZmlndXJhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hdXRvRW5hYmxlID0gY29uZmlnLmF1dG9FbmFibGU7XG4gICAgdGhpcy5fZGV0ZWN0b3JJZCA9IGNvbmZpZy5kZXRlY3RvcklkO1xuICAgIHRoaXMuX2RhdGFzb3VyY2VzLmludGVybmFsVmFsdWUgPSBjb25maWcuZGF0YXNvdXJjZXM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGF1dG9fZW5hYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dG9FbmFibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9FbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19lbmFibGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvRW5hYmxlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvRW5hYmxlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9FbmFibGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0VuYWJsZTtcbiAgfVxuXG4gIC8vIGRldGVjdG9yX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RldGVjdG9ySWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRldGVjdG9ySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXRlY3Rvcl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV0ZWN0b3JJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV0ZWN0b3JJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXRlY3RvcklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldGVjdG9ySWQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gZGF0YXNvdXJjZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YXNvdXJjZXMgPSBuZXcgR3VhcmRkdXR5T3JnYW5pemF0aW9uQ29uZmlndXJhdGlvbkRhdGFzb3VyY2VzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImRhdGFzb3VyY2VzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRhdGFzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhc291cmNlcztcbiAgfVxuICBwdWJsaWMgcHV0RGF0YXNvdXJjZXModmFsdWU6IEd1YXJkZHV0eU9yZ2FuaXphdGlvbkNvbmZpZ3VyYXRpb25EYXRhc291cmNlcykge1xuICAgIHRoaXMuX2RhdGFzb3VyY2VzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhc291cmNlcygpIHtcbiAgICB0aGlzLl9kYXRhc291cmNlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhc291cmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhc291cmNlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhdXRvX2VuYWJsZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2F1dG9FbmFibGUpLFxuICAgICAgZGV0ZWN0b3JfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RldGVjdG9ySWQpLFxuICAgICAgZGF0YXNvdXJjZXM6IGd1YXJkZHV0eU9yZ2FuaXphdGlvbkNvbmZpZ3VyYXRpb25EYXRhc291cmNlc1RvVGVycmFmb3JtKHRoaXMuX2RhdGFzb3VyY2VzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==