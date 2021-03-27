const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 const path =require ('path');
require("dotenv").config();
const app = express();


// routes
//import authRoutes from './routes/api/auth';
 itemRoutes = require ('./routes/api/items');
//import userRoutes from './routes/api/users';


const db = mongoose.connection;
// Bodyparser Middleware
app.use(bodyParser.json());




// routes
//import authRoutes from './routes/api/auth';
//import userRoutes from './routes/api/users';


//setup mangoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



db.once('open', function () {
  console.info('MongoDB connected successfully...');
});

db.on('error', function (error) {
  console.error("Connection to MongoDb failed !!!", error)
});

// Use Routes
app.use('/api/items', itemRoutes);
//app.use('/api/users', userRoutes);
//app.use('/api/auth', authRoutes);

// Serve static assets if in porduction
if (process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))

  app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'../client', 'build','index.html'))
  })
}
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.info(`listening on port ${PORT}and To get started, visit: http://localhost:5000`))
