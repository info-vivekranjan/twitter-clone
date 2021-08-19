const mongoose = require("mongoose");

const connect = () => mongoose.connect("mongodb+srv://vivekRanjan:twitter@2540@cluster0.9tow1.mongodb.net/Twitter?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

module.exports = connect