const { Router } = require("express");
const router = Router();
var bodyParser = require("body-parser");
const express = require("express");
const app = express();
const _ = require('underscore')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const { title, year, rating } = req.body;
  const id = movies.length + 1;
  const newMovie = {...req.body, id}
  movies.push(newMovie)
  res.json(movies);
});


router.delete('/:id', (req, res) => {
    var  { id }  = req.params;
     _.each(movies, (movies, i) => {
        try {
            if (movies.id == id){
                remove(i);
            }   
        } catch (error) {
            console.log('hubo un error', error)
        }
     });

        function remove(i) { 
            movies.splice(i, 1);
        } 

    res.send(movies);
});

router.put("/:id", (req, res) => {

  const { id } = req.params
  const { title, year, rating } = req.body;
    
  if(title && year && rating){
     _.each(movies,(movie,i)=>{


      if(movie.id == id){

        movie.title = title;
        movie.year = year;
        movie.rating = rating;

      }

     })
            res.json(movies)
  }else{
    res.status(500).json({error:"fallo"})
  }

});



module.exports = router;
