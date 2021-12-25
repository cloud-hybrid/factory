interface CLI {
    Main: typeof import("./cli.js").Main
}

const CLI: CLI = await import("./cli.js");

export { CLI };

export default await CLI.Main();