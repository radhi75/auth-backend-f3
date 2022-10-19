const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  pass: { type: String, require: true },
});
module.exports = mongoose.model("contact", contactSchema);
