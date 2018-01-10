'use strict';

var Notification = require('./lib/notification')

exports.handler = (event, context, callback) => {
  // Send AWS SES notification.
  var notification = new Notification()
  notification.notify(event)

  // Respond to the requestor.
  callback(null,
    {
      'statusCode': 200,
      'body': 'Notification sent.'
    });
};
