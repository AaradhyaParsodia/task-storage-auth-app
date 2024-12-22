import { Router } from "express";
import { authRouter } from "./auth.js";
import { taskRouter } from "./task.js";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/tasks", taskRouter);