const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();


console.log("Listening on port 8000");
app.listen(8000);

app.get("/ping", (req, res) => {
    res.send("I'm alive!");
});

mongoose.connect('mongodb://localhost:27017');
mongoose.Promise = global.Promise;

const InputSchema = new Schema({
    value: String
});



router.post("/input", function(req, res) {
    res.send({
        type: "POST",
        value: req.body.value
    });
});

module.exports = Input;