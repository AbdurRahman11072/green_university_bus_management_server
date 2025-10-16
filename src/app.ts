import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import customError from "./app/error/customError";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello there");
});
app.all(/(.*)/, (req: Request, res: Response, next: NextFunction) => {
  const msg = `Can't find this route: ${req.originalUrl}`;
  const error = new customError(msg, 404);

  next(error);
});
app.use(globalErrorHandler);

export default app;
