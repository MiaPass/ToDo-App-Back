const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  creator: { type: String },
  title: { type: String },
  description: { type: String },
  status: { type: String },
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;
