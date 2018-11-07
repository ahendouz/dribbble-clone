const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShotSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  largeImage: { type: String, required: true },
  description: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  username: { type: String },
  fullname: { type: String }
});

ShotSchema.index({
  "$**": "text"
});

module.exports = mongoose.model("Shot", ShotSchema);
