import Process from "process";

import { Header } from "@cloud-vault/cli/header";
import { Columns } from "@cloud-vault/cli/utilities/tty";
import { Subprocess } from "@cloud-vault/cli/utilities/subprocess";
import { Arguments as CLI, Argv } from "@cloud-vault/cli/arguments";
import { Prompt } from "@cloud-vault/cli/utilities/prompt";
import { Binary } from "@cloud-vault/cli/utilities/binary";

const Main = async () => {
    Process.stdout.write(Header + "\n");

    const Arguments = async () => {
        const Commands = {
            cwd: async (input: Argv) => (await import("@cloud-vault/cli/commands/environment/cwd")).Command(input),
            version: (await import("@cloud-vault/cli/commands/version")).Version
        };

        // const Commands = await import("./commands/index.js");
        return await CLI(Process.argv.splice(2))
            .wrap(Columns())

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

            .command("cwd", "Current Working Directory", (
                async ($: Argv) => {
                    return await Commands.cwd($);
            }))

            .parseAsync();

        /// Example) >>> .command(
        /// Example) >>>     "math",
        /// Example) >>>     "math description",
        /// Example) >>>     Commands.Example
        /// Example) >>> )

        /// Example) >>> .string(["username", "token"])
        /// Example) >>> .implies("username", "token")

        /// Example) >>> .example("Global", "npx @cloud-vault/cli --quiet")
        /// Example) >>> .example("Package", "npm run start -- --quiet")
        /// Example) >>> .example("Local", "node index --quiet")
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

export { Main };

export default Main;