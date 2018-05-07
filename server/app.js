var express = require("express");
var bodyParser = require("body-parser");
const _ = require("lodash");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");
const {ObjectID} = require("mongodb");

var app = express ();

//port configuration for local environment/production
const port = process.env.PORT || 3000 ;
// so can send json data through our post request
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send("<h1> Welcome <h1>");
});
// POST ROUTE
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

// GET ROUTE
app.get("/todos",(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(err)=>{
        res.status(400).res.send(err); 
    });
});


// GET / id ROUTE
app.get("/todos/:id",(req,res)=>{
    var id = req.params.id
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(todo===null){
            console.log("No todo with such ID exists");
        }
        res.send({todo});
    },(err)=>{
        res.status(400).send();
    });
});

//PATCH ROUTE//
app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text','completed']);
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    if (_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }
    else{
        body.completed = false ;
        body.completedAt = null ;
    }
    Todo.findByIdAndUpdate(id, {$set:body},{new:true})
    .then((todo)=>{
        if (todo===null){
            res.status(404).send();
        }
        else {
            console.log("Successfully updated todo",todo);
            res.send({todo});
        }
    },(err)=>{
        res.status(400).send();
    });
});

//DELETE ROUTE //
app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(todo===null){
            return console.log("No todo with such ID exists!");
        }
        else{
            res.send(`Deleted:    ${todo}`);
        }
    },(err)=>{
        res.status(400).send();
    });
});


app.listen(port,()=>{
    console.log("=======   Server up and Running   =======");
});

module.exports = {
    app:app
};

