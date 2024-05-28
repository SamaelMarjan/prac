const Todo = require("../models/todoModel");

// create controller
exports.createTodo = async (req, res) => {
  const { todo } = req.body;
  if (!todo) {
    return res.status(500).send({ success: false, message: "create a todo" });
  }
  try {
    const create = await Todo({ todo }).save();
    return res
      .status(200)
      .send({ success: true, message: "Successfully created todo", create });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send({ success: false, messagge: "check the error", error });
  }
};

// get controller
exports.getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find({}).sort({ updatedAt: -1 });
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
exports.getSingleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const single = await Todo.findById(id);
    return res
      .status(200)
      .send({ success: true, message: "Here is your todo", single });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send({ success: false, messagge: "check the error", error });
  }
};

// update controller by id
exports.updateTodo = async (req, res) => {
  const { todo } = req.body;
  const { id } = req.params;
  try {
    if (!todo) {
      return res
        .status(500)
        .send({ success: false, message: "to update write somethinng" });
    }
    const update = await Todo.findByIdAndUpdate(id, { todo }, { new: true });
    return res
      .status(200)
      .send({ success: true, message: "Updated successfully", update });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send({ success: false, messagge: "check the error", error });
  }
};

// delete controller by id
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    return res
      .status(200)
      .send({ success: false, message: "Todo deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send({ success: false, messagge: "check the error", error });
  }
};
