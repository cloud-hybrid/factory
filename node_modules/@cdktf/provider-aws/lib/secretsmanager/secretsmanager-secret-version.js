"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretsmanagerSecretVersion = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html aws_secretsmanager_secret_version}.
 *
 * @stability stable
 */
class SecretsmanagerSecretVersion extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html aws_secretsmanager_secret_version} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_secretsmanager_secret_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._secretBinary = config.secretBinary;
        this._secretId = config.secretId;
        this._secretString = config.secretString;
        this._versionStages = config.versionStages;
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
    get secretBinary() {
        return this.getStringAttribute('secret_binary');
    }
    /**
     * @stability stable
     */
    set secretBinary(value) {
        this._secretBinary = value;
    }
    /**
     * @stability stable
     */
    resetSecretBinary() {
        this._secretBinary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretBinaryInput() {
        return this._secretBinary;
    }
    /**
     * @stability stable
     */
    get secretId() {
        return this.getStringAttribute('secret_id');
    }
    /**
     * @stability stable
     */
    set secretId(value) {
        this._secretId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretIdInput() {
        return this._secretId;
    }
    /**
     * @stability stable
     */
    get secretString() {
        return this.getStringAttribute('secret_string');
    }
    /**
     * @stability stable
     */
    set secretString(value) {
        this._secretString = value;
    }
    /**
     * @stability stable
     */
    resetSecretString() {
        this._secretString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretStringInput() {
        return this._secretString;
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
    get versionStages() {
        return this.getListAttribute('version_stages');
    }
    /**
     * @stability stable
     */
    set versionStages(value) {
        this._versionStages = value;
    }
    /**
     * @stability stable
     */
    resetVersionStages() {
        this._versionStages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get versionStagesInput() {
        return this._versionStages;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            secret_binary: cdktf.stringToTerraform(this._secretBinary),
            secret_id: cdktf.stringToTerraform(this._secretId),
            secret_string: cdktf.stringToTerraform(this._secretString),
            version_stages: cdktf.listMapper(cdktf.stringToTerraform)(this._versionStages),
        };
    }
}
exports.SecretsmanagerSecretVersion = SecretsmanagerSecretVersion;
_a = JSII_RTTI_SYMBOL_1;
SecretsmanagerSecretVersion[_a] = { fqn: "@cdktf/provider-aws.secretsmanager.SecretsmanagerSecretVersion", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SecretsmanagerSecretVersion.tfResourceType = "aws_secretsmanager_secret_version";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjcmV0c21hbmFnZXItc2VjcmV0LXZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VjcmV0c21hbmFnZXIvc2VjcmV0c21hbmFnZXItc2VjcmV0LXZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQWUvQixNQUFhLDJCQUE0QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPdEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXlDO1FBQ3hGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsbUNBQW1DO1lBQzFELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlEQUF5RDs7OztJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFlO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsY0FBYyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUMvRSxDQUFDO0lBQ0osQ0FBQzs7QUF4SEgsa0VBeUhDOzs7QUF2SEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywwQ0FBYyxHQUFXLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBTZWNyZXRzbWFuYWdlclNlY3JldFZlcnNpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjcmV0QmluYXJ5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjcmV0SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjcmV0U3RyaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb25TdGFnZXM/OiBzdHJpbmdbXTtcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgU2VjcmV0c21hbmFnZXJTZWNyZXRWZXJzaW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3NlY3JldHNtYW5hZ2VyX3NlY3JldF92ZXJzaW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNlY3JldHNtYW5hZ2VyU2VjcmV0VmVyc2lvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3NlY3JldHNtYW5hZ2VyX3NlY3JldF92ZXJzaW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX3NlY3JldEJpbmFyeSA9IGNvbmZpZy5zZWNyZXRCaW5hcnk7XG4gICAgdGhpcy5fc2VjcmV0SWQgPSBjb25maWcuc2VjcmV0SWQ7XG4gICAgdGhpcy5fc2VjcmV0U3RyaW5nID0gY29uZmlnLnNlY3JldFN0cmluZztcbiAgICB0aGlzLl92ZXJzaW9uU3RhZ2VzID0gY29uZmlnLnZlcnNpb25TdGFnZXM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHNlY3JldF9iaW5hcnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjcmV0QmluYXJ5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWNyZXRCaW5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfYmluYXJ5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWNyZXRCaW5hcnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlY3JldEJpbmFyeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3JldEJpbmFyeSgpIHtcbiAgICB0aGlzLl9zZWNyZXRCaW5hcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3JldEJpbmFyeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNyZXRCaW5hcnk7XG4gIH1cblxuICAvLyBzZWNyZXRfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VjcmV0SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3JldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWNyZXRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjcmV0SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjcmV0SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjcmV0SWQ7XG4gIH1cblxuICAvLyBzZWNyZXRfc3RyaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3JldFN0cmluZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VjcmV0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X3N0cmluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjcmV0U3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNyZXRTdHJpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWNyZXRTdHJpbmcoKSB7XG4gICAgdGhpcy5fc2VjcmV0U3RyaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXRTdHJpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjcmV0U3RyaW5nO1xuICB9XG5cbiAgLy8gdmVyc2lvbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlcnNpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb25faWQnKTtcbiAgfVxuXG4gIC8vIHZlcnNpb25fc3RhZ2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvblN0YWdlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB2ZXJzaW9uU3RhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZlcnNpb25fc3RhZ2VzJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uU3RhZ2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZlcnNpb25TdGFnZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uU3RhZ2VzKCkge1xuICAgIHRoaXMuX3ZlcnNpb25TdGFnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcnNpb25TdGFnZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvblN0YWdlcztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VjcmV0X2JpbmFyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VjcmV0QmluYXJ5KSxcbiAgICAgIHNlY3JldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VjcmV0SWQpLFxuICAgICAgc2VjcmV0X3N0cmluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VjcmV0U3RyaW5nKSxcbiAgICAgIHZlcnNpb25fc3RhZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl92ZXJzaW9uU3RhZ2VzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=