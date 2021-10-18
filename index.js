const express=require('express')
const app=express()
const PORT= process.env.PORT || 3002

const router=require('./config/routes')

const configureDB=require('./config/configureDB')
app.use(express.json())

configureDB()

app.use(router)


app.listen(PORT,()=>{
    console.log("Sever is running on PORT",PORT)
})