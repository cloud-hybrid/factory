import { default as Git } from "./git/Module.js";
import { default as Package } from "./packaging/Module.js";
import { default as Environment } from "./environment/Module.js";

console.debug(JSON.stringify(Package, null, 4));
console.debug(JSON.stringify(Git, null, 4));
console.debug(JSON.stringify(Environment, null, 4));
