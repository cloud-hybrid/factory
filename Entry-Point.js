#!/usr/bin/env node

import Subprocess  from "child_process";

Subprocess.execSync("npm install", )

import { default as CLI } from "./cli/src/index.js";

const Main = async () => await CLI;

export default await Main();
