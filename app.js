//Modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const mongoose = require("mongoose");
const session = require('express-session')
const flash = require("connect-flash")

//Configurations
    //Session
    app.use(session({
        secret: "qualquercoisa",
        resave: true,
        saveUninitialized: true
    }))
    app.use(flash())
    //Middleware
    app.use((req, res, next)=>{
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })
    //Body Parser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    //Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Path
    app.use(express.static(path.join(__dirname,'public')))
    //Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost/blogapp").then(()=>{
        console.log("Conectado ao Mongo")
    }).catch((e)=>{
        console.log("Erro ao se conectar: "+ e)
    })
//Routes
    app.use('/admin', admin)

//Others

app.listen(8081, ()=>{
    console.log("Server running on 8081 port!")
})