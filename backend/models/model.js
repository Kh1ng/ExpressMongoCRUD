const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  todo: {
    required: true,
    type: String,
  },
  due: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
