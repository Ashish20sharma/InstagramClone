const express = require('express');
const userRoute = express.Router();
const userModel = require('../mongoDb/userModel')
const upload=require('./multer')
userRoute.post("/register", async function (req, res) {
    try {
        const user = new userModel({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save()
        res.status(200).json({ message: "Success", result: user })
    } catch (err) {
        res.status(201).json({ message: "Failed", Error: err })
    }
});

userRoute.post("/login", async function (req, res) {
    await userModel.findOne({ username: req.body.username, password: req.body.password }).then((result, err) => {
        if (result) {
            if (result) {
                res.status(200).json({ message: "Success", result: result })
            } else {
                res.status(201).json({ message: "failed", result: result })
            }
        } else {
            res.status(201).json({ message: "failed", result: result })
        }
    })
})

userRoute.post('/edit/:id',upload.single("image"),async function(req,res){
    try{
        const user=await userModel.findOneAndUpdate({_id:req.params.id},{
            username:req.body.username,
            name:req.body.name,
            bio:req.body.bio
        },{new:true})
        if(req.file){
            user.profileImage=req.file.filename
        }
        await user.save();
        res.status(200).json({message:"Edit success",result:user})
    }catch(err){
        res.status(201).json({message:"Edit Failed"})
    }
})

userRoute.get('/profilePost/:id',async function(req,res){
    try{
        const user=await userModel.findOne({_id:req.params.id}).populate('post')
        res.status(200).json({message:"Success",result:user})
    }catch{
        res.status(201).json({message:"Failed"})
    }
})

userRoute.get('/search/:key',async function(req,res){
    const user=await userModel.find({
        '$or':[
            {name:{$regex:req.params.key}},
            {username:{$regex:req.params.key}},
        ]
    })
    res.status(200).json({message:"Success",result:user})
})


module.exports = userRoute;