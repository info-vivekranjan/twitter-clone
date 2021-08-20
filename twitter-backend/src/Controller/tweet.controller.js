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

router.delete("/:id", async (req, res) => {

    const deleteTweets = await Tweet.findByIdAndDelete(req.params.id)

    return res.status(204).json({ data: deleteTweets })

})



module.exports = router
