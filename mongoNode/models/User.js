const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const addressSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
})

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    //adding custom validations
    validate: {
      validator: function (v) {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        return emailRegex.test(v)
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
    trim: true,
    select: false,
  },
  age: {
    type: Number,
    required: true,
  },
  address: addressSchema,
})

//document level middleware pre hook for hashing password before saving them
userSchema.pre('save', async function (next) {
  console.log('this', this)
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User

