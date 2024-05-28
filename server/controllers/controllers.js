const Todo = require("../models/todoModel");

// create controller
exports.createTodo = async (req, res) => {};

// get controller
exports.getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find({});
    if (todo.length <= 0) {
      return res
        .status(200)
        .send({ success: true, message: "No todo found", count: todo.length });
    }
    return res
      .status(200)
      .send({ success: true, message: "All todo", count: todo.length, todo });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send({ success: false, messagge: "check the error", error });
  }
};

// get single controller by id
exports.getSingleTodo = async (req, res) => {};

// update controller by id
exports.updateTodo = async (req, res) => {};

// delete controller by id
exports.deleteTodo = async (req, res) => {};
