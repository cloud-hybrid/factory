#!/usr/bin/env node

import Path from "path";
import Subprocess from "child_process";

Subprocess.spawnSync("npm", ["install", "--global", "typescript"], { shell: true, stdio: "inherit" });

Subprocess.spawnSync("npm", ["install", "."], { shell: true, stdio: "inherit", cwd: "./cli" });
Subprocess.spawnSync("tsc", ["--build", "--pretty"], { shell: true, stdio: "inherit", cwd: "./cli" });

Subprocess.spawnSync("npm", ["install", "."], { shell: true, stdio: "inherit", cwd: "./cdfk" });
Subprocess.spawnSync("tsc", ["--build", "--pretty"], { shell: true, stdio: "inherit", cwd: "./cdfk" });

Subprocess.spawnSync("npm", ["install", "."], { shell: true, stdio: "inherit", cwd: "." });

//await import("@cloud-vault/cli");
//
////import { default as CLI } from "@cloud-vault/cli";