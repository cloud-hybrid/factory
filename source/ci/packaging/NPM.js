/***
 * Variable
 *
 * @param variable
 *
 * @return {{value: (string|null), key}}
 *
 * @constructor
 *
 */

const Variable = (variable) => {
    return {
        key: variable,
        value: process.env[variable] || null
    };
};

/***
 * Package
 *
 * @return {{name: {value: (string|null), key}, json: {value: (string|null), key}, version: {value: (string|null), key}}}
 *
 * @constructor
 *
 */

const Package = () => {
    const prefix = ["npm", "package"];

    const name = [... prefix, "name"].join("_");
    const json = [... prefix, "json"].join("_");
    const version = [... prefix, "version"].join("_");

    return {
        name: Variable(name),
        json: Variable(json),
        version: Variable(version)
    };
};

/***
 * Configuration
 *
 * @return {{cache: {value: (string|null), key}}}
 *
 * @constructor
 *
 */

const Configuration = () => {
    const prefix = ["npm", "config"];

    const cache = [... prefix, "cache"].join("_");

    return {
        cache: Variable(cache)
    };
};

/***
 * Node
 *
 * @return {{exec: {value: (string|null), key}}}
 *
 * @constructor
 *
 */

const Node = () => {
    const prefix = ["npm", "node"];

    const exec = [... prefix, "exec"].join("_");

    return {
        exec: Variable(exec)
    };
};

/***
 * Lifecycle
 *
 * @return {{event: {value: (string|null), key}}}
 *
 * @constructor
 *
 */

const Lifecycle = () => {
    const prefix = ["npm", "lifecycle"];

    const event = [... prefix, "event"].join("_");

    return {
        event: Variable(event)
    };
};

/***
 * Command
 *
 * @return {{value: (string|null), key}}
 *
 * @constructor
 *
 */

const Command = () => {
    return Variable(["npm", "command"].join("_"));
};

/***
 * Abstraction
 *
 * @type {{Configuration: {cache: {value: (string|null), key}}, Command: {value: (string|null), key}, Node: {exec: {value: (string|null), key}}, Lifecycle: {event: {value: (string|null), key}}, Package: {name: {value: (string|null), key}, json: {value: (string|null), key}, version: {value: (string|null), key}}}}
 *
 */

const Abstraction = {
    Command: Command(),
    Package: Package(),
    Node: Node(),
    Lifecycle: Lifecycle(),
    Configuration: Configuration()
};

export { Abstraction };

export default Abstraction;