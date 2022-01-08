interface Parameters {
    name: string;

    message: string;
}

declare class Schema extends Error {
    stackTraceLimit: number;

    private trace;

    private reference;

    private captureStackTrace;

    constructor(configuration: Parameters, trace?: number, capture?: Function);
}

export { Schema };
export default Schema;
