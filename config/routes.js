const express=require('express')

const router=express.Router()

const todoController=require('../app/controllers/todoController')

router.get('/api/todos',todoController.list)
router.post('/api/todos',todoController.create)
router.get('/api/todos/:id',todoController.sinlgeTodo)
router.put('/api/todos/:id',todoController.modify)
router.delete('/api/todos/:id',todoController.destroy)
module.exports=router