# `@cloud-vault/prompt` - ESM CLI Prompt #

## Overview ##

`prompt` is a zero dependency, node.js ESM-compliant *commandline prompt*.

As an ESM module, when running via a compatible (16+) `node.js` runtime, package(s)
benefit from running `await` via the global namespace for blocking cli-prompt callables.

## Setup ##

```bash
npm install .
```

## Usage ##

`index.js`

```javascript
import {Prompt} from "@cloud-vault/prompt";

const Query = await Prompt("First Name" + ":");

// $_: "Jacob"
console.debug(Query);

// >>> "Jacob"

process.exit(0);
```

***Note*** - Ensure to have `"type": "module"` configured in `package.json`.
