var mongoose = require("mongoose");

mongoose.Promise = global.Promise ;
//port configuration for local db/prod db
const url = process.env.DATABASEURL || "mongodb://localhost:27001";
mongoose.connect("mongodb://Menios:19911991@ds115420.mlab.com:15420/node-course-note-api");

module.exports = {
    mongoose:mongoose
} ;