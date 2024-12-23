import { Router } from "express";
import { taskController } from "../controllers/index.js";
import authMiddleware from "../middlewares/authMiddleware.js";

export const taskRouter = Router();

taskRouter.use(authMiddleware);

taskRouter.get("/", taskController.getAllTasks);
taskRouter.get("/:id", taskController.getById);
taskRouter.post("/", taskController.createNewTask);
taskRouter.put("/:id", taskController.updateTaskById);
taskRouter.delete("/:id", taskController.deleteTaskById);