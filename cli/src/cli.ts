import Process from "process";

import {Header} from "@cloud-vault/cli/header";
import {Columns} from "@cloud-vault/cli/utilities/tty";
import {Subprocess} from "@cloud-vault/cli/utilities/subprocess";
import {Arguments as CLI, Argv} from "@cloud-vault/cli/arguments";
import {Prompt} from "@cloud-vault/cli/utilities/prompt";
import {Binary} from "@cloud-vault/cli/utilities/binary";
import {Initialize} from "./commands/cdfk";

const Main = async () => {
    Process.stdout.write(Header + "\n");

    const Arguments = async () => {
        const Commands = {
            cwd: async (input: Argv) => (await import("@cloud-vault/cli/commands/environment/cwd")).CWD(input),
            input: async (input: Argv) => (await import("@cloud-vault/cli/commands/test-input")).Input(input),
            version: (await import("@cloud-vault/cli/commands/version")).Version,

            cdfk: {
                deploy: async (input: Argv) => (await import("@cloud-vault/cli/commands/cdfk/deploy")).Deploy(input),
                build: async (input: Argv) => (await import("@cloud-vault/cli/commands/cdfk/build")).Build(input),
                initialize: async (input: Argv) => (await import("@cloud-vault/cli/commands/cdfk/initialize")).Initialize(input),
                configuration: async (input: Argv) => (await import("@cloud-vault/cli/commands/cdfk/configuration")).Configuration(input)
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
                            return await Commands.cdfk.initialize($);
                        }
                    ));

                    $.command("build", "(WIP) Synthesize Target Resource(s)", (
                        async ($: Argv) => {
                            return await Commands.cdfk.build($);
                        }
                    ));

                    $.command("deploy", "(WIP) CDFK Stack Deployment", (
                        async ($: Argv) => {
                            return await Commands.cdfk.deploy($);
                        }
                    ));

                    $.command("configuration", "(WIP) Construct Factory Configuration", (
                        async ($: Argv) => {
                            return await Commands.cdfk.configuration($);
                        }
                    ));
                }))

            .parseAsync();
    }

    const Input = await Arguments();

    /// console.dir(Input);

    if (!Binary("cdktf")) {
        Process.stdout.write(["Terraform CDK - Not Installed", "\n", "\n"].join(""));

        const Query: string = await Prompt("Install CDKTF ? (Y/N): ");

        (Query.toUpperCase() === "Y") ? await Subprocess("npm install --global cdktf-cli")
            : Process.exit(1);
    }
};

export {Main};

export default Main;