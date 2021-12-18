import Process from "process";
import Spawn from "child_process";
import Runtime from "process";

const Subprocess = (command, directory = Process.cwd()) => {
    const Binary = command.split(" ")[0];
    const Arguments = command.split(" ").splice(1);
    const Options = {
        argv0: Process.argv0,
        cwd: directory,
        env: Process.env,
        stdio: "pipe"
    };

    const Stream = {
        PID: 0,
        Status: "",
        Signal: {}
    };

    const Command = Spawn.spawnSync(Binary, [...Arguments], {
        argv0: Process.argv0,
        cwd: directory,
        env: Process.env,
        stdio: "inherit"
    });

    return Command;
};

export {Subprocess};

export default Subprocess;
