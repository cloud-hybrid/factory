#!/usr/bin/env node

import Subprocess from "child_process";

Subprocess.spawnSync("npm", ["install", "."], { shell: true, stdio: "inherit", cwd: "./cli" });
Subprocess.spawnSync("tsc", ["--build", "--pretty"], { shell: true, stdio: "inherit", cwd: "./cli" });

Subprocess.spawnSync("npm", ["install", "."], { shell: true, stdio: "inherit", cwd: "./cdfk" });
Subprocess.spawnSync("tsc", ["--build", "--pretty"], { shell: true, stdio: "inherit", cwd: "./cdfk" });

Subprocess.spawnSync("npm", ["install", "."], { shell: true, stdio: "inherit", cwd: "." });
