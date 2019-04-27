const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Categoria")
const Categoria = mongoose.model("categorias")

router.get('/', (req, res)=>{
    res.render('admin/index')
})

router.get('/categorias', (req, res)=>{
    res.render('admin/categorias')
})

router.get('/categorias/add', (req, res)=>{
    res.render('admin/addcategorias')
})

router.get('/posts', (req, res)=>{
    res.send('Posts')
})  

router.get('/categories', (req, res)=>{
    res.send('Categorias')
})

router.post("/categorias/nova", (req, res)=>{
    const novaCategoria ={
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(()=>{
        console.log("Categoria  salva com sucesso!")
    }).catch((e)=>{
        console.log("Erro ao salvar categoria: "+ e)
    })
})

module.exports = router