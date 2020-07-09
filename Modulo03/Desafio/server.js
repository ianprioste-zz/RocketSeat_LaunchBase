const express = require("express")
const nunjucks = require("nunjucks")

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
    return res.render("courses")
})

server.get("/about",function(req,res){
    return res.render("about")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

// Iniciar servidor na porta 5000
server.listen(5000, function(){
    console.log("Server is running")
})