const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  image: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
