const mongoose=require("mongoose")

const ProducerSchema=mongoose.Schema({
    producer_id:{
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

const ProducerModel=mongoose.model("Producers",ProducerSchema)

module.exports=ProducerModel