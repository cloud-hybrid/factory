/***
 * Node
 *
 * @type {{Version: string, Runtimes: NodeJS.ProcessVersions, Main: NodeJS.Module}}
 *
 */

const Node = {
    Version: process.version,
    Runtimes: process.versions,
    Main: process.mainModule
};

export { Node };

export default Node;