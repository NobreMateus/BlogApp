const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Categoria = new Schema({
    nome: {
        type:String,
        // required: True
    },
    slug: {
        tytpe: String,
        // required: True
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("categorias", Categoria)