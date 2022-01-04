import Colors from "chalk";
const Year = new Date().getFullYear();
const Title = Colors.bold.underline("Cloud-Factory - Construct CDK");
const Description = Colors.italic("Deployment Extensions & Cloud Utilities");
const Copyright = Colors.dim("Open Source" + "," + " " + Year);
const License = Colors.dim("BSD-3 License");
const Generate = () => {
    const Lines = [];
    /// Check if Local `run-script start` is interfacing `factory`
    (process.env?.npm_lifecycle_event !== "start") && Lines.push("");
    Lines.push([Colors.blue("    //\\\\--/"), "  ", Colors.magenta(" //\\\\--/")].join(""));
    Lines.push([Colors.blue("   ╱╱__\\\\/"), "  ", Colors.magenta(" //__\\\\/")].join("") + "   " + Title);
    Lines.push([Colors.blue("  ╱╱\\\\--/"), "  ", Colors.magenta(" //\\\\--/")].join(""));
    Lines.push([Colors.blue(" //__\\\\/"), "  ", Colors.magenta(" //__\\\\/")].join("") + "   " + Description);
    Lines.push([Colors.blue(" \\\\--/\\\\"), "  ", Colors.magenta("//\\\\--/")].join(""));
    Lines.push([Colors.blue("  \\\\/__\\\\"), "", Colors.magenta("//__\\\\/")].join("") + "   " + Copyright + " " + License);
    Lines.push([Colors.blue("   \\\\---"), "", Colors.magenta("//\\\\--/")].join(""));
    Lines.push([Colors.blue("    \\\\"), " ", Colors.magenta("//__\\\\/")].join("") + "   " + "--[H]elp for Usage");
    Lines.push([Colors.blue("     \\\\"), "", Colors.magenta("\\\\--//")].join(""));
    Lines.push("");
    return Lines.join("\n");
};
const Header = Generate();
export { Header };
export default Header;
