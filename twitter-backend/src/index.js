const express = require("express");
const connect = require("./Config/db")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const usersController = require("./Controller/users.controller")
app.use('/users', usersController);


app.listen(5000, async () => {

    await connect()
    console.log("Server is running on port 5000...");

})