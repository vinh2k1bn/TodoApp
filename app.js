const express = require('express');
const app = express();
const port  = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Todo = require('./models/todo')
const todoRoutes = require('./routes/todos')

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.use( express.static(__dirname + '/public') )

app.get('/', (req, res)=>{
    res.render('index')
})
app.use('/todos', todoRoutes)

app.listen(port ,()=>{
    console.log(`Listening to http://localhost:${port}`)
})