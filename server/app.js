var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express ();
// so can send json data through our post request
app.use(bodyParser.json());

app.post("/todos",(req,res)=>{
    var todo = new Todo({
        text:req.body.text,
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        console.log(err);
        res.status(400).send(err);
    });
});

app.listen(3000,()=>{
    console.log("=======   Server up and Running   =======");
});

