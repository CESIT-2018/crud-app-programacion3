const mongoose = require('mongoose');
const {Schema} = mongoose;

const todoSchema = new Schema({
  name: String,
  description: String,
  isDone: { type: Boolean, default: false },
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('todos', todoSchema);
