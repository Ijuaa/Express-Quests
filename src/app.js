const express = require("express");
const app = express();

app.use(express.json())

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUsers);
app.get("/api/users/:id", movieControllers.getUserById);

app.post("/api/movies", movieControllers.postMovie);

module.exports = app;
