const express = require("express");
const Users = require("../Models/users.model")

const router = express.Router();


router.post("/register", async (req, res) => {
    const user = await Users.create(req.body)
    return res.status(201).json({ data: user })
})
router.get("/register", async (req, res) => {
    const users = await Users.find()
    return res.status(200).json({ data: users })
})


router.post("/login", async (req, res) => {

    const { email, password } = await req.body;

    Users.findOne({ email: email }, (err, user) => {

        if (user) {

            if (password == user.password) {
                res.status(201).send({ message: "Login Successful", data: user, name: user.name })
            } else {
                res.send({ message: "Wrong Password" })
            }

        } else {
            res.send({ message: "User has not registered" })
        }


    })

})


module.exports = router