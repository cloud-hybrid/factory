/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     ESM Exportable Module
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import Lambda from "./function.js";
import { Construct as Constructor } from "constructs";
import Provider from "../provider.js";
/***
 * Lambda Packaging Construct
 * --------------------------
 * The minimal following folder structure is a requirement to deploy a lambda:
 *
 * ```
 * factory
 *  └── packages
 *       ├── artifacts.json
 *       └── service
 *            └── lambda-(n + 1)
 *                 ├── package.json
 *                 └── src
 *                      └── index.js
 * ```
 *
 * Such requirements derive from the following assumptions:
 *      - A) **The lambda function is to be readily available over HTTP protocol**
 *          * At a minimum, a single API Gateway is required
 *      - B) **The lambda function is to be REST-compliant** (without state)
 *          * Any given lambda functions cannot require the state or source dependencies of another
 *      - C) **The lambda function is to be publicly accessible** (authentication being arbitrary)
 *          * Arguably an extension of point A
 *      - D) **The lambda function is to be deployable as *apart of a larger service, or individually***
 *          * Development lifecycles see benefit in this flexibility; deployment runtimes can easily
 *            and expectedly clone in any given repository into a target directory
 *
 * Where `artifacts.json` defines the folder structure and runtime requirements in order for pipelines
 * to compile such compatible folder structure(s). Objectively, it can be assumed that such information that
 * gets written into `artifacts.json` is provided by either package maintainers or a development team(s).
 *
 */
declare type API = Provider.apigatewayv2.Apigatewayv2Api;
declare class Construct extends Lambda {
    name: string;
    description: string;
    uri: string;
    api?: API;
    constructor(scope: Constructor, id: string, name: string, description: string, uri: string, gateway: API);
}
declare const Implementation: typeof Construct;
interface Implementation extends Construct {
}
declare const Interface: (scope: Constructor, id: string, name: string, description: string, uri: string, gateway: API) => Implementation;
export default Interface;
