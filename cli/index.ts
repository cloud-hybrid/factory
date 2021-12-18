import * as Library from "./src/package.js";

const CLI = await (await import("./src/cli.js")).Main();

export { CLI, Library };

export default CLI;