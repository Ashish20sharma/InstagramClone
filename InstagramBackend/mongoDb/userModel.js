const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: String,
    profileImage: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }]
})

module.exports = new mongoose.model("user", userSchema);