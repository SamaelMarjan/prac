const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(""); // DB from env
    console.log(`Database connectionn successfull`);
  } catch (error) {
    console.log(`Something went wrong`, error);
  }
};

module.exports = connectDB;
