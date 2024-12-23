import { Router } from "express";
import { taskController } from "../controllers";

export const taskRouter = Router();

taskRouter.get("/", taskController.getAllTasks);
taskRouter.get("/:id", taskController.getById);
taskRouter.post("/", taskController.createNewTask);
taskRouter.put("/:id", taskController.updateTaskById);
taskRouter.delete("/:id", taskController.deleteTaskById);