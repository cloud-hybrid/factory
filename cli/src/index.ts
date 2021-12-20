// export * from "@cloud-vault/cli";

export * from "@cloud-vault/cli/commands";
export * from "@cloud-vault/cli/utilities";
export * from "@cloud-vault/cli/arguments";
export * from "@cloud-vault/cli/header";

interface CLI {
    Main: typeof import("./cli.js").Main
}

const CLI: CLI = await import("./cli.js");

export { CLI };

export default CLI.Main();
