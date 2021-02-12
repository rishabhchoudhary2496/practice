const mongoose = require('mongoose')

const logMessageSchema = mongoose.Schema(
  {
    message: {
      type: String,
      require: true,
    },
  },
  { capped: { size: 1024, max: 5 } }
)

const LogMessage = mongoose.model('Log', logMessageSchema)

module.exports = LogMessage
