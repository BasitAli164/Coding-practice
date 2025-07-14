import OpenAI from "openai";
import dotenv from "dotenv"

dotenv.config()

const openai = new OpenAI({
  apiKey:process.env.OPEN_AI_KEY,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a paragraph on pakistan"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));