const Tweet = require('../models/tweet');

class TweetRepository {
    async createTweet(data) {
        try {
            const tweet = await Tweet.create(data).lean();
            return tweet;
        }
        catch (error) {
            console.log(error);
            throw { error }
        }
    }

    async getAllTweets(offSet,limit){
        try {
            const tweets = await Tweet.find().skip(offSet).limit(limit).lean();
            return tweets;
        }
        catch (error) {
            console.log(error);
            throw { error }
        }
    }

    async getTweet(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        }
        catch (error) {
            console.log(error);
            throw { error }
        }
    }

    async getTweetWithComments(id){
        try{
            const tweets = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweets;
        }
        catch (error) {
            console.log(error);
            throw { error }
        }
    }

    async updateTweet(id, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(id, data,{
                new:true
            }).lean();
            return tweet;
        }
        catch (error) {
            console.log(error);
            throw { error }
        }
    }

    async deleteTweet(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id).lean();
            return tweet;
        }
        catch (error) {
            console.log(error);
            throw { error }
        }
    }
}

module.exports = TweetRepository;