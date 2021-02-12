const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
  subject: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 1000,
    trim: true,
  },
  author: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  views: {
    type: Number,
    require: true,
  },
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
