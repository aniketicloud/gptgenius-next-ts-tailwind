"use server";

export const generateChatResponse = async (chatMessage: string) => {
  console.log("coming from server", chatMessage);
  return "awesome";
};
