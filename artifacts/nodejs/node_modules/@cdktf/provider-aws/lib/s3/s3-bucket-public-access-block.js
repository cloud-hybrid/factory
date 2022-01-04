"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3BucketPublicAccessBlock = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html aws_s3_bucket_public_access_block}.
 *
 * @stability stable
 */
class S3BucketPublicAccessBlock extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html aws_s3_bucket_public_access_block} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_bucket_public_access_block',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._blockPublicAcls = config.blockPublicAcls;
        this._blockPublicPolicy = config.blockPublicPolicy;
        this._bucket = config.bucket;
        this._ignorePublicAcls = config.ignorePublicAcls;
        this._restrictPublicBuckets = config.restrictPublicBuckets;
    }
    /**
     * @stability stable
     */
    get blockPublicAcls() {
        return this.getBooleanAttribute('block_public_acls');
    }
    /**
     * @stability stable
     */
    set blockPublicAcls(value) {
        this._blockPublicAcls = value;
    }
    /**
     * @stability stable
     */
    resetBlockPublicAcls() {
        this._blockPublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockPublicAclsInput() {
        return this._blockPublicAcls;
    }
    /**
     * @stability stable
     */
    get blockPublicPolicy() {
        return this.getBooleanAttribute('block_public_policy');
    }
    /**
     * @stability stable
     */
    set blockPublicPolicy(value) {
        this._blockPublicPolicy = value;
    }
    /**
     * @stability stable
     */
    resetBlockPublicPolicy() {
        this._blockPublicPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockPublicPolicyInput() {
        return this._blockPublicPolicy;
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
    get ignorePublicAcls() {
        return this.getBooleanAttribute('ignore_public_acls');
    }
    /**
     * @stability stable
     */
    set ignorePublicAcls(value) {
        this._ignorePublicAcls = value;
    }
    /**
     * @stability stable
     */
    resetIgnorePublicAcls() {
        this._ignorePublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ignorePublicAclsInput() {
        return this._ignorePublicAcls;
    }
    /**
     * @stability stable
     */
    get restrictPublicBuckets() {
        return this.getBooleanAttribute('restrict_public_buckets');
    }
    /**
     * @stability stable
     */
    set restrictPublicBuckets(value) {
        this._restrictPublicBuckets = value;
    }
    /**
     * @stability stable
     */
    resetRestrictPublicBuckets() {
        this._restrictPublicBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restrictPublicBucketsInput() {
        return this._restrictPublicBuckets;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            block_public_acls: cdktf.booleanToTerraform(this._blockPublicAcls),
            block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
            bucket: cdktf.stringToTerraform(this._bucket),
            ignore_public_acls: cdktf.booleanToTerraform(this._ignorePublicAcls),
            restrict_public_buckets: cdktf.booleanToTerraform(this._restrictPublicBuckets),
        };
    }
}
exports.S3BucketPublicAccessBlock = S3BucketPublicAccessBlock;
_a = JSII_RTTI_SYMBOL_1;
S3BucketPublicAccessBlock[_a] = { fqn: "@cdktf/provider-aws.s3.S3BucketPublicAccessBlock", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
S3BucketPublicAccessBlock.tfResourceType = "aws_s3_bucket_public_access_block";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtYnVja2V0LXB1YmxpYy1hY2Nlc3MtYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvczMvczMtYnVja2V0LXB1YmxpYy1hY2Nlc3MtYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQWlCL0IsTUFBYSx5QkFBMEIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3BFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF1QztRQUN0RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG1DQUFtQztZQUMxRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0lBQzdELENBQUM7Ozs7SUFRRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQVEsQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBa0M7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QWlJQzs7O0FBL0hDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csd0NBQWMsR0FBVyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0UHVibGljQWNjZXNzQmxvY2tDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tQdWJsaWNBY2xzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tQdWJsaWNQb2xpY3k/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWdub3JlUHVibGljQWNscz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzdHJpY3RQdWJsaWNCdWNrZXRzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTM0J1Y2tldFB1YmxpY0FjY2Vzc0Jsb2NrIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3MzX2J1Y2tldF9wdWJsaWNfYWNjZXNzX2Jsb2NrXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTM0J1Y2tldFB1YmxpY0FjY2Vzc0Jsb2NrQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfczNfYnVja2V0X3B1YmxpY19hY2Nlc3NfYmxvY2snLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYmxvY2tQdWJsaWNBY2xzID0gY29uZmlnLmJsb2NrUHVibGljQWNscztcbiAgICB0aGlzLl9ibG9ja1B1YmxpY1BvbGljeSA9IGNvbmZpZy5ibG9ja1B1YmxpY1BvbGljeTtcbiAgICB0aGlzLl9idWNrZXQgPSBjb25maWcuYnVja2V0O1xuICAgIHRoaXMuX2lnbm9yZVB1YmxpY0FjbHMgPSBjb25maWcuaWdub3JlUHVibGljQWNscztcbiAgICB0aGlzLl9yZXN0cmljdFB1YmxpY0J1Y2tldHMgPSBjb25maWcucmVzdHJpY3RQdWJsaWNCdWNrZXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBibG9ja19wdWJsaWNfYWNscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ibG9ja1B1YmxpY0FjbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGJsb2NrUHVibGljQWNscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdibG9ja19wdWJsaWNfYWNscycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJsb2NrUHVibGljQWNscyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYmxvY2tQdWJsaWNBY2xzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmxvY2tQdWJsaWNBY2xzKCkge1xuICAgIHRoaXMuX2Jsb2NrUHVibGljQWNscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvY2tQdWJsaWNBY2xzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2NrUHVibGljQWNscztcbiAgfVxuXG4gIC8vIGJsb2NrX3B1YmxpY19wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvY2tQdWJsaWNQb2xpY3k/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGJsb2NrUHVibGljUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Jsb2NrX3B1YmxpY19wb2xpY3knKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBibG9ja1B1YmxpY1BvbGljeSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYmxvY2tQdWJsaWNQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbG9ja1B1YmxpY1BvbGljeSgpIHtcbiAgICB0aGlzLl9ibG9ja1B1YmxpY1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvY2tQdWJsaWNQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tQdWJsaWNQb2xpY3k7XG4gIH1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaWdub3JlX3B1YmxpY19hY2xzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lnbm9yZVB1YmxpY0FjbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGlnbm9yZVB1YmxpY0FjbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaWdub3JlX3B1YmxpY19hY2xzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaWdub3JlUHVibGljQWNscyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faWdub3JlUHVibGljQWNscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElnbm9yZVB1YmxpY0FjbHMoKSB7XG4gICAgdGhpcy5faWdub3JlUHVibGljQWNscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWdub3JlUHVibGljQWNsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZ25vcmVQdWJsaWNBY2xzO1xuICB9XG5cbiAgLy8gcmVzdHJpY3RfcHVibGljX2J1Y2tldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzdHJpY3RQdWJsaWNCdWNrZXRzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXN0cmljdFB1YmxpY0J1Y2tldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVzdHJpY3RfcHVibGljX2J1Y2tldHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXN0cmljdFB1YmxpY0J1Y2tldHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3Jlc3RyaWN0UHVibGljQnVja2V0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3RyaWN0UHVibGljQnVja2V0cygpIHtcbiAgICB0aGlzLl9yZXN0cmljdFB1YmxpY0J1Y2tldHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3RyaWN0UHVibGljQnVja2V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN0cmljdFB1YmxpY0J1Y2tldHM7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJsb2NrX3B1YmxpY19hY2xzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYmxvY2tQdWJsaWNBY2xzKSxcbiAgICAgIGJsb2NrX3B1YmxpY19wb2xpY3k6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9ibG9ja1B1YmxpY1BvbGljeSksXG4gICAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2J1Y2tldCksXG4gICAgICBpZ25vcmVfcHVibGljX2FjbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9pZ25vcmVQdWJsaWNBY2xzKSxcbiAgICAgIHJlc3RyaWN0X3B1YmxpY19idWNrZXRzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcmVzdHJpY3RQdWJsaWNCdWNrZXRzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=