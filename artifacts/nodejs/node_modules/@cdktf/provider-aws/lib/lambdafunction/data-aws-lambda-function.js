"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsLambdaFunction = exports.DataAwsLambdaFunctionVpcConfig = exports.DataAwsLambdaFunctionTracingConfig = exports.DataAwsLambdaFunctionFileSystemConfig = exports.DataAwsLambdaFunctionEnvironment = exports.DataAwsLambdaFunctionDeadLetterConfig = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsLambdaFunctionDeadLetterConfig extends cdktf.ComplexComputedList {
    // target_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get targetArn() {
        return this.getStringAttribute('target_arn');
    }
}
exports.DataAwsLambdaFunctionDeadLetterConfig = DataAwsLambdaFunctionDeadLetterConfig;
_a = JSII_RTTI_SYMBOL_1;
DataAwsLambdaFunctionDeadLetterConfig[_a] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaFunctionDeadLetterConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLambdaFunctionEnvironment extends cdktf.ComplexComputedList {
    // variables - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get variables() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('variables');
    }
}
exports.DataAwsLambdaFunctionEnvironment = DataAwsLambdaFunctionEnvironment;
_b = JSII_RTTI_SYMBOL_1;
DataAwsLambdaFunctionEnvironment[_b] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaFunctionEnvironment", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLambdaFunctionFileSystemConfig extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // local_mount_path - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get localMountPath() {
        return this.getStringAttribute('local_mount_path');
    }
}
exports.DataAwsLambdaFunctionFileSystemConfig = DataAwsLambdaFunctionFileSystemConfig;
_c = JSII_RTTI_SYMBOL_1;
DataAwsLambdaFunctionFileSystemConfig[_c] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaFunctionFileSystemConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLambdaFunctionTracingConfig extends cdktf.ComplexComputedList {
    // mode - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get mode() {
        return this.getStringAttribute('mode');
    }
}
exports.DataAwsLambdaFunctionTracingConfig = DataAwsLambdaFunctionTracingConfig;
_d = JSII_RTTI_SYMBOL_1;
DataAwsLambdaFunctionTracingConfig[_d] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaFunctionTracingConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLambdaFunctionVpcConfig extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnet_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    // vpc_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
}
exports.DataAwsLambdaFunctionVpcConfig = DataAwsLambdaFunctionVpcConfig;
_e = JSII_RTTI_SYMBOL_1;
DataAwsLambdaFunctionVpcConfig[_e] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaFunctionVpcConfig", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html aws_lambda_function}.
 *
 * @stability stable
 */
class DataAwsLambdaFunction extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html aws_lambda_function} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lambda_function',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._functionName = config.functionName;
        this._qualifier = config.qualifier;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // architectures - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get architectures() {
        return this.getListAttribute('architectures');
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // code_signing_config_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get codeSigningConfigArn() {
        return this.getStringAttribute('code_signing_config_arn');
    }
    // dead_letter_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    deadLetterConfig(index) {
        return new DataAwsLambdaFunctionDeadLetterConfig(this, 'dead_letter_config', index);
    }
    // description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    // environment - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    environment(index) {
        return new DataAwsLambdaFunctionEnvironment(this, 'environment', index);
    }
    // file_system_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    fileSystemConfig(index) {
        return new DataAwsLambdaFunctionFileSystemConfig(this, 'file_system_config', index);
    }
    /**
     * @stability stable
     */
    get functionName() {
        return this.getStringAttribute('function_name');
    }
    /**
     * @stability stable
     */
    set functionName(value) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get functionNameInput() {
        return this._functionName;
    }
    // handler - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get handler() {
        return this.getStringAttribute('handler');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // image_uri - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    // invoke_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get invokeArn() {
        return this.getStringAttribute('invoke_arn');
    }
    // kms_key_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    // last_modified - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    // layers - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get layers() {
        return this.getListAttribute('layers');
    }
    // memory_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get memorySize() {
        return this.getNumberAttribute('memory_size');
    }
    // qualified_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get qualifiedArn() {
        return this.getStringAttribute('qualified_arn');
    }
    /**
     * @stability stable
     */
    get qualifier() {
        return this.getStringAttribute('qualifier');
    }
    /**
     * @stability stable
     */
    set qualifier(value) {
        this._qualifier = value;
    }
    /**
     * @stability stable
     */
    resetQualifier() {
        this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get qualifierInput() {
        return this._qualifier;
    }
    // reserved_concurrent_executions - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get reservedConcurrentExecutions() {
        return this.getNumberAttribute('reserved_concurrent_executions');
    }
    // role - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get role() {
        return this.getStringAttribute('role');
    }
    // runtime - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get runtime() {
        return this.getStringAttribute('runtime');
    }
    // signing_job_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get signingJobArn() {
        return this.getStringAttribute('signing_job_arn');
    }
    // signing_profile_version_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get signingProfileVersionArn() {
        return this.getStringAttribute('signing_profile_version_arn');
    }
    // source_code_hash - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sourceCodeHash() {
        return this.getStringAttribute('source_code_hash');
    }
    // source_code_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sourceCodeSize() {
        return this.getNumberAttribute('source_code_size');
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
    // timeout - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    // tracing_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    tracingConfig(index) {
        return new DataAwsLambdaFunctionTracingConfig(this, 'tracing_config', index);
    }
    // version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get version() {
        return this.getStringAttribute('version');
    }
    // vpc_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    vpcConfig(index) {
        return new DataAwsLambdaFunctionVpcConfig(this, 'vpc_config', index);
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            function_name: cdktf.stringToTerraform(this._functionName),
            qualifier: cdktf.stringToTerraform(this._qualifier),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.DataAwsLambdaFunction = DataAwsLambdaFunction;
_f = JSII_RTTI_SYMBOL_1;
DataAwsLambdaFunction[_f] = { fqn: "@cdktf/provider-aws.lambdafunction.DataAwsLambdaFunction", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsLambdaFunction.tfResourceType = "aws_lambda_function";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbGFtYmRhLWZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xhbWJkYWZ1bmN0aW9uL2RhdGEtYXdzLWxhbWJkYS1mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQVcvQixNQUFhLHFDQUFzQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFbEYsZ0VBQWdFOzs7O0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOztBQUxILHNGQU1DOzs7Ozs7QUFDRCxNQUFhLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0UsK0RBQStEOzs7O0lBQy9ELElBQVcsU0FBUztRQUNsQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFRLENBQUM7SUFDNUQsQ0FBQzs7QUFOSCw0RUFPQzs7Ozs7O0FBQ0QsTUFBYSxxQ0FBc0MsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxGLHlEQUF5RDs7OztJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0VBQXNFOzs7O0lBQ3RFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0FBVkgsc0ZBV0M7Ozs7OztBQUNELE1BQWEsa0NBQW1DLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUvRSwwREFBMEQ7Ozs7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7QUFMSCxnRkFNQzs7Ozs7O0FBQ0QsTUFBYSw4QkFBK0IsU0FBUSxLQUFLLENBQUMs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QW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxvQ0FBYyxHQUFXLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzTGFtYmRhRnVuY3Rpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHF1YWxpZmllcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhbWJkYUZ1bmN0aW9uRGVhZExldHRlckNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHRhcmdldF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXJnZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXJnZXRfYXJuJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGFtYmRhRnVuY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHZhcmlhYmxlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhcmlhYmxlcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFyaWFibGVzJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhbWJkYUZ1bmN0aW9uRmlsZVN5c3RlbUNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gbG9jYWxfbW91bnRfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvY2FsTW91bnRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfbW91bnRfcGF0aCcpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhbWJkYUZ1bmN0aW9uVHJhY2luZ0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9kZScpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhbWJkYUZ1bmN0aW9uVnBjQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG5cbiAgLy8gdnBjX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYW1iZGFGdW5jdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2xhbWJkYV9mdW5jdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NMYW1iZGFGdW5jdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2xhbWJkYV9mdW5jdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9mdW5jdGlvbk5hbWUgPSBjb25maWcuZnVuY3Rpb25OYW1lO1xuICAgIHRoaXMuX3F1YWxpZmllciA9IGNvbmZpZy5xdWFsaWZpZXI7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcmNoaXRlY3R1cmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJjaGl0ZWN0dXJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhcmNoaXRlY3R1cmVzJyk7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNvZGVfc2lnbmluZ19jb25maWdfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29kZVNpZ25pbmdDb25maWdBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlX3NpZ25pbmdfY29uZmlnX2FybicpO1xuICB9XG5cbiAgLy8gZGVhZF9sZXR0ZXJfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBkZWFkTGV0dGVyQ29uZmlnKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NMYW1iZGFGdW5jdGlvbkRlYWRMZXR0ZXJDb25maWcodGhpcywgJ2RlYWRfbGV0dGVyX2NvbmZpZycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gZW52aXJvbm1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGVudmlyb25tZW50KGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NMYW1iZGFGdW5jdGlvbkVudmlyb25tZW50KHRoaXMsICdlbnZpcm9ubWVudCcsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGZpbGVfc3lzdGVtX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZmlsZVN5c3RlbUNvbmZpZyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGFtYmRhRnVuY3Rpb25GaWxlU3lzdGVtQ29uZmlnKHRoaXMsICdmaWxlX3N5c3RlbV9jb25maWcnLCBpbmRleCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Z1bmN0aW9uTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnVuY3Rpb25fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnVuY3Rpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mdW5jdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uTmFtZTtcbiAgfVxuXG4gIC8vIGhhbmRsZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGFuZGxlcicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGltYWdlX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfdXJpJyk7XG4gIH1cblxuICAvLyBpbnZva2VfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW52b2tlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW52b2tlX2FybicpO1xuICB9XG5cbiAgLy8ga21zX2tleV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2FybicpO1xuICB9XG5cbiAgLy8gbGFzdF9tb2RpZmllZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RNb2RpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfbW9kaWZpZWQnKTtcbiAgfVxuXG4gIC8vIGxheWVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxheWVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsYXllcnMnKTtcbiAgfVxuXG4gIC8vIG1lbW9yeV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWVtb3J5U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21lbW9yeV9zaXplJyk7XG4gIH1cblxuICAvLyBxdWFsaWZpZWRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVhbGlmaWVkQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncXVhbGlmaWVkX2FybicpO1xuICB9XG5cbiAgLy8gcXVhbGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3F1YWxpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncXVhbGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBxdWFsaWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1YWxpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFF1YWxpZmllcigpIHtcbiAgICB0aGlzLl9xdWFsaWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1YWxpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWFsaWZpZXI7XG4gIH1cblxuICAvLyByZXNlcnZlZF9jb25jdXJyZW50X2V4ZWN1dGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXNlcnZlZENvbmN1cnJlbnRFeGVjdXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncmVzZXJ2ZWRfY29uY3VycmVudF9leGVjdXRpb25zJyk7XG4gIH1cblxuICAvLyByb2xlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgfVxuXG4gIC8vIHJ1bnRpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBydW50aW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncnVudGltZScpO1xuICB9XG5cbiAgLy8gc2lnbmluZ19qb2JfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2lnbmluZ0pvYkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NpZ25pbmdfam9iX2FybicpO1xuICB9XG5cbiAgLy8gc2lnbmluZ19wcm9maWxlX3ZlcnNpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2lnbmluZ1Byb2ZpbGVWZXJzaW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2lnbmluZ19wcm9maWxlX3ZlcnNpb25fYXJuJyk7XG4gIH1cblxuICAvLyBzb3VyY2VfY29kZV9oYXNoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlQ29kZUhhc2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2VfY29kZV9oYXNoJyk7XG4gIH1cblxuICAvLyBzb3VyY2VfY29kZV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlQ29kZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzb3VyY2VfY29kZV9zaXplJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRpbWVvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0aW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dCcpO1xuICB9XG5cbiAgLy8gdHJhY2luZ19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHRyYWNpbmdDb25maWcoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0xhbWJkYUZ1bmN0aW9uVHJhY2luZ0NvbmZpZyh0aGlzLCAndHJhY2luZ19jb25maWcnLCBpbmRleCk7XG4gIH1cblxuICAvLyB2ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIHZwY19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHZwY0NvbmZpZyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGFtYmRhRnVuY3Rpb25WcGNDb25maWcodGhpcywgJ3ZwY19jb25maWcnLCBpbmRleCk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bmN0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Z1bmN0aW9uTmFtZSksXG4gICAgICBxdWFsaWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3F1YWxpZmllciksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=