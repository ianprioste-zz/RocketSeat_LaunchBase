const express = require('express')
const nunjucks = require ('nunjucks')
const { sort } = require('./data')

const recipes = require("./data")

const server = express()

server.use(express.static('public'))

server.set ("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    nocache: true,
})

function compare(a, b) {
    const a1 = a.accesses;
    const a2 = b.accesses;
  
    let comparison = 0;
    if (a1 < a2) {
      comparison = 1;
    } else if (a1 > a2) {
      comparison = -1;
    }
    return comparison; 
  }

server.get("/", function(req,res){

    const recipesAsc =  recipes.sort(compare).slice(0,6)

    return res.render("index",{recipes: recipesAsc})
})

server.get("/about", function(req,res){
    return res.render("about")
})

server.get("/recipes", function(req,res){
    return res.render("recipes",{recipes:recipes})
})

server.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = recipes[recipeIndex];

  return res.render ("recipes", {recipe})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  }) 

server.listen(5000, function(){
    console.log('server is running')
}) 