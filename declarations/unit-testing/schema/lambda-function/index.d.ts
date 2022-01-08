declare const $: any;
declare class Constructor {
    readonly schema: typeof $;
    readonly pointers: typeof $.$defs;
    constructor();
}
export default Constructor;
