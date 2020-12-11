var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require('mongoose');
var morgan = require('morgan');


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var activiteRoutes = require('./routes/activite.routes');

var app = express();
const PORT = process.env.PORT || 8080;


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/index", indexRouter);
app.use("/users", usersRouter);

mongoose.Promise = global.Promise;
const dbName = "test";
const dbURL = `mongodb://localhost/${dbName}`;
const mongoURL = 'mongodb+srv://romain:ECE_webProject@activites.lqnib.mongodb.net/<dbname>?retryWrites=true&w=majority';

//Connecting to database
mongoose.connect(mongoURL || dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected !!!');
});

//Schema
  const Schema = mongoose.Schema;
  const testShema = new Schema({
      type_activivte: String,
      calories: String,
      temps: String,
      distance: String,
      Date, String,
  });

// //Model
 const testPost = mongoose.model('testPost', testShema);

//Save data mongo

//  const data = {
//      type_activivte: "course",
//      calories: "100",
//      temps: "60",
//      distance: "10",
//  }

  //const newTestPost = new testPost(data);

//  newTestPost.save((error) => {
//      if(error){
//           console.log('error');
//       }
//       else{
//           console.log('saved');
//       }
//  });
//.save


//Routes
    app.get('/all', (req, res) => {

        testPost.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
   })
//app.use('/activite', activiteRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port:'+ PORT);
});

module.exports = app;
