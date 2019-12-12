import axios from "axios";

require("dotenv").config();

const keys = require("../keys.js");

export default {
    getBookResults: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key="+keys.google_books.apiKey)
    }
};