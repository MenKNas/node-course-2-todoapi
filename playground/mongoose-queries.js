const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");
const {ObjectID} = require("mongodb");

var id = "5aec181ddd4a1d196c75cce6";
var id2 = "5aec181ddd4a1d196c75b3e6" ;

// if (!ObjectID.isValid(id2)){
//     console.log("ID not valid");
// };

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log("====  Todos  ====",todos);
// },(err)=>{
//     console.log(err);
// });

// Todo.findOne({
//     _id: id
// }).then((todos)=>{
//     if (todos===null){
//         return console.log("Doesn't exist in the database !!");
//     }
//     console.log("====  Todos  ==== \n", JSON.stringify(todos,undefined,2));
// },(err)=>{
//     console.log(err);
// });

User.findById(id2)
    .then((user)=>{
        if (user===null){
            return console.log("User doesn't exist in the database !!");
        }
        console.log("====  Users  ==== \n", JSON.stringify(user,undefined,2));
    },  (err)=>{
        console.log(err);
}).catch((error) => console.log(error));