const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/node-mongo'

const connectToDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('connected to database successfully')
  } catch (error) {
    console.log('Unable to connect to database', error)
  }
}

const db = mongoose.connection

module.exports = { connectToDB, db }
