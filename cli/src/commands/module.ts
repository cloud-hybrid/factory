const Example = (await import("./example.js")).Example;
const Version = (await import("./version.js")).Version;
const CWD = (await import("./cwd.js")).Command;

export {Version, Example, CWD};

export default {
    Version, Example, CWD
};
