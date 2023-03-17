import { Request } from "express";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY!,
});

export default class OpenAiBiz {
  private readonly openAi = new OpenAIApi(configuration);

  convertJsonToTs = async (request: Request) => {
    try {
      const { value } = request.body;

      const prompt = `Convert the JSON object into Typescript interfaces \n ${value} Please, I need the only the code, I don't need any explanations.`;

      const completion = await this.openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      return {
        message: "Successful",
        data: completion.data.choices[0].message?.content,
      };
    } catch (err) {
      throw err;
    }
  };
}
