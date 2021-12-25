import Process from "process";
import Utility from "util";

interface Parameters {
    name: string;
    message: string;
}

class Schema extends Error {
    constructor(configuration: Parameters, exit: number, trace: number = 3, capture: Function = () => null) {
        super(configuration.message);

        /*** Ensure the Error-Name is Machine-Readable */
        this.name = configuration.name.replace(" ", "-");

        // This clips the constructor invocation from the stack trace.
        Error.stackTraceLimit = trace;
        Error.captureStackTrace(this, (capture !== null) ? capture : this.constructor);
    }
}

export { Schema };

export default Schema;