const Todo=require('../Models/todoModel')

const todoController={}

todoController.list=(req,res)=>{
    Todo.find()
    .then((todo)=>{
      res.status(200).json({message:"List of all todo",todo:todo})  
    })  
    .catch((err)=>{
        res.status(400).json(err)
    })  
}

todoController.create=(req,res)=>{
    const body=req.body
    const todo=new Todo(body)
    todo.save()
    .then((todo)=>{
        res.json(todo)
    })
    .catch((Err)=>{
        res.json(Err)
    })
}

todoController.sinlgeTodo=(req,res)=>{
    const id=req.params.id
    Todo.findById(id)
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
}
todoController.modify=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Todo.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
}
todoController.destroy=(req,res)=>{
    const id=req.params.id
    Todo.findByIdAndDelete(id)
    .then((todo)=>{
      res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports=todoController