const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  profilephoto: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  theme: { type: String },
  tasks: [{ type: String }],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
