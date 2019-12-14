import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead">Search for books that are available on <a href="https://books.google.com/">Google Books</a></p>
            </div>
        </div>
    )
}

export default Jumbotron;