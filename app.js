var express = require('express');
var app = express();

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())

app.post('/', function(req, res) {
  res.json(req.apiGateway.event)
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
