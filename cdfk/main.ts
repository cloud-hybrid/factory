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

type Policy = IAM.IamPolicy;

const CWD: string = Path.dirname(import.meta.url.replace("file" + ":" + "/", ""));
const PKG: string = Path.dirname(CWD);

const Import: NodeRequire = Module.createRequire(import.meta.url);

/***
 *  **Note**: Ensure to keep Import's Path to a relative URI in order to keep Type-Hinting
 *
 *  @typedef {await import("./configuration/settings.json")} Settings
 *
 */

export const Settings = Import("./configuration/settings.json");

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

class Default {
    public configuration: typeof Settings;

    constructor() {
        this.configuration = Settings;
    }
}

class Configuration {
    public tf: boolean;
    public cfn: boolean;
    public cdk: boolean;

    public source: FS.PathLike | string;

    public environment: string;
    public organization: string;

    public readonly cloud: typeof Settings.Cloud = Settings.Cloud;

    private defaults: typeof Settings;

    constructor(settings = {
        tf: Settings.TF,
        cfn: Settings.CFN,
        cdk: Settings.CDK,
        source: Settings.Source,
        environment: Settings.Environment,
        organization: Settings.Organization
    }) {
        this.defaults = (new Default()).configuration;

        this.tf = settings.tf || this.defaults.TF;
        this.cdk = settings.cfn || this.defaults.CDK;
        this.cfn = settings.cdk || this.defaults.CFN;

        this.source = settings.source || this.defaults.Source;

        this.environment = settings.environment || this.defaults.Environment;
        this.organization = settings.organization || this.defaults.Organization;
    }
}

class Lambda extends Configuration {
    public name: string;

    public readonly ID: string;

    public readonly handler: string = "index.handler";
    public readonly runtime: string = "nodejs14.x";

    public readonly directory: string;
    public readonly version: string;
    public readonly source: string;

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
     */

    constructor(name: string, service: string) {
        super();

        this.name = name;

        const Artifact = Path.join(PKG, name, this.distribution);
        const Package = Path.join(Path.dirname(Artifact), "package.json");
        const Version = Import(Package)?.version || null;
        const Source = Path.join(PKG, name, this.source);

        Assertion.strictEqual(FS.existsSync(Package), true, Lambda.Throw("Package"));
        Assertion.strictEqual(typeof Version, "string", Lambda.Throw("Version"));

        this.version = Version;
        this.directory = Artifact;
        this.source = Source;

        this.ID = [this.organization, this.environment, "Lambda", service].join("-");
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
                Data.Type = "[Error]";
                Data.Name = "Distributable Artifact(s) Not Found Exception";
                Data.Message = "Lambda Source Distribution Doesn't Exist";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
            case "Package":
                Data.Type = "[Error]";
                Data.Name = "Lambda Function Package Not Found Exception";
                Data.Message = "Lambda Source package.json Doesn't Exist";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
            case "Version":
                Data.Type = "[Error]";
                Data.Name = "Lambda Function Package Version := nil Exception";
                Data.Message = "Lambda Version Not Found";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
            default:
                Data.Type = "[Error]";
                Data.Name = "Unhandled Exception";
                Data.Message = "An Unknown Error has Occurred";

                Data.error = Error([Data.Type, Data.Message].join(" "));
                Data.error.name = Data.Name;

                return Data.error;
        }
    }
}

class Stack extends TerraformStack {
    constructor($: Construct, ID: string, settings: Lambda) {
        super($, ID);

        /// Cloud Provider (AWS)
        new AWS.AwsProvider(this, [ID, "AWS-Provider"].join("-"), {
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
        const api = new AWS.apigatewayv2.Apigatewayv2Api(this, [ID, "Gateway"].join(" "), {
            name: [ID, "Gateway"].join("-"),
            protocolType: "HTTP",
            target: lambda.arn
        })

        /// Inline API Gateway ==> Lambda Invocation
        new AWS.lambdafunction.LambdaPermission(this, [ID, "Gateway-Invoke-Permission"].join(" "), {
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


const Application = new App();

const Main = async () => {
    const Awaitable = () => new Promise((resolve) => {
        try {
            const Application = new App();
            const Function = new Lambda("lambda", "POC-Service");

            new Stack(Application, Function.ID, Function);

            Application.synth();
        } catch (error) {
            console.error(error);

            throw error;
        } finally {
            resolve(true);
        }
    });

    await Awaitable();
};

const Function = new Lambda("lambda", "POC-Service");

const $ = new Stack(Application, Function.ID, Function);

Application.synth();
