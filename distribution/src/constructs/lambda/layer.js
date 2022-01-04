/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     ESM Exportable Module
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import FS from "fs";
import Path from "path";
import Module from "module";
import Assertion from "assert";
/*** ESM Resolver for *Current-Working-Directory* */
const CWD = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));
/*** ESM Resolver for Package Directory relative to Current Working Directory */
const PKG = Path.dirname(CWD);
/*** ESM Resolver for Source Directory relative to the Current Working Directory */
const Source = Path.dirname(PKG);
/*** ESM Resolver for Schemas Directory relative to the Current Working Directory */
const Schemas = Path.dirname(Source);
/*** ESM Compatability & JSON Importer */
const Import = Module.createRequire(import.meta.url);
const Schema = Import(Path.join(Schemas, "layer.schema.json"));
class Layer {
    /***
     * Lambda Layer Constructor
     * ------------------------
     *
     * @param name {string} The importable package name of the lambda-layer as resolved from lambda function source code.
     * @param description {string} A description of the lambda-layer dependencies.
     * @param uri {{ type: {"s3"|"local"}, value: {string}}} A URI type that extends the location string; allows for greater flexibility
     *      with runtime assertions further than that of a regular expression. `value` is an S3-Uri or Local File-System Location of source code.
     */
    constructor(name, description, uri) {
        /*** The importable package name of the lambda-layer as resolved from lambda function source code. */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** A description of the lambda-layer dependencies. */
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** S3-Uri or Local File-System Location of source code. */
        Object.defineProperty(this, "uri", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /// /*** Options are Retain and Delete. Defaults to Retain. When Retain is set, a transformed resource is created so CloudFormation does not delete old versions after an update. */
        /// public retention?: string;
        /*** List of runtimes compatible with the layer. Value is strictly set to ensure compatibilities & consistent deployable(s). */
        Object.defineProperty(this, "runtime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "node14.x"
        });
        /*** Schema Definition */
        Object.defineProperty(this, "schema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Schema
        });
        this.name = name;
        this.description = description;
        // @todo S3 existence check + string regular expression validation
        if (uri.type === "local") {
            Assertion.strictEqual(FS.existsSync(Path.resolve(uri.value)), true);
        }
        this.uri = Path.resolve(uri.value);
    }
}
