import mongoose  from "mongoose";


const UserSchema = new mongoose.Schema({
     username : {
       type : String,
       required : true,
       unique : true,
       minlength : 5
     },


     password : {
        type : String,
        required : true
     },

     isOnline : {
        type : Boolean,
        default : false
     }
});

export const User = mongoose.model("User" , UserSchema);
