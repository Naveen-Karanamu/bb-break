const mongoose=require("mongoose")

const DirectorSchema=mongoose.Schema({
    director_id:{
        type:Number,
        require:true,
        minLength:1
    },
    name:{
        type:String,
        require:true,
        minLength:2 
    },
    movies:{
        type:[String],
        require:true,
        minLength:2 
    }
})

const DirectorModel=mongoose.model("Directors",DirectorSchema)

module.exports=DirectorModel