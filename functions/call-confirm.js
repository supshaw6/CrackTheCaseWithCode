'use strict';

exports.handler = function(context, event, callback) {
 let response = new Twilio.twiml.VoiceResponse();
 
 if (event.Digits) {
    const phoneNumber = (event.Digits).replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")    // reformat phone number (provided by https://stackoverflow.com/a/6981793/14514751)
    
    // Inform user when recording will begin
    response.say(
        { voice: 'woman', language: 'en-US' },
        `Thank you! Recording your phone call.`
    );

    // Dial phone number provided
    response.dial({
        action: '/call-exit',           // after call is completed
        timeout: '30',                  // how long <Dial> will wait for the dialed party to pick up
        record: 'record-from-answer',   // start recording when phone call is answered
        callerId: '+17032259856'        // replace with your phone number
    }, phoneNumber);
    
 } else {
    // Ask prompt again if user does not input any numbers
    response.say(
        { voice: 'woman', language: 'en-US' },
        'Let\'s try this again!'
    );
    
    response.redirect('/call-enter');
 };

 callback(null, response);
}