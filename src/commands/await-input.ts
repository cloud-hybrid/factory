import { Prompt } from "../utilities/prompt.js";

const Awaitable = async (title: string) => {
    const Input = async () => await Prompt( title + ":" + " " );

    let $: string = await Input().then( (output) => output );

    while ( $.trim().length === 0 ) $ = await Input().then( ($) => $ );

    return $.trim();
};

export { Awaitable as Prompt };

export default Awaitable;