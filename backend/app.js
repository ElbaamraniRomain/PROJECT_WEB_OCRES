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
app.use("/activite", activiteRoutes);

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



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;
