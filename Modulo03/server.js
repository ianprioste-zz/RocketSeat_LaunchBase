// Configurações no terminal
// Iniciar npm => npm init -y
// Instalar express => npm install express

// Importar Express / Nunjucks
const express = require('express')
const nunjucks = require ('nunjucks')

const server = express()

// Configurar Styles e JS
server.use(express.static('public'))

// Configurar nunjucks
server.set ("view engine","njk")

nunjucks.configure("views", {
    express:server
})

// Configurar rota 

server.get("/", function(req,res){
    return res.render("about")
})

server.get("/portfolio",function(req,res){
    return res.render("portfolio")
})

// Iniciar servidor na porta 5000
server.listen(5000, function(){
    console.log("Server is running")
})

// Terminal => npm start
// Navegador => localhost:5000
// Terminal => ctrl+c (parar o servidor)

// Configurar para o servidor reiniciar automaticamente que houver alteração
// Terminal => npm install -D nodemon
// package.json => "start": "nodemon server.js"

// Instalar nunjucks
// Terminal => npm install nunjucks

