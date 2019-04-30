const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Input = require("./models/Input.model");

const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: false
}));

(function initBDD() {
    const url = "mongodb://localhost:23456/simple_input";
    mongoose.connection.on("open", () => {
        console.log("Connected to MongoDB");
    });
    mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        if(err) console.error("initBDD.connect: ", err);
    });
})();

app.get('/isAlive', (req, res) => {
    res.send("I'm alive!");
});

app.post("/input", (req, res) => {
    console.log(req.body.value);
    const input = new Input({
        value: req.body.value
    });
    input.save(function(err, message) {
       if(err) return res.status(500);
       return res.status(200).json({ success: true });
    });
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
});