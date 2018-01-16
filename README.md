Form Driver
===========

A serverless form mailer micro service.  So that you can make the rest of your
web site static.

What's Here
-----------

This project includes:

* README.md - this file
* buildspec.yml - this file is used by AWS CodeBuild to package your
  service for deployment to AWS Lambda
* form-driver.js - this file contains the AWS Lambda handler code
* template.yml - this file contains the Serverless Application Model (SAM) used
  by AWS Cloudformation to deploy your service to AWS Lambda and Amazon API
  Gateway.


How do I run my own?
--------------------

1. Set up advice.
2. Create an IAM that can send email with SES.
3. write your IAM credentials in config/aws.json

Running the app
---------------

```sam local start-api -p 8080```

You can run this with the 'Run' button in the Cloud9 environment.

Running tests
-------------

```npm test```

See also
--------

* https://codehabitude.com/2016/04/05/forms-to-emails-using-aws-lambda-api-gateway/