import Process from "process";
import { Header } from "./header.js";
import { Arguments as CLI } from "./arguments.js";
const Factory = await import("../commands/factory/index.js");
const Main = async () => {
    Process.stdout.write(Header + "\n");
    const Arguments = async () => {
        const Commands = {
            cwd: async (input) => (await import("../commands/environment/cwd.js")).CWD(input),
            environment: async (input) => (await import("../commands/environment/configuration.js")).Configuration(input),
            input: async (input) => (await import("../commands/test-input.js")).Input(input),
            version: (await import("../commands/version.js")).Version,
            factory: {
                deploy: async (input) => await Factory.Deploy(input),
                initialize: async (input) => await Factory.Initialize(input),
                "build-layer": async (input) => await Factory.Layer(input)
                /// build: async (input: Argv) => await Factory.Build(input),
                /// configuration: async (input: Argv) => await Factory.Configuration(input),
            }
        };
        return await CLI(Process.argv.splice(2))
            .scriptName("cloud-factory").wrap(120)
            /*** Version */
            .version(...Commands.version)
            .alias("version", "v")
            .describe("version", "Show Version Number")
            /*** Global Usage Text */
            .usage("Usage: $ cloud-factory [...]")
            /*** Global Help Command */
            .help("help")
            .alias("help", "h")
            .describe("help", "Display Additional Information & Usage Command(s)")
            .showHelpOnFail(true, "[Error]: Invalid Input")
            /*** Runtime Environment */
            .command("environment", "Runtime Environment Command(s)", (async ($) => {
            const Length = (await $.argv)["_"].length;
            (Length <= 1) && $.help("help", "Display Usage Guide").default("help", true);
            /*** NPM Configuration */
            $.command("npm-configuration", "NPM Runtime Environment Variable(s) & Configuration", (async ($) => await Commands.environment($)));
            /*** Current Working Directory */
            $.command("cwd", "Current Working Directory", (async ($) => {
                return await Commands.cwd($);
            }));
            /// (Length === 1) && $.command("environment", "Runtime Environment Command(s)").help();
        }))
            /*** Test-Input */
            .command("test-input", "Arbitrary User-Input (Testing Purposes Only)", (async ($) => {
            return await Commands.input($);
        }))
            /*** CDFK Configuration */
            .command("ci-cd", "(WIP) Construct Development Factory Kit", (async ($) => {
            const Length = (await $.argv)["_"].length;
            (Length <= 1) && $.help("help", "Display Usage Guide").default("help", true);
            $.command("initialize", "(WIP) Package Initialization", (async ($) => {
                return await Commands.factory.initialize($);
            }));
            /// $.command("build", "(WIP) Synthesize Target Resource(s)", (
            ///     async ($: Argv) => {
            ///         return await Commands.factory.build($);
            ///     }
            /// ));
            $.command("deploy", "(WIP) Stack Deployment", (async ($) => {
                return await Commands.factory.deploy($);
            }));
            $.command("build-layer", "(WIP) Build a Lambda Layer", (async ($) => {
                return await Commands.factory["build-layer"]($);
            }));
            /// $.command("configuration", "(WIP) Construct Factory Configuration", (
            ///     async ($: Argv) => {
            ///         return await Commands.factory.configuration($);
            ///     }
            /// ));
        }))
            .showHelpOnFail(true, "Error Parsing CLI Input(s)")
            .parseAsync();
    };
    const Input = await Arguments();
};
export { Main };
export default Main;
