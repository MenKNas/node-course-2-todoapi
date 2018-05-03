const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db) => {
    if(err){
        return console.log("Unable to connect to database server..");
    }
    console.log("|||||======= CONNECTED TO MONGODB =======|||||");
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5aead796cf29579fd0d0a041")},{
    //         $set:{
    //             completed:true
    //         }
    //     },
    //     {
    //         returnOriginal:false
    //     }
    // ).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log("Unable to update",err);
    // });
    
    
    // db.collection("Users").findOneAndUpdate({name:"Elena Ioannou"}, {
    //     $set:{
    //         name:"Eleni Kostadima",
    //     },
    //     $inc:{
    //         age: 7
    //     }
    // },{
    //     returnOriginal:false
    // }).then((res)=>{
    //     console.log(res);
    // }, (err)=> {
    //     console.log("Unable to update requested data", err);
    // });    
});

  