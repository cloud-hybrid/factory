#!/usr/bin/env node

import Path from "path";
import Subprocess from "child_process";

const CWD = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));

Subprocess.spawnSync("npm", ["install", "--silent"], { stdio: "inherit", cwd: Path.join(CWD, "cli") });
Subprocess.spawnSync("npm", ["install", "--silent"], { stdio: "inherit", cwd: Path.join(CWD, "cdfk") });

Subprocess.spawnSync("tsc", ["--build"], { stdio: "inherit", cwd: Path.join(CWD, "cli") });
Subprocess.spawnSync("tsc", ["--build"], { stdio: "inherit", cwd: Path.join(CWD, "cdfk") });

Subprocess.spawnSync("npm", ["install", "--global"], { stdio: "inherit", cwd: CWD });
