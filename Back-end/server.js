 const express = require('express');
 const mongoose =require('mongoose');
 const bodyParser=require('body-parser');
 require("dotenv").config();
 const app=express();
  const db = mongoose.connection;
 // Bodyparser Middleware
 app.use(bodyParser.json());


 //setup mangoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



db.once('open', function() {
  console.info ('MongoDB connected successfully...');
});

db.on('error', function(error) {
  console.error("Connection to MongoDb failed !!!",error)
});


const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.info (`listening on port ${PORT}and To get started, visit: http://localhost:5000`))
  