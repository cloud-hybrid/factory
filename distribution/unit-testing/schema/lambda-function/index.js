import AJV from "ajv";
import Module from "module";
const Import = Module.createRequire(import.meta.url);
const Compiler = new AJV({
    allErrors: true,
    verbose: false,
    strict: false,
    allowUnionTypes: true,
    allowMatchingProperties: true,
    removeAdditional: true,
    validateFormats: true,
    useDefaults: true,
    unevaluated: true,
    validateSchema: true
});
const Reference = {
    definitions: {
        node: {
            properties: {
                val: { type: "float64" }
            },
            optionalProperties: {
                next: { ref: "node" }
            }
        }
    },
    ref: "node"
};
// Compiler.addMetaSchema(Meta);
const $ = Import("./index.json");
const validate = Compiler.compile($);
class Constructor {
    constructor() {
        Object.defineProperty(this, "schema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pointers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.schema = $;
        this.pointers = $.$defs;
    }
}
console.log(validate({
    name: "test",
    description: "...",
    uri: "./index.js"
}));
console.log(validate.errors);
console.log(validate({
    name: "test"
}));
console.log(validate.errors);
export default Constructor;
