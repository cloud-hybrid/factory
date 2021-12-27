/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     ESM Exportable Module
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import FS from "fs";
import Path from "path";
import Assertion from "assert";

import {Construct} from "constructs";

import AWS, {iam as IAM} from "@cdktf/provider-aws";

import {App, TerraformStack, TerraformAsset, AssetType, TerraformOutput} from "cdktf";

type Policy = IAM.IamPolicy;

import {Import, Settings, Configuration, Distribution} from "./settings.js";

/***
 * Cloud Resource Name Normalization
 * ---------------------------------
 * Takes any given prefix, a resource name, and generates a machine-readable, normalized string
 *
 * @param prefix {string} ex) [Organization]-[Environment]
 * @param name {string} ex) API-Gateway-V2-Integration
 *
 * @returns {string}
 *
 */

function normalize(prefix: string, name: string) {
    return [
        prefix,
        name.split(" ").map(($) => {
            return $.toString()[0].toUpperCase() + $.toString().slice(1);
        }).join("-").split("_").map(($) => {
            return $.toString()[0].toUpperCase() + $.toString().slice(1);
        }).join("-").split("-").map(($) => {
            return $.toString()[0].toUpperCase() + $.toString().slice(1);
        }).join("-")
    ].join("-");
}

/*** The {@link Lambda} Construct */
class Lambda {
    public name: string;

    public readonly ID: string;

    public readonly handler: string = "index.handler";
    public readonly runtime: string = "nodejs14.x";

    public readonly directory: string;
    public readonly version: string;
    public readonly source: string;

    public readonly settings: typeof Settings = Settings;

    public readonly policy: Policy | JSON | string = JSON.stringify({
        Version: "2012-10-17",
        Statement: [
            {
                Action: "sts:AssumeRole",
                Principal: {
                    Service: "lambda.amazonaws.com"
                },
                Effect: "Allow",
                Sid: ""
            }
        ]
    }, null, 4);

    private readonly distribution: string = "distribution";

    public static Attachment = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole";

    /// public static Execution = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole";
    /// public static RO = "arn:aws:iam::aws:policy/service-role/AWSLambda_ReadOnlyAccess";
    /// public static XWO = "arn:aws:iam::aws:policy/service-role/AWSXrayWriteOnlyAccess";

    public cloud: typeof Configuration.settings["Cloud"] = Configuration.settings["Cloud"];

    /*** Common-Name or Service Extension to be used when constructing the Lambda Function Name */
    public service: string = Configuration.settings["Service"];

    public organization: string = Configuration.settings["Organization"];
    public environment: string = Configuration.settings["Environment"];

    /***
     * Lambda Strict Configuration Constructor
     *
     * @param name {String} Lambda's Folder Name (**Note**: attribute *must match folder directory name*)
     *
     * @param sam
     */

    constructor(name: string) {
        this.name = Path.parse(name).base;

        Assertion.notStrictEqual(this.name, undefined);
        Assertion.notStrictEqual(this.service, undefined);

        const Artifact = Path.join(Distribution, this.name);
        const Package = Path.join(Artifact, "package.json");
        const Version = Import(Package)?.version || null;

        Assertion.strictEqual(typeof Version, "string", "Version not Found");

        this.version = Version;
        this.directory = Artifact;
        this.source = Artifact; /// @todo

        this.ID = [this.organization, this.environment, "Lambda", this.service, this.name.split("_")].join("-");
    }
}

/***
 * **Serverless Application Model - Construct**
 * ============================================
 *
 * *The following class shall not get confused with the SAM-CLI Cloudformation Transformation(s).*
 *
 *      Overview
 *      --------
 *      SAM is a class that represents, rather, a well-formed ***Serverless Application Model***.
 *
 * @task Rename Class to API-Gateway + SAM Specific Name
 */

class SAM {
    public prefix: string;
    /*** SAM Reference to Encapsulating Folder-Name */
    public name: string;

    /*** Opinionated API Gateway-V2 Resource Name */
    public readonly gateway: string = "API-Gateway";

    /*** Auto-Generated Bucket Property - Requires Instantation */
    public readonly bucket: string;

    /*** Configuration, Read-Only Bucket Property - Requires Instantation for Access */
    public readonly directory?: string | undefined = undefined;

    /*** Configuration Setting Specifiying List of Folder(s) that Contain Lambda(s) */
    public readonly functions: string[] = [];

    /*** AWS Cloud Provider, Derived from Configuration (Settings) File */
    public readonly cloud: typeof Settings.Cloud = Settings.Cloud;
    /*** Cloud Environment Common-Name, Derived from Configuration (Settings) File */
    public readonly environment: typeof Settings.Environment = Settings.Environment;
    /*** Cloud Organization Alias, Derived from Configuration (Settings) File */
    public readonly organization: typeof Settings.Organization = Settings.Organization;

    /***
     * Construct Initializer
     * =====================
     *
     * @param name {String}
     * @param service {String}
     *
     * @returns {Instantiation}
     *
     */

    constructor() {
        this.prefix = [Settings.Organization, Settings.Environment].join("-");
        this.name = [this.prefix, Settings.Service, "Stack"].join("-");
        this.bucket = this.name.toLowerCase();

        /// Assertion to ensure a distribution target exists
        /// --> To Generate a Distribution: factory cdfk initialize
        Assertion.strictEqual(FS.existsSync(Distribution), true, "A CDK Distribution Target Doesn't Exist");
        FS.readdirSync(Distribution).forEach(($) => {
            ($ !== "library") && this.functions.push(Path.join(Distribution, $))
        });
    }

    /***
     *
     * {@link SAM.getAPIGatewayLoggingLevel|API Gateway-V2 Logging-Level}
     * ==================================================================
     *
     * References {@link https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_stage#logging_level|CFN & TF Logging-Level}
     *
     *      Whitepapers
     *     ------------
     *          - {@link https://docs.aws.amazon.com/whitepapers/latest/serverless-multi-tier-architectures-api-gateway-lambda/serverless-multi-tier-architectures-api-gateway-lambda.pdf#document-revisions|AWS Serverless Multi-Tier Architectures with Amazon API Gateway and AWS Lambda}
     *          - {@link https://docs.aws.amazon.com/whitepapers/latest/security-overview-aws-lambda/security-overview-aws-lambda.pdf#security-overview-aws-lambda|Security Overview of AWS Lambda}
     *
     * @see {@link https://docs.aws.amazon.com/whitepapers/latest/serverless-multi-tier-architectures-api-gateway-lambda/serverless-multi-tier-architectures-api-gateway-lambda.pdf#document-revisions|AWS Serverless Multi-Tier Architectures with Amazon API Gateway and AWS Lambda}
     * @see {@link https://docs.aws.amazon.com/whitepapers/latest/security-overview-aws-lambda/security-overview-aws-lambda.pdf#security-overview-aws-lambda|Security Overview of AWS Lambda}
     *
     * @returns {"ERROR", "INFO", "OFF"}
     *
     */

    getAPIGatewayLoggingLevel() {
        const $ = {value: "INFO"};

        /// --> No Break(s) Non-Pure Returns
        switch (this.environment.toUpperCase()) {
            case "PRODUCTION":
                /*** Forceful, Hard-Coded Overwrites for Production */

                $.value = "ERROR";

                return $.value;
            default:
                return $.value;
        }
    }

    /***
     * {@link SAM.getAPIGatewayStageMetricsEnabled|API Gateway-V2 Metrics Enablement}
     * ==============================================================================
     *
     * References
     *      - {@link https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_stage#detailed_metrics_enabled|Detailed Metrics & Logging}
     *
     * @see {@link https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_stage#detailed_metrics_enabled|Terraform Configuration}}
     *
     * @returns {true | false}
     *
     */

    getAPIGatewayStageMetricsEnabled() {
        const $ = {value: true};

        /// --> No Break(s) Non-Pure Returns
        switch (this.environment.toUpperCase()) {
            case "PRODUCTION":
                /*** Forceful, Hard-Coded Overwrites for Production */

                $.value = true

                return $.value;
            default:
                return $.value;
        }
    }

    /***
     * {@link SAM.generateAPIGatewayCloudWatchAccessLog|API Gateway-V2 Access Logging Generator}
     * =========================================================================================
     * References
     *      - {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-monitor.html|Monitoring HTTP-V2 APIs}
     *
     *      Documentation
     *      -------------
     *      - {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-metrics.html|Metrics}
     *      - {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-logging.html|Logging}
     *           - {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-logging-variables.html|Variables}
     *
     * @param stream {AWS.cloudwatch.CloudwatchLogStream}
     *
     * @param format
     * @returns {{
     *     destinationArn: {String},
     *     format: {String}
     * }|null}
     *
     */

    public static generateAPIGatewayCloudWatchAccessLog(stream: AWS.cloudwatch.CloudwatchLogStream | null = null, format: string | null = null) {
        return (stream === null || format === null) ? null : {
            destinationArn: String(stream.name),
            format: String(format)
        };
    }
}

class Service extends TerraformStack {
    readonly prefix: string;
    readonly identifier: string;

    constructor($: Construct, settings: SAM) {
        super($, settings.name);

        this.prefix = settings.prefix;
        this.identifier = settings.name;

        /*** Cloud Provider (AWS) */
        const provider = new AWS.AwsProvider(this, [this.identifier, "AWS-Provider"].join("-").toLowerCase(), {
            region: settings.cloud["Region"]
        });

        /*** Unique S3 Bucket Containing Lambda Artifact(s) */
        const bucket = new AWS.s3.S3Bucket(this, [this.identifier, "S3-Bucket"].join("-").toLowerCase(), {
            bucket: settings.bucket
        });

        /*** Logging Group */
        const group = new AWS.cloudwatch.CloudwatchLogGroup(this, [this.identifier, "Log-Group"].join("-").toLowerCase(), {
            name: [this.identifier, "Log-Group"].join("-")
        });

        /*** Logging Stream(s) */
        const stream = new AWS.cloudwatch.CloudwatchLogStream(this, [this.identifier, "Log-Stream"].join("-").toLowerCase(), {
            name: [this.identifier, "Log-Stream"].join("-"),
            logGroupName: group.name
        });

        /*** API Gateway */
        const api = new AWS.apigatewayv2.Apigatewayv2Api(this, [this.identifier, "Gateway"].join("-").toLowerCase(), {
            name: [this.identifier, settings.gateway].join("-"),
            description: "API Gateway V2 Resource for" + " " + this.identifier,
            protocolType: "HTTP"
        });

        /*** API Gateway-V2 Stage Configuration */
        const stage = new AWS.apigatewayv2.Apigatewayv2Stage(this, [this.identifier, "Environment-Stage"].join("-").toLowerCase(), {
            apiId: api.id,
            name: settings.environment.toLowerCase(),
            autoDeploy: true,
            description: "Gateway-V2 Deployment Stage Environment"
            // accessLogSettings: SAM.generateAPIGatewayCloudWatchAccessLog(
            //     stream,
            //     JSON.stringify({
            //         "requestId": "$context.requestId",
            //         "ip": "$context.identity.sourceIp",
            //         "requestTime": "$context.requestTime",
            //         "httpMethod": "$context.httpMethod",
            //         "routeKey": "$context.routeKey",
            //         "status": "$context.status",
            //         "protocol": "$context.protocol",
            //         "responseLength": "$context.responseLength"
            //     }, null, 4)
            // ), description: "HTTP Gateway-V2 Route-Integration Deployment Stage Environment",
            // defaultRouteSettings: staging
        });

        // const Lambdas: string[] = [];
        FS.readdirSync(Path.join(Distribution), {withFileTypes: true}).forEach(($) => {
            /// Exclude Lambda Layer Library
            if ($.name !== "library" && $.isDirectory()) {
                const Function = new Lambda($.name);
                const ID = normalize(this.prefix, Function.name);

                /*** Lambda Artifact(s) (Executable) */
                const asset = new TerraformAsset(this, [ID, "Asset"].join("-").toLowerCase(), {
                    type: AssetType.ARCHIVE,
                    path: Function.directory
                });

                /// console.debug("[Debug] Target S3 Folder-Key" + ":", [ID, "Archive", [Function.version, "zip"].join(".")].join("-"));

                /*** Upload Lambda Artifact(s) --> S3 */
                const archive = new AWS.s3.S3BucketObject(this, [ID, "Archive"].join("-").toLowerCase(), {
                    source: asset.path,
                    bucket: bucket.bucket,
                    key: [ID, "Archive", [Function.version, "zip"].join(".")].join("-")
                });

                /*** Lambda Execution Role */
                const role = new AWS.iam.IamRole(this, [ID, "Execution-Role"].join("-").toLowerCase(), {
                    name: [ID, "Execution-Role"].join("-"),
                    description: "Lambda Execution Role",
                    assumeRolePolicy: String(Function.policy),
                    lifecycle: {createBeforeDestroy: false}
                });

                /*** Lambda Layer (Dependencies) */
                const Layers: string[] = [];
                FS.readdirSync(Path.join(Distribution, "library"), {withFileTypes: true}).forEach(($) => {
                    if ($.isDirectory()) {
                        const Name = normalize(this.identifier, $.name);
                        const Directory = Path.join(Distribution, "library");

                        /*** Lambda-Layer Artifact(s) */
                        const asset = new TerraformAsset(this, [Name, "Layer-Asset"].join("-").toLowerCase(), {
                            type: AssetType.ARCHIVE,
                            path: Path.join(Directory, $.name)
                        });

                        /*** Upload Lambda Artifact(s) --> S3 */
                        const archive = new AWS.s3.S3BucketObject(this, [Name, "Layer-Archive"].join("-").toLowerCase(), {
                            source: asset.path,
                            bucket: bucket.bucket,
                            key: [Name, "Layer-Archive.zip"].join("-")
                        });

                        /*** Upload Lambda-Layer Artifact(s) --> S3 */
                        const layer = new AWS.lambdafunction.LambdaLayerVersion(this, [Name, "Layer"].join("-").toLowerCase(), {
                            layerName: Name,
                            description: "...",
                            s3Bucket: bucket.bucket,
                            s3Key: archive.key,
                        });

                        Layers.push(layer.arn);
                    }
                });

                /*** Lambda Function */
                const lambda = new AWS.lambdafunction.LambdaFunction(this, ID.toLowerCase(), {
                    functionName: [ID, "Lambda"].join("-"),
                    handler: Function.handler,
                    runtime: Function.runtime,
                    s3Bucket: bucket.bucket,
                    s3Key: archive.key,
                    layers: Layers,
                    role: role.arn
                });

                /*** Inline API Gateway ==> Lambda Invocation */
                const invocation = new AWS.lambdafunction.LambdaPermission(this, [ID, "Gateway-Invoke-Permission"].join("-").toLowerCase(), {
                    functionName: lambda.functionName,
                    action: "lambda:InvokeFunction",
                    principal: "apigateway.amazonaws.com",
                    sourceArn: [api.executionArn, "*", "*"].join("/")
                });

                /*** Managed Policy Permitting Lambda Write Access to CloudWatch */
                const policy = new AWS.iam.IamRolePolicyAttachment(this, [ID, "Execution-Role-Managed-Policy"].join("-").toLowerCase(), {
                    policyArn: Lambda.Attachment,
                    role: role.name
                });

                /***
                 * API Gateway-V2 Integration Resource
                 * ===================================
                 * Overview
                 * --------
                 * The following list summarizes the supported integration types:
                 *      - AWS: This type of integration lets an API expose AWS service actions. In AWS integration, you must configure both the integration request and integration response and set up necessary data mappings from the method request to the integration request, and from the integration response to the method response.
                 *      - AWS_PROXY: This type of integration lets an API method be integrated with the Lambda function invocation action with a flexible, versatile, and streamlined integration setup. This integration relies on direct interactions between the client and the integrated Lambda function.
                 *           - With this type of integration, also known as the Lambda proxy integration, you do not set the integration request or the integration response. API Gateway passes the incoming request from the client as the input to the backend Lambda function. The integrated Lambda function takes the input of this format and parses the input from all available sources, including request headers, URL path variables, query string parameters, and applicable body. The function returns the result following this output format.
                 *           - This is the preferred integration type to call a Lambda function through API Gateway and is not applicable to any other AWS service actions, including Lambda actions other than the function-invoking action.
                 *      - HTTP: This type of integration lets an API expose HTTP endpoints in the backend. With the HTTP integration, also known as the HTTP custom integration, you must configure both the integration request and integration response. You must set up necessary data mappings from the method request to the integration request, and from the integration response to the method response.
                 *      - HTTP_PROXY: The HTTP proxy integration allows a client to access the backend HTTP endpoints with a streamlined integration setup on single API method. You do not set the integration request or the integration response. API Gateway passes the incoming request from the client to the HTTP endpoint and passes the outgoing response from the HTTP endpoint to the client.
                 *      - MOCK: This type of integration lets API Gateway return a response without sending the request further to the backend. This is useful for API testing because it can be used to test the integration set up without incurring charges for using the backend and to enable collaborative development of an API.
                 *           - In collaborative development, a team can isolate their development effort by setting up simulations of API components owned by other teams by using the MOCK integrations. It is also used to return CORS-related headers to ensure that the API method permits CORS access. In fact, the API Gateway console integrates the OPTIONS method to support CORS with a mock integration. Gateway responses are other examples of mock integrations.
                 *
                 * - passthroughBehavior: "WHEN_NO_MATCH" (Websocket APIs Only)
                 */

                const integration = new AWS.apigatewayv2.Apigatewayv2Integration(this, [ID, "Gateway-Integration"].join("-").toLowerCase(), {
                    apiId: api.id,
                    integrationType: "AWS_PROXY",
                    connectionType: "INTERNET",
                    description: [ID, "Gateway-Integration"].join(" "),
                    payloadFormatVersion: "1.0",
                    integrationUri: lambda.arn
                });

                const route = new AWS.apigatewayv2.Apigatewayv2Route(this, [ID, "Gateway-Route"].join("-").toLowerCase(), {
                    apiId: api.id,
                    target: ["integrations", integration.id].join("/"),
                    routeKey: "GET" + " " + "/" + Function.name.toLowerCase(),
                    dependsOn: [integration]
                });
            }
        });

        /*** URI to API-Gateway-Lambda Invocation URL */
        new TerraformOutput(this, "url", {
            value: api.apiEndpoint.trim() + "\n"
        });
    }
}

const Deployment = () => {
    const Application = new App({
        skipValidation: false,
        outdir: "cdktf.out",
        stackTraces: true
    });

    return new Promise((resolve) => {
        const Stack = new SAM();

        new Service(Application, Stack);

        const Synthesize = () => {
            Application.synth();

            return true;
        };

        resolve(Synthesize());
    });
};

await Deployment();
