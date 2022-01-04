import Terraform, { TerraformAsset as Archive } from "cdktf";
const Stack = Terraform.TerraformStack;
class Asset extends Archive {
    constructor(identifier, stack, configuration) {
        super(stack, identifier, { type: configuration.type ?? 2, path: configuration.path });
    }
}
Object.defineProperty(Asset, "Type", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        File: 0,
        Directory: 1,
        Archive: 2
    }
});
export { Stack, Asset };
export default { Stack, Asset };
