#!/usr/bin/env node

import { default as CLI } from "@cloud-vault/cli";

const Main = async () => await CLI;

export default await Main();
