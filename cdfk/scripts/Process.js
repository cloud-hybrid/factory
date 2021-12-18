/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
*/

import Runtime from "process";
import Child from "child_process";

const Process = Child.exec;

export const Subprocess = async (command) => {
    const $ = Process(command);

    const Output = $.stdout;
    const Error = $.stderr;

    Output.on("data", async (_) => {
        let Allocation = 0;

        // Allocate --> Array Buffer of (n + 1) Bytes
        const Buffer = await _;
        new Array(Buffer[Symbol.iterator]).forEach(
            (_) => Allocation += 1
        );

        // Shift <-- Left to Release Empty Byte for String[0]
        const Output = Buffer.toString("UTF-8", Allocation - 1);

        Runtime.stdout.write(Output);
    });

    Error.on("data", async (_) => {
        let Allocation = 0;

        // Allocate an Array Buffer of (n + 1) Bytes
        const Buffer = await _;
        new Array(Buffer[Symbol.iterator]).forEach(
            (_) => Allocation += 1
        );

        // Shift <-- Left to Release Empty Byte for String[0]
        const Output = Buffer.toString("UTF-8", Allocation - 1);

        Runtime.stdout.write(Output);
    });

    $.on("error", (_) => {
        console.error("Error", JSON.stringify(
            _, null, 4)
        );
    });

    $.on("close", (_) => {
        console.log("Exit Code: " + String(_));

        return Promise.resolve();
    });
};