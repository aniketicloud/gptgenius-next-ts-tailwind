"use server";
import OpenAi from "openai";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessage: string) => {
  const response = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "you are a helpful assistant" },
      { role: "user", content: chatMessage },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0,
  });
  console.log(response.choices[0].message);
  console.log(response);

  return "awesome";
};
