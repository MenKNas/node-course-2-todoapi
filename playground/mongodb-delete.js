const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db) => {
    if(err){
        return console.log("Unable to connect to database server..");
    }
    console.log("|||||======= CONNECTED TO MONGODB =======|||||");
    // deleteMany
    // db.collection("Todos").deleteMany({text:"Have lunch with Michelle"})
    // .then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log("Unable to delete document");
    // });
    
    // deleteOne
    // db.collection("Todos").deleteOne({text:"Have lunch with Michelle"})
    // .then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log("Unable to delete document");
    // });
    
    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed:false})
    // .then((result)=>{
    //     console.log(result)
    // }, (err)=>{
    //     console.log("Unable to delete data",err);
    // });
});        