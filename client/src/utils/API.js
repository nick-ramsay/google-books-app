import axios from "axios";

require("dotenv").config();

const keys = require("../keys.js");

export default {
    getBookResults: function (query) {
        console.log(process.env.REACT_APP_TESTKEY);
        console.log(keys.google_books)
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key="+keys.google_books.apiKey)
    }
};