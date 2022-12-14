const Router = require("express");
const router = new Router();
const todoController = require("../controllers/todo.controller");

router.post("/todo", todoController.createTodo);
router.get("/todo", todoController.getTodo);
router.get("/todo/:id", todoController.getOneTodo);
router.put("/todo", todoController.updateTodo);
router.delete("/todo/:id", todoController.deleteTodo);

module.exports = router;