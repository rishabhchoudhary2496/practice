const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  pets: {
    type: [String],
    required: true,
    validate: [
      {
        validator: function (v) {
          return v.length >= 1
        },
        message: (props) => `${props.value} should contain at least 1 pet!`,
      },
    ],
  },
})

const Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner
