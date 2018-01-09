var expect = require( 'chai' ).expect;

var formDriver = require( '../form-driver' );

describe('Form Driver', function() {
    
  it('should trigger the Lambda function, period', function(done) {
    formDriver.handler(
      { first: 'Testy' },
      {  }, (err, result) => {
        
      try {
        expect( err ).to.not.exist;
                    
        expect( result.first ).to.exist;
                    
        done();
      }
      catch( error ) {
        done( error );
      }
    });
  });
  
//   it('should trigger a notification when form data is posted', 
//   function() {
//     // call Lambda function
//     app.post();
    
//     // assert notification function was called
    
//   });
  
//   it('passes on the data posted to the notification',
//   function() {
//     // call Lambda function with parameters
//     app.post()
    
//     // assert notification function was called with those parameters
//   });
  
});