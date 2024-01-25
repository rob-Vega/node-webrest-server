import { Router } from "express";
import { TodoController } from "./controller";

export class TodosRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodoController()

    router.get("/", todoController.getTodos);
    router.get("/:id", todoController.getTodoById);
    router.post("/", todoController.postTodo);
    router.put("/:id", todoController.putTodo);
    router.delete("/:id", todoController.deleteTodo);

    return router;
  }
}