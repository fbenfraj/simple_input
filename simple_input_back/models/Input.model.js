const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inputSchema = new Schema ({
    value: { type: String }
}, {
    collection: "inputs"
});

const Input = mongoose.model("Input", inputSchema);

module.exports = Input;