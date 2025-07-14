import OpenAI from "openai";
import dotenv from "dotenv"

dotenv.config()

const openai = new OpenAI({
  apiKey:process.env.OPEN_AI_KEY,
});

// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [
//     {"role": "user", "content": "write a paragraph on pakistan"},
//   ],
// });

// completion.then((result) => console.log(result.choices[0].message));


const main =async()=>{
    const prompt="Write a paragraph on Gilgit baltistan";    
    const completion=await openai.chat.completions.create({
        model:"gpt-4o-mini",
        messages:[
            {
                role:"system",
                content:"Your are a personal trainer"
            },
            {
                role:"user",
                content:prompt
            }
        ]
    })
    console.log(completion.choices[0].message.content)
}
main()