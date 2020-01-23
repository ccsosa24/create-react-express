import React from "react";
import Axios from "axios";

export default {
    getBooks: function() {
        return Axios.get("/api/books");
    },
    getBook: function (id) {
        return Axios.get("/api/books/" + id);
    },
    deleteBook: function(id){
        return Axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData) {
        return Axios.post("/api/books", bookData);
    },
    searchBooks: function(bookData) {
        return Axios.get("https://www.googleapis.com/books/v1/volumes?q="+bookData+"&key=AIzaSyDn_gGlkiJz-gKiq9YvzOwi9ggQN8Nq13Q")
    }
};