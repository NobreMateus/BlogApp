//Modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
//Configurations
    //Body Parser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    //Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Path
    app.use(express.static(path.join(__dirname,'public')))

//Routes
    app.use('/admin', admin)

//Others

app.listen(8081, ()=>{
    console.log("Server running on 8081 port!")
})