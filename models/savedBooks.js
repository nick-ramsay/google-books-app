const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedBookSchema = new Schema({
    title: { type: String },
    author: { type: Array },
    link: {type: String},
    imageURL: {type: String},
    description: {type: String}
})

const SavedBooks = mongoose.model("savedBooks", savedBookSchema);

module.exports = SavedBooks;