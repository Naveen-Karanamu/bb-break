const mongoose = require("mongoose");

// Creating a book schema
const MovieSchema = mongoose.Schema({
    movie_id: {
        type: String,
        required: true,
        minLength:1
    },
    title: {
        type: String,
        required: true,
        minLength:2
    },
    directors: [Number],
    language: String,
    releaseDate: {
        type: String,
        required: true,
        minLength:4
    },
    generes: [String],
    producers: [Number]
});

// Creating the Model
const MovieModel = mongoose.model("Movies", MovieSchema);

module.exports = MovieModel;