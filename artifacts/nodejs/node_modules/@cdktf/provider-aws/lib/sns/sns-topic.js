"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsTopic = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic}.
 *
 * @stability stable
 */
class SnsTopic extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_topic',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._applicationFailureFeedbackRoleArn = config.applicationFailureFeedbackRoleArn;
        this._applicationSuccessFeedbackRoleArn = config.applicationSuccessFeedbackRoleArn;
        this._applicationSuccessFeedbackSampleRate = config.applicationSuccessFeedbackSampleRate;
        this._contentBasedDeduplication = config.contentBasedDeduplication;
        this._deliveryPolicy = config.deliveryPolicy;
        this._displayName = config.displayName;
        this._fifoTopic = config.fifoTopic;
        this._firehoseFailureFeedbackRoleArn = config.firehoseFailureFeedbackRoleArn;
        this._firehoseSuccessFeedbackRoleArn = config.firehoseSuccessFeedbackRoleArn;
        this._firehoseSuccessFeedbackSampleRate = config.firehoseSuccessFeedbackSampleRate;
        this._httpFailureFeedbackRoleArn = config.httpFailureFeedbackRoleArn;
        this._httpSuccessFeedbackRoleArn = config.httpSuccessFeedbackRoleArn;
        this._httpSuccessFeedbackSampleRate = config.httpSuccessFeedbackSampleRate;
        this._kmsMasterKeyId = config.kmsMasterKeyId;
        this._lambdaFailureFeedbackRoleArn = config.lambdaFailureFeedbackRoleArn;
        this._lambdaSuccessFeedbackRoleArn = config.lambdaSuccessFeedbackRoleArn;
        this._lambdaSuccessFeedbackSampleRate = config.lambdaSuccessFeedbackSampleRate;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._policy = config.policy;
        this._sqsFailureFeedbackRoleArn = config.sqsFailureFeedbackRoleArn;
        this._sqsSuccessFeedbackRoleArn = config.sqsSuccessFeedbackRoleArn;
        this._sqsSuccessFeedbackSampleRate = config.sqsSuccessFeedbackSampleRate;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    /**
     * @stability stable
     */
    get applicationFailureFeedbackRoleArn() {
        return this.getStringAttribute('application_failure_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set applicationFailureFeedbackRoleArn(value) {
        this._applicationFailureFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetApplicationFailureFeedbackRoleArn() {
        this._applicationFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationFailureFeedbackRoleArnInput() {
        return this._applicationFailureFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get applicationSuccessFeedbackRoleArn() {
        return this.getStringAttribute('application_success_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set applicationSuccessFeedbackRoleArn(value) {
        this._applicationSuccessFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetApplicationSuccessFeedbackRoleArn() {
        this._applicationSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationSuccessFeedbackRoleArnInput() {
        return this._applicationSuccessFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get applicationSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('application_success_feedback_sample_rate');
    }
    /**
     * @stability stable
     */
    set applicationSuccessFeedbackSampleRate(value) {
        this._applicationSuccessFeedbackSampleRate = value;
    }
    /**
     * @stability stable
     */
    resetApplicationSuccessFeedbackSampleRate() {
        this._applicationSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationSuccessFeedbackSampleRateInput() {
        return this._applicationSuccessFeedbackSampleRate;
    }
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
    get deliveryPolicy() {
        return this.getStringAttribute('delivery_policy');
    }
    /**
     * @stability stable
     */
    set deliveryPolicy(value) {
        this._deliveryPolicy = value;
    }
    /**
     * @stability stable
     */
    resetDeliveryPolicy() {
        this._deliveryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deliveryPolicyInput() {
        return this._deliveryPolicy;
    }
    /**
     * @stability stable
     */
    get displayName() {
        return this.getStringAttribute('display_name');
    }
    /**
     * @stability stable
     */
    set displayName(value) {
        this._displayName = value;
    }
    /**
     * @stability stable
     */
    resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get displayNameInput() {
        return this._displayName;
    }
    /**
     * @stability stable
     */
    get fifoTopic() {
        return this.getBooleanAttribute('fifo_topic');
    }
    /**
     * @stability stable
     */
    set fifoTopic(value) {
        this._fifoTopic = value;
    }
    /**
     * @stability stable
     */
    resetFifoTopic() {
        this._fifoTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fifoTopicInput() {
        return this._fifoTopic;
    }
    /**
     * @stability stable
     */
    get firehoseFailureFeedbackRoleArn() {
        return this.getStringAttribute('firehose_failure_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set firehoseFailureFeedbackRoleArn(value) {
        this._firehoseFailureFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetFirehoseFailureFeedbackRoleArn() {
        this._firehoseFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get firehoseFailureFeedbackRoleArnInput() {
        return this._firehoseFailureFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get firehoseSuccessFeedbackRoleArn() {
        return this.getStringAttribute('firehose_success_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set firehoseSuccessFeedbackRoleArn(value) {
        this._firehoseSuccessFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetFirehoseSuccessFeedbackRoleArn() {
        this._firehoseSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get firehoseSuccessFeedbackRoleArnInput() {
        return this._firehoseSuccessFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get firehoseSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('firehose_success_feedback_sample_rate');
    }
    /**
     * @stability stable
     */
    set firehoseSuccessFeedbackSampleRate(value) {
        this._firehoseSuccessFeedbackSampleRate = value;
    }
    /**
     * @stability stable
     */
    resetFirehoseSuccessFeedbackSampleRate() {
        this._firehoseSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get firehoseSuccessFeedbackSampleRateInput() {
        return this._firehoseSuccessFeedbackSampleRate;
    }
    /**
     * @stability stable
     */
    get httpFailureFeedbackRoleArn() {
        return this.getStringAttribute('http_failure_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set httpFailureFeedbackRoleArn(value) {
        this._httpFailureFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetHttpFailureFeedbackRoleArn() {
        this._httpFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpFailureFeedbackRoleArnInput() {
        return this._httpFailureFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get httpSuccessFeedbackRoleArn() {
        return this.getStringAttribute('http_success_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set httpSuccessFeedbackRoleArn(value) {
        this._httpSuccessFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetHttpSuccessFeedbackRoleArn() {
        this._httpSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpSuccessFeedbackRoleArnInput() {
        return this._httpSuccessFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get httpSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('http_success_feedback_sample_rate');
    }
    /**
     * @stability stable
     */
    set httpSuccessFeedbackSampleRate(value) {
        this._httpSuccessFeedbackSampleRate = value;
    }
    /**
     * @stability stable
     */
    resetHttpSuccessFeedbackSampleRate() {
        this._httpSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpSuccessFeedbackSampleRateInput() {
        return this._httpSuccessFeedbackSampleRate;
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
    get lambdaFailureFeedbackRoleArn() {
        return this.getStringAttribute('lambda_failure_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set lambdaFailureFeedbackRoleArn(value) {
        this._lambdaFailureFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetLambdaFailureFeedbackRoleArn() {
        this._lambdaFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaFailureFeedbackRoleArnInput() {
        return this._lambdaFailureFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get lambdaSuccessFeedbackRoleArn() {
        return this.getStringAttribute('lambda_success_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set lambdaSuccessFeedbackRoleArn(value) {
        this._lambdaSuccessFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetLambdaSuccessFeedbackRoleArn() {
        this._lambdaSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaSuccessFeedbackRoleArnInput() {
        return this._lambdaSuccessFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get lambdaSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('lambda_success_feedback_sample_rate');
    }
    /**
     * @stability stable
     */
    set lambdaSuccessFeedbackSampleRate(value) {
        this._lambdaSuccessFeedbackSampleRate = value;
    }
    /**
     * @stability stable
     */
    resetLambdaSuccessFeedbackSampleRate() {
        this._lambdaSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaSuccessFeedbackSampleRateInput() {
        return this._lambdaSuccessFeedbackSampleRate;
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
    // owner - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get owner() {
        return this.getStringAttribute('owner');
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
    get sqsFailureFeedbackRoleArn() {
        return this.getStringAttribute('sqs_failure_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set sqsFailureFeedbackRoleArn(value) {
        this._sqsFailureFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetSqsFailureFeedbackRoleArn() {
        this._sqsFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sqsFailureFeedbackRoleArnInput() {
        return this._sqsFailureFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get sqsSuccessFeedbackRoleArn() {
        return this.getStringAttribute('sqs_success_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set sqsSuccessFeedbackRoleArn(value) {
        this._sqsSuccessFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetSqsSuccessFeedbackRoleArn() {
        this._sqsSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sqsSuccessFeedbackRoleArnInput() {
        return this._sqsSuccessFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get sqsSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('sqs_success_feedback_sample_rate');
    }
    /**
     * @stability stable
     */
    set sqsSuccessFeedbackSampleRate(value) {
        this._sqsSuccessFeedbackSampleRate = value;
    }
    /**
     * @stability stable
     */
    resetSqsSuccessFeedbackSampleRate() {
        this._sqsSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sqsSuccessFeedbackSampleRateInput() {
        return this._sqsSuccessFeedbackSampleRate;
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
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
            application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
            application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
            content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
            delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
            display_name: cdktf.stringToTerraform(this._displayName),
            fifo_topic: cdktf.booleanToTerraform(this._fifoTopic),
            firehose_failure_feedback_role_arn: cdktf.stringToTerraform(this._firehoseFailureFeedbackRoleArn),
            firehose_success_feedback_role_arn: cdktf.stringToTerraform(this._firehoseSuccessFeedbackRoleArn),
            firehose_success_feedback_sample_rate: cdktf.numberToTerraform(this._firehoseSuccessFeedbackSampleRate),
            http_failure_feedback_role_arn: cdktf.stringToTerraform(this._httpFailureFeedbackRoleArn),
            http_success_feedback_role_arn: cdktf.stringToTerraform(this._httpSuccessFeedbackRoleArn),
            http_success_feedback_sample_rate: cdktf.numberToTerraform(this._httpSuccessFeedbackSampleRate),
            kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
            lambda_failure_feedback_role_arn: cdktf.stringToTerraform(this._lambdaFailureFeedbackRoleArn),
            lambda_success_feedback_role_arn: cdktf.stringToTerraform(this._lambdaSuccessFeedbackRoleArn),
            lambda_success_feedback_sample_rate: cdktf.numberToTerraform(this._lambdaSuccessFeedbackSampleRate),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            sqs_failure_feedback_role_arn: cdktf.stringToTerraform(this._sqsFailureFeedbackRoleArn),
            sqs_success_feedback_role_arn: cdktf.stringToTerraform(this._sqsSuccessFeedbackRoleArn),
            sqs_success_feedback_sample_rate: cdktf.numberToTerraform(this._sqsSuccessFeedbackSampleRate),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
exports.SnsTopic = SnsTopic;
_a = JSII_RTTI_SYMBOL_1;
SnsTopic[_a] = { fqn: "@cdktf/provider-aws.sns.SnsTopic", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SnsTopic.tfResourceType = "aws_sns_topic";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25zLXRvcGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nucy9zbnMtdG9waWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQXlEL0IsTUFBYSxRQUFTLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9uRCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBeUIsRUFBRTtRQUMxRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGVBQWU7WUFDdEMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQztRQUNuRixJQUFJLENBQUMscUNBQXFDLEdBQUcsTUFBTSxDQUFDLG9DQUFvQyxDQUFDO1FBQ3pGLElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDbkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLCtCQUErQixHQUFHLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQztRQUM3RSxJQUFJLENB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LENBQUM7WUFDdkYsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztZQUM3RixJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNoRSxDQUFDO0lBQ0osQ0FBQzs7QUF2ZkgsNEJBd2ZDOzs7QUF0ZkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyx1QkFBYyxHQUFXLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU25zVG9waWNDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRCYXNlZERlZHVwbGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxpdmVyeVBvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWZvVG9waWM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zTWFzdGVyS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZVByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFNuc1RvcGljIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3Nuc190b3BpY1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTbnNUb3BpY0NvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc25zX3RvcGljJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IGNvbmZpZy5hcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5fYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSBjb25maWcuYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlO1xuICAgIHRoaXMuX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb24gPSBjb25maWcuY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbjtcbiAgICB0aGlzLl9kZWxpdmVyeVBvbGljeSA9IGNvbmZpZy5kZWxpdmVyeVBvbGljeTtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IGNvbmZpZy5kaXNwbGF5TmFtZTtcbiAgICB0aGlzLl9maWZvVG9waWMgPSBjb25maWcuZmlmb1RvcGljO1xuICAgIHRoaXMuX2ZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IGNvbmZpZy5maXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSBjb25maWcuZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlO1xuICAgIHRoaXMuX2h0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmh0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX2h0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX2h0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gY29uZmlnLmh0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlO1xuICAgIHRoaXMuX2ttc01hc3RlcktleUlkID0gY29uZmlnLmttc01hc3RlcktleUlkO1xuICAgIHRoaXMuX2xhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSBjb25maWcubGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmxhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5fbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IGNvbmZpZy5sYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gY29uZmlnLm5hbWVQcmVmaXg7XG4gICAgdGhpcy5fcG9saWN5ID0gY29uZmlnLnBvbGljeTtcbiAgICB0aGlzLl9zcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLnNxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IGNvbmZpZy5zcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSBjb25maWcuc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcHBsaWNhdGlvbl9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwbGljYXRpb25fZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGFwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhcHBsaWNhdGlvbl9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfYmFzZWRfZGVkdXBsaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZW50QmFzZWREZWR1cGxpY2F0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjb250ZW50QmFzZWREZWR1cGxpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvbnRlbnRfYmFzZWRfZGVkdXBsaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRCYXNlZERlZHVwbGljYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250ZW50QmFzZWREZWR1cGxpY2F0aW9uKCkge1xuICAgIHRoaXMuX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRCYXNlZERlZHVwbGljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbjtcbiAgfVxuXG4gIC8vIGRlbGl2ZXJ5X3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxpdmVyeVBvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxpdmVyeV9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGl2ZXJ5UG9saWN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxpdmVyeVBvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGl2ZXJ5UG9saWN5KCkge1xuICAgIHRoaXMuX2RlbGl2ZXJ5UG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxpdmVyeVBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxpdmVyeVBvbGljeTtcbiAgfVxuXG4gIC8vIGRpc3BsYXlfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaXNwbGF5TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXNwbGF5X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpc3BsYXlOYW1lKCkge1xuICAgIHRoaXMuX2Rpc3BsYXlOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXNwbGF5TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TmFtZTtcbiAgfVxuXG4gIC8vIGZpZm9fdG9waWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlmb1RvcGljPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBmaWZvVG9waWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZmlmb190b3BpYycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpZm9Ub3BpYyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZmlmb1RvcGljID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rmlmb1RvcGljKCkge1xuICAgIHRoaXMuX2ZpZm9Ub3BpYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlmb1RvcGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZm9Ub3BpYztcbiAgfVxuXG4gIC8vIGZpcmVob3NlX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlyZWhvc2VGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaXJlaG9zZV9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9maXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpcmVob3NlRmFpbHVyZUZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gIH1cblxuICAvLyBmaXJlaG9zZV9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlyZWhvc2Vfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgdGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICB9XG5cbiAgLy8gZmlyZWhvc2Vfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maXJlaG9zZVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ZpcmVob3NlX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgfVxuXG4gIC8vIGh0dHBfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHR0cEZhaWx1cmVGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodHRwX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2h0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGh0dHBfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodHRwX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2h0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGh0dHBfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdodHRwX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX2h0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrbXNfbWFzdGVyX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNNYXN0ZXJLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zTWFzdGVyS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfbWFzdGVyX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zTWFzdGVyS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc01hc3RlcktleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zTWFzdGVyS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zTWFzdGVyS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc01hc3RlcktleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc01hc3RlcktleUlkO1xuICB9XG5cbiAgLy8gbGFtYmRhX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhbWJkYV9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9sYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gIH1cblxuICAvLyBsYW1iZGFfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGxhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGxhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdsYW1iZGFfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgdGhpcy5fbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBuYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZVByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWVQcmVmaXgoKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lUHJlZml4O1xuICB9XG5cbiAgLy8gb3duZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyJyk7XG4gIH1cblxuICAvLyBwb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9saWN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb2xpY3koKSB7XG4gICAgdGhpcy5fcG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9saWN5O1xuICB9XG5cbiAgLy8gc3FzX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nxc19mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9zcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gIH1cblxuICAvLyBzcXNfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3FzX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIHNxc19zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzcXNfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBwbGljYXRpb25fZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGFwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiksXG4gICAgICBhcHBsaWNhdGlvbl9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbiksXG4gICAgICBkZWxpdmVyeV9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlbGl2ZXJ5UG9saWN5KSxcbiAgICAgIGRpc3BsYXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGlzcGxheU5hbWUpLFxuICAgICAgZmlmb190b3BpYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZpZm9Ub3BpYyksXG4gICAgICBmaXJlaG9zZV9mYWlsdXJlX2ZlZWRiYWNrX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maXJlaG9zZUZhaWx1cmVGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgZmlyZWhvc2Vfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZmlyZWhvc2VTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGZpcmVob3NlX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2ZpcmVob3NlU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSksXG4gICAgICBodHRwX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2h0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGh0dHBfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgaHR0cF9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSksXG4gICAgICBrbXNfbWFzdGVyX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zTWFzdGVyS2V5SWQpLFxuICAgICAgbGFtYmRhX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBuYW1lX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZVByZWZpeCksXG4gICAgICBwb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BvbGljeSksXG4gICAgICBzcXNfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybiksXG4gICAgICBzcXNfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiksXG4gICAgICBzcXNfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICB9O1xuICB9XG59XG4iXX0=