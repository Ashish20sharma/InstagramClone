const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postImage: {
        type: String,
        required: true
    },
    caption: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }, 
    date: {
        type: Date,
        default: Date.now()
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
});

module.exports = new mongoose.model("post", postSchema);