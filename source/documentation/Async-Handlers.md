For async handlers, you can use return and throw to send a response or error, respectively. Functions must use the async
keyword to use these methods to return a response or error.

If your code performs an asynchronous task, return a promise to make sure that it finishes running. When you resolve or
reject the promise, Lambda sends the response or error to the invoker.

Example index.js file – HTTP request with async handler and promises

```js
const https = require("https");

const URL = "https://gitlab.cloud-vault.io";

console.debug("[Debug] Initializing Lambda Function ...");
exports.handler = async (event, context) => {
    console.debug("[Debug] Context" + ":", JSON.stringify(context, null, 4));
    
    const promise = new Promise((resolve, reject) => {
        https.get(URL, (res) => {
            resolve(res.statusCode)
        }).on("error", (e) => {
            reject(Error(e))
        })
    });
    
    return promise;
}
```

For libraries that return a promise, you can return that promise directly to the runtime.

Example index.js file – AWS SDK with async handler and promises

```js
const AWS = require("aws-sdk");
const S3 = new AWS.S3();

exports.handler = async (event) => { 
    return S3.listBuckets().promise();
};

```
