const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Tag names must be unique
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;