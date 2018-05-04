var mongoose = require("mongoose");

mongoose.Promise = global.Promise ;
//port configuration for local db/prod db
const url = process.env.DATABASEURL || "mongodb://localhost:27001";
mongoose.connect(url);

module.exports = {
    mongoose:mongoose
} ;