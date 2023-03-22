const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweetRepository');
const Comment = require('./models/comment');

const app = express();

const tweetRepository = new TweetRepository();


const PORT = 4000;
app.listen(PORT, async ()=>{
    console.log(`Listening to port ${PORT}`);
    await connect();
    console.log('Database connected!');
    // const tweet = await tweetRepository.getTweet('64125a0aef98b33e89b25bf7');
    // console.log(tweet);
    // console.log(tweet.tweetedBy);
})