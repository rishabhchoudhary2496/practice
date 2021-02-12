const express = require('express')
const { connectToDB, db } = require('./connection')
connectToDB()
const User = require('./models/User')
const Article = require('./models/Article')
const Owner = require('./models/Owner')
const LogMessage = require('./models/Log')
const Comment = require('./models/Comment')

const app = express()

app.use(express.json())

app.post('/user', async (req, res) => {
  console.log(req.body)
  const { name, email, password, age } = req.body
  console.log(`name ${name} email ${email} password ${password} age ${age}`)
  let user = new User({ name, email, password, age })
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

app.get('/comment', async (req, res) => {
  const comments = await Comment.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'User',
      },
    },
    {
      $unwind: '$User',
    },
    {
      $project: {
        _id: 0,
        __v: 0,
        user: 0,
        'User._id': 0,
        'User.password': 0,
        'User.__v': 0,
      },
    },
  ]) //using lookup aggregation to join user to comment
  //using unwind with to replace userArray with user
  //hiding fields using project
  res.json({ comments: comments })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, 'localhost', () => {
  console.log('connected to express server')
})

//

// db.createView('sampleView', 'users', [{ $project: { _id: 0, password: 0 } }])
