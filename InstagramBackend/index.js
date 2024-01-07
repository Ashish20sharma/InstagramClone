require("dotenv").config()
const express=require('express')
const app=express()
const cors=require('cors')
const fs=require('fs')
require('./mongoDb/connectDb')
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

app.use(cors())
app.use(express.json())
app.use("/user",userRoute)
app.use('/post',postRoute)

app.get('/profileImg/:name',function(req,res){
    fs.readFile('./public/images/uploads/'+req.params.name,(err,data)=>{
        res.send(data)
    })
})

app.listen(5000,()=>{
    console.group("app listening 5000")
})