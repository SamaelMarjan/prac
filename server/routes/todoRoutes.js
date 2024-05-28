const router = require("express").Router();
const {
  getAllTodo,
  createTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/controllers");

// POST || router
router.post("/create", createTodo);

// GET || router
router.get("/", getAllTodo);

// GET :id || router
router.get("/:id", getSingleTodo);

// PUT || router
router.put("/:id", updateTodo);

// DELETE || router
router.delete("/:id", deleteTodo);

module.exports = router;
