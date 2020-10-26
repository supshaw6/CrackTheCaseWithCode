## Recording App (for Twilio Voices)

Hey user! The purpose of this app is to have you (the user):

- Set up a Twilio phone number
- Be able to record both sides of a phone call (using Twilio Programmable Voices API)
- Transcribe the conversation
- Export the recording by email (using Twilio REST API)

So far, I've been able to achieve the recording of a simple prompted message using Twilio serverless functions.

```javascript
// within call-enter.js
response.say(
  { voice: "woman", language: "en-US" },
  "Start recording your message after the tone."
);
```

Next goal is to:

1. Move functions from local server to Twilio Functions.
2. Learn TwiML to record both sides of a phone conversation.
3. Access Twilio REST API to grab recording files.
4. Develop JavaScript code to export audio recording to be sent as an email attachment.
5. Develop UI to turn into a mobile app.
