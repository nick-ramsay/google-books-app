const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedBookSchema = new Schema({
    title: { type: String },
    author: { type: String },
    link: {type: String},
    imageURL: {type: String},
    description: {type: String}
})

const savedBooks = mongoose.model("savedBooks", savedBookSchema);

module.exports = savedBooks;