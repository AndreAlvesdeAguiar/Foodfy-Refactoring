const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const receitas = require('./data')

nunjucks.configure('views', {
    express:server
})
server.use(express.static('public'))
server.use(express.static('images'))
server.set('view engine', 'njk')


server.get("/", function(req, res) {
    return res.render("home")
})
server.get("/sobre", function(req, res) {
    return res.render("sobre")
})
server.get("/receitas", function(req, res) {
    return res.render("receitas", {items: receitas})
})
server.get("/receita/:index", function(req, res) {
    const recipeIndex = req.params.index
    return res.render("receita", {item :receitas[recipeIndex]})
    
})

server.listen(5000, function() {
    console.log('Sever is runing')
})