# CORS Traffic Control Lambda Function
This repository contains a Lambda function designed to manage incoming traffic based on the Cross-Origin Resource Sharing (CORS) policy. The function inspects the <b>`Origin`</b> header value from incoming client requests and either allows or denies traffic accordingly.

# Usage
1. Deploy this Lambda function in an AWS CloudFormation stack or via the AWS Lambda console.
2. Ensure that your API Gateway or other frontend application sends the `Origin` header in requests.
3. The Lambda function will intercept incoming requests and evaluate the `Origin` header.
4. Based on the `Origin` header value, the function will either allow the request to proceed or deny it.
5. Responses with appropriate status codes and messages will be returned, indicating the access outcome.

Feel free to customize the allowed origin values and error messages in the code to match your application's requirements.

