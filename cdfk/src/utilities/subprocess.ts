import Process from "process";
import Spawn from "child_process";

/***
 * Subprocess Spawner
 * ==================
 *
 * @param command {String} Denormalized, Shell Command
 * @param directory {String} System Target Path for a Current-Working-Directory
 *
 * @constructor
 *
 */

const Subprocess = (command: string, directory: string = Process.cwd()) => {
    const Binary = command.split(" ")[0];
    const Arguments = command.split(" ").splice(1);

    return Spawn.spawnSync(Binary, [...Arguments], {
        argv0: Process.argv0,
        cwd: directory,
        env: Process.env,
        stdio: "inherit"
    });
};

export {Subprocess};

export default Subprocess;
