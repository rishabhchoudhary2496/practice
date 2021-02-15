const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 3,
    maxLength: 50,
  },
  type: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    index: true,
  },
})

animalSchema.index({ name: 1, type: -1 })

//mongoose model instance methods
animalSchema.methods.findSimilarTypes = function (cb) {
  return mongoose.model('Animal').find({ type: this.type }, cb)
}

//mongoose models static method
animalSchema.static('findByType', function (type) {
  return this.find({ type })
})

//mongoose query helper methods
animalSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, 'i') })
}

//virtuals doesn't persist to mongodb
animalSchema.virtual('namePlusType').get(function () {
  return this.name + ' ' + this.type
})

const Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal
