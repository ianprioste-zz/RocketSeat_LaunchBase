// Configurações no terminal
// Iniciar npm => npm init -y
// Instalar express => npm install express

// Importar Express / Nunjucks
const express = require('express')
const nunjucks = require ('nunjucks')

const server = express()
const videos = require("./data")

// Configurar Styles e JS
server.use(express.static('public'))

// Configurar nunjucks
server.set ("view engine","njk")

nunjucks.configure("views", {
    express:server,
    // resolver problemas de html em variáveis
    autoescape: false,
    noCache:true
})

// Configurar rota 

server.get("/", function(req,res){
    const about = {
        avatar_url:"https://avatars1.githubusercontent.com/u/47223654?s=460&u=4869f854557563262fa63fd8da621d1a9ce7e92e&v=4",
        name: "Ian Prioste",
        role: "Aluno - Rocketseat",
        description: 'Aluno de programação full-stack acesse o <a href="#">link</a>',
        links: [
            { name:"GitHub", url:"https://github.com/ianprioste" },
            { name:"Linkedin", url:"https://linkedin.com/in/ianprioste" },
            { name:"Instagram", url:"https://instagram.com/ian.prioste/" }
        ]
    }
    return res.render("about",{ about })
})

server.get("/portfolio",function(req,res){
    return res.render("portfolio",{items:videos})
})

// Iniciar servidor na porta 5000
server.listen(3000, function(){
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

