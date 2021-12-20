# CDFK - Construct Factory (CLI) #

*Development Extensions & Utilities* for the `@cloud-vault/factory` Package.

## Table of Contents ##

[[_TOC_]]

## Overview ##

### Local Development ###

#### Dependencies ####

```bash
npm install .
```

#### Auto-Compilation ####

```bash
# Runs Type-Script Compiler: tsc --pretty --watch
npm run compile

# In another separate TTY or Terminal Session:
npm run start || npm run cli
```

## External Usage ##

In order to integrate `@cloud-vault/cli` with a given package, establish any
named file -- `cli.ts` as an example -- with the following content:

```js
import { default as CLI } from "@cloud-vault/cli";

const Main = async () => await CLI;

export default await Main();
```

With the above code content, it is a requirement for the given package to be ESM
module compliant.

Optionally, the CLI package can also be interfaced via:

```js
await import("@cloud-vault/cli");
```
