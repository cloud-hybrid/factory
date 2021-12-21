// export * from "./arguments.js";
// export * from "./header.js";
//
// export * from "./utilities/index.js";
//
// export * from "./commands/index.js"
// export * from "./commands/environment/index.js";
// export * from "./commands/environment/variables/index.js";
// export * from "./commands/cdfk/index.js";

interface CLI {
    Main: typeof import("./cli.js").Main
}

const CLI: CLI = await import("./cli.js");

export { CLI };

export default await CLI.Main();