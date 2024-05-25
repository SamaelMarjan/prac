const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({}, { timestamps: true });

module.exports = mongoose.model("Model", modelSchema);
