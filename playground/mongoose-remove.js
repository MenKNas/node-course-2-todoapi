const {ObjecgID} = require ("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

//Remove

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove({}).then((result)=>{
//     console.log(result);
// });

// id1 = "5aec181ddd4a1d196c75cce6"

// Todo.findByIdAndRemove({
//     _id:id1
// }).then((result)=>{
//     if(result===null){
//         console.log("Couldn't remove todo from database!");
//     }
//     else{
//         console.log("Removed:" , result);
//     }    
// },(err)=>{
//     console.log(err);
// });



