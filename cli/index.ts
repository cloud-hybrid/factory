interface CLI {
    Main: typeof import("@cloud-vault/cli/cli.js").Main
}

const CLI: CLI = await import("@cloud-vault/cli/cli.js");

export { CLI };

export default await CLI.Main();