const express = require("express");

const router = express.Router()

const Tweet = require("../Models/tweet.model")

router.post("/", async (req, res) => {

    const postTweet = await Tweet.create(req.body);

    return res.status(201).json({ data: postTweet })

})

router.get("/", async (req, res) => {

    const getTweets = await Tweet.find().populate("userId");

    return res.status(200).json({ data: getTweets })

})


module.exports = router
