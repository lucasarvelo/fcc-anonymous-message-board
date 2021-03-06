const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  text: {
    type: String,
    required: '{PATH} is required!'
  },
  delete_password: {
    type: String,
    required: '{PATH} is required!'
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  reported: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Reply', replySchema);