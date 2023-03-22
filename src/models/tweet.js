const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},{
    timestamps:true
})

tweetSchema.virtual('tweetedBy').get(function process(){
    return `${this.content} \nTweeted by ${this.userEmail}`
})

const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;