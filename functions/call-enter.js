// JavaScript should only be executed in strict mode, meaning you cannot use undeclared variables
'use strict';

// What does this do?
exports.handler = function(context, event, callback) {
 let response = new Twilio.twiml.VoiceResponse();
  
 // Ask user to input the phone number they'd like to call
 let number = response.gather({
     numDigits: 10,
     timeout: 5,
     action: '/call-confirm'
 });
 number.say(
     { voice: 'woman', language: 'en-US' },
     'Thank you for calling the Crack The Case With Code phone line. Type in the number you would like to call.'
 ); // may only work for U.S. numbers (10 digits omitting +1)

 // Ask prompt again if user does not input any numbers
 response.say(
   { voice: 'woman', language: 'en-US' },
   'Let\'s try this again!'
 );
 response.redirect('/call-enter');

 callback(null, response);
};

// run with "npx twilio-run --live --ngrok" 