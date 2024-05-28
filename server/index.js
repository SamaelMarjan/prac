const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/dbConnection");
require("dotenv").config();

const todoRoute = require("./routes/todoRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/todo", todoRoute);

// port
const port = process.env.PORT || 5000;

// listen
app.listen(port, async () => {
  await connectDB();
  console.log(`Server conntected to port ${port}`);
});
