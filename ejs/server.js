const express = require('express')
const path = require('path')
const user = require('./dataMock')
const data = require('./dataMock')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.use(express.json())
app.use('/css',express.static('public/css'))
app.use('/img',express.static('public/img'))
app.use(expressLayouts)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.set('layout','./layout/mainLayout')

app.get("/",(req,res)=>{
    res.render('home', { title:'home',layout: './layouts/mainLayout' })
})

app.get('/articles',(req,res) =>{
    res.render('articles',{title:'articles',layout:'./layouts/sideBarLayout',data:data})
})

app.get('/about',(req,res)=> {
    res.render('about', { title: 'About', layout: './layouts/mainLayout' })
})

app.get("/tags",(req,res) => {
    res.render('tags',{user})
})

app.get("/loops",(req,res) => {
    res.render('loops',{items:['milk','sugar','bread']})
})

app.get("/controlFlow",(req,res) => {
    res.render('controlFlow', { number: 51 })
})


app.listen(5000, 'localhost', () => {
    console.log('listening on port 5000')
})
