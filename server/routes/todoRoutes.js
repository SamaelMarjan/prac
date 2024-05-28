const router = require("express").Router();
const { getAllTodo } = require("../controllers/controllers");

// POST || router
// router.post();

// GET || router
router.get("/", getAllTodo);

// GET :id || router
// router.get();

// PUT || router
// router.put();

// DELETE || router
// router.delete();

module.exports = router;
