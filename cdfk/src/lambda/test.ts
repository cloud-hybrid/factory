import Function from "./function.js";
import {default as Lambda} from "./construct.js";
import { App, TerraformStack, TerraformAsset, AssetType } from "cdktf";

import {AWS} from "./provider.js";
import IAM from "./iam.js";

import {Construct} from "constructs";

const Application = new App({
    skipValidation: false,
    stackTraces: true
});

const instance = new Function(Application,
    "test-construct",
    "test-function-name",
    "description",
    "/Users/io/Next/Cloud-Hybrid/factory/packages"
);

class Stack extends TerraformStack {
    // public readonly provider: AwsProvider;
    // public readonly asset: TerraformAsset;
    // public readonly bucket: AWS.s3.S3Bucket;
    // public readonly archive: AWS.s3.S3BucketObject;
    // public readonly role: AWS.iam.IamRole;
    // public readonly policy: AWS.iam.IamPolicy;

    constructor(scope: Construct, id: string, instance: Function) {
        super(scope, id);

        /*** Cloud Provider (AWS) */
        const provider = new AWS.AwsProvider(this, [id, "AWS-Provider"].join("-").toLowerCase(), {
            region: "us-east-2"
        });

        /*** API Gateway */
        const api = new AWS.apigatewayv2.Apigatewayv2Api(this, [id, "Gateway"].join("-").toLowerCase(), {
            name: [id, "API-Gateway"].join("-"),
            protocolType: "HTTP"
        });

        const lambda = instance;
    }
}

const t = new Stack(Application, "test", instance);

console.debug(t);

Application.synth()