var sinon = require('sinon')
var assert = require('assert')
var expect = require( 'chai' ).expect;
var sandbox = sinon.sandbox.create();

var formDriver = require( '../form-driver' );
var Notification = require('../lib/notification')

describe('Form Driver', function() {

  describe('email notifications', function() {

    afterEach(function () { sandbox.restore(); });

    it('should trigger a notification when form data is posted', function(done) {
      var sendNotificationStub = sandbox.stub(Notification.prototype, "notify");

      formDriver.handler(
        { },
        { },
        (err, result) => {

        try {
          expect( err ).to.not.exist;

          // Did a notification get sent?
          sinon.assert.calledOnce(sendNotificationStub)

          done();
        }
        catch( error ) {
          done( error );
        }
      })
    })

    it('should pass on the data posted to the notification', function(done) {
      var sendNotificationStub = sandbox.stub(Notification.prototype, "notify");

      formDriver.handler(
        {
          'body': {
            'to': 'test@example.com',
            'subject': 'test message',
            'text': 'lorem ipsum'
          }
        },
        {  },
        (err, result) => {

        try {
          expect( err ).to.not.exist;

          sinon.assert.calledWith(sendNotificationStub,
            {
              'body': {
                'to': 'test@example.com',
                'subject': 'test message',
                'text': 'lorem ipsum'
              }
            }
          )

          done();
        }
        catch( error ) {
          done( error );
        }
      })
    })

  })
})