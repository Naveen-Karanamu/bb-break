const express = require ("express");

require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Database Connected 🔥"))

const Movies=require("./API/Movies")
const Directors=require("./API/Directors")
const Producers=require("./API/Producers")

const bb = express()

bb.use(express.json())

bb.listen(3001,()=>console.log("Server is running 🚀"))