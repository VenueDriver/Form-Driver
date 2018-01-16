'use strict';

const querystring = require('querystring');
var Notification = require('./lib/notification')

exports.handler = (event, context, callback) => {

  // Parse the data from the form.
  console.log("Event from API Gateway: " + JSON.stringify(event))
  const body = querystring.parse(event.body);
  console.log("Post body parameters: " + JSON.stringify(body))

  // Send AWS SES notification.
  var notification = new Notification()
  notification.notify(event, body)

  // Respond to the requestor.
  callback(null, {
    'statusCode': 200,
    'body': 'Notification sent.'
  });
};
