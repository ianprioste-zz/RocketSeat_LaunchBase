const express = require('express')
const nunjucks = require('nunjucks')

const videos = require("./data")

const server = express()

server.use(express.static('public')) //css na pasta public

server.set ("view engine", "njk") 

nunjucks.configure("views", {
    express: server,
    autoscape:false,
    noCache:true
})

server.get("/", function(req,res){
    const data = {
        title: "Introduce Your Product Quickly & Effectively",
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
    }    

    return res.render("index",{data})
})

server.get("/about", function(req,res){
    const data = {
        title: "About our Services Provider",
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        list:[
            {title:"Item 1"},
            {title:"Item 2"},
            {title:"Item 3"},
            {title:"Item 4"}
        ]
    }    

    return res.render("about",{data})
})

server.get("/contents", function(req,res){
    return res.render("contents",{items:videos})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function(){
    console.log('server is running')
})