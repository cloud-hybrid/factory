import { Colors } from "./exports.js";

const Year = new Date().getFullYear();

const Title = Colors.bold.underline("CDFK - Construct Factory");
const Description = Colors.italic("Development Extensions & Utilities");;
const Copyright = Colors.dim("Open Source" + ",", Year);
const License = Colors.dim("BSD-3 License");

const Generate = () => {
    const Lines: string[] = [];

    Lines.push([Colors.blue("    //\\\\--/"), "  ", Colors.magenta(" //\\\\--/")].join(""));
    Lines.push([Colors.blue("   ╱╱__\\\\/"), "  ", Colors.magenta(" //__\\\\/")].join("") + "   " + Title);
    Lines.push([Colors.blue("  ╱╱\\\\--/"), "  ", Colors.magenta(" //\\\\--/")].join(""));
    Lines.push([Colors.blue(" //__\\\\/"), "  ", Colors.magenta(" //__\\\\/")].join("") + "   " + Description);
    Lines.push([Colors.blue(" \\\\--/\\\\"), "  ", Colors.magenta("//\\\\--/")].join(""));
    Lines.push([Colors.blue("  \\\\/__\\\\"), "", Colors.magenta("//__\\\\/")].join("") + "   " + Copyright);
    Lines.push([Colors.blue("   \\\\--"), " ", Colors.magenta("//\\\\--/")].join("") + "      " + License);
    Lines.push([Colors.blue("    \\\\"), " ", Colors.magenta("//__\\\\/")].join(""))
    Lines.push("");

    return Lines.join("\n");
};

const Header = Generate();

export { Header };

export default Header;