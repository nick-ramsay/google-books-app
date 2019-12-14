import axios from "axios";

require("dotenv").config();

const apiUrl = process.env.NODE_ENV === 'production'? '' : '//localhost:3001'

const keys = require("../keys.js");

export default {
    getBookResults: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key="+keys.google_books.apiKey)
    },
    getSavedBooks: function() {
        console.log("Called get saved books API!");
        return axios.get(apiUrl + "/api/books/saved");
    },
    saveBook: function(bookData) {
        console.log(bookData);
        return axios({method:"post", url: apiUrl + "/api/books", data: bookData })
    }
};