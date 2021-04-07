const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,// should be filled
        min:5,// minimum 5 character
        max:255
    },
    email:{
        type:String,
        required:true
    },
    password:String,
    required:true
})
module.exports=mongoose.model('User',userSchema)//we wrap the schema in the name of 'User