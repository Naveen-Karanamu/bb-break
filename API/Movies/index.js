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
}catch{

}
})