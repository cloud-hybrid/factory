#!/usr/bin/env node

import { default as CLI } from "../cli/index.js";

const Main = async () => await CLI;

export default await Main();
