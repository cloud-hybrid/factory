export * from "@cloud-vault/cli";

export * from "@cloud-vault/cli/commands";
export * from "@cloud-vault/cli/utilities";
export * from "@cloud-vault/cli/arguments";
export * from "@cloud-vault/cli/header";

const CLI = await import("./cli.js");

export { CLI };

export default CLI.Main();
