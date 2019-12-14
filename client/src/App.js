import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import BookSearch from "./components/BookSearch/BookSearch";
import BookResults from "./components/BookResults/BookResults";
import './App.css';

class App extends Component {

  state = {
    bookSearch: "",
    booksData: []
  }

  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleBookSearch = event => {
    event.preventDefault();
    API.getBookResults(this.state.bookSearch).then(res => this.setState({ booksData: res.data.items }))
    console.log(this.state.booksData);
  }

  saveBook = event => {
    event.preventDefault();
    var savedBookData = {
      title: "New Title",
      author: "New Author",
      link: "https://www.google.com",
      imageURL: "https://www.google.com",
      description: "Here's a new book for you!"
    }
    API.saveBook(savedBookData).then(res => res.send(res)).catch(err => console.log(err));;
    console.log("Clicked saved book!");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Google Books Search</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">Search</a>
              <a className="nav-item nav-link" href="/saved">Saved</a>
            </div>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Google Books Search</h1>
            <p className="lead">Search for books that are available on <a href="https://books.google.com/">Google Books</a></p>
          </div>
        </div>
        <div>
        </div>
            <div className="container">
              <row>
                <h4>Search for Books</h4>
                <BookSearch
                  handleSearchChange={this.handleSearchChange}
                  handleBookSearch={this.handleBookSearch}
                />
              </row>
              <row>
                <h3>Results</h3>
                {this.state.booksData.map(book => (
                  <BookResults
                    volumeInfo={book.volumeInfo}
                    searchInfo={book.searchInfo}
                    saveBook={this.saveBook}
                  />
                ))
                }
              </row>
            </div>
          }
      </div>
    );
  }
}
export default App;
