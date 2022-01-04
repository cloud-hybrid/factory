"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsQueue = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue}.
 *
 * @stability stable
 */
class SqsQueue extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sqs_queue',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._contentBasedDeduplication = config.contentBasedDeduplication;
        this._deduplicationScope = config.deduplicationScope;
        this._delaySeconds = config.delaySeconds;
        this._fifoQueue = config.fifoQueue;
        this._fifoThroughputLimit = config.fifoThroughputLimit;
        this._kmsDataKeyReusePeriodSeconds = config.kmsDataKeyReusePeriodSeconds;
        this._kmsMasterKeyId = config.kmsMasterKeyId;
        this._maxMessageSize = config.maxMessageSize;
        this._messageRetentionSeconds = config.messageRetentionSeconds;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._policy = config.policy;
        this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
        this._redrivePolicy = config.redrivePolicy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._visibilityTimeoutSeconds = config.visibilityTimeoutSeconds;
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
    get contentBasedDeduplication() {
        return this.getBooleanAttribute('content_based_deduplication');
    }
    /**
     * @stability stable
     */
    set contentBasedDeduplication(value) {
        this._contentBasedDeduplication = value;
    }
    /**
     * @stability stable
     */
    resetContentBasedDeduplication() {
        this._contentBasedDeduplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentBasedDeduplicationInput() {
        return this._contentBasedDeduplication;
    }
    /**
     * @stability stable
     */
    get deduplicationScope() {
        return this.getStringAttribute('deduplication_scope');
    }
    /**
     * @stability stable
     */
    set deduplicationScope(value) {
        this._deduplicationScope = value;
    }
    /**
     * @stability stable
     */
    resetDeduplicationScope() {
        this._deduplicationScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deduplicationScopeInput() {
        return this._deduplicationScope;
    }
    /**
     * @stability stable
     */
    get delaySeconds() {
        return this.getNumberAttribute('delay_seconds');
    }
    /**
     * @stability stable
     */
    set delaySeconds(value) {
        this._delaySeconds = value;
    }
    /**
     * @stability stable
     */
    resetDelaySeconds() {
        this._delaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get delaySecondsInput() {
        return this._delaySeconds;
    }
    /**
     * @stability stable
     */
    get fifoQueue() {
        return this.getBooleanAttribute('fifo_queue');
    }
    /**
     * @stability stable
     */
    set fifoQueue(value) {
        this._fifoQueue = value;
    }
    /**
     * @stability stable
     */
    resetFifoQueue() {
        this._fifoQueue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fifoQueueInput() {
        return this._fifoQueue;
    }
    /**
     * @stability stable
     */
    get fifoThroughputLimit() {
        return this.getStringAttribute('fifo_throughput_limit');
    }
    /**
     * @stability stable
     */
    set fifoThroughputLimit(value) {
        this._fifoThroughputLimit = value;
    }
    /**
     * @stability stable
     */
    resetFifoThroughputLimit() {
        this._fifoThroughputLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fifoThroughputLimitInput() {
        return this._fifoThroughputLimit;
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
    get kmsDataKeyReusePeriodSeconds() {
        return this.getNumberAttribute('kms_data_key_reuse_period_seconds');
    }
    /**
     * @stability stable
     */
    set kmsDataKeyReusePeriodSeconds(value) {
        this._kmsDataKeyReusePeriodSeconds = value;
    }
    /**
     * @stability stable
     */
    resetKmsDataKeyReusePeriodSeconds() {
        this._kmsDataKeyReusePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsDataKeyReusePeriodSecondsInput() {
        return this._kmsDataKeyReusePeriodSeconds;
    }
    /**
     * @stability stable
     */
    get kmsMasterKeyId() {
        return this.getStringAttribute('kms_master_key_id');
    }
    /**
     * @stability stable
     */
    set kmsMasterKeyId(value) {
        this._kmsMasterKeyId = value;
    }
    /**
     * @stability stable
     */
    resetKmsMasterKeyId() {
        this._kmsMasterKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsMasterKeyIdInput() {
        return this._kmsMasterKeyId;
    }
    /**
     * @stability stable
     */
    get maxMessageSize() {
        return this.getNumberAttribute('max_message_size');
    }
    /**
     * @stability stable
     */
    set maxMessageSize(value) {
        this._maxMessageSize = value;
    }
    /**
     * @stability stable
     */
    resetMaxMessageSize() {
        this._maxMessageSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxMessageSizeInput() {
        return this._maxMessageSize;
    }
    /**
     * @stability stable
     */
    get messageRetentionSeconds() {
        return this.getNumberAttribute('message_retention_seconds');
    }
    /**
     * @stability stable
     */
    set messageRetentionSeconds(value) {
        this._messageRetentionSeconds = value;
    }
    /**
     * @stability stable
     */
    resetMessageRetentionSeconds() {
        this._messageRetentionSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageRetentionSecondsInput() {
        return this._messageRetentionSeconds;
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
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    /**
     * @stability stable
     */
    set namePrefix(value) {
        this._namePrefix = value;
    }
    /**
     * @stability stable
     */
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get namePrefixInput() {
        return this._namePrefix;
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
    get receiveWaitTimeSeconds() {
        return this.getNumberAttribute('receive_wait_time_seconds');
    }
    /**
     * @stability stable
     */
    set receiveWaitTimeSeconds(value) {
        this._receiveWaitTimeSeconds = value;
    }
    /**
     * @stability stable
     */
    resetReceiveWaitTimeSeconds() {
        this._receiveWaitTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get receiveWaitTimeSecondsInput() {
        return this._receiveWaitTimeSeconds;
    }
    /**
     * @stability stable
     */
    get redrivePolicy() {
        return this.getStringAttribute('redrive_policy');
    }
    /**
     * @stability stable
     */
    set redrivePolicy(value) {
        this._redrivePolicy = value;
    }
    /**
     * @stability stable
     */
    resetRedrivePolicy() {
        this._redrivePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get redrivePolicyInput() {
        return this._redrivePolicy;
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
    // url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get url() {
        return this.getStringAttribute('url');
    }
    /**
     * @stability stable
     */
    get visibilityTimeoutSeconds() {
        return this.getNumberAttribute('visibility_timeout_seconds');
    }
    /**
     * @stability stable
     */
    set visibilityTimeoutSeconds(value) {
        this._visibilityTimeoutSeconds = value;
    }
    /**
     * @stability stable
     */
    resetVisibilityTimeoutSeconds() {
        this._visibilityTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get visibilityTimeoutSecondsInput() {
        return this._visibilityTimeoutSeconds;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
            deduplication_scope: cdktf.stringToTerraform(this._deduplicationScope),
            delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
            fifo_queue: cdktf.booleanToTerraform(this._fifoQueue),
            fifo_throughput_limit: cdktf.stringToTerraform(this._fifoThroughputLimit),
            kms_data_key_reuse_period_seconds: cdktf.numberToTerraform(this._kmsDataKeyReusePeriodSeconds),
            kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
            max_message_size: cdktf.numberToTerraform(this._maxMessageSize),
            message_retention_seconds: cdktf.numberToTerraform(this._messageRetentionSeconds),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            receive_wait_time_seconds: cdktf.numberToTerraform(this._receiveWaitTimeSeconds),
            redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            visibility_timeout_seconds: cdktf.numberToTerraform(this._visibilityTimeoutSeconds),
        };
    }
}
exports.SqsQueue = SqsQueue;
_a = JSII_RTTI_SYMBOL_1;
SqsQueue[_a] = { fqn: "@cdktf/provider-aws.sqs.SqsQueue", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SqsQueue.tfResourceType = "aws_sqs_queue";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FzLXF1ZXVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nxcy9zcXMtcXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQXlDL0IsTUFBYSxRQUFTLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9uRCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBeUIsRUFBRTtRQUMxRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGVBQWU7WUFDdEMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDbkUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RSxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyx3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SUFBSSxDQUFDLHdCQUF3QixDQUFDO1lBQ2pGLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDaEYsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzVELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7U0FDcEYsQ0FBQztJQUNKLENBQUM7O0FBdldILDRCQXdXQzs7O0FBdFdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csdUJBQWMsR0FBVyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU3FzUXVldWVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRCYXNlZERlZHVwbGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZHVwbGljYXRpb25TY29wZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsYXlTZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWZvUXVldWU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWZvVGhyb3VnaHB1dExpbWl0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zRGF0YUtleVJldXNlUGVyaW9kU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNNYXN0ZXJLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4TWVzc2FnZVNpemU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2VSZXRlbnRpb25TZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWVQcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb2xpY3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY2VpdmVXYWl0VGltZVNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVkcml2ZVBvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZpc2liaWxpdHlUaW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTcXNRdWV1ZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zcXNfcXVldWVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU3FzUXVldWVDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3Nxc19xdWV1ZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jb250ZW50QmFzZWREZWR1cGxpY2F0aW9uID0gY29uZmlnLmNvbnRlbnRCYXNlZERlZHVwbGljYXRpb247XG4gICAgdGhpcy5fZGVkdXBsaWNhdGlvblNjb3BlID0gY29uZmlnLmRlZHVwbGljYXRpb25TY29wZTtcbiAgICB0aGlzLl9kZWxheVNlY29uZHMgPSBjb25maWcuZGVsYXlTZWNvbmRzO1xuICAgIHRoaXMuX2ZpZm9RdWV1ZSA9IGNvbmZpZy5maWZvUXVldWU7XG4gICAgdGhpcy5fZmlmb1Rocm91Z2hwdXRMaW1pdCA9IGNvbmZpZy5maWZvVGhyb3VnaHB1dExpbWl0O1xuICAgIHRoaXMuX2ttc0RhdGFLZXlSZXVzZVBlcmlvZFNlY29uZHMgPSBjb25maWcua21zRGF0YUtleVJldXNlUGVyaW9kU2Vjb25kcztcbiAgICB0aGlzLl9rbXNNYXN0ZXJLZXlJZCA9IGNvbmZpZy5rbXNNYXN0ZXJLZXlJZDtcbiAgICB0aGlzLl9tYXhNZXNzYWdlU2l6ZSA9IGNvbmZpZy5tYXhNZXNzYWdlU2l6ZTtcbiAgICB0aGlzLl9tZXNzYWdlUmV0ZW50aW9uU2Vjb25kcyA9IGNvbmZpZy5tZXNzYWdlUmV0ZW50aW9uU2Vjb25kcztcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IGNvbmZpZy5uYW1lUHJlZml4O1xuICAgIHRoaXMuX3BvbGljeSA9IGNvbmZpZy5wb2xpY3k7XG4gICAgdGhpcy5fcmVjZWl2ZVdhaXRUaW1lU2Vjb25kcyA9IGNvbmZpZy5yZWNlaXZlV2FpdFRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3JlZHJpdmVQb2xpY3kgPSBjb25maWcucmVkcml2ZVBvbGljeTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3Zpc2liaWxpdHlUaW1lb3V0U2Vjb25kcyA9IGNvbmZpZy52aXNpYmlsaXR5VGltZW91dFNlY29uZHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNvbnRlbnRCYXNlZERlZHVwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRCYXNlZERlZHVwbGljYXRpb24oKSB7XG4gICAgdGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50QmFzZWREZWR1cGxpY2F0aW9uO1xuICB9XG5cbiAgLy8gZGVkdXBsaWNhdGlvbl9zY29wZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZHVwbGljYXRpb25TY29wZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVkdXBsaWNhdGlvblNjb3BlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVkdXBsaWNhdGlvbl9zY29wZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVkdXBsaWNhdGlvblNjb3BlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWR1cGxpY2F0aW9uU2NvcGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWR1cGxpY2F0aW9uU2NvcGUoKSB7XG4gICAgdGhpcy5fZGVkdXBsaWNhdGlvblNjb3BlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWR1cGxpY2F0aW9uU2NvcGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVkdXBsaWNhdGlvblNjb3BlO1xuICB9XG5cbiAgLy8gZGVsYXlfc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxheVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRlbGF5U2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RlbGF5X3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGF5U2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGVsYXlTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsYXlTZWNvbmRzKCkge1xuICAgIHRoaXMuX2RlbGF5U2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsYXlTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGF5U2Vjb25kcztcbiAgfVxuXG4gIC8vIGZpZm9fcXVldWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlmb1F1ZXVlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBmaWZvUXVldWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZmlmb19xdWV1ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpZm9RdWV1ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZmlmb1F1ZXVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rmlmb1F1ZXVlKCkge1xuICAgIHRoaXMuX2ZpZm9RdWV1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlmb1F1ZXVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZm9RdWV1ZTtcbiAgfVxuXG4gIC8vIGZpZm9fdGhyb3VnaHB1dF9saW1pdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpZm9UaHJvdWdocHV0TGltaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpZm9UaHJvdWdocHV0TGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWZvX3Rocm91Z2hwdXRfbGltaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpZm9UaHJvdWdocHV0TGltaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpZm9UaHJvdWdocHV0TGltaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWZvVGhyb3VnaHB1dExpbWl0KCkge1xuICAgIHRoaXMuX2ZpZm9UaHJvdWdocHV0TGltaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpZm9UaHJvdWdocHV0TGltaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlmb1Rocm91Z2hwdXRMaW1pdDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrbXNfZGF0YV9rZXlfcmV1c2VfcGVyaW9kX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNEYXRhS2V5UmV1c2VQZXJpb2RTZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBrbXNEYXRhS2V5UmV1c2VQZXJpb2RTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgna21zX2RhdGFfa2V5X3JldXNlX3BlcmlvZF9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNEYXRhS2V5UmV1c2VQZXJpb2RTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9rbXNEYXRhS2V5UmV1c2VQZXJpb2RTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zRGF0YUtleVJldXNlUGVyaW9kU2Vjb25kcygpIHtcbiAgICB0aGlzLl9rbXNEYXRhS2V5UmV1c2VQZXJpb2RTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNEYXRhS2V5UmV1c2VQZXJpb2RTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0RhdGFLZXlSZXVzZVBlcmlvZFNlY29uZHM7XG4gIH1cblxuICAvLyBrbXNfbWFzdGVyX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNNYXN0ZXJLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zTWFzdGVyS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfbWFzdGVyX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zTWFzdGVyS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc01hc3RlcktleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zTWFzdGVyS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zTWFzdGVyS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc01hc3RlcktleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc01hc3RlcktleUlkO1xuICB9XG5cbiAgLy8gbWF4X21lc3NhZ2Vfc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhNZXNzYWdlU2l6ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4TWVzc2FnZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfbWVzc2FnZV9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhNZXNzYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4TWVzc2FnZVNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhNZXNzYWdlU2l6ZSgpIHtcbiAgICB0aGlzLl9tYXhNZXNzYWdlU2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4TWVzc2FnZVNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4TWVzc2FnZVNpemU7XG4gIH1cblxuICAvLyBtZXNzYWdlX3JldGVudGlvbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc3NhZ2VSZXRlbnRpb25TZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtZXNzYWdlUmV0ZW50aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21lc3NhZ2VfcmV0ZW50aW9uX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2VSZXRlbnRpb25TZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tZXNzYWdlUmV0ZW50aW9uU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lc3NhZ2VSZXRlbnRpb25TZWNvbmRzKCkge1xuICAgIHRoaXMuX21lc3NhZ2VSZXRlbnRpb25TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNzYWdlUmV0ZW50aW9uU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlUmV0ZW50aW9uU2Vjb25kcztcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gbmFtZV9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lUHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZV9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lUHJlZml4KCkge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVByZWZpeDtcbiAgfVxuXG4gIC8vIHBvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvbGljeSgpIHtcbiAgICB0aGlzLl9wb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb2xpY3k7XG4gIH1cblxuICAvLyByZWNlaXZlX3dhaXRfdGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlY2VpdmVXYWl0VGltZVNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHJlY2VpdmVXYWl0VGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdyZWNlaXZlX3dhaXRfdGltZV9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNlaXZlV2FpdFRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yZWNlaXZlV2FpdFRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVjZWl2ZVdhaXRUaW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl9yZWNlaXZlV2FpdFRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNlaXZlV2FpdFRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY2VpdmVXYWl0VGltZVNlY29uZHM7XG4gIH1cblxuICAvLyByZWRyaXZlX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWRyaXZlUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWRyaXZlUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVkcml2ZV9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZHJpdmVQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZHJpdmVQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWRyaXZlUG9saWN5KCkge1xuICAgIHRoaXMuX3JlZHJpdmVQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZHJpdmVQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkcml2ZVBvbGljeTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB1cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIC8vIHZpc2liaWxpdHlfdGltZW91dF9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Zpc2liaWxpdHlUaW1lb3V0U2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmlzaWJpbGl0eVRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmlzaWJpbGl0eV90aW1lb3V0X3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZpc2liaWxpdHlUaW1lb3V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmlzaWJpbGl0eVRpbWVvdXRTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmlzaWJpbGl0eVRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHRoaXMuX3Zpc2liaWxpdHlUaW1lb3V0U2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmlzaWJpbGl0eVRpbWVvdXRTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2liaWxpdHlUaW1lb3V0U2Vjb25kcztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbiksXG4gICAgICBkZWR1cGxpY2F0aW9uX3Njb3BlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWR1cGxpY2F0aW9uU2NvcGUpLFxuICAgICAgZGVsYXlfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZGVsYXlTZWNvbmRzKSxcbiAgICAgIGZpZm9fcXVldWU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9maWZvUXVldWUpLFxuICAgICAgZmlmb190aHJvdWdocHV0X2xpbWl0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maWZvVGhyb3VnaHB1dExpbWl0KSxcbiAgICAgIGttc19kYXRhX2tleV9yZXVzZV9wZXJpb2Rfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fa21zRGF0YUtleVJldXNlUGVyaW9kU2Vjb25kcyksXG4gICAgICBrbXNfbWFzdGVyX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zTWFzdGVyS2V5SWQpLFxuICAgICAgbWF4X21lc3NhZ2Vfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4TWVzc2FnZVNpemUpLFxuICAgICAgbWVzc2FnZV9yZXRlbnRpb25fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWVzc2FnZVJldGVudGlvblNlY29uZHMpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBuYW1lX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZVByZWZpeCksXG4gICAgICBwb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BvbGljeSksXG4gICAgICByZWNlaXZlX3dhaXRfdGltZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9yZWNlaXZlV2FpdFRpbWVTZWNvbmRzKSxcbiAgICAgIHJlZHJpdmVfcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZWRyaXZlUG9saWN5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdmlzaWJpbGl0eV90aW1lb3V0X3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3Zpc2liaWxpdHlUaW1lb3V0U2Vjb25kcyksXG4gICAgfTtcbiAgfVxufVxuIl19