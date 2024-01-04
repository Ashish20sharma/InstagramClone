const mongoose=require('mongoose')

const connectDb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/insta')
    console.log("connect to DB")
}
connectDb();
module.exports=connectDb;