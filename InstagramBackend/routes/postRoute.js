const express=require('express');
const postRoute=express.Router();
const postModel=require('../mongoDb/postModel')
const userModel=require('../mongoDb/userModel')
const upload=require('./multer')

postRoute.post('/upload/:id',upload.single("postImg"),async function(req,res){
        try{
                const user=await userModel.findOne({_id:req.params.id}).populate('post')
                const post=new postModel({
                    caption:req.body.caption?req.body.caption:"",
                    postImage:req.file.filename,
                    user:user._id
                })
                await post.save()
                user.post.unshift(post._id);
                await user.save();
                res.status(200).json({message:"Success",result:user})
        }catch{
                res.status(201).json({message:"Failed"})
        }
})

postRoute.get('/allposts',async function(req,res){
        try{
                const post=await postModel.find().populate('user')
                res.status(200).json({message:"Success",result:post})
        }catch{
                res.status(201).json({message:"Failed"})
        }
})

postRoute.get('/like/post/:user/:post',async function(req,res){
        const user=await userModel.findOne({_id:req.params.user})
        const post=await postModel.findOne({_id:req.params.post})
        if(post.likes.indexOf(user._id)===-1){
                post.likes.push(user._id)
        }else{
                post.likes.splice(post.likes.indexOf(user._id,1))
        }
        await post.save()
        res.status(200).json({message:"Success",result:post})
})

module.exports=postRoute;