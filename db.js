const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://ravi9867:9csTXC6GWZdzIIkk@shayrooms.v2gy9.mongodb.net/ShayRooms";

mongoose.connect(mongoURL, {useUnifiedTopology: true,useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('error',()=>{
  console.log('Mongodb connection failed')
})

connection.on('connected',()=>{
  console.log("Mongodb connection successful")
})

module.exports = mongoose