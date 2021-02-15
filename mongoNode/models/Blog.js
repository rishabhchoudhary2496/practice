const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  comments: {
    type: [{ body: String, date: Date.now }],
    required: true,
  },
  meta: {
    votes: Number,
    favs: Number,
  },
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog
