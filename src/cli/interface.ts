import Process from "process";

import {Header} from "./header.js";
import {Arguments as CLI, Argv} from "./arguments.js";

const Factory = await import("../commands/factory/index.js");

const Main = async () => {
    Process.stdout.write(Header + "\n");

    const Arguments = async () => {
        const Commands = {
            cwd: async (input: Argv) => (await import("../commands/environment/cwd.js")).CWD(input),
            input: async (input: Argv) => (await import("../commands/test-input.js")).Input(input),
            version: (await import("../commands/version.js")).Version,

            factory: {
                deploy: async (input: Argv) => await Factory.Deploy(input),
                build: async (input: Argv) => await Factory.Build(input),
                initialize: async (input: Argv) => await Factory.Initialize(input),
                configuration: async (input: Argv) => await Factory.Configuration(input),
            }
        };

        return await CLI(Process.argv.splice(2))
            .scriptName("factory").wrap(80)

            /*** Version */
            .version(...Commands.version)
            .alias("version", "v")
            .describe("version", "Show Version Number")

            /*** Global Usage Text */
            .usage("Usage: npm run start [...]")

            /*** Global Help Command */
            .help("help")
            .alias("help", "h")
            .describe("help", "Display Additional Information & Usage Command(s)")

            .showHelpOnFail(true, "[Error]: Invalid Input")

            /*** Current Working Directory */
            .command("cwd", "Current Working Directory", (
                async ($: Argv) => {
                    return await Commands.cwd($);
                }))

            /*** Test-Input */
            .command("test-input", "Arbitrary User-Input (Testing Purposes Only)", (
                async ($: Argv) => {
                    return await Commands.input($);
                }))

            /*** CDFK Configuration */
            .command("cdfk", "(WIP) Construct Development Factory Kit", (
                async ($: Argv) => {
                    $.command("initialize", "(WIP) CDFK Package Initialization", (
                        async ($: Argv) => {
                            return await Commands.factory.initialize($);
                        }
                    ));

                    $.command("build", "(WIP) Synthesize Target Resource(s)", (
                        async ($: Argv) => {
                            return await Commands.factory.build($);
                        }
                    ));

                    $.command("deploy", "(WIP) CDFK Stack Deployment", (
                        async ($: Argv) => {
                            return await Commands.factory.deploy($);
                        }
                    ));

                    $.command("configuration", "(WIP) Construct Factory Configuration", (
                        async ($: Argv) => {
                            return await Commands.factory.configuration($);
                        }
                    ));
                }))

            .parseAsync();
    }

    const Input = await Arguments();
};

export {Main};

export default Main;