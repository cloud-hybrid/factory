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
const CWD: string = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));

/*** ESM Resolver for Package Directory relative to Current Working Directory */
const PKG: string = Path.dirname(CWD);

/*** ESM Resolver for Source Directory relative to the Current Working Directory */
const Source: string = Path.dirname(PKG);

/*** ESM Resolver for Schemas Directory relative to the Current Working Directory */
const Schemas: string = Path.dirname(Source);

/*** ESM Compatability & JSON Importer */
const Import: NodeRequire = Module.createRequire(import.meta.url);

const Schema: typeof import("../../schema/lambda/function.schema.json") = Import(Path.join(Schemas, "function.schema.json"))

class Lambda {
    /*** Basename of the package's directory. Ex) /Users/Development/Lambda-1 ==> `Lambda-1` */
    readonly name: string;

    /*** A description of the function. */
    public description: string;

    /*** Path to the function's deployment package within the local filesystem. */
    public package: string;

    /*** Function entrypoint. Lambda Handler's are strictly set to ensure of consistent architecture(s) & deployable(s). */
    readonly handler?: string = "index.handler";

    // /**
    //  * (Optional) List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See Lambda Layers
    //  */
    // public layers?: string[];

    /***  Lambda runtime memory allocation. Defaults to 128MB */
    public memory?: number = 128;

    /*** Function Packaging Type. Defaults and is enforced to Zip */
    readonly type?: string = "zip"

    /*** Program Runtime Environment */
    readonly runtime?: string = "node14.x";

    /*** Function timeout. Defaults to 10 seconds */
    public timeout?: number = 10;

    /*** Environment variables that are accessible from function code during execution */
    public environment?: { [key: string]: string };

    /*** Schema Definition */
    public readonly schema: typeof Schema = Schema;

    /***
     * Lambda Function Constructor
     * ---------------------------
     *
     * @param description {string} A description of the function
     * @param directory {string} Path to the function's deployment package within the local filesystem
     *
     */

    constructor(description: string, directory: string) {
        this.description = description
        this.package = Path.resolve(directory);

        Assertion.strictEqual(FS.existsSync(Path.resolve(this.package)), true);

        this.name = Path.basename(this.package);
    }
}