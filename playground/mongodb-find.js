const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db) => {
    if(err){
        return console.log("Unable to connect to database server..");
    }
    // console.log("|||||======= CONNECTED TO MONGODB =======|||||");
    // db.collection("Todos").find({
    //     _id: new ObjectID("5aeac912cf29579fd0d09c31")
    // }).toArray()
    // .then( (docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log("Unable to fetch todos");
    // });
    // console.log("|||||======= CONNECTED TO MONGODB =======|||||");
    // db.collection("Todos").find()
    // .count()
    // .then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log("Unable to fetch todos");
    // });
    console.log("|||||======= CONNECTED TO MONGODB =======|||||");
    db.collection("Users").find({name:"Alkis Nasies"})
    .count()
    .then( (count) => {
        console.log(`Users: ${count}`);
    }, (err)=>{
        console.log("Unable to fetch todos");
    });
    // db.close();
}); 