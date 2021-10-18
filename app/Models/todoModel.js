const mongoose=require('mongoose')

const Schema=mongoose.Schema

const todoSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please provide your name"]
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        minlength:10,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const Todo=mongoose.model('Todos',todoSchema)
module.exports=Todo
