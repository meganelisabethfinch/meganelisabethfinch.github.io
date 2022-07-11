*Triolingo* was my team's entry for the 2022 Hack Cambridge Atlas hackathon. Made in just 24 hours, *Triolingo* was our response to a sponsored challenge by Deepgram, which asked hackers to create something cool using their speech recognition API.

##### Inspiration
When looking through the Deepgram API documentation, my team was excited to see that supported several foreign languages, and were inspired to create an online foreign language learning platform focused on live conversation practice.

##### What It Does

*Triolingo* is a live chat bot capable of conversing in several languages: English, French and Spanish. The chat bot starts the conversation off with a few prompts about a user-selected topic, and users record their responses using Deepgram's speech recognition API. From there, no two chats are the same, as the GPT-3 natural language processing API is used to process the user's response and produce an answer, which is read aloud using Google's text-to-speech API.

##### How We Built It

Our initial sketch for *Triolingo* naturally reduced to four tasks, one for each team member:

- Transcribing the user's answer via Deepgram's speech recognition API.
- A web front-end that allows users to select conversation topics and target language, and displays the transcript of the conversation.
- The GPT-3-powered chat bot, which takes as input a conversation topic and the text transcribed by the Deepgram API.
- Reading out the response with Google's text-to-speech API.

We started by implementing the chat bot in English (so that we could test the viability of the chat bot AI) before adding support for French and Spanish (which were spoken by a member of our team).

During this stage, we found that GPT-3 was able to generate natural responses, but didn't always ask a question, so it wasn't always obvious how the user should respond. To keep the conversation flowing, we had our chat bot toggle between a *question* and *answer* mode based on the user's input.

##### Links

If you'd like to learn more about Triolingo, please check out
- *Triolingo*, hosted by Block Four
- Our Devpost submission
- A write-up by Deepgram