## Recording App (for Twilio Voices)

Hey user! The purpose of this app is to have you (the user):

- Set up a Twilio phone number
- Be able to record both sides of a phone call (using Twilio Programmable Voices API)
- Transcribe the conversation
- Export the recording by email (using Twilio REST API)

So far, I've been able to achieve the recording of a simple prompted message using Twilio serverless functions.

```javascript
// within call-enter.js
number.say(
  { voice: "woman", language: "en-US" },
  "Thank you for calling the Crack The Case With Code phone line. Type in the number you would like to call."
);
```

Next goal is to:

1. ~~Move functions from local server to Twilio Functions.~~
2. ~~Learn TwiML to record both sides of a phone conversation.~~
3. Access Twilio REST API to grab recording files.
4. Develop JavaScript code to export audio recording to be sent as an email attachment.
