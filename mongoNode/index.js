const express = require('express')
const { connectToDB, db } = require('./connection')
connectToDB()
const User = require('./models/User')
const Article = require('./models/Article')
const Owner = require('./models/Owner')
const LogMessage = require('./models/Log')
const Comment = require('./models/Comment')
const Animal = require('./models/Animal')

const app = express()

app.use(express.json())

app.post('/user', async (req, res) => {
  console.log(req.body)
  const { name, email, password, age, country, state, city } = req.body
  console.log(`name ${name} email ${email} password ${password} age ${age}`)
  let user = new User({
    name,
    email,
    password,
    age,
    address: { country, state, city },
  })
  user = await user.save()
  res.json({ user: user })
})

app.get('/user', async (req, res) => {
  let users = await User.find({})
  res.json({ users: users })
})

//*************OPERATORS *****************/

//***********comparison query operators*********
//==============
//eq operator
app.get('/user-eq-operator', async (req, res) => {
  let users = await User.find({ age: { $eq: 40 } })
  res.json({ users: users })
})

//========
//gt operator
app.get('/user-gt-operator', async (req, res) => {
  let users = await User.find({ age: { $gt: 18 } })
  res.json({ users: users })
})

//========
//gte operator
app.get('/user-gte-operator', async (req, res) => {
  let users = await User.find({ age: { $gte: 20 } })
  res.json({ users: users })
})

//===========
//in operator
app.get('/user-in-operator', async (req, res) => {
  let users = await User.find({ age: { $in: [16, 20] } })
  res.json({ users: users })
})

//===========
//lt operator
app.get('/user-lt-operator', async (req, res) => {
  let users = await User.find({ age: { $lt: 20 } })
  res.json({ users: users })
})

//===========
//lte operator
app.get('/user-lte-operator', async (req, res) => {
  let users = await User.find({ age: { $lte: 20 } })
  res.json({ users: users })
})

//===========
//ne operator
app.get('/user-ne-operator', async (req, res) => {
  let users = await User.find({ age: { $ne: 20 } })
  res.json({ users: users })
})

//===========
//nin operator
app.get('/user-nin-operator', async (req, res) => {
  let users = await User.find({ age: { $nin: [16, 20] } })
  res.json({ users: users })
})

//**************logical query operator************/
//===========
//and operator
app.get('/user-and-operator', async (req, res) => {
  let users = await User.find({ $and: [{ age: 20, name: 'emilia' }] })
  res.json({ users: users })
})

//===========
//or operator
app.get('/user-or-operator', async (req, res) => {
  let users = await User.find({ $or: [{ age: 20, name: 'emilia' }] })
  res.json({ users: users })
})

//===========
//not operator
app.get('/user-not-operator', async (req, res) => {
  let users = await User.find({ age: { $not: { $lt: 20 } } })
  res.json({ users: users })
})

//===========
//nor operator
app.get('/user-nor-operator', async (req, res) => {
  let users = await User.find({ $nor: [{ age: 20 }, { name: 'emilia' }] })
  res.json({ users: users })
})

app.post('/article', async (req, res) => {
  const { subject, author, views } = req.body
  let article = new Article({ subject, author, views })
  article = await article.save()
  res.json({ article: article })
})

//***********evaluation query operators*********

//text operator

app.get('/article', async (req, res) => {
  let article = await Article.find({ $text: { $search: 'coffee' } })
  res.json({ article: article })
})

//***********Array query operators*********
app.post('/owner', async (req, res) => {
  const { name, pets } = req.body
  let owner = new Owner({ name, pets })
  owner = await owner.save()
  res.json({ owner: owner })
})

//all operator
app.get('/owner', async (req, res) => {
  let owner = await Owner.find({ pets: { $all: ['cat', 'dog', 'fish'] } })
  res.json({ owner: owner })
})

//size operator
app.get('/owner-size', async (req, res) => {
  let owner = await Owner.find({ pets: { $size: 2 } })
  res.json({ owner: owner })
})

//***********update operators*********

//*************Field update operators **********/

//inc operator
// app.put('/article/:id', async (req, res) => {
//   const article = await Article.findByIdAndUpdate(
//     {
//       _id: req.params.id,
//     },
//     {
//       $inc: { views: 1 },
//     },
//     { new: true }
//   )

//   res.json({ article: article })
// })
// min operator
// app.put('/article/:id', async (req, res) => {
//   const article = await Article.findByIdAndUpdate(
//     {
//       _id: req.params.id,
//     },
//     {
//       $min: { views: 30 },
//     },
//     { new: true }
//   )

//   res.json({ article: article })
// })

// max operator
// app.put('/article/:id', async (req, res) => {
//   const article = await Article.findByIdAndUpdate(
//     {
//       _id: req.params.id,
//     },
//     {
//       $max: { views: 60 },
//     },
//     { new: true }
//   )

//   res.json({ article: article })
// })

// set operator
app.put('/article/:id', async (req, res) => {
  const article = await Article.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: { views: 160 },
    },
    { new: true }
  )

  res.json({ article: article })
})

//*************Array update operators **********/
//add to set
// app.put('/owner/:id', async (req, res) => {
//   const owner = await Owner.findByIdAndUpdate(
//     {
//       _id: req.params.id,
//     },
//     {
//       $addToSet: { pets: 'squirrel' },
//     },
//     { new: true }
//   )

//   res.json({ owner: owner })
// })

//owner id
// app.put('/owner/:id', async (req, res) => {
//   const owner = await Owner.findByIdAndUpdate(
//     {
//       _id: req.params.id,
//     },
//     {
//       $pop: { pets: 1 },
//     },
//     { new: true }
//   )

//   res.json({ owner: owner })
// })
//push
// app.put('/owner/:id', async (req, res) => {
//   const owner = await Owner.findByIdAndUpdate(
//     {
//       _id: req.params.id,
//     },
//     {
//       $push: { pets: 'parrot' },
//     },
//     { new: true }
//   )

//   res.json({ owner: owner })
// })

//************Multi Document Transactions************* */

app.post('/transaction', async (req, res) => {
  const { name, email, password, age } = req.body
  const session = await User.startSession()
  console.log('session', session)
  session.startTransaction()
  const user = await User.create([{ name, email, password, age }], {
    session: session,
  })
  await session.commitTransaction()
  res.json(user)
})

//************Capped Collection***********/
app.post('/log', async (req, res) => {
  let log = await new LogMessage({ message: req.body.message })
  log = await log.save()
  res.json({ log: log })
})

app.get('/log', async (req, res) => {
  const log = await LogMessage.find()
  res.json({ log: log })
})

//creating view in mongoose
app.post('/createView', async (req, res) => {
  await User.createCollection('sampleView', {
    viewOn: 'User',
    pipeline: { $project: { _id: 0, __v: 0, password: 0 } },
  })
  res.json({ message: 'view created' })
})

//reading from View
app.get('/readFromView', async (re, res) => {
  const users = await User.find()
  res.json(users)
})

//using aggregation with mongoose
app.get('/aggregate', async (req, res) => {
  const users = await User.aggregate([
    { $match: { age: { $gte: 18 } } }, //match stage filters documents
    { $project: { _id: 0, __v: 0, password: 0 } }, //project show or hides the fields
    { $count: 'members' }, //counts
  ])
  res.json(users)
})

app.post('/comment', async (req, res) => {
  const { commentText, user } = req.body
  const comment = await Comment.create({ commentText, user })
  res.json({ comment: comment })
})

// app.get('/comment', async (req, res) => {
//   const comments = await Comment.aggregate([
//     {
//       $lookup: {
//         from: 'users',
//         localField: 'user',
//         foreignField: '_id',
//         as: 'User',
//       },
//     },
//     {
//       $unwind: '$User',
//     },
//     {
//       $project: {
//         _id: 0,
//         __v: 0,
//         user: 0,
//         'User._id': 0,
//         'User.password': 0,
//         'User.__v': 0,
//       },
//     },
//   ]) //using lookup aggregation to join user to comment
//   //using unwind with to replace userArray with user
//   //hiding fields using project
//   res.json({ comments: comments })
// })

//========================learning indexes=====================
app.post('/animal', async (req, res) => {
  const { name, type, tags } = req.body
  const animal = await Animal.create({ name, type, tags })
  res.json({ animal })
})

app.get('/animal', async (req, res) => {
  const animal = await Animal.find()
  res.json({ animal })
})

//=========================mongoose using mondo db with node=============
// static model methods

app.get('/animalByType', async (req, res) => {
  const animals = await Animal.findByType('panther')
  res.json(animals)
})

//using query methods
app.get('/animalByName', async (req, res) => {
  const animal = await Animal.findOne({ name: 'bageera' })
  console.log(animal.namePlusType)
  res.json(animal)
})

//testing if validators run on update document
// app.put('/user/:id', async (req, res) => {
//   const user = await User.findOneAndUpdate(
//     { _id: req.params.id },
//     {
//       $set: {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         age: req.body.age,
//       },
//     },
//     { new: true, runValidators: true }
//   )
//   res.json({ user })
// })

//using select to select which fields to show
//using populate to populate reference document

//find
app.get('/comment', async (req, res) => {
  const comments = await Comment.find()
    .populate({ path: 'user', select: '-_id  -__v' })
    .select('-_id -__v ')
  res.json({ comments })
})

// findOne and Replace
app.put('/animal/:id', async (req, res) => {
  const animal = await Animal.findOneAndReplace(
    { _id: req.params.id },
    { name: req.body.name, type: req.body.type, tags: req.body.tags },
    { new: true }
  )

  res.json(animal)
})

//findOneAndUpdate
app.put('/user/:id', async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name, age: req.body.age } },
    { new: true }
  )
  res.json({ user: user })
})

// mongoose aggregations

//addFields add new Fields
app.get('/userAggr', async (req, res) => {
  let users = await User.aggregate()
    .match({ age: { $gte: 20 } })
    .addFields({
      halfAge: { $divide: ['$age', 2] },
    })
    .project({ _id: 0, __v: 0 })
    .sort({ age: -1 })
    .skip(1)

  res.json({ users })
})

//unwind aggregation stage with mongoose
app.get('/ownerAggr', async (req, res) => {
  const owner = await Owner.aggregate().unwind('pets')
  res.json(owner)
})

//lookup stage with mongoose
app.get('/commentAggr', async (req, res) => {
  const comment = await Comment.aggregate()
    .lookup({
      from: 'users',
      localField: 'user',
      foreignField: '_id',
      as: 'user',
    })
    .unwind('user')
    .project({
      _id: 0,
      __v: 0,
      'user._id': 0,
      'user.__v': 0,
      'user.password': 0,
    })
  // .sample(1)//randomly pick from doc
  res.json(comment)
})

app.delete('/user/:id', async (req, res) => {
  const user = await User.findOneAndDelete({ _id: req.params.id })
  console.log(user)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, 'localhost', () => {
  console.log('connected to express server')
})

//

// db.createView('sampleView', 'users', [{ $project: { _id: 0, password: 0 } }])

