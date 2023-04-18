const Router = require("express").Router()

const MovieModel=require("../../Database/movie")

/*
Route:/create/mov
Desc: creating a new movie
Parameters:
Method:POST

https://localhost:3001/movie/create/mov
*/

Router.post("/create/mov",async(req,res)=>{
try{
const newMovie=req.body.newMovie;
const addNewMovie=await MovieModel.create(newMovie);

return res.json({movie:addNewMovie,message:"movie is created"})
}catch{
return res.json({error:"Movie isn't pushed"})
}
})

/*
Route:/get/movie
Desc: creating a new movie
Parameters:
Method:GET
*/
Router.get("/get/movie",async (req,res)=>{
    const getAllMovies = await MovieModel.find()
    return res.json({Movies:getAllMovies})
})

module.exports=Router;