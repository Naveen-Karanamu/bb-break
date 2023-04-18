const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  movie_id: {
    type: String,
    require: true,
    minLength: 1,
  },
  title: {
    type: String,
    require: true,
    minLength: 2,
  },

  directors: {
    type: [Number],
    require: true,
    minLength: 2,
  },
  producers: {
    type: [Number],
    require: true,
    minLength: 2,
  },
  languages:{
    type: String,
    require: true,
    minLength: 2,
  },
  release_date:{
    type: String,
    require: true,
    minLength: 2,
  },
  generes:{
    type: [String],
    require: true,
    minLength: 2,
  }
});


const MovieModel=mongoose.model("Movies",MovieSchema)

module.exports=MovieModel;