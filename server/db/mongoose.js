var mongoose = require("mongoose");

mongoose.Promise = global.Promise ;
//port configuration for local db/prod db
// const url = "mongodb://Menios:19911991@ds115420.mlab.com:15420/node-course-note-api"
// const url = "mongodb://localhost:27017/TodoApp2";
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp2" ;

mongoose.connect(url);

module.exports = {
    mongoose:mongoose
} ;