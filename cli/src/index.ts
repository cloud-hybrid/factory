export * from "./cli.js";

export * from "./index.js";
export * from "./header.js";
export * from "./arguments.js";

const CLI = async () => await (await import("@cloud-vault/cli")).Main();

export { CLI };

export default CLI;
