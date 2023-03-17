import express, { Request, Response } from "express";
import OpenAiController from "./controller/openai.controller";

const apiRouter = express.Router();

apiRouter.get("/health", (_req: Request, res: Response) => res.sendStatus(200));
apiRouter.post("/convert", new OpenAiController().convertJsonToTs);
export default apiRouter;
