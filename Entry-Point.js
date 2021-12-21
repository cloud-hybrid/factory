#!/usr/bin/env node

import { default as CLI } from "./cli/src/index.js";

const Main = async () => await CLI;

export default await Main();
