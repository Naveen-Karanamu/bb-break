const express = require ("express");

require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Database Connected 🔥"))

const bb = express()

bb.use(express.json())

bb.listen(3001,()=>console.log("Server is running 🚀"))