const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public')) //css na pasta public

server.set ("view engine", "njk") 

nunjucks.configure("views", {
    express: server,
    autoscape:false,
    noCache:true
})

server.get("/", function(req,res){
    return res.render("index")
})

server.get("/about", function(req,res){
    return res.render("about")
})

server.get("/contents", function(req,res){
    return res.render("contents")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function(){
    console.log('server is running')
})