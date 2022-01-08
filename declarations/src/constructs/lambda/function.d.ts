/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     ESM Exportable Module
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import { Construct } from "constructs";

/*** ESM Resolver for Configuration File relative to the Current Working Directory */
declare const Configuration: string;

interface Configuration {
    name: string;

    description: string;

    uri: string;

    handler?: string | undefined;

    Layers?: string[] | undefined;

    memory?: number | undefined;

    type?: string | undefined;

    runtime?: string | undefined;

    timeout?: number | undefined;

    environment?: {
        [p: string]: string | undefined;
    } | object | undefined;

    tags?: {
        [p: string]: string | undefined;
    } | object | undefined;
}

interface Settings extends Configuration {
}

declare class Lambda extends Construct implements Settings {
    /*** Basename of the package's directory. Ex) /Users/Development/Lambda-1 ==> `Lambda-1` */
    readonly name: string;

    /*** A description of the function. */
    readonly description: string;

    /*** Path to the function's deployment package within the local filesystem. */
    readonly uri: string;

    /*** Function entrypoint. Lambda Handler's are strictly set to ensure of consistent architecture(s) & deployable(s). */
    readonly handler: string;

    /**
     * List of Lambda Layers.
     */
    readonly Layers?: string[];

    /***  Lambda runtime memory allocation. Defaults to 128MB */
    readonly memory: number;

    /*** Function Packaging Type. Defaults and is enforced to Zip */
    readonly type: string;

    /*** Program Runtime Environment */
    readonly runtime: string;

    /*** Function timeout. Defaults to 10 seconds */
    readonly timeout: number;

    /*** Environment variables that are accessible from function code during execution */
    readonly environment: {
        [p: string]: string;
    };

    /*** Environment variables that are accessible from function code during execution */
    readonly tags?: {
        [p: string]: string;
    } | undefined;

    private validate;

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
    constructor(scope: Construct, id: string, name: string, description: string, uri: string, $?: Settings);

    confirm(): void;
}

export { Lambda };
export default Lambda;
