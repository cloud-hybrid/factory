import Arguments, { Argv } from "yargs";
import { hideBin } from "yargs/helpers";

declare type Argument = Arguments.Argv;
export { Arguments, hideBin };
export type { Argv, Argument };
