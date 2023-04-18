const Router = require("express").Router();

const MovieModel = require("../../Database/movie");

/*
Route:/create/mov
Desc: creating a new movie
Parameters:
Method:POST

https://localhost:3001/movie/create/mov
*/

Router.post("/create/mov", async (req, res) => {
  try {
    const newMovie = req.body.newMovie;
    const addNewMovie = await MovieModel.create(newMovie);

    return res.json({ Movies: addNewMovie, message: "Movie is added" });
  } catch (error) {
    return res.json({ error: error.message });
  }
});
/*
Route:/get/movie
Desc: creating a new movie
Parameters:
Method:GET
*/
Router.get("/get/movie", async (req, res) => {
  const getAllMovies = await MovieModel.find();
  return res.json({ Movies: getAllMovies });
});

/*
Route:/update/movie
Desc: updating a movie
Parameters:
Method:PUT
*/
Router.put("/update/:movie_id", async (req, res) => {
  const updateMovie = await MovieModel.findOneAndUpdate(
    {
      movie_id: req.params.movie_id,
    },
    {
      title: req.body.movieTitle,
    },
    {
        new:true,
    }
  );
  return res.json({ Movie: updateMovie, message: "Movie's title updated" });
});

/*
Route:/delete/:movie_id
Desc: deleting a movie
Parameters:
Method:DELETE
*/
Router.delete("/delete/:movie_id", async (req, res) => {
  const deleteMovie = await MovieModel.findOneAndDelete({
    movie_id: req.params.movie_id,
  });

  return res.json({ movie: deleteMovie, message: "Movie deleted" });
});

module.exports = Router;
