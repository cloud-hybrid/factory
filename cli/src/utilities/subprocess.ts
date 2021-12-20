import Process from "process";
import Spawn from "child_process";

const Subprocess = async (command: string, directory: string = Process.cwd()) => {
    const Binary = command.split(" ")[0];
    const Arguments = command.split(" ").splice(1);

    const Awaitable = new Promise((resolve, reject) => {
        const Stream = {
            PID: 0,
            Status: "",
            Signal: ""
        };

        const Command = Spawn.spawn(Binary, [...Arguments], {
            argv0: Process.argv0,
            cwd: directory,
            env: Process.env,
            stdio: "overlapped"
        });

        const Output = Command.stdout;
        const Error = Command.stderr;

        Output.on("data", async (_) => {
            let Allocation = 0;

            // Allocate --> Array Buffer of (n + 1) Bytes
            const Buffer = await _;
            new Array(Buffer[Symbol.iterator]).forEach(
                (_) => Allocation += 1
            );

            // Shift <-- Left to Release Empty Byte for String[0]
            const Output = Buffer.toString("UTF-8", Allocation - 1);

            Process.stdout.write(Output);
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

            Process.stdout.write(Output);
        });

        Command.on("error", ($) => {
            Stream.PID = Command.pid || 0;
            Stream.Status = String($);
            Stream.Signal = Command.signalCode || "";

            reject({$, Command});
        });

        Command.on("exit", ($) => {
            Stream.PID = Command.pid || 0;
            Stream.Status = String($);
            Stream.Signal = Command.signalCode || "";

            resolve(Command);
        });

        Command.on("disconnect", () => {
            Stream.PID = Command.pid || 0;
            Stream.Status = "-1";
            Stream.Signal = Command.signalCode || "";

            resolve(Command);
        });

        Command.on("close", ($) => {
            Stream.PID = Command.pid || 0;
            Stream.Status = String($);
            Stream.Signal = Command.signalCode || "";

            resolve(Command);
        });
    });

    return await Awaitable;
};

export {Subprocess};

export default Subprocess;
