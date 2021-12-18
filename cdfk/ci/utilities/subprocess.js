import Process from "process";
import Spawn from "child_process";
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
export { Subprocess };
export default Subprocess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicHJvY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YnByb2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sS0FBSyxNQUFNLGVBQWUsQ0FBQztBQUdsQyxNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWUsRUFBRSxZQUFvQixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRTtJQUN0RSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sT0FBTyxHQUFHO1FBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1FBQ2hCLEtBQUssRUFBRSxNQUFNO0tBQ2hCLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRztRQUNYLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtLQUNiLENBQUM7SUFFRixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUU7UUFDcEQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1FBQ2hCLEtBQUssRUFBRSxTQUFTO0tBQ25CLENBQUMsQ0FBQztJQUVILE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGLE9BQU8sRUFBQyxVQUFVLEVBQUMsQ0FBQztBQUVwQixlQUFlLFVBQVUsQ0FBQyJ9