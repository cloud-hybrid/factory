"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferAccess = exports.TransferAccessPosixProfileOutputReference = exports.transferAccessPosixProfileToTerraform = exports.transferAccessHomeDirectoryMappingsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function transferAccessHomeDirectoryMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entry: cdktf.stringToTerraform(struct.entry),
        target: cdktf.stringToTerraform(struct.target),
    };
}
exports.transferAccessHomeDirectoryMappingsToTerraform = transferAccessHomeDirectoryMappingsToTerraform;
function transferAccessPosixProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        gid: cdktf.numberToTerraform(struct.gid),
        secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct.secondaryGids),
        uid: cdktf.numberToTerraform(struct.uid),
    };
}
exports.transferAccessPosixProfileToTerraform = transferAccessPosixProfileToTerraform;
/**
 * @stability stable
 */
class TransferAccessPosixProfileOutputReference extends cdktf.ComplexObject {
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
        if (this._gid) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        if (this._secondaryGids) {
            hasAnyValues = true;
            internalValueResult.secondaryGids = this._secondaryGids;
        }
        if (this._uid) {
            hasAnyValues = true;
            internalValueResult.uid = this._uid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._gid = undefined;
            this._secondaryGids = undefined;
            this._uid = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._gid = value.gid;
            this._secondaryGids = value.secondaryGids;
            this._uid = value.uid;
        }
    }
    /**
     * @stability stable
     */
    get gid() {
        return this.getNumberAttribute('gid');
    }
    /**
     * @stability stable
     */
    set gid(value) {
        this._gid = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gidInput() {
        return this._gid;
    }
    /**
     * @stability stable
     */
    get secondaryGids() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('secondary_gids');
    }
    /**
     * @stability stable
     */
    set secondaryGids(value) {
        this._secondaryGids = value;
    }
    /**
     * @stability stable
     */
    resetSecondaryGids() {
        this._secondaryGids = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secondaryGidsInput() {
        return this._secondaryGids;
    }
    /**
     * @stability stable
     */
    get uid() {
        return this.getNumberAttribute('uid');
    }
    /**
     * @stability stable
     */
    set uid(value) {
        this._uid = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get uidInput() {
        return this._uid;
    }
}
exports.TransferAccessPosixProfileOutputReference = TransferAccessPosixProfileOutputReference;
_a = JSII_RTTI_SYMBOL_1;
TransferAccessPosixProfileOutputReference[_a] = { fqn: "@cdktf/provider-aws.transfer.TransferAccessPosixProfileOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access}.
 *
 * @stability stable
 */
class TransferAccess extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_transfer_access',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // posix_profile - computed: false, optional: true, required: false
        this._posixProfile = new TransferAccessPosixProfileOutputReference(this, "posix_profile", true);
        this._externalId = config.externalId;
        this._homeDirectory = config.homeDirectory;
        this._homeDirectoryType = config.homeDirectoryType;
        this._policy = config.policy;
        this._role = config.role;
        this._serverId = config.serverId;
        this._homeDirectoryMappings = config.homeDirectoryMappings;
        this._posixProfile.internalValue = config.posixProfile;
    }
    /**
     * @stability stable
     */
    get externalId() {
        return this.getStringAttribute('external_id');
    }
    /**
     * @stability stable
     */
    set externalId(value) {
        this._externalId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get externalIdInput() {
        return this._externalId;
    }
    /**
     * @stability stable
     */
    get homeDirectory() {
        return this.getStringAttribute('home_directory');
    }
    /**
     * @stability stable
     */
    set homeDirectory(value) {
        this._homeDirectory = value;
    }
    /**
     * @stability stable
     */
    resetHomeDirectory() {
        this._homeDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get homeDirectoryInput() {
        return this._homeDirectory;
    }
    /**
     * @stability stable
     */
    get homeDirectoryType() {
        return this.getStringAttribute('home_directory_type');
    }
    /**
     * @stability stable
     */
    set homeDirectoryType(value) {
        this._homeDirectoryType = value;
    }
    /**
     * @stability stable
     */
    resetHomeDirectoryType() {
        this._homeDirectoryType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get homeDirectoryTypeInput() {
        return this._homeDirectoryType;
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
    get policy() {
        return this.getStringAttribute('policy');
    }
    /**
     * @stability stable
     */
    set policy(value) {
        this._policy = value;
    }
    /**
     * @stability stable
     */
    resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get policyInput() {
        return this._policy;
    }
    /**
     * @stability stable
     */
    get role() {
        return this.getStringAttribute('role');
    }
    /**
     * @stability stable
     */
    set role(value) {
        this._role = value;
    }
    /**
     * @stability stable
     */
    resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleInput() {
        return this._role;
    }
    /**
     * @stability stable
     */
    get serverId() {
        return this.getStringAttribute('server_id');
    }
    /**
     * @stability stable
     */
    set serverId(value) {
        this._serverId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serverIdInput() {
        return this._serverId;
    }
    /**
     * @stability stable
     */
    get homeDirectoryMappings() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('home_directory_mappings');
    }
    /**
     * @stability stable
     */
    set homeDirectoryMappings(value) {
        this._homeDirectoryMappings = value;
    }
    /**
     * @stability stable
     */
    resetHomeDirectoryMappings() {
        this._homeDirectoryMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get homeDirectoryMappingsInput() {
        return this._homeDirectoryMappings;
    }
    /**
     * @stability stable
     */
    get posixProfile() {
        return this._posixProfile;
    }
    /**
     * @stability stable
     */
    putPosixProfile(value) {
        this._posixProfile.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPosixProfile() {
        this._posixProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get posixProfileInput() {
        return this._posixProfile.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            external_id: cdktf.stringToTerraform(this._externalId),
            home_directory: cdktf.stringToTerraform(this._homeDirectory),
            home_directory_type: cdktf.stringToTerraform(this._homeDirectoryType),
            policy: cdktf.stringToTerraform(this._policy),
            role: cdktf.stringToTerraform(this._role),
            server_id: cdktf.stringToTerraform(this._serverId),
            home_directory_mappings: cdktf.listMapper(transferAccessHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
            posix_profile: transferAccessPosixProfileToTerraform(this._posixProfile.internalValue),
        };
    }
}
exports.TransferAccess = TransferAccess;
_b = JSII_RTTI_SYMBOL_1;
TransferAccess[_b] = { fqn: "@cdktf/provider-aws.transfer.TransferAccess", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
TransferAccess.tfResourceType = "aws_transfer_access";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItYWNjZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zZmVyL3RyYW5zZmVyLWFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTRCL0IsU0FBZ0IsOENBQThDLENBQUMsTUFBNEM7SUFDekcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBVEQsd0dBU0M7QUFXRCxTQUFnQixxQ0FBcUMsQ0FBQyxNQUErRTtJQUNuSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2hGLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMs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RUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUN0SCxhQUFhLEVBQUUscUNBQXFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7U0FDdkYsQ0FBQztJQUNKLENBQUM7O0FBcExILHdDQXFMQzs7O0FBbkxDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNkJBQWMsR0FBVyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2ZlckFjY2Vzc0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4dGVybmFsSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob21lRGlyZWN0b3J5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob21lRGlyZWN0b3J5VHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9tZURpcmVjdG9yeU1hcHBpbmdzPzogVHJhbnNmZXJBY2Nlc3NIb21lRGlyZWN0b3J5TWFwcGluZ3NbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3NpeFByb2ZpbGU/OiBUcmFuc2ZlckFjY2Vzc1Bvc2l4UHJvZmlsZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNmZXJBY2Nlc3NIb21lRGlyZWN0b3J5TWFwcGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVudHJ5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZmVyQWNjZXNzSG9tZURpcmVjdG9yeU1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogVHJhbnNmZXJBY2Nlc3NIb21lRGlyZWN0b3J5TWFwcGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbnRyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbnRyeSksXG4gICAgdGFyZ2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2ZlckFjY2Vzc1Bvc2l4UHJvZmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWNvbmRhcnlHaWRzPzogbnVtYmVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1aWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZmVyQWNjZXNzUG9zaXhQcm9maWxlVG9UZXJyYWZvcm0oc3RydWN0PzogVHJhbnNmZXJBY2Nlc3NQb3NpeFByb2ZpbGVPdXRwdXRSZWZlcmVuY2UgfCBUcmFuc2ZlckFjY2Vzc1Bvc2l4UHJvZmlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGdpZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5naWQpLFxuICAgIHNlY29uZGFyeV9naWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY29uZGFyeUdpZHMpLFxuICAgIHVpZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS51aWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2ZlckFjY2Vzc1Bvc2l4UHJvZmlsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBUcmFuc2ZlckFjY2Vzc1Bvc2l4UHJvZmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZ2lkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5naWQgPSB0aGlzLl9naWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWNvbmRhcnlHaWRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNvbmRhcnlHaWRzID0gdGhpcy5fc2Vjb25kYXJ5R2lkcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VpZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudWlkID0gdGhpcy5fdWlkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogVHJhbnNmZXJBY2Nlc3NQb3NpeFByb2ZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9naWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWNvbmRhcnlHaWRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdWlkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9naWQgPSB2YWx1ZS5naWQ7XG4gICAgICB0aGlzLl9zZWNvbmRhcnlHaWRzID0gdmFsdWUuc2Vjb25kYXJ5R2lkcztcbiAgICAgIHRoaXMuX3VpZCA9IHZhbHVlLnVpZDtcbiAgICB9XG4gIH1cblxuICAvLyBnaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZ2lkPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBnaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdpZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZ2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9naWQ7XG4gIH1cblxuICAvLyBzZWNvbmRhcnlfZ2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWNvbmRhcnlHaWRzPzogbnVtYmVyW107IFxuICBwdWJsaWMgZ2V0IHNlY29uZGFyeUdpZHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlY29uZGFyeV9naWRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2Vjb25kYXJ5R2lkcyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlHaWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2Vjb25kYXJ5R2lkcygpIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlHaWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNvbmRhcnlHaWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZGFyeUdpZHM7XG4gIH1cblxuICAvLyB1aWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdWlkPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB1aWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd1aWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVpZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91aWQ7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBUcmFuc2ZlckFjY2VzcyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c190cmFuc2Zlcl9hY2Nlc3NcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFRyYW5zZmVyQWNjZXNzQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfdHJhbnNmZXJfYWNjZXNzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2V4dGVybmFsSWQgPSBjb25maWcuZXh0ZXJuYWxJZDtcbiAgICB0aGlzLl9ob21lRGlyZWN0b3J5ID0gY29uZmlnLmhvbWVEaXJlY3Rvcnk7XG4gICAgdGhpcy5faG9tZURpcmVjdG9yeVR5cGUgPSBjb25maWcuaG9tZURpcmVjdG9yeVR5cGU7XG4gICAgdGhpcy5fcG9saWN5ID0gY29uZmlnLnBvbGljeTtcbiAgICB0aGlzLl9yb2xlID0gY29uZmlnLnJvbGU7XG4gICAgdGhpcy5fc2VydmVySWQgPSBjb25maWcuc2VydmVySWQ7XG4gICAgdGhpcy5faG9tZURpcmVjdG9yeU1hcHBpbmdzID0gY29uZmlnLmhvbWVEaXJlY3RvcnlNYXBwaW5ncztcbiAgICB0aGlzLl9wb3NpeFByb2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wb3NpeFByb2ZpbGU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGV4dGVybmFsX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2V4dGVybmFsSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4dGVybmFsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHRlcm5hbF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXh0ZXJuYWxJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHRlcm5hbElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVybmFsSWQ7XG4gIH1cblxuICAvLyBob21lX2RpcmVjdG9yeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob21lRGlyZWN0b3J5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob21lRGlyZWN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9tZV9kaXJlY3RvcnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvbWVEaXJlY3RvcnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvbWVEaXJlY3RvcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb21lRGlyZWN0b3J5KCkge1xuICAgIHRoaXMuX2hvbWVEaXJlY3RvcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvbWVEaXJlY3RvcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9tZURpcmVjdG9yeTtcbiAgfVxuXG4gIC8vIGhvbWVfZGlyZWN0b3J5X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaG9tZURpcmVjdG9yeVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhvbWVEaXJlY3RvcnlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9tZV9kaXJlY3RvcnlfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9tZURpcmVjdG9yeVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvbWVEaXJlY3RvcnlUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9tZURpcmVjdG9yeVR5cGUoKSB7XG4gICAgdGhpcy5faG9tZURpcmVjdG9yeVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvbWVEaXJlY3RvcnlUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvbWVEaXJlY3RvcnlUeXBlO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHBvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9saWN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb2xpY3koKSB7XG4gICAgdGhpcy5fcG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9saWN5O1xuICB9XG5cbiAgLy8gcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb2xlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvbGUoKSB7XG4gICAgdGhpcy5fcm9sZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlO1xuICB9XG5cbiAgLy8gc2VydmVyX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlcnZlcklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2ZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZlcl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmVySWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZlcklkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZlcklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlcklkO1xuICB9XG5cbiAgLy8gaG9tZV9kaXJlY3RvcnlfbWFwcGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaG9tZURpcmVjdG9yeU1hcHBpbmdzPzogVHJhbnNmZXJBY2Nlc3NIb21lRGlyZWN0b3J5TWFwcGluZ3NbXTsgXG4gIHB1YmxpYyBnZXQgaG9tZURpcmVjdG9yeU1hcHBpbmdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdob21lX2RpcmVjdG9yeV9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvbWVEaXJlY3RvcnlNYXBwaW5ncyh2YWx1ZTogVHJhbnNmZXJBY2Nlc3NIb21lRGlyZWN0b3J5TWFwcGluZ3NbXSkge1xuICAgIHRoaXMuX2hvbWVEaXJlY3RvcnlNYXBwaW5ncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhvbWVEaXJlY3RvcnlNYXBwaW5ncygpIHtcbiAgICB0aGlzLl9ob21lRGlyZWN0b3J5TWFwcGluZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvbWVEaXJlY3RvcnlNYXBwaW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob21lRGlyZWN0b3J5TWFwcGluZ3M7XG4gIH1cblxuICAvLyBwb3NpeF9wcm9maWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Bvc2l4UHJvZmlsZSA9IG5ldyBUcmFuc2ZlckFjY2Vzc1Bvc2l4UHJvZmlsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwb3NpeF9wcm9maWxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHBvc2l4UHJvZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXhQcm9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRQb3NpeFByb2ZpbGUodmFsdWU6IFRyYW5zZmVyQWNjZXNzUG9zaXhQcm9maWxlKSB7XG4gICAgdGhpcy5fcG9zaXhQcm9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3NpeFByb2ZpbGUoKSB7XG4gICAgdGhpcy5fcG9zaXhQcm9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvc2l4UHJvZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpeFByb2ZpbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXh0ZXJuYWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4dGVybmFsSWQpLFxuICAgICAgaG9tZV9kaXJlY3Rvcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2hvbWVEaXJlY3RvcnkpLFxuICAgICAgaG9tZV9kaXJlY3RvcnlfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faG9tZURpcmVjdG9yeVR5cGUpLFxuICAgICAgcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wb2xpY3kpLFxuICAgICAgcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcm9sZSksXG4gICAgICBzZXJ2ZXJfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZlcklkKSxcbiAgICAgIGhvbWVfZGlyZWN0b3J5X21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKHRyYW5zZmVyQWNjZXNzSG9tZURpcmVjdG9yeU1hcHBpbmdzVG9UZXJyYWZvcm0pKHRoaXMuX2hvbWVEaXJlY3RvcnlNYXBwaW5ncyksXG4gICAgICBwb3NpeF9wcm9maWxlOiB0cmFuc2ZlckFjY2Vzc1Bvc2l4UHJvZmlsZVRvVGVycmFmb3JtKHRoaXMuX3Bvc2l4UHJvZmlsZS5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=