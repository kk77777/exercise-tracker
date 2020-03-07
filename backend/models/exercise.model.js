const mongoose = require('mongoose');
const Schema = mongoos.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duaration: { type: Number, required: true },
    data: { type: Data, required: true }
  },
  {
    timestamp: true
  }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
