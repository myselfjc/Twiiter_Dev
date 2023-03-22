const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250,'Tweet cannot be of more than 250 characters!']
    },
    userEmail: {
        type: String
    }
},{
    timestamps:true
})

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;