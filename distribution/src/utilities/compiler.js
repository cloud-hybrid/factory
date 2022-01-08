import AJV from "ajv";
import Formats from "ajv-formats";

const Compiler = new AJV({
    allErrors: true,
    verbose: false,
    strict: true,
    allowUnionTypes: true,
    allowMatchingProperties: true,
    removeAdditional: true,
    validateFormats: true,
    useDefaults: true,
    unevaluated: true,
    validateSchema: true /// loadSchema: async (uri = import.meta.url) => await import(uri)
});
Formats(Compiler);
export { Compiler };
export default Compiler;
