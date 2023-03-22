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
})