import Terraform, { TerraformAsset as Archive } from "cdktf";
import { Construct } from "constructs";

declare const Stack: typeof Terraform.TerraformStack;

interface Configuration extends Terraform.TerraformAssetConfig {
    readonly path: string;
}

declare class Asset extends Archive implements Configuration {
    static Type: {
        File: number;
        Directory: number;
        Archive: number;
    };

    constructor(identifier: string, stack: Construct, configuration: Configuration);
}

export { Stack, Asset };
declare const _default: {
    Stack: typeof Terraform.TerraformStack;
    Asset: typeof Asset;
};
export default _default;
