"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsWorkspacesBundle = exports.DataAwsWorkspacesBundleUserStorage = exports.DataAwsWorkspacesBundleRootStorage = exports.DataAwsWorkspacesBundleComputeType = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsWorkspacesBundleComputeType extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsWorkspacesBundleComputeType = DataAwsWorkspacesBundleComputeType;
_a = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesBundleComputeType[_a] = { fqn: "@cdktf/provider-aws.workspaces.DataAwsWorkspacesBundleComputeType", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsWorkspacesBundleRootStorage extends cdktf.ComplexComputedList {
    // capacity - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get capacity() {
        return this.getStringAttribute('capacity');
    }
}
exports.DataAwsWorkspacesBundleRootStorage = DataAwsWorkspacesBundleRootStorage;
_b = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesBundleRootStorage[_b] = { fqn: "@cdktf/provider-aws.workspaces.DataAwsWorkspacesBundleRootStorage", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsWorkspacesBundleUserStorage extends cdktf.ComplexComputedList {
    // capacity - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get capacity() {
        return this.getStringAttribute('capacity');
    }
}
exports.DataAwsWorkspacesBundleUserStorage = DataAwsWorkspacesBundleUserStorage;
_c = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesBundleUserStorage[_c] = { fqn: "@cdktf/provider-aws.workspaces.DataAwsWorkspacesBundleUserStorage", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html aws_workspaces_bundle}.
 *
 * @stability stable
 */
class DataAwsWorkspacesBundle extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html aws_workspaces_bundle} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_workspaces_bundle',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._bundleId = config.bundleId;
        this._name = config.name;
        this._owner = config.owner;
    }
    /**
     * @stability stable
     */
    get bundleId() {
        return this.getStringAttribute('bundle_id');
    }
    /**
     * @stability stable
     */
    set bundleId(value) {
        this._bundleId = value;
    }
    /**
     * @stability stable
     */
    resetBundleId() {
        this._bundleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bundleIdInput() {
        return this._bundleId;
    }
    // compute_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    computeType(index) {
        return new DataAwsWorkspacesBundleComputeType(this, 'compute_type', index);
    }
    // description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
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
    /**
     * @stability stable
     */
    resetName() {
        this._name = undefined;
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
    get owner() {
        return this.getStringAttribute('owner');
    }
    /**
     * @stability stable
     */
    set owner(value) {
        this._owner = value;
    }
    /**
     * @stability stable
     */
    resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ownerInput() {
        return this._owner;
    }
    // root_storage - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    rootStorage(index) {
        return new DataAwsWorkspacesBundleRootStorage(this, 'root_storage', index);
    }
    // user_storage - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    userStorage(index) {
        return new DataAwsWorkspacesBundleUserStorage(this, 'user_storage', index);
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            bundle_id: cdktf.stringToTerraform(this._bundleId),
            name: cdktf.stringToTerraform(this._name),
            owner: cdktf.stringToTerraform(this._owner),
        };
    }
}
exports.DataAwsWorkspacesBundle = DataAwsWorkspacesBundle;
_d = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesBundle[_d] = { fqn: "@cdktf/provider-aws.workspaces.DataAwsWorkspacesBundle", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsWorkspacesBundle.tfResourceType = "aws_workspaces_bundle";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtd29ya3NwYWNlcy1idW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd29ya3NwYWNlcy9kYXRhLWF3cy13b3Jrc3BhY2VzLWJ1bmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQVcvQixNQUFhLGtDQUFtQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFL0UsMERBQTBEOzs7O0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O0FBTEgsZ0ZBTUM7Ozs7OztBQUNELE1BQWEsa0NBQW1DLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUvRSw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O0FBTEgsZ0ZBTUM7Ozs7OztBQUNELE1BQWEsa0NBQW1DLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUvRSw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O0FBTEgsZ0ZBTUM7Ozs7Ozs7O0FBR0QsTUFBYSx1QkFBd0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBT3BFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUF3QyxFQUFFO1FBQ3pGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsdUJBQXVCO1lBQzlDLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFD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LElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7O0FBbkhILDBEQW9IQzs7O0FBbEhDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csc0NBQWMsR0FBVyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NXb3Jrc3BhY2VzQnVuZGxlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1bmRsZUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvd25lcj86IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzV29ya3NwYWNlc0J1bmRsZUNvbXB1dGVUeXBlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzV29ya3NwYWNlc0J1bmRsZVJvb3RTdG9yYWdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhcGFjaXR5Jyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzV29ya3NwYWNlc0J1bmRsZVVzZXJTdG9yYWdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhcGFjaXR5Jyk7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c1dvcmtzcGFjZXNCdW5kbGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c193b3Jrc3BhY2VzX2J1bmRsZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c1dvcmtzcGFjZXNCdW5kbGVDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3dvcmtzcGFjZXNfYnVuZGxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2J1bmRsZUlkID0gY29uZmlnLmJ1bmRsZUlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9vd25lciA9IGNvbmZpZy5vd25lcjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYnVuZGxlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1bmRsZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidW5kbGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1bmRsZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVuZGxlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1bmRsZUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVuZGxlSWQoKSB7XG4gICAgdGhpcy5fYnVuZGxlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1bmRsZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1bmRsZUlkO1xuICB9XG5cbiAgLy8gY29tcHV0ZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBjb21wdXRlVHlwZShpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzV29ya3NwYWNlc0J1bmRsZUNvbXB1dGVUeXBlKHRoaXMsICdjb21wdXRlX3R5cGUnLCBpbmRleCk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBvd25lciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vd25lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvd25lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3duZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX293bmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3duZXIoKSB7XG4gICAgdGhpcy5fb3duZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG93bmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX293bmVyO1xuICB9XG5cbiAgLy8gcm9vdF9zdG9yYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyByb290U3RvcmFnZShpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzV29ya3NwYWNlc0J1bmRsZVJvb3RTdG9yYWdlKHRoaXMsICdyb290X3N0b3JhZ2UnLCBpbmRleCk7XG4gIH1cblxuICAvLyB1c2VyX3N0b3JhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHVzZXJTdG9yYWdlKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NXb3Jrc3BhY2VzQnVuZGxlVXNlclN0b3JhZ2UodGhpcywgJ3VzZXJfc3RvcmFnZScsIGluZGV4KTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYnVuZGxlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9idW5kbGVJZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIG93bmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9vd25lciksXG4gICAgfTtcbiAgfVxufVxuIl19