// requiring env
require("dotenv").config();

// Imported the express framework
const express = require("express");
const mongoose = require("mongoose");

// Initializing Microservices Routes
const Movies=require("./API/Movies");

// Initializing
const bb = express();

// Configurations
bb.use(express.json());

// establishing database connection
mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Connection established 🔥"));

// Initializing Microservices
bb.use("/movie",Movies);

// Porting
bb.listen(3001, () => console.log("Server Running 🚀"));


