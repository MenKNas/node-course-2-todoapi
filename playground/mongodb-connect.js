// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

//OBJECT DESTRUCTURING
// var user = {
//     name:"John",
//     age:26
// };

// var {name} = user;
// var {age} = user;
// console.log(name);
// console.log(age);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db) => {
    if(err){
        return console.log("Unable to connect to database server..");
    }
        // console.log("======   Connected to MongoDB Server  =====")
        // db.collection("Todos").insertOne({
        //     text:"Finish my assignment",
        //     completed:false
        // }, (err,result)=>{
        //     if(err){
        //         return console.log("Unable to insert todo",err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined , 2 ));
        // });

//         console.log("======   Connected to MongoDB Server  =====")
//         db.collection("Users").insertOne({
//             name:"Menelaos Nasies",
//             location:"Ioannina, GR",
//             age: 26
//         }, (err,result)=>{
//             if(err){
//                 return console.log("Unable to insert todo",err);
//             }
//             console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined , 2 ));
//         });
        db.close();
});