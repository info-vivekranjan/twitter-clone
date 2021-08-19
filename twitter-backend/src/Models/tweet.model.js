const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    postTweet: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    imgUrl: { type: String }
},
    {
        versionKey: false,
        timestamps: true
    })


const Tweet = mongoose.model("postTweet", tweetSchema);

module.exports = Tweet