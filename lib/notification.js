'use strict';

const AWS = require('aws-sdk');
AWS.config.loadFromPath('config/aws.json');

const SES = new AWS.SES();

class Notification {

  notify(event) {
    const body = event.body;

    if (!body.to || !body.text || !body.subject) {
      return {
        message: 'error',
        description: 'You must specify to, subject and text fields.'
      };
    }

    const email_options = {
      Source: 'webnerds@hakkasan.com',
      Destination: {
        ToAddresses: Array.isArray(body.to) ? body.to : [ body.to ] // these addresses must be verfied as well otherwise the emails wont be sent.
      },
      Message: {
        Body: {
          Text: {
            Data: body.text
          }
        },
        Subject: {
          Data: body.subject
        }
      }
    }

    const email = SES.sendEmail(email_options, (error, data) => {
        if ( error ) {
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