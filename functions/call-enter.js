// JavaScript should only be executed in strict mode, meaning you cannot use undeclared variables
'use strict';

// What does this do?
exports.handler = function(context, event, callback) {
 let response = new Twilio.twiml.VoiceResponse();

 // documentation for say (creates TwiML)
 // -> https://www.twilio.com/docs/voice/twiml/say
 response.say(
   { voice: 'woman', language: 'en-US' },
   'Start recording your message after the tone.'
 );

 // documentation for record
 // -> https://www.twilio.com/docs/voice/twiml/record
 response.record({
   action: '/call-exit',
   timeout: '10',
   transcribe: 'true',
   transcribeCallback: '/transcribe-title'
 });

 callback(null, response);
};

// run with "npx twilio-run --live --ngrok" in terminal