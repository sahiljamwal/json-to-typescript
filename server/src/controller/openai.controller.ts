import { Request, Response } from "express";
import OpenAiBiz from "../biz/openAi.biz";

export default class OpenAiController {
  private readonly openAiBizObj = new OpenAiBiz();

  convertJsonToTs = async (request: Request, response: Response) => {
    try {
      const result = await this.openAiBizObj.convertJsonToTs(request);
      return response.status(200).send(result);
    } catch (err) {
      console.error((err as any).response?.data ?? (err as Error).message);
      return response.status(500).send({ error: "Error in API" });
    }
  };
}
