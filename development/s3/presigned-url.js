import fs from "fs";
import http from "http";
import https from "https";

import URI from "url";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import Client from "./client.js";

/***
 * @example
 * const API = new Payload();
 * await API.generate();
 *
 */

class Payload {
    /*** @type {Client} */
    client = null;

    /*** @type {import("@aws-sdk/types").StringSigner | string} */
    url = null;

    /*** @type {number} */
    expiration = 900;

    /*** @type {{headers?: OutgoingHttpHeaders | undefined, setHost?: boolean | undefined, lookup?: LookupFunction | undefined, agent: boolean, socketPath?: string | undefined, method: string, auth?: string | null | undefined, createConnection?: ((options: ClientRequestArgs, oncreate: (err: Error, socket: Socket) => void) => Socket) | undefined, timeout?: number | undefined, maxHeaderSize?: number | undefined, defaultPort?: number | string | undefined, rejectUnauthorized: boolean, path: string | null | undefined, protocol?: string | null | undefined, hostname?: string | null | undefined, _defaultAgent?: Agent | undefined, port, localAddress?: string | undefined, requestCert: boolean, host, family?: number | undefined, signal?: AbortSignal | undefined}} */
    settings = null;

    /***
     *
     * @param expiration {number}
     *
     */

    constructor(expiration = 900) {
        this.expiration = expiration;
    }

    /***
     *
     * @param $ {PathLike | string}
     *
     * @returns {WriteStream}
     *
     */

    static stream = ($) => fs.createWriteStream($);

    /***
     *
     * @param command {import("@aws-sdk/types").Command}
     *
     * @returns {Promise<import("@aws-sdk/types").StringSigner>}
     *
     */

    async generate(command) {
        this.client = await new Client().instantiate();

        this.url = await getSignedUrl(this.client, command, {
            expiresIn: this.expiration
        });

        this.settings = this.configuration();
    }

    /***
     * HTTPs Query Configuration Object
     * --------------------------------
     * @return {{headers?: OutgoingHttpHeaders | undefined, setHost?: boolean | undefined, lookup?: LookupFunction | undefined, agent: boolean, socketPath?: string | undefined, method: string, auth?: string | null | undefined, createConnection?: ((options: ClientRequestArgs, oncreate: (err: Error, socket: Socket) => void) => Socket) | undefined, timeout?: number | undefined, maxHeaderSize?: number | undefined, defaultPort?: number | string | undefined, rejectUnauthorized: boolean, path: string | null | undefined, protocol?: string | null | undefined, hostname?: string | null | undefined, _defaultAgent?: Agent | undefined, port, localAddress?: string | undefined, requestCert: boolean, host, family?: number | undefined, signal?: AbortSignal | undefined}}
     *
     * @constructor
     *
     */

    configuration = () => {
        const $ = new URI.URL(this.url);

        $.rejectUnauthorized = false;

        return $;
    };

    /***
     *
     * @param local {string} Local File-System Path
     * @param progress {boolean}
     *
     * @returns {Promise<void>}
     *
     */

    async download(local) {
        const method = "GET";

        const protocol = !this.url.charAt(4)
            .localeCompare("s") ? https : http;
        const file = Payload.stream(local);
        const data = { response: null, request: null, total: 0 };

        const $ = new Promise((resolve, reject) => {
            const request = protocol.get(this.settings, response => {
                if ( response.statusCode !== 200 ) {
                    reject(new Error(JSON.stringify({
                        error: true,
                        settings: this.settings,
                        status: response.statusMessage,
                        code: response.statusCode
                    }, null, 4)));

                    return;
                }

                data.request = this.settings;

                data.response = {
                    method: method,
                    headers: response.headers,
                    http: response.httpVersion,
                    status: {
                        code: response.statusCode,
                        message: response.statusMessage
                    }
                };

                response.pipe(file);
            });

            file.on("finish", () => {
                resolve(data);
            });

            request.on("error", (error) => {
                fs.unlink(local, () => reject(error));
            });

            request.on("response", ($) => {
                data.total = Number.parseInt($.headers[ "content-length" ], 10);
            });

            file.on("error", (error) => {
                fs.unlink(local, () => reject(error));
            });

            request.end();
        });

        return data;
    }

    /***
     *
     * Useful Progress Handler
     *
     * @param local {string} Local File-System Path
     *
     * @returns {Promise<void>}
     *
     */

    async progress(local) {
        const method = "GET";

        const protocol = !this.url.charAt(4)
            .localeCompare("s") ? https : http;
        const file = Payload.stream(local);
        const data = { saved: 0, total: 0, file: null, response: null, request: null };

        const handler = (complete = false) => {
            const $ = Number.parseInt(data.saved / ( 1024 ^ 2 ));
            const _ = Number.parseInt(data.total / ( 1024 ^ 2 ));

            process.stdout.moveCursor(0);
            process.stdout.clearLine(0);

            process.stdout.write("\r");
            ( complete ) ? process.stdout.write(_ + "/" + _)
                : process.stdout.write($ + "/" + _);
            process.stdout.write(" ");

            ( complete ) ? process.stdout.write("100.00" + "%")
                : process.stdout.write(Number(( data.saved / data.total ) * 100).toFixed(2) + "%");
        };

        const $ = new Promise((resolve, reject) => {
            const request = protocol.get(this.settings, response => {
                if ( response.statusCode !== 200 ) {
                    reject(new Error(`Failed to get '${ this.settings }' (${ response.statusCode })`));
                    return;
                }

                data.file = {
                    local: local,
                    mime: response.headers[ "content-type" ],
                    size: parseInt(response.headers[ "content-length" ], 10)
                };

                data.request = this.settings;

                data.response = {
                    method: method,
                    headers: response.headers,
                    http: response.httpVersion,
                    status: {
                        code: response.statusCode,
                        message: response.statusMessage
                    }
                };

                response.on("data", ($) => {
                    /// --> Chunk
                    data.saved += $.length;

                    handler();
                });

                response.pipe(file);
            });

            file.on("finish", () => {
                resolve(data);
            });

            request.on("error", (error) => {
                fs.unlink(local, () => reject(error));
            });

            request.on("response", ($) => {
                data.total = Number.parseInt($.headers[ "content-length" ], 10);
            });

            file.on("error", (error) => {
                fs.unlink(local, () => reject(error));
            });

            request.end();
        });

        return await $.then(() => {
            handler(true);
            process.stdout.write("\n");
            return data;
        });
    }
}

export { Payload };

export default Payload;
