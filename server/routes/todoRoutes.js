const router = require("express").Router();
const {
  getAllTodo,
  createTodo,
  getSingleTodo,
} = require("../controllers/controllers");

// POST || router
router.post("/create", createTodo);

// GET || router
router.get("/", getAllTodo);

// GET :id || router
router.get("/:id", getSingleTodo);

// PUT || router
// router.put();

// DELETE || router
// router.delete();

module.exports = router;
