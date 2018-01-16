'use strict';

const AWS = require('aws-sdk');
AWS.config.loadFromPath('config/aws.json');

const SES = new AWS.SES();

class Notification {

  notify(event, body) {

    if (!body.to || !body.body || !body.subject) {
      console.log('You must specify to, subject and body fields.')
      return {
        message: 'error',
        description: 'You must specify to, subject and body fields.'
      };
    }

    const email_options = {
      Source: 'webnerds@hakkasan.com',
      // ReplyToAddresses: ['test@example.com'],
      Destination: {
        // These to addresses must be verfied.
        ToAddresses: Array.isArray(body.to) ? body.to : [body.to]
      },
      Message: {
        Body: {
          Text: {
            Data: body.body
          }
        },
        Subject: {
          Data: body.subject
        }
      }
    }

    const email = SES.sendEmail(email_options, (error, data) => {
      if (error) {
        console.log("ERROR: " + error)
        return {
          message: 'failed',
          error: error
        };
      }
      console.log("SUCCESS")
      return {
        message: 'success',
        description: 'email successfully sent.'
      };
    });

  }

}

module.exports = Notification
