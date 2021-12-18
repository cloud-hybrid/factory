const Example = (yargs: any) =>
    yargs
        .command(
            "add <a> <b>",
            "add description",
            (yargs: any) =>
                yargs
                    .positional("a", {
                        describe: "addend \"a\"",
                        type: "number",
                        default: 0,
                    })
                    .positional("b", {
                        describe: "addend \"b\"",
                        type: "number",
                        default: 0,
                    }),
            (argv: any) => {
                const {a, b} = argv;
                console.log(`${a} + ${b} = ${a + b}`);
            }
        )
        .command(
            "sum <numbers..>",
            "sum description",
            (yargs: any) =>
                yargs
                    .positional("numbers", {
                        describe: "numbers to sum",
                        // type: "array",
                        default: [],
                    })
                    .check((argv: any) =>
                        isArrayOfNumbers(argv.numbers)
                            ? true
                            : "Positional argument \"numbers\" must only contain numbers"
                    ),
            (argv: any) => {
                const sum = argv.numbers.reduce((a: number, b: number) => a + b, 0);
                console.log(`The sum of numbers is ${sum}`);
            }
        )

function isArrayOfNumbers(arr: any) {
    return Array.isArray(arr) && arr.every(n => typeof n === "number");
}

export { Example };

export default Example;