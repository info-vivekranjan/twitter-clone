const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        username: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        profilePic: { type: String }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Users = mongoose.model('user', usersSchema);

module.exports = Users