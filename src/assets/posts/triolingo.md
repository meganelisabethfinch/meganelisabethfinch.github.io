Inspiration

We were inspired by Deepgram's sponsor challenge to create something cool using speech recognition, and when we were excited to see that supported several foreign languages.

Over the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have particularly limited opportunities for foreign language learning abroad. During this time, use of online language learning platforms such as Duolingo have soared, but these platforms lack the ability to practice speaking and listening skills. We created "Triolingo" to cater to this niche, allowing language learners to gain confidence in conversation by practising with its chat bot.

We also wanted to allow users to go beyond everyday and tourism topics, and learn to converse about a number of sophisticated and relevant topics, such as foreign cultures, climate change, and politics.

What it does

The Triolingo chat bot allows foreign language learners to practice their conversation skills. The chat bot begins the conversation with a few prompts about a chosen topic, and users record their responses using Deepgram's speech recognition API. From there, no two chats are the same, as the GPT-3-powered chat bot AI responds dynamically to your answer, allowing you to drive the discussion. The power of conversation is in your hands.

How we built it

We started by splitting the work into four main tasks:

Speech input via Deepgram API, and text-to-speech response output with Google API.
A web front-end that allows users to select conversation topics and target language, and displays a transcript of the conversation.
The GPT-3-powered chat bot, which takes as input a conversation topic and the text output by the Deepgram API.
The tricky task of gluing the layers together!
We started by implementing the chat bot in English (so that we could test the viability of the chat bot AI) before moving on to other languages like Spanish and French, which are now fully supported in Triolingo.

Challenges we ran into

The team faced lots of software engineering challenges, particularly during the integration phase.

For example, we were able to record a user response from the microphone in a .wav format, but sending this to the Deepgram API received a Bad Request response. It turned out that this was because of different encoding formats, so we had to convert the .wav files into signed 16-bit PCM format before sending.

GPT-3 was able to generate natural responses, but didn't always keep the conversation flowing, so our chat bot had to toggle between a "question" and "answer" mode based on the user's input.

Accomplishments that we're proud of

We were particularly proud of how natural the conversation sounded. Using only a few modifications and tuning to GPT-3, the chat bot was able to adapt dynamically to the user's responses, and keep the conversation from drying up, creating endless potential for practice.

We were also proud of our simple but professional-looking UI, designed and tirelessly tested by Alba.

What we learned

This was our first time working with Flask, Deepgram API and GPT-3.

What's next for Triolingo

We had lots of ideas for Triolingo that we didn't get time to implement. The main goal of these additional features is to provide the user with evaluation and feedback to further improve their language ability.

One thing we'd like to do is make use of the extra Deepgram API features such as "confidence" measures to assess user's pronunciation, and "keywords" to boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.

We'd also like to set specific "challenges" or tasks to complete for the conversation, instead of just conversing without direction. For example, the user is presented with the scenario, "You are planning to watch a movie with a friend. Decide what movie you're going to watch, and when and where you're going to meet." The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the stage.

As a final task, we'd like to encode in the conversation prompts who the conversation is between. For example, "You are conversing with a friend about X." or "You are talking to your boss about Y.". In languages other than English, there are different grammatical constructs depending on who you are talking to, such as different pronouns or verb endings. It would be great if we could get the chat bot AI to adopt the appropriate type of language according to the situation.