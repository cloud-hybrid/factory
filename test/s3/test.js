import fs from "fs";
import HTTPs from "https";
import URI from "url";
import Utility from "util";

const stream = ($) => fs.createWriteStream($);
const buffer = stream("buffer");

const Remove = Utility.promisify(fs.rm);

const Query = (configuration) => {
    const $ = new Promise((resolve, reject) => {
        const request = HTTPs.request(configuration, (response) => {
            if ( response.statusCode === 301 || response.statusCode === 302 ) {
                return Query(new URL(response.headers.location), resolve, reject);
            }

            response.pipe(buffer);
        });

        buffer.on("error", (error) => {
            fs.unlink(buffer.path, () => reject(error));
        });

        buffer.on("close", () => {
            resolve(fs.readFileSync(buffer.path, { encoding: "utf-8"}).toString());
        })

        request.on("error", (error) => {
             fs.unlink(buffer.path, () => reject(error));
         });

        request.end();
    });

    return $;
};

class Endpoint {
    url = null;
    origin = null;
    protocol = null;
    username = null;
    password = null;
    host = null;
    hostname = null;
    method = null;
    port = null;
    pathname = null;
    search = null;
    searchParams = null;
    hash = null;

    static container = [];

    constructor(url, method) {
        this.url = url;
        this.method = method;

        this.abstract();

        this.port = ( this.protocol.match(/http?s/) ) ? 443 : 80;
        this.options = new URI.urlToHttpOptions(this);
        this.options.method = this.method;
    }

    static nullify(property) {
        return ( property === "" ) ? null : property;
    }

    static async response(url, method) {
        const instance = new Endpoint(url, method);

        return Query(instance.options);
    }

    abstract() {
        const $ = new URL(this.url);

        const Properties = {
            origin: Endpoint.nullify($.origin),
            protocol: Endpoint.nullify($.protocol),
            username: Endpoint.nullify($.username),
            password: Endpoint.nullify($.password),
            host: Endpoint.nullify($.host),
            hostname: Endpoint.nullify($.hostname),
            port: Endpoint.nullify($.port),
            pathname: Endpoint.nullify($.pathname),
            search: Endpoint.nullify($.search),
            searchParams: Endpoint.nullify($.searchParams),
            hash: Endpoint.nullify($.hash)
        };

        Object.keys(Properties).forEach(($) => {
            Reflect.defineProperty(this, $, {
                value: Properties[ $ ]
            });
        });
    }
}

const endpoint = await Endpoint.response("https://google.com/", "GET");

console.log(endpoint);

await Remove(buffer.path, { force: true });