# CDFK - Construct Factory (CLI) #

*Development Extensions & Utilities* for the `@cloud-vault/factory` Package.

## Table of Contents ##

[[_TOC_]]

## Overview ##

### Local Development ###

```bash
# Runs Type-Script Compiler: tsc --pretty --watch
npm run compile

# Runs the CLI Package
npm run start || npm run cli
```

## External Usage ##

In order to integrate `@cloud-vault/cli` with any given package, establish any new
named file -- `cli.ts` as an example -- with the following contents:

```js
import { default as CLI } from "@cloud-vault/cli";

export const Main = async () => await CLI();

export default await Main();
```

With the above code content, it is a requirement for the given package to be ESM
module compliant.

