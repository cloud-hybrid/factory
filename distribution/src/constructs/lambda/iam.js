const STS = JSON.stringify({
    Version: "2012-10-17",
    Statement: [
        {
            Action: "sts:AssumeRole",
            Principal: {
                Service: "lambda.amazonaws.com"
            },
            Effect: "Allow",
            Sid: ""
        }
    ]
}, null, 4);
const Attachment = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole";
class Policy {
}
Object.defineProperty(Policy, "sts", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: STS
});
Object.defineProperty(Policy, "managed", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Attachment
});
export { Policy };
export default Policy;
