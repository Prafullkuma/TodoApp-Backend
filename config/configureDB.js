const mongoose=require('mongoose')

const configureDB=()=>{
        mongoose.connect('mongodb://localhost:27017/todoapp')
        .then(()=>{
            console.log("Connected to DB")
        })  
        .catch((err)=>{
            console.log(err)
        })
}


module.exports=configureDB