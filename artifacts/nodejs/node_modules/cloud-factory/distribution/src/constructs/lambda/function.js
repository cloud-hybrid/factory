/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     ESM Exportable Module
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import OS from "os";
import Path from "path";
import Module from "module";
import Error from "../../errors/schema.js";
import { Compiler } from "../../utilities/compiler.js";
import { Construct } from "constructs";
/// --- --- --- /// --- --- --- /// --- --- --- /// --- --- --- /// --- --- --- /// --- --- --- /// --- --- --- ///
/*** ESM Resolver for *Current-Working-Directory* */
const CWD = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));
/*** ESM Resolver for Source` Directory relative to Current Working Directory */
const Source = Path.dirname(CWD);
/*** ESM Resolver for Package Directory relative to the Current Working Directory */
const PKG = Path.dirname(Source);
/*** ESM Resolver for Schemas Directory relative to the Current Working Directory */
const Schemas = Path.join(PKG, "schema");
/*** ESM Resolver for Configuration File relative to the Current Working Directory */
const Configuration = Path.join(Schemas, "lambda", "function.schema.json");
/*** ESM Compatability & JSON Importer */
const Import = Module.createRequire(import.meta.url);
const Definition = Import(Configuration);
const Compilation = Compiler.compile(Definition);
/// --- --- --- /// --- --- --- /// --- --- --- /// --- --- --- /// --- --- --- /// --- --- --- /// --- --- --- ///
class Lambda extends Construct {
    /***
     * Lambda Function Constructor
     * ---------------------------
     *
     * @param scope
     * @param id
     * @param name
     * @param description
     * @param uri
     * @param $ { Settings }
     */
    constructor(scope, id, name, description, uri, $ = { name, description, uri }) {
        super(scope, id);
        /*** Basename of the package's directory. Ex) /Users/Development/Lambda-1 ==> `Lambda-1` */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** A description of the function. */
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** Path to the function's deployment package within the local filesystem. */
        Object.defineProperty(this, "uri", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** Function entrypoint. Lambda Handler's are strictly set to ensure of consistent architecture(s) & deployable(s). */
        Object.defineProperty(this, "handler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * List of Lambda Layers.
         */
        Object.defineProperty(this, "Layers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /***  Lambda runtime memory allocation. Defaults to 128MB */
        Object.defineProperty(this, "memory", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** Function Packaging Type. Defaults and is enforced to Zip */
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** Program Runtime Environment */
        Object.defineProperty(this, "runtime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** Function timeout. Defaults to 10 seconds */
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** Environment variables that are accessible from function code during execution */
        Object.defineProperty(this, "environment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** Environment variables that are accessible from function code during execution */
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.description = description;
        this.uri = uri;
        const Schema = this.validate();
        this.runtime = $?.runtime || Schema.properties.runtime.default;
        this.handler = $?.handler || Schema.properties.handler.default;
        this.memory = $?.memory || Schema.properties.memory.default;
        this.type = $?.type || Schema.properties.type.default;
        this.runtime = $?.runtime || Schema.properties.runtime.default;
        this.timeout = $?.timeout || Schema.properties.timeout.default;
        // @ts-ignore
        this.environment = $?.Environment || Schema.properties.environment.default;
        this.tags = Schema.properties.tags.default;
        this.confirm();
    }
    validate() {
        Compilation(this);
        // @ts-ignore
        const $ = Compilation.schema;
        if (Compilation?.errors) {
            throw new Error({
                name: "Lambda-Schema-Error",
                message: JSON.stringify({
                    Error: Compilation.errors.map(($) => $),
                    // Instance: this
                }, null, 4)
            }, OS.constants.signals.SIGTERM, this.constructor);
        }
        return $;
    }
    confirm() {
        this.validate();
    }
}
export { Lambda };
export default Lambda;
