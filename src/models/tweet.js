const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250,'Tweet cannot be of more than 250 characters!']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
},{
    timestamps:true
});

// tweetSchema.virtual('tweetedBy').get(function process(){
//     return `${this.content} \nTweeted by ${this.userEmail}`
// })

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;