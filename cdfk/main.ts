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
import Module from "module";
import Assertion from "assert";

import {Construct} from "constructs";

import AWS, {iam as IAM} from "@cdktf/provider-aws";

import {App, TerraformStack, TerraformAsset, AssetType, TerraformOutput} from "cdktf";

import {Subprocess} from "./subprocess.js";

import {Apigatewayv2StageDefaultRouteSettings} from ".gen/providers/aws/apigatewayv2";

type Policy = IAM.IamPolicy;

/*** ESM Resolver for *Current-Working-Directory* */
const CWD: string = Path.dirname(import.meta.url.replace("file" + ":" + "/", ""));
/*** ESM Resolve for Package Directory relative to Current Working Directory */
const PKG: string = Path.dirname(CWD);

/*** ESM Compatability & JSON Importer */
const Import: NodeRequire = Module.createRequire(import.meta.url);

/*** Generic Type Symbol */
const Generic: Symbol = Symbol();

/***
 * JSON Configuration
 * ==================
 *
 *  @type {await import("./configuration/settings.json")}
 *
 */

const Settings = Import("./configuration/settings.json");

function UUID() {
    let source = new Date().getTime(); // Timestamp
    let delta = ((typeof performance !== "undefined") && performance.now && (performance.now() * 1000)) || 0;

    return String((new Array(8)).join(":") + (new Array(4).join(":") + "4" + (new Array(3).join(":") + "*" + (new Array(8)).join(":")))).replace(/[:*]/g, ($) => {
        let random = Math.random() * 16; // Random number between 0 and 16

        if (source > 0) {
            random = (source + random) % 16 | 0;
            source = Math.floor(source / 16);
        } else {
            random = (delta + random) % 16 | 0;
            delta = Math.floor(delta / 16);
        }

        return ($ === ":" ? random : (random & 0x3 | 0x8)).toString(16);
    });
}

/***
 * Base Composition of `Settings`
 */

class Default {
    public configuration: typeof Settings;

    constructor() {
        this.configuration = Settings;
    }
}

/***
 * JSON Settings
 * =============
 *
 * @externs {{@link Default}, {@link Settings}}
 *
 */

class Configuration {
    public tf: boolean;
    public cfn: boolean;
    public cdk: boolean;

    public source: FS.PathLike | string;

    public environment: string;
    public organization: string;

    public readonly cloud: typeof Settings.Cloud = Settings.Cloud;

    protected readonly functions: typeof Settings.Functions = Settings.Functions;
    protected readonly deployment: typeof Settings.Deployment = Settings.Deployment;

    public settings: typeof Settings;

    private readonly defaults: typeof Settings = Settings;


    /***
     * JSON Configuration Constructor
     * ==============================
     *
     * @param settings {{ TF: boolean, CDK: boolean, CFN: boolean, Cloud: { Provider: string, Region: string }, Source: string, Service: string, Environment: string, Organization: string, Deployment: { Type: string, Method: string }, SAM: string, Functions: {} }; tf: boolean; environment: string; functions: {}; organization: string; cfn: boolean; cdk: boolean; source: string; deployment: { Type: string, Method: string }}
     *
     * @constructor
     *
     */

    constructor(settings: { settings: { TF: boolean, CDK: boolean, CFN: boolean, Cloud: { Provider: string, Region: string }, Source: string, Service: string, Environment: string, Organization: string, Deployment: { Type: string, Method: string }, SAM: string, Functions: {} }; tf: boolean; environment: string; functions: {}; organization: string; cfn: boolean; cdk: boolean; source: string; deployment: { Type: string, Method: string } } = {
        tf: Settings.TF,
        cfn: Settings.CFN,
        cdk: Settings.CDK,
        source: Settings.Source,
        environment: Settings.Environment,
        organization: Settings.Organization,
        functions: Settings.Functions,
        deployment: Settings.Deployment,
        settings: Settings
    }) {
        this.settings = settings || Settings;

        this.defaults = (new Default()).configuration;

        this.tf = settings.tf || this.defaults.TF;
        this.cdk = settings.cfn || this.defaults.CDK;
        this.cfn = settings.cdk || this.defaults.CFN;

        this.source = settings.source || this.defaults.Source;

        this.environment = settings.environment || this.defaults.Environment;
        this.organization = settings.organization || this.defaults.Organization;

        this.functions = settings.functions || this.defaults.Functions;
        this.deployment = settings.deployment || this.defaults.Deployment;
    }
}

/*** The {@link Lambda} Construct */
class Lambda extends Configuration {
    public name: string;
    public service: string = Settings.Service;

    public readonly ID: string;

    public readonly handler: string = "index.handler";
    public readonly runtime: string = "nodejs14.x";

    public readonly directory: string;
    public readonly version: string;
    public readonly source: string;

    protected readonly functions: string[] = Settings.Functions;
    protected readonly deployment: string[] = Settings.Deployment;

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

    /***
     * Lambda Strict Configuration Constructor
     *
     * @param name {String} Lambda's Folder Name (**Note**: attribute *must match folder directory name*)
     *
     * @param service {String} Common-Name or Service Extension to be used when constructing the Lambda Function Name
     *
     * @param sam
     */

    constructor(name: string, service: string = Settings.Service, sam: boolean = false) {
        super();

        this.name = name;
        this.service = service;

        Assertion.notStrictEqual(this.name, undefined);
        Assertion.notStrictEqual(this.service, undefined);

        if (sam === true) {
            const Artifact = Path.join(PKG, "packages", this.settings?.SAM, this.name, this.distribution);
            const Package = Path.join(Path.dirname(Artifact), "package.json");
            const Version = Import(Package)?.version || null;
            const Source = Path.join(PKG, "packages", this.settings?.SAM, this.name, this.source);

            (!FS?.existsSync(Source)) && console.warn("[Warning] Source Not Found" + ":", Source);

            Assertion.strictEqual(FS?.existsSync(Package), true, Lambda.Throw("Package"));
            Assertion.strictEqual(typeof Version, "string", Lambda.Throw("Version"));

            this.version = Version;
            this.directory = Artifact;
            this.source = Source;
        } else {
            const Artifact = Path.join(PKG, "packages", this.name, this.distribution);
            const Package = Path.join(Path.dirname(Artifact), "package.json");
            const Version = Import(Package)?.version || null;
            const Source = Path.join(PKG, "packages", this.name, this.source);

            (!FS?.existsSync(Source)) && console.warn("[Warning] Source Not Found" + ":", Source);

            Assertion.strictEqual(FS?.existsSync(Package), true, Lambda.Throw("Package"));
            Assertion.strictEqual(typeof Version, "string", Lambda.Throw("Version"));

            this.version = Version;
            this.directory = Artifact;
            this.source = Source;
        }

        this.ID = [this.organization, this.environment, "Lambda", this.service, this.name.split("_")].join("-");
    }

    /***
     * Private Error Constructor
     *
     * @param type {"Artifact" | "Package" | "Version"}
     *
     * @constructor
     *
     */

    private static Throw = (type: string) => {
        const Data = {
            Type: "",
            Name: "",
            Message: "",
            error: Object.create({})
        };

        switch (type) {
            case "Artifact":
                Data.Type = "[Error] Artifact";
                Data.Name = "Distributable Artifact(s) Not Found Exception";
                Data.Message = "Lambda Source Distribution Doesn't Exist";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
            case "Package":
                Data.Type = "[Error] Package";
                Data.Name = "Lambda Function Package Not Found Exception";
                Data.Message = "Lambda Source package.json Doesn't Exist";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
            case "Version":
                Data.Type = "[Error] Version";
                Data.Name = "Lambda Function Package Version := nil Exception";
                Data.Message = "Lambda Version Not Found";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
            default:
                Data.Type = "[Error] Unknown";
                Data.Name = "Unhandled Exception";
                Data.Message = "An Unknown Error has Occurred";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
        }
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
    /***  Constructed Resource Name Derived from `Organization` + `Environment` + `Service` ? `Name` */
    public readonly ID: string;

    /*** SAM Reference to Encapsulating Folder-Name */
    public name: string = Settings.SAM;

    /*** Common-Name - Constructs Unique SAM Alias or Cloud Resource Name */
    public readonly service: string = Settings.Service;

    /*** Opinionated API Gateway-V2 Resource Name */
    public readonly gateway: string = "API-Gateway";

    /*** Auto-Generated Bucket Property - Requires Instantation */
    public readonly bucket: string;

    /*** Configuration, Read-Only Bucket Property - Requires Instantation for Access */
    public readonly directory: string;

    /*** Configuration Setting Specifiying List of Folder(s) that Contain Lambda(s) */
    public readonly functions: string[] = Settings.Functions;

    /*** AWS Cloud Provider, Derived from Configuration (Settings) File */
    public readonly cloud: typeof Settings.Cloud = Settings.Cloud;
    /*** Cloud Environment Common-Name, Derived from Configuration (Settings) File */
    public readonly environment: typeof Settings.Environment = Settings.Environment;
    /*** Cloud Organization Alias, Derived from Configuration (Settings) File */
    public readonly organization: typeof Settings.Organization = Settings.Organization;

    /*** Deployment Type - *Under Development* */
    protected readonly deployment: string[] = Settings.Deployment;

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

    constructor(name: string = Settings.SAM, service: string = Settings.Service) {
        this.name = name;
        this.service = service;

        const Source = Path.join(PKG, "packages", this.name);

        (!FS?.existsSync(Source)) && console.warn("[Warning] Source Not Found" + ":", Source);

        Assertion.strictEqual(FS?.existsSync(Source), true, SAM.Throw("Directory"));

        this.bucket = ["SAM", this.service, this.name].join("-").toLowerCase();

        this.ID = [this.organization, this.environment, "SAM", this.service].join("-");
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

    /***
     * Private Error Constructor
     * =========================
     *
     * @param type {"Artifact" | "Package" | "Version"}
     *
     * @constructor
     *
     */

    private static Throw = (type: string) => {
        const Data = {
            Type: "",
            Name: "",
            Message: "",
            error: Object.create({})
        };

        switch (type) {
            case "Directory":
                Data.Type = "[Error] Directory";
                Data.Name = "Service Directory Not Found";
                Data.Message = "SAM Application Source Directory Doesn't Exist";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
            default:
                Data.Type = "[Error] Unknown";
                Data.Name = "Unhandled Exception";
                Data.Message = "An Unknown Error has Occurred";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
        }
    }
}

class Staging implements Apigatewayv2StageDefaultRouteSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}
     */
    public loggingLevel?: string;

    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
     */
    public readonly dataTraceEnabled?: boolean = true;

    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
     */
    public readonly detailedMetricsEnabled?: boolean = true;

    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
     */
    readonly throttlingBurstLimit?: number = null;

    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
     */
    readonly throttlingRateLimit?: number = null;

    constructor(model: SAM) {
        this.loggingLevel = model.getAPIGatewayLoggingLevel()
    }
}

class Stack extends TerraformStack {
    // public readonly provider: AwsProvider;
    // public readonly asset: TerraformAsset;
    // public readonly bucket: AWS.s3.S3Bucket;
    // public readonly archive: AWS.s3.S3BucketObject;
    // public readonly role: AWS.iam.IamRole;
    // public readonly policy: AWS.iam.IamPolicy;

    constructor($: Construct, ID: string, settings: Lambda) {
        super($, ID);

        /// Cloud Provider (AWS)
        const provider = new AWS.AwsProvider(this, [ID, "AWS-Provider"].join("-"), {
            region: settings.cloud["Region"]
        });

        /// Lambda Artifact(s) (Executable)
        const asset = new TerraformAsset(this, [ID, "Asset"].join("-"), {
            type: AssetType.ARCHIVE,
            path: settings.directory
        });

        /// Unique S3 Bucket Containing Lambda Artifact(s)
        const bucket = new AWS.s3.S3Bucket(this, [ID, "S3-Bucket"].join("-"), {
            bucketPrefix: String(UUID() + "-").toLowerCase()
        });

        /// Upload Lambda Artifact(s) --> S3
        const archive = new AWS.s3.S3BucketObject(this, [ID, "Archive"].join("-"), {
            source: asset.path,
            bucket: bucket.bucket,
            key: [settings.version, asset.fileName].join("/")
        });

        /// Lambda Execution Role
        const role = new AWS.iam.IamRole(this, [ID, "Execution-Role"].join("-"), {
            name: [ID, "Execution-Role"].join("-"),
            assumeRolePolicy: String(settings.policy)
        })

        /// Managed Policy Permitting Lambda Write Access to CloudWatch
        new AWS.iam.IamRolePolicyAttachment(this, [ID, "Managed-Policy"].join("-"), {
            policyArn: Lambda.Attachment,
            role: role.name
        })

        /// Lambda Function
        const lambda = new AWS.lambdafunction.LambdaFunction(this, ID, {
            functionName: ID,
            handler: settings.handler,
            runtime: settings.runtime,
            s3Bucket: bucket.bucket,
            s3Key: archive.key,
            role: role.arn
        });

        /// API Gateway
        const api = new AWS.apigatewayv2.Apigatewayv2Api(this, [ID, "Gateway"].join("-"), {
            name: [ID, "Gateway"].join("-"),
            protocolType: "HTTP",
            target: lambda.arn
        })

        /// Inline API Gateway ==> Lambda Invocation
        new AWS.lambdafunction.LambdaPermission(this, [ID, "Gateway-Invoke-Permission"].join("-"), {
            functionName: lambda.functionName,
            action: "lambda:InvokeFunction",
            principal: "apigateway.amazonaws.com",
            sourceArn: [api.executionArn, "*", "*"].join("/")
        })

        /// URI to API-Gateway-Lambda Invocation URL
        new TerraformOutput(this, "url", {
            value: api.apiEndpoint.trim()
        });
    }
}

class Service extends TerraformStack {
    constructor($: Construct, ID: string, settings: SAM) {
        super($, ID);

        /// Cloud Provider (AWS)
        const provider = new AWS.AwsProvider(this, [ID, "AWS-Provider"].join("-").toLowerCase(), {
            region: settings.cloud["Region"]
        });

        /// Unique S3 Bucket Containing Lambda Artifact(s)
        const bucket = new AWS.s3.S3Bucket(this, [ID, "S3-Bucket"].join("-").toLowerCase(), {
            bucketPrefix: settings.bucket
        });

        /// Logging Group
        const group = new AWS.cloudwatch.CloudwatchLogGroup(this, [ID, "Log-Group"].join("-").toLowerCase(), {
            name: [settings.ID, "Log-Group"].join("-")
        });

        /// Logging Stream(s)
        const stream = new AWS.cloudwatch.CloudwatchLogStream(this, [ID, "Log-Stream"].join("-").toLowerCase(), {
            name: [settings.ID, "Log-Stream"].join("-"),
            logGroupName: group.name
        });

        /// API Gateway
        const api = new AWS.apigatewayv2.Apigatewayv2Api(this, [ID, "Gateway"].join("-").toLowerCase(), {
            name: [ID, settings.gateway].join("-"),
            protocolType: "HTTP"
        });

        /// @todo Update Variable and Class Name to something more Descriptive (and accurate)
        // const staging = new Staging(settings);

        /// API Gateway-V2 Stage Configuration
        const stage = new AWS.apigatewayv2.Apigatewayv2Stage(this, [ID, "Environment-Stage"].join("-").toLowerCase(), {
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

        /// const Lambdas = [];
        settings.functions.forEach(($: string, count) => {
            console.debug("[Debug] Lambda Function Initialization" + ":", $);

            const Function = new Lambda($, settings.service, true);
            const ID = Function.name;

            console.debug("[Debug] Successfully Instantiated Function Configuration" + ":", ID);

            const Target = Path.dirname(Function.source);

            console.debug("[Debug] Compiling Distribution(s) ...");
            console.debug("[Debug] Target Directory" + ":", Target);

            Subprocess("npm run compile", Target);

            Assertion.strictEqual(FS.existsSync(Function.directory), true);

            console.debug("[Debug] Successfully Compiled Directory" + ":", Function.directory);

            /// Lambda Artifact(s) (Executable)
            const asset = new TerraformAsset(this, [ID, "Asset"].join("-").toLowerCase(), {
                type: AssetType.ARCHIVE,
                path: Function.directory
            });

            /// Upload Lambda Artifact(s) --> S3
            const archive = new AWS.s3.S3BucketObject(this, [ID, "Archive"].join("-").toLowerCase(), {
                source: asset.path,
                bucket: bucket.bucket,
                key: asset.fileName
            });

            /// Lambda Execution Role
            const role = new AWS.iam.IamRole(this, [ID, "Execution-Role"].join("-").toLowerCase(), {
                name: [ID, "Execution-Role"].join("-"),
                assumeRolePolicy: String(Function.policy),
                lifecycle: {
                    createBeforeDestroy: false
                }
            });

            /// Lambda Function
            const lambda = new AWS.lambdafunction.LambdaFunction(this, ID, {
                functionName: Function.ID,
                handler: Function.handler,
                runtime: Function.runtime,
                s3Bucket: bucket.bucket,
                s3Key: archive.key,
                role: role.arn
            });

            /// Inline API Gateway ==> Lambda Invocation
            const invocation = new AWS.lambdafunction.LambdaPermission(this, [ID, "Gateway-Invoke-Permission"].join("-").toLowerCase(), {
                functionName: lambda.functionName,
                action: "lambda:InvokeFunction",
                principal: "apigateway.amazonaws.com",
                sourceArn: [api.executionArn, "*", "*"].join("/")
            });

            /// Managed Policy Permitting Lambda Write Access to CloudWatch
            const policy = new AWS.iam.IamRolePolicyAttachment(this, [ID, "Managed-Policy"].join("-").toLowerCase(), {
                policyArn: Lambda.Attachment,
                role: role.name
            });

            // console.debug("[Debug] Target Integration API Endpoint" + ":", [api.apiEndpoint, Function.name].join("/"));

            /***
             * The following list summarizes the supported integration types:
             * - AWS: This type of integration lets an API expose AWS service actions. In AWS integration, you must configure both the integration request and integration response and set up necessary data mappings from the method request to the integration request, and from the integration response to the method response.
             * - AWS_PROXY: This type of integration lets an API method be integrated with the Lambda function invocation action with a flexible, versatile, and streamlined integration setup. This integration relies on direct interactions between the client and the integrated Lambda function.
             *      - With this type of integration, also known as the Lambda proxy integration, you do not set the integration request or the integration response. API Gateway passes the incoming request from the client as the input to the backend Lambda function. The integrated Lambda function takes the input of this format and parses the input from all available sources, including request headers, URL path variables, query string parameters, and applicable body. The function returns the result following this output format.
             *      - This is the preferred integration type to call a Lambda function through API Gateway and is not applicable to any other AWS service actions, including Lambda actions other than the function-invoking action.
             * - HTTP: This type of integration lets an API expose HTTP endpoints in the backend. With the HTTP integration, also known as the HTTP custom integration, you must configure both the integration request and integration response. You must set up necessary data mappings from the method request to the integration request, and from the integration response to the method response.
             * - HTTP_PROXY: The HTTP proxy integration allows a client to access the backend HTTP endpoints with a streamlined integration setup on single API method. You do not set the integration request or the integration response. API Gateway passes the incoming request from the client to the HTTP endpoint and passes the outgoing response from the HTTP endpoint to the client.
             * - MOCK: This type of integration lets API Gateway return a response without sending the request further to the backend. This is useful for API testing because it can be used to test the integration set up without incurring charges for using the backend and to enable collaborative development of an API.
             *      - In collaborative development, a team can isolate their development effort by setting up simulations of API components owned by other teams by using the MOCK integrations. It is also used to return CORS-related headers to ensure that the API method permits CORS access. In fact, the API Gateway console integrates the OPTIONS method to support CORS with a mock integration. Gateway responses are other examples of mock integrations.
             *
             * - passthroughBehavior: "WHEN_NO_MATCH" (Websocket APIs Only)
             */

            const integration = new AWS.apigatewayv2.Apigatewayv2Integration(this, [ID, "Gateway-Integration"].join("-").toLowerCase(), {
                apiId: api.id,
                integrationType: "AWS_PROXY",
                connectionType: "INTERNET",
                description: [ID, "Gateway-Integration"].join(" "),
                integrationUri: lambda.arn
            });

            const route = new AWS.apigatewayv2.Apigatewayv2Route(this, [ID, "Gateway-Route"].join("-").toLowerCase(), {
                apiId: api.id,
                target: ["integrations", integration.id].join("/"),
                routeKey: "GET" + " " + "/" + Function.name.toLowerCase(),
                dependsOn: [integration]
            });
        });

        /// URI to API-Gateway-Lambda Invocation URL
        new TerraformOutput(this, "url", {
            value: api.apiEndpoint.trim() + "\n"
        });
    }
}

const Application = new App();

const Single = async () => {
    Assertion.strictEqual(Settings.Functions.length, 1);
    console.debug("[Debug] Initializing Singleton Deployment Configuration(s) ...");
    const Function = Settings.Functions.pop();

    const Awaitable = new Promise((resolve) => {
        const Instance = new Lambda(Function, Settings.Service);
        const Deployment = new Stack(Application, Function.ID, Function);

        resolve(Deployment);
    });

    await Awaitable;
}

const Iterative = async () => {
    console.debug("[Debug] Initializing Iterative Deployment Configuration(s) ...");

    const Awaitables: Promise<unknown>[] = [];
    Settings.Functions.forEach(async ($: string) => {
        const Awaitable = new Promise((resolve) => {
            const Function = new Lambda($, Settings.Service);
            const Instance = new Stack(Application, Function.ID, Function);

            resolve(Instance);
        });

        Awaitables.push(Awaitable);
    });

    await Promise.all(Awaitables);
};

const System = async () => {
    console.debug("[Debug] Initializing Service Deployment Configuration(s) ...");
    const Awaitable = () => {
        return new Promise((resolve) => {
            const Stack = new SAM();
            const Instance = new Service(Application, Stack.ID, Stack);

            resolve(Instance);
        });
    }

    await Awaitable();
};

(Settings.Deployment.Type === "Single") && await Single();
(Settings.Deployment.Type === "Service") && await System();
(Settings.Deployment.Type === "Iterative") && await Iterative();

Application.synth();
