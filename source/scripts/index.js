#!/usr/bin/env node

/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 *
 * Subprocess Spawner
 *
 * ```
 * ├── README.md
 * ├── package.json
 * ├── scripts
 * |     ├── Platform.js    <-- CLI Target Script
 * |     ├── Process.js     <-- Child-Process Import
 * │     ├── index.js       <-- The Containing Module
 * │     └── package.json   <-- ESM Compliant Package
 * ```
 *
 * @example
 * >>> node scripts/index.js --script Platform.js
 *
*/

import FS from "fs";
import Path from "path";
import * as URI from "url";

import Process from "process";

const CWD = Process.cwd();
const Arguments = Process.argv.splice(2);

const $ = {
    Debug: Arguments.indexOf("--debug") !== -1,
    Script: Arguments[Arguments.indexOf("--script") + 1]
};

const File = URI.fileURLToPath(import.meta.url);
const Folder = Path.dirname(import.meta.url);
const Normalization = Path.normalize(Folder)
    .replace("file:", "");

Process.chdir(Normalization);

const Relative = Path.relative(CWD, Folder).split(":")[0].replace("/file", "");

const Contents = FS.readdirSync(".");

($.Debug) && console.debug("[Debug] CWD" + ":", CWD);
($.Debug) && console.debug("[Debug] File" + ":", File);
($.Debug) && console.debug("[Debug] Folder" + ":", Folder);
($.Debug) && console.debug("[Debug] Relative" + ":", Relative);
($.Debug) && console.debug("[Debug] Directory" + ":", Contents);

const Commands = {
    Relative: null,
    System: null
};

Contents.forEach((Index) => {
    if ( Index.endsWith(".js") && Index !== "index.js" && Index !== "Process.js" && Index === $.Script ) {
        const Local = {};
        const System = {};

        Local.Normalized = [process.argv0, [Relative, Index].join("/").replace("file://", "")];
        Local.Shell = process.argv0 + " " + [Relative, Index].join("/").replace("file://", "");

        System.Normalized = [process.argv0, [Folder, Index].join("/").replace("file://", "")];
        System.Shell = process.argv0 + " " + [Folder, Index].join("/").replace("file://", "");

        Commands.Relative = Local;
        Commands.System = System;
    }
});

const Target = Path.join(CWD, "package.json");
const Package = (FS.existsSync(Target))
    ? FS.readFileSync(Target, {encoding: "UTF-8"})
    : null;

export const Scripts = (Package) ? JSON.parse(Package)["scripts"] : null;

($.Debug) && console.debug("[Debug] Scripts" + ":", JSON.stringify(Scripts, null, 4));
($.Debug) && console.debug("[Debug] Commands" + ":", JSON.stringify(Commands, null, 4));

const Run = Contents.includes($.Script);

(Run && $.Debug) && console.debug(Commands.System.Shell);

(Run) && import("./Process.js").then(async (Module) => await Module.Subprocess(Commands.System.Shell));
