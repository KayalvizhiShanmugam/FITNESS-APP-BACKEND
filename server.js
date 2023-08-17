const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const mongoose = require('mongoose');
//const mongoURI = "mongodb://localhost:27017/fitness_logger"


//
 const mongoURI = process.env.ATLAS_URL;

// mongoose.connect(URI, {

// useNewUrlParser: true, 

// useUnifiedTopology: true 

// }, 

// const mongoose = require('mongoe');
// const mongoURI = "mongodb://localhost:27017"

// const connectToMongo = async () => {
// try {
//     mongoose.set('strictQuery', false)
//     mongoose.connect(mongoURI) 
//     console.log('Mongo connected')
// }
// catch(error) {
//     console.log(error)
//     process.exit()
// }
// }
// module.exports = connectToMongo;

// const uri = process.env.MONGODB_URL;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use("/",(req,res)=>{
    res.send("<h1>hello world</h1>")
})
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
const connection=async()=>{
        await mongoose.connect(mongoURI, {
        useNewUrlParser:true
    })
    console.log("Mongodb is connected")
    }
    connection()
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});