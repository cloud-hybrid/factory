// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudWatch Event Bridge
*/
export interface CloudwatchEventApiDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#connection_arn CloudwatchEventApiDestination#connection_arn}
  */
  readonly connectionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#description CloudwatchEventApiDestination#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#http_method CloudwatchEventApiDestination#http_method}
  */
  readonly httpMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}
  */
  readonly invocationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}
  */
  readonly invocationRateLimitPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#name CloudwatchEventApiDestination#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination}
*/
export class CloudwatchEventApiDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudwatch_event_api_destination";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchEventApiDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchEventApiDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_api_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionArn = config.connectionArn;
    this._description = config.description;
    this._httpMethod = config.httpMethod;
    this._invocationEndpoint = config.invocationEndpoint;
    this._invocationRateLimitPerSecond = config.invocationRateLimitPerSecond;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connection_arn - computed: false, optional: false, required: true
  private _connectionArn?: string; 
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }
  public set connectionArn(value: string) {
    this._connectionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionArnInput() {
    return this._connectionArn;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invocation_endpoint - computed: false, optional: false, required: true
  private _invocationEndpoint?: string; 
  public get invocationEndpoint() {
    return this.getStringAttribute('invocation_endpoint');
  }
  public set invocationEndpoint(value: string) {
    this._invocationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationEndpointInput() {
    return this._invocationEndpoint;
  }

  // invocation_rate_limit_per_second - computed: false, optional: true, required: false
  private _invocationRateLimitPerSecond?: number; 
  public get invocationRateLimitPerSecond() {
    return this.getNumberAttribute('invocation_rate_limit_per_second');
  }
  public set invocationRateLimitPerSecond(value: number) {
    this._invocationRateLimitPerSecond = value;
  }
  public resetInvocationRateLimitPerSecond() {
    this._invocationRateLimitPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationRateLimitPerSecondInput() {
    return this._invocationRateLimitPerSecond;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_arn: cdktf.stringToTerraform(this._connectionArn),
      description: cdktf.stringToTerraform(this._description),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      invocation_endpoint: cdktf.stringToTerraform(this._invocationEndpoint),
      invocation_rate_limit_per_second: cdktf.numberToTerraform(this._invocationRateLimitPerSecond),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
