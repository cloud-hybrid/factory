import TTY from "tty";
import Process from "process";

import Colors from "chalk";
import Arguments, { Argv } from "yargs";
import { Parser, hideBin as Hide } from "yargs/helpers";

// @ts-ignore
import Prompt from "@cloud-vault/cli-prompt";

import Subprocess from "./utilities/subprocess.js";
import Platform from "./utilities/platform.js";
import Header from "./header.js";

const Device = TTY.isatty(Process.stdout.fd);

const Rows = () => (Device) ? Process.stdout.rows : null;
const Columns = () => (Device) ? Process.stdout.columns : null;

export { Parser, Arguments, Argv, Hide, Device, Rows, Columns, Colors, Header, Platform, Prompt, Subprocess };

export default {
    Parser, Arguments, Hide, Device, Rows, Columns, Colors, Platform, Prompt, Subprocess
};