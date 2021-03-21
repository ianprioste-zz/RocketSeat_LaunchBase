const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data') // ./ (ponto barra) faz referencia a raiz do projeto


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoscape: false
})

server.get("/", function(req,res){
    const data = {
        avatar_url:"https://avatars.githubusercontent.com/u/47223654?s=400&u=4869f854557563262fa63fd8da621d1a9ce7e92e&v=4",
        name:"Ian Prioste",
        role:"Scrum Master | Analista de Trasnformação Digital",
        description:"Analista de Transformação Digital. Graduado em Sistemas de Informação. Responsável por acelerar a Transformação Digital na área de Regulatory Science de uma empresa multinacional, promovendo a mudança de mindset através da facilitação de workshops de inovação, exploração e viabilização de novas tecnologias, otimização de processos e implementação de metodologias ágeis.",
        links:[
            { name: "Github", url:"https://github.com/ianprioste" },
            { name: "LinkedIn", url:"https://www.linkedin.com/in/ianprioste/"}
        ]
    }

    return res.render("about",{data})
})

server.get("/portfolio", function(req,res){

    return res.render("portfolio",{items: videos})

})

server.listen(5000, function(){
    console.log('server is running')
})