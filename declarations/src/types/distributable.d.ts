import Type from "./distributable.type";

declare class Distributable implements Type {
    /*** Static Class-Property Reference to Alike Distributable(s) */
    static packages: Distributable[];

    private static Remove;

    /*** Name of the Distributable Resource */
    name: string;

    /*** Current Working Directory */
    cwd: string;

    /*** Base Folder Name */
    base: string;

    /*** Source Folder */
    directory: string;

    /*** Distribution Target Folder */
    distribution: string;

    /*** File Path to `package.json` */
    definition: string;

    /*** Distribution Folder Lambda Layer */
    layer: boolean;

    /*** Overwrite Definition for `factory.json` */
    overwrites: object;

    /*** Under Development */
    factory: object | null;

    constructor(properties: Type);

    /***
     * Define Package Data
     * -------------------
     * @param data {Distributable[]} The Data Container for Package(s)
     * @param target {string} The Target Package Directory
     * @param layer {boolean} Is the Target Package a Lambda Layer
     *
     * @constructor
     *
     */
    static define(target: string, layer: boolean): void;

    static remove(path: (string), retries: number, force: boolean, recursive: boolean): Promise<void>;

    /***
     * Distribution Folder Structure Normalization
     * -------------------------------------------
     *  In order to create a distribution:
     *
     *  1. Determine a set of packages. This is performed via iterating all relative directories for `package.json` files.
     *  2. Determine lambda layers. If any folders are found within the `library` folder immediately relative to the current
     *  process's PWD, these are said to be lambda layers.
     *  3. Perform dependency installations & folder mutations. If the package is a lambda layer, install node_modules,
     *  and repackage the folder into a lambda-runtime. If the package is a lambda function, install dependencies, and move
     *  folder into distribution target folder.
     *
     * @param data { Package[] }
     * @param debug {boolean} Debug Output
     *
     * @constructor
     *
     */
    static distribute(debug?: boolean): Promise<void>;

    /***
     * Recursive Copy Function
     * -----------------------
     * *Note* - this will perform *actual, real copies*; symbolic links are resolved to their raw pointer location(s).
     *
     * These are important considerations especially when building for reproducible distributions.
     *
     * @param source {string} Original path
     * @param target {string} Target copy destination
     * @param debug {boolean} Debug Parameter
     *
     * @constructor
     *
     */
    static copy(source: string, target: string, debug?: boolean): void;

    /***
     * Shallow Copy
     * ------------
     * Shallow Copy
     *
     * @param source {string}
     * @param target {string}
     *
     * @constructor
     *
     */
    static shallow(source: string, target: string): void;

    /***
     * Strip
     * -----
     *
     * @param distribution {string} Strip a given Lambda Layer distribution folder of unneeded file(s) (everything
     * other than the `nodejs` definition.
     *
     */
    static strip(debug?: boolean): Promise<void>;
}

export { Distributable };
export default Distributable;
